import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

const PROJECTS = [
  {
    id: 'zepto-supply-chain',
    number: '01',
    title: 'Observational Study on Supply Chain Management at Zepto',
    meta: 'January 2026 - June 2026 | Chennai',
    image: '/images/project-supply-chain.jpg',
    bullets: [
      'Observed supply chain processes and operational workflows to identify challenges.',
      'Developed recommendations for supply chain improvement.',
    ],
    tag: 'Supply Chain Management',
  },
  {
    id: 'hris-systems',
    number: '02',
    title: 'Human Resource Information Systems (HRIS)',
    meta: 'Academic Study | 2025',
    image: '/images/project-hris.jpg',
    bullets: [
      'Studied HRIS tools and their role in modern HR operations.',
      'Explored digital HR workflows and data management.',
    ],
    tag: 'HRIS',
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projects" className="editorial-section" style={{ backgroundColor: '#08090B' }}>
        {/* Background Architectural Grid Lines */}
        <div className="arch-grid" aria-hidden="true">
          <div className="arch-grid-line-x" style={{ top: '40%' }} />
          <div className="arch-grid-line-y" style={{ left: '15%' }} />
        </div>

        <div className="editorial-container">
          {/* Header Row matching Image 2 */}
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
                PROJECTS
              </div>
              <h2 className="section-title" style={{ marginTop: '0.25rem' }}>
                Academic Projects.
              </h2>
              <p className="section-subtitle">
                Real-world learning through practical research and analysis.
              </p>
            </div>

            <div style={{ paddingTop: '1.5rem' }}>
              <button
                type="button"
                onClick={() => setSelectedProject(PROJECTS[0])}
                className="btn-secondary"
                style={{
                  padding: '0.65rem 1.4rem',
                  fontSize: '0.82rem',
                  letterSpacing: '0.08em',
                  borderRadius: '20px',
                }}
              >
                <span>View All</span>
                <ArrowRight size={14} color="#E02228" />
              </button>
            </div>
          </div>

          {/* 2 Project Cards Grid matching Image 2 */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem',
            }}
            className="projects-grid"
          >
            {PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className="editorial-card"
                style={{
                  background: '#141416',
                  borderColor: 'rgba(255, 255, 255, 0.08)',
                  padding: '1.5rem',
                  display: 'grid',
                  gridTemplateColumns: '220px 1fr',
                  gap: '1.75rem',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                onClick={() => setSelectedProject(proj)}
              >
                {/* Left: Project Image */}
                <div
                  style={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    height: '240px',
                    position: 'relative',
                    backgroundColor: '#050507',
                  }}
                  className="proj-img-wrap"
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.5s ease',
                    }}
                    className="proj-img-scale"
                    loading="lazy"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, transparent 60%)',
                    }}
                  />
                </div>

                {/* Right: Content matching Image 2 */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    padding: '0.5rem 0',
                  }}
                >
                  <div>
                    {/* Top Number */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        marginBottom: '0.25rem',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.85rem',
                          fontFamily: 'var(--font-heading)',
                          color: 'var(--text-muted)',
                          fontWeight: 600,
                        }}
                      >
                        {proj.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.35rem',
                        fontWeight: 600,
                        color: '#FFFFFF',
                        lineHeight: 1.25,
                        marginBottom: '0.5rem',
                      }}
                    >
                      {proj.title}
                    </h3>

                    {/* Meta */}
                    <p
                      style={{
                        fontSize: '0.78rem',
                        color: 'var(--text-muted)',
                        marginBottom: '1rem',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {proj.meta}
                    </p>

                    {/* Bullets */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.5rem' }}>
                      {proj.bullets.map((b, bIdx) => (
                        <div
                          key={bIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.55rem',
                            fontSize: '0.82rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.5,
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

                  {/* Bottom: Tag & Round Red Arrow Button */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '0.75rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '4px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: 'var(--text-secondary)',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {proj.tag}
                    </span>

                    <div
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--red-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        boxShadow: '0 4px 15px rgba(200, 16, 30, 0.4)',
                        transition: 'transform 0.25s ease',
                      }}
                      className="proj-arrow-circle"
                    >
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .editorial-card:hover .proj-img-scale {
            transform: scale(1.05);
          }
          .editorial-card:hover .proj-arrow-circle {
            transform: rotate(45deg) scale(1.1);
          }
          @media (max-width: 1100px) {
            .projects-grid {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 640px) {
            .projects-grid > div {
              grid-template-columns: 1fr !important;
            }
            .proj-img-wrap {
              height: 200px !important;
            }
          }
        `}</style>
      </section>

      {/* Case Study Modal */}
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </>
  );
}
