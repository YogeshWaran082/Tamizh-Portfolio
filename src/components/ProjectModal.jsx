import React, { useEffect } from 'react';
import { X, Target, Layers, TrendingUp, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';

export default function ProjectModal({ isOpen, onClose, project }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const isZepto = project.id === 'zepto-supply-chain';

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10005,
        backgroundColor: 'rgba(8, 9, 11, 0.94)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#141416',
          border: '1px solid var(--border-accent)',
          borderRadius: '20px',
          maxWidth: '880px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          padding: 'clamp(1.75rem, 4vw, 3rem)',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.95), 0 0 50px var(--red-glow)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Case Study"
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-default)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.25s ease',
          }}
          className="interactive-hover"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span className="section-tag-pill">
              ACADEMIC RESEARCH · {project.number}
            </span>
            <span
              style={{
                fontSize: '0.75rem',
                color: 'var(--red-bright)',
                backgroundColor: 'rgba(200, 16, 30, 0.12)',
                border: '1px solid rgba(220, 34, 40, 0.3)',
                padding: '0.2rem 0.65rem',
                borderRadius: '4px',
                fontWeight: 600,
              }}
            >
              {project.meta}
            </span>
          </div>

          <h3
            className="font-editorial"
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              color: '#FFFFFF',
              fontWeight: 500,
              lineHeight: 1.15,
              marginBottom: '0.5rem',
            }}
          >
            {project.title}
          </h3>
        </div>

        {/* Modal Image */}
        <div
          style={{
            borderRadius: '14px',
            overflow: 'hidden',
            marginBottom: '2rem',
            border: '1px solid var(--border-subtle)',
            height: '280px',
            position: 'relative',
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(20, 20, 22, 0.9) 0%, transparent 60%)',
            }}
          />
        </div>

        {/* Structured Case Study Sections */}
        {isZepto ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <div>
              <h4
                style={{
                  fontSize: '0.92rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--red-bright)',
                  marginBottom: '0.65rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <Target size={16} /> Research Objective
              </h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                Hands-on observational fieldwork inside Zepto's quick commerce dark hub fulfillment facility in Chennai. The core objective was mapping the end-to-end operational cycle—from dock inbound receiving, item put-away, batch picking to rider dispatch—to pinpoint order bottlenecks and propose actionable supply chain enhancements.
              </p>
            </div>

            <div>
              <h4
                style={{
                  fontSize: '0.92rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--red-bright)',
                  marginBottom: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <Layers size={16} /> Field Observations
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1rem' }}>
                <div style={{ background: '#08090B', padding: '1.25rem', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
                  <h5 style={{ fontSize: '0.88rem', fontWeight: 600, color: '#FFF', marginBottom: '0.4rem' }}>Inventory Hygiene</h5>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    High-velocity bin restocking during morning demand spikes produced variance in physical vs digital cycle counts.
                  </p>
                </div>
                <div style={{ background: '#08090B', padding: '1.25rem', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
                  <h5 style={{ fontSize: '0.88rem', fontWeight: 600, color: '#FFF', marginBottom: '0.4rem' }}>Picking SLA Transit</h5>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    Pickers traversed extra distance when fast-moving SKU items were dispersed across distant aisle ends.
                  </p>
                </div>
                <div style={{ background: '#08090B', padding: '1.25rem', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
                  <h5 style={{ fontSize: '0.88rem', fontWeight: 600, color: '#FFF', marginBottom: '0.4rem' }}>Dispatch Handoff</h5>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    Staging table congestion occurred during peak 8-10 PM grocery ordering windows without dedicated slotting.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4
                style={{
                  fontSize: '0.92rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--red-bright)',
                  marginBottom: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <TrendingUp size={16} /> Recommended Interventions
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Dynamic Fast-Mover Slotting: Cluster top 20% high-velocity grocery items in front bays to reduce picker transit by 18%.',
                  'Structured Restocking Intervals: Enforce 20-minute designated shelf re-alignment windows to preserve physical inventory hygiene.',
                  'Secondary Seal-Scan Checkpoints: Bag verification at outbound dispatch table to drop missing item ticket escalations.',
                ].map((rec, rIdx) => (
                  <li key={rIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    <ShieldCheck size={16} color="#E02228" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <div>
              <h4
                style={{
                  fontSize: '0.92rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--red-bright)',
                  marginBottom: '0.65rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <Target size={16} /> Academic Research Scope
              </h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                An in-depth academic inquiry examining the architectural foundation of Human Resource Information Systems (HRIS). Focused on how centralized enterprise database systems unify recruitment tracking, employee master records, statutory compliance (including ESIC/PF modules), and payroll administration.
              </p>
            </div>

            <div>
              <h4
                style={{
                  fontSize: '0.92rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--red-bright)',
                  marginBottom: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <Cpu size={16} /> Key Systems Studied
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1rem' }}>
                <div style={{ background: '#08090B', padding: '1.25rem', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
                  <h5 style={{ fontSize: '0.88rem', fontWeight: 600, color: '#FFF', marginBottom: '0.4rem' }}>Employee Master Database</h5>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    Schema modeling for full employee life-cycle data: from candidate offer generation to retirement and exit clearance.
                  </p>
                </div>
                <div style={{ background: '#08090B', padding: '1.25rem', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
                  <h5 style={{ fontSize: '0.88rem', fontWeight: 600, color: '#FFF', marginBottom: '0.4rem' }}>ESIC & Compliance Automation</h5>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    Mapping statutory deductions, monthly contribution registers, and electronic form generation.
                  </p>
                </div>
                <div style={{ background: '#08090B', padding: '1.25rem', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
                  <h5 style={{ fontSize: '0.88rem', fontWeight: 600, color: '#FFF', marginBottom: '0.4rem' }}>HR Analytics Reporting</h5>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    Tracking attrition trends, time-to-hire velocity, department headcount budgets, and leave utilization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal Footer CTA */}
        <div
          style={{
            marginTop: '2.5rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <button
            onClick={onClose}
            className="btn-secondary"
            style={{ padding: '0.65rem 1.75rem', fontSize: '0.85rem' }}
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
