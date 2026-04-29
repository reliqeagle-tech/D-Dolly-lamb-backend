// // ─────────────────────────────────────────────────────────────────
// //  D DOLLY LAMB — BULK UPLOAD  |  Luxury dark brown & gold theme
// //  npm install xlsx  (run this first!)
// // ─────────────────────────────────────────────────────────────────
// import React, { useState, useRef, useCallback } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import * as XLSX from 'xlsx';

// import {
//     TbUpload, TbFileSpreadsheet, TbX, TbCheck, TbAlertTriangle,
//     TbDownload, TbTrash, TbRocket, TbInfoCircle, TbPackage,
//     TbChevronDown, TbChevronUp, TbRefresh, TbEye, TbZip,
//     TbTable, TbCloudUpload, TbCircleCheck, TbCircleX
// } from 'react-icons/tb';
// import { HiOutlineSparkles } from 'react-icons/hi';
// import { backendUrl } from '../../App';

// /* ── Brand tokens (same as Add.jsx) ──────────────────────────── */
// const B = {
//     bg: '#0d0804', surface: '#1a0f07', surface2: '#221408', surface3: '#2a1a09',
//     border: 'rgba(201,168,76,0.18)', borderSoft: 'rgba(201,168,76,0.09)',
//     borderMid: 'rgba(201,168,76,0.28)',
//     gold: '#c9a84c', goldLight: '#e8c46a', goldDim: 'rgba(201,168,76,0.12)',
//     goldDim2: 'rgba(201,168,76,0.06)', cream: '#f0d898', creamSoft: '#d4b87a',
//     muted: '#8b7555', mutedSoft: '#5a4530',
//     emerald: { bg: 'rgba(52,211,153,0.10)', text: '#6ee7b7', border: 'rgba(52,211,153,0.22)', dot: '#34d399' },
//     amber: { bg: 'rgba(251,191,36,0.11)', text: '#fcd34d', border: 'rgba(251,191,36,0.28)', dot: '#fbbf24' },
//     red: { bg: 'rgba(248,113,113,0.10)', text: '#fca5a5', border: 'rgba(248,113,113,0.22)', dot: '#f87171' },
//     blue: { bg: 'rgba(96,165,250,0.12)', text: '#93c5fd', border: 'rgba(96,165,250,0.28)', dot: '#60a5fa' },
//     violet: { bg: 'rgba(167,139,250,0.12)', text: '#c4b5fd', border: 'rgba(167,139,250,0.28)', dot: '#a78bfa' },
// };
// const card = (extra = {}) => ({
//     background: B.surface, border: `1px solid ${B.border}`,
//     borderRadius: 18, marginBottom: 18, overflow: 'hidden', ...extra,
// });
// const inp = {
//     padding: '9px 13px', borderRadius: 10, background: B.surface2,
//     color: B.cream, border: `1px solid ${B.border}`, fontSize: 13, outline: 'none',
//     boxSizing: 'border-box', width: '100%',
// };

// /* ── CSV column spec ─────────────────────────────────────────── */
// const REQUIRED_COLS = ['name', 'description', 'price', 'category', 'subCategory', 'sizes'];
// const ALL_COLS = [...REQUIRED_COLS, 'detailedDescription', 'discountPrice', 'bestseller', 'color', 'image'];

// const SAMPLE_ROWS = [
//     {
//         name: 'Classic Lambskin Leather Jacket',
//         description: 'Premium quality lambskin leather jacket with quilted lining',
//         detailedDescription: 'Handcrafted from genuine lambskin leather. Features YKK zippers, two side pockets, and one inner pocket. Dry clean only.',
//         price: 4999,
//         discountPrice: 10,
//         category: 'Men',
//         subCategory: 'Jackets',
//         bestseller: 'false',
//         sizes: 'XS:0.9:10,S:1:10,M:1.1:5,L:1.2:2,',
//         color: 'Black,Brown,Antique Brown:#8A5A44',
//         image: 'https://m.media-amazon.com/images/I/71rgZMIZJhL._AC_SX425_.jpg',

//     },
//     {
//         name: 'Women Biker Leather Jacket',
//         description: 'Edgy moto-inspired jacket for women in genuine cowhide',
//         detailedDescription: 'Asymmetric front zip, epaulettes, and belt detail. Soft microfiber lining.',
//         price: 5499,
//         discountPrice: '5',
//         category: 'Women',
//         subCategory: 'Moto Biker Jacket',
//         bestseller: 'true',
//         sizes: 'XS:1000:10,S:1100:5,M:1200:2,L:1300:0,',
//         color: 'Black,Red,Navy Blue',
//         image: 'https://m.media-amazon.com/images/I/81XkXgk6QXL._AC_SY445_.jpg',
//     },
// ];

// /* ── Validate a single row ───────────────────────────────────── */
// const validateRow = (row, idx) => {
//     const errors = [];
//     if (!row.name?.toString().trim()) errors.push('Name is required');
//     if (!row.price || isNaN(+row.price) || +row.price <= 0) errors.push('Valid price required');
//     if (!row.category?.toString().trim()) errors.push('Category required');
//     if (!row.subCategory?.toString().trim()) errors.push('Sub-category required');
//     if (!row.sizes?.toString().trim()) errors.push('Sizes required (format: S:0.9,M:1,L:1.1)');
//     if (!row.description?.toString().trim()) errors.push('Description required');
//     if (row.discountPrice && +row.discountPrice >= +row.price) errors.push('Discount must be less than price');

//     // Validate sizes format
//     if (row.sizes) {
//         const bad = row.sizes.toString().split(',').some(s => {
//             const parts = s.trim().split(':');
//             if (parts.length < 2 || parts.length > 5) return true;

//             const p1 = parts[1]?.toString().trim().toLowerCase();
//             const p2 = parts[2]?.toString().trim();
//             const p3 = parts[3]?.toString().trim().toLowerCase();
//             const p4 = parts[4]?.toString().trim().toLowerCase();

//             // format: SIZE:custom:customPrice:stock
//             if (p1 === 'custom') {
//                 if (!p2 || isNaN(parseFloat(p2))) return true;
//                 if (parts[3] && isNaN(parseInt(parts[3], 10))) return true;
//                 return false;
//             }

//             // format: SIZE:customPrice:stock:custom
//             if (parts.length >= 4 && p3 === 'custom') {
//                 if (isNaN(parseFloat(parts[1]))) return true;
//                 if (parts[2] && isNaN(parseInt(parts[2], 10))) return true;
//                 return false;
//             }

//             // default/legacy format: SIZE:multiplier[:stock[:customPrice[:useCustomPrice]]]
//             if (isNaN(parseFloat(parts[1]))) return true;
//             if (parts[2] && isNaN(parseInt(parts[2], 10))) return true;
//             if (parts[3] && isNaN(parseFloat(parts[3]))) return true;
//             if (parts[4] && !['true', 'false', ''].includes(p4)) return true;
//             return false;
//         });
//         if (bad) errors.push('Sizes format wrong — multiplier mode: S:0.9:10 OR custom mode: S:2499:10:custom OR S:custom:2499:10');
//     }

//     return { ...row, _idx: idx + 1, _errors: errors, _valid: errors.length === 0, _id: `row_${idx}` };
// };

// /* ── Pretty badge ─────────────────────────────────────────────── */
// const Badge = ({ color, children }) => (
//     <span style={{
//         display: 'inline-flex', alignItems: 'center', gap: 4,
//         padding: '2px 8px', borderRadius: 99, fontSize: 10.5, fontWeight: 700,
//         background: color.bg, color: color.text, border: `1px solid ${color.border}`,
//     }}>{children}</span>
// );

// /* ════════════════════════════════════════════════════════════════
//    MAIN COMPONENT
// ════════════════════════════════════════════════════════════════ */
// const BulkUpload = ({ token }) => {
//     const [mode, setMode] = useState('url');          // 'url' | 'zip'
//     const [csvFile, setCsvFile] = useState(null);
//     const [zipFile, setZipFile] = useState(null);
//     const [rows, setRows] = useState([]);
//     const [uploading, setUploading] = useState(false);
//     const [progress, setProgress] = useState(0);
//     const [result, setResult] = useState(null);       // { success, message, count }
//     const [expandedRows, setExpandedRows] = useState(new Set());
//     const [draggingCsv, setDraggingCsv] = useState(false);
//     const [draggingZip, setDraggingZip] = useState(false);
//     const [previewOpen, setPreviewOpen] = useState(false);

//     const csvRef = useRef(null);
//     const zipRef = useRef(null);

//     const validRows = rows.filter(r => r._valid);
//     const invalidRows = rows.filter(r => !r._valid);
//     const hasData = rows.length > 0;

//     /* ── Download Excel template ─────────────────────────────── */
//     const downloadTemplate = () => {
//         const ws = XLSX.utils.json_to_sheet(SAMPLE_ROWS, { header: ALL_COLS });

//         // Style header row (column widths)
//         ws['!cols'] = ALL_COLS.map(col => ({
//             wch: col === 'detailedDescription' ? 50 : col === 'image' ? 40 : col === 'sizes' ? 30 : 20
//         }));

//         const wb = XLSX.utils.book_new();
//         XLSX.utils.book_append_sheet(wb, ws, 'Products');

//         // Add instructions sheet
//         const instructions = [
//             { Field: 'name', Required: 'YES', Description: 'Product name' },
//             { Field: 'description', Required: 'YES', Description: 'Short product description' },
//             { Field: 'detailedDescription', Required: 'no', Description: 'Long HTML description (optional)' },
//             { Field: 'price', Required: 'YES', Description: 'Base price in ₹ (number)' },
//             { Field: 'discountPrice', Required: 'no', Description: 'Sale price (must be < price)' },
//             { Field: 'category', Required: 'YES', Description: 'Men / Women / Others / Leather Pillow Cover / Sofa Headrest / Leather Desk Pad / Men Leather Apron' },
//             { Field: 'subCategory', Required: 'YES', Description: 'Jackets / Bomber Biker Jacket / Moto Biker Jacket / etc.' },
//             { Field: 'bestseller', Required: 'no', Description: 'true or false' },
//             { Field: 'sizes', Required: 'YES', Description: 'Format: multiplier mode S:0.9:10 OR custom mode S:2499:10:custom / S:custom:2499:10. Legacy format S:0.9:10:2499:true also works.' },
//             { Field: 'color', Required: 'no', Description: 'Comma separated. Named: Black,Brown or custom hex: White:#F6F6FC,Brown:#8A5A44' },
//             { Field: 'image', Required: 'no (URL mode)', Description: 'Comma separated public image URLs. For ZIP mode, use filenames: img1.jpg,img2.jpg' },
//         ];
//         const ws2 = XLSX.utils.json_to_sheet(instructions);
//         ws2['!cols'] = [{ wch: 22 }, { wch: 10 }, { wch: 60 }];
//         XLSX.utils.book_append_sheet(wb, ws2, 'Instructions');

//         XLSX.writeFile(wb, 'dolly_lamb_bulk_template.xlsx');
//         toast.success('📥 Template downloaded!');
//     };

//     /* ── Parse CSV / Excel ───────────────────────────────────── */
//     const parseFile = useCallback((file) => {
//         const reader = new FileReader();
//         reader.onload = (e) => {
//             try {
//                 let data = [];
//                 if (file.name.endsWith('.csv')) {
//                     const wb = XLSX.read(e.target.result, { type: 'string' });
//                     const ws = wb.Sheets[wb.SheetNames[0]];
//                     data = XLSX.utils.sheet_to_json(ws, { defval: '' });
//                 } else {
//                     const wb = XLSX.read(e.target.result, { type: 'binary' });
//                     const ws = wb.Sheets[wb.SheetNames[0]];
//                     data = XLSX.utils.sheet_to_json(ws, { defval: '' });
//                 }

//                 if (!data.length) { toast.error('File is empty'); return; }

//                 const validated = data.map((row, i) => validateRow(row, i));
//                 setRows(validated);
//                 setResult(null);
//                 setExpandedRows(new Set());
//                 setPreviewOpen(true);

//                 const valid = validated.filter(r => r._valid).length;
//                 toast.success(`Parsed ${data.length} rows — ${valid} valid, ${data.length - valid} with errors`);
//             } catch (err) {
//                 toast.error('Failed to parse file: ' + err.message);
//             }
//         };

//         if (file.name.endsWith('.csv')) reader.readAsText(file);
//         else reader.readAsBinaryString(file);
//     }, []);

//     const handleCsvFile = (file) => {
//         if (!file) return;
//         const ext = file.name.split('.').pop().toLowerCase();
//         if (!['csv', 'xlsx', 'xls'].includes(ext)) {
//             toast.error('Only .csv, .xlsx, .xls files allowed'); return;
//         }
//         setCsvFile(file);
//         parseFile(file);
//     };

//     const handleZipFile = (file) => {
//         if (!file) return;
//         if (!file.name.endsWith('.zip')) { toast.error('Only .zip files allowed'); return; }
//         setZipFile(file);
//         toast.success('ZIP file loaded!');
//     };

//     /* ── Toggle expanded row ────────────────────────────────── */
//     const toggleRow = (id) => {
//         setExpandedRows(prev => {
//             const next = new Set(prev);
//             next.has(id) ? next.delete(id) : next.add(id);
//             return next;
//         });
//     };

//     /* ── SUBMIT — URL mode ──────────────────────────────────── */
//     const submitUrl = async () => {
//         if (!validRows.length) return toast.error('No valid rows to upload');
//         setUploading(true); setProgress(10);

//         try {
//             // Clean internal fields & keep sizes/color as strings for backend
//             const clean = validRows.map(({ _idx, _errors, _valid, _id, ...rest }) => ({
//                 ...rest,
//                 sizes: rest.sizes?.toString() || '',
//                 color: rest.color?.toString() || '',
//                 image: rest.image?.toString() || '',
//                 price: rest.price?.toString() || '0',
//                 discountPrice: rest.discountPrice?.toString() || '',
//                 bestseller: rest.bestseller?.toString() || 'false',
//             }));

//             const jsonBlob = new Blob([JSON.stringify(clean)], { type: 'application/json' });
//             const fd = new FormData();
//             fd.append('file', jsonBlob, 'bulk_upload.json');

//             setProgress(30);
//             // const res = await axios.post(`${backendUrl}/api/product/bulk-upload`, fd, {
//             //     headers: { token },
//             //     onUploadProgress: (e) => setProgress(30 + Math.round((e.loaded / e.total) * 50)),
//             // });
//             const res = await axios.post(`${backendUrl}/api/product/bulk-upload`, fd, { headers: { token } });

//             setProgress(100);
//             if (res.data.success) {
//                 toast.success(res.data.message);
//                 setResult({ success: true, message: res.data.message, count: validRows.length });
//             } else {
//                 toast.error(res.data.message);
//                 setResult({ success: false, message: res.data.message });
//             }
//         } catch (err) {
//             toast.error('Upload failed: ' + (err.response?.data?.message || err.message));
//             setResult({ success: false, message: err.message });
//         } finally {
//             setUploading(false);
//             setTimeout(() => setProgress(0), 1500);
//         }
//     };

//     /* ── SUBMIT — ZIP mode ──────────────────────────────────── */
//     const submitZip = async () => {
//         if (!csvFile) return toast.error('Upload a CSV/Excel file first');
//         if (!zipFile) return toast.error('Upload a ZIP file with images');
//         setUploading(true); setProgress(10);

//         try {
//             const fd = new FormData();

//             // If xlsx/xls, convert to CSV first
//             if (!csvFile.name.endsWith('.csv')) {
//                 const reader = new FileReader();
//                 const csvText = await new Promise((resolve, reject) => {
//                     reader.onload = (e) => {
//                         const wb = XLSX.read(e.target.result, { type: 'binary' });
//                         const ws = wb.Sheets[wb.SheetNames[0]];
//                         resolve(XLSX.utils.sheet_to_csv(ws));
//                     };
//                     reader.onerror = reject;
//                     reader.readAsBinaryString(csvFile);
//                 });
//                 const csvBlob = new Blob([csvText], { type: 'text/csv' });
//                 fd.append('csv', csvBlob, 'products.csv');
//             } else {
//                 fd.append('csv', csvFile);
//             }
//             fd.append('images', zipFile);

//             setProgress(30);
//             const res = await axios.post(`${backendUrl}/api/product/bulk-upload-zip`, fd, {
//                 headers: { token },
//                 onUploadProgress: (e) => setProgress(30 + Math.round((e.loaded / e.total) * 60)),
//             });

//             setProgress(100);
//             if (res.data.success) {
//                 toast.success(res.data.message);
//                 setResult({ success: true, message: res.data.message });
//             } else {
//                 toast.error(res.data.message);
//                 setResult({ success: false, message: res.data.message });
//             }
//         } catch (err) {
//             toast.error('ZIP upload failed: ' + (err.response?.data?.message || err.message));
//             setResult({ success: false, message: err.message });
//         } finally {
//             setUploading(false);
//             setTimeout(() => setProgress(0), 1500);
//         }
//     };

//     /* ── Reset ───────────────────────────────────────────────── */
//     const reset = () => {
//         setCsvFile(null); setZipFile(null); setRows([]);
//         setResult(null); setProgress(0); setExpandedRows(new Set());
//         setPreviewOpen(false);
//     };

//     /* ── Drag handlers ───────────────────────────────────────── */
//     const makeDrag = (setter, fileHandler) => ({
//         onDragOver: e => { e.preventDefault(); setter(true); },
//         onDragLeave: e => { e.preventDefault(); setter(false); },
//         onDrop: e => { e.preventDefault(); setter(false); fileHandler(e.dataTransfer.files[0]); },
//     });

//     /* ─────────────────────────────────────────────────────────
//        RENDER
//     ───────────────────────────────────────────────────────── */
//     return (
//         <div style={{ background: B.bg, minHeight: '100vh', fontFamily: 'system-ui,-apple-system,sans-serif', WebkitFontSmoothing: 'antialiased' }}>
//             <style>{`
//                 @keyframes spin { to { transform: rotate(360deg); } }
//                 @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.5} }
//                 @keyframes slideIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:none} }
//                 .bu-row { animation: slideIn .2s ease; }
//                 .bu-spin { animation: spin 1s linear infinite; }
//                 .bu-pulse { animation: pulse 1.5s ease infinite; }
//             `}</style>

//             {/* ══ HEADER ══ */}
//             <div style={{
//                 position: 'sticky', top: 0, zIndex: 40,
//                 background: `${B.surface}ee`, backdropFilter: 'blur(14px)',
//                 borderBottom: `1px solid ${B.border}`, boxShadow: '0 4px 20px rgba(0,0,0,.45)',
//                 height: 62, display: 'flex', alignItems: 'center',
//                 padding: '0 24px', justifyContent: 'space-between',
//             }}>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
//                     <div style={{
//                         width: 38, height: 38, borderRadius: 11,
//                         background: `linear-gradient(135deg,${B.gold},${B.goldLight})`,
//                         display: 'flex', alignItems: 'center', justifyContent: 'center',
//                         boxShadow: `0 4px 14px ${B.gold}40`,
//                     }}>
//                         <TbCloudUpload size={20} style={{ color: B.bg }} />
//                     </div>
//                     <div>
//                         <h1 style={{ color: B.cream, fontSize: 17, fontWeight: 800, letterSpacing: -.3, margin: 0 }}>
//                             Bulk Upload
//                         </h1>
//                         <p style={{ color: B.muted, fontSize: 11, marginTop: 2, margin: 0 }}>
//                             Upload multiple products via Excel or CSV
//                         </p>
//                     </div>
//                 </div>
//                 <div style={{ display: 'flex', gap: 8 }}>
//                     {hasData && (
//                         <button onClick={reset} style={{
//                             display: 'flex', alignItems: 'center', gap: 6,
//                             padding: '7px 14px', borderRadius: 10, cursor: 'pointer',
//                             background: 'transparent', color: B.muted,
//                             border: `1px solid ${B.border}`, fontSize: 12.5, fontWeight: 600,
//                         }}>
//                             <TbRefresh size={14} /> Reset
//                         </button>
//                     )}
//                     <button onClick={downloadTemplate} style={{
//                         display: 'flex', alignItems: 'center', gap: 6,
//                         padding: '7px 16px', borderRadius: 10, cursor: 'pointer',
//                         background: B.violet.bg, color: B.violet.text,
//                         border: `1px solid ${B.violet.border}`, fontSize: 12.5, fontWeight: 700,
//                     }}>
//                         <TbDownload size={14} /> Download Template
//                     </button>
//                 </div>
//             </div>

//             {/* Progress bar */}
//             {progress > 0 && (
//                 <div style={{ height: 3, background: B.surface3 }}>
//                     <div style={{
//                         height: '100%', background: `linear-gradient(90deg,${B.gold},${B.goldLight})`,
//                         transition: 'width .3s', width: `${progress}%`,
//                         boxShadow: `0 0 10px ${B.gold}60`,
//                     }} className={progress < 100 ? 'bu-pulse' : ''} />
//                 </div>
//             )}

//             <div style={{ padding: '24px', maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 320px', gap: 18, alignItems: 'start' }}>

//                 {/* ══ MAIN COLUMN ══ */}
//                 <div>

//                     {/* ── MODE SELECTOR ── */}
//                     <div style={{ ...card({ marginBottom: 18 }), padding: 22 }}>
//                         <p style={{ color: B.muted, fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.7px', marginBottom: 14 }}>Upload Mode</p>
//                         <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
//                             {[
//                                 {
//                                     v: 'url', icon: <TbFileSpreadsheet size={20} />,
//                                     label: 'CSV / Excel with URLs',
//                                     desc: 'Images from public URLs in the file',
//                                 },
//                                 {
//                                     v: 'zip', icon: <TbZip size={20} />,
//                                     label: 'CSV + ZIP (Local Images)',
//                                     desc: 'Upload a ZIP file with actual image files',
//                                 },
//                             ].map(({ v, icon, label, desc }) => (
//                                 <button key={v} type="button" onClick={() => { setMode(v); setRows([]); setResult(null); }} style={{
//                                     padding: '16px 18px', borderRadius: 14, textAlign: 'left', cursor: 'pointer',
//                                     border: `2px solid ${mode === v ? B.gold : B.borderSoft}`,
//                                     background: mode === v ? B.goldDim : B.surface2,
//                                     transition: 'all .18s', display: 'flex', alignItems: 'flex-start', gap: 12,
//                                     boxShadow: mode === v ? `0 0 16px ${B.gold}20` : 'none',
//                                 }}>
//                                     <div style={{
//                                         width: 36, height: 36, borderRadius: 10, flexShrink: 0,
//                                         display: 'flex', alignItems: 'center', justifyContent: 'center',
//                                         background: mode === v ? `linear-gradient(135deg,${B.gold},${B.goldLight})` : B.surface3,
//                                         color: mode === v ? B.bg : B.muted,
//                                     }}>{icon}</div>
//                                     <div>
//                                         <p style={{ color: mode === v ? B.cream : B.muted, fontSize: 13.5, fontWeight: 700, margin: '0 0 3px' }}>{label}</p>
//                                         <p style={{ color: B.muted, fontSize: 12, margin: 0 }}>{desc}</p>
//                                     </div>
//                                 </button>
//                             ))}
//                         </div>
//                     </div>

//                     {/* ── FILE UPLOAD ZONES ── */}
//                     <div style={card()}>
//                         <div style={{ padding: '16px 22px', borderBottom: `1px solid ${B.borderSoft}`, display: 'flex', alignItems: 'center', gap: 12 }}>
//                             <div style={{ width: 34, height: 34, borderRadius: 10, background: B.goldDim, border: `1px solid ${B.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: B.gold }}>
//                                 <TbUpload size={16} />
//                             </div>
//                             <div>
//                                 <p style={{ color: B.cream, fontSize: 14, fontWeight: 700, margin: 0 }}>
//                                     {mode === 'url' ? 'Upload CSV or Excel File' : 'Upload CSV + ZIP File'}
//                                 </p>
//                                 <p style={{ color: B.muted, fontSize: 11.5, margin: 0 }}>
//                                     {mode === 'url' ? '.csv, .xlsx, .xls supported' : 'Step 1: CSV/Excel · Step 2: ZIP with images'}
//                                 </p>
//                             </div>
//                         </div>
//                         <div style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 14 }}>

//                             {/* CSV Drop Zone */}
//                             <div
//                                 {...makeDrag(setDraggingCsv, handleCsvFile)}
//                                 onClick={() => csvRef.current?.click()}
//                                 style={{
//                                     position: 'relative', borderRadius: 14, cursor: 'pointer',
//                                     border: `2px dashed ${csvFile ? B.emerald.border : draggingCsv ? B.gold : B.borderMid}`,
//                                     background: csvFile ? B.emerald.bg : draggingCsv ? B.goldDim : B.surface3,
//                                     padding: '24px 20px', textAlign: 'center', transition: 'all .2s',
//                                     transform: draggingCsv ? 'scale(1.01)' : 'none',
//                                 }}>
//                                 <input ref={csvRef} type="file" accept=".csv,.xlsx,.xls" style={{ display: 'none' }}
//                                     onClick={e => handleCsvFile(e.target.files[0])} />
//                                 {csvFile ? (
//                                     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
//                                         <TbCircleCheck size={24} style={{ color: B.emerald.dot }} />
//                                         <div style={{ textAlign: 'left' }}>
//                                             <p style={{ color: B.emerald.text, fontSize: 13.5, fontWeight: 700, margin: 0 }}>{csvFile.name}</p>
//                                             <p style={{ color: B.muted, fontSize: 11.5, margin: 0 }}>
//                                                 {(csvFile.size / 1024).toFixed(1)} KB · {rows.length} rows found
//                                             </p>
//                                         </div>
//                                         <button type="button" onClick={e => { e.stopPropagation(); setCsvFile(null); setRows([]); setResult(null); }} style={{ marginLeft: 'auto', width: 26, height: 26, borderRadius: 8, background: B.red.bg, border: `1px solid ${B.red.border}`, color: B.red.text, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
//                                             <TbX size={12} />
//                                         </button>
//                                     </div>
//                                 ) : (
//                                     <>
//                                         <TbFileSpreadsheet size={30} style={{ color: draggingCsv ? B.gold : B.muted, marginBottom: 8 }} />
//                                         <p style={{ color: B.cream, fontSize: 14, fontWeight: 600, marginBottom: 4 }}>
//                                             {draggingCsv ? 'Drop your file here!' : 'Drop CSV / Excel file here'}
//                                         </p>
//                                         <p style={{ color: B.muted, fontSize: 12 }}>or click to browse · .csv .xlsx .xls</p>
//                                     </>
//                                 )}
//                             </div>

//                             {/* ZIP Drop Zone (zip mode only) */}
//                             {mode === 'zip' && (
//                                 <div
//                                     {...makeDrag(setDraggingZip, handleZipFile)}
//                                     onClick={() => zipRef.current?.click()}
//                                     style={{
//                                         position: 'relative', borderRadius: 14, cursor: 'pointer',
//                                         border: `2px dashed ${zipFile ? B.violet.border : draggingZip ? B.gold : B.borderMid}`,
//                                         background: zipFile ? B.violet.bg : draggingZip ? B.goldDim : B.surface3,
//                                         padding: '24px 20px', textAlign: 'center', transition: 'all .2s',
//                                     }}>
//                                     <input ref={zipRef} type="file" accept=".zip" style={{ display: 'none' }}
//                                         onChange={e => handleZipFile(e.target.files[0])} />
//                                     {zipFile ? (
//                                         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
//                                             <TbCircleCheck size={24} style={{ color: B.violet.dot }} />
//                                             <div style={{ textAlign: 'left' }}>
//                                                 <p style={{ color: B.violet.text, fontSize: 13.5, fontWeight: 700, margin: 0 }}>{zipFile.name}</p>
//                                                 <p style={{ color: B.muted, fontSize: 11.5, margin: 0 }}>{(zipFile.size / 1024 / 1024).toFixed(2)} MB</p>
//                                             </div>
//                                             <button type="button" onClick={e => { e.stopPropagation(); setZipFile(null); }} style={{ marginLeft: 'auto', width: 26, height: 26, borderRadius: 8, background: B.red.bg, border: `1px solid ${B.red.border}`, color: B.red.text, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
//                                                 <TbX size={12} />
//                                             </button>
//                                         </div>
//                                     ) : (
//                                         <>
//                                             <TbZip size={30} style={{ color: draggingZip ? B.gold : B.muted, marginBottom: 8 }} />
//                                             <p style={{ color: B.cream, fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Drop ZIP file here</p>
//                                             <p style={{ color: B.muted, fontSize: 12 }}>Images inside ZIP must match filenames in CSV's "image" column</p>
//                                         </>
//                                     )}
//                                 </div>
//                             )}
//                         </div>
//                     </div>

//                     {/* ── PREVIEW TABLE ── */}
//                     {hasData && (
//                         <div style={card()}>
//                             <div style={{ padding: '16px 22px', borderBottom: `1px solid ${B.borderSoft}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                                 <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
//                                     <div style={{ width: 34, height: 34, borderRadius: 10, background: B.goldDim, border: `1px solid ${B.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: B.gold }}>
//                                         <TbTable size={16} />
//                                     </div>
//                                     <div>
//                                         <p style={{ color: B.cream, fontSize: 14, fontWeight: 700, margin: 0 }}>
//                                             Preview — {rows.length} Rows
//                                         </p>
//                                         <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
//                                             <Badge color={B.emerald}><TbCheck size={9} /> {validRows.length} valid</Badge>
//                                             {invalidRows.length > 0 && <Badge color={B.red}><TbAlertTriangle size={9} /> {invalidRows.length} errors</Badge>}
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <button type="button" onClick={() => setPreviewOpen(p => !p)} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 12px', borderRadius: 9, border: `1px solid ${B.border}`, background: 'transparent', color: B.muted, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
//                                     {previewOpen ? <TbChevronUp size={14} /> : <TbChevronDown size={14} />}
//                                     {previewOpen ? 'Collapse' : 'Expand'}
//                                 </button>
//                             </div>

//                             {previewOpen && (
//                                 <div style={{ padding: '0 0 4px' }}>
//                                     {/* Column headers */}
//                                     <div style={{ display: 'grid', gridTemplateColumns: '36px 28px 1fr 90px 80px 100px 90px 50px', gap: 0, padding: '10px 18px', background: B.surface2, borderBottom: `1px solid ${B.borderSoft}` }}>
//                                         {['', '#', 'Name', 'Price', 'Discount', 'Category', 'Sizes', 'Del'].map((h, i) => (
//                                             <span key={i} style={{ color: B.muted, fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.6px' }}>{h}</span>
//                                         ))}
//                                     </div>

//                                     {rows.map((row) => {
//                                         const exp = expandedRows.has(row._id);
//                                         return (
//                                             <div key={row._id} className="bu-row" style={{
//                                                 borderBottom: `1px solid ${B.borderSoft}`,
//                                                 background: row._valid ? 'transparent' : 'rgba(248,113,113,0.04)',
//                                             }}>
//                                                 {/* Row summary */}
//                                                 <div style={{ display: 'grid', gridTemplateColumns: '36px 28px 1fr 90px 80px 100px 90px 50px', gap: 0, padding: '11px 18px', alignItems: 'center', cursor: 'pointer' }}
//                                                     onClick={() => toggleRow(row._id)}>
//                                                     {/* Status dot */}
//                                                     <div>
//                                                         {row._valid
//                                                             ? <div style={{ width: 8, height: 8, borderRadius: '50%', background: B.emerald.dot, boxShadow: `0 0 6px ${B.emerald.dot}` }} />
//                                                             : <div style={{ width: 8, height: 8, borderRadius: '50%', background: B.red.dot, boxShadow: `0 0 6px ${B.red.dot}` }} />
//                                                         }
//                                                     </div>
//                                                     <span style={{ color: B.muted, fontSize: 11.5 }}>{row._idx}</span>
//                                                     <span style={{ color: B.cream, fontSize: 13, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', paddingRight: 10 }}>
//                                                         {row.name || <span style={{ color: B.red.text, fontStyle: 'italic', fontSize: 12 }}>Missing</span>}
//                                                     </span>
//                                                     <span style={{ color: B.gold, fontSize: 13, fontWeight: 700 }}>
//                                                         {row.price ? `₹${row.price}` : <span style={{ color: B.red.text }}>—</span>}
//                                                     </span>
//                                                     <span style={{ color: row.discountPrice ? B.emerald.text : B.mutedSoft, fontSize: 12 }}>
//                                                         {row.discountPrice ? `₹${row.discountPrice}` : '—'}
//                                                     </span>
//                                                     <span style={{ color: B.muted, fontSize: 12, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
//                                                         {row.category || '—'}
//                                                     </span>
//                                                     <span style={{ color: B.creamSoft, fontSize: 11.5, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
//                                                         {row.sizes || <span style={{ color: B.red.text }}>Missing</span>}
//                                                     </span>
//                                                     <button type="button" onClick={e => { e.stopPropagation(); removeRow(row._id); }} style={{ width: 26, height: 26, borderRadius: 7, background: B.red.bg, border: `1px solid ${B.red.border}`, color: B.red.text, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
//                                                         <TbX size={11} />
//                                                     </button>
//                                                 </div>

//                                                 {/* Expanded details */}
//                                                 {exp && (
//                                                     <div style={{ padding: '0 18px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
//                                                         {/* Errors */}
//                                                         {row._errors.length > 0 && (
//                                                             <div style={{ background: B.red.bg, border: `1px solid ${B.red.border}`, borderRadius: 10, padding: '10px 14px' }}>
//                                                                 <p style={{ color: B.red.text, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 6 }}>⚠ Errors in this row:</p>
//                                                                 {row._errors.map((e, i) => (
//                                                                     <p key={i} style={{ color: B.red.text, fontSize: 12.5, margin: '0 0 2px' }}>• {e}</p>
//                                                                 ))}
//                                                             </div>
//                                                         )}
//                                                         {/* All fields */}
//                                                         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
//                                                             {ALL_COLS.filter(c => row[c] !== undefined && row[c] !== '').map(col => (
//                                                                 <div key={col} style={{ background: B.surface2, border: `1px solid ${B.borderSoft}`, borderRadius: 9, padding: '8px 12px' }}>
//                                                                     <p style={{ color: B.muted, fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.5px', margin: '0 0 3px' }}>{col}</p>
//                                                                     <p style={{ color: B.creamSoft, fontSize: 12.5, margin: 0, wordBreak: 'break-all' }}>{row[col]?.toString() || '—'}</p>
//                                                                 </div>
//                                                             ))}
//                                                         </div>
//                                                     </div>
//                                                 )}
//                                             </div>
//                                         );
//                                     })}
//                                 </div>
//                             )}
//                         </div>
//                     )}

//                     {/* ── RESULT BANNER ── */}
//                     {result && (
//                         <div style={{
//                             padding: '18px 22px', borderRadius: 14, marginBottom: 18,
//                             background: result.success ? B.emerald.bg : B.red.bg,
//                             border: `1px solid ${result.success ? B.emerald.border : B.red.border}`,
//                             display: 'flex', alignItems: 'center', gap: 14,
//                         }}>
//                             {result.success
//                                 ? <TbCircleCheck size={28} style={{ color: B.emerald.dot, flexShrink: 0 }} />
//                                 : <TbCircleX size={28} style={{ color: B.red.dot, flexShrink: 0 }} />
//                             }
//                             <div>
//                                 <p style={{ color: result.success ? B.emerald.text : B.red.text, fontSize: 14, fontWeight: 700, margin: '0 0 2px' }}>
//                                     {result.success ? '🎉 Upload Successful!' : '❌ Upload Failed'}
//                                 </p>
//                                 <p style={{ color: result.success ? B.emerald.text : B.red.text, fontSize: 13, margin: 0, opacity: .85 }}>
//                                     {result.message}
//                                 </p>
//                             </div>
//                             {result.success && (
//                                 <button onClick={reset} style={{ marginLeft: 'auto', padding: '8px 16px', borderRadius: 10, background: B.emerald.dot, color: B.bg, border: 'none', fontSize: 12.5, fontWeight: 700, cursor: 'pointer', flexShrink: 0 }}>
//                                     Upload More
//                                 </button>
//                             )}
//                         </div>
//                     )}
//                 </div>

//                 {/* ══ SIDEBAR ══ */}
//                 <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

//                     {/* Upload button card */}
//                     <div style={{ ...card({ marginBottom: 0 }), padding: 22 }}>
//                         <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
//                             <div style={{ width: 34, height: 34, borderRadius: 10, background: B.goldDim, border: `1px solid ${B.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                                 <TbRocket size={16} style={{ color: B.gold }} />
//                             </div>
//                             <p style={{ color: B.cream, fontSize: 13.5, fontWeight: 700, margin: 0 }}>Upload to Database</p>
//                         </div>

//                         {/* Stats */}
//                         {hasData && (
//                             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 16 }}>
//                                 {[
//                                     { label: 'Total Rows', val: rows.length, color: B.blue },
//                                     { label: 'Valid', val: validRows.length, color: B.emerald },
//                                     { label: 'Errors', val: invalidRows.length, color: invalidRows.length ? B.red : B.emerald },
//                                     { label: 'Will Upload', val: validRows.length, color: B.gold },
//                                 ].map(({ label, val, color }) => (
//                                     <div key={label} style={{ background: color.bg || B.goldDim, border: `1px solid ${color.border || B.border}`, borderRadius: 10, padding: '10px 12px', textAlign: 'center' }}>
//                                         <p style={{ color: color.text || B.gold, fontSize: 20, fontWeight: 800, margin: 0 }}>{val}</p>
//                                         <p style={{ color: B.muted, fontSize: 10.5, fontWeight: 600, margin: 0 }}>{label}</p>
//                                     </div>
//                                 ))}
//                             </div>
//                         )}

//                         {!hasData && (
//                             <div style={{ textAlign: 'center', padding: '16px 0', marginBottom: 16 }}>
//                                 <TbFileSpreadsheet size={32} style={{ color: B.mutedSoft, marginBottom: 8 }} />
//                                 <p style={{ color: B.muted, fontSize: 13 }}>Upload a file to see preview</p>
//                             </div>
//                         )}

//                         <button
//                             type="button"
//                             onClick={mode === 'url' ? submitUrl : submitZip}
//                             disabled={uploading || (mode === 'url' ? !validRows.length : !csvFile || !zipFile)}
//                             style={{
//                                 width: '100%', padding: '13px', borderRadius: 11, display: 'flex',
//                                 alignItems: 'center', justifyContent: 'center', gap: 8,
//                                 background: uploading ? B.surface3 : `linear-gradient(135deg,${B.gold},${B.goldLight})`,
//                                 color: uploading ? B.muted : B.bg,
//                                 border: uploading ? `1px solid ${B.border}` : 'none',
//                                 fontSize: 13.5, fontWeight: 800, cursor: uploading ? 'not-allowed' : 'pointer',
//                                 boxShadow: uploading ? 'none' : `0 4px 16px ${B.gold}40`,
//                                 opacity: (!validRows.length && mode === 'url' && !uploading) ? .5 : 1,
//                                 transition: 'all .2s',
//                             }}>
//                             {uploading
//                                 ? <><TbRefresh size={16} className="bu-spin" /> Uploading…</>
//                                 : <><TbRocket size={16} /> Upload {validRows.length || ''} Products</>
//                             }
//                         </button>

//                         {invalidRows.length > 0 && !uploading && (
//                             <p style={{ color: B.amber.text, fontSize: 11.5, textAlign: 'center', marginTop: 10 }}>
//                                 ⚠ {invalidRows.length} row{invalidRows.length > 1 ? 's' : ''} with errors will be skipped
//                             </p>
//                         )}
//                     </div>

//                     {/* Format guide */}
//                     <div style={{ ...card({ marginBottom: 0 }), padding: 20 }}>
//                         <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
//                             <div style={{ width: 32, height: 32, borderRadius: 9, background: B.blue.bg, border: `1px solid ${B.blue.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                                 <TbInfoCircle size={15} style={{ color: B.blue.text }} />
//                             </div>
//                             <p style={{ color: B.cream, fontSize: 13.5, fontWeight: 700, margin: 0 }}>Format Guide</p>
//                         </div>
//                         {[
//                             { field: 'sizes', example: 'S:0.9,M:1,L:1.1:10,XL:1.2:15:4499:true', note: 'size:multiplier[:stock[:customPrice[:useCustomPrice]]]' },
//                             { field: '  ├ multiplier', example: '0.9 = 90% of base price', note: 'auto-calculated if no custom price' },
//                             { field: '  ├ stock', example: '10 = 10 units available', note: 'optional, defaults to 0' },
//                             { field: '  ├ customPrice', example: '2499 = exact price for this size', note: 'overrides multiplier calculation' },
//                             { field: '  └ useCustomPrice', example: 'true or false', note: 'true = use custom price | false = use multiplier' },
//                             { field: 'color', example: 'Black,Brown,Red', note: 'named colors (auto hex)' },
//                             { field: 'color (custom)', example: 'White:#F6F6FC,Antique Brown:#8A5A44', note: 'name:#hex format for custom shades' },
//                             { field: 'image (URL)', example: 'http://…jpg,http://…jpg', note: 'public URLs' },
//                             { field: 'image (ZIP)', example: 'img1.jpg,img2.jpg', note: 'filenames in ZIP' },
//                             { field: 'bestseller', example: 'true or false', note: 'string' },
//                         ].map(({ field, example, note }) => (
//                             <div key={field} style={{ marginBottom: 12, paddingBottom: 12, borderBottom: `1px solid ${B.borderSoft}` }}>
//                                 <p style={{ color: B.creamSoft, fontSize: 12, fontWeight: 600, margin: '0 0 3px' }}>{field}</p>
//                                 <code style={{ display: 'block', color: B.gold, fontSize: 11.5, background: B.goldDim2, padding: '4px 8px', borderRadius: 6, wordBreak: 'break-all' }}>{example}</code>
//                                 <p style={{ color: B.muted, fontSize: 11, margin: '3px 0 0' }}>{note}</p>
//                             </div>
//                         ))}
//                         <button onClick={downloadTemplate} style={{
//                             width: '100%', padding: '10px', borderRadius: 10, display: 'flex',
//                             alignItems: 'center', justifyContent: 'center', gap: 7, cursor: 'pointer',
//                             background: B.violet.bg, color: B.violet.text,
//                             border: `1px solid ${B.violet.border}`, fontSize: 13, fontWeight: 700, marginTop: 4,
//                         }}>
//                             <TbDownload size={14} /> Download Sample Excel
//                         </button>
//                     </div>

//                     {/* ZIP instructions (zip mode) */}
//                     {mode === 'zip' && (
//                         <div style={{ ...card({ marginBottom: 0 }), padding: 20 }}>
//                             <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
//                                 <div style={{ width: 32, height: 32, borderRadius: 9, background: B.amber.bg, border: `1px solid ${B.amber.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                                     <TbZip size={15} style={{ color: B.amber.text }} />
//                                 </div>
//                                 <p style={{ color: B.cream, fontSize: 13.5, fontWeight: 700, margin: 0 }}>ZIP Setup</p>
//                             </div>
//                             {[
//                                 '1. Add all product images into a ZIP file (no subfolders)',
//                                 '2. In CSV "image" column, write filenames: jacket1.jpg,jacket2.jpg',
//                                 '3. Upload CSV + ZIP together',
//                                 '4. Backend matches filenames from ZIP and uploads to Cloudinary',
//                             ].map((tip, i) => (
//                                 <p key={i} style={{ color: i === 0 ? B.amber.text : B.muted, fontSize: 12.5, margin: '0 0 8px', lineHeight: 1.5 }}>{tip}</p>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BulkUpload;





// ─────────────────────────────────────────────────────────────────
//  D DOLLY LAMB — BULK UPLOAD  |  Light Luxury Theme
//  npm install xlsx  (run this first!)
// ─────────────────────────────────────────────────────────────────
import React, { useState, useRef, useCallback } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import * as XLSX from 'xlsx';

import {
    TbUpload, TbFileSpreadsheet, TbX, TbCheck, TbAlertTriangle,
    TbDownload, TbTrash, TbRocket, TbInfoCircle, TbPackage,
    TbChevronDown, TbChevronUp, TbRefresh, TbEye, TbZip,
    TbTable, TbCloudUpload, TbCircleCheck, TbCircleX
} from 'react-icons/tb';
import { HiOutlineSparkles } from 'react-icons/hi';
import { backendUrl } from '../../App';

/* ════════════════════════════════════════════════════════════════
   D DOLLY LAMB — BULK UPLOAD  |  Light Luxury Theme
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
const cardStyle = (extra = {}) => ({
    background: B.surfaceCard, border: `1px solid ${B.border}`,
    borderRadius: 16, marginBottom: 16, overflow: 'hidden',
    boxShadow: '0 1px 4px rgba(28,43,58,0.06)', ...extra,
});

/* ── CSV column spec ── */
const REQUIRED_COLS = ['name', 'description', 'price', 'category', 'subCategory', 'sizes'];
const ALL_COLS = [...REQUIRED_COLS, 'detailedDescription', 'discountPrice', 'bestseller', 'color', 'image'];

const SAMPLE_ROWS = [
    {
        name: 'Classic Lambskin Leather Jacket',
        description: 'Premium quality lambskin leather jacket with quilted lining',
        detailedDescription: 'Handcrafted from genuine lambskin leather. Features YKK zippers, two side pockets, and one inner pocket. Dry clean only.',
        price: 4999, discountPrice: 10,
        category: 'Men', subCategory: 'Jackets', bestseller: 'false',
        sizes: 'XS:0.9:10,S:1:10,M:1.1:5,L:1.2:2,',
        color: 'Black,Brown,Antique Brown:#8A5A44',
        image: 'https://m.media-amazon.com/images/I/71rgZMIZJhL._AC_SX425_.jpg',
    },
    {
        name: 'Women Biker Leather Jacket',
        description: 'Edgy moto-inspired jacket for women in genuine cowhide',
        detailedDescription: 'Asymmetric front zip, epaulettes, and belt detail. Soft microfiber lining.',
        price: 5499, discountPrice: '5',
        category: 'Women', subCategory: 'Moto Biker Jacket', bestseller: 'true',
        sizes: 'XS:1000:10,S:1100:5,M:1200:2,L:1300:0,',
        color: 'Black,Red,Navy Blue',
        image: 'https://m.media-amazon.com/images/I/81XkXgk6QXL._AC_SY445_.jpg',
    },
];

/* ── Validate a single row ── */
const validateRow = (row, idx) => {
    const errors = [];
    if (!row.name?.toString().trim()) errors.push('Name is required');
    if (!row.price || isNaN(+row.price) || +row.price <= 0) errors.push('Valid price required');
    if (!row.category?.toString().trim()) errors.push('Category required');
    if (!row.subCategory?.toString().trim()) errors.push('Sub-category required');
    if (!row.sizes?.toString().trim()) errors.push('Sizes required (format: S:0.9:10,M:1:5)');
    if (!row.description?.toString().trim()) errors.push('Description required');
    if (row.discountPrice && +row.discountPrice >= +row.price) errors.push('Discount must be less than price');

    if (row.sizes) {
        const bad = row.sizes.toString().split(',').some(s => {
            const parts = s.trim().split(':');
            if (parts.length < 2 || parts.length > 5) return true;
            const p1 = parts[1]?.toString().trim().toLowerCase();
            const p3 = parts[3]?.toString().trim().toLowerCase();
            const p4 = parts[4]?.toString().trim().toLowerCase();
            if (p1 === 'custom') { if (!parts[2] || isNaN(parseFloat(parts[2]))) return true; return false; }
            if (parts.length >= 4 && p3 === 'custom') { if (isNaN(parseFloat(parts[1]))) return true; return false; }
            if (isNaN(parseFloat(parts[1]))) return true;
            if (parts[2] && isNaN(parseInt(parts[2], 10))) return true;
            if (parts[3] && isNaN(parseFloat(parts[3]))) return true;
            if (parts[4] && !['true', 'false', ''].includes(p4)) return true;
            return false;
        });
        if (bad) errors.push('Sizes format wrong — S:0.9:10 or S:2499:10:custom');
    }

    return { ...row, _idx: idx + 1, _errors: errors, _valid: errors.length === 0, _id: `row_${idx}` };
};

/* ── Badge ── */
const Badge = ({ color, children }) => (
    <span style={{
        display: 'inline-flex', alignItems: 'center', gap: 4,
        padding: '2px 8px', borderRadius: 99, fontSize: 10.5, fontWeight: 700,
        background: color.bg, color: color.text, border: `1px solid ${color.border}`,
    }}>{children}</span>
);

/* ════════════════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════════════════ */
const BulkUpload = ({ token }) => {
    const [mode, setMode] = useState('url');
    const [csvFile, setCsvFile] = useState(null);
    const [zipFile, setZipFile] = useState(null);
    const [rows, setRows] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [result, setResult] = useState(null);
    const [expandedRows, setExpandedRows] = useState(new Set());
    const [draggingCsv, setDraggingCsv] = useState(false);
    const [draggingZip, setDraggingZip] = useState(false);
    const [previewOpen, setPreviewOpen] = useState(false);
    const csvRef = useRef(null);
    const zipRef = useRef(null);

    const validRows = rows.filter(r => r._valid);
    const invalidRows = rows.filter(r => !r._valid);
    const hasData = rows.length > 0;

    /* ── Download Excel template ── */
    const downloadTemplate = () => {
        const ws = XLSX.utils.json_to_sheet(SAMPLE_ROWS, { header: ALL_COLS });
        ws['!cols'] = ALL_COLS.map(col => ({ wch: col === 'detailedDescription' ? 50 : col === 'image' ? 40 : col === 'sizes' ? 30 : 20 }));
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Products');
        const instructions = [
            { Field: 'name', Required: 'YES', Description: 'Product name' },
            { Field: 'description', Required: 'YES', Description: 'Short product description' },
            { Field: 'detailedDescription', Required: 'no', Description: 'Long HTML description (optional)' },
            { Field: 'price', Required: 'YES', Description: 'Base price in ₹ (number)' },
            { Field: 'discountPrice', Required: 'no', Description: 'Sale price (must be < price)' },
            { Field: 'category', Required: 'YES', Description: 'Men / Women / Others / Leather Pillow Cover / Sofa Headrest / Leather Desk Pad / Men Leather Apron' },
            { Field: 'subCategory', Required: 'YES', Description: 'Jackets / Bomber Biker Jacket / Moto Biker Jacket / etc.' },
            { Field: 'bestseller', Required: 'no', Description: 'true or false' },
            { Field: 'sizes', Required: 'YES', Description: 'S:0.9:10 (multiplier mode) or S:2499:10:custom (custom price mode)' },
            { Field: 'color', Required: 'no', Description: 'Comma separated. Black,Brown or White:#F6F6FC,Brown:#8A5A44' },
            { Field: 'image', Required: 'no', Description: 'Comma separated public image URLs. For ZIP mode, use filenames: img1.jpg,img2.jpg' },
        ];
        const ws2 = XLSX.utils.json_to_sheet(instructions);
        ws2['!cols'] = [{ wch: 22 }, { wch: 10 }, { wch: 60 }];
        XLSX.utils.book_append_sheet(wb, ws2, 'Instructions');
        XLSX.writeFile(wb, 'dolly_lamb_bulk_template.xlsx');
        toast.success('📥 Template downloaded!');
    };

    /* ── Parse CSV / Excel ── */
    const parseFile = useCallback((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                let data = [];
                if (file.name.endsWith('.csv')) {
                    const wb = XLSX.read(e.target.result, { type: 'string' });
                    data = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { defval: '' });
                } else {
                    const wb = XLSX.read(e.target.result, { type: 'binary' });
                    data = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { defval: '' });
                }
                if (!data.length) { toast.error('File is empty'); return; }
                const validated = data.map((row, i) => validateRow(row, i));
                setRows(validated); setResult(null); setExpandedRows(new Set()); setPreviewOpen(true);
                const valid = validated.filter(r => r._valid).length;
                toast.success(`Parsed ${data.length} rows — ${valid} valid, ${data.length - valid} with errors`);
            } catch (err) { toast.error('Failed to parse file: ' + err.message); }
        };
        if (file.name.endsWith('.csv')) reader.readAsText(file);
        else reader.readAsBinaryString(file);
    }, []);

    const handleCsvFile = (file) => {
        if (!file) return;
        const ext = file.name.split('.').pop().toLowerCase();
        if (!['csv', 'xlsx', 'xls'].includes(ext)) { toast.error('Only .csv, .xlsx, .xls files allowed'); return; }
        setCsvFile(file); parseFile(file);
    };

    const handleZipFile = (file) => {
        if (!file) return;
        if (!file.name.endsWith('.zip')) { toast.error('Only .zip files allowed'); return; }
        setZipFile(file); toast.success('ZIP file loaded!');
    };

    const toggleRow = (id) => {
        setExpandedRows(prev => { const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next; });
    };

    const removeRow = (id) => setRows(prev => prev.filter(r => r._id !== id));

    /* ── Submit URL mode ── */
    const submitUrl = async () => {
        if (!validRows.length) return toast.error('No valid rows to upload');
        setUploading(true); setProgress(10);
        try {
            const clean = validRows.map(({ _idx, _errors, _valid, _id, ...rest }) => ({
                ...rest, sizes: rest.sizes?.toString() || '', color: rest.color?.toString() || '',
                image: rest.image?.toString() || '', price: rest.price?.toString() || '0',
                discountPrice: rest.discountPrice?.toString() || '', bestseller: rest.bestseller?.toString() || 'false',
            }));
            const jsonBlob = new Blob([JSON.stringify(clean)], { type: 'application/json' });
            const fd = new FormData();
            fd.append('file', jsonBlob, 'bulk_upload.json');
            setProgress(30);
            const res = await axios.post(`${backendUrl}/api/product/bulk-upload`, fd, { headers: { token } });
            setProgress(100);
            if (res.data.success) { toast.success(res.data.message); setResult({ success: true, message: res.data.message, count: validRows.length }); }
            else { toast.error(res.data.message); setResult({ success: false, message: res.data.message }); }
        } catch (err) {
            toast.error('Upload failed: ' + (err.response?.data?.message || err.message));
            setResult({ success: false, message: err.message });
        } finally { setUploading(false); setTimeout(() => setProgress(0), 1500); }
    };

    /* ── Submit ZIP mode ── */
    const submitZip = async () => {
        if (!csvFile) return toast.error('Upload a CSV/Excel file first');
        if (!zipFile) return toast.error('Upload a ZIP file with images');
        setUploading(true); setProgress(10);
        try {
            const fd = new FormData();
            if (!csvFile.name.endsWith('.csv')) {
                const reader = new FileReader();
                const csvText = await new Promise((resolve, reject) => {
                    reader.onload = (e) => { const wb = XLSX.read(e.target.result, { type: 'binary' }); resolve(XLSX.utils.sheet_to_csv(wb.Sheets[wb.SheetNames[0]])); };
                    reader.onerror = reject; reader.readAsBinaryString(csvFile);
                });
                fd.append('csv', new Blob([csvText], { type: 'text/csv' }), 'products.csv');
            } else { fd.append('csv', csvFile); }
            fd.append('images', zipFile);
            setProgress(30);
            const res = await axios.post(`${backendUrl}/api/product/bulk-upload-zip`, fd, {
                headers: { token },
                onUploadProgress: (e) => setProgress(30 + Math.round((e.loaded / e.total) * 60)),
            });
            setProgress(100);
            if (res.data.success) { toast.success(res.data.message); setResult({ success: true, message: res.data.message }); }
            else { toast.error(res.data.message); setResult({ success: false, message: res.data.message }); }
        } catch (err) {
            toast.error('ZIP upload failed: ' + (err.response?.data?.message || err.message));
            setResult({ success: false, message: err.message });
        } finally { setUploading(false); setTimeout(() => setProgress(0), 1500); }
    };

    const reset = () => { setCsvFile(null); setZipFile(null); setRows([]); setResult(null); setProgress(0); setExpandedRows(new Set()); setPreviewOpen(false); };

    const makeDrag = (setter, fileHandler) => ({
        onDragOver: e => { e.preventDefault(); setter(true); },
        onDragLeave: e => { e.preventDefault(); setter(false); },
        onDrop: e => { e.preventDefault(); setter(false); fileHandler(e.dataTransfer.files[0]); },
    });

    /* ════════════════════════════════════════════════════════
       RENDER
    ════════════════════════════════════════════════════════ */
    return (
        <div style={{ background: B.bg, minHeight: '100vh', fontFamily: "'Inter', system-ui, -apple-system, sans-serif", WebkitFontSmoothing: 'antialiased' }}>
            <style>{`
                @keyframes spin    { to { transform: rotate(360deg); } }
                @keyframes pulse   { 0%,100%{opacity:1} 50%{opacity:.5} }
                @keyframes slideIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:none} }
                .bu-row   { animation: slideIn .2s ease; }
                .bu-spin  { animation: spin 1s linear infinite; }
                .bu-pulse { animation: pulse 1.5s ease infinite; }
                .bu-tr:hover td { background: ${B.greenBg} !important; }
            `}</style>

            {/* ══ HEADER ══ */}
            <div style={{
                position: 'sticky', top: 0, zIndex: 40,
                background: `${B.surfaceCard}f2`, backdropFilter: 'blur(14px)',
                borderBottom: `1px solid ${B.border}`, boxShadow: '0 2px 8px rgba(28,43,58,0.08)',
                height: 60, display: 'flex', alignItems: 'center',
                padding: '0 24px', justifyContent: 'space-between',
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: B.greenBg, border: `1px solid ${B.greenBdr}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <TbCloudUpload size={19} style={{ color: B.green }} />
                    </div>
                    <div>
                        <h1 style={{ color: B.navy, fontSize: 16, fontWeight: 800, letterSpacing: -.3, margin: 0, fontFamily: 'Georgia, serif' }}>Bulk Upload</h1>
                        <p style={{ color: B.navyGhost, fontSize: 11, marginTop: 2, margin: 0 }}>Upload multiple products via Excel or CSV</p>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                    {hasData && (
                        <button onClick={reset}
                            style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px', borderRadius: 9, cursor: 'pointer', background: B.surfaceCard, color: B.navySoft, border: `1px solid ${B.border}`, fontSize: 12, fontWeight: 600, transition: 'all .15s' }}
                            onMouseEnter={e => { e.currentTarget.style.color = B.red.text; e.currentTarget.style.borderColor = B.red.border; e.currentTarget.style.background = B.red.bg; }}
                            onMouseLeave={e => { e.currentTarget.style.color = B.navySoft; e.currentTarget.style.borderColor = B.border; e.currentTarget.style.background = B.surfaceCard; }}>
                            <TbRefresh size={13} /> Reset
                        </button>
                    )}
                    <button onClick={downloadTemplate}
                        style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 16px', borderRadius: 9, cursor: 'pointer', background: B.violet.bg, color: B.violet.text, border: `1px solid ${B.violet.border}`, fontSize: 12, fontWeight: 700, transition: 'all .15s' }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#EDE9FE'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = B.violet.bg; }}>
                        <TbDownload size={13} /> Download Template
                    </button>
                </div>
            </div>

            {/* Progress bar */}
            {progress > 0 && (
                <div style={{ height: 3, background: B.surface2 }}>
                    <div style={{ height: '100%', background: B.green, transition: 'width .3s', width: `${progress}%` }} className={progress < 100 ? 'bu-pulse' : ''} />
                </div>
            )}

            <div style={{ padding: '20px 24px', maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 320px', gap: 16, alignItems: 'start' }}>

                {/* ══ MAIN COLUMN ══ */}
                <div>

                    {/* ── MODE SELECTOR ── */}
                    <div style={{ ...cardStyle({ marginBottom: 16 }), padding: 20 }}>
                        <p style={{ color: B.navyGhost, fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.7px', marginBottom: 14 }}>Upload Mode</p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                            {[
                                { v: 'url', icon: <TbFileSpreadsheet size={20} />, label: 'CSV / Excel with URLs', desc: 'Images from public URLs in the file' },
                                { v: 'zip', icon: <TbZip size={20} />, label: 'CSV + ZIP (Local Images)', desc: 'Upload a ZIP file with actual image files' },
                            ].map(({ v, icon, label, desc }) => (
                                <button key={v} type="button" onClick={() => { setMode(v); setRows([]); setResult(null); }} style={{
                                    padding: '16px 18px', borderRadius: 12, textAlign: 'left', cursor: 'pointer',
                                    border: `2px solid ${mode === v ? B.green : B.border}`,
                                    background: mode === v ? B.greenBg : B.surfaceCard,
                                    transition: 'all .18s', display: 'flex', alignItems: 'flex-start', gap: 12,
                                }}>
                                    <div style={{
                                        width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        background: mode === v ? B.green : B.surface2,
                                        color: mode === v ? '#FFFFFF' : B.navyGhost,
                                    }}>{icon}</div>
                                    <div>
                                        <p style={{ color: mode === v ? B.navy : B.navySoft, fontSize: 13.5, fontWeight: 700, margin: '0 0 3px' }}>{label}</p>
                                        <p style={{ color: B.navyGhost, fontSize: 12, margin: 0 }}>{desc}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* ── FILE UPLOAD ZONES ── */}
                    <div style={cardStyle()}>
                        <div style={{ padding: '14px 20px', borderBottom: `1px solid ${B.border}`, display: 'flex', alignItems: 'center', gap: 12, background: B.surface }}>
                            <div style={{ width: 34, height: 34, borderRadius: 10, background: B.greenBg, border: `1px solid ${B.greenBdr}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <TbUpload size={15} style={{ color: B.green }} />
                            </div>
                            <div>
                                <p style={{ color: B.navy, fontSize: 13.5, fontWeight: 700, margin: 0, fontFamily: 'Georgia, serif' }}>
                                    {mode === 'url' ? 'Upload CSV or Excel File' : 'Upload CSV + ZIP File'}
                                </p>
                                <p style={{ color: B.navyGhost, fontSize: 11, margin: 0 }}>
                                    {mode === 'url' ? '.csv, .xlsx, .xls supported' : 'Step 1: CSV/Excel · Step 2: ZIP with images'}
                                </p>
                            </div>
                        </div>
                        <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>

                            {/* CSV Drop Zone */}
                            <div
                                {...makeDrag(setDraggingCsv, handleCsvFile)}
                                onClick={() => csvRef.current?.click()}
                                style={{
                                    position: 'relative', borderRadius: 12, cursor: 'pointer',
                                    border: `2px dashed ${csvFile ? B.emerald.border : draggingCsv ? B.green : B.borderStrong}`,
                                    background: csvFile ? B.emerald.bg : draggingCsv ? B.greenBg : B.surface,
                                    padding: '24px 20px', textAlign: 'center', transition: 'all .2s',
                                    transform: draggingCsv ? 'scale(1.01)' : 'none',
                                }}>
                                <input ref={csvRef} type="file" accept=".csv,.xlsx,.xls" style={{ display: 'none' }}
                                    onChange={e => handleCsvFile(e.target.files[0])} />
                                {csvFile ? (
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                                        <TbCircleCheck size={24} style={{ color: B.emerald.dot }} />
                                        <div style={{ textAlign: 'left' }}>
                                            <p style={{ color: B.emerald.text, fontSize: 13.5, fontWeight: 700, margin: 0 }}>{csvFile.name}</p>
                                            <p style={{ color: B.navyGhost, fontSize: 11.5, margin: 0 }}>{(csvFile.size / 1024).toFixed(1)} KB · {rows.length} rows found</p>
                                        </div>
                                        <button type="button" onClick={e => { e.stopPropagation(); setCsvFile(null); setRows([]); setResult(null); }}
                                            style={{ marginLeft: 'auto', width: 26, height: 26, borderRadius: 8, background: B.red.bg, border: `1px solid ${B.red.border}`, color: B.red.text, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
                                            <TbX size={12} />
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <TbFileSpreadsheet size={28} style={{ color: draggingCsv ? B.green : B.navyGhost, marginBottom: 8 }} />
                                        <p style={{ color: B.navy, fontSize: 14, fontWeight: 600, marginBottom: 4 }}>
                                            {draggingCsv ? 'Drop your file here!' : 'Drop CSV / Excel file here'}
                                        </p>
                                        <p style={{ color: B.navySoft, fontSize: 12 }}>or click to browse · .csv .xlsx .xls</p>
                                    </>
                                )}
                            </div>

                            {/* ZIP Drop Zone */}
                            {mode === 'zip' && (
                                <div
                                    {...makeDrag(setDraggingZip, handleZipFile)}
                                    onClick={() => zipRef.current?.click()}
                                    style={{
                                        position: 'relative', borderRadius: 12, cursor: 'pointer',
                                        border: `2px dashed ${zipFile ? B.violet.border : draggingZip ? B.green : B.borderStrong}`,
                                        background: zipFile ? B.violet.bg : draggingZip ? B.greenBg : B.surface,
                                        padding: '24px 20px', textAlign: 'center', transition: 'all .2s',
                                    }}>
                                    <input ref={zipRef} type="file" accept=".zip" style={{ display: 'none' }}
                                        onChange={e => handleZipFile(e.target.files[0])} />
                                    {zipFile ? (
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                                            <TbCircleCheck size={24} style={{ color: B.violet.dot }} />
                                            <div style={{ textAlign: 'left' }}>
                                                <p style={{ color: B.violet.text, fontSize: 13.5, fontWeight: 700, margin: 0 }}>{zipFile.name}</p>
                                                <p style={{ color: B.navyGhost, fontSize: 11.5, margin: 0 }}>{(zipFile.size / 1024 / 1024).toFixed(2)} MB</p>
                                            </div>
                                            <button type="button" onClick={e => { e.stopPropagation(); setZipFile(null); }}
                                                style={{ marginLeft: 'auto', width: 26, height: 26, borderRadius: 8, background: B.red.bg, border: `1px solid ${B.red.border}`, color: B.red.text, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
                                                <TbX size={12} />
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                            <TbZip size={28} style={{ color: draggingZip ? B.green : B.navyGhost, marginBottom: 8 }} />
                                            <p style={{ color: B.navy, fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Drop ZIP file here</p>
                                            <p style={{ color: B.navySoft, fontSize: 12 }}>Images inside ZIP must match filenames in CSV's "image" column</p>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* ── PREVIEW TABLE ── */}
                    {hasData && (
                        <div style={cardStyle()}>
                            <div style={{ padding: '14px 20px', borderBottom: `1px solid ${B.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: B.surface }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                    <div style={{ width: 34, height: 34, borderRadius: 10, background: B.greenBg, border: `1px solid ${B.greenBdr}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <TbTable size={15} style={{ color: B.green }} />
                                    </div>
                                    <div>
                                        <p style={{ color: B.navy, fontSize: 13.5, fontWeight: 700, margin: 0, fontFamily: 'Georgia, serif' }}>Preview — {rows.length} Rows</p>
                                        <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
                                            <Badge color={B.emerald}><TbCheck size={9} /> {validRows.length} valid</Badge>
                                            {invalidRows.length > 0 && <Badge color={B.red}><TbAlertTriangle size={9} /> {invalidRows.length} errors</Badge>}
                                        </div>
                                    </div>
                                </div>
                                <button type="button" onClick={() => setPreviewOpen(p => !p)}
                                    style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 12px', borderRadius: 9, border: `1px solid ${B.border}`, background: B.surfaceCard, color: B.navySoft, fontSize: 12, fontWeight: 600, cursor: 'pointer', transition: 'all .15s' }}
                                    onMouseEnter={e => { e.currentTarget.style.background = B.greenBg; e.currentTarget.style.color = B.green; e.currentTarget.style.borderColor = B.greenBdr; }}
                                    onMouseLeave={e => { e.currentTarget.style.background = B.surfaceCard; e.currentTarget.style.color = B.navySoft; e.currentTarget.style.borderColor = B.border; }}>
                                    {previewOpen ? <TbChevronUp size={13} /> : <TbChevronDown size={13} />}
                                    {previewOpen ? 'Collapse' : 'Expand'}
                                </button>
                            </div>

                            {previewOpen && (
                                <div style={{ padding: '0 0 4px' }}>
                                    {/* Column headers */}
                                    <div style={{ display: 'grid', gridTemplateColumns: '36px 28px 1fr 90px 80px 100px 90px 50px', gap: 0, padding: '10px 18px', background: B.surface, borderBottom: `1px solid ${B.border}` }}>
                                        {['', '#', 'Name', 'Price', 'Discount', 'Category', 'Sizes', 'Del'].map((h, i) => (
                                            <span key={i} style={{ color: B.navyGhost, fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.6px' }}>{h}</span>
                                        ))}
                                    </div>

                                    {rows.map((row) => {
                                        const exp = expandedRows.has(row._id);
                                        return (
                                            <div key={row._id} className="bu-row" style={{ borderBottom: `1px solid ${B.border}`, background: row._valid ? 'transparent' : '#FEF9F9' }}>
                                                {/* Row summary */}
                                                <div style={{ display: 'grid', gridTemplateColumns: '36px 28px 1fr 90px 80px 100px 90px 50px', gap: 0, padding: '11px 18px', alignItems: 'center', cursor: 'pointer', transition: 'background .12s' }}
                                                    onClick={() => toggleRow(row._id)}
                                                    onMouseEnter={e => e.currentTarget.style.background = B.surface}
                                                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                                                    {/* Status dot */}
                                                    <div>
                                                        {row._valid
                                                            ? <div style={{ width: 8, height: 8, borderRadius: '50%', background: B.emerald.dot }} />
                                                            : <div style={{ width: 8, height: 8, borderRadius: '50%', background: B.red.dot }} />
                                                        }
                                                    </div>
                                                    <span style={{ color: B.navyGhost, fontSize: 11.5 }}>{row._idx}</span>
                                                    <span style={{ color: B.navy, fontSize: 13, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', paddingRight: 10 }}>
                                                        {row.name || <span style={{ color: B.red.text, fontStyle: 'italic', fontSize: 12 }}>Missing</span>}
                                                    </span>
                                                    <span style={{ color: B.green, fontSize: 13, fontWeight: 700 }}>
                                                        {row.price ? `₹${row.price}` : <span style={{ color: B.red.text }}>—</span>}
                                                    </span>
                                                    <span style={{ color: row.discountPrice ? B.emerald.text : B.navyGhost, fontSize: 12 }}>
                                                        {row.discountPrice ? `₹${row.discountPrice}` : '—'}
                                                    </span>
                                                    <span style={{ color: B.navySoft, fontSize: 12, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                        {row.category || '—'}
                                                    </span>
                                                    <span style={{ color: B.navyMid, fontSize: 11.5, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                        {row.sizes || <span style={{ color: B.red.text }}>Missing</span>}
                                                    </span>
                                                    <button type="button" onClick={e => { e.stopPropagation(); removeRow(row._id); }}
                                                        style={{ width: 26, height: 26, borderRadius: 7, background: B.red.bg, border: `1px solid ${B.red.border}`, color: B.red.text, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                                        <TbX size={11} />
                                                    </button>
                                                </div>

                                                {/* Expanded details */}
                                                {exp && (
                                                    <div style={{ padding: '0 18px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                                                        {row._errors.length > 0 && (
                                                            <div style={{ background: B.red.bg, border: `1px solid ${B.red.border}`, borderRadius: 10, padding: '10px 14px' }}>
                                                                <p style={{ color: B.red.text, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 6 }}>⚠ Errors in this row:</p>
                                                                {row._errors.map((e, i) => <p key={i} style={{ color: B.red.text, fontSize: 12.5, margin: '0 0 2px' }}>• {e}</p>)}
                                                            </div>
                                                        )}
                                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
                                                            {ALL_COLS.filter(c => row[c] !== undefined && row[c] !== '').map(col => (
                                                                <div key={col} style={{ background: B.surface, border: `1px solid ${B.border}`, borderRadius: 9, padding: '8px 12px' }}>
                                                                    <p style={{ color: B.navyGhost, fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.5px', margin: '0 0 3px' }}>{col}</p>
                                                                    <p style={{ color: B.navyMid, fontSize: 12.5, margin: 0, wordBreak: 'break-all' }}>{row[col]?.toString() || '—'}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    )}

                    {/* ── RESULT BANNER ── */}
                    {result && (
                        <div style={{
                            padding: '18px 22px', borderRadius: 12, marginBottom: 16,
                            background: result.success ? B.emerald.bg : B.red.bg,
                            border: `1px solid ${result.success ? B.emerald.border : B.red.border}`,
                            display: 'flex', alignItems: 'center', gap: 14,
                            boxShadow: '0 1px 4px rgba(28,43,58,0.06)',
                        }}>
                            {result.success
                                ? <TbCircleCheck size={28} style={{ color: B.emerald.dot, flexShrink: 0 }} />
                                : <TbCircleX size={28} style={{ color: B.red.dot, flexShrink: 0 }} />
                            }
                            <div>
                                <p style={{ color: result.success ? B.emerald.text : B.red.text, fontSize: 14, fontWeight: 700, margin: '0 0 2px' }}>
                                    {result.success ? '🎉 Upload Successful!' : '❌ Upload Failed'}
                                </p>
                                <p style={{ color: result.success ? B.emerald.text : B.red.text, fontSize: 13, margin: 0, opacity: .85 }}>
                                    {result.message}
                                </p>
                            </div>
                            {result.success && (
                                <button onClick={reset}
                                    style={{ marginLeft: 'auto', padding: '8px 16px', borderRadius: 9, background: B.green, color: '#FFFFFF', border: 'none', fontSize: 12.5, fontWeight: 700, cursor: 'pointer', flexShrink: 0, transition: 'background .15s' }}
                                    onMouseEnter={e => e.currentTarget.style.background = B.greenLight}
                                    onMouseLeave={e => e.currentTarget.style.background = B.green}>
                                    Upload More
                                </button>
                            )}
                        </div>
                    )}
                </div>

                {/* ══ SIDEBAR ══ */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

                    {/* Upload button card */}
                    <div style={{ ...cardStyle({ marginBottom: 0 }), padding: 20 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                            <div style={{ width: 34, height: 34, borderRadius: 9, background: B.greenBg, border: `1px solid ${B.greenBdr}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <TbRocket size={16} style={{ color: B.green }} />
                            </div>
                            <p style={{ color: B.navy, fontSize: 13, fontWeight: 700, margin: 0 }}>Upload to Database</p>
                        </div>

                        {/* Stats grid */}
                        {hasData && (
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 14 }}>
                                {[
                                    { label: 'Total Rows', val: rows.length, pal: B.blue },
                                    { label: 'Valid', val: validRows.length, pal: B.emerald },
                                    { label: 'Errors', val: invalidRows.length, pal: invalidRows.length ? B.red : B.emerald },
                                    { label: 'Will Upload', val: validRows.length, pal: { bg: B.greenBg, text: B.green, border: B.greenBdr } },
                                ].map(({ label, val, pal }) => (
                                    <div key={label} style={{ background: pal.bg, border: `1px solid ${pal.border}`, borderRadius: 10, padding: '10px 12px', textAlign: 'center' }}>
                                        <p style={{ color: pal.text, fontSize: 20, fontWeight: 800, margin: 0, fontFamily: 'Georgia, serif' }}>{val}</p>
                                        <p style={{ color: B.navyGhost, fontSize: 10.5, fontWeight: 600, margin: 0, textTransform: 'uppercase', letterSpacing: '.3px' }}>{label}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {!hasData && (
                            <div style={{ textAlign: 'center', padding: '14px 0', marginBottom: 14 }}>
                                <TbFileSpreadsheet size={30} style={{ color: B.navyGhost, marginBottom: 8 }} />
                                <p style={{ color: B.navySoft, fontSize: 13 }}>Upload a file to see preview</p>
                            </div>
                        )}

                        <button type="button"
                            onClick={mode === 'url' ? submitUrl : submitZip}
                            disabled={uploading || (mode === 'url' ? !validRows.length : !csvFile || !zipFile)}
                            style={{
                                width: '100%', padding: '12px', borderRadius: 10,
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                                background: uploading ? B.surface2 : B.green,
                                color: uploading ? B.navyGhost : '#FFFFFF',
                                border: uploading ? `1px solid ${B.border}` : 'none',
                                fontSize: 13.5, fontWeight: 800, cursor: uploading ? 'not-allowed' : 'pointer',
                                opacity: (!validRows.length && mode === 'url' && !uploading) ? .5 : 1,
                                transition: 'all .2s',
                            }}
                            onMouseEnter={e => { if (!uploading && validRows.length) e.currentTarget.style.background = B.greenLight; }}
                            onMouseLeave={e => { if (!uploading) e.currentTarget.style.background = B.green; }}>
                            {uploading
                                ? <><TbRefresh size={15} className="bu-spin" /> Uploading…</>
                                : <><TbRocket size={15} /> Upload {validRows.length || ''} Products</>
                            }
                        </button>

                        {invalidRows.length > 0 && !uploading && (
                            <p style={{ color: B.amber.text, fontSize: 11.5, textAlign: 'center', marginTop: 10, background: B.amber.bg, border: `1px solid ${B.amber.border}`, borderRadius: 8, padding: '6px 10px' }}>
                                ⚠ {invalidRows.length} row{invalidRows.length > 1 ? 's' : ''} with errors will be skipped
                            </p>
                        )}
                    </div>

                    {/* Format guide */}
                    <div style={{ ...cardStyle({ marginBottom: 0 }), padding: 20 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                            <div style={{ width: 32, height: 32, borderRadius: 9, background: B.blue.bg, border: `1px solid ${B.blue.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <TbInfoCircle size={14} style={{ color: B.blue.text }} />
                            </div>
                            <p style={{ color: B.navy, fontSize: 13, fontWeight: 700, margin: 0 }}>Format Guide</p>
                        </div>
                        {[
                            { field: 'sizes', example: 'S:0.9,M:1,L:1.1:10,XL:1.2:15:4499:true', note: 'size:multiplier[:stock[:customPrice[:useCustomPrice]]]' },
                            { field: '  ├ multiplier', example: '0.9 = 90% of base price', note: 'auto-calculated if no custom price' },
                            { field: '  ├ stock', example: '10 = 10 units available', note: 'optional, defaults to 0' },
                            { field: '  ├ customPrice', example: '2499 = exact price for this size', note: 'overrides multiplier calculation' },
                            { field: '  └ useCustom', example: 'true or false', note: 'true = use custom price' },
                            { field: 'color', example: 'Black,Brown,Red', note: 'named colors (auto hex)' },
                            { field: 'color (custom)', example: 'White:#F6F6FC,Brown:#8A5A44', note: 'name:#hex format' },
                            { field: 'image (URL)', example: 'http://…jpg,http://…jpg', note: 'public URLs, comma separated' },
                            { field: 'image (ZIP)', example: 'img1.jpg,img2.jpg', note: 'filenames inside ZIP' },
                            { field: 'bestseller', example: 'true or false', note: 'string value' },
                        ].map(({ field, example, note }) => (
                            <div key={field} style={{ marginBottom: 11, paddingBottom: 11, borderBottom: `1px solid ${B.border}` }}>
                                <p style={{ color: B.navyMid, fontSize: 12, fontWeight: 600, margin: '0 0 3px' }}>{field}</p>
                                <code style={{ display: 'block', color: B.green, fontSize: 11.5, background: B.greenBg, border: `1px solid ${B.greenBdr}`, padding: '4px 8px', borderRadius: 6, wordBreak: 'break-all' }}>{example}</code>
                                <p style={{ color: B.navyGhost, fontSize: 11, margin: '3px 0 0' }}>{note}</p>
                            </div>
                        ))}
                        <button onClick={downloadTemplate}
                            style={{ width: '100%', padding: '10px', borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, cursor: 'pointer', background: B.violet.bg, color: B.violet.text, border: `1px solid ${B.violet.border}`, fontSize: 13, fontWeight: 700, marginTop: 4, transition: 'background .15s' }}
                            onMouseEnter={e => e.currentTarget.style.background = '#EDE9FE'}
                            onMouseLeave={e => e.currentTarget.style.background = B.violet.bg}>
                            <TbDownload size={13} /> Download Sample Excel
                        </button>
                    </div>

                    {/* ZIP instructions */}
                    {mode === 'zip' && (
                        <div style={{ ...cardStyle({ marginBottom: 0 }), padding: 20 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                                <div style={{ width: 32, height: 32, borderRadius: 9, background: B.amber.bg, border: `1px solid ${B.amber.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <TbZip size={14} style={{ color: B.amber.dot }} />
                                </div>
                                <p style={{ color: B.navy, fontSize: 13, fontWeight: 700, margin: 0 }}>ZIP Setup</p>
                            </div>
                            {[
                                '1. Add all product images into a ZIP file (no subfolders)',
                                '2. In CSV "image" column, write filenames: jacket1.jpg,jacket2.jpg',
                                '3. Upload CSV + ZIP together',
                                '4. Backend matches filenames from ZIP and uploads to Cloudinary',
                            ].map((tip, i) => (
                                <p key={i} style={{ color: i === 0 ? B.amber.text : B.navySoft, fontSize: 12.5, margin: '0 0 8px', lineHeight: 1.5 }}>{tip}</p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BulkUpload;