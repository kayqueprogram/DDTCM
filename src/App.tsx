import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { ModList } from './pages/ModList';
import { ModDetails } from './pages/ModDetails';
import { Aviso } from './pages/Aviso';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const AppContent: React.FC = () => {
  const location = useLocation();

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="site-wrapper">
      <ScrollToTop />

      {/* Header Section */}
      <header className="header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-3">
              <div className="header__logo">
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img
                    className="header__brand-icon"
                    src="/css/favicon/favicon_io/android-chrome-192x192.png"
                    alt="Doki Doki Translate Club"
                    style={{ width: '40px', height: '40px' }}
                  />
                  <span className="header__brand" style={{ fontSize: '22px', fontWeight: 900, letterSpacing: '1px', color: '#ffffff' }}>
                    DDTC
                  </span>
                </Link>
              </div>
            </div>
            
            <div className="col-lg-9 col-md-9">
              <div className="header__nav" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <nav className="header__menu mobile-menu">
                  <ul style={{ display: 'flex', gap: '25px', listStyle: 'none', margin: 0, padding: 0 }}>
                    <li className={location.pathname === '/' ? 'active' : ''}>
                      <Link to="/">Home</Link>
                    </li>
                    <li className={location.pathname === '/mods' ? 'active' : ''}>
                      <Link to="/mods">Visual Novels</Link>
                    </li>
                    <li className={location.pathname === '/aviso' ? 'active' : ''}>
                      <Link to="/aviso">Aviso</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Pages */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mods" element={<ModList />} />
          <Route path="/mod/:slug" element={<ModDetails />} />
          <Route path="/aviso" element={<Aviso />} />
        </Routes>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <div className="page-up">
          <a href="#" id="scrollToTopButton" onClick={handleScrollToTop}>
            <span className="arrow_carrot-up">
              <ArrowUp size={20} style={{ display: 'inline', color: '#fff' }} />
            </span>
          </a>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="footer__logo">
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img
                    className="header__brand-icon"
                    src="/css/favicon/favicon_io/android-chrome-192x192.png"
                    alt="Doki Doki Translate Club"
                    style={{ width: '32px', height: '32px', filter: 'grayscale(100%)' }}
                  />
                  <span className="header__brand" style={{ fontSize: '18px', fontWeight: 800, color: 'rgba(255,255,255,0.6)' }}>
                    DDTC Memorial
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer__nav">
                <ul style={{ display: 'flex', justifyContent: 'center', gap: '20px', listStyle: 'none', margin: 0, padding: 0 }}>
                  <li><Link to="/">Homepage</Link></li>
                  <li><Link to="/mods">Lista de Mods</Link></li>
                  <li><Link to="/aviso">Aviso</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
