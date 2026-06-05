"use client";

export default function DeckPage() {
  const handlePrint = (e: React.MouseEvent) => {
    e.preventDefault();
    window.print();
  };

  return (
    <div className="deck-page">
      {/* Navigation */}
      <nav className="deck-nav">
        <div className="deck-logo">airbnb ✕ GenAI</div>
        <div className="deck-controls">
          <span className="deck-counter">6 Slides</span>
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
        {/* ── SLIDE 1: PROBLEM ── */}
        <section className="slide" id="slide-1">
          <div
            className="slide-bg-orb"
            style={{ width: 500, height: 500, background: "var(--airbnb-coral)", top: -200, right: -200 }}
          />
          <div className="slide-content">
            <div className="slide-tag">01 / Problem</div>
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
          <div className="slide-number">01 / 06</div>
        </section>

        {/* ── SLIDE 2: WHY GENAI ── */}
        <section className="slide" id="slide-2">
          <div
            className="slide-bg-orb"
            style={{ width: 400, height: 400, background: "#6366f1", bottom: -150, left: -100 }}
          />
          <div className="slide-content">
            <div className="slide-tag">02 / Why GenAI</div>
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
          <div className="slide-number">02 / 06</div>
        </section>

        {/* ── SLIDE 3: USER SEGMENTS ── */}
        <section className="slide" id="slide-3">
          <div
            className="slide-bg-orb"
            style={{ width: 350, height: 350, background: "#f59e0b", top: -100, left: -100 }}
          />
          <div className="slide-content">
            <div className="slide-tag">03 / User Segments</div>
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
          <div className="slide-number">03 / 06</div>
        </section>

        {/* ── SLIDE 4: SOLUTION DEEP DIVE ── */}
        <section className="slide" id="slide-4">
          <div
            className="slide-bg-orb"
            style={{ width: 600, height: 300, background: "var(--airbnb-coral)", bottom: -100, right: -200 }}
          />
          <div className="slide-content">
            <div className="slide-tag">04 / Solution</div>
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
          <div className="slide-number">04 / 06</div>
        </section>

        {/* ── SLIDE 5: SUCCESS METRICS ── */}
        <section className="slide" id="slide-5">
          <div
            className="slide-bg-orb"
            style={{ width: 400, height: 400, background: "#10b981", top: -150, right: -100 }}
          />
          <div className="slide-content">
            <div className="slide-tag">05 / Success Metrics</div>
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
          <div className="slide-number">05 / 06</div>
        </section>

        {/* ── SLIDE 6: PITFALLS ── */}
        <section className="slide" id="slide-6">
          <div
            className="slide-bg-orb"
            style={{ width: 450, height: 450, background: "#8b5cf6", bottom: -200, left: -150 }}
          />
          <div className="slide-content">
            <div className="slide-tag">06 / Pitfalls &amp; Mitigations</div>
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
          <div className="slide-number">06 / 06</div>
        </section>
      </div>

    </div>
  );
}
