import { useState, useEffect } from 'react';

interface ContentItem {
  id: string;
  title: string;
  content: string;
  type: 'sermon' | 'event' | 'news' | 'announcement';
  priority: 'high' | 'medium' | 'low';
  targetAudience: string[];
  expiryDate?: number;
  imageUrl?: string;
  createdAt: number;
}

interface DynamicContent {
  announcements: ContentItem[];
  upcomingEvents: ContentItem[];
  featuredContent: ContentItem[];
}

export const useDynamicContent = () => {
  const [content, setContent] = useState<DynamicContent>({
    announcements: [],
    upcomingEvents: [],
    featuredContent: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching dynamic content
    fetchDynamicContent();
  }, []);

  const fetchDynamicContent = async () => {
    setLoading(true);
    
    // Simulate API call - in real app, this would be a backend API
    setTimeout(() => {
      const mockContent: DynamicContent = {
        announcements: [
          {
            id: '1',
            title: 'Sérstök jólamessa',
            content: 'Velkomin í sérstöku jólamessu í Olafskirkju þann 24. desember kl. 14:00',
            type: 'announcement',
            priority: 'high',
            targetAudience: ['all'],
            expiryDate: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days
            createdAt: Date.now()
          },
          {
            id: '2',
            title: 'Barnastarf vetrarfrí',
            content: 'Barnastarf í páskafrí frá 28. mars til 6. apríl',
            type: 'announcement',
            priority: 'medium',
            targetAudience: ['parents', 'children'],
            createdAt: Date.now()
          }
        ],
        upcomingEvents: [
          {
            id: '3',
            title: 'Fermingar 2026',
            content: 'Næsta fermingarhald verður í maí. Skráning er opin.',
            type: 'event',
            priority: 'high',
            targetAudience: ['youth', 'parents'],
            imageUrl: '/images/fermingar.jpg',
            createdAt: Date.now()
          },
          {
            id: '4',
            title: 'Safnaðarmót',
            content: 'Árleg safnaðarmót í Ingjalshöll þann 15. febrúar',
            type: 'event',
            priority: 'medium',
            targetAudience: ['members'],
            createdAt: Date.now()
          }
        ],
        featuredContent: [
          {
            id: '5',
            title: 'Nýr prestur í sókninni',
            content: 'Við fagnaðum tilkomu nýs prests í sókninni í síðustu viku.',
            type: 'news',
            priority: 'high',
            targetAudience: ['all'],
            imageUrl: '/images/church1.jpg',
            createdAt: Date.now()
          }
        ]
      };

      setContent(mockContent);
      setLoading(false);
    }, 1000);
  };

  const getPersonalizedContent = (userPreferences: any) => {
    const { favoritePages, visitFrequency } = userPreferences;
    
    // Filter content based on user behavior
    const personalizedAnnouncements = content.announcements.filter(item => {
      // Remove expired content
      if (item.expiryDate && item.expiryDate < Date.now()) {
        return false;
      }
      
      // Prioritize based on user interests
      if (favoritePages.includes('/aeskulydsstarf') && item.targetAudience.includes('children')) {
        return true;
      }
      if (favoritePages.includes('/fermingar') && item.targetAudience.includes('youth')) {
        return true;
      }
      
      return item.priority === 'high' || item.targetAudience.includes('all');
    });

    return {
      ...content,
      announcements: personalizedAnnouncements
    };
  };

  const addContent = (newItem: Omit<ContentItem, 'id' | 'createdAt'>) => {
    const item: ContentItem = {
      ...newItem,
      id: Date.now().toString(),
      createdAt: Date.now()
    };

    setContent(prev => ({
      ...prev,
      [newItem.type === 'announcement' ? 'announcements' : 
       newItem.type === 'event' ? 'upcomingEvents' : 'featuredContent']: 
       [...prev[newItem.type === 'announcement' ? 'announcements' : 
             newItem.type === 'event' ? 'upcomingEvents' : 'featuredContent'], item]
    }));
  };

  const updateContent = (id: string, updates: Partial<ContentItem>) => {
    setContent(prev => {
      const updated = { ...prev };
      
      ['announcements', 'upcomingEvents', 'featuredContent'].forEach(key => {
        updated[key as keyof DynamicContent] = (prev[key as keyof DynamicContent] as ContentItem[]).map(item =>
          item.id === id ? { ...item, ...updates } : item
        );
      });
      
      return updated;
    });
  };

  const removeExpiredContent = () => {
    setContent(prev => {
      const now = Date.now();
      return {
        announcements: prev.announcements.filter(item => 
          !item.expiryDate || item.expiryDate > now
        ),
        upcomingEvents: prev.upcomingEvents,
        featuredContent: prev.featuredContent
      };
    });
  };

  return {
    content,
    loading,
    getPersonalizedContent,
    addContent,
    updateContent,
    removeExpiredContent,
    refreshContent: fetchDynamicContent
  };
};
