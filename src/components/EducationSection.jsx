import React from 'react';
import { GraduationCap, MapPin, BookOpen, Calendar } from 'lucide-react';

const EDUCATION_DATA = [
  {
    degree: 'MBA (General)',
    institution: 'Takshashila University',
    location: 'Ongur, Viluppuram',
    period: '2024 – 2026',
    specialization: 'Human Resources & Operations Management',
    highlights: 'Advanced coursework in Organizational Behavior, Operations & Supply Chain Logistics, Human Resource Management, and Business Research.',
  },
  {
    degree: 'B.Sc. Chemistry',
    institution: 'Government Arts College',
    location: 'Ooty, Nilgiris',
    period: '2019 – 2022',
    specialization: 'Chemical Sciences & Laboratory Analysis',
    highlights: 'Scientific inquiry, empirical research methods, analytical thinking, meticulous laboratory documentation, and structured reporting.',
  },
  {
    degree: 'Higher Secondary',
    institution: 'Christ the King',
    location: 'Mettukuppam, Viluppuram',
    period: '2018 – 2019',
    specialization: 'Higher Secondary Curriculum',
    highlights: 'Core disciplinary foundation with distinction in academic discipline and structured coursework.',
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="editorial-section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      {/* Background Architectural Grid Lines */}
      <div className="arch-grid" aria-hidden="true">
        <div className="arch-grid-line-x" style={{ top: '65%' }} />
        <div className="arch-grid-line-y" style={{ left: '25%' }} />
      </div>

      <div className="editorial-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="micro-label">05 / EDUCATION</span>
          <h2 className="section-title">
            The Foundation.
          </h2>
          <p className="section-subtitle">
            "Academic milestones that established strong analytical capability, operational perspective, and management acumen."
          </p>
        </div>

        {/* Minimalist Editorial Education Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {EDUCATION_DATA.map((item, index) => (
            <div
              key={index}
              className="editorial-card"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '2rem',
                alignItems: 'center',
                padding: '2.5rem',
              }}
            >
              {/* Year Column: Oversized Editorial Typography */}
              <div
                style={{
                  gridColumn: 'span 4',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                }}
                className="edu-year-col"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--red-primary)',
                      boxShadow: '0 0 10px var(--red-bright)',
                    }}
                  />
                  <span
                    style={{
                      fontSize: '0.75rem',
                      letterSpacing: '0.18em',
                      color: 'var(--red-bright)',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                    }}
                  >
                    ACADEMIC TENURE
                  </span>
                </div>

                <span
                  className="font-editorial"
                  style={{
                    fontSize: 'clamp(2.2rem, 3.8vw, 3.5rem)',
                    color: '#FFFFFF',
                    fontWeight: 400,
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {item.period}
                </span>

                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  {item.specialization}
                </span>
              </div>

              {/* Institution and Details Column */}
              <div
                style={{
                  gridColumn: 'span 8',
                  borderLeft: '1px solid var(--border-default)',
                  paddingLeft: '2.5rem',
                }}
                className="edu-details-col"
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.6rem, 2.4vw, 2.1rem)',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.35rem',
                    lineHeight: 1.2,
                  }}
                >
                  {item.degree}
                </h3>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    flexWrap: 'wrap',
                    color: 'var(--text-secondary)',
                    fontSize: '0.92rem',
                    marginBottom: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#FFFFFF', fontWeight: 500 }}>
                    <GraduationCap size={16} color="#E02228" />
                    <span>{item.institution}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)' }}>
                    <MapPin size={14} />
                    <span>{item.location}</span>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                  }}
                >
                  {item.highlights}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .edu-year-col {
            grid-column: span 12 !important;
          }
          .edu-details-col {
            grid-column: span 12 !important;
            border-left: none !important;
            padding-left: 0 !important;
            border-top: 1px solid var(--border-subtle) !important;
            padding-top: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
