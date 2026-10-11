import React from 'react';

const EXPERIENCES = [
  {
    period: 'Jan 2026 - Jun 2026',
    role: 'Deputy Darkhub Manager Intern',
    company: 'Zepto',
    location: 'Chennai',
    logoType: 'zepto',
    bullets: [
      'Supported daily dark hub operations in a quick commerce environment.',
      'Assisted with inventory management and inventory hygiene.',
      'Supported customer satisfaction through daily operational coordination.',
    ],
  },
  {
    period: 'Sep 2025 - Nov 2025',
    role: 'HR Executive Intern',
    company: 'DEEMENTEE Academy',
    location: 'Pondicherry',
    logoType: 'deementee',
    bullets: [
      "Assisted with Employees' State Insurance Corporation (ESIC) processes.",
    ],
  },
  {
    period: 'Aug 2025 - Oct 2025',
    role: 'HR Executive Intern',
    company: 'Digipondy',
    location: 'Pondicherry',
    logoType: 'digipondy',
    bullets: [
      'Assisted with recruitment activities and employee data entry.',
    ],
  },
];

export default function ExperienceSection() {
  const renderCompanyLogo = (logoType) => {
    return (
      <div
        style={{
          flexShrink: 0,
          padding: '0.35rem 0.75rem',
          borderRadius: '8px',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.45rem',
        }}
      >
        {logoType === 'zepto' && (
          <span
            style={{
              fontSize: '1.05rem',
              fontWeight: 700,
              color: '#E02228',
              letterSpacing: '-0.02em',
              fontFamily: 'sans-serif',
              lineHeight: 1,
            }}
          >
            zepto
          </span>
        )}

        {logoType === 'deementee' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', lineHeight: 1 }}>
            <div
              style={{
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                border: '1.5px solid var(--red-bright)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '8.5px',
                fontWeight: 700,
                color: '#FFF',
              }}
            >
              D
            </div>
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.08em', color: '#FFF', fontWeight: 600 }}>
              DEEMENTEE
            </span>
          </div>
        )}

        {logoType === 'digipondy' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', lineHeight: 1 }}>
            <div
              style={{
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                backgroundColor: 'var(--red-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '8.5px',
                fontWeight: 700,
                color: '#FFF',
              }}
            >
              D
            </div>
            <span style={{ fontSize: '0.76rem', fontWeight: 600, color: '#FFF' }}>
              Digipondy
            </span>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="experience" className="editorial-section" style={{ backgroundColor: '#0B0C0E' }}>
      {/* Background Architectural Grid Lines */}
      <div className="arch-grid" aria-hidden="true">
        <div className="arch-grid-line-x" style={{ top: '25%' }} />
        <div className="arch-grid-line-y" style={{ right: '35%' }} />
      </div>

      <div className="editorial-container">
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-tag-pill">
            EXPERIENCE
          </div>
          <h2 className="section-title" style={{ marginTop: '0.25rem' }}>
            My Professional Journey.
          </h2>
          <p className="section-subtitle">
            Internship experience across HR and quick commerce operations.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '3rem',
            alignItems: 'start',
          }}
          className="experience-grid"
        >
          {/* Left Column: Timeline Cards */}
          <div
            style={{
              gridColumn: 'span 8',
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem',
              position: 'relative',
            }}
            className="exp-cards-col"
          >
            {/* Vertical glowing red rail */}
            <div
              style={{
                position: 'absolute',
                top: '25px',
                bottom: '40px',
                left: '115px',
                width: '2px',
                backgroundColor: 'var(--red-primary)',
                boxShadow: '0 0 10px rgba(224, 34, 40, 0.4)',
                zIndex: 1,
              }}
              className="exp-rail"
              aria-hidden="true"
            />

            {EXPERIENCES.map((exp, index) => (
              <div
                key={index}
                className="exp-item-row"
              >
                {/* Date Left matching Image 2 (Desktop only) */}
                <div className="exp-date-box">
                  <span
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.04em',
                      fontWeight: 500,
                      lineHeight: 1.4,
                      display: 'block',
                    }}
                  >
                    {exp.period.split(' - ')[0]}<br />
                    - {exp.period.split(' - ')[1]}
                  </span>
                </div>

                {/* Glowing Node on Rail */}
                <div className="exp-node-dot" />

                {/* Experience Card */}
                <div className="editorial-card exp-card-body">
                  {/* Mobile-Only Top Row: Date Badge + Company Logo */}
                  <div className="exp-mobile-header">
                    <span className="exp-mobile-date-pill">
                      {exp.period}
                    </span>
                    <div className="exp-mobile-badge-container">
                      {renderCompanyLogo(exp.logoType)}
                    </div>
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    {/* Desktop Header: Role | Company | Location */}
                    <div className="exp-desktop-title-row">
                      <h3
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.35rem',
                          fontWeight: 600,
                          color: '#FFFFFF',
                          lineHeight: 1.25,
                          marginBottom: '0.85rem',
                        }}
                        className="exp-role-title"
                      >
                        {exp.role} <span style={{ color: 'var(--red-bright)', fontWeight: 400 }}>|</span> {exp.company} <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>|</span> <span style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>{exp.location}</span>
                      </h3>

                      <div className="exp-desktop-badge-container">
                        {renderCompanyLogo(exp.logoType)}
                      </div>
                    </div>

                    {/* Mobile Title & Meta */}
                    <div className="exp-mobile-title-block">
                      <h3 className="exp-mobile-role-heading">
                        {exp.role}
                      </h3>
                      <div className="exp-mobile-meta">
                        <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{exp.company}</span>
                        <span style={{ color: 'var(--red-bright)', margin: '0 0.35rem' }}>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Bullets */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                      {exp.bullets.map((b, bIdx) => (
                        <div
                          key={bIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.65rem',
                            fontSize: '0.86rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.55,
                          }}
                        >
                          <span
                            style={{
                              width: '4px',
                              height: '4px',
                              borderRadius: '1px',
                              backgroundColor: 'var(--red-primary)',
                              marginTop: '0.45rem',
                              flexShrink: 0,
                            }}
                          />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Cutout Portrait + Tagline matching Image 2 */}
          <div
            style={{
              gridColumn: 'span 4',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            className="exp-portrait-col"
          >
            {/* Cutout Portrait Container with Red Ambient Backdrop */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '360px',
                borderRadius: '16px',
                overflow: 'hidden',
                background: 'radial-gradient(circle at 60% 40%, rgba(200, 16, 30, 0.4) 0%, rgba(23, 23, 25, 0.95) 75%)',
                border: '1px solid rgba(220, 34, 40, 0.3)',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(200, 16, 30, 0.2)',
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '1.5rem',
              }}
              className="exp-portrait-box"
            >
              <img
                src="/images/side-portrait-cutout.png"
                alt="Tamizhvanan A — Career Journey"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '440px',
                  objectFit: 'contain',
                  display: 'block',
                  filter: 'drop-shadow(0 20px 30px rgba(0, 0, 0, 0.9))',
                }}
                loading="lazy"
              />
            </div>

            {/* Vertical Subtitle matching Image 2 */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                marginTop: '1.5rem',
                fontSize: '0.72rem',
                letterSpacing: '0.22em',
                color: 'var(--text-muted)',
                fontWeight: 600,
                textTransform: 'uppercase',
              }}
              className="exp-tagline-row"
            >
              <span>LEARNING</span>
              <span style={{ color: 'var(--red-primary)' }}>·</span>
              <span>ADAPTING</span>
              <span style={{ color: 'var(--red-primary)' }}>·</span>
              <span>GROWING</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Base styles */
        .exp-item-row {
          display: flex;
          align-items: flex-start;
          gap: 2.5rem;
          position: relative;
          z-index: 2;
        }

        .exp-date-box {
          width: 100px;
          flex-shrink: 0;
          text-align: right;
          padding-top: 0.35rem;
        }

        .exp-node-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background-color: var(--red-bright);
          border: 3px solid #08090B;
          box-shadow: 0 0 10px var(--red-bright);
          flex-shrink: 0;
          margin-top: 0.6rem;
        }

        .exp-card-body {
          flex: 1;
          background: #141416;
          border-color: rgba(255, 255, 255, 0.08);
          padding: 1.75rem 2rem;
          min-width: 0;
        }

        .exp-desktop-title-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .exp-mobile-header {
          display: none;
        }

        .exp-mobile-title-block {
          display: none;
        }

        @media (max-width: 992px) {
          .experience-grid {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 2.5rem !important;
          }
          .exp-cards-col, .exp-portrait-col {
            grid-column: 1 / -1 !important;
            min-width: 0 !important;
            width: 100% !important;
          }
          .exp-portrait-box {
            max-width: 300px !important;
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .exp-cards-col {
            gap: 1.25rem !important;
            width: 100% !important;
            min-width: 0 !important;
          }
          .exp-item-row {
            gap: 0.75rem !important;
            width: 100% !important;
            min-width: 0 !important;
          }
          .exp-rail {
            left: 7px !important;
            top: 15px !important;
            bottom: 30px !important;
          }
          .exp-date-box {
            display: none !important;
          }
          .exp-node-dot {
            width: 14px !important;
            height: 14px !important;
            margin-top: 1.15rem !important;
            flex-shrink: 0 !important;
          }
          .exp-card-body {
            padding: 1.1rem 0.95rem !important;
            flex: 1 1 0% !important;
            min-width: 0 !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
          .exp-desktop-title-row {
            display: none !important;
          }
          .exp-mobile-header {
            display: flex !important;
            align-items: center;
            justify-content: space-between;
            gap: 0.5rem;
            margin-bottom: 0.75rem;
            padding-bottom: 0.65rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
            width: 100% !important;
          }
          .exp-mobile-date-pill {
            display: inline-flex;
            align-items: center;
            font-size: 0.7rem;
            font-weight: 600;
            color: #FFFFFF;
            background: rgba(200, 16, 30, 0.12);
            border: 1px solid rgba(224, 34, 40, 0.35);
            padding: 0.2rem 0.55rem;
            border-radius: 999px;
            letter-spacing: 0.02em;
            white-space: nowrap;
          }
          .exp-mobile-title-block {
            display: block !important;
            margin-bottom: 0.75rem;
          }
          .exp-mobile-role-heading {
            font-family: var(--font-heading);
            font-size: 1.2rem;
            font-weight: 600;
            color: #FFFFFF;
            line-height: 1.2;
            margin-bottom: 0.2rem;
          }
          .exp-mobile-meta {
            font-size: 0.8rem;
            color: var(--text-secondary);
            display: flex;
            align-items: center;
            flex-wrap: wrap;
          }
          .exp-tagline-row {
            gap: 0.5rem !important;
            letter-spacing: 0.14em !important;
            font-size: 0.68rem !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
