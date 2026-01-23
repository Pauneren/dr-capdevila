import { useEffect, useState } from 'react';

interface UserInteraction {
  page: string;
  timestamp: number;
  duration: number;
  clicks: string[];
  scrollDepth: number;
}

interface UserPreferences {
  favoritePages: string[];
  visitFrequency: { [key: string]: number };
  lastVisit: number;
  totalVisits: number;
}

export const useUserAnalytics = () => {
  const [interactions, setInteractions] = useState<UserInteraction[]>([]);
  const [preferences, setPreferences] = useState<UserPreferences>({
    favoritePages: [],
    visitFrequency: {},
    lastVisit: Date.now(),
    totalVisits: 0
  });

  useEffect(() => {
    // Load existing data from localStorage
    const savedData = localStorage.getItem('userAnalytics');
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setInteractions(parsed.interactions || []);
      setPreferences(parsed.preferences || preferences);
    }
  }, []);

  const trackPageView = (page: string) => {
    const newInteraction: UserInteraction = {
      page,
      timestamp: Date.now(),
      duration: 0,
      clicks: [],
      scrollDepth: 0
    };

    setInteractions(prev => [...prev, newInteraction]);
    
    // Update preferences
    setPreferences(prev => ({
      ...prev,
      visitFrequency: {
        ...prev.visitFrequency,
        [page]: (prev.visitFrequency[page] || 0) + 1
      },
      lastVisit: Date.now(),
      totalVisits: prev.totalVisits + 1
    }));

    // Save to localStorage
    saveAnalytics();
  };

  const trackClick = (element: string) => {
    setInteractions(prev => {
      const updated = [...prev];
      if (updated.length > 0) {
        updated[updated.length - 1].clicks.push(element);
      }
      return updated;
    });
    saveAnalytics();
  };

  const trackScrollDepth = (depth: number) => {
    setInteractions(prev => {
      const updated = [...prev];
      if (updated.length > 0) {
        updated[updated.length - 1].scrollDepth = Math.max(
          updated[updated.length - 1].scrollDepth, 
          depth
        );
      }
      return updated;
    });
    saveAnalytics();
  };

  const saveAnalytics = () => {
    localStorage.setItem('userAnalytics', JSON.stringify({
      interactions,
      preferences
    }));
  };

  const getFavoritePages = () => {
    const sorted = Object.entries(preferences.visitFrequency)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3)
      .map(([page]) => page);
    return sorted;
  };

  const getPersonalizedRecommendations = () => {
    const favorites = getFavoritePages();
    const recommendations = [];

    if (favorites.includes('/')) {
      recommendations.push({ title: 'Nýjustu fréttir', path: '/frettir' });
    }
    if (favorites.includes('/olafskirkja')) {
      recommendations.push({ title: 'Ingjalsholskirkja', path: '/ingjalsholskirkja' });
    }
    if (favorites.includes('/helgihald')) {
      recommendations.push({ title: 'Athafnir', path: '/athafnir' });
    }

    return recommendations;
  };

  return {
    interactions,
    preferences,
    trackPageView,
    trackClick,
    trackScrollDepth,
    getFavoritePages,
    getPersonalizedRecommendations
  };
};
