import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, MessageSquare, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon } from './Icons';

export default function ContactSection() {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [showDirectForm, setShowDirectForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`HR & Operations Opportunity Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Tamizhvanan,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    window.location.href = `mailto:tamizhvanan752@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactCards = [
    {
      id: 'phone',
      icon: Phone,
      label: '+91 8870066024',
      href: 'tel:+918870066024',
      action: 'Call',
      copyValue: '+918870066024',
    },
    {
      id: 'email',
      icon: Mail,
      label: 'tamizhvanan752@gmail.com',
      href: 'mailto:tamizhvanan752@gmail.com',
      action: 'Mail',
      copyValue: 'tamizhvanan752@gmail.com',
    },
    {
      id: 'location',
      icon: MapPin,
      label: 'Viluppuram, Tamil Nadu',
      href: null,
      action: 'Relocate',
      copyValue: 'Viluppuram, Tamil Nadu',
    },
    {
      id: 'linkedin',
      icon: LinkedinIcon,
      label: 'linkedin.com/in/tamizhvanan-a-632aa3309',
      href: 'https://www.linkedin.com/in/tamizhvanan-a-632aa3309/',
      action: 'Connect',
      copyValue: 'https://www.linkedin.com/in/tamizhvanan-a-632aa3309/',
    },
  ];

  return (
    <section id="contact" className="editorial-section" style={{ backgroundColor: '#08090B', position: 'relative', overflow: 'hidden' }}>
      {/* Background Architectural Grid Lines */}
      <div className="arch-grid" aria-hidden="true">
        <div className="arch-grid-line-x" style={{ top: '25%' }} />
        <div className="arch-grid-line-y" style={{ left: '15%' }} />
      </div>

      <div className="editorial-container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Top Split: Title & Text on Left, Cutout Portrait with Circular Red Glow & "Get In Touch" on Right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '3rem',
            alignItems: 'center',
            marginBottom: '3.5rem',
          }}
          className="contact-top-grid"
        >
          {/* Left: Section Header & Narrative matching Image 2 */}
          <div>
            <div className="section-tag-pill">
              CONTACT
            </div>

            <h2
              className="font-editorial"
              style={{
                fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)',
                fontWeight: 400,
                color: 'var(--text-primary)',
                lineHeight: 1.08,
                margin: '0.4rem 0 1.25rem 0',
                letterSpacing: '-0.02em',
              }}
            >
              Let's Connect.
            </h2>

            <p
              style={{
                fontSize: 'clamp(0.98rem, 1.25vw, 1.15rem)',
                lineHeight: 1.8,
                color: 'var(--text-secondary)',
                maxWidth: '560px',
                marginBottom: '1.75rem',
              }}
            >
              I'm open to entry-level opportunities in Human Resources and Operations. Feel free to reach out for collaborations or job opportunities.
            </p>

            {/* Quick Action Button for Direct Message Form */}
            <button
              type="button"
              onClick={() => setShowDirectForm(!showDirectForm)}
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                padding: '0.65rem 1.25rem',
                color: '#FFFFFF',
                fontSize: '0.82rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <MessageSquare size={14} color="var(--red-bright)" />
              <span>{showDirectForm ? 'Close Message Form' : 'Quick Message Composer'}</span>
            </button>
          </div>

          {/* Right: Portrait Cutout with Vibrant Crimson Arc, Floating Send Button & "Get In Touch." handwriting */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '380px',
            }}
            className="contact-portrait-col"
          >
            {/* Deep Red Circular Arc Backdrop matching Image 2 */}
            <div
              style={{
                position: 'absolute',
                width: 'clamp(280px, 32vw, 420px)',
                height: 'clamp(280px, 32vw, 420px)',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 45% 45%, #E02228 0%, #C8101E 50%, #58060E 80%, transparent 100%)',
                boxShadow: '0 0 100px rgba(200, 16, 30, 0.45)',
                zIndex: 0,
              }}
              aria-hidden="true"
            />

            {/* Transparent Cutout Portrait of Tamizhvanan (Background completely removed) */}
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                maxWidth: '360px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src="/images/side-portrait-cutout.png"
                alt="Tamizhvanan A"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '420px',
                  objectFit: 'contain',
                  display: 'block',
                  filter: 'drop-shadow(0 20px 35px rgba(0, 0, 0, 0.85))',
                }}
                loading="lazy"
              />
            </div>

            {/* Floating Red Send Button + Handwritten "Get In Touch." matching Image 2 */}
            <div
              style={{
                position: 'absolute',
                left: '-10px',
                bottom: '25%',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <a
                href="mailto:tamizhvanan752@gmail.com"
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  backgroundColor: '#E02228',
                  boxShadow: '0 8px 25px rgba(224, 34, 40, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  transition: 'transform 0.2s ease',
                  flexShrink: 0,
                }}
                title="Send Email"
              >
                <Send size={22} style={{ transform: 'translateX(2px) translateY(-1px)' }} />
              </a>

              <span
                className="font-signature"
                style={{
                  fontSize: '2.4rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  whiteSpace: 'nowrap',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)',
                  transform: 'rotate(-4deg)',
                }}
              >
                Get In Touch.
              </span>
            </div>
          </div>
        </div>

        {/* Collapsible Quick Message Form */}
        {showDirectForm && (
          <form
            onSubmit={handleSendMessage}
            style={{
              background: '#141416',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '1.75rem',
              marginBottom: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              maxWidth: '800px',
            }}
          >
            <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#FFFFFF' }}>
              Draft a Quick Inquiry
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="contact-form-row">
              <input
                type="text"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  background: '#090A0C',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '6px',
                  padding: '0.65rem 0.95rem',
                  color: '#FFFFFF',
                  fontSize: '0.85rem',
                  outline: 'none',
                }}
              />
              <input
                type="email"
                required
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  background: '#090A0C',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '6px',
                  padding: '0.65rem 0.95rem',
                  color: '#FFFFFF',
                  fontSize: '0.85rem',
                  outline: 'none',
                }}
              />
            </div>
            <textarea
              rows="3"
              required
              placeholder="Your Message / Job Opportunity details..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{
                background: '#090A0C',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '6px',
                padding: '0.65rem 0.95rem',
                color: '#FFFFFF',
                fontSize: '0.85rem',
                outline: 'none',
                resize: 'vertical',
              }}
            />
            <button
              type="submit"
              className="btn-primary"
              style={{ alignSelf: 'flex-start', padding: '0.65rem 1.4rem' }}
            >
              <Send size={14} />
              <span>Send in Email Client</span>
            </button>
          </form>
        )}

        {/* Bottom 4 Horizontal Contact Cards matching Image 2 100% */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.25rem',
          }}
          className="contact-cards-row"
        >
          {contactCards.map((card, idx) => {
            const IconComponent = card.icon;
            const isLinkedIn = card.id === 'linkedin';

            return (
              <div
                key={card.id}
                style={{
                  background: '#141416',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  padding: '1.25rem 1.15rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.95rem',
                  position: 'relative',
                  transition: 'border-color 0.2s ease, transform 0.2s ease',
                }}
                className="contact-pill-card"
              >
                {/* Red Squircle Icon Frame matching Image 2 */}
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(200, 16, 30, 0.15)',
                    border: '1px solid rgba(200, 16, 30, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <IconComponent size={18} color="#E02228" />
                </div>

                {/* Text Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  {card.href ? (
                    <a
                      href={card.href}
                      target={isLinkedIn ? '_blank' : undefined}
                      rel={isLinkedIn ? 'noopener noreferrer' : undefined}
                      style={{
                        display: 'block',
                        color: 'var(--text-primary)',
                        textDecoration: 'none',
                        fontSize: isLinkedIn ? '0.78rem' : '0.85rem',
                        fontWeight: 500,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                      title={card.label}
                    >
                      {card.label}
                    </a>
                  ) : (
                    <span
                      style={{
                        display: 'block',
                        color: 'var(--text-primary)',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {card.label}
                    </span>
                  )}
                </div>

                {/* Quick Copy / Action Button */}
                <button
                  type="button"
                  onClick={() => handleCopy(card.copyValue, idx)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: copiedIndex === idx ? '#10B981' : 'var(--text-muted)',
                    cursor: 'pointer',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                  title="Copy to clipboard"
                >
                  {copiedIndex === idx ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .contact-pill-card:hover {
          border-color: rgba(220, 34, 40, 0.4) !important;
          transform: translateY(-2px);
        }
        @media (max-width: 1024px) {
          .contact-cards-row {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .contact-top-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 600px) {
          .contact-cards-row {
            grid-template-columns: 1fr !important;
          }
          .contact-form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
