import React from 'react';
import Hero from '../components/Hero';
import StatsStrip from '../components/StatsStrip';
import DomainsSection from '../components/DomainsSection';
import MainContentCards from '../components/MainContentCards';
import JoinSection from '../components/JoinSection';

export default function HomePage({
  onNavigate,
  onOpenEvent,
  onOpenTeam,
  onOpenArticle,
  onOpenDomain,
  onApply
}) {
  return (
    <div className="relative">
      {/* 1. Hero Section */}
      <Hero
        onExploreEvents={() => onNavigate('events')}
        onKnowInfinity={() => onNavigate('about')}
        activeSection="01"
        onSelectSection={(sectionId) => onNavigate(sectionId)}
      />

      {/* 2. Glassmorphism Statistics Strip */}
      <StatsStrip />

      {/* 3. Technology Domains */}
      <DomainsSection onSelectDomain={onOpenDomain} />

      {/* 4. Three-Column Main Content Cards (Featured Event, Our Team, Tech Bulletin) */}
      <MainContentCards
        onOpenEvent={onOpenEvent}
        onOpenTeam={onOpenTeam}
        onOpenArticle={onOpenArticle}
      />

      {/* 5. Join Infinity Recruitment Banner */}
      <JoinSection onApply={onApply} />
    </div>
  );
}
