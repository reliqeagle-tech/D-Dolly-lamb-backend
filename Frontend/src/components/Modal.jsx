// import React, { useRef, useState } from 'react'
// import { X, Download } from 'lucide-react';
// import { assets } from '../assets/assets';

// const Modal = ({ onclose }) => {
//   const modalRef = useRef();
//   const closeModal = (e) => {
//     if (modalRef.current = e.target) {
//       onclose();
//     }
//   }
//   const [unit, setUnit] = useState("inch");
//   const CM_TO_INCH = 0.393701;
//   const sizeData = [
//     { size: "XS(34)", chest: 86, jacketChest: 102, length: 65, shoulder: 44, sleeves: 62, stomach: 97 },
//     { size: "S(36)", chest: 91, jacketChest: 107, length: 66, shoulder: 46, sleeves: 64, stomach: 102 },
//     { size: "M(38)", chest: 97, jacketChest: 112, length: 69, shoulder: 47, sleeves: 65, stomach: 107 },
//     { size: "L(40)", chest: 102, jacketChest: 117, length: 70, shoulder: 48, sleeves: 65, stomach: 112 },
//     { size: "XL(42)", chest: 107, jacketChest: 122, length: 71, shoulder: 48, sleeves: 66, stomach: 117 },
//     { size: "2XL(44)", chest: 112, jacketChest: 130, length: 74, shoulder: 51, sleeves: 67, stomach: 124 },
//     { size: "3XL(46)", chest: 117, jacketChest: 137, length: 75, shoulder: 53, sleeves: 67, stomach: 132 },
//     { size: "4XL(48)", chest: 122, jacketChest: 147, length: 76, shoulder: 56, sleeves: 67, stomach: 142 },
//   ];
//   const convertValue = (val) => {
//     return unit === "inch" ? (val * CM_TO_INCH).toFixed(1) + " in" : val + " cm";
//   };
//   return (
//     <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm justify-center items-center flex'>
//       <div className='mt-10 flex flex-col gap-5 text-white'>
//         <button onClick={onclose} className='place-self-end'><X Size={30} /></button>
//         <div className='bg-white text-black rounded-xl px-20 py-10 flex flex-col items-center gap-5 mx-4'>
//           <form>
//             <div className="flex justify-center items-center space-x-6 ">
//               <label className="flex items-center space-x-2 cursor-pointer">
//                 <input
//                   type="radio"
//                   name="unit"
//                   value="inch"
//                   checked={unit === "inch"}
//                   onChange={() => setUnit("inch")}
//                 />
//                 <span>Inch</span>
//               </label>
//               <label className="flex items-center space-x-2 cursor-pointer">
//                 <input
//                   type="radio"
//                   name="unit"
//                   value="cm"
//                   checked={unit === "cm"}
//                   onChange={() => setUnit("cm")}
//                 />
//                 <span>cm</span>
//               </label>
//             </div>
//           </form>
//           {/* Illustrations */}
//           <div className="grid grid-cols-5 gap-5 justify-items-center">
//             <div><img className='w-32' src={assets.size_leather_1} alt="Size Icon" /></div>
//             <div><img className='w-32' src={assets.size_leather_2} alt="Chest Icon" /></div>
//             <div><img className='w-32' src={assets.size_leather_3} alt="Length Icon" /></div>
//             <div><img className='w-32' src={assets.size_leather_4} alt="Shoulder Icon" /></div>
//             <div><img className='w-32' src={assets.size_leather_5} alt="Sleeves Icon" /></div>
//           </div>
//           {/* Table */}
//           <div className="overflow-x-auto">
//             <table className="min-w-full table-auto border border-gray-300">
//               <thead className="bg-gray-200 text-gray-700 text-sm">
//                 <tr>
//                   <th className="border p-2">What Size You Need</th>
//                   <th className="border p-2">Suitable For Chest Size</th>
//                   <th className="border p-2">Jacket Chest</th>
//                   <th className="border p-2">Jacket Length</th>
//                   <th className="border p-2">Jacket Shoulder</th>
//                   <th className="border p-2">Jacket Sleeves</th>
//                   <th className="border p-2">Jacket Stomach</th>
//                 </tr>
//               </thead>
//               <tbody className="text-center text-sm">
//                 {sizeData.map((row, idx) => (
//                   <tr key={idx} className="hover:bg-gray-50">
//                     <td className="border p-2">{row.size}</td>
//                     <td className="border p-2">{convertValue(row.chest)}</td>
//                     <td className="border p-2">{convertValue(row.jacketChest)}</td>
//                     <td className="border p-2">{convertValue(row.length)}</td>
//                     <td className="border p-2">{convertValue(row.shoulder)}</td>
//                     <td className="border p-2">{convertValue(row.sleeves)}</td>
//                     <td className="border p-2">{convertValue(row.stomach)}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Modal



// import React, { useRef, useState } from 'react';
// import { X } from 'lucide-react';
// import { assets } from '../assets/assets';

// const Modal = ({ onclose }) => {
//   const modalRef = useRef();

//   const closeModal = (e) => {
//     if (modalRef.current === e.target) {
//       onclose();
//     }
//   };

//   const [unit, setUnit] = useState('inch');
//   const CM_TO_INCH = 0.393701;

//   const sizeData = [
//     { size: 'XS(34)', chest: 86, jacketChest: 102, length: 65, shoulder: 44, sleeves: 62, stomach: 97 },
//     { size: 'S(36)', chest: 91, jacketChest: 107, length: 66, shoulder: 46, sleeves: 64, stomach: 102 },
//     { size: 'M(38)', chest: 97, jacketChest: 112, length: 69, shoulder: 47, sleeves: 65, stomach: 107 },
//     { size: 'L(40)', chest: 102, jacketChest: 117, length: 70, shoulder: 48, sleeves: 65, stomach: 112 },
//     { size: 'XL(42)', chest: 107, jacketChest: 122, length: 71, shoulder: 48, sleeves: 66, stomach: 117 },
//     { size: '2XL(44)', chest: 112, jacketChest: 130, length: 74, shoulder: 51, sleeves: 67, stomach: 124 },
//     { size: '3XL(46)', chest: 117, jacketChest: 137, length: 75, shoulder: 53, sleeves: 67, stomach: 132 },
//     { size: '4XL(48)', chest: 122, jacketChest: 147, length: 76, shoulder: 56, sleeves: 67, stomach: 142 },
//   ];

//   const convertValue = (val) => {
//     return unit === 'inch' ? (val * CM_TO_INCH).toFixed(1) + ' in' : val + ' cm';
//   };

//   return (
//     <div ref={modalRef} onClick={closeModal} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
//       <div className="bg-white text-black rounded-xl p-4 md:p-6 flex flex-col items-center gap-4 w-full max-w-4xl mx-2 max-h-[90vh] overflow-y-auto">
//         <button onClick={onclose} className="self-end">
//           <X size={30} />
//         </button>
//         <h1 className="text-2xl font-medium">Size Guide</h1>
//         <div className="flex justify-center items-center space-x-4">
//           <label className="flex items-center space-x-2 cursor-pointer">
//             <input
//               type="radio"
//               name="unit"
//               value="inch"
//               checked={unit === 'inch'}
//               onChange={() => setUnit('inch')}
//             />
//             <span>Inch</span>
//           </label>
//           <label className="flex items-center space-x-2 cursor-pointer">
//             <input
//               type="radio"
//               name="unit"
//               value="cm"
//               checked={unit === 'cm'}
//               onChange={() => setUnit('cm')}
//             />
//             <span>cm</span>
//           </label>
//         </div>
//         {/* Illustrations */}
//         <div className="grid grid-cols-5 gap-2 justify-items-center w-full overflow-x-auto">
//           <div><img className='w-20 md:w-32' src={assets.size_leather_1} alt="Size Icon" /></div>
//           <div><img className='w-20 md:w-32' src={assets.size_leather_2} alt="Chest Icon" /></div>
//           <div><img className='w-20 md:w-32' src={assets.size_leather_3} alt="Length Icon" /></div>
//           <div><img className='w-20 md:w-32' src={assets.size_leather_4} alt="Shoulder Icon" /></div>
//           <div><img className='w-20 md:w-32' src={assets.size_leather_5} alt="Sleeves Icon" /></div>
//         </div>
//         {/* Table */}
//         <div className="w-full overflow-x-auto">
//           <table className="min-w-max table-auto border border-gray-300">
//             <thead className="bg-gray-200 text-gray-700">
//               <tr>
//                 <th className="border p-2 sticky left-0 bg-gray-200 z-10">Size</th>
//                 <th className="border p-2 sticky left-[80px] bg-gray-200 z-10 min-w-[80px]">Suitable For Chest</th>
//                 <th className="border p-2 min-w-[80px]">Jacket Chest</th>
//                 <th className="border p-2 min-w-[80px]">Jacket Length</th>
//                 <th className="border p-2 min-w-[80px]">Jacket Shoulder</th>
//                 <th className="border p-2 min-w-[80px]">Jacket Sleeves</th>
//                 <th className="border p-2 min-w-[80px]">Jacket Stomach</th>
//               </tr>
//             </thead>
//             <tbody className="text-center">
//               {sizeData.map((row, idx) => (
//                 <tr key={idx} className="hover:bg-gray-50">
//                   <td className="border p-2 sticky left-0 bg-white z-10">{row.size}</td>
//                   <td className="border p-2 sticky left-[80px] bg-white z-10">{convertValue(row.chest)}</td>
//                   <td className="border p-2">{convertValue(row.jacketChest)}</td>
//                   <td className="border p-2">{convertValue(row.length)}</td>
//                   <td className="border p-2">{convertValue(row.shoulder)}</td>
//                   <td className="border p-2">{convertValue(row.sleeves)}</td>
//                   <td className="border p-2">{convertValue(row.stomach)}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;


import React, { useRef, useState } from 'react';
import { assets } from '../assets/assets';

/* ─────────────────────────────────────────────────────────────
   SIZE DATA  (original — untouched)
───────────────────────────────────────────────────────────── */
const sizeData = [
  { size: 'XS(34)', chest: 86, jacketChest: 102, length: 65, shoulder: 44, sleeves: 62, stomach: 97 },
  { size: 'S(36)', chest: 91, jacketChest: 107, length: 66, shoulder: 46, sleeves: 64, stomach: 102 },
  { size: 'M(38)', chest: 97, jacketChest: 112, length: 69, shoulder: 47, sleeves: 65, stomach: 107 },
  { size: 'L(40)', chest: 102, jacketChest: 117, length: 70, shoulder: 48, sleeves: 65, stomach: 112 },
  { size: 'XL(42)', chest: 107, jacketChest: 122, length: 71, shoulder: 48, sleeves: 66, stomach: 117 },
  { size: '2XL(44)', chest: 112, jacketChest: 130, length: 74, shoulder: 51, sleeves: 67, stomach: 124 },
  { size: '3XL(46)', chest: 117, jacketChest: 137, length: 75, shoulder: 53, sleeves: 67, stomach: 132 },
  { size: '4XL(48)', chest: 122, jacketChest: 147, length: 76, shoulder: 56, sleeves: 67, stomach: 142 },
];

const CM_TO_INCH = 0.393701;

const columns = [
  { key: 'chest', label: 'Suit. Chest' },
  { key: 'jacketChest', label: 'Jacket Chest' },
  { key: 'length', label: 'Length' },
  { key: 'shoulder', label: 'Shoulder' },
  { key: 'sleeves', label: 'Sleeves' },
  { key: 'stomach', label: 'Stomach' },
];

/* ─────────────────────────────────────────────────────────────
   STYLES
───────────────────────────────────────────────────────────── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap');

  @keyframes mdUp   { from{opacity:0;transform:translateY(24px) scale(0.97)} to{opacity:1;transform:translateY(0) scale(1)} }
  @keyframes mdFade { from{opacity:0} to{opacity:1} }
  @keyframes shimmer{
    0%  {background-position:-500px 0}
    100%{background-position: 500px 0}
  }

  .md-overlay {
    position:fixed; inset:0; z-index:9999;
    background:rgba(0,0,0,0.78);
    backdrop-filter:blur(6px);
    display:flex; align-items:center; justify-content:center;
    padding:16px;
    animation:mdFade 0.25s ease both;
  }

  .md-card {
    background:linear-gradient(160deg,#1e120a,#150c05);
    border:1px solid rgba(200,151,58,0.22);
    border-radius:14px; overflow:hidden;
    width:100%; max-width:860px;
    max-height:90vh; display:flex; flex-direction:column;
    box-shadow:0 40px 100px rgba(0,0,0,0.8);
    animation:mdUp 0.42s cubic-bezier(0.16,1,0.3,1) both;
  }

  /* Header */
  .md-header {
    display:flex; align-items:center; justify-content:space-between;
    padding:20px 26px 18px; flex-shrink:0;
    border-bottom:1px solid rgba(200,151,58,0.12);
  }

  /* Close btn */
  .md-close {
    width:34px; height:34px; border-radius:50%;
    display:flex; align-items:center; justify-content:center;
    background:rgba(200,151,58,0.07);
    border:1px solid rgba(200,151,58,0.2);
    color:rgba(200,151,58,0.6); cursor:pointer;
    transition:all 0.2s; flex-shrink:0;
  }
  .md-close:hover {
    background:rgba(200,30,30,0.12); border-color:rgba(248,113,113,0.4);
    color:#f87171; transform:scale(1.08);
  }

  /* Unit toggle */
  .md-unit-btn {
    padding:7px 18px; border-radius:6px;
    font-size:9px; letter-spacing:0.2em;
    font-family:Montserrat,sans-serif; font-weight:600;
    cursor:pointer; border:1px solid rgba(200,151,58,0.22);
    background:transparent; color:rgba(200,151,58,0.5);
    transition:all 0.2s;
  }
  .md-unit-btn.active {
    background:linear-gradient(135deg,#c8973a,#f7c568);
    color:#1a0f0a; border-color:transparent;
    box-shadow:0 3px 12px rgba(200,151,58,0.3);
  }
  .md-unit-btn:not(.active):hover { border-color:rgba(200,151,58,0.4); color:rgba(200,151,58,0.8); }

  /* Scrollable body */
  .md-body {
    flex:1; overflow-y:auto; padding:22px 26px;
  }
  .md-body::-webkit-scrollbar { width:5px; }
  .md-body::-webkit-scrollbar-track { background:rgba(200,151,58,0.04); }
  .md-body::-webkit-scrollbar-thumb { background:rgba(200,151,58,0.2); border-radius:10px; }

  /* Illustration strip */
  .md-illu-wrap {
    display:grid; grid-template-columns:repeat(5,1fr);
    gap:10px; margin-bottom:24px;
  }
  .md-illu-card {
    background:rgba(200,151,58,0.05);
    border:1px solid rgba(200,151,58,0.12); border-radius:8px;
    padding:8px; text-align:center;
    transition:border-color 0.22s;
  }
  .md-illu-card:hover { border-color:rgba(200,151,58,0.3); }

  /* Table */
  .md-table-wrap {
    overflow-x:auto; border-radius:8px;
    border:1px solid rgba(200,151,58,0.14);
  }
  .md-table-wrap::-webkit-scrollbar { height:5px; }
  .md-table-wrap::-webkit-scrollbar-track { background:rgba(200,151,58,0.04); }
  .md-table-wrap::-webkit-scrollbar-thumb { background:rgba(200,151,58,0.2); border-radius:10px; }

  .md-table {
    width:100%; border-collapse:collapse; min-width:580px;
  }
  .md-table thead tr {
    background:rgba(200,151,58,0.1);
  }
  .md-table th {
    padding:11px 14px; text-align:center;
    font-size:8px; letter-spacing:0.22em;
    font-family:Montserrat,sans-serif; font-weight:700;
    color:#c8973a; white-space:nowrap;
    border-bottom:1px solid rgba(200,151,58,0.18);
  }
  .md-table th:first-child { text-align:left; padding-left:18px; }
  .md-table td {
    padding:10px 14px; text-align:center;
    font-size:12px; color:rgba(240,220,190,0.75);
    font-family:'Cormorant Garamond',Georgia,serif;
    border-bottom:1px solid rgba(200,151,58,0.07);
    transition:background 0.15s;
    white-space:nowrap;
  }
  .md-table td:first-child {
    text-align:left; padding-left:18px;
    font-size:13px; color:#f0ddc0; font-weight:500;
    position:sticky; left:0;
    background:linear-gradient(160deg,#1e120a,#150c05);
    border-right:1px solid rgba(200,151,58,0.1);
  }
  .md-table tbody tr:hover td { background:rgba(200,151,58,0.04); }
  .md-table tbody tr:hover td:first-child { background:rgba(200,151,58,0.06); }
  .md-table tbody tr:last-child td { border-bottom:none; }
`;

/* ── Icons ── */
const IcoX = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const IcoRuler = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M2 8h20v8H2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M6 8v4M10 8v3M14 8v4M18 8v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const illuLabels = ['Size', 'Chest', 'Length', 'Shoulder', 'Sleeves'];
const illuImgs = ['size_leather_1', 'size_leather_2', 'size_leather_3', 'size_leather_4', 'size_leather_5'];

/* ══════════════════════════════════════════
   MODAL
══════════════════════════════════════════ */
const Modal = ({ onclose }) => {
  const overlayRef = useRef();
  const [unit, setUnit] = useState('inch');

  /* click-outside to close */
  const handleOverlayClick = (e) => {
    if (overlayRef.current === e.target) onclose();
  };

  const fmt = (val) =>
    unit === 'inch'
      ? `${(val * CM_TO_INCH).toFixed(1)}"`
      : `${val} cm`;

  return (
    <>
      <style>{STYLES}</style>

      <div className="md-overlay" ref={overlayRef} onClick={handleOverlayClick}>
        <div className="md-card">

          {/* Gold top bar */}
          <div style={{ height: 2, background: 'linear-gradient(to right,transparent,#c8973a 30%,#f7c568 50%,#c8973a 70%,transparent)', opacity: 0.7, flexShrink: 0 }} />

          {/* ── Header ── */}
          <div className="md-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 34, height: 34, borderRadius: '50%',
                background: 'linear-gradient(135deg,#c8973a,#f7c568)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
              }}>
                <IcoRuler />
              </div>
              <div>
                <p style={{
                  fontSize: 8, letterSpacing: '0.42em', color: '#c8973a',
                  fontFamily: 'Montserrat,sans-serif', fontWeight: 700, marginBottom: 2
                }}>
                  D DOLLY LAMB
                </p>
                <h2 style={{
                  fontSize: 'clamp(1.1rem,2.5vw,1.5rem)', color: '#f7c568',
                  fontFamily: "'Cormorant Garamond',serif", fontWeight: 400,
                  letterSpacing: '0.06em', margin: 0
                }}>
                  Size Guide
                </h2>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {/* Unit toggle */}
              <div style={{ display: 'flex', gap: 6 }}>
                <button className={`md-unit-btn ${unit === 'inch' ? 'active' : ''}`}
                  onClick={() => setUnit('inch')}>INCH</button>
                <button className={`md-unit-btn ${unit === 'cm' ? 'active' : ''}`}
                  onClick={() => setUnit('cm')}>CM</button>
              </div>
              {/* Close */}
              <button className="md-close" onClick={onclose}><IcoX /></button>
            </div>
          </div>

          {/* ── Scrollable body ── */}
          <div className="md-body">

            {/* Instruction */}
            <p style={{
              fontSize: 13, color: 'rgba(240,220,190,0.55)',
              fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic',
              lineHeight: 1.7, marginBottom: 20
            }}>
              All measurements refer to the finished garment. For the best fit, choose your size based on your chest measurement and cross-reference with our size chart below.
            </p>

            {/* Illustrations */}
            <div className="md-illu-wrap">
              {illuImgs.map((key, i) => (
                <div key={i} className="md-illu-card">
                  <img
                    src={assets[key]}
                    alt={illuLabels[i]}
                    style={{ width: '100%', maxWidth: 88, height: 80, objectFit: 'contain', margin: '0 auto', display: 'block' }}
                  />
                  <p style={{
                    fontSize: 8, color: 'rgba(200,151,58,0.55)',
                    fontFamily: 'Montserrat,sans-serif', letterSpacing: '0.16em',
                    marginTop: 6, textTransform: 'uppercase'
                  }}>
                    {illuLabels[i]}
                  </p>
                </div>
              ))}
            </div>

            {/* Unit note */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right,rgba(200,151,58,0.15),transparent)' }} />
              <span style={{
                fontSize: 8, color: 'rgba(200,151,58,0.4)', fontFamily: 'Montserrat,sans-serif',
                letterSpacing: '0.24em', whiteSpace: 'nowrap'
              }}>
                MEASUREMENTS IN {unit === 'inch' ? 'INCHES' : 'CENTIMETRES'}
              </span>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(to left,rgba(200,151,58,0.15),transparent)' }} />
            </div>

            {/* Table */}
            <div className="md-table-wrap">
              <table className="md-table">
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left', paddingLeft: 18 }}>SIZE</th>
                    {columns.map(c => (
                      <th key={c.key}>{c.label.toUpperCase()}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sizeData.map((row, i) => (
                    <tr key={i}>
                      <td>{row.size}</td>
                      {columns.map(c => (
                        <td key={c.key}>{fmt(row[c.key])}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer note */}
            <p style={{
              fontSize: 11, color: 'rgba(240,220,190,0.35)',
              fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic',
              textAlign: 'center', marginTop: 20, lineHeight: 1.6
            }}>
              Measurements may vary slightly due to the handcrafted nature of our products. For a bespoke fit, contact our atelier directly.
            </p>

          </div>

          {/* Bottom gold bar */}
          <div style={{ height: 1, background: 'linear-gradient(to right,transparent,rgba(200,151,58,0.15),transparent)', flexShrink: 0 }} />
        </div>
      </div>
    </>
  );
};

export default Modal;