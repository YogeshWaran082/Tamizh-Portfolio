import React from 'react';
import { Users, Boxes, Database, Sparkles } from 'lucide-react';

const SKILL_CARDS = [
  {
    title: 'Human Resources',
    icon: Users,
    items: [
      'Recruitment Support',
      'Employee Records',
      'HR Data Entry',
      'ESIC Process Support',
    ],
  },
  {
    title: 'Operations',
    icon: Boxes,
    items: [
      'Daily Operations Coordination',
      'Inventory Management',
      'Customer Satisfaction',
    ],
  },
  {
    title: 'Technical & Systems',
    icon: Database,
    items: [
      'Python',
      'HTML',
      'CSS',
      'ERP',
      'HRIS',
    ],
  },
  {
    title: 'Professional Skills',
    icon: Sparkles,
    items: [
      'Teamwork',
      'Time Management',
      'Communication',
      'Critical Thinking',
      'Collaboration',
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="editorial-section" style={{ backgroundColor: '#08090B' }}>
      {/* Background Architectural Grid Lines */}
      <div className="arch-grid" aria-hidden="true">
        <div className="arch-grid-line-x" style={{ top: '50%' }} />
        <div className="arch-grid-line-y" style={{ left: '50%' }} />
      </div>

      <div className="editorial-container">
        {/* Top Header Row matching Image 2 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '3.5rem',
          }}
        >
          <div>
            <div className="section-tag-pill">
              SKILLS
            </div>
            <h2 className="section-title" style={{ marginTop: '0.25rem' }}>
              Tools I Work With.
            </h2>
            <p className="section-subtitle">
              A combination of HR knowledge, operational experience and technical skills to solve real-world challenges.
            </p>
          </div>

          <div
            style={{
              paddingTop: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
            }}
            className="skills-top-tag"
          >
            <span
              style={{
                fontSize: '0.72rem',
                letterSpacing: '0.22em',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              SKILLS
            </span>
            <span
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                color: 'var(--red-bright)',
                textTransform: 'uppercase',
                fontWeight: 700,
              }}
            >
              FOR A BETTER TOMORROW
            </span>
          </div>
        </div>

        {/* 4 Cards Grid matching Image 2 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
          }}
          className="skills-grid"
        >
          {SKILL_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="editorial-card"
                style={{
                  background: '#141416',
                  borderColor: 'rgba(255, 255, 255, 0.08)',
                  padding: '2rem 1.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Red Squircle Icon */}
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(200, 16, 30, 0.15)',
                    border: '1px solid rgba(220, 34, 40, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.75rem',
                    boxShadow: '0 0 20px rgba(200, 16, 30, 0.2)',
                  }}
                >
                  <Icon size={20} color="#E02228" />
                </div>

                {/* Card Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.45rem',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    marginBottom: '1.5rem',
                    lineHeight: 1.2,
                  }}
                >
                  {card.title}
                </h3>

                {/* Skill Items List matching Image 2 with red square bullets */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {card.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.65rem',
                        fontSize: '0.86rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <span
                        style={{
                          width: '4px',
                          height: '4px',
                          backgroundColor: 'var(--red-bright)',
                          borderRadius: '1px',
                          flexShrink: 0,
                        }}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
          .skills-top-tag {
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
