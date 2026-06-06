"use client";

import { useState, useEffect } from "react";

export default function DeckPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { id: "slide-cover", label: "Cover" },
    { id: "slide-1", label: "Problem" },
    { id: "slide-2", label: "Why GenAI" },
    { id: "slide-3", label: "Segments" },
    { id: "slide-4", label: "Solution" },
    { id: "slide-5", label: "Metrics" },
    { id: "slide-6", label: "Pitfalls" }
  ];

  const handlePrint = (e: React.MouseEvent) => {
    e.preventDefault();
    window.print();
  };

  const scrollToSlide = (index: number) => {
    const el = document.getElementById(slides[index].id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSlide(index);
    }
  };

  const handleNext = () => {
    setActiveSlide((prev) => {
      const next = Math.min(prev + 1, slides.length - 1);
      const el = document.getElementById(slides[next].id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return next;
    });
  };

  const handlePrev = () => {
    setActiveSlide((prev) => {
      const next = Math.max(prev - 1, 0);
      const el = document.getElementById(slides[next].id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return next;
    });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Update active dot on manual scroll
  useEffect(() => {
    const container = document.getElementById("slides-container");
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      const height = container.clientHeight;
      if (height === 0) return;
      const index = Math.round(scrollPosition / height);
      if (index >= 0 && index < slides.length) {
        setActiveSlide(index);
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="deck-page">
      {/* Navigation */}
      <nav className="deck-nav">
        <div className="deck-logo">airbnb ✕ GenAI</div>
        <div className="deck-controls">
          <span className="deck-counter">7 Slides</span>
          <button
            onClick={handlePrint}
            className="deck-btn"
            id="deck-print-btn"
            style={{ textDecoration: "none", border: "none", background: "none", cursor: "pointer" }}
          >
            🖨️ Export PDF
          </button>
        </div>
      </nav>

      <div className="slides-wrapper" id="slides-container">
        {/* ── SLIDE 1: COVER SLIDE ── */}
        <section className="slide" id="slide-cover">
          <div
            className="slide-bg-orb"
            style={{ width: 600, height: 600, top: -250, left: -250, ["--orb-color" as any]: "rgba(255, 56, 92, 0.12)" }}
          />
          <div className="slide-content">
            <div className="slide-cover-grid">
              <div>
                <div className="slide-tag">Product Pitch Deck</div>
                <h1 style={{ fontSize: "clamp(36px, 4.5vw, 60px)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-2px", marginBottom: "20px" }}>
                  Airbnb <br /><span className="highlight">&quot;Anywhere Door&quot;</span>
                </h1>
                <p style={{ fontSize: "clamp(15px, 1.8vw, 19px)", opacity: 0.85, marginBottom: "40px", maxWidth: "600px" }}>
                  An AI-first reimagining of Airbnb for group travel and zero-friction trip planning.
                </p>
                <div className="presenter-info" style={{ marginTop: "40px", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "24px" }}>
                  <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--text-muted)", marginBottom: "8px", fontWeight: 700 }}>Submitted by</div>
                  <div style={{ fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.5px" }}>Aryan Mehra</div>
                  <div style={{ fontSize: "14px", color: "var(--text-secondary)", marginTop: "4px" }}>Enrollment Number: 23115025</div>
                </div>
              </div>
              
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <svg viewBox="0 0 200 300" style={{ width: "100%", maxHeight: "380px", filter: "drop-shadow(0 0 35px rgba(255,56,92,0.25))" }}>
                  <defs>
                    <linearGradient id="doorGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#ff385c" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                    <radialGradient id="portalGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="rgba(255, 56, 92, 0.35)" />
                      <stop offset="70%" stopColor="rgba(99, 102, 241, 0.1)" />
                      <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                  </defs>
                  {/* Outer Glow */}
                  <rect x="10" y="10" width="180" height="280" rx="15" fill="url(#portalGlow)" />
                  {/* Door Frame */}
                  <rect x="25" y="25" width="150" height="250" rx="10" fill="#08080c" stroke="url(#doorGrad)" strokeWidth="4" />
                  {/* Portal Interior */}
                  <rect x="33" y="33" width="134" height="234" rx="6" fill="#0b0c16" />
                  {/* Stars/Dots in Portal */}
                  <circle cx="50" cy="80" r="1.5" fill="#fff" opacity="0.8" />
                  <circle cx="150" cy="90" r="1" fill="#fff" opacity="0.5" />
                  <circle cx="90" cy="140" r="2" fill="#fff" opacity="0.9" />
                  <circle cx="120" cy="200" r="1.5" fill="#fff" opacity="0.6" />
                  <circle cx="60" cy="220" r="1" fill="#fff" opacity="0.4" />
                  {/* Neon Portal Swirls */}
                  <path d="M 60,70 Q 100,100 140,70" stroke="rgba(255,56,92,0.35)" strokeWidth="2" fill="none" />
                  <path d="M 50,180 Q 100,150 150,180" stroke="rgba(99, 102, 241, 0.35)" strokeWidth="2" fill="none" />
                  {/* Glowing Door Outline */}
                  <rect x="40" y="40" width="120" height="220" rx="4" fill="none" stroke="#ff385c" strokeWidth="1" strokeDasharray="5, 5" opacity="0.7" />
                  {/* Door Handle */}
                  <circle cx="145" cy="150" r="6" fill="#f59e0b" filter="drop-shadow(0 0 8px #f59e0b)" />
                  <rect x="143" y="150" width="4" height="15" rx="2" fill="#f59e0b" />
                </svg>
              </div>
            </div>
          </div>
          <div className="slide-number">01 / 07</div>
        </section>

        {/* ── SLIDE 2: PROBLEM ── */}
        <section className="slide" id="slide-1">
          <div
            className="slide-bg-orb"
            style={{ width: 500, height: 500, top: -200, right: -200, ["--orb-color" as any]: "rgba(255, 56, 92, 0.12)" }}
          />
          <div className="slide-content">
            <div className="slide-tag">02 / Problem</div>
            <h1>
              Travel planning is{" "}
              <span className="highlight">broken.</span>
            </h1>
            <p>
              The average Airbnb user spends <strong style={{ color: "var(--text-primary)" }}>4.2 hours</strong> across multiple sessions comparing listings, reading hundreds of reviews, cross-referencing dates, and coordinating with travel companions — before making a single booking.
            </p>
            <div className="stat-row">
              <div className="stat-item">
                <div className="stat-value">4.2h</div>
                <div className="stat-label">Avg. time to book</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">68%</div>
                <div className="stat-label">Users abandon mid-search</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">$9.6B</div>
                <div className="stat-label">Lost revenue from drop-offs</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">23+</div>
                <div className="stat-label">Filter options overwhelm users</div>
              </div>
            </div>
          </div>
          <div className="slide-number">02 / 07</div>
        </section>

        {/* ── SLIDE 3: WHY GENAI ── */}
        <section className="slide" id="slide-2">
          <div
            className="slide-bg-orb"
            style={{ width: 400, height: 400, bottom: -150, left: -100, ["--orb-color" as any]: "rgba(99, 102, 241, 0.12)" }}
          />
          <div className="slide-content">
            <div className="slide-tag">03 / Why GenAI</div>
            <h2>The Doraemon Principle</h2>
            <p>
              Doraemon&apos;s gadgets don&apos;t ask you to fill out forms — they understand your desire and deliver the outcome instantly. Generative AI enables the same magic: context-aware understanding that removes all friction between intent and outcome.
            </p>
            <div className="slide-grid">
              <div className="slide-card">
                <div className="slide-card-icon">🧠</div>
                <div className="slide-card-title">Context Understanding</div>
                <div className="slide-card-text">
                  LLMs parse natural language intent, group dynamics, budget constraints, and travel style in a single prompt.
                </div>
              </div>
              <div className="slide-card">
                <div className="slide-card-icon">⚡</div>
                <div className="slide-card-title">Instant Synthesis</div>
                <div className="slide-card-text">
                  Simultaneously curate listings, generate itineraries, and calculate cost splits — in under 3 seconds.
                </div>
              </div>
              <div className="slide-card">
                <div className="slide-card-icon">🎯</div>
                <div className="slide-card-title">Zero Friction</div>
                <div className="slide-card-text">
                  No filters, no sorting, no comparison paralysis. One input → perfect result. Traditional ML cannot do this.
                </div>
              </div>
            </div>
          </div>
          <div className="slide-number">03 / 07</div>
        </section>

        {/* ── SLIDE 4: USER SEGMENTS ── */}
        <section className="slide" id="slide-3">
          <div
            className="slide-bg-orb"
            style={{ width: 350, height: 350, top: -100, left: -100, ["--orb-color" as any]: "rgba(245, 158, 11, 0.12)" }}
          />
          <div className="slide-content">
            <div className="slide-tag">04 / User Segments</div>
            <h2>Who benefits <span className="highlight">most?</span></h2>
            <p>
              Three high-value segments with acute pain points that the Anywhere Door directly resolves — driving both booking conversion and revenue per trip.
            </p>
            <div className="slide-grid">
              <div className="slide-card">
                <div className="slide-card-icon">👨‍👩‍👧‍👦</div>
                <div className="slide-card-title">Group Travelers</div>
                <div className="slide-card-text">
                  Coordinating 4–10 people across preferences, budgets, and schedules. AI generates consensus-optimized plans instantly.
                </div>
              </div>
              <div className="slide-card">
                <div className="slide-card-icon">💼</div>
                <div className="slide-card-title">Business Nomads</div>
                <div className="slide-card-text">
                  Professionals needing fast, reliable bookings with workspace requirements. AI pre-qualifies listings against their non-negotiables.
                </div>
              </div>
              <div className="slide-card">
                <div className="slide-card-icon">🌍</div>
                <div className="slide-card-title">First-Time Internationals</div>
                <div className="slide-card-text">
                  Unfamiliar with local areas, visa requirements, and safety. AI acts as a local expert, guiding every decision.
                </div>
              </div>
            </div>
          </div>
          <div className="slide-number">04 / 07</div>
        </section>

        {/* ── SLIDE 5: SOLUTION DEEP DIVE ── */}
        <section className="slide" id="slide-4">
          <div
            className="slide-bg-orb"
            style={{ width: 600, height: 300, bottom: -100, right: -200, ["--orb-color" as any]: "rgba(255, 56, 92, 0.12)" }}
          />
          <div className="slide-content">
            <div className="slide-tag">05 / Solution</div>
            <h2>
              Introducing{" "}
              <span className="highlight">Anywhere Door</span>
            </h2>
            <p>
              A floating AI companion embedded directly in the Airbnb app. One prompt replaces the entire search-filter-compare-book journey. Powered by Gemini 2.5 Flash for speed, multimodal understanding, and structured output generation.
            </p>
            <div className="slide-grid" style={{ marginTop: 28 }}>
              <div className="slide-card">
                <div className="slide-card-icon">🗣️</div>
                <div className="slide-card-title">Natural Language Input</div>
                <div className="slide-card-text">&quot;Beach house in Bali for 6 people, July, ~$200/night, needs a pool.&quot;</div>
              </div>
              <div className="slide-card">
                <div className="slide-card-icon">🏡</div>
                <div className="slide-card-title">Curated Listings</div>
                <div className="slide-card-text">Top 3 AI-ranked properties with condensed review synthesis and key highlights.</div>
              </div>
              <div className="slide-card">
                <div className="slide-card-icon">🗓️</div>
                <div className="slide-card-title">Auto Itinerary</div>
                <div className="slide-card-text">Day-by-day activity plan tailored to group size, interests, and local events.</div>
              </div>
              <div className="slide-card">
                <div className="slide-card-icon">💰</div>
                <div className="slide-card-title">Cost Splitting</div>
                <div className="slide-card-text">Full trip budget breakdown with per-person split calculated automatically.</div>
              </div>
            </div>
          </div>
          <div className="slide-number">05 / 07</div>
        </section>

        {/* ── SLIDE 6: SUCCESS METRICS ── */}
        <section className="slide" id="slide-5">
          <div
            className="slide-bg-orb"
            style={{ width: 400, height: 400, top: -150, right: -100, ["--orb-color" as any]: "rgba(16, 185, 129, 0.12)" }}
          />
          <div className="slide-content">
            <div className="slide-tag">06 / Success Metrics</div>
            <h2>Measuring <span className="highlight">impact</span></h2>
            <p>
              We define success through three measurable outcomes tied directly to Airbnb&apos;s core revenue drivers and user satisfaction scores.
            </p>
            <div className="slide-grid" style={{ marginTop: 28 }}>
              <div className="slide-card">
                <div className="slide-card-icon">📈</div>
                <div className="slide-card-title">Booking Conversion Rate</div>
                <div className="slide-card-text">
                  <strong style={{ color: "#10b981" }}>Target: +22%</strong> for sessions using Anywhere Door vs. standard search. Measured via A/B test over 90 days.
                </div>
              </div>
              <div className="slide-card">
                <div className="slide-card-icon">💳</div>
                <div className="slide-card-title">Average Booking Value</div>
                <div className="slide-card-text">
                  <strong style={{ color: "#10b981" }}>Target: +18%</strong> increase in nightly rate booked. AI recommendations skew premium and multi-night.
                </div>
              </div>
              <div className="slide-card">
                <div className="slide-card-icon">⭐</div>
                <div className="slide-card-title">Net Promoter Score</div>
                <div className="slide-card-text">
                  <strong style={{ color: "#10b981" }}>Target: +15 NPS points</strong> from users who complete a trip planned via Anywhere Door.
                </div>
              </div>
              <div className="slide-card">
                <div className="slide-card-icon">⏱️</div>
                <div className="slide-card-title">Time-to-Book</div>
                <div className="slide-card-text">
                  <strong style={{ color: "#10b981" }}>Target: &lt;8 minutes</strong> from app open to confirmed booking for Anywhere Door users.
                </div>
              </div>
            </div>
          </div>
          <div className="slide-number">06 / 07</div>
        </section>

        {/* ── SLIDE 7: PITFALLS ── */}
        <section className="slide" id="slide-6">
          <div
            className="slide-bg-orb"
            style={{ width: 450, height: 450, bottom: -200, left: -150, ["--orb-color" as any]: "rgba(139, 92, 246, 0.12)" }}
          />
          <div className="slide-content">
            <div className="slide-tag">07 / Pitfalls &amp; Mitigations</div>
            <h2>
              What could go <span className="highlight">wrong?</span>
            </h2>
            <p>
              Proactive risk management is essential for a production-ready AI feature. We have identified the four critical failure modes and their mitigations.
            </p>
            <div className="slide-grid" style={{ marginTop: 28 }}>
              <div className="slide-card">
                <div className="slide-card-icon">🌀</div>
                <div className="slide-card-title">Hallucinated Listings</div>
                <div className="slide-card-text">
                  AI invents properties. <strong style={{ color: "var(--airbnb-coral)" }}>Fix:</strong> All listings are returned as structured queries matched against live Airbnb inventory API before display.
                </div>
              </div>
              <div className="slide-card">
                <div className="slide-card-icon">🔒</div>
                <div className="slide-card-title">User Privacy</div>
                <div className="slide-card-text">
                  Travel prompts contain personal preference data. <strong style={{ color: "var(--airbnb-coral)" }}>Fix:</strong> Server-side API calls only; no prompt data stored or used for training without consent.
                </div>
              </div>
              <div className="slide-card">
                <div className="slide-card-icon">⚡</div>
                <div className="slide-card-title">Latency</div>
                <div className="slide-card-text">
                  LLM calls can be slow. <strong style={{ color: "var(--airbnb-coral)" }}>Fix:</strong> Streaming responses with animated step-by-step UI; perceived wait time &lt;2s via progressive rendering.
                </div>
              </div>
              <div className="slide-card">
                <div className="slide-card-icon">💸</div>
                <div className="slide-card-title">API Cost at Scale</div>
                <div className="slide-card-text">
                  High-volume calls are expensive. <strong style={{ color: "var(--airbnb-coral)" }}>Fix:</strong> Gemini Flash (not Pro) + semantic caching for similar queries + rate limiting per session.
                </div>
              </div>
            </div>
          </div>
          <div className="slide-number">07 / 07</div>
        </section>
      </div>

      {/* Floating Presentation Controls */}
      <div className="presentation-dots">
        <button onClick={handlePrev} className="nav-arrow-btn" aria-label="Previous slide">
          ←
        </button>
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => scrollToSlide(idx)}
            className={`dot-btn ${activeSlide === idx ? "active" : ""}`}
            title={slide.label}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
        <button onClick={handleNext} className="nav-arrow-btn" aria-label="Next slide">
          →
        </button>
      </div>
    </div>
  );
}
