import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { LinkedinIcon } from './Icons';

export default function Footer() {
  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      style={{
        backgroundColor: '#08090B',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '3.5rem 0 2.5rem 0',
        position: 'relative',
      }}
    >
      <div className="editorial-container">
        {/* Main Footer Row matching Image 2 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
            paddingBottom: '2.5rem',
          }}
        >
          {/* Brand & Subtitle */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.45rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: '#FFFFFF',
                marginBottom: '0.25rem',
              }}
            >
              TAMIZHVANAN A
            </h3>
            <p
              style={{
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
                letterSpacing: '0.03em',
              }}
            >
              MBA Graduate | Human Resources and Operations
            </p>
          </div>

          {/* Center Navigation Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.75rem',
              flexWrap: 'wrap',
            }}
          >
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#FFFFFF')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: Follow Me & Social Icons matching Image 2 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
              Follow Me
            </span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/tamizhvanan-a-632aa3309/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#171719',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                title="LinkedIn"
              >
                <LinkedinIcon size={14} />
              </a>

              {/* Mail */}
              <a
                href="mailto:tamizhvanan752@gmail.com"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#171719',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                title="Email"
              >
                <Mail size={14} />
              </a>

              {/* Phone */}
              <a
                href="tel:+918870066024"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#171719',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                title="Phone Call"
              >
                <Phone size={14} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918870066024"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#171719',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                title="WhatsApp Direct"
              >
                <MessageCircle size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Fine Horizontal Divider Line matching Image 2 */}
        <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.08)', width: '100%', marginBottom: '1.75rem' }} />

        {/* Bottom Rights Row matching Image 2 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
          }}
        >
          <p>© 2026 Tamizhvanan A. All rights reserved.</p>
          <p style={{ letterSpacing: '0.04em' }}>
            Built with passion · Always learning · Open to opportunities
          </p>
        </div>
      </div>
    </footer>
  );
}
