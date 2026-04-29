// import React, { useEffect, useState, useRef, useCallback } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { backendUrl } from "../../App";
// import {
//     TbPackage, TbPhoto, TbPalette, TbRuler, TbChartBar,
//     TbX, TbPlus, TbCheck,
//     TbDeviceFloppy, TbEye,
//     TbStar, TbInfoCircle, TbBolt, TbTag, TbEdit,
//     TbArrowLeft, TbCloudUpload
// } from "react-icons/tb";
// import { HiOutlineLightBulb } from "react-icons/hi";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// /* ════════════════════════════════════════════════════════════════
//    D DOLLY LAMB — EDIT PRODUCT  |  Luxury dark brown & gold theme
// ════════════════════════════════════════════════════════════════ */
// const B = {
//     bg: '#0d0804', surface: '#1a0f07', surface2: '#221408', surface3: '#2a1a09',
//     border: 'rgba(201,168,76,0.18)', borderSoft: 'rgba(201,168,76,0.09)', borderMid: 'rgba(201,168,76,0.28)',
//     gold: '#c9a84c', goldLight: '#e8c46a', goldDim: 'rgba(201,168,76,0.12)', goldDim2: 'rgba(201,168,76,0.06)',
//     cream: '#f0d898', creamSoft: '#d4b87a', muted: '#8b7555', mutedSoft: '#5a4530',
//     emerald: { bg: 'rgba(52,211,153,0.10)', text: '#6ee7b7', border: 'rgba(52,211,153,0.22)', dot: '#34d399' },
//     amber: { bg: 'rgba(251,191,36,0.11)', text: '#fcd34d', border: 'rgba(251,191,36,0.28)', dot: '#fbbf24' },
//     red: { bg: 'rgba(248,113,113,0.10)', text: '#fca5a5', border: 'rgba(248,113,113,0.22)', dot: '#f87171' },
//     blue: { bg: 'rgba(96,165,250,0.12)', text: '#93c5fd', border: 'rgba(96,165,250,0.28)', dot: '#60a5fa' },
//     violet: { bg: 'rgba(167,139,250,0.12)', text: '#c4b5fd', border: 'rgba(167,139,250,0.28)', dot: '#a78bfa' },
// };
// const card = (ex = {}) => ({ background: B.surface, border: `1px solid ${B.border}`, borderRadius: 18, marginBottom: 18, overflow: 'hidden', ...ex });
// const inp = (err = false) => ({ width: '100%', padding: '10px 14px', borderRadius: 11, background: err ? 'rgba(248,113,113,0.08)' : B.surface2, color: B.cream, border: `1px solid ${err ? B.red.border : B.border}`, fontSize: 13.5, outline: 'none', transition: 'border-color .15s', boxSizing: 'border-box' });
// const focG = e => e.target.style.borderColor = B.gold;
// const blrB = (err = false) => e => e.target.style.borderColor = err ? B.red.border : B.border;
// const selSt = { ...inp(), appearance: 'none', cursor: 'pointer', paddingRight: 36, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%238b7555' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' };

// const PRESETS = [{ name: "Black", hex: "#000000" }, { name: "White", hex: "#FFFFFF" }, { name: "Red", hex: "#EF4444" }, { name: "Navy", hex: "#1E3A5F" }, { name: "Royal Blue", hex: "#3B82F6" }, { name: "Green", hex: "#166534" }, { name: "Yellow", hex: "#EAB308" }, { name: "Pink", hex: "#EC4899" }, { name: "Lavender", hex: "#8B5CF6" }, { name: "Orange", hex: "#F97316" }, { name: "Brown", hex: "#92400E" }, { name: "Gray", hex: "#9CA3AF" }];
// const INIT_STD = { XS: { multiplier: 0.9, stock: 0, customPrice: "", useCustomPrice: false }, S: { multiplier: 0.9, stock: 0, customPrice: "", useCustomPrice: false }, M: { multiplier: 1.0, stock: 0, customPrice: "", useCustomPrice: false }, L: { multiplier: 1.1, stock: 0, customPrice: "", useCustomPrice: false }, XL: { multiplier: 1.2, stock: 0, customPrice: "", useCustomPrice: false }, XXL: { multiplier: 1.35, stock: 0, customPrice: "", useCustomPrice: false }, "3XL": { multiplier: 1.5, stock: 0, customPrice: "", useCustomPrice: false } };
// const SUB_CATEGORIES = { Men: ["Jackets", "Bomber Biker Jacket", "Moto Biker Jacket", "Racing Coat", "Leather Coats", "Men Winter Wear"], Women: ["Jackets", "Bomber Biker Jacket", "Moto Biker Jacket", "Racing Coat", "Women Winter Wear", "Women Night Dress", "Leather Pencil Skirt", "Leather Full Skirt", "Slim Bodycon Skirt"], Others: ["Pillow", "Cushion Cover", "Aprons", "Desk Mat", "Chair Cover"], "Leather Pillow Cover": ["Cylindrical Pillow Cover", "Square Pillow Cover", "Rectangle Pillow Cover", "Round Pillow Cover", "Ear Hole Pillow Cushion Cover"], "Sofa Headrest": ["Recliner Chair Headrest Cover"], "Leather Desk Pad": ["Leather Desk Mat"], "Men Leather Apron": ["Apron"] };
// const CAT_DEFAULT = { Men: "Jackets", Women: "Jackets", Others: "Pillow", "Leather Pillow Cover": "Cylindrical Pillow Cover", "Sofa Headrest": "Recliner Chair Headrest Cover", "Leather Desk Pad": "Leather Desk Mat", "Men Leather Apron": "Apron" };

// /* Lightbox */
// const Lightbox = ({ imgs, start, onClose }) => {
//     const [cur, setCur] = useState(start);
//     useEffect(() => { const h = e => { if (e.key === "Escape") onClose(); if (e.key === "ArrowLeft") setCur(p => Math.max(0, p - 1)); if (e.key === "ArrowRight") setCur(p => Math.min(imgs.length - 1, p + 1)); }; window.addEventListener("keydown", h); return () => window.removeEventListener("keydown", h); }, [imgs.length, onClose]);
//     return (<div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,.92)', backdropFilter: 'blur(6px)' }} onClick={onClose}><div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, maxWidth: '90vw' }} onClick={e => e.stopPropagation()}>
//         <button onClick={onClose} style={{ position: 'absolute', top: -12, right: -12, width: 30, height: 30, borderRadius: '50%', background: B.gold, border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10 }}><TbX size={14} style={{ color: B.bg }} /></button>
//         <img src={imgs[cur]} alt="" style={{ maxWidth: '80vw', maxHeight: '70vh', borderRadius: 14, objectFit: 'contain', boxShadow: '0 20px 60px rgba(0,0,0,.8)', border: `1px solid ${B.border}` }} />
//         {cur > 0 && <button onClick={() => setCur(p => p - 1)} style={{ position: 'absolute', left: -56, top: '50%', transform: 'translateY(-50%)', width: 40, height: 40, borderRadius: '50%', background: 'rgba(201,168,76,0.15)', border: `1px solid ${B.border}`, color: B.cream, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><FiChevronLeft size={22} /></button>}
//         {cur < imgs.length - 1 && <button onClick={() => setCur(p => p + 1)} style={{ position: 'absolute', right: -56, top: '50%', transform: 'translateY(-50%)', width: 40, height: 40, borderRadius: '50%', background: 'rgba(201,168,76,0.15)', border: `1px solid ${B.border}`, color: B.cream, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><FiChevronRight size={22} /></button>}
//         {imgs.length > 1 && <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', maxWidth: '80vw' }}>{imgs.map((img, i) => <img key={i} src={img} alt="" onClick={() => setCur(i)} style={{ width: 46, height: 46, borderRadius: 9, objectFit: 'cover', cursor: 'pointer', border: `2px solid ${i === cur ? B.gold : 'transparent'}`, opacity: i === cur ? 1 : .5, transition: 'all .15s' }} />)}</div>}
//         <p style={{ color: B.muted, fontSize: 11 }}>{cur + 1} / {imgs.length} · Esc to close</p>
//     </div></div>);
// };

// /* Skeleton */
// const Skeleton = () => (<div style={{ minHeight: '100vh', background: B.bg }}><style>{`@keyframes skP{0%,100%{opacity:.5}50%{opacity:.15}}`}</style><div style={{ position: 'sticky', top: 0, zIndex: 40, background: `${B.surface}ee`, backdropFilter: 'blur(14px)', borderBottom: `1px solid ${B.border}`, height: 62, display: 'flex', alignItems: 'center', padding: '0 24px', gap: 12 }}>{[36, 1, 36].map((w, i) => <div key={i} style={{ width: w, height: i === 1 ? 20 : 36, borderRadius: i === 1 ? 2 : 11, background: B.surface3, animation: 'skP 1.4s ease-in-out infinite' }} />)}<div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}><div style={{ width: 120, height: 13, borderRadius: 6, background: B.surface3, animation: 'skP 1.4s ease-in-out infinite' }} /><div style={{ width: 80, height: 9, borderRadius: 4, background: B.surface3, animation: 'skP 1.4s ease-in-out infinite' }} /></div></div><div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 18, padding: '20px 24px', maxWidth: 1400 }}><div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>{[280, 220, 200, 260].map((h, i) => <div key={i} style={{ height: h, borderRadius: 18, background: B.surface, border: `1px solid ${B.borderSoft}`, animation: 'skP 1.4s ease-in-out infinite' }} />)}</div><div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>{[180, 160, 200].map((h, i) => <div key={i} style={{ height: h, borderRadius: 18, background: B.surface, border: `1px solid ${B.borderSoft}`, animation: 'skP 1.4s ease-in-out infinite' }} />)}</div></div></div>);

// /* Card */
// const Card = ({ icon, title, subtitle, badge, children, action }) => (<div style={card()}><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 22px', borderBottom: `1px solid ${B.borderSoft}` }}><div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><div style={{ width: 36, height: 36, borderRadius: 11, background: B.goldDim, border: `1px solid ${B.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: B.gold, flexShrink: 0 }}>{icon}</div><div><div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ color: B.cream, fontSize: 14, fontWeight: 700 }}>{title}</span>{badge}</div>{subtitle && <p style={{ color: B.muted, fontSize: 11.5, marginTop: 2 }}>{subtitle}</p>}</div></div>{action}</div><div style={{ padding: '22px 22px' }}>{children}</div></div>);

// /* Field */
// const Field = ({ label, required, hint, children }) => (<div style={{ marginBottom: 18 }}>{label && <label style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.7px', color: B.muted, marginBottom: 7 }}>{label}{required && <span style={{ color: B.red.text, fontSize: 13 }}>*</span>}</label>}{children}{hint && <p style={{ color: B.muted, fontSize: 11.5, marginTop: 5 }}>{hint}</p>}</div>);

// /* Toggle group */
// const ToggleGroup = ({ options, value, onChange }) => (<div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>{options.map(([v, l]) => (<button key={v} type="button" onClick={() => onChange(v)} style={{ padding: '8px 16px', borderRadius: 10, fontSize: 12.5, fontWeight: 700, border: `1px solid ${value === v ? B.gold : B.border}`, background: value === v ? `linear-gradient(135deg,${B.gold},${B.goldLight})` : B.surface2, color: value === v ? B.bg : B.muted, cursor: 'pointer', transition: 'all .15s' }}>{l}</button>))}</div>);

// /* ══════════════════════════ MAIN ══════════════════════════ */
// const UpdateProduct = ({ token }) => {
//     const { id } = useParams(); const navigate = useNavigate();
//     const [slots, setSlots] = useState(Array(10).fill(null).map(() => ({ existing: null, newFile: null })));
//     const [dragging, setDragging] = useState(false);
//     const [lightbox, setLightbox] = useState(null);
//     const dzRef = useRef(null);
//     const [name, setName] = useState(''); const [description, setDesc] = useState(''); const [detDesc, setDetDesc] = useState('');
//     const [price, setPrice] = useState(''); const [discPrice, setDiscPrice] = useState('');
//     const [category, setCat] = useState('Men'); const [subCategory, setSubCat] = useState(CAT_DEFAULT['Men']);
//     const [bestseller, setBest] = useState(false);
//     const [colors, setColors] = useState([]); const [newCName, setNewCName] = useState(''); const [newCHex, setNewCHex] = useState('#000000'); const [colorMode, setColorMode] = useState('both');
//     const [sizeType, setSizeType] = useState('standard'); const [stdSizes, setStdSizes] = useState(INIT_STD); const [enabledSz, setEnabledSz] = useState([]); const [inchSizes, setInchSizes] = useState([]);
//     const [niSize, setNiSize] = useState(''); const [niMult, setNiMult] = useState(1.0); const [niStock, setNiStock] = useState(0); const [niPrice, setNiPrice] = useState(''); const [niCustom, setNiCustom] = useState(false);
//     const [loading, setLoading] = useState(true); const [saving, setSaving] = useState(false); const [progress, setProgress] = useState(0);

//     const allSlotImgs = slots.map(s => s.newFile ? URL.createObjectURL(s.newFile) : s.existing).filter(Boolean);
//     const existingCount = slots.filter(s => s.existing && !s.newFile).length;
//     const newFilesCount = slots.filter(s => s.newFile).length;
//     const totalImages = slots.filter(s => s.newFile || s.existing).length;
//     const discount = discPrice && price && +discPrice < +price ? Math.round((1 - discPrice / price) * 100) : null;
//     const hasSizes = sizeType === 'standard' ? enabledSz.length > 0 : inchSizes.length > 0;
//     const calcPrice = d => d.useCustomPrice && d.customPrice ? parseFloat(d.customPrice) : parseFloat(price || 0) * d.multiplier;

//     useEffect(() => {
//         const fetch = async () => { setLoading(true); try { const res = await axios.post(backendUrl + '/api/product/single', { productId: id }); if (res.data.success) { const p = res.data.product; setName(p.name || ''); setDesc(p.description || ''); setDetDesc(p.detailedDescription || ''); setPrice(String(p.price || '')); setDiscPrice(String(p.discountPrice || '')); setBest(p.bestseller || false); const cat = p.category || 'Men'; setCat(cat); const validSubs = SUB_CATEGORIES[cat] || []; const savedSub = (p.subCategory || '').trim(); setSubCat(validSubs.some(s => s.toLowerCase() === savedSub.toLowerCase()) ? savedSub : (CAT_DEFAULT[cat] || validSubs[0] || '')); const existingImgs = Array.isArray(p.image) ? p.image.filter(Boolean) : [p.image].filter(Boolean); setSlots(Array(10).fill(null).map((_, i) => ({ existing: existingImgs[i] || null, newFile: null }))); if (p.color?.length) setColors(p.color.map(c => typeof c === 'string' ? { name: c, hex: '#808080' } : { name: c.name || c, hex: c.hex || '#808080' })); if (p.sizes?.length) { const first = p.sizes[0]; const isStd = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'].includes(typeof first === 'string' ? first : first?.size); if (isStd) { setSizeType('standard'); const en = []; const obj = { ...INIT_STD }; p.sizes.forEach(s => { const k = typeof s === 'string' ? s : s.size; en.push(k); obj[k] = { multiplier: s?.priceMultiplier || 1, stock: s?.stock ?? 0, customPrice: s?.customPrice > 0 ? String(s.customPrice) : '', useCustomPrice: s?.useCustomPrice === true }; }); setEnabledSz(en); setStdSizes(obj); } else { setSizeType('inch'); setInchSizes(p.sizes.map(s => ({ size: typeof s === 'string' ? s : s.size, multiplier: s?.priceMultiplier || 1, stock: s?.stock || 0, customPrice: s?.customPrice || '', useCustomPrice: s?.useCustomPrice || false }))); } } } else toast.error('Failed to load product'); } catch { toast.error('Failed to load product'); } finally { setLoading(false); } }; fetch();
//     }, [id]);

//     useEffect(() => { let s = 0; if (name.trim()) s += 15; if (description.trim()) s += 10; if (price) s += 15; if (totalImages > 0) s += 15; if (colors.length) s += 15; if (hasSizes) s += 20; if (detDesc) s += 10; setProgress(Math.min(100, s)); }, [name, description, price, totalImages, colors, hasSizes, detDesc]);

//     const setSlotFile = (i, f) => setSlots(p => { const n = [...p]; n[i] = { ...n[i], newFile: f }; return n; });
//     const clearSlotNew = (i) => setSlots(p => { const n = [...p]; n[i] = { ...n[i], newFile: null }; return n; });
//     const clearSlotAll = (i) => setSlots(p => { const n = [...p]; n[i] = { existing: null, newFile: null }; return n; });
//     const addFilesToSlots = (files) => { let added = 0; setSlots(prev => { const next = [...prev]; for (const file of files) { const ei = next.findIndex(s => !s.existing && !s.newFile); if (ei === -1) break; next[ei] = { existing: null, newFile: file }; added++; } return next; }); requestAnimationFrame(() => { if (added > 0) toast.success(`${added} image${added > 1 ? 's' : ''} added!`); else toast.info('All slots full'); }); };
//     const handleDragEnter = useCallback(e => { e.preventDefault(); e.stopPropagation(); setDragging(true); }, []);
//     const handleDragOver = useCallback(e => { e.preventDefault(); e.stopPropagation(); e.dataTransfer.dropEffect = 'copy'; setDragging(true); }, []);
//     const handleDragLeave = useCallback(e => { e.preventDefault(); e.stopPropagation(); if (dzRef.current && !dzRef.current.contains(e.relatedTarget)) setDragging(false); }, []);
//     const handleDrop = useCallback(e => { e.preventDefault(); e.stopPropagation(); setDragging(false); const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/')); if (!files.length) { toast.error('Only image files allowed'); return; } addFilesToSlots(files); }, []);

//     const addColor = () => { if (colorMode !== 'hexOnly' && !newCName.trim()) return toast.error('Enter color name'); const c = { name: newCName.trim() || `Color-${colors.length + 1}`, hex: newCHex || '#808080' }; if (colors.some(x => x.name.toLowerCase() === c.name.toLowerCase())) return toast.error('Color exists'); setColors([...colors, c]); setNewCName(''); setNewCHex('#000000'); toast.success(`${c.name} added`); };
//     const rmColor = n => setColors(colors.filter(c => c.name !== n));
//     const edColor = (i, f, v) => { const u = [...colors]; u[i][f] = v; setColors(u); };
//     const addPreset = p => colors.some(c => c.name.toLowerCase() === p.name.toLowerCase()) ? toast.info(`${p.name} already added`) : (setColors([...colors, p]), toast.success(`${p.name} added!`));
//     const toggleSz = k => setEnabledSz(p => p.includes(k) ? p.filter(x => x !== k) : [...p, k]);
//     const setSzF = (k, f, v) => setStdSizes(p => ({ ...p, [k]: { ...p[k], [f]: f === 'stock' ? parseInt(v) || 0 : f === 'multiplier' ? parseFloat(v) || 1 : v } }));
//     const toggleCP = k => setStdSizes(p => ({ ...p, [k]: { ...p[k], useCustomPrice: !p[k].useCustomPrice } }));
//     const addInch = () => { if (!niSize.trim()) return toast.error('Enter size'); if (inchSizes.some(s => s.size === niSize)) return toast.error('Size exists'); setInchSizes([...inchSizes, { size: niSize, multiplier: niMult, stock: niStock, customPrice: niPrice, useCustomPrice: niCustom }]); setNiSize(''); setNiMult(1); setNiStock(0); setNiPrice(''); setNiCustom(false); toast.success('Size added!'); };
//     const rmInch = s => setInchSizes(inchSizes.filter(i => i.size !== s));
//     const edInch = (i, f, v) => { const u = [...inchSizes]; if (f === 'useCustomPrice') u[i].useCustomPrice = !u[i].useCustomPrice; else if (f === 'stock') u[i].stock = parseInt(v) || 0; else if (f === 'multiplier') u[i].multiplier = parseFloat(v) || 1; else u[i][f] = v; setInchSizes(u); };
//     const fmtSizes = () => sizeType === 'standard' ? enabledSz.map(k => ({ size: k, priceMultiplier: stdSizes[k].multiplier, stock: stdSizes[k].stock, customPrice: stdSizes[k].customPrice, useCustomPrice: stdSizes[k].useCustomPrice })) : inchSizes.map(s => ({ size: s.size, priceMultiplier: s.multiplier, stock: s.stock, customPrice: s.customPrice, useCustomPrice: s.useCustomPrice }));

//     const onSubmit = async (e) => { e?.preventDefault(); if (!hasSizes) return toast.error('Select at least one size'); if (colors.length === 0) return toast.error('Add at least one color'); if (!price || isNaN(+price) || +price <= 0) return toast.error('Valid base price required'); if (totalImages === 0) return toast.error('At least one image required'); if (!subCategory || !subCategory.trim()) return toast.error('Sub category is required'); setSaving(true); try { const fd = new FormData(); fd.append('productId', id); fd.append('name', name.trim()); fd.append('description', description.trim()); fd.append('detailedDescription', detDesc); fd.append('price', price); fd.append('discountPrice', discPrice || ''); fd.append('category', category); fd.append('subCategory', subCategory); fd.append('bestseller', bestseller); fd.append('sizes', JSON.stringify(fmtSizes())); fd.append('color', JSON.stringify(colors)); const existingImageUrls = slots.filter(s => s.existing && !s.newFile).map(s => s.existing); fd.append('existingImages', JSON.stringify(existingImageUrls)); slots.forEach(s => { if (s.newFile) fd.append('images', s.newFile); }); const res = await axios.post(backendUrl + '/api/product/update', fd, { headers: { token } }); if (res.data.success) { toast.success('✅ Product updated!'); navigate(-1); } else toast.error(res.data.message); } catch { toast.error('Update failed!'); } finally { setSaving(false); } };

//     if (loading) return <Skeleton />;

//     return (
//         <div style={{ minHeight: '100vh', background: B.bg, fontFamily: 'system-ui,-apple-system,sans-serif', WebkitFontSmoothing: 'antialiased' }}>
//             <style>{`
//                 @keyframes upSpin{to{transform:rotate(360deg)}}
//                 .up-quill .ql-toolbar{background:${B.surface2}!important;border:1px solid ${B.border}!important;border-radius:11px 11px 0 0!important}
//                 .up-quill .ql-toolbar .ql-stroke{stroke:${B.muted}!important}.up-quill .ql-toolbar .ql-fill{fill:${B.muted}!important}
//                 .up-quill .ql-toolbar button:hover .ql-stroke,.up-quill .ql-toolbar button.ql-active .ql-stroke{stroke:${B.gold}!important}
//                 .up-quill .ql-toolbar button:hover .ql-fill,.up-quill .ql-toolbar button.ql-active .ql-fill{fill:${B.gold}!important}
//                 .up-quill .ql-toolbar .ql-picker-label{color:${B.muted}!important}
//                 .up-quill .ql-toolbar .ql-picker-options{background:${B.surface2}!important;border:1px solid ${B.border}!important;border-radius:8px!important}
//                 .up-quill .ql-container{background:${B.surface2}!important;border:1px solid ${B.border}!important;border-top:none!important;border-radius:0 0 11px 11px!important;min-height:160px}
//                 .up-quill .ql-editor{color:${B.cream}!important;font-family:inherit!important;font-size:13.5px!important}
//                 .up-quill .ql-editor.ql-blank::before{color:${B.muted}!important;font-style:normal!important}
//             `}</style>

//             {/* ── HEADER ── */}
//             <div style={{ position: 'sticky', top: 0, zIndex: 40, background: `${B.surface}ee`, backdropFilter: 'blur(14px)', borderBottom: `1px solid ${B.border}`, boxShadow: '0 4px 20px rgba(0,0,0,.45)', height: 62, display: 'flex', alignItems: 'center', padding: '0 24px', justifyContent: 'space-between' }}>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
//                     <button onClick={() => navigate(-1)} style={{ width: 36, height: 36, borderRadius: 10, border: `1px solid ${B.border}`, background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', color: B.muted, cursor: 'pointer', transition: 'all .15s' }} onMouseEnter={e => { e.currentTarget.style.background = B.goldDim; e.currentTarget.style.color = B.cream; }} onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = B.muted; }}><TbArrowLeft size={18} /></button>
//                     <div style={{ width: 1, height: 20, background: B.borderSoft }} />
//                     <div style={{ width: 38, height: 38, borderRadius: 11, background: `linear-gradient(135deg,${B.gold},${B.goldLight})`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 4px 14px ${B.gold}40`, flexShrink: 0 }}><TbEdit size={17} style={{ color: B.bg }} /></div>
//                     <div>
//                         <h1 style={{ color: B.cream, fontSize: 17, fontWeight: 800, letterSpacing: -.3, lineHeight: 1, margin: 0 }}>Edit Product</h1>
//                         <p style={{ color: B.muted, fontSize: 11, marginTop: 2, lineHeight: 1 }}>{progress}% complete · ID: {id?.slice(-6).toUpperCase()}</p>
//                     </div>
//                 </div>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
//                     <button type="button" onClick={() => navigate(-1)} style={{ padding: '7px 16px', borderRadius: 10, background: 'transparent', color: B.muted, border: `1px solid ${B.border}`, fontSize: 12.5, fontWeight: 600, cursor: 'pointer', transition: 'all .15s' }} onMouseEnter={e => e.currentTarget.style.color = B.cream} onMouseLeave={e => e.currentTarget.style.color = B.muted}>Cancel</button>
//                     <button type="button" onClick={onSubmit} disabled={saving} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '7px 20px', borderRadius: 10, background: `linear-gradient(135deg,${B.gold},${B.goldLight})`, color: B.bg, border: 'none', fontSize: 12.5, fontWeight: 700, cursor: 'pointer', boxShadow: `0 4px 14px ${B.gold}35`, opacity: saving ? .6 : 1, transition: 'all .15s' }}>
//                         {saving ? <><div style={{ width: 14, height: 14, border: `2px solid ${B.bg}`, borderTopColor: 'transparent', borderRadius: '50%', animation: 'upSpin .85s linear infinite' }} /> Saving…</> : <><TbDeviceFloppy size={15} /> Save Changes</>}
//                     </button>
//                 </div>
//             </div>

//             {/* Progress bar */}
//             <div style={{ height: 3, background: B.surface3 }}><div style={{ height: '100%', background: `linear-gradient(90deg,${B.gold},${B.goldLight})`, width: `${progress}%`, transition: 'width .5s', boxShadow: `0 0 10px ${B.gold}50` }} /></div>

//             <form onSubmit={onSubmit}>
//                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 18, padding: '20px 24px 48px', maxWidth: 1400, alignItems: 'start' }}>
//                     <div>
//                         {/* ── BASIC INFO ── */}
//                         <Card icon={<TbPackage size={17} />} title="Basic Information" subtitle="Name, description & categorisation">
//                             {/* <Field label="Product Name" required>
//                                 <div style={{ position: 'relative' }}>
//                                     <input style={inp(name.length > 90)} type="text" maxLength={100} placeholder="e.g. Classic Lambskin Leather Jacket" value={name} onChange={e => setName(e.target.value)} onFocus={focG} onBlur={blrB(name.length > 90)} required />
//                                     <span style={{ position: 'absolute', right: 12, bottom: 11, fontSize: 10.5, color: name.length > 80 ? B.amber.text : B.mutedSoft, pointerEvents: 'none' }}>{name.length}/100</span>
//                                 </div>
//                             </Field> */}
//                             <Field label="Product Name" required>
//                                 <div style={{ position: 'relative' }}>
//                                     <textarea
//                                         style={{
//                                             ...inp(name.length > 220),
//                                             resize: 'none',
//                                             wordBreak: 'break-word',
//                                             overflowWrap: 'break-word',
//                                             overflow: 'hidden',
//                                             minHeight: 48,
//                                             lineHeight: '1.5'
//                                         }}
//                                         maxLength={250}
//                                         rows={2}
//                                         placeholder="e.g. Classic Lambskin Leather Jacket"
//                                         value={name}
//                                         onChange={e => setName(e.target.value)}
//                                         onFocus={focG}
//                                         onBlur={blrB(name.length > 220)}
//                                         required
//                                     />
//                                     <span style={{ position: 'absolute', right: 12, bottom: 11, fontSize: 10.5, color: name.length > 220 ? B.amber.text : B.mutedSoft, pointerEvents: 'none' }}>
//                                         {name.length}/250
//                                     </span>
//                                 </div>
//                             </Field>
//                             <Field label="Short Description" required>
//                                 <div style={{ position: 'relative' }}>
//                                     <textarea style={{ ...inp(description.length > 280), resize: 'vertical', minHeight: 90 }} maxLength={300} rows={3} placeholder="Brief description for listings…" value={description} onChange={e => setDesc(e.target.value)} onFocus={focG} onBlur={blrB(description.length > 280)} required />
//                                     <span style={{ position: 'absolute', right: 12, bottom: 11, fontSize: 10.5, color: description.length > 240 ? B.amber.text : B.mutedSoft, pointerEvents: 'none' }}>{description.length}/300</span>
//                                 </div>
//                             </Field>
//                             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
//                                 <Field label="Category">
//                                     <select style={selSt} value={category} onChange={e => { setCat(e.target.value); setSubCat(CAT_DEFAULT[e.target.value] || SUB_CATEGORIES[e.target.value]?.[0] || ''); }} onFocus={focG} onBlur={blrB()}>
//                                         {Object.keys(SUB_CATEGORIES).map(c => <option key={c} value={c} style={{ background: B.surface2, color: B.cream }}>{c}</option>)}
//                                     </select>
//                                 </Field>
//                                 <Field label="Sub Category">
//                                     <select style={selSt} value={subCategory} onChange={e => setSubCat(e.target.value)} onFocus={focG} onBlur={blrB()}>
//                                         {(SUB_CATEGORIES[category] || []).map(s => <option key={s} value={s} style={{ background: B.surface2, color: B.cream }}>{s}</option>)}
//                                     </select>
//                                 </Field>
//                                 <Field label="SKU / Code" hint="Auto-generated if blank"><input style={inp()} type="text" placeholder="Auto-generated" onFocus={focG} onBlur={blrB()} /></Field>
//                             </div>
//                             <div style={{ borderTop: `1px solid ${B.borderSoft}`, paddingTop: 20, marginTop: 4 }}>
//                                 <Field label="Detailed Description" hint="Shown on product detail page — add specs, care instructions, materials">
//                                     <div className="up-quill"><ReactQuill theme="snow" value={detDesc} onChange={setDetDesc} /></div>
//                                 </Field>
//                             </div>
//                         </Card>

//                         {/* ── IMAGES ── */}
//                         <Card icon={<TbPhoto size={17} />} title="Product Images" subtitle={`${totalImages}/10 · ${existingCount} existing · ${newFilesCount} new`}
//                             action={allSlotImgs.length > 0 && (<button type="button" onClick={() => setLightbox({ imgs: allSlotImgs, start: 0 })} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 12px', borderRadius: 9, border: `1px solid ${B.border}`, background: 'transparent', color: B.creamSoft, fontSize: 12, fontWeight: 600, cursor: 'pointer', transition: 'all .15s' }} onMouseEnter={e => e.currentTarget.style.background = B.goldDim} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}><TbEye size={13} /> View All</button>)}>
//                             <div ref={dzRef} style={{ position: 'relative', borderRadius: 14, border: `2px dashed ${dragging ? B.gold : B.borderMid}`, textAlign: 'center', padding: '28px 20px', marginBottom: 16, background: dragging ? B.goldDim : B.surface3, cursor: 'pointer', transition: 'all .2s', transform: dragging ? 'scale(1.01)' : 'none' }} onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
//                                 <div style={{ width: 46, height: 46, borderRadius: 13, margin: '0 auto 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: dragging ? B.goldDim : B.surface2, border: `1px solid ${dragging ? B.gold : B.border}` }}><TbCloudUpload size={22} style={{ color: dragging ? B.gold : B.muted }} /></div>
//                                 <p style={{ color: B.cream, fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{dragging ? 'Drop images here!' : 'Drag & drop to add images'}</p>
//                                 <p style={{ color: B.muted, fontSize: 12 }}>or click individual slots below · PNG, JPG, WEBP</p>
//                                 {!dragging && <input type="file" accept="image/*" multiple style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer', fontSize: 0 }} onChange={e => { addFilesToSlots(Array.from(e.target.files)); e.target.value = ''; }} />}
//                             </div>
//                             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 10 }}>
//                                 {slots.map((slot, i) => {
//                                     const displayUrl = slot.newFile ? URL.createObjectURL(slot.newFile) : slot.existing;
//                                     const hasImg = !!displayUrl; const isNew = !!slot.newFile; const isExisting = !!slot.existing && !slot.newFile;
//                                     return (<div key={i} style={{ position: 'relative', aspectRatio: '1', borderRadius: 12, overflow: 'hidden', border: `2px solid ${hasImg ? (i === 0 ? B.gold : isNew ? B.emerald.dot : B.borderSoft) : 'dashed ' + B.borderSoft}`, background: hasImg ? 'transparent' : B.surface3, cursor: hasImg ? 'default' : 'pointer', ...(i === 0 && hasImg ? { boxShadow: `0 0 14px ${B.gold}35` } : {}) }}>
//                                         {hasImg ? (<>
//                                             <img src={displayUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//                                             {i === 0 && <span style={{ position: 'absolute', top: 5, left: 5, background: B.gold, color: B.bg, fontSize: 8, fontWeight: 800, padding: '2px 6px', borderRadius: 5, zIndex: 10 }}>MAIN</span>}
//                                             {isNew && <span style={{ position: 'absolute', bottom: 5, left: 5, background: B.emerald.dot, color: B.bg, fontSize: 8, fontWeight: 800, padding: '2px 6px', borderRadius: 5, zIndex: 10 }}>NEW</span>}
//                                             {isExisting && <span style={{ position: 'absolute', bottom: 5, left: 5, background: 'rgba(90,69,48,0.9)', color: B.cream, fontSize: 8, fontWeight: 700, padding: '2px 6px', borderRadius: 5, zIndex: 10 }}>SAVED</span>}
//                                             <span style={{ position: 'absolute', top: 5, right: 5, background: 'rgba(0,0,0,.6)', color: B.cream, fontSize: 8, fontWeight: 700, padding: '2px 6px', borderRadius: 5, zIndex: 10 }}>{i + 1}</span>
//                                             <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.55)', opacity: 0, transition: 'opacity .18s', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6, zIndex: 20 }} onMouseEnter={e => e.currentTarget.style.opacity = '1'} onMouseLeave={e => e.currentTarget.style.opacity = '0'}>
//                                                 <button type="button" style={{ background: B.gold, color: B.bg, fontSize: 10, fontWeight: 700, padding: '4px 10px', borderRadius: 7, border: 'none', cursor: 'pointer' }} onMouseDown={e => { e.preventDefault(); e.stopPropagation(); setLightbox({ imgs: allSlotImgs, start: Math.max(0, allSlotImgs.indexOf(displayUrl)) }); }}>🔍 View</button>
//                                                 {isNew && <button type="button" style={{ background: B.amber.bg, color: B.amber.text, fontSize: 10, fontWeight: 700, padding: '4px 10px', borderRadius: 7, border: `1px solid ${B.amber.border}`, cursor: 'pointer' }} onMouseDown={e => { e.preventDefault(); e.stopPropagation(); clearSlotNew(i); }}>↩ Revert</button>}
//                                                 <button type="button" style={{ background: B.red.bg, color: B.red.text, fontSize: 10, fontWeight: 700, padding: '4px 10px', borderRadius: 7, border: `1px solid ${B.red.border}`, cursor: 'pointer' }} onMouseDown={e => { e.preventDefault(); e.stopPropagation(); clearSlotAll(i); }}>✕ Remove</button>
//                                             </div>
//                                             <input type="file" accept="image/*" style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', fontSize: 0, zIndex: 30 }} onChange={e => { if (e.target.files[0]) setSlotFile(i, e.target.files[0]); e.target.value = ''; }} />
//                                         </>) : (<><div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}><TbPlus size={15} style={{ color: B.mutedSoft, marginBottom: 2 }} /><span style={{ fontSize: 9, color: B.mutedSoft, fontWeight: 500 }}>{i + 1}</span></div><input type="file" accept="image/*" style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', fontSize: 0 }} onChange={e => { if (e.target.files[0]) setSlotFile(i, e.target.files[0]); e.target.value = ''; }} /></>)}
//                                     </div>);
//                                 })}
//                             </div>
//                             <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 12 }}>
//                                 {[[B.gold, 'Main photo'], [B.emerald.dot, 'New (unsaved)'], ['rgba(90,69,48,0.9)', 'Saved']].map(([c, l]) => (
//                                     <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 5 }}><div style={{ width: 10, height: 10, borderRadius: 3, background: c }} /><span style={{ color: B.muted, fontSize: 11 }}>{l}</span></div>
//                                 ))}
//                             </div>
//                             <p style={{ color: B.muted, fontSize: 11.5, marginTop: 6 }}>Hover any slot to view, replace or remove.</p>
//                         </Card>

//                         {/* ── COLORS ── */}
//                         <Card icon={<TbPalette size={17} />} title="Color Variants" subtitle={`${colors.length} color${colors.length !== 1 ? 's' : ''} added`} badge={colors.length > 0 && <span style={{ padding: '2px 8px', borderRadius: 99, background: `linear-gradient(135deg,${B.gold},${B.goldLight})`, color: B.bg, fontSize: 10, fontWeight: 800 }}>{colors.length}</span>}>
//                             <Field label="Input Mode"><ToggleGroup options={[['both', 'Name + Color'], ['nameOnly', 'Name Only'], ['hexOnly', 'Color Only']]} value={colorMode} onChange={setColorMode} /></Field>
//                             <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: 12, padding: 16, background: B.surface2, borderRadius: 12, border: `1px solid ${B.borderSoft}`, marginBottom: 14 }}>
//                                 {(colorMode === 'both' || colorMode === 'nameOnly') && (<Field label="Name"><input style={{ ...inp(), width: 160 }} type="text" placeholder="e.g. Navy Blue" value={newCName} onChange={e => setNewCName(e.target.value)} onFocus={focG} onBlur={blrB()} onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addColor())} /></Field>)}
//                                 {(colorMode === 'both' || colorMode === 'hexOnly') && (<Field label="Color"><div style={{ display: 'flex', gap: 8, alignItems: 'center' }}><input type="color" value={newCHex} onChange={e => setNewCHex(e.target.value)} style={{ width: 40, height: 40, borderRadius: 9, border: `1px solid ${B.border}`, cursor: 'pointer', background: 'transparent' }} /><input style={{ ...inp(), width: 100 }} type="text" value={newCHex} onChange={e => setNewCHex(e.target.value)} onFocus={focG} onBlur={blrB()} /></div></Field>)}
//                                 <button type="button" onClick={addColor} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 18px', borderRadius: 10, background: `linear-gradient(135deg,${B.gold},${B.goldLight})`, color: B.bg, border: 'none', fontSize: 13, fontWeight: 700, cursor: 'pointer', boxShadow: `0 4px 12px ${B.gold}35` }}><TbPlus size={14} /> Add</button>
//                             </div>
//                             {colors.length === 0 ? (<div style={{ textAlign: 'center', padding: '28px 20px', border: `2px dashed ${B.borderSoft}`, borderRadius: 12, marginBottom: 14 }}><TbPalette size={28} style={{ color: B.mutedSoft, display: 'block', margin: '0 auto 8px' }} /><p style={{ color: B.muted, fontSize: 13, fontWeight: 500 }}>No colors yet</p><p style={{ color: B.mutedSoft, fontSize: 12 }}>Add above or pick from presets</p></div>) : (
//                                 <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
//                                     {colors.map((c, i) => (<div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', background: B.surface2, border: `1px solid ${B.borderSoft}`, borderRadius: 11, transition: 'border-color .15s' }} onMouseEnter={e => e.currentTarget.style.borderColor = B.border} onMouseLeave={e => e.currentTarget.style.borderColor = B.borderSoft}>
//                                         <input type="color" value={c.hex} onChange={e => edColor(i, 'hex', e.target.value)} style={{ width: 34, height: 34, borderRadius: 8, border: `1px solid ${B.border}`, cursor: 'pointer', background: 'transparent', flexShrink: 0 }} />
//                                         <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
//                                             <input type="text" value={c.name} onChange={e => edColor(i, 'name', e.target.value)} placeholder="Color name" style={{ fontSize: 13, fontWeight: 600, color: B.cream, background: 'transparent', border: 'none', borderBottom: `1px solid ${B.borderSoft}`, outline: 'none', padding: '3px 0', transition: 'border-color .15s' }} onFocus={e => e.target.style.borderColor = B.gold} onBlur={e => e.target.style.borderColor = B.borderSoft} />
//                                             <input type="text" value={c.hex} onChange={e => edColor(i, 'hex', e.target.value)} placeholder="#000000" style={{ fontSize: 12, color: B.muted, background: 'transparent', border: 'none', borderBottom: `1px solid ${B.borderSoft}`, outline: 'none', padding: '3px 0', fontFamily: 'monospace', transition: 'border-color .15s' }} onFocus={e => e.target.style.borderColor = B.gold} onBlur={e => e.target.style.borderColor = B.borderSoft} />
//                                         </div>
//                                         <div style={{ width: 22, height: 22, borderRadius: '50%', background: c.hex, border: '1px solid rgba(255,255,255,.15)', boxShadow: `0 0 8px ${c.hex}60`, flexShrink: 0 }} />
//                                         <button type="button" onClick={() => rmColor(c.name)} style={{ width: 28, height: 28, borderRadius: 8, background: B.red.bg, border: `1px solid ${B.red.border}`, color: B.red.text, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}><TbX size={12} /></button>
//                                     </div>))}
//                                 </div>
//                             )}
//                             <div style={{ borderTop: `1px solid ${B.borderSoft}`, paddingTop: 16 }}>
//                                 <p style={{ color: B.muted, fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.7px', marginBottom: 10 }}>Quick Presets</p>
//                                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
//                                     {PRESETS.map((p, i) => { const added = colors.some(c => c.name.toLowerCase() === p.name.toLowerCase()); return (<button key={i} type="button" onClick={() => addPreset(p)} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 12px', borderRadius: 99, fontSize: 12, fontWeight: 600, cursor: 'pointer', transition: 'all .15s', background: added ? B.emerald.bg : B.surface2, color: added ? B.emerald.text : B.muted, border: `1px solid ${added ? B.emerald.border : B.borderSoft}` }}><div style={{ width: 10, height: 10, borderRadius: '50%', background: p.hex, flexShrink: 0, border: '1px solid rgba(255,255,255,.1)', boxShadow: `0 0 4px ${p.hex}60` }} />{p.name}{added ? ' ✓' : ''}</button>); })}
//                                 </div>
//                             </div>
//                         </Card>

//                         {/* ── SIZES ── */}
//                         <Card icon={<TbRuler size={17} />} title="Sizes & Inventory" subtitle="Manage sizes, stock & pricing per size" badge={<span style={{ padding: '2px 8px', borderRadius: 99, background: B.red.bg, color: B.red.text, border: `1px solid ${B.red.border}`, fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.5px' }}>Required</span>}>
//                             <Field label="Base Price (₹)" required>
//                                 <input style={inp(price && (isNaN(+price) || +price <= 0))} type="number" placeholder="e.g. 4999" min="0" step="0.01" value={price} onChange={e => setPrice(e.target.value)} onFocus={focG} onBlur={blrB(price && (isNaN(+price) || +price <= 0))} />
//                                 <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginTop: 8, padding: 10, background: B.blue.bg, border: `1px solid ${B.blue.border}`, borderRadius: 10 }}><TbInfoCircle size={13} style={{ color: B.blue.text, flexShrink: 0, marginTop: 1 }} /><span style={{ color: B.blue.text, fontSize: 12 }}>Base price × multiplier = size's selling price. XL at 1.2× = ₹{price ? (parseFloat(price) * 1.2).toFixed(2) : '—'}.</span></div>
//                             </Field>
//                             <Field label="Size System"><ToggleGroup options={[['standard', '👕 Standard (XS–3XL)'], ['inch', '📏 Inch-Based']]} value={sizeType} onChange={setSizeType} /></Field>
//                             {sizeType === 'standard' && (<>
//                                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, marginBottom: 14 }}>
//                                     {Object.keys(stdSizes).map(k => {
//                                         const on = enabledSz.includes(k); const d = stdSizes[k]; return (<div key={k} style={{ borderRadius: 12, padding: 14, cursor: 'pointer', transition: 'all .18s', border: `2px solid ${on ? B.gold : B.borderSoft}`, background: on ? B.goldDim : B.surface2, boxShadow: on ? `0 0 14px ${B.gold}20` : undefined }} onClick={() => !on && toggleSz(k)}>
//                                             <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: on ? 10 : 0 }}><input type="checkbox" checked={on} onChange={() => toggleSz(k)} onClick={e => e.stopPropagation()} style={{ width: 14, height: 14, accentColor: B.gold, cursor: 'pointer' }} /><span style={{ fontSize: 13, fontWeight: 800, padding: '2px 7px', borderRadius: 6, background: on ? B.gold : B.surface3, color: on ? B.bg : B.muted }}>{k}</span>{on && d.stock > 0 && <span style={{ fontSize: 9, background: B.emerald.bg, color: B.emerald.text, fontWeight: 700, padding: '2px 5px', borderRadius: 99 }}>{d.stock}×</span>}</div>
//                                             {on && (<div onClick={e => e.stopPropagation()} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
//                                                 <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5, fontWeight: 600, color: B.muted, cursor: 'pointer' }}><input type="checkbox" checked={d.useCustomPrice} onChange={() => toggleCP(k)} style={{ accentColor: B.gold }} /> Custom Price</label>
//                                                 {d.useCustomPrice ? (<div><p style={{ fontSize: 10, color: B.muted, fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>Price (₹)</p><input type="number" step="0.01" min="0" value={d.customPrice} onChange={e => setSzF(k, 'customPrice', e.target.value)} style={{ ...inp(), padding: '6px 10px', fontSize: 12 }} onFocus={focG} onBlur={blrB()} /><span style={{ color: B.gold, fontSize: 10.5, fontWeight: 700, marginTop: 3, display: 'block' }}>₹ {d.customPrice || '—'}</span></div>)
//                                                     : (<div><p style={{ fontSize: 10, color: B.muted, fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>Multiplier ×{d.multiplier}</p><input type="number" step="0.05" min="0.5" max="3" value={d.multiplier} onChange={e => setSzF(k, 'multiplier', e.target.value)} style={{ ...inp(), padding: '6px 10px', fontSize: 12 }} onFocus={focG} onBlur={blrB()} /><span style={{ color: B.emerald.text, fontSize: 10.5, fontWeight: 700, marginTop: 3, display: 'block' }}>₹ {price ? calcPrice(d).toFixed(2) : '—'}</span></div>)}
//                                                 <div><p style={{ fontSize: 10, color: B.muted, fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>Stock</p><input type="number" min="0" value={d.stock} onChange={e => setSzF(k, 'stock', e.target.value)} style={{ ...inp(), padding: '6px 10px', fontSize: 12 }} onFocus={focG} onBlur={blrB()} /></div>
//                                             </div>)}
//                                         </div>);
//                                     })}
//                                 </div>
//                                 {enabledSz.length > 0 && (<div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, padding: 12, background: B.surface2, borderRadius: 11, border: `1px solid ${B.borderSoft}`, marginBottom: 12 }}>{enabledSz.map(k => <span key={k} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '5px 12px', background: `linear-gradient(135deg,${B.gold},${B.goldLight})`, color: B.bg, borderRadius: 99, fontSize: 11.5, fontWeight: 700 }}>{k} · ₹{price ? calcPrice(stdSizes[k]).toFixed(0) : '—'} · {stdSizes[k].stock}pcs</span>)}</div>)}
//                                 <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
//                                     {[['S/M/L/XL', ['S', 'M', 'L', 'XL']], ['All Sizes', Object.keys(stdSizes)]].map(([l, sz]) => (<button key={l} type="button" onClick={() => setEnabledSz(sz)} style={{ padding: '7px 14px', borderRadius: 9, border: `1px solid ${B.border}`, background: 'transparent', color: B.muted, fontSize: 12, fontWeight: 600, cursor: 'pointer', transition: 'all .15s' }} onMouseEnter={e => e.currentTarget.style.color = B.cream} onMouseLeave={e => e.currentTarget.style.color = B.muted}>Select {l}</button>))}
//                                     <button type="button" onClick={() => setEnabledSz([])} style={{ padding: '7px 14px', borderRadius: 9, border: `1px solid ${B.border}`, background: 'transparent', color: B.muted, fontSize: 12, fontWeight: 600, cursor: 'pointer', transition: 'all .15s' }} onMouseEnter={e => e.currentTarget.style.color = B.red.text} onMouseLeave={e => e.currentTarget.style.color = B.muted}>Clear All</button>
//                                 </div>
//                             </>)}
//                             {sizeType === 'inch' && (<>
//                                 <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: 12, padding: 16, background: B.surface2, borderRadius: 12, border: `1px solid ${B.borderSoft}`, marginBottom: 14 }}>
//                                     <Field label="Size Label"><input style={{ ...inp(), width: 100 }} type="text" placeholder="14x14" value={niSize} onChange={e => setNiSize(e.target.value)} onFocus={focG} onBlur={blrB()} /></Field>
//                                     <Field label="Stock"><input style={{ ...inp(), width: 80 }} type="number" min="0" value={niStock} onChange={e => setNiStock(parseInt(e.target.value) || 0)} onFocus={focG} onBlur={blrB()} /></Field>
//                                     <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: B.muted, cursor: 'pointer', paddingBottom: 10 }}><input type="checkbox" checked={niCustom} onChange={e => setNiCustom(e.target.checked)} style={{ accentColor: B.gold }} /> Custom Price</label>
//                                     {niCustom ? <Field label="Price (₹)"><input style={{ ...inp(), width: 90 }} type="number" step="0.01" min="0" value={niPrice} onChange={e => setNiPrice(e.target.value)} onFocus={focG} onBlur={blrB()} /></Field> : <Field label="Multiplier"><input style={{ ...inp(), width: 85 }} type="number" step="0.1" min="0.5" max="2" value={niMult} onChange={e => setNiMult(parseFloat(e.target.value) || 1)} onFocus={focG} onBlur={blrB()} /></Field>}
//                                     <button type="button" onClick={addInch} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 18px', borderRadius: 10, background: `linear-gradient(135deg,${B.gold},${B.goldLight})`, color: B.bg, border: 'none', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}><TbPlus size={14} /> Add</button>
//                                 </div>
//                                 {inchSizes.length === 0 ? (<div style={{ textAlign: 'center', padding: '28px 20px', border: `2px dashed ${B.borderSoft}`, borderRadius: 12 }}><TbRuler size={28} style={{ color: B.mutedSoft, display: 'block', margin: '0 auto 8px' }} /><p style={{ color: B.muted, fontSize: 13 }}>No inch sizes yet</p></div>) : (
//                                     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
//                                         {inchSizes.map((s, i) => (<div key={i} style={{ background: B.surface2, border: `1px solid ${B.borderSoft}`, borderRadius: 12, padding: 14 }}>
//                                             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}><span style={{ color: B.cream, fontSize: 14, fontWeight: 800 }}>{s.size}"</span><button type="button" onClick={() => rmInch(s.size)} style={{ width: 24, height: 24, borderRadius: 7, background: B.red.bg, border: `1px solid ${B.red.border}`, color: B.red.text, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><TbX size={11} /></button></div>
//                                             <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5, fontWeight: 600, color: B.muted, marginBottom: 8, cursor: 'pointer' }}><input type="checkbox" checked={s.useCustomPrice} onChange={() => edInch(i, 'useCustomPrice')} style={{ accentColor: B.gold }} /> Custom Price</label>
//                                             {s.useCustomPrice ? <div style={{ marginBottom: 8 }}><p style={{ fontSize: 10, color: B.muted, fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>Price (₹)</p><input type="number" step="0.01" min="0" value={s.customPrice} onChange={e => edInch(i, 'customPrice', e.target.value)} style={{ ...inp(), padding: '6px 10px', fontSize: 12 }} onFocus={focG} onBlur={blrB()} /></div> : <div style={{ marginBottom: 8 }}><p style={{ fontSize: 10, color: B.muted, fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>Multiplier</p><input type="number" step="0.1" min="0.5" max="2" value={s.multiplier} onChange={e => edInch(i, 'multiplier', e.target.value)} style={{ ...inp(), padding: '6px 10px', fontSize: 12 }} onFocus={focG} onBlur={blrB()} /></div>}
//                                             <div><p style={{ fontSize: 10, color: B.muted, fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>Stock</p><input type="number" min="0" value={s.stock} onChange={e => edInch(i, 'stock', e.target.value)} style={{ ...inp(), padding: '6px 10px', fontSize: 12 }} onFocus={focG} onBlur={blrB()} /></div>
//                                             <span style={{ color: B.emerald.text, fontSize: 10.5, fontWeight: 700, marginTop: 5, display: 'block' }}>₹ {price && +price > 0 ? ((+price) * s.multiplier).toFixed(2) : '—'}</span>
//                                         </div>))}
//                                     </div>
//                                 )}
//                             </>)}
//                         </Card>
//                     </div>

//                     {/* ══════════ SIDEBAR ══════════ */}
//                     <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
//                         {/* Save */}
//                         <div style={{ ...card({ marginBottom: 0 }), padding: 20 }}>
//                             <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}><div style={{ width: 36, height: 36, borderRadius: 10, background: B.goldDim, border: `1px solid ${B.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><TbDeviceFloppy size={17} style={{ color: B.gold }} /></div><div><p style={{ color: B.cream, fontSize: 13.5, fontWeight: 700, margin: 0 }}>Save Changes</p><p style={{ color: B.muted, fontSize: 11, marginTop: 2 }}>Update product on store</p></div></div>
//                             <div style={{ marginBottom: 16 }}><div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5, fontWeight: 600, color: B.muted, marginBottom: 6 }}><span>Completion</span><span style={{ color: B.gold }}>{progress}%</span></div><div style={{ height: 5, background: B.surface3, borderRadius: 4, overflow: 'hidden', border: `1px solid ${B.borderSoft}` }}><div style={{ height: '100%', background: `linear-gradient(90deg,${B.gold},${B.goldLight})`, borderRadius: 4, width: `${progress}%`, transition: 'width .5s', boxShadow: `0 0 8px ${B.gold}50` }} /></div></div>
//                             <button type="button" onClick={() => setBest(p => !p)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderRadius: 11, marginBottom: 12, cursor: 'pointer', transition: 'all .18s', border: `1px solid ${bestseller ? B.gold : B.border}`, background: bestseller ? B.goldDim : 'transparent' }}>
//                                 <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><TbStar size={15} style={{ color: bestseller ? B.gold : B.muted }} /><span style={{ color: bestseller ? B.cream : B.muted, fontSize: 13, fontWeight: 600 }}>Mark as Bestseller</span></div>
//                                 <div style={{ width: 36, height: 20, borderRadius: 99, position: 'relative', transition: 'background .18s', background: bestseller ? B.gold : B.surface3, border: `1px solid ${bestseller ? B.gold : B.border}`, flexShrink: 0 }}><div style={{ position: 'absolute', top: 2, width: 14, height: 14, borderRadius: '50%', background: B.cream, boxShadow: '0 1px 4px rgba(0,0,0,.3)', transition: 'transform .18s', transform: bestseller ? 'translateX(18px)' : 'translateX(2px)' }} /></div>
//                             </button>
//                             <button type="button" onClick={onSubmit} disabled={saving} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, padding: '11px', borderRadius: 11, marginBottom: 8, cursor: 'pointer', background: `linear-gradient(135deg,${B.gold},${B.goldLight})`, color: B.bg, border: 'none', fontSize: 13, fontWeight: 700, boxShadow: `0 4px 16px ${B.gold}35`, opacity: saving ? .6 : 1, transition: 'all .15s' }}>
//                                 {saving ? <><div style={{ width: 14, height: 14, border: `2px solid ${B.bg}`, borderTopColor: 'transparent', borderRadius: '50%', animation: 'upSpin .85s linear infinite' }} /> Saving…</> : <><TbDeviceFloppy size={15} /> Save Changes</>}
//                             </button>
//                             <button type="button" onClick={() => navigate(-1)} style={{ width: '100%', padding: '10px', borderRadius: 11, background: 'transparent', color: B.muted, border: `1px solid ${B.border}`, fontSize: 13, fontWeight: 600, cursor: 'pointer', transition: 'all .15s' }} onMouseEnter={e => e.currentTarget.style.color = B.cream} onMouseLeave={e => e.currentTarget.style.color = B.muted}>Cancel</button>
//                         </div>

//                         {/* Pricing */}
//                         <div style={{ ...card({ marginBottom: 0 }), padding: 20 }}>
//                             <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}><div style={{ width: 32, height: 32, borderRadius: 9, background: B.emerald.bg, border: `1px solid ${B.emerald.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><TbTag size={15} style={{ color: B.emerald.text }} /></div><p style={{ color: B.cream, fontSize: 13.5, fontWeight: 700, margin: 0 }}>Discount Pricing</p></div>
//                             <Field label="Sale / Discount Price (₹)" hint="Optional — shown as sale price to customers"><input style={inp()} type="number" placeholder="0.00" value={discPrice} onChange={e => setDiscPrice(e.target.value)} onFocus={focG} onBlur={blrB()} /></Field>
//                             {discount && (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', background: B.emerald.bg, border: `1px solid ${B.emerald.border}`, borderRadius: 10 }}><span style={{ color: B.emerald.text, fontSize: 12.5, fontWeight: 600 }}>💸 Discount active</span><span style={{ color: B.emerald.text, fontSize: 11, fontWeight: 800, background: 'rgba(52,211,153,0.2)', padding: '2px 8px', borderRadius: 99 }}>{discount}% off</span></div>)}
//                         </div>

//                         {/* Summary */}
//                         <div style={{ ...card({ marginBottom: 0 }), padding: 20 }}>
//                             <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}><div style={{ width: 32, height: 32, borderRadius: 9, background: B.blue.bg, border: `1px solid ${B.blue.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><TbChartBar size={15} style={{ color: B.blue.text }} /></div><div><p style={{ color: B.cream, fontSize: 13.5, fontWeight: 700, margin: 0 }}>Summary</p><p style={{ color: B.muted, fontSize: 11, marginTop: 2 }}>Live overview</p></div></div>
//                             {[['Name', name || <span style={{ color: B.mutedSoft, fontStyle: 'italic', fontSize: 12 }}>Not set</span>], ['Category', `${category} › ${subCategory || '—'}`], ['Base Price', price ? <span style={{ fontWeight: 800, color: B.gold }}>₹{price}</span> : <span style={{ color: B.mutedSoft }}>—</span>], ['Sale Price', discPrice ? <span style={{ color: B.emerald.text, fontWeight: 800 }}>₹{discPrice}</span> : <span style={{ color: B.mutedSoft }}>—</span>], ['Colors', colors.length > 0 ? <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', justifyContent: 'flex-end' }}>{colors.map((c, i) => <div key={i} title={c.name} style={{ width: 14, height: 14, borderRadius: '50%', background: c.hex, border: '1px solid rgba(255,255,255,.1)', boxShadow: `0 0 4px ${c.hex}60` }} />)}</div> : <span style={{ color: B.mutedSoft }}>—</span>], ['Sizes', sizeType === 'standard' ? (enabledSz.length ? <span style={{ fontWeight: 700, color: B.cream }}>{enabledSz.join(', ')}</span> : <span style={{ color: B.red.text, fontWeight: 700, fontSize: 11 }}>⚠ Required</span>) : (inchSizes.length ? <span style={{ fontWeight: 700, color: B.cream }}>{inchSizes.map(s => s.size).join(', ')}</span> : <span style={{ color: B.red.text, fontWeight: 700, fontSize: 11 }}>⚠ Required</span>)], ['Images', <span style={{ padding: '2px 8px', borderRadius: 99, fontSize: 10.5, fontWeight: 700, background: totalImages > 0 ? B.emerald.bg : B.amber.bg, color: totalImages > 0 ? B.emerald.text : B.amber.text, border: `1px solid ${totalImages > 0 ? B.emerald.border : B.amber.border}` }}>{totalImages}/10 · {newFilesCount} new</span>], ['Bestseller', bestseller ? <span style={{ background: B.amber.bg, color: B.amber.text, border: `1px solid ${B.amber.border}`, fontSize: 10.5, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>⭐ Yes</span> : <span style={{ color: B.mutedSoft, fontSize: 12 }}>No</span>]].map(([k, v], i) => (<div key={i} style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '8px 0', borderBottom: i < 7 ? `1px solid ${B.borderSoft}` : 'none', gap: 10 }}><span style={{ color: B.muted, fontSize: 12, fontWeight: 500, flexShrink: 0 }}>{k}</span><span style={{ color: B.creamSoft, fontSize: 12.5, fontWeight: 500, textAlign: 'right', maxWidth: 155, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{v}</span></div>))}
//                         </div>

//                         {/* Quick Actions */}
//                         <div style={{ ...card({ marginBottom: 0 }), padding: 20 }}>
//                             <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}><div style={{ width: 32, height: 32, borderRadius: 9, background: B.violet.bg, border: `1px solid ${B.violet.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><TbBolt size={15} style={{ color: B.violet.text }} /></div><p style={{ color: B.cream, fontSize: 13.5, fontWeight: 700, margin: 0 }}>Quick Actions</p></div>
//                             {[['🎨 Add basic colors', () => { const toAdd = PRESETS.filter(p => !colors.some(c => c.name === p.name)).slice(0, 4); setColors([...colors, ...toAdd]); toast.success(`${toAdd.length} colors added`); }], ['👕 Select S/M/L/XL', () => { setEnabledSz(['S', 'M', 'L', 'XL']); setSizeType('standard'); toast.success('S/M/L/XL selected'); }], ['✅ Select all sizes', () => { setEnabledSz(Object.keys(stdSizes)); setSizeType('standard'); toast.success('All sizes selected'); }], ['🗑 Clear all colors', () => { setColors([]); toast.info('Colors cleared'); }], ['🗑 Clear all sizes', () => { setEnabledSz([]); toast.info('Sizes cleared'); }]].map(([l, fn], i) => (<button key={i} type="button" onClick={fn} style={{ width: '100%', textAlign: 'left', padding: '10px 12px', borderRadius: 10, border: `1px solid ${B.borderSoft}`, background: 'transparent', color: B.muted, fontSize: 12.5, fontWeight: 500, cursor: 'pointer', marginBottom: 6, transition: 'all .15s', display: 'block' }} onMouseEnter={e => { e.currentTarget.style.background = B.goldDim; e.currentTarget.style.color = B.cream; e.currentTarget.style.borderColor = B.border; }} onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = B.muted; e.currentTarget.style.borderColor = B.borderSoft; }}>{l}</button>))}
//                         </div>

//                         {/* Tips */}
//                         <div style={{ background: B.goldDim, border: `1px solid ${B.borderMid}`, borderRadius: 16, padding: 20 }}>
//                             <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}><HiOutlineLightBulb size={17} style={{ color: B.gold, flexShrink: 0 }} /><p style={{ color: B.cream, fontSize: 13, fontWeight: 700, margin: 0 }}>Tips</p></div>
//                             <ul style={{ paddingLeft: 0, margin: 0, listStyle: 'none' }}>
//                                 {['Drag & drop multiple images onto the drop zone', 'Hover any image slot to view, replace or remove', 'Green badge = new (unsaved), Brown = saved on server', 'First slot is always the main product thumbnail', 'Changes only save when you click "Save Changes"', 'Base price is used for multiplier calculations'].map((tip, i) => (<li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 7, fontSize: 12, color: B.creamSoft, marginBottom: 7 }}><span style={{ color: B.gold, flexShrink: 0, marginTop: 1 }}>·</span>{tip}</li>))}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </form>
//             {lightbox && <Lightbox imgs={lightbox.imgs} start={lightbox.start} onClose={() => setLightbox(null)} />}
//         </div>
//     );
// };

// export default UpdateProduct;




import React, { useEffect, useState, useRef, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { backendUrl } from "../../App";
import {
    TbPackage, TbPhoto, TbPalette, TbRuler, TbChartBar,
    TbX, TbPlus, TbCheck,
    TbDeviceFloppy, TbEye,
    TbStar, TbInfoCircle, TbBolt, TbTag, TbEdit,
    TbArrowLeft, TbCloudUpload
} from "react-icons/tb";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

/* ════════════════════════════════════════════════════════════════
   D DOLLY LAMB — EDIT PRODUCT  |  Light Luxury Theme
   ── Color tokens mirrored from Sidebar.jsx ──────────────────────
   bg-base:       #FAFAF8   warm ivory white
   bg-surface:    #F4F2EE   soft warm off-white
   bg-hover:      #EDE9E2   warm linen hover
   bg-active:     #E8F4EE   soft sage active
   navy:          #1C2B3A   primary text
   navy-mid:      #2E4057   secondary text
   navy-soft:     #4A6070   muted / icons
   navy-ghost:    #8FA0AD   placeholder / labels
   green:         #1A7A4A   primary accent
   green-light:   #2A9960   hover on green
   green-bg:      #E8F4EE   active bg
   green-border:  #A8D5BC   active border
   champagne:     #B8985A   gold accent
   champagne-bg:  #FBF5E8   subtle gold bg
   champagne-bdr: #DBC98A   gold border
   border:        #E0DBD3   subtle warm border
   border-strong: #C8C2B8   divider
════════════════════════════════════════════════════════════════ */

const B = {
    /* ── Backgrounds ── */
    bg: '#FAFAF8',
    surface: '#F4F2EE',
    surface2: '#EDE9E2',
    surfaceCard: '#FFFFFF',

    /* ── Text ── */
    navy: '#1C2B3A',
    navyMid: '#2E4057',
    navySoft: '#4A6070',
    navyGhost: '#8FA0AD',

    /* ── Primary green ── */
    green: '#1A7A4A',
    greenLight: '#2A9960',
    greenBg: '#E8F4EE',
    greenBdr: '#A8D5BC',

    /* ── Champagne / gold ── */
    gold: '#B8985A',
    goldLight: '#CBA96B',
    goldBg: '#FBF5E8',
    goldBdr: '#DBC98A',

    /* ── Borders ── */
    border: '#E0DBD3',
    borderStrong: '#C8C2B8',

    /* ── Status palettes ── */
    emerald: { bg: '#ECFDF5', text: '#065F46', border: '#A7F3D0', dot: '#10B981' },
    amber: { bg: '#FFFBEB', text: '#92400E', border: '#FDE68A', dot: '#F59E0B' },
    red: { bg: '#FEF2F2', text: '#991B1B', border: '#FECACA', dot: '#EF4444' },
    blue: { bg: '#EFF6FF', text: '#1D4ED8', border: '#BFDBFE', dot: '#3B82F6' },
    violet: { bg: '#F5F3FF', text: '#5B21B6', border: '#DDD6FE', dot: '#7C3AED' },
};

/* ── Style helpers ── */
const cardStyle = (ex = {}) => ({
    background: B.surfaceCard, border: `1px solid ${B.border}`,
    borderRadius: 16, marginBottom: 16, overflow: 'hidden',
    boxShadow: '0 1px 4px rgba(28,43,58,0.06)', ...ex,
});
const inpStyle = (err = false) => ({
    width: '100%', padding: '10px 14px', borderRadius: 10,
    background: err ? '#FEF2F2' : B.surfaceCard,
    color: B.navy, border: `1px solid ${err ? B.red.border : B.border}`,
    fontSize: 13.5, outline: 'none', transition: 'border-color .15s',
    boxSizing: 'border-box', fontFamily: 'inherit',
});
const focG = e => e.target.style.borderColor = B.greenBdr;
const blrB = (err = false) => e => e.target.style.borderColor = err ? B.red.border : B.border;
const selSt = {
    ...inpStyle(), appearance: 'none', cursor: 'pointer', paddingRight: 36,
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%238FA0AD' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center',
};

const PRESETS = [
    { name: "Black", hex: "#000000" }, { name: "White", hex: "#FFFFFF" },
    { name: "Red", hex: "#EF4444" }, { name: "Navy", hex: "#1E3A5F" },
    { name: "Royal Blue", hex: "#3B82F6" }, { name: "Green", hex: "#166534" },
    { name: "Yellow", hex: "#EAB308" }, { name: "Pink", hex: "#EC4899" },
    { name: "Lavender", hex: "#8B5CF6" }, { name: "Orange", hex: "#F97316" },
    { name: "Brown", hex: "#92400E" }, { name: "Gray", hex: "#9CA3AF" },
];
const INIT_STD = {
    XS: { multiplier: 0.9, stock: 0, customPrice: "", useCustomPrice: false },
    S: { multiplier: 0.9, stock: 0, customPrice: "", useCustomPrice: false },
    M: { multiplier: 1.0, stock: 0, customPrice: "", useCustomPrice: false },
    L: { multiplier: 1.1, stock: 0, customPrice: "", useCustomPrice: false },
    XL: { multiplier: 1.2, stock: 0, customPrice: "", useCustomPrice: false },
    XXL: { multiplier: 1.35, stock: 0, customPrice: "", useCustomPrice: false },
    "3XL": { multiplier: 1.5, stock: 0, customPrice: "", useCustomPrice: false },
};
const SUB_CATEGORIES = {
    Men: ["Jackets", "Bomber Biker Jacket", "Moto Biker Jacket", "Racing Coat", "Leather Coats", "Men Winter Wear"],
    Women: ["Jackets", "Bomber Biker Jacket", "Moto Biker Jacket", "Racing Coat", "Women Winter Wear", "Women Night Dress", "Leather Pencil Skirt", "Leather Full Skirt", "Slim Bodycon Skirt"],
    Others: ["Pillow", "Cushion Cover", "Aprons", "Desk Mat", "Chair Cover"],
    "Leather Pillow Cover": ["Cylindrical Pillow Cover", "Square Pillow Cover", "Rectangle Pillow Cover", "Round Pillow Cover", "Ear Hole Pillow Cushion Cover"],
    "Sofa Headrest": ["Recliner Chair Headrest Cover"],
    "Leather Desk Pad": ["Leather Desk Mat"],
    "Men Leather Apron": ["Apron"],
};
const CAT_DEFAULT = {
    Men: "Jackets", Women: "Jackets", Others: "Pillow",
    "Leather Pillow Cover": "Cylindrical Pillow Cover",
    "Sofa Headrest": "Recliner Chair Headrest Cover",
    "Leather Desk Pad": "Leather Desk Mat",
    "Men Leather Apron": "Apron",
};

/* ── Lightbox ── */
const Lightbox = ({ imgs, start, onClose }) => {
    const [cur, setCur] = useState(start);
    useEffect(() => {
        const h = e => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") setCur(p => Math.max(0, p - 1));
            if (e.key === "ArrowRight") setCur(p => Math.min(imgs.length - 1, p + 1));
        };
        window.addEventListener("keydown", h);
        return () => window.removeEventListener("keydown", h);
    }, [imgs.length, onClose]);

    return (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(28,43,58,0.80)', backdropFilter: 'blur(6px)' }} onClick={onClose}>
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, maxWidth: '90vw' }} onClick={e => e.stopPropagation()}>
                <button onClick={onClose} style={{ position: 'absolute', top: -12, right: -12, width: 30, height: 30, borderRadius: '50%', background: B.surfaceCard, border: `1px solid ${B.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10 }}>
                    <TbX size={14} style={{ color: B.navySoft }} />
                </button>
                <img src={imgs[cur]} alt="" style={{ maxWidth: '80vw', maxHeight: '70vh', borderRadius: 14, objectFit: 'contain', boxShadow: '0 20px 60px rgba(28,43,58,0.25)', border: `1px solid ${B.border}` }} />
                {cur > 0 && (
                    <button onClick={() => setCur(p => p - 1)} style={{ position: 'absolute', left: -56, top: '50%', transform: 'translateY(-50%)', width: 40, height: 40, borderRadius: '50%', background: B.surfaceCard, border: `1px solid ${B.border}`, color: B.navySoft, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                        <FiChevronLeft size={22} />
                    </button>
                )}
                {cur < imgs.length - 1 && (
                    <button onClick={() => setCur(p => p + 1)} style={{ position: 'absolute', right: -56, top: '50%', transform: 'translateY(-50%)', width: 40, height: 40, borderRadius: '50%', background: B.surfaceCard, border: `1px solid ${B.border}`, color: B.navySoft, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                        <FiChevronRight size={22} />
                    </button>
                )}
                {imgs.length > 1 && (
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', maxWidth: '80vw' }}>
                        {imgs.map((img, i) => (
                            <img key={i} src={img} alt="" onClick={() => setCur(i)}
                                style={{ width: 46, height: 46, borderRadius: 9, objectFit: 'cover', cursor: 'pointer', border: `2px solid ${i === cur ? B.green : B.border}`, opacity: i === cur ? 1 : .55, transition: 'all .15s' }} />
                        ))}
                    </div>
                )}
                <p style={{ color: B.navyGhost, fontSize: 11 }}>{cur + 1} / {imgs.length} · Esc to close</p>
            </div>
        </div>
    );
};

/* ── Skeleton ── */
const Skeleton = () => (
    <div style={{ minHeight: '100vh', background: B.bg }}>
        <style>{`@keyframes skP{0%,100%{opacity:.6}50%{opacity:.25}}`}</style>
        <div style={{ position: 'sticky', top: 0, zIndex: 40, background: B.surfaceCard, borderBottom: `1px solid ${B.border}`, height: 60, display: 'flex', alignItems: 'center', padding: '0 24px', gap: 12 }}>
            {[36, 1, 36].map((w, i) => <div key={i} style={{ width: w, height: i === 1 ? 20 : 36, borderRadius: i === 1 ? 2 : 10, background: B.surface2, animation: 'skP 1.4s ease-in-out infinite' }} />)}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                <div style={{ width: 120, height: 13, borderRadius: 6, background: B.surface2, animation: 'skP 1.4s ease-in-out infinite' }} />
                <div style={{ width: 80, height: 9, borderRadius: 4, background: B.surface2, animation: 'skP 1.4s ease-in-out infinite' }} />
            </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 16, padding: '18px 24px', maxWidth: 1400 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[280, 220, 200, 260].map((h, i) => <div key={i} style={{ height: h, borderRadius: 14, background: B.surfaceCard, border: `1px solid ${B.border}`, animation: 'skP 1.4s ease-in-out infinite' }} />)}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[180, 160, 200].map((h, i) => <div key={i} style={{ height: h, borderRadius: 14, background: B.surfaceCard, border: `1px solid ${B.border}`, animation: 'skP 1.4s ease-in-out infinite' }} />)}
            </div>
        </div>
    </div>
);

/* ── Card wrapper ── */
const Card = ({ icon, title, subtitle, badge, children, action }) => (
    <div style={cardStyle()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', borderBottom: `1px solid ${B.border}`, background: B.surface }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: B.greenBg, border: `1px solid ${B.greenBdr}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: B.green, flexShrink: 0 }}>{icon}</div>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ color: B.navy, fontSize: 13.5, fontWeight: 700, fontFamily: 'Georgia, serif' }}>{title}</span>
                        {badge}
                    </div>
                    {subtitle && <p style={{ color: B.navyGhost, fontSize: 11, marginTop: 2 }}>{subtitle}</p>}
                </div>
            </div>
            {action}
        </div>
        <div style={{ padding: '20px 20px' }}>{children}</div>
    </div>
);

/* ── Field ── */
const Field = ({ label, required, hint, children }) => (
    <div style={{ marginBottom: 16 }}>
        {label && (
            <label style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.7px', color: B.navyGhost, marginBottom: 7 }}>
                {label}{required && <span style={{ color: B.red.text, fontSize: 13 }}>*</span>}
            </label>
        )}
        {children}
        {hint && <p style={{ color: B.navyGhost, fontSize: 11.5, marginTop: 5 }}>{hint}</p>}
    </div>
);

/* ── Toggle group ── */
const ToggleGroup = ({ options, value, onChange }) => (
    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {options.map(([v, l]) => (
            <button key={v} type="button" onClick={() => onChange(v)} style={{
                padding: '7px 16px', borderRadius: 9, fontSize: 12.5, fontWeight: 700,
                border: `1px solid ${value === v ? B.green : B.border}`,
                background: value === v ? B.green : B.surfaceCard,
                color: value === v ? '#FFFFFF' : B.navySoft,
                cursor: 'pointer', transition: 'all .15s',
            }}>{l}</button>
        ))}
    </div>
);

/* ════════════════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════════════════ */
const UpdateProduct = ({ token }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [slots, setSlots] = useState(Array(10).fill(null).map(() => ({ existing: null, newFile: null })));
    const [dragging, setDragging] = useState(false);
    const [lightbox, setLightbox] = useState(null);
    const dzRef = useRef(null);

    const [name, setName] = useState('');
    const [description, setDesc] = useState('');
    const [detDesc, setDetDesc] = useState('');
    const [price, setPrice] = useState('');
    const [discPrice, setDiscPrice] = useState('');
    const [category, setCat] = useState('Men');
    const [subCategory, setSubCat] = useState(CAT_DEFAULT['Men']);
    const [bestseller, setBest] = useState(false);
    const [colors, setColors] = useState([]);
    const [newCName, setNewCName] = useState('');
    const [newCHex, setNewCHex] = useState('#000000');
    const [colorMode, setColorMode] = useState('both');
    const [sizeType, setSizeType] = useState('standard');
    const [stdSizes, setStdSizes] = useState(INIT_STD);
    const [enabledSz, setEnabledSz] = useState([]);
    const [inchSizes, setInchSizes] = useState([]);
    const [niSize, setNiSize] = useState('');
    const [niMult, setNiMult] = useState(1.0);
    const [niStock, setNiStock] = useState(0);
    const [niPrice, setNiPrice] = useState('');
    const [niCustom, setNiCustom] = useState(false);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [progress, setProgress] = useState(0);

    const allSlotImgs = slots.map(s => s.newFile ? URL.createObjectURL(s.newFile) : s.existing).filter(Boolean);
    const existingCount = slots.filter(s => s.existing && !s.newFile).length;
    const newFilesCount = slots.filter(s => s.newFile).length;
    const totalImages = slots.filter(s => s.newFile || s.existing).length;
    const discount = discPrice && price && +discPrice < +price ? Math.round((1 - discPrice / price) * 100) : null;
    const hasSizes = sizeType === 'standard' ? enabledSz.length > 0 : inchSizes.length > 0;
    const calcPrice = d => d.useCustomPrice && d.customPrice ? parseFloat(d.customPrice) : parseFloat(price || 0) * d.multiplier;

    /* ── Fetch product ── */
    useEffect(() => {
        const fetch = async () => {
            setLoading(true);
            try {
                const res = await axios.post(backendUrl + '/api/product/single', { productId: id });
                if (res.data.success) {
                    const p = res.data.product;
                    setName(p.name || ''); setDesc(p.description || ''); setDetDesc(p.detailedDescription || '');
                    setPrice(String(p.price || '')); setDiscPrice(String(p.discountPrice || '')); setBest(p.bestseller || false);
                    const cat = p.category || 'Men'; setCat(cat);
                    const validSubs = SUB_CATEGORIES[cat] || []; const savedSub = (p.subCategory || '').trim();
                    setSubCat(validSubs.some(s => s.toLowerCase() === savedSub.toLowerCase()) ? savedSub : (CAT_DEFAULT[cat] || validSubs[0] || ''));
                    const existingImgs = Array.isArray(p.image) ? p.image.filter(Boolean) : [p.image].filter(Boolean);
                    setSlots(Array(10).fill(null).map((_, i) => ({ existing: existingImgs[i] || null, newFile: null })));
                    if (p.color?.length) setColors(p.color.map(c => typeof c === 'string' ? { name: c, hex: '#808080' } : { name: c.name || c, hex: c.hex || '#808080' }));
                    if (p.sizes?.length) {
                        const first = p.sizes[0];
                        const isStd = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'].includes(typeof first === 'string' ? first : first?.size);
                        if (isStd) {
                            setSizeType('standard'); const en = []; const obj = { ...INIT_STD };
                            p.sizes.forEach(s => { const k = typeof s === 'string' ? s : s.size; en.push(k); obj[k] = { multiplier: s?.priceMultiplier || 1, stock: s?.stock ?? 0, customPrice: s?.customPrice > 0 ? String(s.customPrice) : '', useCustomPrice: s?.useCustomPrice === true }; });
                            setEnabledSz(en); setStdSizes(obj);
                        } else {
                            setSizeType('inch'); setInchSizes(p.sizes.map(s => ({ size: typeof s === 'string' ? s : s.size, multiplier: s?.priceMultiplier || 1, stock: s?.stock || 0, customPrice: s?.customPrice || '', useCustomPrice: s?.useCustomPrice || false })));
                        }
                    }
                } else toast.error('Failed to load product');
            } catch { toast.error('Failed to load product'); }
            finally { setLoading(false); }
        };
        fetch();
    }, [id]);

    /* ── Progress ── */
    useEffect(() => {
        let s = 0;
        if (name.trim()) s += 15; if (description.trim()) s += 10; if (price) s += 15;
        if (totalImages > 0) s += 15; if (colors.length) s += 15; if (hasSizes) s += 20; if (detDesc) s += 10;
        setProgress(Math.min(100, s));
    }, [name, description, price, totalImages, colors, hasSizes, detDesc]);

    /* ── Slot handlers ── */
    const setSlotFile = (i, f) => setSlots(p => { const n = [...p]; n[i] = { ...n[i], newFile: f }; return n; });
    const clearSlotNew = (i) => setSlots(p => { const n = [...p]; n[i] = { ...n[i], newFile: null }; return n; });
    const clearSlotAll = (i) => setSlots(p => { const n = [...p]; n[i] = { existing: null, newFile: null }; return n; });
    const addFilesToSlots = (files) => {
        let added = 0;
        setSlots(prev => { const next = [...prev]; for (const file of files) { const ei = next.findIndex(s => !s.existing && !s.newFile); if (ei === -1) break; next[ei] = { existing: null, newFile: file }; added++; } return next; });
        requestAnimationFrame(() => { if (added > 0) toast.success(`${added} image${added > 1 ? 's' : ''} added!`); else toast.info('All slots full'); });
    };
    const handleDragEnter = useCallback(e => { e.preventDefault(); e.stopPropagation(); setDragging(true); }, []);
    const handleDragOver = useCallback(e => { e.preventDefault(); e.stopPropagation(); e.dataTransfer.dropEffect = 'copy'; setDragging(true); }, []);
    const handleDragLeave = useCallback(e => { e.preventDefault(); e.stopPropagation(); if (dzRef.current && !dzRef.current.contains(e.relatedTarget)) setDragging(false); }, []);
    const handleDrop = useCallback(e => { e.preventDefault(); e.stopPropagation(); setDragging(false); const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/')); if (!files.length) { toast.error('Only image files allowed'); return; } addFilesToSlots(files); }, []);

    /* ── Color handlers ── */
    const addColor = () => { if (colorMode !== 'hexOnly' && !newCName.trim()) return toast.error('Enter color name'); const c = { name: newCName.trim() || `Color-${colors.length + 1}`, hex: newCHex || '#808080' }; if (colors.some(x => x.name.toLowerCase() === c.name.toLowerCase())) return toast.error('Color exists'); setColors([...colors, c]); setNewCName(''); setNewCHex('#000000'); toast.success(`${c.name} added`); };
    const rmColor = n => setColors(colors.filter(c => c.name !== n));
    const edColor = (i, f, v) => { const u = [...colors]; u[i][f] = v; setColors(u); };
    const addPreset = p => colors.some(c => c.name.toLowerCase() === p.name.toLowerCase()) ? toast.info(`${p.name} already added`) : (setColors([...colors, p]), toast.success(`${p.name} added!`));

    /* ── Size handlers ── */
    const toggleSz = k => setEnabledSz(p => p.includes(k) ? p.filter(x => x !== k) : [...p, k]);
    const setSzF = (k, f, v) => setStdSizes(p => ({ ...p, [k]: { ...p[k], [f]: f === 'stock' ? parseInt(v) || 0 : f === 'multiplier' ? parseFloat(v) || 1 : v } }));
    const toggleCP = k => setStdSizes(p => ({ ...p, [k]: { ...p[k], useCustomPrice: !p[k].useCustomPrice } }));
    const addInch = () => { if (!niSize.trim()) return toast.error('Enter size'); if (inchSizes.some(s => s.size === niSize)) return toast.error('Size exists'); setInchSizes([...inchSizes, { size: niSize, multiplier: niMult, stock: niStock, customPrice: niPrice, useCustomPrice: niCustom }]); setNiSize(''); setNiMult(1); setNiStock(0); setNiPrice(''); setNiCustom(false); toast.success('Size added!'); };
    const rmInch = s => setInchSizes(inchSizes.filter(i => i.size !== s));
    const edInch = (i, f, v) => { const u = [...inchSizes]; if (f === 'useCustomPrice') u[i].useCustomPrice = !u[i].useCustomPrice; else if (f === 'stock') u[i].stock = parseInt(v) || 0; else if (f === 'multiplier') u[i].multiplier = parseFloat(v) || 1; else u[i][f] = v; setInchSizes(u); };
    const fmtSizes = () => sizeType === 'standard'
        ? enabledSz.map(k => ({ size: k, priceMultiplier: stdSizes[k].multiplier, stock: stdSizes[k].stock, customPrice: stdSizes[k].customPrice, useCustomPrice: stdSizes[k].useCustomPrice }))
        : inchSizes.map(s => ({ size: s.size, priceMultiplier: s.multiplier, stock: s.stock, customPrice: s.customPrice, useCustomPrice: s.useCustomPrice }));

    /* ── Submit ── */
    const onSubmit = async (e) => {
        e?.preventDefault();
        if (!hasSizes) return toast.error('Select at least one size');
        if (colors.length === 0) return toast.error('Add at least one color');
        if (!price || isNaN(+price) || +price <= 0) return toast.error('Valid base price required');
        if (totalImages === 0) return toast.error('At least one image required');
        if (!subCategory || !subCategory.trim()) return toast.error('Sub category is required');
        setSaving(true);
        try {
            const fd = new FormData();
            fd.append('productId', id); fd.append('name', name.trim()); fd.append('description', description.trim());
            fd.append('detailedDescription', detDesc); fd.append('price', price); fd.append('discountPrice', discPrice || '');
            fd.append('category', category); fd.append('subCategory', subCategory); fd.append('bestseller', bestseller);
            fd.append('sizes', JSON.stringify(fmtSizes())); fd.append('color', JSON.stringify(colors));
            const existingImageUrls = slots.filter(s => s.existing && !s.newFile).map(s => s.existing);
            fd.append('existingImages', JSON.stringify(existingImageUrls));
            slots.forEach(s => { if (s.newFile) fd.append('images', s.newFile); });
            const res = await axios.post(backendUrl + '/api/product/update', fd, { headers: { token } });
            if (res.data.success) { toast.success('✅ Product updated!'); navigate(-1); }
            else toast.error(res.data.message);
        } catch { toast.error('Update failed!'); }
        finally { setSaving(false); }
    };

    if (loading) return <Skeleton />;

    return (
        <div style={{ minHeight: '100vh', background: B.bg, fontFamily: "'Inter', system-ui, -apple-system, sans-serif", WebkitFontSmoothing: 'antialiased' }}>
            <style>{`
                @keyframes upSpin { to { transform: rotate(360deg) } }
                /* Quill — light theme */
                .up-quill .ql-toolbar { background:${B.surface}!important; border:1px solid ${B.border}!important; border-radius:10px 10px 0 0!important; }
                .up-quill .ql-toolbar .ql-stroke { stroke:${B.navySoft}!important; }
                .up-quill .ql-toolbar .ql-fill   { fill:${B.navySoft}!important; }
                .up-quill .ql-toolbar button:hover .ql-stroke, .up-quill .ql-toolbar button.ql-active .ql-stroke { stroke:${B.green}!important; }
                .up-quill .ql-toolbar button:hover .ql-fill,   .up-quill .ql-toolbar button.ql-active .ql-fill   { fill:${B.green}!important; }
                .up-quill .ql-toolbar .ql-picker-label  { color:${B.navySoft}!important; }
                .up-quill .ql-toolbar .ql-picker-options{ background:${B.surfaceCard}!important; border:1px solid ${B.border}!important; border-radius:8px!important; }
                .up-quill .ql-container { background:${B.surfaceCard}!important; border:1px solid ${B.border}!important; border-top:none!important; border-radius:0 0 10px 10px!important; min-height:160px; }
                .up-quill .ql-editor   { color:${B.navy}!important; font-family:inherit!important; font-size:13.5px!important; }
                .up-quill .ql-editor.ql-blank::before { color:${B.navyGhost}!important; font-style:normal!important; }
                input[type=color]  { background:transparent; padding:2px; }
                input[type=number]::-webkit-inner-spin-button { opacity:.3; }
            `}</style>

            {/* ── HEADER ── */}
            <div style={{ position: 'sticky', top: 0, zIndex: 40, background: `${B.surfaceCard}f2`, backdropFilter: 'blur(14px)', borderBottom: `1px solid ${B.border}`, boxShadow: '0 2px 8px rgba(28,43,58,0.08)', height: 60, display: 'flex', alignItems: 'center', padding: '0 24px', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    {/* Back button */}
                    <button onClick={() => navigate(-1)}
                        style={{ width: 36, height: 36, borderRadius: 9, border: `1px solid ${B.border}`, background: B.surfaceCard, display: 'flex', alignItems: 'center', justifyContent: 'center', color: B.navyGhost, cursor: 'pointer', transition: 'all .15s' }}
                        onMouseEnter={e => { e.currentTarget.style.background = B.greenBg; e.currentTarget.style.color = B.green; e.currentTarget.style.borderColor = B.greenBdr; }}
                        onMouseLeave={e => { e.currentTarget.style.background = B.surfaceCard; e.currentTarget.style.color = B.navyGhost; e.currentTarget.style.borderColor = B.border; }}>
                        <TbArrowLeft size={17} />
                    </button>
                    <div style={{ width: 1, height: 20, background: B.border }} />
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: B.greenBg, border: `1px solid ${B.greenBdr}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <TbEdit size={17} style={{ color: B.green }} />
                    </div>
                    <div>
                        <h1 style={{ color: B.navy, fontSize: 16, fontWeight: 800, letterSpacing: -.3, lineHeight: 1, margin: 0, fontFamily: 'Georgia, serif' }}>Edit Product</h1>
                        <p style={{ color: B.navyGhost, fontSize: 11, marginTop: 2, lineHeight: 1 }}>{progress}% complete · ID: {id?.slice(-6).toUpperCase()}</p>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <button type="button" onClick={() => navigate(-1)}
                        style={{ padding: '7px 16px', borderRadius: 9, background: B.surfaceCard, color: B.navySoft, border: `1px solid ${B.border}`, fontSize: 12, fontWeight: 600, cursor: 'pointer', transition: 'all .15s' }}
                        onMouseEnter={e => { e.currentTarget.style.color = B.navy; e.currentTarget.style.borderColor = B.borderStrong; }}
                        onMouseLeave={e => { e.currentTarget.style.color = B.navySoft; e.currentTarget.style.borderColor = B.border; }}>
                        Cancel
                    </button>
                    <button type="button" onClick={onSubmit} disabled={saving}
                        style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '7px 20px', borderRadius: 9, background: B.green, color: '#FFFFFF', border: 'none', fontSize: 12, fontWeight: 700, cursor: 'pointer', opacity: saving ? .6 : 1, transition: 'background .15s' }}
                        onMouseEnter={e => { if (!saving) e.currentTarget.style.background = B.greenLight; }}
                        onMouseLeave={e => e.currentTarget.style.background = B.green}>
                        {saving
                            ? <><div style={{ width: 13, height: 13, border: `2px solid rgba(255,255,255,0.4)`, borderTopColor: '#FFFFFF', borderRadius: '50%', animation: 'upSpin .85s linear infinite' }} /> Saving…</>
                            : <><TbDeviceFloppy size={14} /> Save Changes</>}
                    </button>
                </div>
            </div>

            {/* Progress bar */}
            <div style={{ height: 3, background: B.surface2 }}>
                <div style={{ height: '100%', background: B.green, width: `${progress}%`, transition: 'width .5s' }} />
            </div>

            <form onSubmit={onSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 16, padding: '18px 24px 48px', maxWidth: 1400, alignItems: 'start' }}>

                    {/* ══════════════ MAIN COLUMN ══════════════ */}
                    <div>

                        {/* ── BASIC INFO ── */}
                        <Card icon={<TbPackage size={17} />} title="Basic Information" subtitle="Name, description & categorisation">
                            <Field label="Product Name" required>
                                <div style={{ position: 'relative' }}>
                                    <textarea
                                        style={{ ...inpStyle(name.length > 220), resize: 'none', wordBreak: 'break-word', overflowWrap: 'break-word', overflow: 'hidden', minHeight: 48, lineHeight: '1.5' }}
                                        maxLength={250} rows={2}
                                        placeholder="e.g. Classic Lambskin Leather Jacket"
                                        value={name} onChange={e => setName(e.target.value)}
                                        onFocus={focG} onBlur={blrB(name.length > 220)} required
                                    />
                                    <span style={{ position: 'absolute', right: 12, bottom: 11, fontSize: 10.5, color: name.length > 220 ? B.amber.text : B.navyGhost, pointerEvents: 'none' }}>{name.length}/250</span>
                                </div>
                            </Field>

                            <Field label="Short Description" required>
                                <div style={{ position: 'relative' }}>
                                    <textarea
                                        style={{ ...inpStyle(description.length > 280), resize: 'vertical', minHeight: 88 }}
                                        maxLength={300} rows={3}
                                        placeholder="Brief description for listings…"
                                        value={description} onChange={e => setDesc(e.target.value)}
                                        onFocus={focG} onBlur={blrB(description.length > 280)} required
                                    />
                                    <span style={{ position: 'absolute', right: 12, bottom: 11, fontSize: 10.5, color: description.length > 240 ? B.amber.text : B.navyGhost, pointerEvents: 'none' }}>{description.length}/300</span>
                                </div>
                            </Field>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
                                <Field label="Category">
                                    <select style={selSt} value={category}
                                        onChange={e => { setCat(e.target.value); setSubCat(CAT_DEFAULT[e.target.value] || SUB_CATEGORIES[e.target.value]?.[0] || ''); }}
                                        onFocus={focG} onBlur={blrB()}>
                                        {Object.keys(SUB_CATEGORIES).map(c => <option key={c} value={c}>{c}</option>)}
                                    </select>
                                </Field>
                                <Field label="Sub Category">
                                    <select style={selSt} value={subCategory} onChange={e => setSubCat(e.target.value)} onFocus={focG} onBlur={blrB()}>
                                        {(SUB_CATEGORIES[category] || []).map(s => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                </Field>
                                <Field label="SKU / Code" hint="Auto-generated if blank">
                                    <input style={inpStyle()} type="text" placeholder="Auto-generated" onFocus={focG} onBlur={blrB()} />
                                </Field>
                            </div>

                            <div style={{ borderTop: `1px solid ${B.border}`, paddingTop: 18, marginTop: 4 }}>
                                <Field label="Detailed Description" hint="Shown on product detail page — add specs, care instructions, materials">
                                    <div className="up-quill"><ReactQuill theme="snow" value={detDesc} onChange={setDetDesc} /></div>
                                </Field>
                            </div>
                        </Card>

                        {/* ── IMAGES ── */}
                        <Card icon={<TbPhoto size={17} />} title="Product Images" subtitle={`${totalImages}/10 · ${existingCount} existing · ${newFilesCount} new`}
                            action={allSlotImgs.length > 0 && (
                                <button type="button" onClick={() => setLightbox({ imgs: allSlotImgs, start: 0 })}
                                    style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 12px', borderRadius: 9, border: `1px solid ${B.border}`, background: B.surfaceCard, color: B.navySoft, fontSize: 12, fontWeight: 600, cursor: 'pointer', transition: 'all .15s' }}
                                    onMouseEnter={e => { e.currentTarget.style.background = B.greenBg; e.currentTarget.style.borderColor = B.greenBdr; e.currentTarget.style.color = B.green; }}
                                    onMouseLeave={e => { e.currentTarget.style.background = B.surfaceCard; e.currentTarget.style.borderColor = B.border; e.currentTarget.style.color = B.navySoft; }}>
                                    <TbEye size={13} /> View All
                                </button>
                            )}>

                            {/* Drop zone */}
                            <div ref={dzRef} style={{
                                position: 'relative', borderRadius: 12,
                                border: `2px dashed ${dragging ? B.green : B.borderStrong}`,
                                textAlign: 'center', padding: '28px 20px', marginBottom: 14,
                                background: dragging ? B.greenBg : B.surface,
                                cursor: 'pointer', transition: 'all .2s',
                                transform: dragging ? 'scale(1.01)' : 'none',
                            }} onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
                                <div style={{ width: 44, height: 44, borderRadius: 12, margin: '0 auto 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: dragging ? B.greenBg : B.surfaceCard, border: `1px solid ${dragging ? B.greenBdr : B.border}` }}>
                                    <TbCloudUpload size={20} style={{ color: dragging ? B.green : B.navyGhost }} />
                                </div>
                                <p style={{ color: B.navy, fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{dragging ? 'Drop images here!' : 'Drag & drop to add images'}</p>
                                <p style={{ color: B.navySoft, fontSize: 12 }}>or click individual slots below · PNG, JPG, WEBP</p>
                                {!dragging && <input type="file" accept="image/*" multiple style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer', fontSize: 0 }} onChange={e => { addFilesToSlots(Array.from(e.target.files)); e.target.value = ''; }} />}
                            </div>

                            {/* Image grid */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 10 }}>
                                {slots.map((slot, i) => {
                                    const displayUrl = slot.newFile ? URL.createObjectURL(slot.newFile) : slot.existing;
                                    const hasImg = !!displayUrl; const isNew = !!slot.newFile; const isExisting = !!slot.existing && !slot.newFile;
                                    return (
                                        <div key={i} style={{
                                            position: 'relative', aspectRatio: '1', borderRadius: 11, overflow: 'hidden',
                                            border: `2px solid ${hasImg ? (i === 0 ? B.green : isNew ? B.emerald.dot : B.border) : B.border}`,
                                            background: hasImg ? 'transparent' : B.surface,
                                            cursor: hasImg ? 'default' : 'pointer',
                                            boxShadow: i === 0 && hasImg ? `0 0 0 2px ${B.greenBg}` : undefined,
                                        }}>
                                            {hasImg ? (
                                                <>
                                                    <img src={displayUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                    {i === 0 && <span style={{ position: 'absolute', top: 5, left: 5, background: B.green, color: '#FFFFFF', fontSize: 8, fontWeight: 800, padding: '2px 6px', borderRadius: 5, zIndex: 10 }}>MAIN</span>}
                                                    {isNew && <span style={{ position: 'absolute', bottom: 5, left: 5, background: B.emerald.dot, color: '#FFFFFF', fontSize: 8, fontWeight: 800, padding: '2px 6px', borderRadius: 5, zIndex: 10 }}>NEW</span>}
                                                    {isExisting && <span style={{ position: 'absolute', bottom: 5, left: 5, background: 'rgba(28,43,58,0.7)', color: '#FFFFFF', fontSize: 8, fontWeight: 700, padding: '2px 6px', borderRadius: 5, zIndex: 10 }}>SAVED</span>}
                                                    <span style={{ position: 'absolute', top: 5, right: 5, background: 'rgba(28,43,58,0.65)', color: '#fff', fontSize: 8, fontWeight: 700, padding: '2px 6px', borderRadius: 5, zIndex: 10 }}>{i + 1}</span>
                                                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(28,43,58,0.60)', opacity: 0, transition: 'opacity .18s', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6, zIndex: 20 }}
                                                        onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                                                        onMouseLeave={e => e.currentTarget.style.opacity = '0'}>
                                                        <button type="button" style={{ background: B.green, color: '#fff', fontSize: 10, fontWeight: 700, padding: '4px 10px', borderRadius: 7, border: 'none', cursor: 'pointer' }} onMouseDown={e => { e.preventDefault(); e.stopPropagation(); setLightbox({ imgs: allSlotImgs, start: Math.max(0, allSlotImgs.indexOf(displayUrl)) }); }}>🔍 View</button>
                                                        {isNew && <button type="button" style={{ background: B.amber.bg, color: B.amber.text, fontSize: 10, fontWeight: 700, padding: '4px 10px', borderRadius: 7, border: `1px solid ${B.amber.border}`, cursor: 'pointer' }} onMouseDown={e => { e.preventDefault(); e.stopPropagation(); clearSlotNew(i); }}>↩ Revert</button>}
                                                        <button type="button" style={{ background: B.red.bg, color: B.red.text, fontSize: 10, fontWeight: 700, padding: '4px 10px', borderRadius: 7, border: `1px solid ${B.red.border}`, cursor: 'pointer' }} onMouseDown={e => { e.preventDefault(); e.stopPropagation(); clearSlotAll(i); }}>✕ Remove</button>
                                                    </div>
                                                    <input type="file" accept="image/*" style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', fontSize: 0, zIndex: 30 }} onChange={e => { if (e.target.files[0]) setSlotFile(i, e.target.files[0]); e.target.value = ''; }} />
                                                </>
                                            ) : (
                                                <>
                                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                                        <TbPlus size={15} style={{ color: B.navyGhost, marginBottom: 2 }} />
                                                        <span style={{ fontSize: 9, color: B.navyGhost, fontWeight: 500 }}>{i + 1}</span>
                                                    </div>
                                                    <input type="file" accept="image/*" style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', fontSize: 0 }} onChange={e => { if (e.target.files[0]) setSlotFile(i, e.target.files[0]); e.target.value = ''; }} />
                                                </>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Legend */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 12 }}>
                                {[[B.green, 'Main photo'], [B.emerald.dot, 'New (unsaved)'], ['rgba(28,43,58,0.7)', 'Saved on server']].map(([c, l]) => (
                                    <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                                        <div style={{ width: 10, height: 10, borderRadius: 3, background: c }} />
                                        <span style={{ color: B.navyGhost, fontSize: 11 }}>{l}</span>
                                    </div>
                                ))}
                            </div>
                            <p style={{ color: B.navyGhost, fontSize: 11.5, marginTop: 6 }}>Hover any slot to view, replace or remove.</p>
                        </Card>

                        {/* ── COLORS ── */}
                        <Card icon={<TbPalette size={17} />} title="Color Variants" subtitle={`${colors.length} color${colors.length !== 1 ? 's' : ''} added`}
                            badge={colors.length > 0 && <span style={{ padding: '2px 8px', borderRadius: 99, background: B.greenBg, color: B.green, border: `1px solid ${B.greenBdr}`, fontSize: 10, fontWeight: 800 }}>{colors.length}</span>}>

                            <Field label="Input Mode">
                                <ToggleGroup options={[['both', 'Name + Color'], ['nameOnly', 'Name Only'], ['hexOnly', 'Color Only']]} value={colorMode} onChange={setColorMode} />
                            </Field>

                            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: 12, padding: 16, background: B.surface, borderRadius: 11, border: `1px solid ${B.border}`, marginBottom: 14 }}>
                                {(colorMode === 'both' || colorMode === 'nameOnly') && (
                                    <Field label="Name"><input style={{ ...inpStyle(), width: 160 }} type="text" placeholder="e.g. Navy Blue" value={newCName} onChange={e => setNewCName(e.target.value)} onFocus={focG} onBlur={blrB()} onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addColor())} /></Field>
                                )}
                                {(colorMode === 'both' || colorMode === 'hexOnly') && (
                                    <Field label="Color">
                                        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                                            <input type="color" value={newCHex} onChange={e => setNewCHex(e.target.value)} style={{ width: 40, height: 40, borderRadius: 9, border: `1px solid ${B.border}`, cursor: 'pointer', background: 'transparent' }} />
                                            <input style={{ ...inpStyle(), width: 100 }} type="text" value={newCHex} onChange={e => setNewCHex(e.target.value)} onFocus={focG} onBlur={blrB()} />
                                        </div>
                                    </Field>
                                )}
                                <button type="button" onClick={addColor}
                                    style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 18px', borderRadius: 10, background: B.green, color: '#FFFFFF', border: 'none', fontSize: 13, fontWeight: 700, cursor: 'pointer', transition: 'background .15s' }}
                                    onMouseEnter={e => e.currentTarget.style.background = B.greenLight}
                                    onMouseLeave={e => e.currentTarget.style.background = B.green}>
                                    <TbPlus size={14} /> Add
                                </button>
                            </div>

                            {colors.length === 0 ? (
                                <div style={{ textAlign: 'center', padding: '28px 20px', border: `2px dashed ${B.border}`, borderRadius: 11, marginBottom: 14 }}>
                                    <TbPalette size={28} style={{ color: B.navyGhost, display: 'block', margin: '0 auto 8px' }} />
                                    <p style={{ color: B.navySoft, fontSize: 13, fontWeight: 500 }}>No colors yet</p>
                                    <p style={{ color: B.navyGhost, fontSize: 12 }}>Add above or pick from presets</p>
                                </div>
                            ) : (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
                                    {colors.map((c, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', background: B.surfaceCard, border: `1px solid ${B.border}`, borderRadius: 11, transition: 'border-color .15s' }}
                                            onMouseEnter={e => e.currentTarget.style.borderColor = B.greenBdr}
                                            onMouseLeave={e => e.currentTarget.style.borderColor = B.border}>
                                            <input type="color" value={c.hex} onChange={e => edColor(i, 'hex', e.target.value)} style={{ width: 34, height: 34, borderRadius: 8, border: `1px solid ${B.border}`, cursor: 'pointer', background: 'transparent', flexShrink: 0 }} />
                                            <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                                                <input type="text" value={c.name} onChange={e => edColor(i, 'name', e.target.value)} placeholder="Color name" style={{ fontSize: 13, fontWeight: 600, color: B.navy, background: 'transparent', border: 'none', borderBottom: `1px solid ${B.border}`, outline: 'none', padding: '3px 0', transition: 'border-color .15s' }} onFocus={e => e.target.style.borderColor = B.greenBdr} onBlur={e => e.target.style.borderColor = B.border} />
                                                <input type="text" value={c.hex} onChange={e => edColor(i, 'hex', e.target.value)} placeholder="#000000" style={{ fontSize: 12, color: B.navySoft, background: 'transparent', border: 'none', borderBottom: `1px solid ${B.border}`, outline: 'none', padding: '3px 0', fontFamily: 'monospace', transition: 'border-color .15s' }} onFocus={e => e.target.style.borderColor = B.greenBdr} onBlur={e => e.target.style.borderColor = B.border} />
                                            </div>
                                            <div style={{ width: 22, height: 22, borderRadius: '50%', background: c.hex, border: `1px solid ${B.border}`, flexShrink: 0 }} />
                                            <button type="button" onClick={() => rmColor(c.name)} style={{ width: 28, height: 28, borderRadius: 8, background: B.red.bg, border: `1px solid ${B.red.border}`, color: B.red.text, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
                                                <TbX size={12} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div style={{ borderTop: `1px solid ${B.border}`, paddingTop: 14 }}>
                                <p style={{ color: B.navyGhost, fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.7px', marginBottom: 10 }}>Quick Presets</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                                    {PRESETS.map((p, i) => {
                                        const added = colors.some(c => c.name.toLowerCase() === p.name.toLowerCase());
                                        return (
                                            <button key={i} type="button" onClick={() => addPreset(p)} style={{
                                                display: 'flex', alignItems: 'center', gap: 6, padding: '5px 12px', borderRadius: 99, fontSize: 12, fontWeight: 600, cursor: 'pointer', transition: 'all .15s',
                                                background: added ? B.emerald.bg : B.surfaceCard,
                                                color: added ? B.emerald.text : B.navySoft,
                                                border: `1px solid ${added ? B.emerald.border : B.border}`,
                                            }}>
                                                <div style={{ width: 10, height: 10, borderRadius: '50%', background: p.hex, flexShrink: 0, border: `1px solid ${B.border}` }} />
                                                {p.name}{added ? ' ✓' : ''}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </Card>

                        {/* ── SIZES ── */}
                        <Card icon={<TbRuler size={17} />} title="Sizes & Inventory" subtitle="Manage sizes, stock & pricing per size"
                            badge={<span style={{ padding: '2px 8px', borderRadius: 99, background: B.red.bg, color: B.red.text, border: `1px solid ${B.red.border}`, fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.5px' }}>Required</span>}>

                            <Field label="Base Price (₹)" required>
                                <input style={inpStyle(price && (isNaN(+price) || +price <= 0))} type="number" placeholder="e.g. 4999" min="0" step="0.01" value={price} onChange={e => setPrice(e.target.value)} onFocus={focG} onBlur={blrB(price && (isNaN(+price) || +price <= 0))} />
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginTop: 8, padding: 10, background: B.blue.bg, border: `1px solid ${B.blue.border}`, borderRadius: 9 }}>
                                    <TbInfoCircle size={13} style={{ color: B.blue.text, flexShrink: 0, marginTop: 1 }} />
                                    <span style={{ color: B.blue.text, fontSize: 12 }}>Base price × multiplier = size's selling price. XL at 1.2× = ₹{price ? (parseFloat(price) * 1.2).toFixed(2) : '—'}.</span>
                                </div>
                            </Field>

                            <Field label="Size System">
                                <ToggleGroup options={[['standard', '👕 Standard (XS–3XL)'], ['inch', '📏 Inch-Based']]} value={sizeType} onChange={setSizeType} />
                            </Field>

                            {sizeType === 'standard' && (
                                <>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, marginBottom: 14 }}>
                                        {Object.keys(stdSizes).map(k => {
                                            const on = enabledSz.includes(k); const d = stdSizes[k];
                                            return (
                                                <div key={k} style={{ borderRadius: 11, padding: 14, cursor: 'pointer', transition: 'all .18s', border: `2px solid ${on ? B.green : B.border}`, background: on ? B.greenBg : B.surfaceCard }} onClick={() => !on && toggleSz(k)}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: on ? 10 : 0 }}>
                                                        <input type="checkbox" checked={on} onChange={() => toggleSz(k)} onClick={e => e.stopPropagation()} style={{ width: 14, height: 14, accentColor: B.green, cursor: 'pointer' }} />
                                                        <span style={{ fontSize: 13, fontWeight: 800, padding: '2px 7px', borderRadius: 6, background: on ? B.green : B.surface2, color: on ? '#FFFFFF' : B.navySoft }}>{k}</span>
                                                        {on && d.stock > 0 && <span style={{ fontSize: 9, background: B.emerald.bg, color: B.emerald.text, fontWeight: 700, padding: '2px 5px', borderRadius: 99 }}>{d.stock}×</span>}
                                                    </div>
                                                    {on && (
                                                        <div onClick={e => e.stopPropagation()} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                                            <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5, fontWeight: 600, color: B.navySoft, cursor: 'pointer' }}>
                                                                <input type="checkbox" checked={d.useCustomPrice} onChange={() => toggleCP(k)} style={{ accentColor: B.green }} /> Custom Price
                                                            </label>
                                                            {d.useCustomPrice ? (
                                                                <div>
                                                                    <p style={{ fontSize: 10, color: B.navyGhost, fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>Price (₹)</p>
                                                                    <input type="number" step="0.01" min="0" value={d.customPrice} onChange={e => setSzF(k, 'customPrice', e.target.value)} style={{ ...inpStyle(), padding: '6px 10px', fontSize: 12 }} onFocus={focG} onBlur={blrB()} />
                                                                    <span style={{ color: B.green, fontSize: 10.5, fontWeight: 700, marginTop: 3, display: 'block' }}>₹ {d.customPrice || '—'}</span>
                                                                </div>
                                                            ) : (
                                                                <div>
                                                                    <p style={{ fontSize: 10, color: B.navyGhost, fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>Multiplier ×{d.multiplier}</p>
                                                                    <input type="number" step="0.05" min="0.5" max="3" value={d.multiplier} onChange={e => setSzF(k, 'multiplier', e.target.value)} style={{ ...inpStyle(), padding: '6px 10px', fontSize: 12 }} onFocus={focG} onBlur={blrB()} />
                                                                    <span style={{ color: B.emerald.text, fontSize: 10.5, fontWeight: 700, marginTop: 3, display: 'block' }}>₹ {price ? calcPrice(d).toFixed(2) : '—'}</span>
                                                                </div>
                                                            )}
                                                            <div>
                                                                <p style={{ fontSize: 10, color: B.navyGhost, fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>Stock</p>
                                                                <input type="number" min="0" value={d.stock} onChange={e => setSzF(k, 'stock', e.target.value)} style={{ ...inpStyle(), padding: '6px 10px', fontSize: 12 }} onFocus={focG} onBlur={blrB()} />
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {enabledSz.length > 0 && (
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, padding: 12, background: B.greenBg, borderRadius: 10, border: `1px solid ${B.greenBdr}`, marginBottom: 12 }}>
                                            {enabledSz.map(k => (
                                                <span key={k} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '5px 12px', background: B.green, color: '#FFFFFF', borderRadius: 99, fontSize: 11.5, fontWeight: 700 }}>
                                                    {k} · ₹{price ? calcPrice(stdSizes[k]).toFixed(0) : '—'} · {stdSizes[k].stock}pcs
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                                        {[['S/M/L/XL', ['S', 'M', 'L', 'XL']], ['All Sizes', Object.keys(stdSizes)]].map(([l, sz]) => (
                                            <button key={l} type="button" onClick={() => setEnabledSz(sz)}
                                                style={{ padding: '7px 14px', borderRadius: 9, border: `1px solid ${B.border}`, background: B.surfaceCard, color: B.navySoft, fontSize: 12, fontWeight: 600, cursor: 'pointer', transition: 'all .15s' }}
                                                onMouseEnter={e => { e.currentTarget.style.color = B.green; e.currentTarget.style.borderColor = B.greenBdr; e.currentTarget.style.background = B.greenBg; }}
                                                onMouseLeave={e => { e.currentTarget.style.color = B.navySoft; e.currentTarget.style.borderColor = B.border; e.currentTarget.style.background = B.surfaceCard; }}>
                                                Select {l}
                                            </button>
                                        ))}
                                        <button type="button" onClick={() => setEnabledSz([])}
                                            style={{ padding: '7px 14px', borderRadius: 9, border: `1px solid ${B.border}`, background: B.surfaceCard, color: B.navySoft, fontSize: 12, fontWeight: 600, cursor: 'pointer', transition: 'all .15s' }}
                                            onMouseEnter={e => { e.currentTarget.style.color = B.red.text; e.currentTarget.style.borderColor = B.red.border; e.currentTarget.style.background = B.red.bg; }}
                                            onMouseLeave={e => { e.currentTarget.style.color = B.navySoft; e.currentTarget.style.borderColor = B.border; e.currentTarget.style.background = B.surfaceCard; }}>
                                            Clear All
                                        </button>
                                    </div>
                                </>
                            )}

                            {sizeType === 'inch' && (
                                <>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: 12, padding: 16, background: B.surface, borderRadius: 11, border: `1px solid ${B.border}`, marginBottom: 14 }}>
                                        <Field label="Size Label"><input style={{ ...inpStyle(), width: 100 }} type="text" placeholder="14x14" value={niSize} onChange={e => setNiSize(e.target.value)} onFocus={focG} onBlur={blrB()} /></Field>
                                        <Field label="Stock"><input style={{ ...inpStyle(), width: 80 }} type="number" min="0" value={niStock} onChange={e => setNiStock(parseInt(e.target.value) || 0)} onFocus={focG} onBlur={blrB()} /></Field>
                                        <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: B.navySoft, cursor: 'pointer', paddingBottom: 10 }}>
                                            <input type="checkbox" checked={niCustom} onChange={e => setNiCustom(e.target.checked)} style={{ accentColor: B.green }} /> Custom Price
                                        </label>
                                        {niCustom
                                            ? <Field label="Price (₹)"><input style={{ ...inpStyle(), width: 90 }} type="number" step="0.01" min="0" value={niPrice} onChange={e => setNiPrice(e.target.value)} onFocus={focG} onBlur={blrB()} /></Field>
                                            : <Field label="Multiplier"><input style={{ ...inpStyle(), width: 85 }} type="number" step="0.1" min="0.5" max="2" value={niMult} onChange={e => setNiMult(parseFloat(e.target.value) || 1)} onFocus={focG} onBlur={blrB()} /></Field>
                                        }
                                        <button type="button" onClick={addInch}
                                            style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 18px', borderRadius: 10, background: B.green, color: '#FFFFFF', border: 'none', fontSize: 13, fontWeight: 700, cursor: 'pointer', transition: 'background .15s' }}
                                            onMouseEnter={e => e.currentTarget.style.background = B.greenLight}
                                            onMouseLeave={e => e.currentTarget.style.background = B.green}>
                                            <TbPlus size={14} /> Add
                                        </button>
                                    </div>
                                    {inchSizes.length === 0 ? (
                                        <div style={{ textAlign: 'center', padding: '28px 20px', border: `2px dashed ${B.border}`, borderRadius: 11 }}>
                                            <TbRuler size={28} style={{ color: B.navyGhost, display: 'block', margin: '0 auto 8px' }} />
                                            <p style={{ color: B.navySoft, fontSize: 13 }}>No inch sizes yet</p>
                                        </div>
                                    ) : (
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
                                            {inchSizes.map((s, i) => (
                                                <div key={i} style={{ background: B.surfaceCard, border: `1px solid ${B.border}`, borderRadius: 11, padding: 14 }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                                                        <span style={{ color: B.navy, fontSize: 14, fontWeight: 800 }}>{s.size}"</span>
                                                        <button type="button" onClick={() => rmInch(s.size)} style={{ width: 24, height: 24, borderRadius: 7, background: B.red.bg, border: `1px solid ${B.red.border}`, color: B.red.text, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><TbX size={11} /></button>
                                                    </div>
                                                    <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5, fontWeight: 600, color: B.navySoft, marginBottom: 8, cursor: 'pointer' }}>
                                                        <input type="checkbox" checked={s.useCustomPrice} onChange={() => edInch(i, 'useCustomPrice')} style={{ accentColor: B.green }} /> Custom Price
                                                    </label>
                                                    {s.useCustomPrice
                                                        ? <div style={{ marginBottom: 8 }}><p style={{ fontSize: 10, color: B.navyGhost, fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>Price (₹)</p><input type="number" step="0.01" min="0" value={s.customPrice} onChange={e => edInch(i, 'customPrice', e.target.value)} style={{ ...inpStyle(), padding: '6px 10px', fontSize: 12 }} onFocus={focG} onBlur={blrB()} /></div>
                                                        : <div style={{ marginBottom: 8 }}><p style={{ fontSize: 10, color: B.navyGhost, fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>Multiplier</p><input type="number" step="0.1" min="0.5" max="2" value={s.multiplier} onChange={e => edInch(i, 'multiplier', e.target.value)} style={{ ...inpStyle(), padding: '6px 10px', fontSize: 12 }} onFocus={focG} onBlur={blrB()} /></div>
                                                    }
                                                    <div><p style={{ fontSize: 10, color: B.navyGhost, fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>Stock</p><input type="number" min="0" value={s.stock} onChange={e => edInch(i, 'stock', e.target.value)} style={{ ...inpStyle(), padding: '6px 10px', fontSize: 12 }} onFocus={focG} onBlur={blrB()} /></div>
                                                    <span style={{ color: B.emerald.text, fontSize: 10.5, fontWeight: 700, marginTop: 5, display: 'block' }}>₹ {price && +price > 0 ? ((+price) * s.multiplier).toFixed(2) : '—'}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </>
                            )}
                        </Card>
                    </div>

                    {/* ══════════ SIDEBAR ══════════ */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

                        {/* Save card */}
                        <div style={{ ...cardStyle({ marginBottom: 0 }), padding: 18 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                                <div style={{ width: 34, height: 34, borderRadius: 9, background: B.greenBg, border: `1px solid ${B.greenBdr}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <TbDeviceFloppy size={16} style={{ color: B.green }} />
                                </div>
                                <div>
                                    <p style={{ color: B.navy, fontSize: 13, fontWeight: 700, margin: 0 }}>Save Changes</p>
                                    <p style={{ color: B.navyGhost, fontSize: 11, marginTop: 2 }}>Update product on store</p>
                                </div>
                            </div>
                            {/* Progress */}
                            <div style={{ marginBottom: 14 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5, fontWeight: 600, color: B.navyGhost, marginBottom: 6 }}>
                                    <span>Completion</span><span style={{ color: B.green }}>{progress}%</span>
                                </div>
                                <div style={{ height: 5, background: B.surface2, borderRadius: 4, overflow: 'hidden' }}>
                                    <div style={{ height: '100%', background: B.green, borderRadius: 4, width: `${progress}%`, transition: 'width .5s' }} />
                                </div>
                            </div>
                            {/* Bestseller toggle */}
                            <button type="button" onClick={() => setBest(p => !p)} style={{
                                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                padding: '10px 14px', borderRadius: 10, marginBottom: 12, cursor: 'pointer', transition: 'all .18s',
                                border: `1px solid ${bestseller ? B.greenBdr : B.border}`,
                                background: bestseller ? B.greenBg : 'transparent',
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                    <TbStar size={15} style={{ color: bestseller ? B.green : B.navyGhost }} />
                                    <span style={{ color: bestseller ? B.navy : B.navySoft, fontSize: 13, fontWeight: 600 }}>Mark as Bestseller</span>
                                </div>
                                <div style={{ width: 34, height: 18, borderRadius: 99, position: 'relative', transition: 'background .18s', background: bestseller ? B.green : B.surface2, border: `1px solid ${bestseller ? B.green : B.border}`, flexShrink: 0 }}>
                                    <div style={{ position: 'absolute', top: 2, width: 12, height: 12, borderRadius: '50%', background: '#FFFFFF', boxShadow: '0 1px 4px rgba(0,0,0,.15)', transition: 'transform .18s', transform: bestseller ? 'translateX(16px)' : 'translateX(2px)' }} />
                                </div>
                            </button>
                            {/* Save btn */}
                            <button type="button" onClick={onSubmit} disabled={saving}
                                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, padding: '11px', borderRadius: 10, marginBottom: 8, cursor: 'pointer', background: B.green, color: '#FFFFFF', border: 'none', fontSize: 13, fontWeight: 700, opacity: saving ? .6 : 1, transition: 'background .15s' }}
                                onMouseEnter={e => { if (!saving) e.currentTarget.style.background = B.greenLight; }}
                                onMouseLeave={e => e.currentTarget.style.background = B.green}>
                                {saving
                                    ? <><div style={{ width: 13, height: 13, border: `2px solid rgba(255,255,255,0.4)`, borderTopColor: '#FFFFFF', borderRadius: '50%', animation: 'upSpin .85s linear infinite' }} /> Saving…</>
                                    : <><TbDeviceFloppy size={14} /> Save Changes</>}
                            </button>
                            <button type="button" onClick={() => navigate(-1)}
                                style={{ width: '100%', padding: '10px', borderRadius: 10, background: B.surfaceCard, color: B.navySoft, border: `1px solid ${B.border}`, fontSize: 13, fontWeight: 600, cursor: 'pointer', transition: 'all .15s' }}
                                onMouseEnter={e => { e.currentTarget.style.color = B.navy; e.currentTarget.style.borderColor = B.borderStrong; }}
                                onMouseLeave={e => { e.currentTarget.style.color = B.navySoft; e.currentTarget.style.borderColor = B.border; }}>
                                Cancel
                            </button>
                        </div>

                        {/* Pricing */}
                        <div style={{ ...cardStyle({ marginBottom: 0 }), padding: 18 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                                <div style={{ width: 32, height: 32, borderRadius: 9, background: B.emerald.bg, border: `1px solid ${B.emerald.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <TbTag size={14} style={{ color: B.emerald.text }} />
                                </div>
                                <p style={{ color: B.navy, fontSize: 13, fontWeight: 700, margin: 0 }}>Discount Pricing</p>
                            </div>
                            <Field label="Sale / Discount Price (₹)" hint="Optional — shown as sale price">
                                <input style={inpStyle()} type="number" placeholder="0.00" value={discPrice} onChange={e => setDiscPrice(e.target.value)} onFocus={focG} onBlur={blrB()} />
                            </Field>
                            {discount && (
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', background: B.emerald.bg, border: `1px solid ${B.emerald.border}`, borderRadius: 9 }}>
                                    <span style={{ color: B.emerald.text, fontSize: 12.5, fontWeight: 600 }}>💸 Discount active</span>
                                    <span style={{ color: B.emerald.text, fontSize: 11, fontWeight: 800, background: 'rgba(16,185,129,0.15)', padding: '2px 8px', borderRadius: 99 }}>{discount}% off</span>
                                </div>
                            )}
                        </div>

                        {/* Summary */}
                        <div style={{ ...cardStyle({ marginBottom: 0 }), padding: 18 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                                <div style={{ width: 32, height: 32, borderRadius: 9, background: B.blue.bg, border: `1px solid ${B.blue.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <TbChartBar size={14} style={{ color: B.blue.text }} />
                                </div>
                                <div>
                                    <p style={{ color: B.navy, fontSize: 13, fontWeight: 700, margin: 0 }}>Summary</p>
                                    <p style={{ color: B.navyGhost, fontSize: 11, marginTop: 2 }}>Live overview</p>
                                </div>
                            </div>
                            {[
                                ['Name', name || <span style={{ color: B.navyGhost, fontStyle: 'italic', fontSize: 12 }}>Not set</span>],
                                ['Category', `${category} › ${subCategory || '—'}`],
                                ['Base Price', price ? <span style={{ fontWeight: 800, color: B.green }}>₹{price}</span> : <span style={{ color: B.navyGhost }}>—</span>],
                                ['Sale Price', discPrice ? <span style={{ color: B.emerald.text, fontWeight: 800 }}>₹{discPrice}</span> : <span style={{ color: B.navyGhost }}>—</span>],
                                ['Colors', colors.length > 0
                                    ? <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', justifyContent: 'flex-end' }}>{colors.map((c, i) => <div key={i} title={c.name} style={{ width: 14, height: 14, borderRadius: '50%', background: c.hex, border: `1px solid ${B.border}` }} />)}</div>
                                    : <span style={{ color: B.navyGhost }}>—</span>],
                                ['Sizes', sizeType === 'standard'
                                    ? (enabledSz.length ? <span style={{ fontWeight: 700, color: B.navy }}>{enabledSz.join(', ')}</span> : <span style={{ color: B.red.text, fontWeight: 700, fontSize: 11 }}>⚠ Required</span>)
                                    : (inchSizes.length ? <span style={{ fontWeight: 700, color: B.navy }}>{inchSizes.map(s => s.size).join(', ')}</span> : <span style={{ color: B.red.text, fontWeight: 700, fontSize: 11 }}>⚠ Required</span>)],
                                ['Images', <span style={{ padding: '2px 8px', borderRadius: 99, fontSize: 10.5, fontWeight: 700, background: totalImages > 0 ? B.emerald.bg : B.amber.bg, color: totalImages > 0 ? B.emerald.text : B.amber.text, border: `1px solid ${totalImages > 0 ? B.emerald.border : B.amber.border}` }}>{totalImages}/10 · {newFilesCount} new</span>],
                                ['Bestseller', bestseller ? <span style={{ background: B.goldBg, color: B.gold, border: `1px solid ${B.goldBdr}`, fontSize: 10.5, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>⭐ Yes</span> : <span style={{ color: B.navyGhost, fontSize: 12 }}>No</span>],
                            ].map(([k, v], i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '7px 0', borderBottom: i < 7 ? `1px solid ${B.border}` : 'none', gap: 10 }}>
                                    <span style={{ color: B.navyGhost, fontSize: 12, fontWeight: 500, flexShrink: 0 }}>{k}</span>
                                    <span style={{ color: B.navyMid, fontSize: 12.5, fontWeight: 500, textAlign: 'right', maxWidth: 155, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{v}</span>
                                </div>
                            ))}
                        </div>

                        {/* Quick Actions */}
                        <div style={{ ...cardStyle({ marginBottom: 0 }), padding: 18 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                                <div style={{ width: 32, height: 32, borderRadius: 9, background: B.violet.bg, border: `1px solid ${B.violet.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <TbBolt size={14} style={{ color: B.violet.text }} />
                                </div>
                                <p style={{ color: B.navy, fontSize: 13, fontWeight: 700, margin: 0 }}>Quick Actions</p>
                            </div>
                            {[
                                ['🎨 Add basic colors', () => { const toAdd = PRESETS.filter(p => !colors.some(c => c.name === p.name)).slice(0, 4); setColors([...colors, ...toAdd]); toast.success(`${toAdd.length} colors added`); }],
                                ['👕 Select S/M/L/XL', () => { setEnabledSz(['S', 'M', 'L', 'XL']); setSizeType('standard'); toast.success('S/M/L/XL selected'); }],
                                ['✅ Select all sizes', () => { setEnabledSz(Object.keys(stdSizes)); setSizeType('standard'); toast.success('All sizes selected'); }],
                                ['🗑 Clear all colors', () => { setColors([]); toast.info('Colors cleared'); }],
                                ['🗑 Clear all sizes', () => { setEnabledSz([]); toast.info('Sizes cleared'); }],
                            ].map(([l, fn], i) => (
                                <button key={i} type="button" onClick={fn}
                                    style={{ width: '100%', textAlign: 'left', padding: '9px 12px', borderRadius: 9, border: `1px solid ${B.border}`, background: B.surfaceCard, color: B.navySoft, fontSize: 12.5, fontWeight: 500, cursor: 'pointer', marginBottom: 6, transition: 'all .15s', display: 'block' }}
                                    onMouseEnter={e => { e.currentTarget.style.background = B.greenBg; e.currentTarget.style.color = B.green; e.currentTarget.style.borderColor = B.greenBdr; }}
                                    onMouseLeave={e => { e.currentTarget.style.background = B.surfaceCard; e.currentTarget.style.color = B.navySoft; e.currentTarget.style.borderColor = B.border; }}>
                                    {l}
                                </button>
                            ))}
                        </div>

                        {/* Tips */}
                        <div style={{ background: B.goldBg, border: `1px solid ${B.goldBdr}`, borderRadius: 14, padding: 18 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                                <HiOutlineLightBulb size={16} style={{ color: B.gold, flexShrink: 0 }} />
                                <p style={{ color: B.navy, fontSize: 13, fontWeight: 700, margin: 0 }}>Tips</p>
                            </div>
                            <ul style={{ paddingLeft: 0, margin: 0, listStyle: 'none' }}>
                                {[
                                    'Drag & drop multiple images onto the drop zone',
                                    'Hover any image slot to view, replace or remove',
                                    'Green badge = new (unsaved), Dark = saved on server',
                                    'First slot is always the main product thumbnail',
                                    'Changes only save when you click "Save Changes"',
                                    'Base price is used for multiplier calculations',
                                ].map((tip, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 7, fontSize: 12, color: B.navySoft, marginBottom: 7 }}>
                                        <span style={{ color: B.gold, flexShrink: 0, marginTop: 1 }}>·</span>{tip}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </form>

            {lightbox && <Lightbox imgs={lightbox.imgs} start={lightbox.start} onClose={() => setLightbox(null)} />}
        </div>
    );
};

export default UpdateProduct;