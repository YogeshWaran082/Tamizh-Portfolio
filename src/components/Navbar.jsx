import React, { useState, useEffect, useRef } from 'react';
import { Download, ArrowRight, Menu, X, Sparkles } from 'lucide-react';
import gsap from 'gsap';

const NAV_ITEMS = [
  { id: 'hero', number: '01', label: 'HOME' },
  { id: 'about', number: '02', label: 'ABOUT' },
  { id: 'skills', number: '03', label: 'SKILLS' },
  { id: 'experience', number: '04', label: 'EXPERIENCE' },
  { id: 'projects', number: '05', label: 'PROJECTS' },
  { id: 'dashboard', number: '06', label: 'DATA' },
  { id: 'contact', number: '07', label: 'CONTACT' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const menuTriggerRef = useRef(null);

  // Entrance animation on mount
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduced && headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
      );
    }
  }, []);

  // Scroll spy & sticky detection
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'experience', 'projects', 'dashboard', 'contact'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (window.scrollY + windowHeight >= docHeight - 50) {
        setActiveSection('contact');
        setIsScrolled(window.scrollY > 30);
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }

      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard accessibility & scroll lock for mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        if (menuTriggerRef.current) {
          menuTriggerRef.current.focus();
        }
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <>
      {/* Floating Sticky Header Container */}
      <header
        ref={headerRef}
        style={{
          position: 'fixed',
          top: isScrolled ? '12px' : '18px',
          left: 0,
          right: 0,
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          padding: '0 16px',
          pointerEvents: 'none',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Luxury Glass Capsule Pill Chassis */}
        <div
          className="luxury-nav-chassis"
          style={{
            pointerEvents: 'auto',
            width: '100%',
            maxWidth: '1280px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: isScrolled ? 'rgba(10, 11, 14, 0.92)' : 'rgba(12, 13, 16, 0.82)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderBottom: '1px solid rgba(220, 34, 40, 0.35)',
            borderRadius: '9999px',
            boxShadow: isScrolled
              ? '0 12px 36px rgba(0, 0, 0, 0.75), 0 0 24px rgba(200, 16, 30, 0.15)'
              : '0 8px 30px rgba(0, 0, 0, 0.6), 0 0 16px rgba(200, 16, 30, 0.1)',
            padding: isScrolled ? '7px 18px 7px 14px' : '9px 22px 9px 16px',
            transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Subtle Ambient Red Glow Bloom Underneath */}
          <div
            style={{
              position: 'absolute',
              bottom: '-2px',
              left: '15%',
              right: '15%',
              height: '8px',
              background: 'radial-gradient(ellipse at 50% 100%, rgba(224, 34, 40, 0.25) 0%, transparent 80%)',
              pointerEvents: 'none',
              filter: 'blur(6px)',
            }}
            aria-hidden="true"
          />

          {/* LEFT: BRAND IDENTITY */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, 'hero')}
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              color: 'inherit',
              flexShrink: 0,
              padding: '2px 4px',
            }}
            aria-label="Tamizhvanan A Portfolio Home"
          >
            <img
              src="/images/navbar-logo.png"
              alt="Tamizhvanan Portfolio"
              className="luxury-brand-logo"
            />
          </a>

          {/* CENTER: CLEAN EDITORIAL NAVIGATION ITEMS */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
            className="luxury-desktop-menu"
            aria-label="Main Navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`luxury-nav-tab ${isActive ? 'is-active' : ''}`}
                  style={{
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    position: 'relative',
                    cursor: 'pointer',
                    padding: isActive ? '6px 14px' : '6px 12px',
                    borderRadius: '9999px',
                    background: isActive
                      ? 'rgba(200, 16, 30, 0.16)'
                      : 'transparent',
                    border: isActive
                      ? '1px solid rgba(224, 34, 40, 0.42)'
                      : '1px solid transparent',
                    boxShadow: isActive
                      ? '0 2px 10px rgba(200, 16, 30, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                      : 'none',
                    transition: 'all 0.22s ease',
                  }}
                >
                  {/* Glowing Micro-dot when Active */}
                  {isActive && (
                    <span
                      style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: '#FF3B42',
                        boxShadow: '0 0 6px 1.5px #E02228',
                        flexShrink: 0,
                      }}
                      aria-hidden="true"
                    />
                  )}

                  {/* Section Label */}
                  <span
                    style={{
                      fontSize: '0.74rem',
                      letterSpacing: '0.08em',
                      color: isActive ? '#FFFFFF' : '#AAA6A5',
                      fontWeight: isActive ? 700 : 500,
                      lineHeight: 1,
                      transition: 'color 0.2s ease',
                    }}
                    className="luxury-nav-label"
                  >
                    {item.label}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* RIGHT: ACTION CTAS */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              flexShrink: 0,
            }}
            className="luxury-actions-row"
          >
            {/* Resume Button */}
            <a
              href="/documents/Tamizhvanan_A_Resume.pdf"
              download="Tamizhvanan_A_Resume.pdf"
              className="luxury-resume-btn"
              style={{
                textDecoration: 'none',
                height: '36px',
                padding: '0 14px',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                color: '#F5F1EF',
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              title="Download Resume (PDF)"
            >
              <Download size={13} color="#E02228" className="resume-icon" />
              <span>RESUME</span>
            </a>

            {/* Let's Connect Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="luxury-connect-btn"
              style={{
                textDecoration: 'none',
                height: '36px',
                padding: '0 16px',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #C8101E 0%, #9B0E17 100%)',
                border: '1px solid rgba(255, 80, 90, 0.35)',
                boxShadow: '0 0 16px rgba(200, 16, 30, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                color: '#FFFFFF',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <span>LET'S CONNECT</span>
              <ArrowRight size={13} color="#FFFFFF" className="connect-arrow" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              ref={menuTriggerRef}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
              aria-expanded={mobileMenuOpen}
              className="luxury-hamburger-btn"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '50%',
                color: '#FFFFFF',
                width: '38px',
                height: '38px',
                cursor: 'pointer',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
              }}
            >
              {mobileMenuOpen ? <X size={18} color="#E02228" /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Luxury Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(8, 9, 11, 0.98)',
            backdropFilter: 'blur(28px)',
            WebkitBackdropFilter: 'blur(28px)',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '2rem 1.75rem',
            overflowY: 'auto',
          }}
        >
          {/* Top Bar inside Drawer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              paddingBottom: '1.25rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="/images/navbar-logo.png"
                alt="Tamizhvanan Portfolio"
                style={{
                  height: '34px',
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Mobile Menu"
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '50%',
                color: '#FFFFFF',
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Staggered Links */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
              margin: 'auto 0',
              padding: '1.5rem 0',
            }}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  style={{
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    background: isActive ? 'rgba(200, 16, 30, 0.14)' : 'transparent',
                    border: isActive ? '1px solid rgba(220, 34, 40, 0.35)' : '1px solid transparent',
                    color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.65rem',
                    letterSpacing: '0.04em',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <span style={{ fontSize: '0.78rem', color: isActive ? '#E02228' : '#777375', fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                      {item.number}
                    </span>
                    <span style={{ fontWeight: isActive ? 700 : 500 }}>{item.label}</span>
                  </span>
                  {isActive && (
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#E02228', boxShadow: '0 0 6px #E02228' }} />
                  )}
                </a>
              );
            })}
          </div>

          {/* Action CTAs in Mobile Drawer */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              paddingTop: '1.25rem',
            }}
          >
            <a
              href="/documents/Tamizhvanan_A_Resume.pdf"
              download="Tamizhvanan_A_Resume.pdf"
              style={{
                textDecoration: 'none',
                height: '44px',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                color: '#FFFFFF',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
              }}
            >
              <Download size={15} color="#E02228" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              style={{
                textDecoration: 'none',
                height: '44px',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #C8101E 0%, #8E0A14 100%)',
                boxShadow: '0 0 16px rgba(200, 16, 30, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                color: '#FFFFFF',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
              }}
            >
              <span>LET'S CONNECT</span>
              <ArrowRight size={15} color="#FFFFFF" />
            </a>
          </div>
        </div>
      )}

      {/* Scoped CSS for Luxury Interactions */}
      <style>{`
        /* Hover states for Inactive nav tabs */
        .luxury-nav-tab:not(.is-active):hover {
          background: rgba(255, 255, 255, 0.05) !important;
          color: #FFFFFF !important;
        }
        .luxury-nav-tab:not(.is-active):hover .luxury-nav-label {
          color: #FFFFFF !important;
        }

        /* Brand Logo Interaction */
        .luxury-brand-logo {
          height: 38px;
          width: auto;
          max-width: 175px;
          object-fit: contain;
          display: block;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), filter 0.25s ease;
          filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.6));
        }

        .luxury-brand-logo:hover {
          transform: scale(1.03);
          filter: drop-shadow(0 0 14px rgba(224, 34, 40, 0.55)) drop-shadow(0 0 6px rgba(212, 175, 55, 0.45));
        }

        /* Hover state for Resume Button */
        .luxury-resume-btn:hover {
          background: rgba(200, 16, 30, 0.1) !important;
          border-color: rgba(220, 34, 40, 0.4) !important;
        }
        .luxury-resume-btn:hover .resume-icon {
          transform: translateY(1.5px);
          transition: transform 0.2s ease;
        }

        /* Hover state for Connect Button */
        .luxury-connect-btn:hover {
          box-shadow: 0 0 24px rgba(224, 34, 40, 0.6) !important;
          filter: brightness(1.08);
        }
        .luxury-connect-btn:hover .connect-arrow {
          transform: translateX(2.5px);
          transition: transform 0.2s ease;
        }

        /* Breakpoints */
        @media (max-width: 1100px) {
          .luxury-desktop-menu {
            gap: 0.15rem !important;
          }
          .luxury-nav-tab {
            padding: 5px 9px !important;
          }
          .luxury-nav-label {
            font-size: 0.7rem !important;
          }
        }

        @media (max-width: 960px) {
          .luxury-desktop-menu {
            display: none !important;
          }
          .luxury-resume-btn {
            display: none !important;
          }
          .luxury-connect-btn {
            display: none !important;
          }
          .luxury-hamburger-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
