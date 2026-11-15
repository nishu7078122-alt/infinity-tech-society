import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import IntroAnimation from './components/IntroAnimation';
import SearchModal from './components/SearchModal';
import EventDetailsModal from './components/EventDetailsModal';
import ArticleDetailsModal from './components/ArticleDetailsModal';
import DomainDetailsModal from './components/DomainDetailsModal';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import TeamPage from './pages/TeamPage';
import BulletinPage from './pages/BulletinPage';
import GalleryPage from './pages/GalleryPage';
import JoinPage from './pages/JoinPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [introCompleted, setIntroCompleted] = useState(false);
  const [activePage, setActivePage] = useState('home');
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedDomain, setSelectedDomain] = useState(null);

  // Check sessionStorage so repeat visits don't force intro, but allow replay
  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('infinity_intro_seen');
    if (hasSeenIntro === 'true') {
      setIntroCompleted(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setIntroCompleted(true);
    sessionStorage.setItem('infinity_intro_seen', 'true');
  };

  const handleReplayIntro = () => {
    setIntroCompleted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to top on page change
  const handleNavigate = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050807] text-[#F5F7F4] flex flex-col font-sans selection:bg-[#B6FF39] selection:text-black">
      {/* 1. Cinematic 3D Intro Loading Animation */}
      {!introCompleted && (
        <IntroAnimation onComplete={handleIntroComplete} />
      )}

      {/* 2. Global Sticky Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={handleNavigate}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* 3. Main Page Content View */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenEvent={(evt) => setSelectedEvent(evt)}
            onOpenTeam={() => handleNavigate('team')}
            onOpenArticle={(art) => setSelectedArticle(art)}
            onOpenDomain={(dom) => setSelectedDomain(dom)}
            onApply={() => handleNavigate('join')}
          />
        )}

        {activePage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {activePage === 'events' && (
          <EventsPage onSelectEvent={(evt) => setSelectedEvent(evt)} />
        )}

        {activePage === 'team' && (
          <TeamPage onApply={() => handleNavigate('join')} />
        )}

        {activePage === 'bulletin' && (
          <BulletinPage onSelectArticle={(art) => setSelectedArticle(art)} />
        )}

        {activePage === 'gallery' && (
          <GalleryPage />
        )}

        {activePage === 'join' && (
          <JoinPage />
        )}

        {activePage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* 4. Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onReplayIntro={handleReplayIntro}
      />

      {/* 5. Global Search Modal (Ctrl+K or header click) */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={handleNavigate}
        onSelectEvent={(evt) => setSelectedEvent(evt)}
        onSelectArticle={(art) => setSelectedArticle(art)}
      />

      {/* 6. Event Details Modal */}
      <EventDetailsModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />

      {/* 7. Article Details Reader Modal */}
      <ArticleDetailsModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      {/* 8. Domain Details Modal */}
      <DomainDetailsModal
        domain={selectedDomain}
        onClose={() => setSelectedDomain(null)}
        onApplyDomain={(domainId) => {
          setSelectedDomain(null);
          handleNavigate('join');
        }}
      />
    </div>
  );
}
