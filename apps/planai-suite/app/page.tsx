'use client';

import { useState, useEffect, useRef } from "react";

type KeywordMatch = {
  text: string;
  intent: string;
  score: number;
  action: string;
};

type ScanResult =
  | { found: true } & KeywordMatch
  | { found: false };

type Tick = { time: string; event: string; score: number | null };

const TOOLS = [
  { id: "receptionist", icon: "🤖", name: "AI Receptionist", tag: "LIVE", color: "#FFC800", desc: "Scans every comment for buying signals. Auto-replies. Captures leads while you sleep.", stat: "12x more leads", proof: "avg. per client" },
  { id: "planning", icon: "📋", name: "Business Planning", tag: "BUILDING", color: "#34D399", desc: "Generate investor-grade business plans in 4 minutes. Naija market intelligence built in.", stat: "4 min", proof: "full plan" },
  { id: "branding", icon: "🎨", name: "Branding & Design", tag: "BUILDING", color: "#818CF8", desc: "Logo, brand kit, color palette, typography — all generated and yours instantly.", stat: "₦0", proof: "vs ₦150k agency" },
  { id: "forecasting", icon: "📈", name: "Financial Forecast", tag: "PLANNED", color: "#F472B6", desc: "5-year projections, break-even analysis, cash flow — built for Nigerian market realities.", stat: "94%", proof: "accuracy rate" },
  { id: "storefronts", icon: "🏪", name: "Digital Storefront", tag: "PLANNED", color: "#FB923C", desc: "Full e-commerce in 10 minutes. Paystack integrated. No-code. No wahala.", stat: "10 min", proof: "store live" },
  { id: "marketing", icon: "📢", name: "Marketing Engine", tag: "PLANNED", color: "#2DD4BF", desc: "Content calendars, ad copy, WhatsApp campaigns — all AI-generated for your business.", stat: "80%", proof: "less manual work" },
];

const KEYWORDS: KeywordMatch[] = [
  { text: "how much", intent: "PRICE INQUIRY", score: 74, action: "DM + Reply" },
  { text: "interested", intent: "PURCHASE INTENT", score: 88, action: "Capture Lead" },
  { text: "i wan buy", intent: "PURCHASE INTENT", score: 91, action: "Hot Lead 🔥" },
  { text: "demo please", intent: "DEMO REQUEST", score: 68, action: "DM + Reply" },
  { text: "wholesale", intent: "PARTNERSHIP", score: 55, action: "Business Inquiry" },
  { text: "scam!", intent: "COMPLAINT", score: 50, action: "Priority Reply" },
];

const TICKS: Tick[] = [
  { time: "09:14", event: "🔥 HOT LEAD: Adaeze asked 'how much for bulk?'", score: 91 },
  { time: "09:22", event: "💬 AUTO-REPLY sent to Emeka's comment", score: null },
  { time: "09:31", event: "📋 NEW LEAD: Fatima — interested in services", score: 74 },
  { time: "09:45", event: "🔥 HOT LEAD: Chukwudi — 'i wan buy today'", score: 95 },
  { time: "10:02", event: "💬 AUTO-REPLY sent to Instagram comment", score: null },
  { time: "10:18", event: "📋 NEW LEAD: Partnership inquiry from Kola", score: 62 },
];

function LiveDemoWidget() {
  const [comment, setComment] = useState("");
  const [result, setResult] = useState<ScanResult | null>(null);
  const [scanning, setScanning] = useState(false);
  const [tickIdx, setTickIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTickIdx(i => (i + 1) % TICKS.length), 2800);
    return () => clearInterval(id);
  }, []);

  const scan = () => {
    if (!comment.trim()) return;
    setScanning(true);
    setResult(null);
    setTimeout(() => {
      const lower = comment.toLowerCase();
      const match = KEYWORDS.find(k => lower.includes(k.text.toLowerCase()));
      if (match) {
        setResult({ found: true, ...match });
      } else {
        setResult({ found: false });
      }
      setScanning(false);
    }, 1200);
  };

  const tick = TICKS[tickIdx];
  const score = tick.score;

  return (
    <div style={{ background: "rgba(255,200,0,0.04)", border: "1px solid rgba(255,200,0,0.15)", borderRadius: 20, padding: "28px 24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 6px #22C55E", display: "inline-block" }} />
        <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#22C55E", fontFamily: "monospace" }}>LIVE KEYWORD SCANNER</span>
      </div>

      {/* Activity feed */}
      <div style={{ background: "rgba(0,0,0,0.4)", borderRadius: 12, padding: "12px 14px", marginBottom: 16, height: 52, overflow: "hidden", position: "relative" }}>
        <div key={tickIdx} style={{ animation: "tickin 0.4s ease-out forwards", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", fontFamily: "monospace" }}>
            <span style={{ color: "#FFC800", marginRight: 8 }}>{tick.time}</span>
            {tick.event}
          </span>
          {score != null && (
            <span style={{ fontSize: 11, padding: "2px 8px", background: score >= 85 ? "rgba(239,68,68,0.2)" : "rgba(255,200,0,0.15)", color: score >= 85 ? "#F87171" : "#FFC800", borderRadius: 6, fontFamily: "monospace", flexShrink: 0 }}>
              {score}/100
            </span>
          )}
        </div>
      </div>

      {/* Try it */}
      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 10, fontFamily: "monospace", letterSpacing: "0.05em" }}>// TRY IT — paste any comment:</p>
      <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
        <input
          value={comment}
          onChange={e => setComment(e.target.value)}
          onKeyDown={e => e.key === "Enter" && scan()}
          placeholder="e.g. how much for 10 pieces?"
          style={{ flex: 1, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 10, padding: "11px 14px", color: "#fff", fontSize: 13, outline: "none", fontFamily: "monospace" }}
        />
        <button onClick={scan} disabled={scanning} style={{ padding: "11px 18px", background: "#FFC800", border: "none", borderRadius: 10, color: "#0A0A06", fontWeight: 800, fontSize: 12, cursor: "pointer", letterSpacing: "0.08em", whiteSpace: "nowrap" }}>
          {scanning ? "..." : "SCAN →"}
        </button>
      </div>

      {result && (
        <div style={{ padding: "14px 16px", background: result.found ? "rgba(255,200,0,0.08)" : "rgba(255,255,255,0.04)", border: `1px solid ${result.found ? "rgba(255,200,0,0.3)" : "rgba(255,255,255,0.08)"}`, borderRadius: 12 }}>
          {result.found ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 11, color: "#FFC800", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "monospace" }}>🎯 KEYWORD MATCH</span>
                <span style={{ fontSize: 11, background: "rgba(255,200,0,0.15)", color: "#FFC800", padding: "2px 10px", borderRadius: 6, fontFamily: "monospace" }}>{result.score}/100</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                {[["keyword", `"${result.text}"`], ["intent", result.intent], ["action", result.action]].map(([l, v]) => (
                  <div key={l} style={{ background: "rgba(0,0,0,0.3)", padding: "8px 10px", borderRadius: 8 }}>
                    <div style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 3, fontFamily: "monospace" }}>{l}</div>
                    <div style={{ fontSize: 12, color: "#fff", fontFamily: "monospace", fontWeight: 700 }}>{v}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 2, fontFamily: "monospace" }}>→ AI reply generated + lead saved to dashboard</p>
            </div>
          ) : (
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }}>// No keyword match. Comment monitored but no lead captured.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default function PlanAILanding() {
  const [activeTab, setActiveTab] = useState("receptionist");
  const [heroCount, setHeroCount] = useState(0);
  const activeTool = TOOLS.find(t => t.id === activeTab);

  useEffect(() => {
    let n = 0;
    const target = 847;
    const id = setInterval(() => {
      n = Math.min(n + 13, target);
      setHeroCount(n);
      if (n >= target) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ background: "#0A0A06", color: "#F0EDE4", minHeight: "100vh", fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,600;1,9..40,400&display=swap');
        .syn { font-family: 'Syne', sans-serif; }
        .grain { position: fixed; inset: 0; pointer-events: none; z-index: 999; opacity: 0.022; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)'/%3E%3C/svg%3E"); }
        @keyframes tickin { from { opacity:0; transform: translateY(8px); } to { opacity:1; transform: translateY(0); } }
        @keyframes glow { 0%,100%{box-shadow:0 0 20px rgba(255,200,0,0.15)} 50%{box-shadow:0 0 40px rgba(255,200,0,0.3)} }
        @keyframes fadein { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes scan { 0%{transform:translateX(-100%)} 100%{transform:translateX(400%)} }
        .glow { animation: glow 3s ease-in-out infinite; }
        .fadein { animation: fadein 0.7s ease-out forwards; }
        .tool-tab { border: 1px solid rgba(255,255,255,0.07); background: rgba(255,255,255,0.02); cursor: pointer; transition: all 0.2s; border-radius: 14px; padding: 14px 16px; text-align: left; }
        .tool-tab:hover { background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.12); }
        .tool-tab.active { background: rgba(255,200,0,0.07); border-color: rgba(255,200,0,0.35); }
        .pill { font-size: 9px; font-weight: 800; letter-spacing: 0.18em; padding: 2px 8px; border-radius: 20px; border: 1px solid; }
        .pill.live { background: rgba(34,197,94,0.12); color: #22C55E; border-color: rgba(34,197,94,0.3); }
        .pill.building { background: rgba(255,200,0,0.1); color: #FFC800; border-color: rgba(255,200,0,0.25); }
        .pill.planned { background: rgba(99,102,241,0.1); color: #818CF8; border-color: rgba(99,102,241,0.25); }
        .cta-btn { padding: 16px 32px; background: #FFC800; border: none; border-radius: 12px; color: #0A0A06; font-weight: 800; font-size: 15px; cursor: pointer; letter-spacing: 0.04em; transition: all 0.2s; font-family: 'Syne', sans-serif; }
        .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(255,200,0,0.35); }
        .sec-btn { padding: 16px 32px; background: transparent; border: 1px solid rgba(255,255,255,0.2); border-radius: 12px; color: rgba(255,255,255,0.7); font-weight: 600; font-size: 15px; cursor: pointer; transition: all 0.2s; }
        .sec-btn:hover { border-color: rgba(255,255,255,0.4); color: #fff; }
        .stat-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 18px; padding: 24px; }
        ::-webkit-scrollbar{width:3px} ::-webkit-scrollbar-track{background:#0A0A06} ::-webkit-scrollbar-thumb{background:rgba(255,200,0,0.3);border-radius:2px}
        input::placeholder { color: rgba(255,255,255,0.25); }
      `}</style>

      <div className="grain" />

      {/* Ambient glows */}
      <div style={{ position: "fixed", top: "-10%", right: "5%", width: 600, height: 600, background: "radial-gradient(circle, rgba(255,200,0,0.06) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", bottom: "-5%", left: "10%", width: 400, height: 400, background: "radial-gradient(circle, rgba(129,140,248,0.05) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />

      {/* ── NAV ── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, padding: "0 48px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", backdropFilter: "blur(16px)", background: "rgba(10,10,6,0.85)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <a href="https://boldmind.ng" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <span style={{ fontSize: 20 }}>🚀</span>
          <span className="syn" style={{ color: "#F0EDE4", fontWeight: 700, fontSize: 16 }}>PlanAI</span>
          <span style={{ fontSize: 10, padding: "2px 8px", background: "rgba(255,200,0,0.12)", color: "#FFC800", borderRadius: 20, border: "1px solid rgba(255,200,0,0.3)", fontWeight: 800, letterSpacing: "0.12em" }}>BETA</span>
        </a>
        <div style={{ display: "flex", gap: 6 }}>
          {["Tools", "Pricing", "Docs", "Community"].map(l => (
            <a key={l} href="#" style={{ padding: "6px 14px", color: "rgba(240,237,228,0.45)", fontSize: 13, fontWeight: 500, textDecoration: "none", borderRadius: 8, transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#F0EDE4")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,237,228,0.45)")}
            >{l}</a>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <a href="https://boldmind.ng/login?redirect=https://planai.boldmind.ng" style={{ padding: "9px 20px", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 10, color: "rgba(240,237,228,0.7)", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>Sign in</a>
          <a href="https://boldmind.ng/register?redirect=https://planai.boldmind.ng" style={{ padding: "9px 20px", background: "#FFC800", borderRadius: 10, color: "#0A0A06", fontSize: 13, fontWeight: 800, textDecoration: "none" }}>Start Free →</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "120px 48px 80px", textAlign: "center", position: "relative" }}>
        {/* Grid overlay */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

        {/* Scan line animation */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "100%", overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "25%", height: "100%", background: "linear-gradient(90deg, transparent, rgba(255,200,0,0.03), transparent)", animation: "scan 8s linear infinite" }} />
        </div>

        <div className="fadein" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", border: "1px solid rgba(255,200,0,0.25)", borderRadius: 30, background: "rgba(255,200,0,0.06)", marginBottom: 32 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 6px #22C55E", display: "inline-block" }} />
          <span style={{ color: "#FFC800", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>AI Business Suite · Made for Nigerian Entrepreneurs</span>
        </div>

        <h1 className="syn fadein" style={{ fontSize: "clamp(44px, 8vw, 94px)", fontWeight: 800, lineHeight: 1.0, marginBottom: 24, maxWidth: 880, animationDelay: "0.1s" }}>
          Your Business.<br />
          <span style={{ color: "#FFC800" }}>Automated.</span><br />
          <span style={{ color: "rgba(240,237,228,0.45)" }}>24/7.</span>
        </h1>

        <p className="fadein" style={{ color: "rgba(240,237,228,0.55)", fontSize: "clamp(16px, 2vw, 20px)", maxWidth: 600, lineHeight: 1.75, marginBottom: 48, animationDelay: "0.2s", fontWeight: 300 }}>
          AI-powered tools that capture leads from your comments, write business plans, generate brand kits, and forecast your revenue — while you focus on delivering.
        </p>

        <div className="fadein" style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center", marginBottom: 64, animationDelay: "0.3s" }}>
          <button className="cta-btn" onClick={() => window.location.href = "https://boldmind.ng/register?redirect=https://planai.boldmind.ng"}>
            Start Free — No Card Required
          </button>
          <button className="sec-btn" onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}>
            See Live Demo ↓
          </button>
        </div>

        {/* Social proof ticker */}
        <div className="fadein" style={{ animationDelay: "0.45s", display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap" }}>
          {[
            { n: heroCount.toLocaleString(), label: "Leads Captured Today", color: "#FFC800" },
            { n: "₦12M+", label: "Revenue Attributed", color: "#34D399" },
            { n: "94%", label: "Reply Accuracy", color: "#818CF8" },
          ].map(({ n, label, color }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div className="syn" style={{ fontSize: 36, fontWeight: 800, color, lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 11, color: "rgba(240,237,228,0.35)", marginTop: 5, letterSpacing: "0.12em", textTransform: "uppercase" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LIVE DEMO ── */}
      <section id="demo" style={{ padding: "80px 48px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ color: "#FFC800", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 12, fontWeight: 700 }}>AI Receptionist</p>
            <h2 className="syn" style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, marginBottom: 16 }}>
              Every Comment Is a Sales Lead.<br />
              <span style={{ color: "rgba(240,237,228,0.45)" }}>You Just Can't Read Them All.</span>
            </h2>
            <p style={{ color: "rgba(240,237,228,0.5)", fontSize: 17, maxWidth: 520, margin: "0 auto", lineHeight: 1.7, fontWeight: 300 }}>
              Post on Facebook or Instagram. Our AI reads every single comment, identifies buyers, replies instantly, and captures leads — even at 3 AM.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {/* Left: How it works */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { step: "01", title: "You post on social media", desc: "Facebook, Instagram — anything you post is now monitored.", icon: "📱" },
                { step: "02", title: "AI scans every comment", desc: "Keywords like 'how much', 'interested', 'i wan buy' — all caught instantly.", icon: "🔍" },
                { step: "03", title: "Lead captured + auto-reply", desc: "Comment gets a reply in your voice. Buyer gets a DM with more info.", icon: "⚡" },
                { step: "04", title: "You get WhatsApp alert", desc: "Hot leads (score 70+) ping you immediately. Cold leads wait in dashboard.", icon: "🔥" },
              ].map(({ step, title, desc, icon }) => (
                <div key={step} style={{ display: "flex", gap: 16, padding: "18px 20px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(255,200,0,0.1)", border: "1px solid rgba(255,200,0,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
                    {icon}
                  </div>
                  <div>
                    <p style={{ fontSize: 9, color: "#FFC800", letterSpacing: "0.2em", fontWeight: 800, marginBottom: 4 }}>STEP {step}</p>
                    <h4 style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{title}</h4>
                    <p style={{ fontSize: 13, color: "rgba(240,237,228,0.45)", lineHeight: 1.6, fontWeight: 300 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Live demo */}
            <LiveDemoWidget />
          </div>
        </div>
      </section>

      {/* ── TOOLS SUITE ── */}
      <section style={{ padding: "80px 48px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 className="syn" style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, marginBottom: 14 }}>
              6 AI Tools. One Suite.
            </h2>
            <p style={{ color: "rgba(240,237,228,0.45)", fontSize: 17, fontWeight: 300 }}>Everything a Nigerian entrepreneur needs — minus the agencies, the waiting, and the wahala.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 20 }}>
            {/* Tab list */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {TOOLS.map(tool => (
                <button key={tool.id} className={`tool-tab ${activeTab === tool.id ? "active" : ""}`} onClick={() => setActiveTab(tool.id)}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                    <span style={{ fontSize: 16 }}>{tool.icon}</span>
                    <span className={`pill ${tool.tag.toLowerCase()}`}>{tool.tag}</span>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: activeTab === tool.id ? "#F0EDE4" : "rgba(240,237,228,0.65)", display: "block" }}>{tool.name}</span>
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div key={activeTab} style={{ padding: "36px 40px", background: `rgba(${activeTool?.color === "#FFC800" ? "255,200,0" : activeTool?.color === "#34D399" ? "52,211,153" : activeTool?.color === "#818CF8" ? "129,140,248" : "244,114,182"},0.04)`, border: `1px solid ${activeTool?.color}28`, borderRadius: 20, display: "flex", flexDirection: "column", justifyContent: "center", animation: "fadein 0.3s ease-out" }}>
              <span style={{ fontSize: 52, display: "block", marginBottom: 20 }}>{activeTool?.icon}</span>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <h3 className="syn" style={{ fontSize: 28, fontWeight: 800 }}>{activeTool?.name}</h3>
                <span className={`pill ${activeTool?.tag.toLowerCase()}`}>{activeTool?.tag}</span>
              </div>
              <p style={{ fontSize: 17, color: "rgba(240,237,228,0.6)", lineHeight: 1.75, marginBottom: 32, maxWidth: 440, fontWeight: 300 }}>{activeTool?.desc}</p>
              <div style={{ display: "flex", gap: 20, marginBottom: 36 }}>
                <div style={{ padding: "16px 20px", background: "rgba(0,0,0,0.3)", borderRadius: 14, border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="syn" style={{ fontSize: 32, fontWeight: 800, color: activeTool?.color, lineHeight: 1 }}>{activeTool?.stat}</div>
                  <div style={{ fontSize: 11, color: "rgba(240,237,228,0.4)", marginTop: 4, letterSpacing: "0.1em", textTransform: "uppercase" }}>{activeTool?.proof}</div>
                </div>
              </div>
              {activeTool?.tag === "LIVE" ? (
                <button className="cta-btn" style={{ alignSelf: "flex-start" }} onClick={() => window.location.href = "https://boldmind.ng/register?redirect=https://planai.boldmind.ng/receptionist"}>
                  Get Started Free →
                </button>
              ) : (
                <button style={{ alignSelf: "flex-start", padding: "12px 24px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 10, color: "rgba(240,237,228,0.6)", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                  Join Waitlist →
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section style={{ padding: "80px 48px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <h2 className="syn" style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, marginBottom: 14 }}>Simple Pricing</h2>
            <p style={{ color: "rgba(240,237,228,0.45)", fontSize: 17, fontWeight: 300 }}>No hidden fees. No dollar pricing. Pure Naija-first.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
            {[
              { name: "Starter", price: "Free", desc: "Perfect to explore", features: ["5 leads/day captured", "Basic AI replies", "1 social account", "Dashboard access"], cta: "Start Free", highlight: false },
              { name: "Pro", price: "₦9,000", sub: "/month", desc: "For growing businesses", features: ["Unlimited leads", "Custom AI personality", "3 social accounts", "WhatsApp alerts", "Business Planning tool", "Priority support"], cta: "Get Pro", highlight: true },
              { name: "Elite", price: "₦25,000", sub: "/month", desc: "For scaling brands", features: ["Everything in Pro", "All 6 AI tools", "10 social accounts", "Team access", "API access", "Dedicated account manager"], cta: "Get Elite", highlight: false },
            ].map(plan => (
              <div key={plan.name} style={{ padding: "32px 28px", background: plan.highlight ? "rgba(255,200,0,0.06)" : "rgba(255,255,255,0.02)", border: `1px solid ${plan.highlight ? "rgba(255,200,0,0.4)" : "rgba(255,255,255,0.07)"}`, borderRadius: 20, position: "relative" }} className={plan.highlight ? "glow" : ""}>
                {plan.highlight && <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "#FFC800", color: "#0A0A06", fontSize: 10, fontWeight: 800, letterSpacing: "0.15em", padding: "4px 16px", borderRadius: 20 }}>MOST POPULAR</div>}
                <h3 className="syn" style={{ fontSize: 20, fontWeight: 800, marginBottom: 4 }}>{plan.name}</h3>
                <p style={{ color: "rgba(240,237,228,0.4)", fontSize: 13, marginBottom: 16, fontWeight: 300 }}>{plan.desc}</p>
                <div style={{ marginBottom: 24 }}>
                  <span className="syn" style={{ fontSize: 40, fontWeight: 800, color: plan.highlight ? "#FFC800" : "#F0EDE4" }}>{plan.price}</span>
                  {plan.sub && <span style={{ fontSize: 14, color: "rgba(240,237,228,0.4)" }}>{plan.sub}</span>}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                  {plan.features.map(f => (
                    <div key={f} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <span style={{ color: plan.highlight ? "#FFC800" : "#34D399", fontSize: 14, flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: 13, color: "rgba(240,237,228,0.7)", fontWeight: 300 }}>{f}</span>
                    </div>
                  ))}
                </div>
                <button className={plan.highlight ? "cta-btn" : "sec-btn"} style={{ width: "100%" }} onClick={() => window.location.href = `https://boldmind.ng/register?redirect=https://planai.boldmind.ng&plan=${plan.name.toLowerCase()}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "80px 48px 100px", borderTop: "1px solid rgba(255,255,255,0.05)", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <span style={{ fontSize: 40, display: "block", marginBottom: 20 }}>⚡</span>
          <h2 className="syn" style={{ fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 800, marginBottom: 20 }}>
            Your competitors are already<br />
            <span style={{ color: "#FFC800" }}>capturing your leads.</span>
          </h2>
          <p style={{ color: "rgba(240,237,228,0.5)", fontSize: 17, marginBottom: 44, lineHeight: 1.7, fontWeight: 300 }}>
            Every comment with "how much" or "interested" that goes unanswered is a lost sale. Start automating today — free.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="cta-btn" style={{ fontSize: 17, padding: "18px 40px" }} onClick={() => window.location.href = "https://boldmind.ng/register?redirect=https://planai.boldmind.ng"}>
              Start Free Now — No Card Needed
            </button>
            <a href="https://wa.me/2349138349271" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "18px 32px", background: "#22C55E", borderRadius: 12, color: "#fff", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
              💬 Chat on WhatsApp
            </a>
          </div>
          <p style={{ marginTop: 20, fontSize: 13, color: "rgba(240,237,228,0.25)" }}>
            Part of the <a href="https://boldmind.ng" style={{ color: "#FFC800", textDecoration: "none" }}>BoldMind Ecosystem</a> · Empowering 1M Nigerian Entrepreneurs by 2030
          </p>
        </div>
      </section>

      {/* Footer strip */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "20px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <span style={{ fontSize: 13, color: "rgba(240,237,228,0.25)" }}>© {new Date().getFullYear()} BoldMind Technology Solution Enterprise</span>
        <div style={{ display: "flex", gap: 24 }}>
          {["Privacy", "Terms", "Support"].map(l => (
            <a key={l} href="#" style={{ fontSize: 12, color: "rgba(240,237,228,0.25)", textDecoration: "none", letterSpacing: "0.08em" }}>{l}</a>
          ))}
        </div>
      </div>
    </div>
  );
}