import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserAnalytics } from '../hooks/useUserAnalytics';
import { useDynamicContent } from '../hooks/useDynamicContent';
import './IntelligentRecommendations.css';

interface Recommendation {
    id: string;
    title: string;
    description: string;
    type: 'page' | 'content' | 'event';
    path?: string;
    priority: number;
    reason: string;
}

const IntelligentRecommendations: React.FC = () => {
    const { getPersonalizedRecommendations, preferences } = useUserAnalytics();
    const { getPersonalizedContent } = useDynamicContent();
    const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        generateRecommendations();
    }, [preferences]);
    
    const generateRecommendations = () => {
        const userRecs = getPersonalizedRecommendations();
        const personalizedContent = getPersonalizedContent(preferences);
        const allRecs: Recommendation[] = [];
        
        // Add page recommendations based on user behavior
        userRecs.forEach((rec, index) => {
            allRecs.push({
                id: `page-${index}`,
                title: rec.title,
                description: 'Áður hefur þú áhuga á svipuðum efni',
                type: 'page',
                path: rec.path,
                priority: 3,
                reason: 'Byggt á áhugum þínum'
            });
        });
        
        // Add content recommendations
        personalizedContent.announcements.slice(0, 2).forEach((item, index) => {
            allRecs.push({
                id: `content-${index}`,
                title: item.title,
                description: item.content,
                type: 'content',
                priority: item.priority === 'high' ? 5 : 3,
                reason: item.priority === 'high' ? 'Mikilvægt tilkynning' : 'Tengt við áhugasvið þitt'
            });
        });
        
        // Add event recommendations
        personalizedContent.upcomingEvents.slice(0, 1).forEach((item, index) => {
            allRecs.push({
                id: `event-${index}`,
                title: item.title,
                description: item.content,
                type: 'event',
                priority: 4,
                reason: 'Næstu viðburðir í söfnuðinum'
            });
        });
        
        // Sort by priority and take top 3
        const sortedRecs = allRecs
        .sort((a, b) => b.priority - a.priority)
        .slice(0, 3);
        
        setRecommendations(sortedRecs);
        
        // Show recommendations after user has visited at least 2 pages
        if (preferences.totalVisits > 2) {
            setIsVisible(true);
        }
    };
    
    const handleRecommendationClick = (rec: Recommendation) => {
        // Track recommendation clicks for better future suggestions
        console.log('Recommendation clicked:', rec);
    };
    
    if (!isVisible || recommendations.length === 0) {
        return null;
    }
    
    return (
        <section className="intelligent-recommendations">
        <h3>Persónulegar tillögur fyrir þig</h3>
        <div className="recommendations-grid">
        {recommendations.map((rec) => (
            <div key={rec.id} className="recommendation-card">
            <div className="recommendation-header">
            <span className={`recommendation-type ${rec.type}`}>
            {rec.type === 'page' ? 'Síða' : 
                rec.type === 'content' ? 'Tilkynning' : 'Viðburður'}
                </span>
                <span className="recommendation-reason">{rec.reason}</span>
                </div>
                
                <h4>{rec.title}</h4>
                <p>{rec.description}</p>
                
                {rec.path && (
                    <Link 
                    to={rec.path} 
                    className="recommendation-link"
                    onClick={() => handleRecommendationClick(rec)}
                    >
                    Skoða nánar
                    </Link>
                )}
                </div>
            ))}
            </div>
            
            <button 
            className="dismiss-recommendations"
            onClick={() => setIsVisible(false)}
            >
            Fela tillögur
            </button>
            </section>
        );
    };
    
    export default IntelligentRecommendations;
    