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
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '2.5rem',
                  position: 'relative',
                  zIndex: 2,
                }}
                className="exp-item-row"
              >
                {/* Date Left matching Image 2 */}
                <div
                  style={{
                    width: '100px',
                    flexShrink: 0,
                    textAlign: 'right',
                    paddingTop: '0.35rem',
                  }}
                  className="exp-date-box"
                >
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
                <div
                  style={{
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--red-bright)',
                    border: '3px solid #08090B',
                    boxShadow: '0 0 10px var(--red-bright)',
                    flexShrink: 0,
                    marginTop: '0.6rem',
                  }}
                  className="exp-node-dot"
                />

                {/* Experience Card */}
                <div
                  className="editorial-card"
                  style={{
                    flex: 1,
                    background: '#141416',
                    borderColor: 'rgba(255, 255, 255, 0.08)',
                    padding: '1.75rem 2rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '1.5rem',
                  }}
                >
                  <div>
                    {/* Role | Company | Location */}
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.35rem',
                        fontWeight: 600,
                        color: '#FFFFFF',
                        lineHeight: 1.25,
                        marginBottom: '0.85rem',
                      }}
                    >
                      {exp.role} <span style={{ color: 'var(--red-bright)', fontWeight: 400 }}>|</span> {exp.company} <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>|</span> <span style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>{exp.location}</span>
                    </h3>

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

                  {/* Company Logo Badge on Right matching Image 2 */}
                  <div
                    style={{
                      flexShrink: 0,
                      padding: '0.4rem 0.85rem',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    {exp.logoType === 'zepto' && (
                      <span
                        style={{
                          fontSize: '1.1rem',
                          fontWeight: 700,
                          color: '#E02228',
                          letterSpacing: '-0.02em',
                          fontFamily: 'sans-serif',
                        }}
                      >
                        zepto
                      </span>
                    )}

                    {exp.logoType === 'deementee' && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <div
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            border: '1.5px solid var(--red-bright)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '9px',
                            fontWeight: 700,
                            color: '#FFF',
                          }}
                        >
                          D
                        </div>
                        <span style={{ fontSize: '0.72rem', letterSpacing: '0.08em', color: '#FFF', fontWeight: 600 }}>
                          DEEMENTEE
                        </span>
                      </div>
                    )}

                    {exp.logoType === 'digipondy' && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <div
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--red-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '9px',
                            fontWeight: 700,
                            color: '#FFF',
                          }}
                        >
                          D
                        </div>
                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#FFF' }}>
                          Digipondy
                        </span>
                      </div>
                    )}
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
        @media (max-width: 992px) {
          .experience-grid {
            grid-template-columns: 1fr !important;
          }
          .exp-cards-col, .exp-portrait-col {
            grid-column: span 12 !important;
          }
          .exp-rail {
            left: 20px !important;
          }
          .exp-date-box {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
