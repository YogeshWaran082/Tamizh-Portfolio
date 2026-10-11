import React, { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Download, ArrowDownRight } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import gsap from 'gsap';

export default function HeroSection() {
  const heroRef = useRef(null);
  const circleRef = useRef(null);
  const portraitRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        circleRef.current,
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.4, ease: 'power3.out' }
      );
      gsap.fromTo(
        portraitRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.3, ease: 'power2.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#08090B',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '5.5rem',
        paddingBottom: '3.5rem',
        overflow: 'hidden',
      }}
    >
      {/* Background Architectural Grid Lines */}
      <div className="arch-grid" aria-hidden="true">
        <div className="arch-grid-line-x" style={{ top: '22%' }} />
        <div className="arch-grid-line-x" style={{ top: '78%' }} />
        <div className="arch-grid-line-y" style={{ left: '26%' }} />
        <div className="arch-grid-line-y" style={{ right: '24%' }} />
        <div
          style={{
            position: 'absolute',
            top: '22%',
            left: '26%',
            transform: 'translate(-50%, -50%)',
            color: 'rgba(255,255,255,0.18)',
            fontSize: '11px',
            fontFamily: 'monospace',
          }}
        >
          +
        </div>
        <div
          style={{
            position: 'absolute',
            top: '78%',
            right: '24%',
            transform: 'translate(-50%, -50%)',
            color: 'rgba(255,255,255,0.18)',
            fontSize: '11px',
            fontFamily: 'monospace',
          }}
        >
          +
        </div>
      </div>

      <div className="editorial-container" style={{ position: 'relative', zIndex: 10 }}>
        {/* 3-Column Editorial Grid matching Reference Image 1 exactly */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(320px, 1.25fr) minmax(360px, 1.35fr) minmax(220px, 0.85fr)',
            alignItems: 'center',
            gap: '1.5rem',
            position: 'relative',
          }}
          className="master-hero-grid"
        >
          {/* COLUMN 1: LEFT EDITORIAL TYPOGRAPHY */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              zIndex: 5,
            }}
            className="hero-left-col"
          >
            {/* Header info */}
            <div style={{ marginBottom: '1.25rem' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)',
                  letterSpacing: '0.22em',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  textTransform: 'uppercase',
                  lineHeight: 1.1,
                  marginBottom: '0.35rem',
                }}
              >
                TAMIZHVANAN A
              </h2>
              <p
                style={{
                  fontSize: '0.72rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--text-secondary)',
                  fontWeight: 500,
                }}
              >
                MBA GRADUATE | HUMAN RESOURCES AND OPERATIONS
              </p>
            </div>

            {/* Fine Red Underline */}
            <div
              style={{
                width: '36px',
                height: '2px',
                backgroundColor: 'var(--red-primary)',
                marginBottom: '1.5rem',
              }}
            />

            {/* Vertical keywords */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.3rem',
                marginBottom: '1.5rem',
                fontSize: '0.72rem',
                letterSpacing: '0.25em',
                color: 'var(--text-muted)',
                fontWeight: 600,
                textTransform: 'uppercase',
              }}
            >
              <span>RECRUITMENT</span>
              <span>OPERATIONS</span>
              <span>PEOPLE</span>
              <span>IMPACT</span>
            </div>

            {/* GIANT DISPLAY TITLE: PORTFOLIO */}
            <h1
              className="font-editorial"
              style={{
                fontSize: 'clamp(4rem, 8.5vw, 7.8rem)',
                fontWeight: 400,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                lineHeight: 0.9,
                margin: '0.5rem 0 1.25rem 0',
                textTransform: 'uppercase',
              }}
            >
              PORTFOLIO
            </h1>

            {/* Sub-description */}
            <p
              style={{
                fontSize: '0.88rem',
                letterSpacing: '0.12em',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                textTransform: 'uppercase',
                maxWidth: '440px',
                marginBottom: '1.5rem',
              }}
            >
              MBA GRADUATE WITH INTERNSHIP EXPERIENCE IN HUMAN RESOURCES, OPERATIONS, AND DIGITAL WORKFLOW SUPPORT.
            </p>

            {/* Fine Red Underline 2 */}
            <div
              style={{
                width: '36px',
                height: '2px',
                backgroundColor: 'var(--red-primary)',
                marginBottom: '1.5rem',
              }}
            />

            {/* 2026 Milestone Block */}
            <div style={{ marginBottom: '1.75rem' }}>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.5rem, 4vw, 3.2rem)',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  lineHeight: 1,
                  marginBottom: '0.35rem',
                }}
              >
                2026
              </div>
              <div
                style={{
                  fontSize: '0.72rem',
                  letterSpacing: '0.22em',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  lineHeight: 1.5,
                }}
              >
                <div>HR MIND</div>
                <div>OPERATIONAL EXCELLENCE</div>
              </div>
            </div>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '2rem',
              }}
            >
              <a href="#about" onClick={scrollTo('about')} className="btn-primary" style={{ padding: '0.8rem 1.6rem', fontSize: '0.85rem' }}>
                <span>View My Work</span>
                <ArrowDownRight size={15} />
              </a>
              <a
                href="/documents/Tamizhvanan_A_Resume.pdf"
                download="Tamizhvanan_A_Resume.pdf"
                className="btn-secondary"
                style={{ padding: '0.8rem 1.5rem', fontSize: '0.85rem' }}
              >
                <Download size={15} color="#E02228" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Contact Meta Row matching Image 1 */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.55rem',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <MapPin size={13} color="#C8101E" />
                <span>Viluppuram, Tamil Nadu</span>
              </div>
              <a
                href="tel:+918870066024"
                style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'inherit', textDecoration: 'none' }}
              >
                <Phone size={13} color="#C8101E" />
                <span>+91 8870066024</span>
              </a>
              <a
                href="mailto:tamizhvanan752@gmail.com"
                style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'inherit', textDecoration: 'none' }}
              >
                <Mail size={13} color="#C8101E" />
                <span>tamizhvanan752@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/tamizhvanan-a-632aa3309/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'inherit', textDecoration: 'none' }}
              >
                <LinkedinIcon size={13} color="#C8101E" />
                <span>tamizhvanan-a-632aa3309</span>
              </a>
            </div>
          </div>

          {/* COLUMN 2: CENTER CIRCLE + BACKGROUND REMOVED PORTRAIT */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '620px',
            }}
            className="hero-center-col"
          >
            {/* Giant Crimson Backdrop Circle */}
            <div
              ref={circleRef}
              style={{
                position: 'absolute',
                width: 'clamp(380px, 42vw, 560px)',
                height: 'clamp(380px, 42vw, 560px)',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 45% 45%, #E02228 0%, #C8101E 45%, #58060E 80%, #150204 100%)',
                boxShadow: '0 0 120px rgba(200, 16, 30, 0.45), inset 0 0 80px rgba(0, 0, 0, 0.65)',
                zIndex: 1,
              }}
              aria-hidden="true"
            />

            {/* Circular Orbit Frame Line */}
            <div
              style={{
                position: 'absolute',
                width: 'clamp(420px, 46vw, 620px)',
                height: 'clamp(420px, 46vw, 620px)',
                borderRadius: '50%',
                border: '1px dashed rgba(255, 255, 255, 0.1)',
                zIndex: 1,
                pointerEvents: 'none',
              }}
              aria-hidden="true"
            />

            {/* Transparent Cutout Portrait of Tamizhvanan (Background completely removed) */}
            <div
              ref={portraitRef}
              style={{
                position: 'relative',
                zIndex: 2,
                width: '100%',
                maxWidth: '490px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src="/images/hero-suit-cutout.png"
                alt="Tamizhvanan A — MBA Graduate Portrait"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '680px',
                  objectFit: 'contain',
                  display: 'block',
                  filter: 'drop-shadow(0 25px 40px rgba(0, 0, 0, 0.85)) contrast(1.05)',
                }}
                loading="eager"
              />
            </div>
          </div>

          {/* COLUMN 3: RIGHT EDITORIAL INDEX & QUOTE */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              minHeight: '520px',
              paddingLeft: '1.5rem',
              zIndex: 5,
            }}
            className="hero-right-col"
          >
            {/* Top Domain Categories */}
            <div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.35rem',
                  fontSize: '0.75rem',
                  letterSpacing: '0.22em',
                  color: 'var(--text-secondary)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                }}
              >
                <span>HR</span>
                <span>OPERATIONS</span>
                <span>HRIS</span>
                <span>INVENTORY</span>
              </div>
              <div
                style={{
                  width: '28px',
                  height: '2px',
                  backgroundColor: 'var(--red-primary)',
                }}
              />
            </div>

            {/* Editorial Index Links matching Image 1 */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                margin: '3rem 0',
              }}
            >
              {[
                { number: '/01', label: 'SUMMARY', id: 'about' },
                { number: '/02', label: 'EXPERIENCE', id: 'experience' },
                { number: '/03', label: 'SKILLS', id: 'skills' },
                { number: '/04', label: 'CONTACT', id: 'contact' },
              ].map((item) => (
                <a
                  key={item.number}
                  href={`#${item.id}`}
                  onClick={scrollTo(item.id)}
                  style={{
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.2rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    paddingBottom: '0.65rem',
                    transition: 'border-color 0.25s, transform 0.25s',
                  }}
                  className="hero-index-item"
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.2rem',
                      color: 'var(--red-bright)',
                      fontWeight: 600,
                    }}
                  >
                    {item.number}
                  </span>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      letterSpacing: '0.2em',
                      color: 'var(--text-primary)',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.label}
                  </span>
                </a>
              ))}
            </div>

            {/* Bottom Quote matching Image 1 */}
            <div>
              <p
                style={{
                  fontSize: '0.8rem',
                  letterSpacing: '0.14em',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  marginBottom: '0.85rem',
                }}
              >
                GOOD PEOPLE BUILD STRONGER TEAMS AND BETTER OPERATIONS.
              </p>
              <div
                style={{
                  width: '32px',
                  height: '2px',
                  backgroundColor: 'var(--red-primary)',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-index-item:hover {
          border-color: var(--red-bright) !important;
          transform: translateX(4px);
        }
        @media (max-width: 1100px) {
          .master-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3.5rem !important;
          }
          .hero-center-col {
            order: 2;
          }
          .hero-left-col {
            order: 1;
          }
          .hero-right-col {
            order: 3;
            min-height: auto !important;
            padding-left: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
