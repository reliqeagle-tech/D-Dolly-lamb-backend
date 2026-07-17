import React, { useState, useRef, useCallback } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
// import * as XLSX from 'xlsx';
import XLSX from 'xlsx-js-style';

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
const REQUIRED_COLS = ['sku', 'name', 'description', 'price', 'category', 'subCategory', 'sizes'];
const ALL_COLS = [...REQUIRED_COLS, 'detailedDescription', 'itemDetails', 'discountPrice', 'bestseller', 'color', 'image'];


const SAMPLE_ROWS = [
    {
        SKU: 'WHITE-BEAR-SQ-PK2',
        Product_Name: 'Classic Lambskin Leather Jacket',
        Product_Summary: 'Premium quality lambskin leather jacket with quilted lining',
        Detailed_Description: 'Handcrafted from genuine lambskin leather. Features YKK zippers, two side pockets, and one inner pocket. Dry clean only.',
        Product_Details: 'Brand: D Dolly Lamb::Material: Lamb Leather',
        Price: 1000, "Discount_(In_%)": 10,
        Category: "Men's", Sub_Category: 'Bomber Jacket', Bestseller: 'false',
        Size_Name: 'XS:0.9:10,S:1:10,M:1.1:5,L:1.2:2,XL:1.3:0',
        Color_Name: 'Black,Brown,Antique Brown:#8A5A44',
        Image_Link: 'https://m.media-amazon.com/images/I/71rgZMIZJhL._AC_SX425_.jpg',
    },
    {
        SKU: 'BLACK-BEAR-AQ-PK2',
        Product_Name: 'Women Biker Leather Jacket',
        Product_Summary: 'Edgy moto-inspired jacket for women in genuine cowhide',
        Detailed_Description: 'Asymmetric front zip, epaulettes, and belt detail. Soft microfiber lining.',
        Product_Details: 'Brand: D Dolly Lamb::Material: Cowhide Leather',
        Price: 1000, "Discount_(In_%)": 5,
        Category: 'Women', Sub_Category: 'Moto Biker Jacket', Bestseller: 'true',
        Size_Name: 'XS:1000:10,S:1100:5,M:1200:2,L:1300:0',
        Color_Name: 'Black,Red,Navy Blue',
        Image_Link: 'https://m.media-amazon.com/images/I/81XkXgk6QXL._AC_SY445_.jpg',
    },
];

/* ── Validate a single row ── */
const validateRow = (row, idx) => {
    const errors = [];
    if (!row.sku?.toString().trim()) errors.push('SKU is required');
    // const skuPattern = /^DDL-[A-Z]{2,3}-\d{4}$/;
    const skuPattern = /^[A-Za-z0-9\-()]+$/;

    if (
        row.sku &&
        !skuPattern.test(row.sku.toString().trim().toUpperCase())
    ) {
        errors.push("SKU can contain letters, numbers, hyphens (-) and brackets ()");
    }
    if (!row.name?.toString().trim()) errors.push('Name is required');
    if (!row.price || isNaN(+row.price) || +row.price <= 0) errors.push('Valid price required');
    if (!row.category?.toString().trim()) errors.push('Category required');
    if (!row.subCategory?.toString().trim()) errors.push('Sub-category required');
    if (!row.sizes?.toString().trim()) errors.push('Sizes required (format: S:0.9:10,M:1:5)');
    if (!row.description?.toString().trim()) errors.push('Description required');
    if (row.discountPrice && +row.discountPrice >= +row.price) errors.push('Discount must be less than price');
    // if (
    //     row["Discount_(In_%)"] &&
    //     (Number(row["Discount_(In_%)"]) < 0 ||
    //         Number(row["Discount_(In_%)"]) > 100)
    // ) {
    //     errors.push("Discount percentage must be between 0 and 100");
    // }

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
    // if (row.itemDetails) {
    //     const valid = row.itemDetails
    //         .toString()
    //         .split('|')
    //         .every(item => item.includes('='));

    //     if (!valid) {
    //         errors.push(
    //             'Product Details format should be Brand=D Dolly Lamb|Material=Leather'
    //         );
    //     }
    // }

    if (row.itemDetails) {
        const valid = row.itemDetails
            .toString()
            .split('::')
            .every(item => {
                const parts = item.split(':');
                return parts.length >= 2 &&
                    parts[0].trim() &&
                    parts[1].trim();
            });

        if (!valid) {
            errors.push(
                'Product Details format should be Brand: Dolly::Material: Leather::Pattern: Printed'
            );
        }
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
        // const ws = XLSX.utils.json_to_sheet(SAMPLE_ROWS, { header: ALL_COLS });
        // ws['!cols'] = ALL_COLS.map(col => ({ wch: col === 'detailedDescription' ? 50 : col === 'image' ? 40 : col === 'sizes' ? 30 : 20 }));
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(
            SAMPLE_ROWS,
            {
                header: [
                    'SKU',
                    'Product_Name',
                    'Product_Summary',
                    'Detailed_Description',
                    'Product_Details',
                    'Price',
                    'Discount_(In_%)',
                    'Category',
                    'Sub_Category',
                    'Bestseller',
                    'Size_Name',
                    'Color_Name',
                    'Image_Link'
                ]
            }
        );
        ws['!cols'] = [
            { wch: 22 }, // SKU
            { wch: 35 }, // Product_Name
            { wch: 45 }, // Product_Summary
            { wch: 60 }, // Detailed_Description
            { wch: 40 }, // Product_Details
            { wch: 12 }, // Price
            { wch: 15 }, // Discount
            { wch: 22 }, // Category
            { wch: 25 }, // Sub_Category
            { wch: 12 }, // Bestseller
            { wch: 40 }, // Size_Name
            { wch: 30 }, // Color_Name
            { wch: 60 }  // Image_Link
        ];
        XLSX.utils.book_append_sheet(wb, ws, 'Products');
        const instructions = [
            { Field: 'SKU', Required: 'YES', Description: 'Unique SKU. Example: WHITE-BEAR-SQ-PK2' },
            { Field: 'Product_Name', Required: 'YES', Description: 'Product name' },
            { Field: 'Product_Summary', Required: 'YES', Description: 'Short product description' },
            { Field: 'Detailed_Description', Required: 'no', Description: 'Long HTML description (optional)' },
            { Field: 'Price', Required: 'YES', Description: 'Base price in $ (number)' },
            { Field: 'Discount_Price', Required: 'no', Description: 'Sale price (must be < price)' },
            { Field: 'Category', Required: 'YES', Description: 'Men / Women / Others / Leather Pillow Cover / Sofa Headrest / Leather Desk Pad / Men Leather Apron' },
            { Field: 'Sub_Category', Required: 'YES', Description: 'Jackets / Bomber Biker Jacket / Moto Biker Jacket / etc.' },
            { Field: 'Bestseller', Required: 'no', Description: 'true or false' },
            { Field: 'Size_Name', Required: 'YES', Description: 'S:0.9:10 (multiplier mode) or S:2499:10:custom (custom price mode)' },
            { Field: 'Color_Name', Required: 'no', Description: 'Comma separated. Black,Brown or White:#F6F6FC,Brown:#8A5A44' },
            { Field: 'Image_Link', Required: 'no', Description: 'Comma separated public image URLs. For ZIP mode, use filenames: img1.jpg,img2.jpg' },
        ];

        const categoryRows = [
            ['Category', 'Sub Category'],
            ['Apron', 'Leather Aprons'],
            ['Desk Pads', 'Leather Mouse Pad'],
            ['Pillow Covers', 'Round Cushion'],
            ['', 'Square Cushion'],
            ['', 'Rectangle Cushion'],
            ['', 'Cylindrical Cushion'],
            ['', 'Ear Hole Cushion'],
            ["Men's", 'Bomber Jacket'],
            ['', 'Moto Biker Jacket'],
            ['', 'Coats'],
            ["Women's", 'Bomber Jacket'],
            ['', 'Moto Biker Jacket'],
            ['', 'Coats'],
            ['', 'Blazer'],
            ['', 'Jackets'],
            ['', 'Nightsuits'],
            ['', 'Top'],
            ['', 'Skirts'],
            ['Recliner Slipcover', 'Headrest']
        ];
        const wsInstructions = XLSX.utils.json_to_sheet(instructions);

        wsInstructions['!cols'] = [
            { wch: 25 }, // A
            { wch: 12 }, // B
            { wch: 55 }, // C
            { wch: 20 }, // D
            { wch: 20 }, // E
            { wch: 28 }, // F Category
            { wch: 40 }  // G Sub Category
        ];

        XLSX.utils.sheet_add_aoa(wsInstructions, categoryRows, {
            origin: 'F1'
        });

        // wsInstructions['E1'].s = {
        //     font: { bold: true },
        //     fill: { fgColor: { rgb: 'D9D9D9' } }
        // };

        for (let row = 1; row <= categoryRows.length; row++) {
            ['F', 'G'].forEach(col => {
                const cell = wsInstructions[`${col}${row}`];

                if (!cell) return;

                cell.s = {
                    font: {
                        bold: row === 1,
                        color: { rgb: row === 1 ? 'FFFFFF' : '1C2B3A' }
                    },

                    fill: {
                        fgColor: {
                            rgb: row === 1 ? '1A7A4A' : 'FFFFFF'
                        }
                    },

                    alignment: {
                        vertical: 'center',
                        horizontal: 'left'
                    },

                    border: {
                        top: { style: 'thin', color: { rgb: '808080' } },
                        bottom: { style: 'thin', color: { rgb: '808080' } },
                        left: { style: 'thin', color: { rgb: '808080' } },
                        right: { style: 'thin', color: { rgb: '808080' } }
                    }
                };
            });
        }

        // wsInstructions['F1'].s = {
        //     font: { bold: true },
        //     fill: { fgColor: { rgb: 'D9D9D9' } }
        // };

        XLSX.utils.book_append_sheet(wb, wsInstructions, 'Instructions');

        XLSX.writeFile(wb, 'dolly_lamb_bulk_template.xlsx');

        // const ws2 = XLSX.utils.json_to_sheet(instructions);
        // ws2['!cols'] = [{ wch: 22 }, { wch: 10 }, { wch: 60 }];
        // XLSX.utils.book_append_sheet(wb, ws2, 'Instructions');
        // XLSX.writeFile(wb, 'dolly_lamb_bulk_template.xlsx');
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
                // if (!data.length) { toast.error('File is empty'); return; }
                // const validated = data.map((row, i) => validateRow(row, i));
                if (!data.length) {
                    toast.error('File is empty');
                    return;
                }

                const normalizedData = data.map(row => ({
                    sku: row.SKU || '',
                    name: row.Product_Name || '',
                    description: row.Product_Summary || '',
                    detailedDescription: row.Detailed_Description || '',
                    itemDetails: row.Product_Details || '',
                    price: row.Price || '',
                    discountPrice: row["Discount_(In_%)"] || '',
                    category: row.Category || '',
                    subCategory: row.Sub_Category || '',
                    sizes: row.Size_Name || '',
                    bestseller: row.Bestseller || 'false',
                    color: row.Color_Name || '',
                    image: row.Image_Link || ''
                }));

                const validated = normalizedData.map((row, i) =>
                    validateRow(row, i)
                );

                console.log("Excel Row:", data[0]);
                console.log("Normalized:", normalizedData[0]);
                console.log("Raw Excel Data:", data);
                console.log("Total Rows:", data.length);

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
                ...rest, sku: rest.sku?.toString().trim().toUpperCase(), sizes: rest.sizes?.toString() || '', color: rest.color?.toString() || '',
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

            <div style={{ padding: '20px 24px', maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 320px', gap: 16, alignItems: 'start' }}>

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

                            {/* {previewOpen && (
                                <div style={{ padding: '0 0 4px', overflowX: 'auto', width: '100%', display: 'block' }}>
                                    {/* Column headers */}
                            {/* <div style={{ display: 'grid', gridTemplateColumns: '36px 32px 160px 130px 100px 90px 120px 130px 50px', minWidth: '960px', gap: '0 8px', padding: '10px 20px', background: B.surface, borderBottom: `1px solid ${B.border}` }}>
                                        {['', '#', 'Name', 'SKU', 'Price', 'Discount', 'Category', 'Sizes', 'Del'].map((h, i) => (
                                            <span key={i} style={{ color: B.navyGhost, fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.6px' }}>{h}</span>
                                        ))}
                                    </div> */}

                            {/* {rows.map((row) => {
                                        const exp = expandedRows.has(row._id);
                                        return (
                                            <div key={row._id} className="bu-row" style={{ borderBottom: `1px solid ${B.border}`, background: row._valid ? 'transparent' : '#FEF9F9' }}>
                                                {/* Row summary */}
                            {/* <div style={{ display: 'grid', gridTemplateColumns: '36px 32px 160px 130px 100px 90px 120px 130px 50px', minWidth: '960px', gap: '0 8px', padding: '13px 20px', alignItems: 'center', cursor: 'pointer', transition: 'background .12s' }}
                                                    onClick={() => toggleRow(row._id)}
                                                    onMouseEnter={e => e.currentTarget.style.background = B.surface}
                                                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                                                    {/* Status dot */}
                            {/* <div>
                                                        {row._valid
                                                            ? <div style={{ width: 8, height: 8, borderRadius: '50%', background: B.emerald.dot }} />
                                                            : <div style={{ width: 8, height: 8, borderRadius: '50%', background: B.red.dot }} />
                                                        }
                                                    </div>
                                                    <span style={{ color: B.navyGhost, fontSize: 11.5 }}>{row._idx}</span>
                                                    <span style={{ color: B.navy, fontSize: 13, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', paddingRight: 16 }}>
                                                        {row.name || <span style={{ color: B.red.text, fontStyle: 'italic', fontSize: 12 }}>Missing</span>}
                                                    </span>
                                                    <span
                                                        style={{
                                                            color: B.navyMid,
                                                            fontSize: 12,
                                                            fontWeight: 600
                                                        }}
                                                    >
                                                        {row.sku}
                                                    </span>
                                                    <span style={{ color: B.green, fontSize: 13, fontWeight: 700 }}>
                                                        {row.price ? `$${row.price}` : <span style={{ color: B.red.text }}>—</span>}
                                                    </span>
                                                    <span style={{ color: row.discountPrice ? B.emerald.text : B.navyGhost, fontSize: 12 }}>
                                                        {row.discountPrice ? `$${row.discountPrice}` : '—'}
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
                            {/* {exp && (
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
                            )} */}

                            {previewOpen && (
                                <div style={{ overflowX: 'auto', width: '100%', }}>
                                    <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: 900, }}>
                                        <thead>
                                            <tr style={{ background: B.surface, borderBottom: `1px solid ${B.border}` }}>
                                                {['', '#', 'SKU', 'Name', 'Price', 'Discount', 'Category', 'Sizes', 'Del'].map((h, i) => (
                                                    <th key={i} style={{
                                                        padding: '10px 14px', textAlign: 'left',
                                                        color: B.navyGhost, fontSize: 10, fontWeight: 700,
                                                        textTransform: 'uppercase', letterSpacing: '.6px',
                                                        whiteSpace: 'nowrap'
                                                    }}>{h}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {rows.map((row) => {
                                                const exp = expandedRows.has(row._id);
                                                return (
                                                    <React.Fragment key={row._id}>
                                                        <tr
                                                            className="bu-row"
                                                            onClick={() => {
                                                                console.log("Row Object:", row);
                                                                console.log("Row ID:", row._id);
                                                                toggleRow(row._id)
                                                            }}
                                                            style={{ borderBottom: `1px solid ${B.border}`, background: row._valid ? 'transparent' : '#FEF9F9', cursor: 'pointer', }}
                                                            onMouseEnter={e => e.currentTarget.style.background = B.surface}
                                                            onMouseLeave={e => e.currentTarget.style.background = row._valid ? 'transparent' : '#FEF9F9'}
                                                        >
                                                            <td style={{ padding: '13px 14px', width: 36 }}>
                                                                <div style={{ width: 8, height: 8, borderRadius: '50%', background: row._valid ? B.emerald.dot : B.red.dot }} />
                                                            </td>
                                                            <td style={{ padding: '13px 14px', color: B.navyGhost, fontSize: 11.5, whiteSpace: 'nowrap' }}>{row._idx}</td>
                                                            <td style={{ padding: '13px 14px', color: B.navyMid, fontSize: 12, fontWeight: 600, whiteSpace: 'nowrap' }}>{row.sku}</td>
                                                            <td style={{ padding: '13px 14px', color: B.navy, fontSize: 13, fontWeight: 600, maxWidth: 160, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                                {row.name || <span style={{ color: B.red.text, fontStyle: 'italic' }}>Missing</span>}
                                                            </td>
                                                            <td style={{ padding: '13px 14px', color: B.green, fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap' }}>
                                                                {row.price ? `$${row.price}` : <span style={{ color: B.red.text }}>—</span>}
                                                            </td>
                                                            <td style={{ padding: '13px 14px', color: row.discountPrice ? B.emerald.text : B.navyGhost, fontSize: 12, whiteSpace: 'nowrap' }}>
                                                                {row.discountPrice ? `$${row.discountPrice}` : '—'}
                                                            </td>
                                                            <td style={{ padding: '13px 14px', color: B.navySoft, fontSize: 12, whiteSpace: 'nowrap' }}>{row.category || '—'}</td>
                                                            <td style={{ padding: '13px 14px', color: B.navyMid, fontSize: 11.5, maxWidth: 140, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                                {row.sizes || <span style={{ color: B.red.text }}>Missing</span>}
                                                            </td>
                                                            <td style={{ padding: '13px 14px' }}>
                                                                <button type="button" onClick={e => { e.stopPropagation(); removeRow(row._id); }}
                                                                    style={{ width: 26, height: 26, borderRadius: 7, background: B.red.bg, border: `1px solid ${B.red.border}`, color: B.red.text, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                                                    <TbX size={11} />
                                                                </button>
                                                            </td>
                                                        </tr>
                                                        {
                                                            exp && (
                                                                <tr>
                                                                    <td colSpan={9} style={{ padding: '14px' }}>
                                                                        {row._errors.length > 0 && (
                                                                            <div style={{ background: B.red.bg, border: `1px solid ${B.red.border}`, borderRadius: 10, padding: '10px 14px', marginBottom: 8 }}>
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
                                                                    </td>
                                                                </tr>
                                                            )
                                                        }
                                                    </React.Fragment>
                                                );
                                            })}
                                        </tbody>
                                    </table>
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
                            { field: 'sku', example: 'WHITE-BEAR-SQ-PK2', note: 'Brand-Category-Number format' },
                            { field: 'itemDetails', example: 'Brand: Dolly::Material: Leather::Pattern: Printed', note: 'Amazon style format' },
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
        </div >
    );
};

export default BulkUpload;