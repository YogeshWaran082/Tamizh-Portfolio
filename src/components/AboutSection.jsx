import React, { useEffect, useRef } from 'react';
import { MapPin, Briefcase } from 'lucide-react';
import gsap from 'gsap';

export default function AboutSection() {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const sigRef = useRef(null);
  const portraitRef = useRef(null);
  const frameRef = useRef(null);
  const circleRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  useEffect(() => {
    // Respect user's motion preferences
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const section = sectionRef.current;
    if (!section) return;

    let ctx;
    let observer;

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ctx = gsap.context(() => {
              const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

              // Step 1: Section eyebrow fades in
              tl.fromTo(
                eyebrowRef.current,
                { opacity: 0, y: -10 },
                { opacity: 1, y: 0, duration: 0.7 }
              );

              // Step 2: People, Process, Progress appear with small stagger
              if (headingRef.current) {
                const headingLines = headingRef.current.children;
                tl.fromTo(
                  headingLines,
                  { opacity: 0, y: 22 },
                  { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
                  '-=0.4'
                );
              }

              // Step 3: Description and signature fade upward
              tl.fromTo(
                [descRef.current, sigRef.current],
                { opacity: 0, y: 18 },
                { opacity: 1, y: 0, duration: 0.75, stagger: 0.15 },
                '-=0.5'
              );

              // Step 4: Background geometry & portrait reveal through subtle transition
              tl.fromTo(
                circleRef.current,
                { scale: 0.88, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1.1, ease: 'power3.out' },
                '-=0.8'
              );

              tl.fromTo(
                frameRef.current,
                { opacity: 0, scale: 0.96 },
                { opacity: 1, scale: 1, duration: 0.9 },
                '-=0.9'
              );

              tl.fromTo(
                portraitRef.current,
                { opacity: 0, y: 25 },
                { opacity: 1, y: 0, duration: 1.0, ease: 'power2.out' },
                '-=0.8'
              );

              // Step 5: Floating cards appear with restrained movement
              tl.fromTo(
                [card1Ref.current, card2Ref.current],
                { opacity: 0, x: 20, y: 10 },
                { opacity: 1, x: 0, y: 0, duration: 0.65, stagger: 0.15, ease: 'power3.out' },
                '-=0.5'
              );
            }, sectionRef);

            if (observer) {
              observer.disconnect();
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => {
      if (observer) observer.disconnect();
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="about-editorial-section">
      {/* Background Architectural Grid Lines */}
      <div className="about-arch-grid" aria-hidden="true">
        <div className="about-grid-line-x" />
        <div className="about-grid-line-y" />
      </div>

      {/* Decorative Burgundy Faceted Geometry */}
      <div className="about-geom-shard" aria-hidden="true" />

      {/* Bottom-left Corner Burgundy Wedge */}
      <div className="about-corner-facet" aria-hidden="true" />

      {/* Main Responsive Editorial Container */}
      <div className="about-editorial-container">
        <div className="about-two-col-layout">
          {/* Left Column: Eyebrow, Editorial Heading, Description, Signature */}
          <div className="about-text-column">
            {/* Section Eyebrow */}
            <div ref={eyebrowRef} className="about-eyebrow">
              <span className="about-eyebrow-accent" />
              <span>ABOUT ME</span>
            </div>

            {/* Editorial Heading: People / Process / Progress. */}
            <h2 ref={headingRef} className="about-editorial-heading">
              <span className="about-heading-line">People</span>
              <span className="about-heading-line">Process</span>
              <span className="about-heading-line about-heading-accent">Progress.</span>
            </h2>

            {/* Preserved Bio Description */}
            <p ref={descRef} className="about-description">
              MBA graduate with internship experience in human resources and quick commerce operations. Practical exposure to recruitment support, employee data entry, ESIC administration, inventory management, and daily operations. Academic project experience in supply chain management and Human Resource Information Systems (HRIS). Seeking an entry-level HR or operations role.
            </p>

            {/* Handwritten Signature: Right-aligned under paragraph */}
            <div ref={sigRef} className="about-signature-wrapper">
              <span className="about-signature-text">
                Tamizhvanan A
              </span>
            </div>
          </div>

          {/* Right Column: Architectural Frame, Portrait & 2 Floating Info Cards */}
          <div className="about-visual-column">
            {/* Portrait Framing & Artwork Area */}
            <div className="about-visual-inner">
              {/* Circular Crimson Ambient Backdrop */}
              <div ref={circleRef} className="about-crimson-circle" aria-hidden="true" />

              {/* Thin Architectural Rectangular Frame (Neck-level top border for layered head pop-out) */}
              <div ref={frameRef} className="about-architectural-frame" aria-hidden="true" />

              {/* Cutout Portrait Container */}
              <div ref={portraitRef} className="about-portrait-wrapper">
                <img
                  src="/images/about-striped-cutout.png"
                  alt="Tamizhvanan A"
                  className="about-portrait-img"
                  loading="eager"
                />
              </div>

              {/* Floating Info Card 01 (Upper-Right): Location */}
              <div ref={card1Ref} className="about-floating-card about-card-top">
                <div className="about-card-icon-box">
                  <MapPin size={17} color="#E02228" strokeWidth={2.2} />
                </div>
                <div className="about-card-text">
                  <div className="about-card-title">Viluppuram</div>
                  <div className="about-card-subtitle">Tamil Nadu</div>
                </div>
              </div>

              {/* Floating Info Card 02 (Lower-Right): Career Interest */}
              <div ref={card2Ref} className="about-floating-card about-card-bottom">
                <div className="about-card-icon-box">
                  <Briefcase size={17} color="#E02228" strokeWidth={2.2} />
                </div>
                <div className="about-card-text">
                  <div className="about-card-title">Open to</div>
                  <div className="about-card-subtitle about-highlight">
                    HR & Operations<br />Opportunities
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scoped CSS matching Image 2 with Pixel Precision */}
      <style>{`
        .about-editorial-section {
          background-color: #08090B;
          position: relative;
          overflow: hidden;
          padding: clamp(48px, 5.5vh, 68px) 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          scroll-margin-top: 85px;
        }

        /* Subtle Architectural Background Lines */
        .about-arch-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }

        .about-grid-line-x {
          position: absolute;
          top: 36%;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.05) 10%, rgba(255, 255, 255, 0.08) 45%, rgba(200, 16, 30, 0.16) 80%, transparent 100%);
        }

        .about-grid-line-y {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 4.5%;
          width: 1px;
          background: linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.05) 15%, rgba(255, 255, 255, 0.05) 85%, transparent 100%);
        }

        /* Faceted Burgundy Diagonal Geometry */
        .about-geom-shard {
          position: absolute;
          top: 25%;
          left: 10%;
          width: 82%;
          height: 52%;
          background: linear-gradient(120deg, rgba(88, 6, 14, 0.42) 0%, rgba(200, 16, 30, 0.22) 55%, transparent 85%);
          clip-path: polygon(0% 50%, 100% 14%, 100% 82%, 14% 68%);
          pointer-events: none;
          z-index: 1;
          opacity: 0.95;
        }

        /* Bottom-Left Corner Burgundy Wedge */
        .about-corner-facet {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 130px;
          height: 130px;
          background: linear-gradient(135deg, rgba(88, 6, 14, 0.5) 0%, rgba(200, 16, 30, 0.25) 50%, transparent 75%);
          clip-path: polygon(0 35%, 0 100%, 75% 100%);
          pointer-events: none;
          z-index: 1;
        }

        /* Centered Unified Responsive Container */
        .about-editorial-container {
          max-width: 1380px;
          width: calc(100% - clamp(36px, 5vw, 84px));
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* Two-Column Grid: Left 46%, Right 54% */
        .about-two-col-layout {
          display: grid;
          grid-template-columns: 46% 54%;
          align-items: center;
          gap: clamp(1.5rem, 3vw, 2.75rem);
          min-height: clamp(500px, 50vw, 620px);
        }

        /* Left Column Styles */
        .about-text-column {
          display: flex;
          flex-direction: column;
          z-index: 3;
          padding-top: clamp(4px, 1vh, 16px);
        }

        .about-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #E0E0E0;
          margin-bottom: 12px;
        }

        .about-eyebrow-accent {
          display: inline-block;
          width: 3.5px;
          height: 13px;
          background: #C8101E;
          border-radius: 1px;
          box-shadow: 0 0 8px rgba(200, 16, 30, 0.7);
        }

        .about-editorial-heading {
          font-family: var(--font-heading);
          font-size: clamp(52px, 4.8vw, 80px);
          font-weight: 400;
          line-height: 0.96;
          letter-spacing: -0.02em;
          color: #F5F1EF;
          margin: 0 0 18px 0;
          display: flex;
          flex-direction: column;
        }

        .about-heading-line {
          display: block;
        }

        .about-heading-accent {
          color: #C8101E;
          font-style: italic;
          font-family: var(--font-heading);
        }

        .about-description {
          font-size: clamp(14.5px, 1.05vw, 16px);
          line-height: 1.68;
          color: #C5C2C0;
          max-width: 530px;
          margin: 0 0 10px 0;
        }

        .about-signature-wrapper {
          display: flex;
          justify-content: flex-end;
          max-width: 530px;
          padding-right: 20px;
          margin-top: 6px;
        }

        .about-signature-text {
          font-family: var(--font-signature);
          font-size: clamp(2.3rem, 2.7vw, 2.9rem);
          color: #B5B0AE;
          letter-spacing: 0.03em;
        }

        /* Right Column Visual Composition */
        .about-visual-column {
          position: relative;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          height: clamp(500px, 45vw, 600px);
          z-index: 3;
          width: 100%;
        }

        .about-visual-inner {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }

        /* Circular Crimson Ambient Glow */
        .about-crimson-circle {
          position: absolute;
          width: clamp(360px, 30vw, 450px);
          height: clamp(360px, 30vw, 450px);
          border-radius: 50%;
          background: radial-gradient(circle at 48% 46%, #C8101E 0%, #900B15 45%, #58060E 75%, transparent 92%);
          top: 48%;
          left: 44%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 1;
          box-shadow: 0 0 80px rgba(200, 16, 30, 0.35);
        }

        /* Thin Architectural Rectangular Frame */
        .about-architectural-frame {
          position: absolute;
          top: 16%;
          bottom: 0;
          left: 4%;
          right: 65px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 2px;
          pointer-events: none;
          z-index: 2;
          box-shadow: inset 0 0 25px rgba(200, 16, 30, 0.08), 0 0 20px rgba(0, 0, 0, 0.5);
        }

        /* Integrated Cutout Portrait */
        .about-portrait-wrapper {
          position: relative;
          z-index: 3;
          height: 100%;
          width: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          pointer-events: none;
          padding-right: 35px;
        }

        .about-portrait-img {
          max-height: 100%;
          width: auto;
          max-width: 96%;
          object-fit: contain;
          object-position: bottom center;
          display: block;
          filter: drop-shadow(0 20px 35px rgba(0, 0, 0, 0.85));
        }

        /* Floating Info Cards */
        .about-floating-card {
          position: absolute;
          background: rgba(18, 18, 20, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(220, 34, 40, 0.38);
          border-radius: 14px;
          padding: 13px 17px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.85), 0 0 22px rgba(200, 16, 30, 0.18);
          z-index: 5;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .about-floating-card:hover {
          transform: translateY(-2px);
          border-color: rgba(220, 34, 40, 0.6);
        }

        .about-card-top {
          top: 14%;
          right: 8px;
          min-width: 175px;
          max-width: 210px;
        }

        .about-card-bottom {
          top: 54%;
          right: 8px;
          min-width: 175px;
          max-width: 210px;
        }

        .about-card-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(200, 16, 30, 0.18);
          border: 1px solid rgba(220, 34, 40, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .about-card-title {
          font-size: 13.5px;
          font-weight: 600;
          color: #FFFFFF;
          line-height: 1.2;
        }

        .about-card-subtitle {
          font-size: 11.5px;
          color: #AAA6A5;
          line-height: 1.25;
          margin-top: 2px;
        }

        .about-card-subtitle.about-highlight {
          color: #F5F1EF;
          font-weight: 500;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .about-architectural-frame {
            right: 45px;
          }
          .about-card-top {
            right: 0px;
            top: 12%;
          }
          .about-card-bottom {
            right: 0px;
            top: 52%;
          }
        }

        @media (max-width: 992px) {
          .about-two-col-layout {
            grid-template-columns: 1fr;
            gap: 2.25rem;
            min-height: auto;
          }
          .about-visual-column {
            height: auto;
            max-width: 460px;
            margin: 0 auto;
            width: 100%;
          }
          .about-visual-inner {
            height: 480px;
          }
          .about-portrait-wrapper {
            padding-right: 0;
          }
          .about-architectural-frame {
            left: 5%;
            right: 5%;
          }
          .about-card-top {
            right: 5px;
            top: 10%;
          }
          .about-card-bottom {
            right: 5px;
            top: 52%;
          }
        }

        @media (max-width: 768px) {
          .about-visual-inner {
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .about-portrait-wrapper {
            height: 380px;
            width: 100%;
          }
          .about-architectural-frame {
            top: 14%;
            bottom: 110px;
            left: 8%;
            right: 8%;
          }
          .about-floating-card {
            position: static;
            width: 90%;
            max-width: 290px;
            margin: 0.5rem auto 0;
          }
          .about-card-top, .about-card-bottom {
            right: auto;
            top: auto;
            bottom: auto;
          }
        }

        @media (max-width: 640px) {
          .about-editorial-section {
            padding: 42px 0;
          }
          .about-editorial-heading {
            font-size: clamp(38px, 11vw, 50px);
          }
          .about-description {
            font-size: 14px;
          }
          .about-signature-wrapper {
            justify-content: flex-end;
            padding-right: 12px;
          }
          .about-signature-text {
            font-size: 2.1rem;
          }
          .about-portrait-wrapper {
            height: 340px;
          }
          .about-crimson-circle {
            width: 270px;
            height: 270px;
          }
          .about-floating-card {
            padding: 11px 15px;
            gap: 12px;
            border-radius: 12px;
            width: 92%;
          }
          .about-card-icon-box {
            width: 32px;
            height: 32px;
          }
          .about-card-title {
            font-size: 12.5px;
          }
          .about-card-subtitle {
            font-size: 11px;
          }
        }
      `}</style>
    </section>
  );
}
