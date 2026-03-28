import React, { useState, useRef, useCallback, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { backendUrl } from '../../App';
import {
    TbPackage, TbPhoto, TbPalette, TbRuler, TbChartBar,
    TbX, TbPlus, TbTrash, TbCheck, TbAlertTriangle,
    TbDeviceFloppy, TbRocket, TbEye, TbChevronRight,
    TbStar, TbInfoCircle, TbBolt, TbTag
} from 'react-icons/tb';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

/* ════════════════════════════════════════════════════════════════
   D DOLLY LAMB — ADD PRODUCT  |  Luxury dark brown & gold theme
════════════════════════════════════════════════════════════════ */

/* ── Brand tokens ─────────────────────────────────────────────── */
const B = {
    bg: '#0d0804',
    surface: '#1a0f07',
    surface2: '#221408',
    surface3: '#2a1a09',
    border: 'rgba(201,168,76,0.18)',
    borderSoft: 'rgba(201,168,76,0.09)',
    borderMid: 'rgba(201,168,76,0.28)',
    gold: '#c9a84c',
    goldLight: '#e8c46a',
    goldDim: 'rgba(201,168,76,0.12)',
    goldDim2: 'rgba(201,168,76,0.06)',
    cream: '#f0d898',
    creamSoft: '#d4b87a',
    muted: '#8b7555',
    mutedSoft: '#5a4530',
    emerald: { bg: 'rgba(52,211,153,0.10)', text: '#6ee7b7', border: 'rgba(52,211,153,0.22)', dot: '#34d399' },
    amber: { bg: 'rgba(251,191,36,0.11)', text: '#fcd34d', border: 'rgba(251,191,36,0.28)', dot: '#fbbf24' },
    red: { bg: 'rgba(248,113,113,0.10)', text: '#fca5a5', border: 'rgba(248,113,113,0.22)', dot: '#f87171' },
    blue: { bg: 'rgba(96,165,250,0.12)', text: '#93c5fd', border: 'rgba(96,165,250,0.28)', dot: '#60a5fa' },
    violet: { bg: 'rgba(167,139,250,0.12)', text: '#c4b5fd', border: 'rgba(167,139,250,0.28)', dot: '#a78bfa' },
};

/* ── Shared style helpers ─────────────────────────────────────── */
const card = (extra = {}) => ({
    background: B.surface, border: `1px solid ${B.border}`,
    borderRadius: 18, marginBottom: 18, overflow: 'hidden', ...extra,
});
const input = (err = false) => ({
    width: '100%', padding: '10px 14px', borderRadius: 11,
    background: err ? 'rgba(248,113,113,0.08)' : B.surface2,
    color: B.cream, border: `1px solid ${err ? B.red.border : B.border}`,
    fontSize: 13.5, outline: 'none', transition: 'border-color .15s',
    boxSizing: 'border-box',
});
const focusGold = e => e.target.style.borderColor = B.gold;
const blurBorder = (err = false) => e => e.target.style.borderColor = err ? B.red.border : B.border;

/* ── CONSTANTS ──────────────────────────────────────────────── */
const PRESETS = [
    { name: "Black", hex: "#000000" }, { name: "White", hex: "#FFFFFF" },
    { name: "Red", hex: "#EF4444" }, { name: "Navy Blue", hex: "#1E3A5F" },
    { name: "Royal Blue", hex: "#3B82F6" }, { name: "Forest Green", hex: "#166534" },
    { name: "Olive", hex: "#4D7C0F" }, { name: "Yellow", hex: "#EAB308" },
    { name: "Pink", hex: "#EC4899" }, { name: "Lavender", hex: "#8B5CF6" },
    { name: "Orange", hex: "#F97316" }, { name: "Brown", hex: "#92400E" },
    { name: "Cream", hex: "#FFFDD0" }, { name: "Gray", hex: "#9CA3AF" },
    { name: "Charcoal", hex: "#374151" }, { name: "Maroon", hex: "#7F1D1D" },
];

const INIT_SIZES = {
    XS: { multiplier: 0.9, stock: 0, customPrice: "", useCustomPrice: false },
    S: { multiplier: 0.9, stock: 0, customPrice: "", useCustomPrice: false },
    M: { multiplier: 1.0, stock: 0, customPrice: "", useCustomPrice: false },
    L: { multiplier: 1.1, stock: 0, customPrice: "", useCustomPrice: false },
    XL: { multiplier: 1.2, stock: 0, customPrice: "", useCustomPrice: false },
    XXL: { multiplier: 1.35, stock: 0, customPrice: "", useCustomPrice: false },
    "3XL": { multiplier: 1.5, stock: 0, customPrice: "", useCustomPrice: false },
};

const CATEGORY_DEFAULT_SUB = {
    "Men": "Jackets", "Women": "Jackets", "Others": "Pillow",
    "Leather Pillow Cover": "Cylindrical Pillow Cover",
    "Sofa Headrest": "Recliner Chair Headrest Cover",
    "Leather Desk Pad": "Leather Desk Mat", "Men Leather Apron": "Apron",
};

/* ════════════════════════════════════════════════════════════════
   LIGHTBOX
════════════════════════════════════════════════════════════════ */
const Lightbox = ({ imgs, start, onClose }) => {
    const [cur, setCur] = useState(start);
    useEffect(() => {
        const h = e => { if (e.key === 'Escape') onClose(); if (e.key === 'ArrowLeft') setCur(p => Math.max(0, p - 1)); if (e.key === 'ArrowRight') setCur(p => Math.min(imgs.length - 1, p + 1)); };
        window.addEventListener('keydown', h); return () => window.removeEventListener('keydown', h);
    }, [imgs.length, onClose]);
    return (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,.92)', backdropFilter: 'blur(6px)' }} onClick={onClose}>
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, maxWidth: '90vw' }} onClick={e => e.stopPropagation()}>
                <button onClick={onClose} style={{ position: 'absolute', top: -12, right: -12, width: 30, height: 30, borderRadius: '50%', background: B.gold, border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10 }}>
                    <TbX size={14} style={{ color: B.bg }} />
                </button>
                <img src={URL.createObjectURL(imgs[cur])} alt="" style={{ maxWidth: '80vw', maxHeight: '70vh', borderRadius: 14, objectFit: 'contain', boxShadow: '0 20px 60px rgba(0,0,0,.8)', border: `1px solid ${B.border}` }} />
                {cur > 0 && <button onClick={() => setCur(p => p - 1)} style={{ position: 'absolute', left: -56, top: '50%', transform: 'translateY(-50%)', width: 40, height: 40, borderRadius: '50%', background: 'rgba(201,168,76,0.15)', border: `1px solid ${B.border}`, color: B.cream, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><FiChevronLeft size={22} /></button>}
                {cur < imgs.length - 1 && <button onClick={() => setCur(p => p + 1)} style={{ position: 'absolute', right: -56, top: '50%', transform: 'translateY(-50%)', width: 40, height: 40, borderRadius: '50%', background: 'rgba(201,168,76,0.15)', border: `1px solid ${B.border}`, color: B.cream, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><FiChevronRight size={22} /></button>}
                {imgs.length > 1 && (
                    <div style={{ display: 'flex', gap: 8 }}>
                        {imgs.map((img, i) => <img key={i} src={URL.createObjectURL(img)} alt="" onClick={() => setCur(i)} style={{ width: 46, height: 46, borderRadius: 9, objectFit: 'cover', cursor: 'pointer', border: `2px solid ${i === cur ? B.gold : 'transparent'}`, opacity: i === cur ? 1 : .5, transition: 'all .15s' }} />)}
                    </div>
                )}
                <p style={{ color: B.muted, fontSize: 11 }}>{cur + 1} / {imgs.length} · Esc to close</p>
            </div>
        </div>
    );
};

/* ════════════════════════════════════════════════════════════════
   DRAFT PAGE
════════════════════════════════════════════════════════════════ */
const DraftPage = ({ formState, onContinue, onPublishNow, onNewProduct }) => {
    const { name, description, price, detailedDescription, hasImages, hasColors, hasSizes } = formState;
    const steps = [
        { label: "Basic Info", done: !!(name?.trim() && description?.trim()), detail: name?.trim() ? `"${name.slice(0, 30)}…"` : "Required" },
        { label: "Pricing", done: !!price, detail: price ? `₹${price}` : "Required" },
        { label: "Product Images", done: !!hasImages, detail: hasImages ? "Uploaded" : "Add images" },
        { label: "Color Variants", done: !!hasColors, detail: hasColors ? "Added" : "Add at least 1" },
        { label: "Sizes & Inventory", done: !!hasSizes, detail: hasSizes ? "Configured" : "⚠ Required" },
        { label: "Detailed Description", done: !!detailedDescription, detail: detailedDescription ? "Added" : "Optional" },
    ];
    const doneCount = steps.filter(s => s.done).length;
    const pct = Math.round((doneCount / steps.length) * 100);
    const canPublish = steps.slice(0, 5).every(s => s.done);

    return (
        <div style={{ position: 'fixed', inset: 0, zIndex: 50, background: B.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, overflowY: 'auto' }}>
            <div style={{ ...card(), padding: 36, maxWidth: 460, width: '100%', textAlign: 'center', borderRadius: 24, boxShadow: `0 24px 80px rgba(0,0,0,.7),0 0 0 1px ${B.border}` }}>
                <div style={{ width: 60, height: 60, borderRadius: 16, background: B.amber.bg, border: `1px solid ${B.amber.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
                    <TbDeviceFloppy size={28} style={{ color: B.amber.text }} />
                </div>
                <h2 style={{ color: B.cream, fontSize: 24, fontWeight: 800, letterSpacing: -.5, marginBottom: 8 }}>Draft Saved!</h2>
                <p style={{ color: B.muted, fontSize: 13.5, marginBottom: 24, lineHeight: 1.6 }}>Your listing is saved. Complete remaining steps before publishing.</p>

                {/* Progress */}
                <div style={{ marginBottom: 20, textAlign: 'left' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 600, color: B.muted, marginBottom: 8 }}>
                        <span>Listing Progress</span>
                        <span style={{ color: B.gold }}>{doneCount}/{steps.length} · {pct}%</span>
                    </div>
                    <div style={{ height: 6, background: B.surface3, borderRadius: 4, overflow: 'hidden', border: `1px solid ${B.borderSoft}` }}>
                        <div style={{ height: '100%', background: `linear-gradient(90deg,${B.gold},${B.goldLight})`, borderRadius: 4, width: `${pct}%`, transition: 'width .7s', boxShadow: `0 0 10px ${B.gold}50` }} />
                    </div>
                </div>

                {/* Checklist */}
                <div style={{ background: B.surface2, border: `1px solid ${B.borderSoft}`, borderRadius: 14, padding: 16, textAlign: 'left', marginBottom: 24 }}>
                    <p style={{ color: B.muted, fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.7px', marginBottom: 12 }}>Checklist</p>
                    {steps.map((s, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: i < steps.length - 1 ? `1px solid ${B.borderSoft}` : 'none' }}>
                            <div style={{
                                width: 20, height: 20, borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                background: s.done ? B.emerald.dot : B.surface3, border: `1px solid ${s.done ? B.emerald.dot : B.borderMid}`
                            }}>
                                {s.done && <TbCheck size={11} style={{ color: B.bg }} />}
                            </div>
                            <span style={{ flex: 1, fontSize: 12.5, fontWeight: 500, color: s.done ? B.cream : B.muted }}>{s.label}</span>
                            <span style={{ fontSize: 11, fontWeight: 700, color: s.done ? B.emerald.text : B.muted }}>{s.done ? '✓ Done' : s.detail}</span>
                        </div>
                    ))}
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <button onClick={onContinue} style={{ padding: '12px', borderRadius: 12, background: `linear-gradient(135deg,${B.gold},${B.goldLight})`, color: B.bg, border: 'none', fontSize: 13.5, fontWeight: 700, cursor: 'pointer' }}>Continue Editing</button>
                    {canPublish && <button onClick={onPublishNow} style={{ padding: '12px', borderRadius: 12, background: B.emerald.bg, color: B.emerald.text, border: `1px solid ${B.emerald.border}`, fontSize: 13.5, fontWeight: 700, cursor: 'pointer' }}>🚀 Publish Now</button>}
                    <button onClick={onNewProduct} style={{ padding: '12px', borderRadius: 12, background: 'transparent', color: B.muted, border: `1px solid ${B.border}`, fontSize: 13.5, fontWeight: 600, cursor: 'pointer' }}>+ Add Another Product</button>
                </div>
                <p style={{ color: B.mutedSoft, fontSize: 11, marginTop: 14 }}>Saved at {new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</p>
            </div>
        </div>
    );
};

/* ════════════════════════════════════════════════════════════════
   CARD WRAPPER
════════════════════════════════════════════════════════════════ */
const Card = ({ icon, title, subtitle, badge, children, action }) => (
    <div style={card()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 22px', borderBottom: `1px solid ${B.borderSoft}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: 11, background: B.goldDim, border: `1px solid ${B.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: B.gold, flexShrink: 0 }}>
                    {icon}
                </div>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ color: B.cream, fontSize: 14, fontWeight: 700 }}>{title}</span>
                        {badge}
                    </div>
                    {subtitle && <p style={{ color: B.muted, fontSize: 11.5, marginTop: 2 }}>{subtitle}</p>}
                </div>
            </div>
            {action}
        </div>
        <div style={{ padding: '22px 22px' }}>{children}</div>
    </div>
);

/* ── Form field wrapper ─────────────────────────────────────── */
const Field = ({ label, required, hint, children }) => (
    <div style={{ marginBottom: 18 }}>
        {label && (
            <label style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.7px', color: B.muted, marginBottom: 7 }}>
                {label}{required && <span style={{ color: B.red.text, fontSize: 13 }}>*</span>}
            </label>
        )}
        {children}
        {hint && <p style={{ color: B.muted, fontSize: 11.5, marginTop: 5 }}>{hint}</p>}
    </div>
);

/* ── Step indicator ─────────────────────────────────────────── */
const Steps = ({ steps }) => (
    <div style={{ background: B.surface, borderBottom: `1px solid ${B.border}`, padding: '0 24px', display: 'flex', alignItems: 'center', overflowX: 'auto', gap: 0 }}>
        {steps.map(([num, label, done], i) => (
            <React.Fragment key={num}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 8px', flexShrink: 0, opacity: done ? 1 : .45 }}>
                    <div style={{
                        width: 24, height: 24, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10.5, fontWeight: 800, flexShrink: 0,
                        background: done ? B.emerald.dot : B.surface3, color: done ? B.bg : B.muted, border: `1.5px solid ${done ? B.emerald.dot : B.borderMid}`,
                        boxShadow: done ? `0 0 8px ${B.emerald.dot}50` : undefined
                    }}>
                        {done ? <TbCheck size={11} /> : num}
                    </div>
                    <span style={{ fontSize: 12.5, whiteSpace: 'nowrap', color: done ? B.cream : B.muted, fontWeight: done ? 700 : 500 }}>{label}</span>
                </div>
                {i < steps.length - 1 && <TbChevronRight size={13} style={{ color: B.mutedSoft, flexShrink: 0, margin: '0 4px' }} />}
            </React.Fragment>
        ))}
    </div>
);

/* ════════════════════════════════════════════════════════════════
   MAIN ADD PRODUCT COMPONENT
════════════════════════════════════════════════════════════════ */
const Add = ({ token }) => {
    const [images, setImages] = useState(Array(10).fill(null));
    const [name, setName] = useState('');
    const [description, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [discountPrice, setDiscPrice] = useState('');
    const [category, setCategory] = useState('Men');
    const [subCategory, setSubCat] = useState(CATEGORY_DEFAULT_SUB['Men']);
    const [bestseller, setBestseller] = useState(false);
    const [detailedDescription, setDD] = useState('');
    const [colors, setColors] = useState([]);
    const [newColorName, setNewCName] = useState('');
    const [newColorHex, setNewCHex] = useState('#000000');
    const [colorMode, setColorMode] = useState('both');
    const [sizeType, setSizeType] = useState('standard');
    const [stdSizes, setStdSizes] = useState(INIT_SIZES);
    const [enabledSizes, setEnabled] = useState([]);
    const [inchSizes, setInchSizes] = useState([]);
    const [niSize, setNiSize] = useState(''); const [niMult, setNiMult] = useState(1.0);
    const [niStock, setNiStock] = useState(0); const [niPrice, setNiPrice] = useState('');
    const [niCustom, setNiCustom] = useState(false);
    const [lbOpen, setLbOpen] = useState(false); const [lbIdx, setLbIdx] = useState(0);
    const [dragging, setDragging] = useState(false);
    const [valErrs, setValErrs] = useState([]);
    const [draftNotif, setDraftNotif] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [draftSaving, setDraftSaving] = useState(false);
    const [showDraftPage, setShowDraftPage] = useState(false);
    const [sizeErr, setSizeErr] = useState(false);
    const [sizeCardShake, setSizeCardShake] = useState(false);
    const dzRef = useRef(null); const sizeRef = useRef(null);

    const uploaded = images.filter(Boolean);
    const hasSizes = sizeType === 'standard' ? enabledSizes.length > 0 : inchSizes.length > 0;
    const discount = discountPrice && price && +discountPrice < +price ? Math.round((1 - discountPrice / price) * 100) : null;

    const progress = Math.min(100, [
        name.trim() ? 15 : 0, description.trim() ? 10 : 0, price ? 15 : 0,
        uploaded.length > 0 ? 15 : 0, colors.length > 0 ? 15 : 0,
        hasSizes ? 15 : 0, detailedDescription ? 8 : 0, (category && subCategory) ? 7 : 0,
    ].reduce((a, b) => a + b, 0));

    /* Auto-save */
    useEffect(() => {
        if (!name && !description && !price) return;
        const t = setTimeout(() => { try { localStorage.setItem('ap_draft', JSON.stringify({ name, description, price, discountPrice, category, subCategory, bestseller, detailedDescription })); setDraftNotif(true); setTimeout(() => setDraftNotif(false), 2500); } catch { } }, 2000);
        return () => clearTimeout(t);
    }, [name, description, price, discountPrice, category, subCategory, bestseller, detailedDescription]);

    /* Draft restore */
    useEffect(() => {
        try {
            const d = JSON.parse(localStorage.getItem('ap_draft') || '{}');
            if (d.name) {
                setName(d.name || ''); setDesc(d.description || ''); setPrice(d.price || ''); setDiscPrice(d.discountPrice || '');
                const sc = d.category || 'Men'; setCategory(sc); setSubCat(d.subCategory && d.subCategory.trim() ? d.subCategory : CATEGORY_DEFAULT_SUB[sc] || '');
                setBestseller(d.bestseller || false); setDD(d.detailedDescription || ''); toast.info('💾 Draft restored', { autoClose: 2500 });
            }
        } catch { }
    }, []);

    /* Auto-set base price from size custom prices */
    useEffect(() => {
        let minP = null;
        if (sizeType === 'standard' && enabledSizes.length > 0) {
            const ORDER = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'];
            const sorted = [...enabledSizes].sort((a, b) => ORDER.indexOf(a) - ORDER.indexOf(b));
            const d = stdSizes[sorted[0]]; if (d.useCustomPrice && d.customPrice) minP = parseFloat(d.customPrice);
        } else if (sizeType === 'inch' && inchSizes.length > 0) {
            const sorted = [...inchSizes].sort((a, b) => { const n = s => Math.min(...(s.match(/\d+\.?\d*/g) || ['Infinity']).map(parseFloat)); return n(a.size) - n(b.size); });
            if (sorted[0].useCustomPrice && sorted[0].customPrice) minP = parseFloat(sorted[0].customPrice);
        }
        if (minP && minP > 0 && minP.toString() !== price) setPrice(minP.toString());
    }, [sizeType, enabledSizes, stdSizes, inchSizes]);

    /* Image handlers */
    const setImg = (i, f) => setImages(p => { const n = [...p]; n[i] = f; return n; });
    const delImg = (i) => setImages(p => { const n = [...p]; n[i] = null; return n; });
    const handleDragEnter = useCallback(e => { e.preventDefault(); e.stopPropagation(); setDragging(true); }, []);
    const handleDragOver = useCallback(e => { e.preventDefault(); e.stopPropagation(); e.dataTransfer.dropEffect = 'copy'; setDragging(true); }, []);
    const handleDragLeave = useCallback(e => { e.preventDefault(); e.stopPropagation(); if (dzRef.current && !dzRef.current.contains(e.relatedTarget)) setDragging(false); }, []);
    const handleDrop = useCallback(e => {
        e.preventDefault(); e.stopPropagation(); setDragging(false);
        const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'));
        if (!files.length) { toast.error('Only image files'); return; }
        let added = 0;
        setImages(prev => { const next = [...prev]; files.forEach(f => { const s = next.findIndex(x => !x); if (s !== -1) { next[s] = f; added++; } }); return next; });
        requestAnimationFrame(() => { if (added) toast.success(`${added} image${added > 1 ? 's' : ''} added!`); else toast.info('All slots full'); });
    }, []);

    /* Color handlers */
    const addColor = () => {
        if (colorMode !== 'hexOnly' && !newColorName.trim()) return toast.error('Enter color name');
        const c = { name: newColorName.trim() || `Color-${colors.length + 1}`, hex: newColorHex || '#808080' };
        if (colors.some(x => x.name.toLowerCase() === c.name.toLowerCase())) return toast.error('Color already exists');
        setColors([...colors, c]); setNewCName(''); setNewCHex('#000000'); toast.success(`${c.name} added!`);
    };
    const rmColor = n => setColors(colors.filter(c => c.name !== n));
    const edColor = (i, f, v) => { const u = [...colors]; u[i][f] = v; setColors(u); };
    const addPreset = p => { if (!colors.some(c => c.name.toLowerCase() === p.name.toLowerCase())) { setColors([...colors, p]); toast.success(`${p.name} added!`); } else toast.info(`${p.name} already added`); };

    /* Size handlers */
    const toggleSize = k => { setSizeErr(false); setEnabled(p => p.includes(k) ? p.filter(s => s !== k) : [...p, k]); };
    const setSzF = (k, f, v) => setStdSizes(p => ({ ...p, [k]: { ...p[k], [f]: f === 'stock' ? parseInt(v) || 0 : f === 'multiplier' ? parseFloat(v) || 1 : v } }));
    const toggleCP = k => setStdSizes(p => ({ ...p, [k]: { ...p[k], useCustomPrice: !p[k].useCustomPrice } }));
    const calcP = d => d.useCustomPrice && d.customPrice ? parseFloat(d.customPrice) : parseFloat(price || 0) * d.multiplier;
    const addInch = () => {
        if (!niSize.trim()) return toast.error('Enter size');
        if (inchSizes.some(s => s.size === niSize)) return toast.error('Size exists');
        setSizeErr(false);
        setInchSizes([...inchSizes, { size: niSize, multiplier: niMult, stock: niStock, customPrice: niPrice, useCustomPrice: niCustom }]);
        setNiSize(''); setNiMult(1.0); setNiStock(0); setNiPrice(''); setNiCustom(false); toast.success('Size added!');
    };
    const rmInch = s => setInchSizes(inchSizes.filter(i => i.size !== s));
    const edInch = (i, f, v) => { const u = [...inchSizes]; if (f === 'useCustomPrice') u[i].useCustomPrice = !u[i].useCustomPrice; else if (f === 'stock') u[i].stock = parseInt(v) || 0; else if (f === 'multiplier') u[i].multiplier = parseFloat(v) || 1; else u[i][f] = v; setInchSizes(u); };

    const formatSizes = () => {
        if (sizeType === 'standard') return enabledSizes.map(k => { const d = stdSizes[k]; const obj = { size: k, priceMultiplier: d.multiplier, stock: d.stock }; if (d.useCustomPrice) { const v = d.customPrice?.trim(); if (!v || isNaN(+v) || +v <= 0) { toast.error(`Invalid price for ${k}`); throw new Error('bad'); } obj.customPrice = +v; obj.useCustomPrice = true; } return obj; });
        return inchSizes.map(s => { const obj = { size: s.size, priceMultiplier: s.multiplier, stock: s.stock }; if (s.useCustomPrice) { const v = s.customPrice?.trim(); if (!v || isNaN(+v) || +v <= 0) { toast.error(`Invalid price for ${s.size}`); throw new Error('bad'); } obj.customPrice = +v; obj.useCustomPrice = true; } return obj; });
    };

    const validate = (isDraft = false) => {
        const errs = [];
        if (!name.trim()) errs.push('Product name is required');
        if (!description.trim()) errs.push('Short description is required');
        if (!subCategory || !subCategory.trim()) errs.push('Sub category is required');
        if (!hasSizes) { errs.push('At least one size must be selected'); setSizeErr(true); setSizeCardShake(true); setTimeout(() => setSizeCardShake(false), 600); setTimeout(() => sizeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100); }
        if (!isDraft) { if (!price || isNaN(+price) || +price <= 0) errs.push('Base price is required'); if (!uploaded.length) errs.push('At least one image is required'); if (!colors.length) errs.push('Add at least one color variant'); }
        return errs;
    };

    const saveDraft = async () => {
        const errs = validate(true); if (errs.length) { setValErrs(errs); window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
        setValErrs([]); setDraftSaving(true);
        try { localStorage.setItem('ap_full_draft', JSON.stringify({ name, description, price, discountPrice, category, subCategory, bestseller, detailedDescription, savedAt: new Date().toISOString() })); toast.success('💾 Draft saved!'); setShowDraftPage(true); }
        catch { toast.error('Failed to save draft'); } finally { setDraftSaving(false); }
    };

    const onSubmit = async (e) => {
        e?.preventDefault(); const errs = validate(false); if (errs.length) { setValErrs(errs); window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
        setValErrs([]); setSubmitting(true);
        try {
            const fd = new FormData();
            fd.append('name', name.trim()); fd.append('description', description.trim()); fd.append('detailedDescription', detailedDescription);
            fd.append('price', price); fd.append('discountPrice', discountPrice || ''); fd.append('category', category); fd.append('subCategory', subCategory);
            fd.append('bestseller', bestseller); fd.append('sizes', JSON.stringify(formatSizes())); fd.append('color', JSON.stringify(colors));
            images.forEach(img => { if (img) fd.append('images', img); });
            const res = await axios.post(`${backendUrl}/api/product/add`, fd, { headers: { token } });
            if (res.data.success) { toast.success('🎉 Product published!'); try { localStorage.removeItem('ap_draft'); localStorage.removeItem('ap_full_draft'); } catch { } resetForm(); }
            else toast.error(res.data.message || 'Failed to publish');
        } catch (err) { if (err.message !== 'bad') toast.error(err.response?.data?.message || 'Something went wrong'); }
        finally { setSubmitting(false); }
    };

    const resetForm = () => { setName(''); setDesc(''); setDD(''); setPrice(''); setDiscPrice(''); setColors([]); setEnabled([]); setStdSizes(INIT_SIZES); setInchSizes([]); setImages(Array(10).fill(null)); setSizeType('standard'); setCategory('Men'); setSubCat(CATEGORY_DEFAULT_SUB['Men']); setBestseller(false); setValErrs([]); setSizeErr(false); setShowDraftPage(false); };
    const clearAll = () => { resetForm(); try { localStorage.removeItem('ap_draft'); } catch { } toast.success('Form cleared'); };

    const draftFormState = { name, description, price, detailedDescription, hasImages: uploaded.length > 0, hasColors: colors.length > 0, hasSizes };

    if (showDraftPage) return <DraftPage formState={draftFormState} onContinue={() => setShowDraftPage(false)} onPublishNow={() => { setShowDraftPage(false); setTimeout(() => onSubmit(), 100); }} onNewProduct={() => resetForm()} />;

    /* ─── shared input style ─── */
    const inp = (err = false) => ({ ...input(err), onFocus: focusGold, onBlur: blurBorder(err) });

    /* ─── Dark toggle button group ─── */
    const ToggleGroup = ({ options, value, onChange }) => (
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {options.map(([v, l]) => (
                <button key={v} type="button" onClick={() => onChange(v)} style={{
                    padding: '8px 16px', borderRadius: 10, fontSize: 12.5, fontWeight: 700,
                    border: `1px solid ${value === v ? B.gold : B.border}`,
                    background: value === v ? `linear-gradient(135deg,${B.gold},${B.goldLight})` : B.surface2,
                    color: value === v ? B.bg : B.muted, cursor: 'pointer', transition: 'all .15s',
                }}>{l}</button>
            ))}
        </div>
    );

    /* ─── Small size input ─── */
    const SzInput = ({ value, onChange, type = 'number', ...rest }) => (
        <input type={type} value={value} onChange={onChange} {...rest} style={{ ...input(), padding: '7px 10px', fontSize: 12.5, onFocus: undefined }}
            onFocus={focusGold} onBlur={blurBorder()} />
    );

    return (
        <div style={{ background: B.bg, fontFamily: 'system-ui,-apple-system,sans-serif', WebkitFontSmoothing: 'antialiased' }}>
            <style>{`
                @keyframes apShake{0%,100%{transform:translateX(0)}25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}
                .ap-shake{animation:apShake .4s ease}
                /* Quill editor dark theme */
                .ap-quill .ql-toolbar{background:${B.surface2}!important;border:1px solid ${B.border}!important;border-radius:11px 11px 0 0!important}
                .ap-quill .ql-toolbar .ql-stroke{stroke:${B.muted}!important}
                .ap-quill .ql-toolbar .ql-fill{fill:${B.muted}!important}
                .ap-quill .ql-toolbar button:hover .ql-stroke,.ap-quill .ql-toolbar button.ql-active .ql-stroke{stroke:${B.gold}!important}
                .ap-quill .ql-toolbar button:hover .ql-fill,.ap-quill .ql-toolbar button.ql-active .ql-fill{fill:${B.gold}!important}
                .ap-quill .ql-toolbar .ql-picker-label{color:${B.muted}!important}
                .ap-quill .ql-toolbar .ql-picker-options{background:${B.surface2}!important;border:1px solid ${B.border}!important;border-radius:8px!important}
                .ap-quill .ql-container{background:${B.surface2}!important;border:1px solid ${B.border}!important;border-top:none!important;border-radius:0 0 11px 11px!important;min-height:160px}
                .ap-quill .ql-editor{color:${B.cream}!important;font-family:inherit!important;font-size:13.5px!important}
                .ap-quill .ql-editor.ql-blank::before{color:${B.muted}!important;font-style:normal!important}
                input[type=color]{background:transparent;padding:2px}
                input[type=number]::-webkit-inner-spin-button{opacity:.3}
            `}</style>

            {/* ══ STICKY HEADER ══ */}
            <div style={{ position: 'sticky', top: 0, zIndex: 40, background: `${B.surface}ee`, backdropFilter: 'blur(14px)', borderBottom: `1px solid ${B.border}`, boxShadow: '0 4px 20px rgba(0,0,0,.45)', height: 62, display: 'flex', alignItems: 'center', padding: '0 24px', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 38, height: 38, borderRadius: 11, background: `linear-gradient(135deg,${B.gold},${B.goldLight})`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 4px 14px ${B.gold}40`, flexShrink: 0 }}>
                        <TbPackage size={18} style={{ color: B.bg }} />
                    </div>
                    <div>
                        <h1 style={{ color: B.cream, fontSize: 17, fontWeight: 800, letterSpacing: -.3, lineHeight: 1, margin: 0 }}>Add Product</h1>
                        <p style={{ color: B.muted, fontSize: 11, marginTop: 2, lineHeight: 1 }}>{progress}% complete</p>
                    </div>
                    {draftNotif && (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px', borderRadius: 99, background: B.amber.bg, color: B.amber.text, border: `1px solid ${B.amber.border}`, fontSize: 11, fontWeight: 700 }}>
                            <TbDeviceFloppy size={12} /> Auto-saved
                        </span>
                    )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <button type="button" onClick={clearAll} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px', borderRadius: 10, background: 'transparent', color: B.muted, border: `1px solid ${B.border}`, fontSize: 12.5, fontWeight: 600, cursor: 'pointer', transition: 'all .15s' }}
                        onMouseEnter={e => { e.currentTarget.style.color = B.red.text; e.currentTarget.style.borderColor = B.red.border; }}
                        onMouseLeave={e => { e.currentTarget.style.color = B.muted; e.currentTarget.style.borderColor = B.border; }}>
                        <TbTrash size={14} /> Clear
                    </button>
                    <button type="button" onClick={saveDraft} disabled={draftSaving} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px', borderRadius: 10, background: B.amber.bg, color: B.amber.text, border: `1px solid ${B.amber.border}`, fontSize: 12.5, fontWeight: 700, cursor: 'pointer', opacity: draftSaving ? .6 : 1, transition: 'all .15s' }}>
                        <TbDeviceFloppy size={14} /> {draftSaving ? 'Saving…' : 'Save Draft'}
                    </button>
                    <button type="button" onClick={onSubmit} disabled={submitting} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 18px', borderRadius: 10, background: `linear-gradient(135deg,${B.gold},${B.goldLight})`, color: B.bg, border: 'none', fontSize: 12.5, fontWeight: 700, cursor: 'pointer', boxShadow: `0 4px 14px ${B.gold}35`, opacity: submitting ? .6 : 1, transition: 'all .15s' }}>
                        <TbRocket size={14} /> {submitting ? 'Publishing…' : 'Publish'}
                    </button>
                </div>
            </div>

            {/* ══ STEP BAR ══ */}
            <Steps steps={[
                ['1', 'Basic Info', !!(name && description)],
                ['2', 'Pricing', !!price],
                ['3', 'Media', uploaded.length > 0],
                ['4', 'Colors', colors.length > 0],
                ['5', 'Sizes', hasSizes],
            ]} />

            {/* Progress bar */}
            <div style={{ height: 3, background: B.surface3 }}>
                <div style={{ height: '100%', background: `linear-gradient(90deg,${B.gold},${B.goldLight})`, transition: 'width .5s', width: `${progress}%`, boxShadow: `0 0 10px ${B.gold}50` }} />
            </div>

            <form onSubmit={onSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 18, padding: '20px 24px 40px', maxWidth: 1400, alignItems: 'start' }}>

                    {/* ══════════════ MAIN COLUMN ══════════════ */}
                    <div>
                        {/* Validation errors */}
                        {valErrs.length > 0 && (
                            <div style={{ background: B.red.bg, border: `1px solid ${B.red.border}`, borderRadius: 14, padding: 16, marginBottom: 16 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                                    <TbAlertTriangle size={15} style={{ color: B.red.text, flexShrink: 0 }} />
                                    <h4 style={{ color: B.red.text, fontSize: 13, fontWeight: 700, margin: 0 }}>Please fix before continuing:</h4>
                                </div>
                                <ul style={{ paddingLeft: 20, margin: 0 }}>
                                    {valErrs.map((e, i) => <li key={i} style={{ color: B.red.text, fontSize: 12.5, marginBottom: 3 }}>{e}</li>)}
                                </ul>
                            </div>
                        )}

                        {/* ── BASIC INFO ── */}
                        <Card icon={<TbPackage size={17} />} title="Basic Information" subtitle="Name, description & category">
                            <Field label="Product Name" required>
                                <div style={{ position: 'relative' }}>
                                    <input style={input(name.length > 90)} type="text" maxLength={100} placeholder="e.g. Classic Lambskin Leather Jacket" value={name} onChange={e => setName(e.target.value)} onFocus={focusGold} onBlur={blurBorder(name.length > 90)} />
                                    <span style={{ position: 'absolute', right: 12, bottom: 11, fontSize: 10.5, color: name.length > 80 ? B.amber.text : B.mutedSoft, pointerEvents: 'none' }}>{name.length}/100</span>
                                </div>
                            </Field>

                            <Field label="Short Description" required>
                                <div style={{ position: 'relative' }}>
                                    <textarea style={{ ...input(description.length > 280), resize: 'vertical', minHeight: 90 }} maxLength={300} placeholder="Compelling product description…" value={description} onChange={e => setDesc(e.target.value)} onFocus={focusGold} onBlur={blurBorder(description.length > 280)} />
                                    <span style={{ position: 'absolute', right: 12, bottom: 11, fontSize: 10.5, color: description.length > 240 ? B.amber.text : B.mutedSoft, pointerEvents: 'none' }}>{description.length}/300</span>
                                </div>
                            </Field>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
                                <Field label="Category">
                                    <select style={{
                                        ...input(), appearance: 'none', cursor: 'pointer',
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%238b7555' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                                        backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', paddingRight: 36
                                    }}
                                        value={category} onChange={e => { setCategory(e.target.value); setSubCat(CATEGORY_DEFAULT_SUB[e.target.value] || ''); }}
                                        onFocus={focusGold} onBlur={blurBorder()}>
                                        {['Men', 'Women', 'Others', 'Leather Pillow Cover', 'Sofa Headrest', 'Leather Desk Pad', 'Men Leather Apron'].map(c => <option key={c} value={c} style={{ background: B.surface2, color: B.cream }}>{c}</option>)}
                                    </select>
                                </Field>
                                <Field label="Sub Category">
                                    <select style={{
                                        ...input(), appearance: 'none', cursor: 'pointer',
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%238b7555' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                                        backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', paddingRight: 36
                                    }}
                                        value={subCategory} onChange={e => setSubCat(e.target.value)}
                                        onFocus={focusGold} onBlur={blurBorder()}>
                                        {category === 'Men' && <>
                                            <option value="Jackets">Jackets</option><option value="Bomber Biker Jacket">Bomber Biker Jacket</option>
                                            <option value="Moto Biker Jacket">Moto Biker Jacket</option><option value="Racing Coat">Racing Coat</option>
                                            <option value="Leather Coats">Leather Coats</option><option value="Men Winter Wear">Men Winter Wear</option>
                                        </>}
                                        {category === 'Women' && <>
                                            <option value="Jackets">Jackets</option><option value="Bomber Biker Jacket">Bomber Biker Jacket</option>
                                            <option value="Moto Biker Jacket">Moto Biker Jacket</option><option value="Racing Coat">Racing Coat</option>
                                            <option value="Women Winter Wear">Women Winter Wear</option><option value="Women Night Dress">Women Night Dress</option>
                                            <option value="Leather Pencil Skirt">Leather Pencil Skirt</option><option value="Leather Full Skirt">Leather Full Skirt</option>
                                            <option value="Slim Bodycon Skirt">Slim Bodycon Skirt</option>
                                        </>}
                                        {category === 'Others' && <>
                                            <option value="Pillow">Pillow</option><option value="Cushion Cover">Cushion Cover</option>
                                            <option value="Aprons">Aprons</option><option value="Desk Mat">Desk Mat</option><option value="Chair Cover">Chair Cover</option>
                                        </>}
                                        {category === 'Leather Pillow Cover' && <>
                                            <option value="Cylindrical Pillow Cover">Cylindrical Pillow Cover</option><option value="Square Pillow Cover">Square Pillow Cover</option>
                                            <option value="Rectangle Pillow Cover">Rectangle Pillow Cover</option><option value="Round Pillow Cover">Round Pillow Cover</option>
                                            <option value="Ear Hole Pillow Cushion Cover">Ear Hole Pillow Cushion Cover</option>
                                        </>}
                                        {category === 'Sofa Headrest' && <option value="Recliner Chair Headrest Cover">Recliner Chair Headrest Cover</option>}
                                        {category === 'Leather Desk Pad' && <option value="Leather Desk Mat">Leather Desk Mat</option>}
                                        {category === 'Men Leather Apron' && <option value="Apron">Apron</option>}
                                    </select>
                                </Field>
                                <Field label="SKU / Code" hint="Auto-generated if blank">
                                    <input style={input()} type="text" placeholder="Auto-generated" onFocus={focusGold} onBlur={blurBorder()} />
                                </Field>
                            </div>

                            <div style={{ borderTop: `1px solid ${B.borderSoft}`, paddingTop: 20, marginTop: 4 }}>
                                <Field label="Detailed Description" hint="Shown on product detail page. Add specs, care instructions, materials.">
                                    <div className="ap-quill">
                                        <ReactQuill theme="snow" value={detailedDescription} onChange={setDD} />
                                    </div>
                                </Field>
                            </div>
                        </Card>

                        {/* ── MEDIA ── */}
                        <Card icon={<TbPhoto size={17} />} title="Product Images" subtitle={`${uploaded.length}/10 uploaded`}
                            action={uploaded.length > 0 && (
                                <button type="button" onClick={() => { setLbIdx(0); setLbOpen(true); }} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 12px', borderRadius: 9, border: `1px solid ${B.border}`, background: 'transparent', color: B.creamSoft, fontSize: 12, fontWeight: 600, cursor: 'pointer', transition: 'all .15s' }}
                                    onMouseEnter={e => { e.currentTarget.style.background = B.goldDim; e.currentTarget.style.borderColor = B.border; }}
                                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}>
                                    <TbEye size={13} /> View All
                                </button>
                            )}>
                            {/* Drop zone */}
                            <div ref={dzRef} style={{
                                position: 'relative', borderRadius: 14, border: `2px dashed ${dragging ? B.gold : B.borderMid}`,
                                textAlign: 'center', padding: '28px 20px', marginBottom: 16,
                                background: dragging ? B.goldDim : B.surface3, cursor: 'pointer', transition: 'all .2s',
                                transform: dragging ? 'scale(1.01)' : 'none',
                            }} onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
                                <div style={{ width: 46, height: 46, borderRadius: 13, margin: '0 auto 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: dragging ? B.goldDim : B.surface2, border: `1px solid ${dragging ? B.gold : B.border}` }}>
                                    <TbPhoto size={22} style={{ color: dragging ? B.gold : B.muted }} />
                                </div>
                                <p style={{ color: B.cream, fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{dragging ? 'Drop your images here!' : 'Drag & drop images here'}</p>
                                <p style={{ color: B.muted, fontSize: 12 }}>or click to upload · PNG, JPG, WEBP · 800×800px recommended</p>
                                {!dragging && <input type="file" accept="image/*" multiple style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer', fontSize: 0 }}
                                    onChange={e => { const files = Array.from(e.target.files); let added = 0; setImages(prev => { const next = [...prev]; files.forEach(f => { const s = next.findIndex(x => !x); if (s !== -1) { next[s] = f; added++; } }); return next; }); e.target.value = ''; requestAnimationFrame(() => { if (added) toast.success(`${added} image${added > 1 ? 's' : ''} added!`); else toast.info('All slots full'); }); }} />}
                            </div>

                            {/* Image grid */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 10 }}>
                                {images.map((img, i) => (
                                    <div key={i} style={{
                                        position: 'relative', aspectRatio: '1', borderRadius: 12, overflow: 'hidden',
                                        border: `2px solid ${img ? (i === 0 ? B.gold : B.borderSoft) : 'dashed ' + B.borderSoft}`,
                                        background: img ? 'transparent' : B.surface3, cursor: img ? 'default' : 'pointer',
                                        ...(i === 0 && img ? { boxShadow: `0 0 14px ${B.gold}35` } : {})
                                    }}>
                                        {img ? (
                                            <>
                                                <img src={URL.createObjectURL(img)} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                {i === 0 && <span style={{ position: 'absolute', top: 5, left: 5, background: B.gold, color: B.bg, fontSize: 8, fontWeight: 800, padding: '2px 6px', borderRadius: 5 }}>MAIN</span>}
                                                <span style={{ position: 'absolute', top: 5, right: 5, background: 'rgba(0,0,0,.6)', color: B.cream, fontSize: 8, fontWeight: 700, padding: '2px 6px', borderRadius: 5 }}>{i + 1}</span>
                                                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.55)', opacity: 0, transition: 'opacity .18s', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6 }}
                                                    onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                                                    onMouseLeave={e => e.currentTarget.style.opacity = '0'}>
                                                    <button type="button" style={{ background: B.gold, color: B.bg, fontSize: 10, fontWeight: 700, padding: '4px 10px', borderRadius: 7, border: 'none', cursor: 'pointer' }} onMouseDown={e => { e.preventDefault(); e.stopPropagation(); setLbIdx(uploaded.indexOf(img)); setLbOpen(true); }}>🔍 View</button>
                                                    <button type="button" style={{ background: B.red.bg, color: B.red.text, fontSize: 10, fontWeight: 700, padding: '4px 10px', borderRadius: 7, border: `1px solid ${B.red.border}`, cursor: 'pointer' }} onMouseDown={e => { e.preventDefault(); e.stopPropagation(); delImg(i); }}>✕ Remove</button>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                                    <TbPlus size={15} style={{ color: B.mutedSoft, marginBottom: 2 }} />
                                                    <span style={{ fontSize: 9, color: B.mutedSoft, fontWeight: 500 }}>{i + 1}</span>
                                                </div>
                                                <input type="file" accept="image/*" style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', fontSize: 0 }} onChange={e => { if (e.target.files[0]) setImg(i, e.target.files[0]); e.target.value = ''; }} />
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <p style={{ color: B.muted, fontSize: 11.5, marginTop: 10 }}>First slot = main thumbnail. Hover any image to view or remove.</p>
                        </Card>

                        {/* ── COLORS ── */}
                        <Card icon={<TbPalette size={17} />} title="Color Variants" subtitle="Add available colors"
                            badge={colors.length > 0 && <span style={{ padding: '2px 8px', borderRadius: 99, background: `linear-gradient(135deg,${B.gold},${B.goldLight})`, color: B.bg, fontSize: 10, fontWeight: 800 }}>{colors.length}</span>}>
                            <Field label="Input Mode">
                                <ToggleGroup options={[['both', 'Name + Color'], ['nameOnly', 'Name Only'], ['hexOnly', 'Color Only']]} value={colorMode} onChange={setColorMode} />
                            </Field>
                            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: 12, padding: 16, background: B.surface2, borderRadius: 12, border: `1px solid ${B.borderSoft}`, marginBottom: 14 }}>
                                {(colorMode === 'both' || colorMode === 'nameOnly') && (
                                    <Field label="Name">
                                        <input style={{ ...input(), width: 160 }} type="text" placeholder="e.g. Navy Blue" value={newColorName} onChange={e => setNewCName(e.target.value)} onFocus={focusGold} onBlur={blurBorder()} onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addColor())} />
                                    </Field>
                                )}
                                {(colorMode === 'both' || colorMode === 'hexOnly') && (
                                    <Field label="Color">
                                        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                                            <input type="color" value={newColorHex} onChange={e => setNewCHex(e.target.value)} style={{ width: 40, height: 40, borderRadius: 9, border: `1px solid ${B.border}`, cursor: 'pointer', background: 'transparent' }} />
                                            <input style={{ ...input(), width: 100 }} type="text" value={newColorHex} onChange={e => setNewCHex(e.target.value)} onFocus={focusGold} onBlur={blurBorder()} />
                                        </div>
                                    </Field>
                                )}
                                <button type="button" onClick={addColor} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 18px', borderRadius: 10, background: `linear-gradient(135deg,${B.gold},${B.goldLight})`, color: B.bg, border: 'none', fontSize: 13, fontWeight: 700, cursor: 'pointer', boxShadow: `0 4px 12px ${B.gold}35` }}>
                                    <TbPlus size={14} /> Add
                                </button>
                            </div>

                            {colors.length === 0 ? (
                                <div style={{ textAlign: 'center', padding: '28px 20px', border: `2px dashed ${B.borderSoft}`, borderRadius: 12, marginBottom: 14 }}>
                                    <TbPalette size={28} style={{ color: B.mutedSoft, marginBottom: 8, display: 'block', margin: '0 auto 8px' }} />
                                    <p style={{ color: B.muted, fontSize: 13, fontWeight: 500 }}>No colors yet</p>
                                    <p style={{ color: B.mutedSoft, fontSize: 12 }}>Add above or pick from presets below</p>
                                </div>
                            ) : (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
                                    {colors.map((c, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', background: B.surface2, border: `1px solid ${B.borderSoft}`, borderRadius: 11, transition: 'border-color .15s' }}
                                            onMouseEnter={e => e.currentTarget.style.borderColor = B.border}
                                            onMouseLeave={e => e.currentTarget.style.borderColor = B.borderSoft}>
                                            <input type="color" value={c.hex} onChange={e => edColor(i, 'hex', e.target.value)} style={{ width: 34, height: 34, borderRadius: 8, border: `1px solid ${B.border}`, cursor: 'pointer', background: 'transparent', flexShrink: 0 }} />
                                            <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                                                <input type="text" value={c.name} onChange={e => edColor(i, 'name', e.target.value)} placeholder="Color name" style={{ fontSize: 13, fontWeight: 600, color: B.cream, background: 'transparent', border: 'none', borderBottom: `1px solid ${B.borderSoft}`, outline: 'none', padding: '3px 0', transition: 'border-color .15s' }} onFocus={e => e.target.style.borderColor = B.gold} onBlur={e => e.target.style.borderColor = B.borderSoft} />
                                                <input type="text" value={c.hex} onChange={e => edColor(i, 'hex', e.target.value)} placeholder="#000000" style={{ fontSize: 12, color: B.muted, background: 'transparent', border: 'none', borderBottom: `1px solid ${B.borderSoft}`, outline: 'none', padding: '3px 0', fontFamily: 'monospace', transition: 'border-color .15s' }} onFocus={e => e.target.style.borderColor = B.gold} onBlur={e => e.target.style.borderColor = B.borderSoft} />
                                            </div>
                                            <div style={{ width: 22, height: 22, borderRadius: '50%', flexShrink: 0, background: c.hex, border: `1px solid rgba(255,255,255,.15)`, boxShadow: `0 0 8px ${c.hex}60` }} />
                                            <button type="button" onClick={() => rmColor(c.name)} style={{ width: 28, height: 28, borderRadius: 8, background: B.red.bg, border: `1px solid ${B.red.border}`, color: B.red.text, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
                                                <TbX size={12} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div style={{ borderTop: `1px solid ${B.borderSoft}`, paddingTop: 16 }}>
                                <p style={{ color: B.muted, fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.7px', marginBottom: 10 }}>Quick Presets</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                                    {PRESETS.map((p, i) => {
                                        const added = colors.some(c => c.name.toLowerCase() === p.name.toLowerCase());
                                        return (
                                            <button key={i} type="button" onClick={() => addPreset(p)} style={{
                                                display: 'flex', alignItems: 'center', gap: 6, padding: '5px 12px', borderRadius: 99, fontSize: 12, fontWeight: 600, cursor: 'pointer', transition: 'all .15s',
                                                background: added ? B.emerald.bg : B.surface2, color: added ? B.emerald.text : B.muted,
                                                border: `1px solid ${added ? B.emerald.border : B.borderSoft}`,
                                            }}>
                                                <div style={{ width: 10, height: 10, borderRadius: '50%', background: p.hex, flexShrink: 0, border: '1px solid rgba(255,255,255,.1)', boxShadow: `0 0 4px ${p.hex}60` }} />
                                                {p.name}{added ? ' ✓' : ''}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </Card>

                        {/* ── SIZES ── */}
                        <Card icon={<TbRuler size={17} />} title="Sizes & Inventory" subtitle="Minimum 1 size required"
                            badge={<span style={{ padding: '2px 8px', borderRadius: 99, background: B.red.bg, color: B.red.text, border: `1px solid ${B.red.border}`, fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.5px' }}>Required</span>}>
                            {sizeErr && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', background: B.red.bg, border: `1px solid ${B.red.border}`, borderRadius: 11, marginBottom: 16 }}>
                                    <TbAlertTriangle size={15} style={{ color: B.red.text, flexShrink: 0 }} />
                                    <span style={{ color: B.red.text, fontSize: 12.5, fontWeight: 600 }}>Please select at least one size — required before saving or publishing.</span>
                                </div>
                            )}

                            <Field label="Base Price (₹)" required>
                                <input style={input(price && (isNaN(+price) || +price <= 0))} type="number" placeholder="e.g. 4999" min="0" step="0.01" value={price} onChange={e => setPrice(e.target.value)} onFocus={focusGold} onBlur={blurBorder(price && (isNaN(+price) || +price <= 0))} />
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginTop: 8, padding: 10, background: B.blue.bg, border: `1px solid ${B.blue.border}`, borderRadius: 10 }}>
                                    <TbInfoCircle size={13} style={{ color: B.blue.text, flexShrink: 0, marginTop: 1 }} />
                                    <span style={{ color: B.blue.text, fontSize: 12 }}>Base price × multiplier = size's selling price. XL at 1.2× = ₹{price ? (parseFloat(price) * 1.2).toFixed(2) : '—'}. Enable Custom Price per size for fixed pricing.</span>
                                </div>
                            </Field>

                            <Field label="Size System">
                                <ToggleGroup options={[['standard', '👕 Standard (XS–3XL)'], ['inch', '📏 Inch-Based']]} value={sizeType} onChange={setSizeType} />
                            </Field>

                            {sizeType === 'standard' && (
                                <>
                                    <div ref={sizeRef} className={sizeCardShake ? 'ap-shake' : ''} style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, marginBottom: 14 }}>
                                        {Object.keys(stdSizes).map(k => {
                                            const on = enabledSizes.includes(k); const d = stdSizes[k];
                                            return (
                                                <div key={k} style={{
                                                    borderRadius: 12, padding: 14, cursor: 'pointer', transition: 'all .18s',
                                                    border: `2px solid ${on ? B.gold : B.borderSoft}`,
                                                    background: on ? B.goldDim : B.surface2,
                                                    boxShadow: on ? `0 0 14px ${B.gold}20` : undefined,
                                                }} onClick={() => !on && toggleSize(k)}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: on ? 10 : 0 }}>
                                                        <input type="checkbox" checked={on} onChange={() => toggleSize(k)} onClick={e => e.stopPropagation()} style={{ width: 14, height: 14, accentColor: B.gold, cursor: 'pointer' }} />
                                                        <span style={{
                                                            fontSize: 13, fontWeight: 800, padding: '2px 7px', borderRadius: 6,
                                                            background: on ? B.gold : B.surface3, color: on ? B.bg : B.muted
                                                        }}>{k}</span>
                                                        {on && d.stock > 0 && <span style={{ fontSize: 9, background: B.emerald.bg, color: B.emerald.text, fontWeight: 700, padding: '2px 5px', borderRadius: 99 }}>{d.stock}×</span>}
                                                    </div>
                                                    {on && (
                                                        <div onClick={e => e.stopPropagation()} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                                            <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5, fontWeight: 600, color: B.muted, cursor: 'pointer' }}>
                                                                <input type="checkbox" checked={d.useCustomPrice} onChange={() => toggleCP(k)} style={{ accentColor: B.gold }} /> Custom Price
                                                            </label>
                                                            {d.useCustomPrice ? (
                                                                <div>
                                                                    <p style={{ fontSize: 10, color: B.muted, fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>Price (₹)</p>
                                                                    <input type="number" step="0.01" min="0" value={d.customPrice} onChange={e => setSzF(k, 'customPrice', e.target.value)} placeholder="Price" style={{ ...input(), padding: '6px 10px', fontSize: 12 }} onFocus={focusGold} onBlur={blurBorder()} />
                                                                    <span style={{ color: B.gold, fontSize: 10.5, fontWeight: 700, marginTop: 3, display: 'block' }}>₹ {d.customPrice || '—'}</span>
                                                                </div>
                                                            ) : (
                                                                <div>
                                                                    <p style={{ fontSize: 10, color: B.muted, fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>Multiplier ×{d.multiplier}</p>
                                                                    <input type="number" step="0.05" min="0.5" max="3" value={d.multiplier} onChange={e => setSzF(k, 'multiplier', e.target.value)} style={{ ...input(), padding: '6px 10px', fontSize: 12 }} onFocus={focusGold} onBlur={blurBorder()} />
                                                                    <span style={{ color: B.emerald.text, fontSize: 10.5, fontWeight: 700, marginTop: 3, display: 'block' }}>₹ {price ? calcP(d).toFixed(2) : '—'}</span>
                                                                </div>
                                                            )}
                                                            <div>
                                                                <p style={{ fontSize: 10, color: B.muted, fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>Stock</p>
                                                                <input type="number" min="0" value={d.stock} onChange={e => setSzF(k, 'stock', e.target.value)} style={{ ...input(), padding: '6px 10px', fontSize: 12 }} onFocus={focusGold} onBlur={blurBorder()} />
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                    {enabledSizes.length > 0 && (
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, padding: 12, background: B.surface2, borderRadius: 11, border: `1px solid ${B.borderSoft}`, marginBottom: 12 }}>
                                            {enabledSizes.map(k => (
                                                <span key={k} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '5px 12px', background: `linear-gradient(135deg,${B.gold},${B.goldLight})`, color: B.bg, borderRadius: 99, fontSize: 11.5, fontWeight: 700 }}>
                                                    {k} · ₹{price ? calcP(stdSizes[k]).toFixed(0) : (stdSizes[k].customPrice || '—')} · {stdSizes[k].stock}pcs
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                                        {[['S/M/L/XL', () => { setEnabled(['S', 'M', 'L', 'XL']); setSizeErr(false); toast.success('S/M/L/XL selected!'); }],
                                        ['All Sizes', () => { setEnabled(Object.keys(stdSizes)); setSizeErr(false); toast.success('All selected!'); }],
                                        ['Clear', () => setEnabled([])]].map(([lbl, action]) => (
                                            <button key={lbl} type="button" onClick={action} style={{ padding: '7px 14px', borderRadius: 9, border: `1px solid ${B.border}`, background: 'transparent', color: B.muted, fontSize: 12, fontWeight: 600, cursor: 'pointer', transition: 'all .15s' }}
                                                onMouseEnter={e => { e.currentTarget.style.color = B.cream; e.currentTarget.style.borderColor = B.border; }}
                                                onMouseLeave={e => { e.currentTarget.style.color = B.muted; }}>
                                                {lbl}
                                            </button>
                                        ))}
                                    </div>
                                </>
                            )}

                            {sizeType === 'inch' && (
                                <>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: 12, padding: 16, background: B.surface2, borderRadius: 12, border: `1px solid ${B.borderSoft}`, marginBottom: 14 }}>
                                        <Field label="Size Label"><input style={{ ...input(), width: 100 }} type="text" placeholder="14x14" value={niSize} onChange={e => setNiSize(e.target.value)} onFocus={focusGold} onBlur={blurBorder()} /></Field>
                                        <Field label="Stock"><input style={{ ...input(), width: 80 }} type="number" min="0" value={niStock} onChange={e => setNiStock(parseInt(e.target.value) || 0)} onFocus={focusGold} onBlur={blurBorder()} /></Field>
                                        <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: B.muted, cursor: 'pointer', paddingBottom: 10 }}>
                                            <input type="checkbox" checked={niCustom} onChange={e => setNiCustom(e.target.checked)} style={{ accentColor: B.gold }} /> Custom Price
                                        </label>
                                        {niCustom
                                            ? <Field label="Price (₹)"><input style={{ ...input(), width: 90 }} type="number" step="0.01" min="0" value={niPrice} onChange={e => setNiPrice(e.target.value)} onFocus={focusGold} onBlur={blurBorder()} /></Field>
                                            : <Field label="Multiplier"><input style={{ ...input(), width: 85 }} type="number" step="0.1" min="0.5" max="2" value={niMult} onChange={e => setNiMult(parseFloat(e.target.value) || 1)} onFocus={focusGold} onBlur={blurBorder()} /></Field>
                                        }
                                        <button type="button" onClick={addInch} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 18px', borderRadius: 10, background: `linear-gradient(135deg,${B.gold},${B.goldLight})`, color: B.bg, border: 'none', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>
                                            <TbPlus size={14} /> Add Size
                                        </button>
                                    </div>
                                    {inchSizes.length === 0 ? (
                                        <div style={{ textAlign: 'center', padding: '28px 20px', border: `2px dashed ${B.borderSoft}`, borderRadius: 12 }}>
                                            <TbRuler size={28} style={{ color: B.mutedSoft, margin: '0 auto 8px', display: 'block' }} />
                                            <p style={{ color: B.muted, fontSize: 13 }}>No inch sizes yet — add above</p>
                                        </div>
                                    ) : (
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
                                            {inchSizes.map((s, i) => (
                                                <div key={i} style={{ background: B.surface2, border: `1px solid ${B.borderSoft}`, borderRadius: 12, padding: 14 }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                                                        <span style={{ color: B.cream, fontSize: 14, fontWeight: 800 }}>{s.size}"</span>
                                                        <button type="button" onClick={() => rmInch(s.size)} style={{ width: 24, height: 24, borderRadius: 7, background: B.red.bg, border: `1px solid ${B.red.border}`, color: B.red.text, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                                            <TbX size={11} />
                                                        </button>
                                                    </div>
                                                    <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5, fontWeight: 600, color: B.muted, marginBottom: 8, cursor: 'pointer' }}>
                                                        <input type="checkbox" checked={s.useCustomPrice} onChange={() => edInch(i, 'useCustomPrice')} style={{ accentColor: B.gold }} /> Custom Price
                                                    </label>
                                                    {s.useCustomPrice
                                                        ? <div style={{ marginBottom: 8 }}><p style={{ fontSize: 10, color: B.muted, fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>Price (₹)</p><input type="number" step="0.01" min="0" value={s.customPrice} onChange={e => edInch(i, 'customPrice', e.target.value)} style={{ ...input(), padding: '6px 10px', fontSize: 12 }} onFocus={focusGold} onBlur={blurBorder()} /></div>
                                                        : <div style={{ marginBottom: 8 }}><p style={{ fontSize: 10, color: B.muted, fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>Multiplier</p><input type="number" step="0.1" min="0.5" max="2" value={s.multiplier} onChange={e => edInch(i, 'multiplier', e.target.value)} style={{ ...input(), padding: '6px 10px', fontSize: 12 }} onFocus={focusGold} onBlur={blurBorder()} /></div>
                                                    }
                                                    <div><p style={{ fontSize: 10, color: B.muted, fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>Stock</p><input type="number" min="0" value={s.stock} onChange={e => edInch(i, 'stock', e.target.value)} style={{ ...input(), padding: '6px 10px', fontSize: 12 }} onFocus={focusGold} onBlur={blurBorder()} /></div>
                                                    <span style={{ color: B.emerald.text, fontSize: 10.5, fontWeight: 700, marginTop: 5, display: 'block' }}>₹ {price && +price > 0 ? ((+price) * s.multiplier).toFixed(2) : '—'}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </>
                            )}
                        </Card>
                    </div>

                    {/* ══════════════ SIDEBAR ══════════════ */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

                        {/* Publish card */}
                        <div style={{ ...card({ marginBottom: 0 }), padding: 20 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                                <div style={{ width: 36, height: 36, borderRadius: 10, background: B.goldDim, border: `1px solid ${B.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <TbRocket size={17} style={{ color: B.gold }} />
                                </div>
                                <div>
                                    <p style={{ color: B.cream, fontSize: 13.5, fontWeight: 700, margin: 0 }}>Save & Publish</p>
                                    <p style={{ color: B.muted, fontSize: 11, marginTop: 2 }}>Draft saves · Publish goes live</p>
                                </div>
                            </div>
                            {/* Progress */}
                            <div style={{ marginBottom: 16 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5, fontWeight: 600, color: B.muted, marginBottom: 6 }}>
                                    <span>Completion</span><span style={{ color: B.gold }}>{progress}%</span>
                                </div>
                                <div style={{ height: 5, background: B.surface3, borderRadius: 4, overflow: 'hidden', border: `1px solid ${B.borderSoft}` }}>
                                    <div style={{ height: '100%', background: `linear-gradient(90deg,${B.gold},${B.goldLight})`, borderRadius: 4, width: `${progress}%`, transition: 'width .5s', boxShadow: `0 0 8px ${B.gold}50` }} />
                                </div>
                            </div>
                            {/* Bestseller toggle */}
                            <button type="button" onClick={() => setBestseller(p => !p)} style={{
                                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderRadius: 11, marginBottom: 12, cursor: 'pointer', transition: 'all .18s',
                                border: `1px solid ${bestseller ? B.gold : B.border}`, background: bestseller ? B.goldDim : 'transparent',
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                    <TbStar size={15} style={{ color: bestseller ? B.gold : B.muted }} />
                                    <span style={{ color: bestseller ? B.cream : B.muted, fontSize: 13, fontWeight: 600 }}>Mark as Bestseller</span>
                                </div>
                                <div style={{ width: 36, height: 20, borderRadius: 99, position: 'relative', transition: 'background .18s', background: bestseller ? B.gold : B.surface3, border: `1px solid ${bestseller ? B.gold : B.border}` }}>
                                    <div style={{ position: 'absolute', top: 2, width: 14, height: 14, borderRadius: '50%', background: B.cream, boxShadow: '0 1px 4px rgba(0,0,0,.3)', transition: 'transform .18s', transform: bestseller ? 'translateX(18px)' : 'translateX(2px)' }} />
                                </div>
                            </button>
                            <button type="button" onClick={saveDraft} disabled={draftSaving} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, padding: '11px', borderRadius: 11, marginBottom: 8, cursor: 'pointer', transition: 'all .15s', background: B.amber.bg, color: B.amber.text, border: `1px solid ${B.amber.border}`, fontSize: 13, fontWeight: 700, opacity: draftSaving ? .6 : 1 }}>
                                <TbDeviceFloppy size={15} /> {draftSaving ? 'Saving…' : 'Save as Draft'}
                            </button>
                            <button type="submit" disabled={submitting} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, padding: '11px', borderRadius: 11, cursor: 'pointer', background: `linear-gradient(135deg,${B.gold},${B.goldLight})`, color: B.bg, border: 'none', fontSize: 13, fontWeight: 700, boxShadow: `0 4px 16px ${B.gold}35`, opacity: submitting ? .6 : 1 }}>
                                <TbRocket size={15} /> {submitting ? 'Publishing…' : 'Publish Now'}
                            </button>
                        </div>

                        {/* Pricing sidebar */}
                        <div style={{ ...card({ marginBottom: 0 }), padding: 20 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                                <div style={{ width: 32, height: 32, borderRadius: 9, background: B.emerald.bg, border: `1px solid ${B.emerald.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <TbTag size={15} style={{ color: B.emerald.text }} />
                                </div>
                                <p style={{ color: B.cream, fontSize: 13.5, fontWeight: 700, margin: 0 }}>Pricing</p>
                            </div>
                            <Field label="Sale / Discount Price (₹)" hint="Optional — shown as sale price">
                                <input style={input()} type="number" placeholder="0.00" value={discountPrice} onChange={e => setDiscPrice(e.target.value)} onFocus={focusGold} onBlur={blurBorder()} />
                            </Field>
                            {discount && (
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', background: B.emerald.bg, border: `1px solid ${B.emerald.border}`, borderRadius: 10 }}>
                                    <span style={{ color: B.emerald.text, fontSize: 12.5, fontWeight: 600 }}>💸 Discount active</span>
                                    <span style={{ color: B.emerald.text, fontSize: 11, fontWeight: 800, background: 'rgba(52,211,153,0.2)', padding: '2px 8px', borderRadius: 99 }}>{discount}% off</span>
                                </div>
                            )}
                        </div>

                        {/* Live Summary */}
                        <div style={{ ...card({ marginBottom: 0 }), padding: 20 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                                <div style={{ width: 32, height: 32, borderRadius: 9, background: B.blue.bg, border: `1px solid ${B.blue.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <TbChartBar size={15} style={{ color: B.blue.text }} />
                                </div>
                                <p style={{ color: B.cream, fontSize: 13.5, fontWeight: 700, margin: 0 }}>Live Summary</p>
                            </div>
                            {[
                                ['Name', name || <span style={{ color: B.mutedSoft, fontStyle: 'italic', fontSize: 12 }}>Not set</span>],
                                ['Category', `${category} › ${subCategory || '—'}`],
                                ['Base Price', price ? <span style={{ fontWeight: 800, color: B.gold }}>₹{price}</span> : <span style={{ color: B.mutedSoft }}>—</span>],
                                ['Sale Price', discountPrice ? <span style={{ color: B.emerald.text, fontWeight: 800 }}>₹{discountPrice}</span> : <span style={{ color: B.mutedSoft }}>—</span>],
                                ['Colors', colors.length > 0 ? <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', justifyContent: 'flex-end' }}>{colors.map((c, i) => <div key={i} title={c.name} style={{ width: 14, height: 14, borderRadius: '50%', background: c.hex, border: '1px solid rgba(255,255,255,.1)', boxShadow: `0 0 4px ${c.hex}60` }} />)}</div> : <span style={{ color: B.mutedSoft }}>—</span>],
                                ['Sizes', sizeType === 'standard' ? (enabledSizes.length ? <span style={{ fontWeight: 700, color: B.cream }}>{enabledSizes.join(', ')}</span> : <span style={{ color: B.red.text, fontWeight: 700, fontSize: 11 }}>⚠ Required</span>) : (inchSizes.length ? <span style={{ fontWeight: 700, color: B.cream }}>{inchSizes.map(s => s.size).join(', ')}</span> : <span style={{ color: B.red.text, fontWeight: 700, fontSize: 11 }}>⚠ Required</span>)],
                                ['Images', <span style={{ padding: '2px 8px', borderRadius: 99, fontSize: 10.5, fontWeight: 700, background: uploaded.length > 0 ? B.emerald.bg : B.amber.bg, color: uploaded.length > 0 ? B.emerald.text : B.amber.text, border: `1px solid ${uploaded.length > 0 ? B.emerald.border : B.amber.border}` }}>{uploaded.length}/10</span>],
                                ['Bestseller', bestseller ? <span style={{ background: B.amber.bg, color: B.amber.text, border: `1px solid ${B.amber.border}`, fontSize: 10.5, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>⭐ Yes</span> : <span style={{ color: B.mutedSoft, fontSize: 12 }}>No</span>],
                            ].map(([k, v], i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '8px 0', borderBottom: i < 7 ? `1px solid ${B.borderSoft}` : 'none', gap: 10 }}>
                                    <span style={{ color: B.muted, fontSize: 12, fontWeight: 500, flexShrink: 0 }}>{k}</span>
                                    <span style={{ color: B.creamSoft, fontSize: 12.5, fontWeight: 500, textAlign: 'right', maxWidth: 155, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{v}</span>
                                </div>
                            ))}
                        </div>

                        {/* Quick Actions */}
                        <div style={{ ...card({ marginBottom: 0 }), padding: 20 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                                <div style={{ width: 32, height: 32, borderRadius: 9, background: B.violet.bg, border: `1px solid ${B.violet.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <TbBolt size={15} style={{ color: B.violet.text }} />
                                </div>
                                <p style={{ color: B.cream, fontSize: 13.5, fontWeight: 700, margin: 0 }}>Quick Actions</p>
                            </div>
                            {[
                                ['🎨 Add 4 basic colors', () => { const toAdd = PRESETS.filter(p => !colors.some(c => c.name === p.name)).slice(0, 4); setColors([...colors, ...toAdd]); toast.success(`${toAdd.length} colors added!`); }],
                                ['👕 Select S / M / L / XL', () => { setEnabled(['S', 'M', 'L', 'XL']); setSizeErr(false); setSizeType('standard'); toast.success('S/M/L/XL selected!'); }],
                                ['✅ Select all sizes', () => { setEnabled(Object.keys(stdSizes)); setSizeErr(false); setSizeType('standard'); toast.success('All sizes selected!'); }],
                                ['🗑 Clear all sizes', () => { setEnabled([]); toast.info('Sizes cleared'); }],
                                ['🗑 Clear all colors', () => { setColors([]); toast.info('Colors cleared'); }],
                            ].map(([lbl, action]) => (
                                <button key={lbl} type="button" onClick={action} style={{ width: '100%', textAlign: 'left', padding: '10px 12px', borderRadius: 10, border: `1px solid ${B.borderSoft}`, background: 'transparent', color: B.muted, fontSize: 12.5, fontWeight: 500, cursor: 'pointer', marginBottom: 6, transition: 'all .15s', display: 'block' }}
                                    onMouseEnter={e => { e.currentTarget.style.background = B.goldDim; e.currentTarget.style.color = B.cream; e.currentTarget.style.borderColor = B.border; }}
                                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = B.muted; e.currentTarget.style.borderColor = B.borderSoft; }}>
                                    {lbl}
                                </button>
                            ))}
                        </div>

                        {/* Tips */}
                        <div style={{ background: B.goldDim, border: `1px solid ${B.borderMid}`, borderRadius: 16, padding: 20 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                                <HiOutlineLightBulb size={17} style={{ color: B.gold, flexShrink: 0 }} />
                                <p style={{ color: B.cream, fontSize: 13, fontWeight: 700, margin: 0 }}>Admin Tips</p>
                            </div>
                            <ul style={{ paddingLeft: 0, margin: 0, listStyle: 'none' }}>
                                {['Drag & drop multiple images onto the drop zone', 'Base price × multiplier = size\'s selling price', 'Enable "Custom Price" per size for fixed pricing', 'Sizes are required — select at least 1', 'Draft auto-saves basic fields every 2 seconds', 'Press Enter after typing a color name to add it'].map((tip, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 7, fontSize: 12, color: B.creamSoft, marginBottom: 7 }}>
                                        <span style={{ color: B.gold, flexShrink: 0, marginTop: 1 }}>·</span>{tip}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </form>

            {lbOpen && uploaded.length > 0 && <Lightbox imgs={uploaded} start={Math.min(lbIdx, uploaded.length - 1)} onClose={() => setLbOpen(false)} />}
        </div>
    );
};

export default Add;