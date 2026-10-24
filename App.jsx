import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { SkillsSection } from './components/SkillsSection';
import { Reviews } from './components/Reviews';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { Bell, CheckCircle2, AlertCircle, Info, Sparkles } from 'lucide-react';

const MainLayout = () => {
  const { currentView, toast } = useApp();

  return (
    <div className="app-container">
      
      {/* View Switcher: Client Website vs Dedicated Admin Portal */}
      {currentView === 'admin' ? (
        <AdminDashboard />
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <Services />
            <Portfolio />
            <SkillsSection />
            <Reviews />
            <FaqSection />
            <ContactSection />
          </main>
          <Footer />
        </>
      )}

      {/* Global Interactive Modals */}
      <OrderModal />

      {/* Real-Time Toast Notification Banner */}
      {toast && (
        <div className="toast-container">
          <div className={`toast-item ${toast.type}`}>
            {toast.type === 'order' ? (
              <Bell size={20} color="#fbbf24" style={{ flexShrink: 0 }} />
            ) : toast.type === 'success' ? (
              <CheckCircle2 size={20} color="#34d399" style={{ flexShrink: 0 }} />
            ) : (
              <Info size={20} color="#818cf8" style={{ flexShrink: 0 }} />
            )}
            <div style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 600 }}>
              {toast.message}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
