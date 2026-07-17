import React, { useState, useEffect } from "react";

/* ─────────────────────────────────────────────────────────────
   DATA — untouched
───────────────────────────────────────────────────────────── */
const linings = [
  { name: "Default", price: 0, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/default_lt_lining.jpg" },
  { name: "Red", price: 20, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/red_satin.jpg" },
  { name: "Steel Gray", price: 20, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/steelgraylining100x100.jpg" },
  { name: "Golden Beige", price: 20, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/golden_beige.jpg" },
  { name: "Wine", price: 20, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/wine_lining.jpg" },
  { name: "Electric Blue", price: 20, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/fizzblue_lining.jpg" },
  { name: "Turkish Blue", price: 20, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/turkishblue_lining.jpg" },
  { name: "Tan Brown", price: 20, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/tan_brown_satin100x100.jpg" },
  { name: "Green", price: 20, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/greenlining_LC.jpg" },
  { name: "Jade Green", price: 20, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/jade_green_satin130x130.jpg" },
  { name: "Black Stretch", price: 40, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/black.jpg" },
  { name: "Purple Bemberg", price: 40, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/purplebemberg100x100.jpg" },
  { name: "Wine Bemberg", price: 40, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/winebemberg100x100.jpg" },
  { name: "Burgandy Bemberg", price: 40, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/burgandy_bemberg.jpg" },
  { name: "Red Bemberg", price: 40, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/redbemberg100x100.jpg" },
];

const quantityLining = [
  { name: "NO", price: 0, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/no_quiltedlining.jpg" },
  { name: "Normal", price: 45, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/quiltedlining.jpg" },
  { name: "Thinsulate Body Warmer", price: 70, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/thinsulate_quiltedlining.jpg" },
];

const hardwareColor = [
  { name: "Antique Brass", img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/antiquebrasshardware.jpg" },
  { name: "Antique Silver", img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/antiquesilverhardware.jpg" },
  { name: "Silver", img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/silverhardware.jpg" },
];

/*
  ═══════════════════════════════════════════════
  COLOR SYSTEM — indigo/white, full site match
  -----------------------------------------------
  toggle btn:    white bg, indigo border/text
  panel bg:      #FFFFFF card
  panel border:  rgba(91,91,214,0.16) indigo
  shimmer top:   indigo (matches navbar)
  section hdr:   #F8F7FF bg, indigo accent
  tile:          white bg, indigo border
  tile selected: indigo border + check badge
  check badge:   indigo gradient
  price bar:     #F0EEFF soft indigo
  total price:   indigo gradient text
  free badge:    indigo subtle
  paid badge:    green #059669
  textarea:      white + indigo focus
  collapse btn:  indigo muted
  ═══════════════════════════════════════════════
*/

const STYLES = `

  @keyframes jcUp   { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
  @keyframes jcFade { from{opacity:0} to{opacity:1} }
  @keyframes shimmerIndigo {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }

  .jc-root { font-family: 'Montserrat', sans-serif; }

  /* ── Toggle button — white + indigo ── */
  .jc-toggle {
    width: 100%; padding: 14px 20px;
    background: #FFFFFF;
    border: 1.5px solid rgba(91,91,214,0.25); border-radius: 10px;
    color: #5B5BD6; cursor: pointer;
    font-size: 9px; letter-spacing: 0.3em;
    font-family: Montserrat, sans-serif; font-weight: 700;
    display: flex; align-items: center; justify-content: space-between; gap: 10px;
    transition: all 0.25s; position: relative; overflow: hidden;
    text-transform: uppercase;
    box-shadow: 0 2px 8px rgba(91,91,214,0.07);
  }
  .jc-toggle:hover {
    border-color: #5B5BD6;
    background: #F8F7FF;
    box-shadow: 0 4px 16px rgba(91,91,214,0.12);
  }

  /* ── Panel ── */
  .jc-panel {
    background: #FFFFFF;
    border: 1px solid rgba(91,91,214,0.16); border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 24px rgba(91,91,214,0.08);
    animation: jcUp 0.38s cubic-bezier(0.16,1,0.3,1) both;
  }

  /* ── Indigo shimmer top bar ── */
  .jc-shimmer {
    height: 2px; flex-shrink: 0;
    background: linear-gradient(90deg,
      transparent 0%, rgba(91,91,214,0.25) 15%,
      #5B5BD6 40%, #818CF8 50%, #5B5BD6 60%,
      rgba(91,91,214,0.25) 85%, transparent 100%);
    background-size: 200% auto;
    animation: shimmerIndigo 3.5s linear infinite;
  }

  /* ── Section header ── */
  .jc-sec-hdr {
    display: flex; align-items: center; justify-content: space-between;
    padding: 14px 18px; cursor: pointer;
    border-bottom: 1px solid rgba(91,91,214,0.08);
    background: #FAFAFE;
    transition: background 0.2s;
  }
  .jc-sec-hdr:hover { background: #F0EEFF; }

  /* ── Option tile ── */
  .jc-tile {
    border-radius: 10px; overflow: hidden; cursor: pointer;
    border: 2px solid rgba(91,91,214,0.12);
    background: #FFFFFF;
    transition: all 0.22s; position: relative;
    box-shadow: 0 1px 4px rgba(91,91,214,0.05);
  }
  .jc-tile:hover {
    border-color: rgba(91,91,214,0.40);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(91,91,214,0.12);
  }
  .jc-tile.selected {
    border-color: #5B5BD6;
    box-shadow: 0 0 0 1px rgba(91,91,214,0.3), 0 6px 20px rgba(91,91,214,0.12);
    background: #F8F7FF;
  }
  .jc-tile img {
    width: 100%; height: 80px; object-fit: cover; display: block;
    transition: transform 0.4s ease;
  }
  .jc-tile:hover img { transform: scale(1.06); }
  .jc-tile-label {
    padding: 6px 6px 8px; text-align: center;
    border-top: 1px solid rgba(91,91,214,0.07);
    background: #FAFAFE;
  }

  /* ── Selected check overlay — indigo ── */
  .jc-check {
    position: absolute; top: 6px; right: 6px;
    width: 20px; height: 20px; border-radius: 50%;
    background: linear-gradient(135deg, #4338CA, #5B5BD6);
    display: flex; align-items: center; justify-content: center;
    opacity: 0; transform: scale(0.5);
    transition: all 0.22s;
    box-shadow: 0 2px 6px rgba(91,91,214,0.35);
  }
  .jc-tile.selected .jc-check { opacity: 1; transform: scale(1); }

  /* ── Comment textarea ── */
  .jc-textarea {
    width: 100%; background: #FFFFFF;
    border: 1px solid rgba(91,91,214,0.18); border-top: none;
    padding: 12px 16px; outline: none; resize: vertical;
    color: #1E1B4B; font-family: Montserrat, sans-serif; font-size: 12px;
    min-height: 100px; border-radius: 0 0 8px 8px;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .jc-textarea:focus {
    border-color: #5B5BD6;
    box-shadow: 0 0 0 3px rgba(91,91,214,0.10);
  }
  .jc-textarea::placeholder { color: #9CA3AF; font-style: italic; }

  /* ── Scroll grid ── */
  .jc-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px,1fr));
    gap: 10px; padding: 16px 18px;
    max-height: 340px; overflow-y: auto;
    background: #FFFFFF;
  }
  .jc-grid::-webkit-scrollbar { width: 5px; }
  .jc-grid::-webkit-scrollbar-track { background: rgba(91,91,214,0.04); }
  .jc-grid::-webkit-scrollbar-thumb { background: rgba(91,91,214,0.22); border-radius: 10px; }
  .jc-grid::-webkit-scrollbar-thumb:hover { background: rgba(91,91,214,0.38); }

  .jc-grid-sm {
    display: grid; grid-template-columns: repeat(3,1fr);
    gap: 10px; padding: 16px 18px;
    background: #FFFFFF;
  }
`;

/* ── Icons ── */
const IcoChevron = ({ open }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
    style={{ transition: "transform 0.3s", transform: open ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}>
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IcoCheck = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
    <path d="M20 6L9 17l-5-5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IcoDiamond = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="1" transform="rotate(45 12 12)"
      stroke="#5B5BD6" strokeWidth="1.3" fill="rgba(91,91,214,0.10)" />
  </svg>
);
const IcoWrench = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
);
const IcoComment = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
      stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
);

/* ── Reusable section block ── */
const Section = ({ title, value, icon, open, onToggle, children }) => (
  <div style={{ borderBottom: "1px solid rgba(91,91,214,0.08)" }}>
    <div className="jc-sec-hdr" onClick={onToggle}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ color: "#5B5BD6" }}>{icon}</span>
        <div>
          <p style={{
            fontSize: 9, color: "#818CF8", letterSpacing: "0.26em",
            fontFamily: "Montserrat, sans-serif", fontWeight: 700, marginBottom: 2,
            textTransform: "uppercase",
          }}>{title}</p>
          <p style={{
            fontSize: 12, color: "#1E1B4B",
            fontFamily: "Montserrat, sans-serif", fontWeight: 500,
          }}>{value}</p>
        </div>
      </div>
      <span style={{ color: "#818CF8" }}><IcoChevron open={open} /></span>
    </div>
    {open && <div style={{ animation: "jcFade 0.25s ease both" }}>{children}</div>}
  </div>
);

/* ══════════════════════════════════════════
   JACKET CUSTOMIZATION
══════════════════════════════════════════ */
const JacketCustomization = ({ basePrice = 36, onPriceChange }) => {
  const [showCustomization, setShowCustomization] = useState(false);
  const [showHardware, setShowHardware] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [selectedLining, setSelectedLining] = useState("Default");
  const [selectedQuilted, setSelectedQuilted] = useState("NO");
  const [selectedHardware, setSelectedHardware] = useState("Antique Brass");
  const [comment, setComment] = useState("");
  const [displayPrice, setDisplayPrice] = useState(basePrice);

  /* ── Price logic — untouched ── */
  useEffect(() => {
    const liningPrice = linings.find(l => l.name === selectedLining)?.price || 0;
    const quiltedPrice = quantityLining.find(q => q.name === selectedQuilted)?.price || 0;
    const total = basePrice + liningPrice + quiltedPrice;
    setDisplayPrice(total);
    if (onPriceChange) onPriceChange(total);
  }, [selectedLining, selectedQuilted]);

  const handleCommentChange = (e) => {
    if (e.target.value.length <= 600) setComment(e.target.value);
  };

  const liningExtra = linings.find(l => l.name === selectedLining)?.price || 0;
  const quiltedExtra = quantityLining.find(q => q.name === selectedQuilted)?.price || 0;

  return (
    <>
      <style>{STYLES}</style>

      <div className="jc-root" style={{ width: "100%", marginTop: 16 }}>

        {/* ── Toggle button ── */}
        <button className="jc-toggle" onClick={() => setShowCustomization(s => !s)}>
          <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
            <IcoWrench />
            <span>ADVANCED CUSTOMIZATION</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {(liningExtra > 0 || quiltedExtra > 0) && (
              <span style={{
                fontSize: 8, color: "#059669",
                fontFamily: "Montserrat, sans-serif", fontWeight: 700,
                background: "rgba(5,150,105,0.08)",
                border: "1px solid rgba(5,150,105,0.22)",
                padding: "2px 8px", borderRadius: 4, letterSpacing: "0.12em",
              }}>
                +${liningExtra + quiltedExtra} added
              </span>
            )}
            <IcoChevron open={showCustomization} />
          </div>
        </button>

        {/* ── Expanded panel ── */}
        {showCustomization && (
          <div className="jc-panel" style={{ marginTop: 10 }}>

            {/* Indigo shimmer top bar */}
            <div className="jc-shimmer" />

            {/* ── Price summary bar ── */}
            <div style={{
              padding: "14px 18px",
              background: "#F0EEFF",
              borderBottom: "1px solid rgba(91,91,214,0.10)",
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <div>
                <p style={{
                  fontSize: 8, color: "#5B5BD6", letterSpacing: "0.32em",
                  fontFamily: "Montserrat, sans-serif", fontWeight: 700,
                  marginBottom: 4, textTransform: "uppercase",
                }}>CUSTOMISATION TOTAL</p>
                <p style={{
                  fontSize: 10, color: "#6B7280",
                  fontFamily: "Montserrat, sans-serif", letterSpacing: "0.06em",
                }}>
                  Base ${basePrice.toFixed(2)}
                  {liningExtra > 0 && <span style={{ color: "#059669" }}> + Lining ${liningExtra}</span>}
                  {quiltedExtra > 0 && <span style={{ color: "#059669" }}> + Quilted ${quiltedExtra}</span>}
                </p>
              </div>
              <p style={{
                fontSize: 26, fontWeight: 700, lineHeight: 1,
                fontFamily: "Montserrat, sans-serif",
                background: "linear-gradient(135deg, #4338CA, #5B5BD6)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                ${displayPrice.toFixed(2)}
              </p>
            </div>

            {/* ── Section 1: Jacket Lining ── */}
            <Section
              title="JACKET LINING"
              value={selectedLining}
              icon={<IcoDiamond />}
              open={true}
              onToggle={() => { }}
            >
              <div className="jc-grid">
                {linings.map((lining, i) => (
                  <div
                    key={i}
                    className={`jc-tile ${selectedLining === lining.name ? "selected" : ""}`}
                    onClick={() => setSelectedLining(lining.name)}
                  >
                    <div className="jc-check"><IcoCheck /></div>
                    <img src={lining.img} alt={lining.name} />
                    <div className="jc-tile-label">
                      <p style={{
                        fontSize: 8.5, color: "#1E1B4B",
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 500, letterSpacing: "0.04em", marginBottom: 2,
                      }}>{lining.name}</p>
                      <p style={{
                        fontSize: 8, fontFamily: "Montserrat, sans-serif", fontWeight: 600,
                        color: lining.price > 0 ? "#059669" : "#818CF8",
                        letterSpacing: "0.08em",
                      }}>
                        {lining.price > 0 ? `+$${lining.price}` : "Included"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* ── Section 2: Quilted Lining ── */}
            <Section
              title="QUILTED LINING"
              value={selectedQuilted}
              icon={<IcoDiamond />}
              open={true}
              onToggle={() => { }}
            >
              <div className="jc-grid-sm">
                {quantityLining.map((lining, i) => (
                  <div
                    key={i}
                    className={`jc-tile ${selectedQuilted === lining.name ? "selected" : ""}`}
                    onClick={() => setSelectedQuilted(lining.name)}
                  >
                    <div className="jc-check"><IcoCheck /></div>
                    <img src={lining.img} alt={lining.name} style={{ height: 90 }} />
                    <div className="jc-tile-label">
                      <p style={{
                        fontSize: 9, color: "#1E1B4B",
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 500, letterSpacing: "0.04em", marginBottom: 2,
                      }}>{lining.name}</p>
                      <p style={{
                        fontSize: 8, fontFamily: "Montserrat, sans-serif", fontWeight: 600,
                        color: lining.price > 0 ? "#059669" : "#818CF8",
                        letterSpacing: "0.08em",
                      }}>
                        {lining.price > 0 ? `+$${lining.price}` : "Included"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* ── Section 3: Hardware ── */}
            <Section
              title="HARDWARE COLOUR"
              value={selectedHardware}
              icon={<IcoWrench />}
              open={showHardware}
              onToggle={() => setShowHardware(h => !h)}
            >
              <div style={{ padding: "10px 18px 4px" }}>
                <p style={{
                  fontSize: 11, color: "#6B7280",
                  fontFamily: "Montserrat, sans-serif",
                  lineHeight: 1.6, marginBottom: 6,
                }}>
                  Choose hardware colour. 2-way zippers allow the lower portion to remain open while zipped.
                </p>
              </div>
              <div className="jc-grid-sm">
                {hardwareColor.map((hw, i) => (
                  <div
                    key={i}
                    className={`jc-tile ${selectedHardware === hw.name ? "selected" : ""}`}
                    onClick={() => setSelectedHardware(hw.name)}
                  >
                    <div className="jc-check"><IcoCheck /></div>
                    <img src={hw.img} alt={hw.name} style={{ height: 90 }} />
                    <div className="jc-tile-label">
                      <p style={{
                        fontSize: 9, color: "#1E1B4B",
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 500, letterSpacing: "0.04em",
                      }}>{hw.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* ── Section 4: Special Instructions ── */}
            <div>
              <div className="jc-sec-hdr" onClick={() => setShowComment(c => !c)}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: "#5B5BD6" }}><IcoComment /></span>
                  <div>
                    <p style={{
                      fontSize: 9, color: "#818CF8", letterSpacing: "0.26em",
                      fontFamily: "Montserrat, sans-serif", fontWeight: 700,
                      marginBottom: 2, textTransform: "uppercase",
                    }}>SPECIAL INSTRUCTIONS</p>
                    <p style={{
                      fontSize: 12, fontFamily: "Montserrat, sans-serif",
                      color: comment ? "#1E1B4B" : "#9CA3AF", fontStyle: "italic",
                    }}>
                      {comment
                        ? `${comment.substring(0, 40)}${comment.length > 40 ? "…" : ""}`
                        : "Any notes for the atelier?"}
                    </p>
                  </div>
                </div>
                <span style={{ color: "#818CF8" }}><IcoChevron open={showComment} /></span>
              </div>

              {showComment && (
                <div style={{ padding: "0 18px 18px", animation: "jcFade 0.25s ease both", background: "#FFFFFF" }}>
                  <div style={{
                    borderRadius: 8, overflow: "hidden",
                    border: "1px solid rgba(91,91,214,0.18)",
                  }}>
                    {/* Textarea header */}
                    <div style={{
                      padding: "8px 14px",
                      background: "#F8F7FF",
                      borderBottom: "1px solid rgba(91,91,214,0.12)",
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                    }}>
                      <span style={{
                        fontSize: 8, color: "#5B5BD6",
                        fontFamily: "Montserrat, sans-serif",
                        letterSpacing: "0.22em", fontWeight: 700, textTransform: "uppercase",
                      }}>YOUR NOTES</span>
                      <span style={{
                        fontSize: 8, color: "#9CA3AF",
                        fontFamily: "Montserrat, sans-serif",
                      }}>
                        {600 - comment.length} chars remaining
                      </span>
                    </div>
                    <textarea
                      className="jc-textarea"
                      value={comment}
                      onChange={handleCommentChange}
                      placeholder="e.g. Please add extra padding on shoulders, prefer matte zippers…"
                      rows={4}
                      maxLength={600}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* ── Bottom: collapse ── */}
            <div style={{
              padding: "12px 18px", textAlign: "center",
              borderTop: "1px solid rgba(91,91,214,0.08)",
              background: "#F8F7FF",
            }}>
              <button
                onClick={() => { setShowCustomization(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontSize: 8, color: "#9CA3AF", letterSpacing: "0.22em",
                  fontFamily: "Montserrat, sans-serif", fontWeight: 600,
                  textDecoration: "underline", textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => e.target.style.color = "#5B5BD6"}
                onMouseLeave={e => e.target.style.color = "#9CA3AF"}
              >
                ↑ COLLAPSE CUSTOMISATION
              </button>
            </div>

          </div>
        )}
      </div>
    </>
  );
};

export default JacketCustomization;