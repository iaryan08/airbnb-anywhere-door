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
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", background: "linear-gradient(135deg, #ff385c, #6366f1)", padding: "6px 16px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.1)" }}>
                    One Prompt. Perfect Trip. Zero Filters.
                  </span>
                </div>
                <h1 style={{ fontSize: "clamp(36px, 4.5vw, 60px)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-2px", marginBottom: "24px" }}>
                  Airbnb <br /><span className="highlight">Anywhere Door 🚪✨</span>
                </h1>
                <p style={{ fontSize: "clamp(15px, 1.8vw, 19px)", opacity: 0.85, marginBottom: "40px", maxWidth: "600px" }}>
                  An AI-first reimagining of Airbnb for group travel and zero-friction trip planning.
                </p>
                <div className="presenter-info" style={{ marginTop: "40px", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "24px" }}>
                  <div style={{ fontSize: "20px", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.5px" }}>Aryan Mehra</div>
                  <div style={{ fontSize: "13px", color: "var(--text-secondary)", marginTop: "4px" }}>Enrollment Number: 23115025</div>
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
            <h2>The Abandonment Funnel: <span className="highlight">Why traditional search bleeds $9.6B in booking revenue.</span></h2>
            
            <div style={{ display: "grid", gridTemplateColumns: "0.95fr 1.05fr", gap: "36px", marginTop: "32px", alignItems: "center" }}>
              {/* Left Side: 68% Stat Box */}
              <div className="slide-card" style={{ padding: "28px", borderLeft: "4px solid var(--airbnb-coral)" }}>
                <div style={{ fontSize: "52px", fontWeight: 900, color: "var(--airbnb-coral)", lineHeight: 1, marginBottom: "16px", background: "linear-gradient(135deg, #ff385c, #ff6b35)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>68%</div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff", marginBottom: "8px" }}>Search Abandonment Rate</div>
                <p style={{ fontSize: "12.5px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                  Users drop off mid-way through their search, resulting in an estimated <strong>$9.6B in lost booking revenue</strong> for the travel industry.
                </p>
              </div>

              {/* Right Side: Funnel Diagram */}
              <div className="funnel-container">
                <div className="funnel-stage">
                  <div className="funnel-stage-num">01</div>
                  <div className="funnel-stage-text">
                    <strong>Stage 1 (Top):</strong> 4.2 hours spent per trip comparing listings across multiple sessions.
                  </div>
                </div>
                <div className="funnel-stage" style={{ width: "92%", marginLeft: "4%" }}>
                  <div className="funnel-stage-num">02</div>
                  <div className="funnel-stage-text">
                    <strong>Stage 2 (Middle):</strong> Cognitive overload from toggling 23+ rigid search filters.
                  </div>
                </div>
                <div className="funnel-stage" style={{ width: "84%", marginLeft: "8%" }}>
                  <div className="funnel-stage-num">03</div>
                  <div className="funnel-stage-text">
                    <strong>Stage 3 (Bottom):</strong> Fragmented planning in external group chats and maps.
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Core Problem & Hypothesis */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginTop: "24px" }}>
              <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "8px", padding: "16px 20px" }}>
                <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--airbnb-coral)", fontWeight: 700, marginBottom: "4px" }}>Core Problem Statement</div>
                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1.5 }}>
                  Travel planning is broken. Traditional travel interfaces force users to act as database query tools rather than travelers.
                </p>
              </div>
              <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "8px", padding: "16px 20px" }}>
                <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#6366f1", fontWeight: 700, marginBottom: "4px" }}>Strategic Hypothesis</div>
                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1.5 }}>
                  If we remove the friction of comparison paralysis and external coordination via an intent-driven interface, booking conversion rates will drastically increase.
                </p>
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
            <div className="slide-tag">03 / Paradigm Shift</div>
            <h2>The Paradigm Shift: <span className="highlight">From query building to natural language intent execution.</span></h2>
            
            <table className="comparison-table">
              <thead>
                <tr style={{ borderBottom: "2px solid rgba(255,255,255,0.1)" }}>
                  <th className="comparison-header" style={{ width: "50%" }}>Traditional UI (Predictive ML)</th>
                  <th className="comparison-header" style={{ width: "50%", color: "var(--airbnb-coral)" }}>Anywhere Door (GenAI) 🌟</th>
                </tr>
              </thead>
              <tbody>
                <tr className="comparison-row">
                  <td className="comparison-cell">The user acts as a database engineer.</td>
                  <td className="comparison-cell anywhere-door-col"><strong>The Doraemon Principle:</strong> Remove all friction between user intent and travel outcome.</td>
                </tr>
                <tr className="comparison-row">
                  <td className="comparison-cell">Manual toggling of 23+ rigid checkboxes.</td>
                  <td className="comparison-cell anywhere-door-col">A single, conversational natural language prompt.</td>
                </tr>
                <tr className="comparison-row">
                  <td className="comparison-cell">Manual comparison paralysis; reading hundreds of unorganized reviews.</td>
                  <td className="comparison-cell anywhere-door-col">AI context understanding, live intent parsing, and constraint matching.</td>
                </tr>
                <tr className="comparison-row">
                  <td className="comparison-cell">A raw, overwhelming list of 100+ properties.</td>
                  <td className="comparison-cell anywhere-door-col">Top 3 curated matches with auto-synthesized Pros/Cons, custom drafted itinerary, and automated cost splits.</td>
                </tr>
              </tbody>
            </table>

            <div style={{ background: "rgba(99, 102, 241, 0.05)", border: "1px solid rgba(99, 102, 241, 0.15)", borderRadius: "8px", padding: "14px 20px", marginTop: "24px" }}>
              <p style={{ fontSize: "12.5px", color: "rgba(255,255,255,0.75)", margin: 0, textAlign: "center", lineHeight: 1.5 }}>
                <strong>Summary:</strong> Traditional ML only optimizes search rankings within rigid filters. Generative AI fundamentally synthesizes and generates the entire end-to-end trip experience in seconds.
              </p>
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
            <h2>Target demographics and the Anywhere Door unified solution.</h2>
            
            <div className="slide-grid" style={{ marginTop: "24px" }}>
              <div className="slide-card">
                <div className="slide-card-icon">👨‍👩‍👧‍👦</div>
                <div className="slide-card-title">Group Travelers</div>
                <div className="slide-card-text">
                  Stressed coordinators managing 4-10 differing opinions, budgets, and dates across external chats.
                </div>
              </div>
              <div className="slide-card">
                <div className="slide-card-icon">💼</div>
                <div className="slide-card-title">Business Nomads</div>
                <div className="slide-card-text">
                  Remote workers with strict non-negotiable constraints (e.g., guaranteed fast Wi-Fi, dedicated desk).
                </div>
              </div>
              <div className="slide-card">
                <div className="slide-card-icon">🌍</div>
                <div className="slide-card-title">First-Time Internationals</div>
                <div className="slide-card-text">
                  Users needing local guidance, safety reassurance, and visa/navigation security.
                </div>
              </div>
            </div>

            {/* Connecting Banner */}
            <div className="solution-overview-banner">
              <div className="solution-overview-title">
                ✨ Core Insight
              </div>
              <p style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff", margin: "0 0 8px 0" }}>
                Users don&apos;t want to search for a trip; they want to experience it.
              </p>
              <p style={{ fontSize: "12.5px", color: "rgba(255, 255, 255, 0.65)", margin: 0, lineHeight: 1.5 }}>
                <strong>High-Level Solution:</strong> The Anywhere Door acts as a floating conversational travel assistant that replaces the traditional search bar. It executes complex travel curation, itinerary drafting, and budget splitting in a single prompt.
              </p>
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
            <div className="slide-tag">05 / UX Flow</div>
            <h2>Architectural UX flow: <span className="highlight">Synthesizing a perfect trip in under three seconds.</span></h2>
            
            <div style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: "32px", marginTop: "24px", alignItems: "start" }}>
              {/* Left Column: Speech Bubble Input */}
              <div style={{ background: "linear-gradient(135deg, rgba(255, 56, 92, 0.08), rgba(99, 102, 241, 0.08))", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "16px", padding: "24px", position: "relative" }}>
                <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: "8px", fontWeight: 700 }}>Conversational Input Prompt</div>
                <p style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff", margin: 0, lineHeight: 1.5 }}>
                  &quot;A quiet, remote cabin in the mountains for 4 friends under $250/night, must have a hot tub and fast Wi-Fi for remote work&quot;
                </p>
                {/* Visual bubble pointer */}
                <div style={{ position: "absolute", right: "-10px", top: "50px", width: "20px", height: "20px", background: "#08080c", borderLeft: "1px solid rgba(255, 255, 255, 0.1)", borderBottom: "1px solid rgba(255, 255, 255, 0.1)", transform: "rotate(-135deg)" }} />
              </div>

              {/* Right Column: 4 Steps with Previews */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {/* Step 1 */}
                <div className="slide-card" style={{ padding: "14px 18px" }}>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff", display: "flex", justifyContent: "space-between" }}>
                    <span>1. AI Property Matchmaker</span>
                    <span style={{ fontSize: "11px", color: "var(--airbnb-coral)", fontWeight: 600 }}>Gemini 3.5 Flash + Tavily API</span>
                  </div>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", margin: "4px 0 8px 0" }}>Parses multi-variable constraints to surface the top 3 exact matches using high-speed structured JSON.</p>
                  <div className="ux-flow-step-preview" style={{ display: "flex", gap: "8px", justifyContent: "space-between", margin: 0 }}>
                    <span>🏡 Cabin #1: $220/night (WiFi, Tub)</span>
                    <span>🏡 Cabin #2: $245/night (WiFi, Tub)</span>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="slide-card" style={{ padding: "14px 18px" }}>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff" }}>2. Review Synthesizer</div>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", margin: "4px 0 8px 0" }}>Condenses hundreds of fragmented guest reviews into a scannable Pros &amp; Cons bulleted summary.</p>
                  <div className="ux-flow-step-preview" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", margin: 0 }}>
                    <span style={{ color: "#34d399" }}>🟢 Pros: Stunning views, clean, amazing tub</span>
                    <span style={{ color: "#f87171" }}>🔴 Cons: Steep driveway, cell signal</span>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="slide-card" style={{ padding: "14px 18px" }}>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff" }}>3. Tailored Daily Itineraries</div>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", margin: "4px 0 8px 0" }}>Automatically drafts a custom day-by-day activity plan pushed directly into the Trips tab.</p>
                  <div className="ux-flow-step-preview" style={{ display: "flex", justifyContent: "space-between", margin: 0 }}>
                    <span>🚶 09:00 AM: Hike to Blue Lake (2.5 mi)</span>
                    <span>🍴 01:00 PM: Lunch at Mountain Cafe</span>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="slide-card" style={{ padding: "14px 18px" }}>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff" }}>4. Smart Split Billing</div>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", margin: "4px 0 8px 0" }}>Generates an automated per-person split billing ledger to eliminate group checkout friction.</p>
                  <div className="ux-flow-step-preview" style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, color: "var(--airbnb-coral)", margin: 0 }}>
                    <span>💰 Total Cost: $250.00</span>
                    <span>👥 Per Person Split (x4): $62.50 each</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", marginTop: "20px", paddingTop: "12px", fontSize: "11px", color: "var(--text-muted)", textAlign: "center" }}>
              <strong>Technical Infrastructure:</strong> Built with a CORS-Free Geolocation Proxy (<code>/api/geolocation</code>) and dual-mode responsive design to ensure a native-feeling prototype across mobile and desktop.
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
            <h2>Measuring strategic impact: <span className="highlight">Increasing revenue and eliminating operational friction.</span></h2>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginTop: "32px" }}>
              {/* Metric 1 */}
              <div className="slide-card" style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <div style={{ fontSize: "32px", width: "56px", height: "56px", borderRadius: "50%", background: "rgba(52, 211, 153, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#34d399", flexShrink: 0, fontWeight: 800 }}>↑</div>
                <div>
                  <div style={{ fontSize: "20px", fontWeight: 800, color: "#ffffff" }}>+22% Conversion Increase</div>
                  <p style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.55)", margin: "4px 0 0 0", lineHeight: 1.4 }}>Eliminating the 68% search abandonment rate by curing comparison paralysis.</p>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="slide-card" style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <div style={{ fontSize: "32px", width: "56px", height: "56px", borderRadius: "50%", background: "rgba(248, 113, 113, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#f87171", flexShrink: 0, fontWeight: 800 }}>↓</div>
                <div>
                  <div style={{ fontSize: "20px", fontWeight: 800, color: "#ffffff" }}>&lt; 8 Minutes Time Saved</div>
                  <p style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.55)", margin: "4px 0 0 0", lineHeight: 1.4 }}>Reduction in Time-to-Book from 4.2 hours to under 8 minutes via context-aware prompt execution.</p>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="slide-card" style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <div style={{ fontSize: "32px", width: "56px", height: "56px", borderRadius: "50%", background: "rgba(52, 211, 153, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#34d399", flexShrink: 0, fontWeight: 800 }}>↑</div>
                <div>
                  <div style={{ fontSize: "20px", fontWeight: 800, color: "#ffffff" }}>+18% Revenue Uplift</div>
                  <p style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.55)", margin: "4px 0 0 0", lineHeight: 1.4 }}>Seamlessly capturing multi-guest details and upselling premium group listings to increase Average Booking Value (ABV).</p>
                </div>
              </div>

              {/* Metric 4 */}
              <div className="slide-card" style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <div style={{ fontSize: "26px", width: "56px", height: "56px", borderRadius: "50%", background: "rgba(99, 102, 241, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#6366f1", flexShrink: 0 }}>😊</div>
                <div>
                  <div style={{ fontSize: "20px", fontWeight: 800, color: "#ffffff" }}>+15 NPS Engagement Growth</div>
                  <p style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.55)", margin: "4px 0 0 0", lineHeight: 1.4 }}>Drastic reduction in group coordination stress via shared itineraries and split billing.</p>
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
            <div className="slide-tag">07 / Risk Mitigation</div>
            <h2>Proactive risk mitigation: <span className="highlight">Engineering trust and scalability into the AI layer.</span></h2>
            
            <div className="risk-workaround-panel">
              {/* Column 1: Inherent Risks */}
              <div className="slide-card" style={{ borderTop: "4px solid #f87171" }}>
                <div className="risk-col-title" style={{ color: "#f87171" }}>
                  <span>⚠️ Inherent Risk</span>
                </div>
                <div className="risk-col-item">
                  <strong>Hallucinations:</strong> Risk of the AI recommending non-existent amenities or phantom properties.
                </div>
                <div className="risk-col-item">
                  <strong>Latency:</strong> Risk of users abandoning the app during slow LLM generation times.
                </div>
                <div className="risk-col-item">
                  <strong>User Privacy:</strong> Risk of exposing PII (Personally Identifiable Information) in complex travel prompts.
                </div>
                <div className="risk-col-item">
                  <strong>Scalability &amp; Costs:</strong> Risk of expensive LLM calls bankrupting the feature at scale.
                </div>
              </div>

              {/* Column 2: Engineered Workarounds */}
              <div className="slide-card" style={{ borderTop: "4px solid #34d399" }}>
                <div className="risk-col-title" style={{ color: "#34d399" }}>
                  <span>✅ Engineered Workaround</span>
                </div>
                <div className="risk-col-item">
                  The AI outputs <strong>structured JSON constraints</strong> passed directly into live, verified Airbnb inventory matching APIs, ensuring 100% reality grounding.
                </div>
                <div className="risk-col-item">
                  Implementing <strong>progressive rendering</strong> and <strong>animated step-by-step progress tracking UI</strong>, keeping perceived wait time under 2 seconds.
                </div>
                <div className="risk-col-item">
                  Server-side API processing and proxy routing; <strong>zero persistent storage</strong> of user prompt details without explicit opt-in consent.
                </div>
                <div className="risk-col-item">
                  Deploying <strong>semantic query caching</strong>, session rate-limiting, and utilizing highly cost-efficient Google Gemini 3.5 Flash models.
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
