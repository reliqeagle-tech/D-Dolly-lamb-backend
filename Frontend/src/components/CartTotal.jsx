import React, { useContext, useMemo } from "react";
import { ShopContext } from "../context/ShopContext";

const STYLES = `

  @keyframes ctUp {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .ct-root { animation: ctUp 0.45s cubic-bezier(.16,1,.3,1) both; width: 100%; }

  /* ── Each row ── */
  .ct-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 11px 0;
  }

  /* ── Thin divider ── */
  .ct-div {
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(91,91,214,0.15), transparent);
  }

  /* ── Label — dark navy, readable ── */
  .ct-lbl {
    font-size: 12px;
    color: #4B5563;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    letter-spacing: 0.02em;
  }

  /* ── Normal value — deep navy ── */
  .ct-val {
    font-size: 12px;
    color: #1E1B4B;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
  }

  /* ── Discount value — green ── */
  .ct-val-disc {
    font-size: 12px;
    color: #059669;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
  }

  /* ── Total row ── */
  .ct-total-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 14px 0 0;
    margin-top: 4px;
    border-top: 1.5px solid rgba(91,91,214,0.18);
  }

  /* ── Hover effect on rows ── */
  .ct-row:hover .ct-lbl { color: #1E1B4B; }
`;

const CartTotal = () => {
  const { cartItems, products, currency, delivery_fee } = useContext(ShopContext);

  /* ── Calculation logic — untouched ── */
  const { itemsTotal, discount, subtotal } = useMemo(() => {
    let itemsTotalCalc = 0;
    let discountCalc = 0;
    let subtotalCalc = 0;

    for (const productId in cartItems) {
      const product = products.find(p => p._id === productId);
      if (!product) continue;

      const original = Number(product.price);
      const discountPercent = Number(product.discountPrice) || 0;
      const discountAmount = discountPercent > 0 && discountPercent < 100
        ? (original * discountPercent) / 100 : 0;
      const salePrice = original - discountAmount;

      for (const comboKey in cartItems[productId]) {
        const item = cartItems[productId][comboKey];
        const qty = typeof item === "number" ? item : Number(item?.quantity) || 0;
        const extra = typeof item === "number" ? 0 : Number(item?.customPrice) || 0;
        itemsTotalCalc += (original + extra) * qty;
        subtotalCalc += (salePrice + extra) * qty;
        discountCalc += discountAmount * qty;
      }
    }

    return {
      itemsTotal: Number(itemsTotalCalc.toFixed(2)),
      discount: Number(discountCalc.toFixed(2)),
      subtotal: Number(subtotalCalc.toFixed(2)),
    };
  }, [cartItems, products]);

  const total = subtotal + delivery_fee;
  const fmt = (p) => `${currency}${Number(p).toFixed(2)}`;

  return (
    <>
      <style>{STYLES}</style>

      <div className="ct-root">

        {/* ── Header ── */}
        <div style={{
          display: "flex", alignItems: "center", gap: 10, marginBottom: 18,
        }}>
          <span style={{
            flex: 1, height: 1,
            background: "linear-gradient(to right, transparent, rgba(91,91,214,0.25))",
          }} />
          <span style={{
            fontSize: 8, letterSpacing: "0.38em", color: "#5B5BD6",
            fontFamily: "Montserrat, sans-serif", fontWeight: 700,
            whiteSpace: "nowrap", textTransform: "uppercase",
          }}>ORDER SUMMARY</span>
          <span style={{
            flex: 1, height: 1,
            background: "linear-gradient(to left, transparent, rgba(91,91,214,0.25))",
          }} />
        </div>

        {/* ── Savings banner — green, shown only when discount exists ── */}
        {discount > 0 && (
          <div style={{
            background: "rgba(5,150,105,0.07)",
            border: "1px solid rgba(5,150,105,0.22)",
            borderRadius: 8, padding: "10px 16px",
            marginBottom: 16, textAlign: "center",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#059669" strokeWidth="1.5" />
              <path d="M7 12l4 4 6-7" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={{
              fontSize: 12, color: "#059669",
              fontFamily: "Montserrat, sans-serif", fontWeight: 600,
            }}>
              You saved {fmt(discount)} today!
            </span>
          </div>
        )}

        {/* ── Row: Items Total ── */}
        <div className="ct-row">
          <span className="ct-lbl">Items Total</span>
          <span className="ct-val">{fmt(itemsTotal)}</span>
        </div>
        <div className="ct-div" />

        {/* ── Row: Discount ── */}
        <div className="ct-row">
          <span className="ct-lbl">Discount</span>
          <span className={discount > 0 ? "ct-val-disc" : "ct-val"}>
            {discount > 0 ? `−${fmt(discount)}` : fmt(0)}
          </span>
        </div>
        <div className="ct-div" />

        {/* ── Row: Subtotal ── */}
        <div className="ct-row">
          <span className="ct-lbl">Subtotal</span>
          <span className="ct-val">{fmt(subtotal)}</span>
        </div>
        <div className="ct-div" />

        {/* ── Row: Delivery ── */}
        <div className="ct-row">
          <span className="ct-lbl">Delivery</span>
          <span className="ct-val">{fmt(delivery_fee)}</span>
        </div>

        {/* ── Total row ── */}
        <div className="ct-total-row">
          <div>
            <p style={{
              fontSize: 8, letterSpacing: "0.4em", color: "#5B5BD6",
              fontFamily: "Montserrat, sans-serif", fontWeight: 700,
              marginBottom: 4, textTransform: "uppercase",
            }}>Total Due</p>
            <p style={{
              fontSize: 10, color: "#9CA3AF",
              fontFamily: "Montserrat, sans-serif", fontWeight: 400,
            }}>All taxes included</p>
          </div>

          {/* Total amount — indigo gradient text */}
          <p style={{
            fontSize: 24, letterSpacing: "0.02em", lineHeight: 1, fontWeight: 700,
            fontFamily: "Montserrat, sans-serif",
            background: "linear-gradient(135deg, #4338CA, #5B5BD6)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            {fmt(total)}
          </p>
        </div>

      </div>
    </>
  );
};

export default CartTotal;