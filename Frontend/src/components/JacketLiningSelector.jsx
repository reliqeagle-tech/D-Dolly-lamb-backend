
// import React, { useState } from "react";

// const JacketCustomization = () => {
//     const [showCustomization, setShowCustomization] = useState(false);
//     const [showHardware, setShowHardware] = useState(false);
//     const [showComment, setShowComment] = useState(false);
//     const [selectedLining, setSelectedLining] = useState("Default");
//     const [selectedQuilted, setSelectedQuilted] = useState("NO");
//     const [selectedHardware, setSelectedHardware] = useState("Antique Brass");
//     const [comment, setComment] = useState(''); // New: State for comments

//     const linings = [
//         { name: "Default", price: 0, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/default_lt_lining.jpg" },
//         { name: "Red", price: 20, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/red_satin.jpg" },
//         { name: "Steel Gray", price: 20, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/steelgraylining100x100.jpg" },
//         { name: "Golden Beige", price: 20, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/golden_beige.jpg" },
//         { name: "Wine", price: 20, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/wine_lining.jpg" },
//         { name: "Electric Blue", price: 20, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/fizzblue_lining.jpg" },
//         { name: "Turkish Blue", price: 20, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/turkishblue_lining.jpg" },
//         { name: "Tan Brown", price: 20, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/tan_brown_satin100x100.jpg" },
//         { name: "Green", price: 20, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/greenlining_LC.jpg" },
//         { name: "Jade Green", price: 20, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/jade_green_satin130x130.jpg" },
//         { name: "Black Stretch", price: 40, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/black.jpg" },
//         { name: "Purple Bemberg", price: 40, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/purplebemberg100x100.jpg" },
//         { name: "Wine Bemberg", price: 40, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/winebemberg100x100.jpg" },
//         { name: "Burgandy Bemberg", price: 40, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/burgandy_bemberg.jpg" },
//         { name: "Red Bemberg", price: 40, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/redbemberg100x100.jpg" },
//     ];

//     const quantityLining = [
//         { name: "NO", price: 20, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/no_quiltedlining.jpg" },
//         { name: "Normal", price: 45, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/quiltedlining.jpg" },
//         { name: "Thinsulate Body Warmer", price: 70, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/thinsulate_quiltedlining.jpg" },
//     ];

//     const hardwareColor = [
//         { name: "Antique Brass", img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/antiquebrasshardware.jpg" },
//         { name: "Antique Silver", img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/antiquesilverhardware.jpg" },
//         { name: "Silver", img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/silverhardware.jpg" },
//     ];

//     // New: Handle comment changes with max length
//     const handleCommentChange = (e) => {
//         if (e.target.value.length <= 600) {
//             setComment(e.target.value);
//         }
//     };

//     return (
//         <div className="p-6 bg-white text-center rounded-lg w-full max-w-4xl mx-auto mt-2">
//             {/* Advanced Customization Button */}
//             <button
//                 onClick={() => setShowCustomization(!showCustomization)}
//                 className="w-[98%] border rounded-md py-2.5  font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all"
//             >
//                 {showCustomization ? "HIDE CUSTOMIZATION ▲" : "ADVANCED CUSTOMIZATION ▼"}
//             </button>

//             {showCustomization && (
//                 <div className="mt-6 border-t pt-4">
//                     {/* Lining Section */}
//                     <div className="flex justify-between items-center mb-4">
//                         <h3 className="text-lg font-semibold">
//                             Jacket Lining: <span className="text-gray-500">{selectedLining}</span>
//                         </h3>
//                     </div>

//                     <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 mt-4 max-h-[400px] overflow-y-scroll p-2 mb-6">
//                         {linings.map((lining, index) => (
//                             <label
//                                 key={index}
//                                 className={`relative border rounded-lg cursor-pointer overflow-hidden group transition-all duration-200 ${selectedLining === lining.name
//                                     ? "ring-2 ring-gray-800"
//                                     : "hover:ring-1 hover:ring-gray-400"
//                                     }`}
//                             >
//                                 <img src={lining.img} alt={lining.name} className="w-full h-20 object-cover" />
//                                 <input
//                                     type="radio"
//                                     name="jacketLining"
//                                     value={lining.name}
//                                     checked={selectedLining === lining.name}
//                                     onChange={() => setSelectedLining(lining.name)}
//                                     className="absolute top-2 left-2 accent-black"
//                                 />
//                                 <div className="text-center text-xs py-2">
//                                     <p>
//                                         {lining.name} {lining.price > 0 && <span>(+${lining.price})</span>}
//                                     </p>
//                                 </div>
//                             </label>
//                         ))}
//                     </div>

//                     {/* Quilted Lining Section */}
//                     <div className="flex justify-between items-center mb-4 mt-6 border-t pt-4">
//                         <h3 className="text-lg font-semibold">
//                             Quilted Lining: <span className="text-gray-500">{selectedQuilted}</span>
//                         </h3>
//                     </div>

//                     <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 mt-4 max-h-[400px] overflow-y-scroll p-2 mb-6">
//                         {quantityLining.map((lining, index) => (
//                             <label
//                                 key={index}
//                                 className={`relative border rounded-lg cursor-pointer overflow-hidden group transition-all duration-200 ${selectedQuilted === lining.name
//                                     ? "ring-2 ring-gray-800"
//                                     : "hover:ring-1 hover:ring-gray-400"
//                                     }`}
//                             >
//                                 <img src={lining.img} alt={lining.name} className="w-full h-20 object-cover" />
//                                 <input
//                                     type="radio"
//                                     name="quiltedLining"
//                                     value={lining.name}
//                                     checked={selectedQuilted === lining.name}
//                                     onChange={() => setSelectedQuilted(lining.name)}
//                                     className="absolute top-2 left-2 accent-black"
//                                 />
//                                 <div className="text-center text-xs py-2">
//                                     <p>
//                                         {lining.name} {lining.price > 0 && <span>(+${lining.price})</span>}
//                                     </p>
//                                 </div>
//                             </label>
//                         ))}
//                     </div>

//                     {/* Hardware Toggle - Fixed: Single header with clickable toggle */}
//                     <div
//                         className="flex justify-between items-center mb-8 cursor-pointer hover:bg-gray-50 px-2 rounded mt-6 border-t pt-4"
//                         onClick={() => setShowHardware(!showHardware)}
//                     >
//                         <h3 className="text-lg font-semibold">
//                             Hardware Color: <span className="text-gray-500">{selectedHardware}</span>
//                         </h3>
//                         <span className="text-gray-400">{showHardware ? "▲" : "▼"}</span>
//                     </div>

//                     {/* Hardware Section */}
//                     {showHardware && (
//                         <div className="mb-6">
//                             <p className="text-left text-sm">Please choose hardware color.</p>
//                             <p className="text-left text-xs mb-2">2-way zippers have two pulls, allows the wearer to keep the garment zipped while leaving the lower portion open.</p>
//                             <div className="grid grid-cols-3 gap-4 max-h-[400px] overflow-y-scroll p-2">
//                                 {hardwareColor.map((hardware, index) => (
//                                     <label
//                                         key={index}
//                                         className={`relative border rounded-lg cursor-pointer overflow-hidden group transition-all duration-200 ${selectedHardware === hardware.name
//                                             ? "ring-2 ring-gray-800"
//                                             : "hover:ring-1 hover:ring-gray-400"
//                                             }`}
//                                     >
//                                         <img src={hardware.img} alt={hardware.name} className="w-full h-20 object-cover" />
//                                         <input
//                                             type="radio"
//                                             name="hardware"
//                                             value={hardware.name}
//                                             checked={selectedHardware === hardware.name}
//                                             onChange={() => setSelectedHardware(hardware.name)}
//                                             className="absolute top-2 left-2 accent-black"
//                                         />
//                                         <div className="text-center text-xs py-2">
//                                             <p>{hardware.name}</p>
//                                         </div>
//                                     </label>
//                                 ))}
//                             </div>
//                         </div>
//                     )}

//                     {/* Comments Toggle - Fixed: Correct button text */}
//                     <button
//                         onClick={() => setShowComment(!showComment)}
//                         className="w-full bg-gray-50 border border-gray-200 text-gray-700 font-medium py-2 rounded-md hover:bg-gray-100 transition-colors mb-4"
//                     >
//                         {showComment ? "HIDE COMMENTS ▲" : "COMMENTS ▼"}
//                     </button>

//                     {/* Comments Section - New: Integrated functionality */}
//                     {showComment && (
//                         <div className="border border-gray-300 rounded-md">
//                             {/* Header */}
//                             <div className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-t-md">
//                                 <h4 className="text-sm font-medium text-gray-700">Comments</h4>
//                             </div>
//                             {/* Textarea */}
//                             <textarea
//                                 value={comment}
//                                 onChange={handleCommentChange}
//                                 placeholder="Enter your comments here..."
//                                 className="w-full px-4 py-3 border-0 rounded-b-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px] text-sm"
//                                 rows={4}
//                                 maxLength={600}
//                             />

//                             {/* Character Counter */}
//                             <div className="text-right px-4 pt-1 pb-2 text-xs text-gray-400">
//                                 {600 - comment.length} characters remaining
//                             </div>
//                         </div>
//                     )}
//                     <button
//                 onClick={() => {
//     setShowCustomization(!showCustomization);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }}
//                 className="w-full pt-4 font-medium text-gray-500 underline hover:text-gray-700 hover:no-underline transition-all"
//             >
//                 {showCustomization ? "HIDE CUSTOMIZATION ▲" : "ADVANCED CUSTOMIZATION ▼"}

//             </button>
//                 </div>

//             )}

//         </div>
//     );
// };

// export default JacketCustomization;



// import React, { useState, useEffect } from "react";

// const JacketCustomization = ({ basePrice = 36, onPriceChange }) => {
//   const [showCustomization, setShowCustomization] = useState(false);
//   const [showHardware, setShowHardware] = useState(false);
//   const [showComment, setShowComment] = useState(false);
//   const [selectedLining, setSelectedLining] = useState("Default");
//   const [selectedQuilted, setSelectedQuilted] = useState("NO");
//   const [selectedHardware, setSelectedHardware] = useState("Antique Brass");
//   const [comment, setComment] = useState("");
//   const [displayPrice, setDisplayPrice] = useState(basePrice);

//   // 🧵 Jacket lining options
//   const linings = [
//     { name: "Default", price: 0, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/default_lt_lining.jpg" },
//     { name: "Red", price: 20, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/red_satin.jpg" },
//     { name: "Steel Gray", price: 20, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/steelgraylining100x100.jpg" },
//     { name: "Golden Beige", price: 20, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/golden_beige.jpg" },
//     { name: "Wine", price: 20, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/wine_lining.jpg" },
//     { name: "Electric Blue", price: 20, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/fizzblue_lining.jpg" },
//     { name: "Turkish Blue", price: 20, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/turkishblue_lining.jpg" },
//     { name: "Tan Brown", price: 20, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/tan_brown_satin100x100.jpg" },
//     { name: "Green", price: 20, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/greenlining_LC.jpg" },
//     { name: "Jade Green", price: 20, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/jade_green_satin130x130.jpg" },
//     { name: "Black Stretch", price: 40, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/black.jpg" },
//     { name: "Purple Bemberg", price: 40, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/purplebemberg100x100.jpg" },
//     { name: "Wine Bemberg", price: 40, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/winebemberg100x100.jpg" },
//     { name: "Burgandy Bemberg", price: 40, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/burgandy_bemberg.jpg" },
//     { name: "Red Bemberg", price: 40, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/redbemberg100x100.jpg" },
//   ];

//   // 🧵 Quilted lining options
//   const quantityLining = [
//     { name: "NO", price: 0, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/no_quiltedlining.jpg" },
//     { name: "Normal", price: 45, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/quiltedlining.jpg" },
//     { name: "Thinsulate Body Warmer", price: 70, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/thinsulate_quiltedlining.jpg" },
//   ];

//   // ⚙️ Hardware options
//   const hardwareColor = [
//     { name: "Antique Brass", img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/antiquebrasshardware.jpg" },
//     { name: "Antique Silver", img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/antiquesilverhardware.jpg" },
//     { name: "Silver", img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/silverhardware.jpg" },
//   ];

//   // 🧮 Update price dynamically
//   useEffect(() => {
//     const liningPrice = linings.find(l => l.name === selectedLining)?.price || 0;
//     const quiltedPrice = quantityLining.find(q => q.name === selectedQuilted)?.price || 0;
//     const total = basePrice + liningPrice + quiltedPrice;
//     setDisplayPrice(total);

//     // optional: notify parent
//     if (onPriceChange) onPriceChange(total);
//   }, [selectedLining, selectedQuilted]);

//   // 💬 Comment input handler
//   const handleCommentChange = (e) => {
//     if (e.target.value.length <= 600) {
//       setComment(e.target.value);
//     }
//   };

//   return (
//     <div className="p-6 bg-white text-center rounded-lg w-full max-w-4xl mx-auto mt-2 px-10">

//       {/* Toggle Button */}
//       <button
//         onClick={() => setShowCustomization(!showCustomization)}
//         className="w-[98%] border rounded-md py-2.5 font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all"
//       >
//         {showCustomization ? "HIDE CUSTOMIZATION ▲" : "ADVANCED CUSTOMIZATION ▼"}
//       </button>

//       {showCustomization && (
//         <div className="mt-6 border-t pt-4">
//                 {/* 💰 Show dynamic price */}
//       <p className="mt-4 text-xl font-semibold text-gray-800">
//         Total Price: ${displayPrice.toFixed(2)}
//       </p>
//           {/* Jacket Lining */}
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-lg font-semibold">
//               Jacket Lining: <span className="text-gray-500">{selectedLining}</span>
//             </h3>
//           </div>

//           <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 mt-4 max-h-[400px] overflow-y-scroll p-2 mb-6">
//             {linings.map((lining, index) => (
//               <label
//                 key={index}
//                 className={`relative border rounded-lg cursor-pointer overflow-hidden group transition-all duration-200 ${
//                   selectedLining === lining.name ? "ring-2 ring-gray-800" : "hover:ring-1 hover:ring-gray-400"
//                 }`}
//               >
//                 <img src={lining.img} alt={lining.name} className="w-full h-20 object-cover" />
//                 <input
//                   type="radio"
//                   name="jacketLining"
//                   value={lining.name}
//                   checked={selectedLining === lining.name}
//                   onChange={() => setSelectedLining(lining.name)}
//                   className="absolute top-2 left-2 accent-black"
//                 />
//                 <div className="text-center text-xs py-2">
//                   <p>
//                     {lining.name} {lining.price > 0 && <span>(+${lining.price})</span>}
//                   </p>
//                 </div>
//               </label>
//             ))}
//           </div>

//           {/* Quilted Lining */}
//           <div className="flex justify-between items-center mb-4 mt-6 border-t pt-4">
//             <h3 className="text-lg font-semibold">
//               Quilted Lining: <span className="text-gray-500">{selectedQuilted}</span>
//             </h3>
//           </div>

//           <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 mt-4 max-h-[400px] overflow-y-scroll p-2 mb-6">
//             {quantityLining.map((lining, index) => (
//               <label
//                 key={index}
//                 className={`relative border rounded-lg cursor-pointer overflow-hidden group transition-all duration-200 ${
//                   selectedQuilted === lining.name ? "ring-2 ring-gray-800" : "hover:ring-1 hover:ring-gray-400"
//                 }`}
//               >
//                 <img src={lining.img} alt={lining.name} className="w-full h-20 object-cover" />
//                 <input
//                   type="radio"
//                   name="quiltedLining"
//                   value={lining.name}
//                   checked={selectedQuilted === lining.name}
//                   onChange={() => setSelectedQuilted(lining.name)}
//                   className="absolute top-2 left-2 accent-black"
//                 />
//                 <div className="text-center text-xs py-2">
//                   <p>
//                     {lining.name} {lining.price > 0 && <span>(+${lining.price})</span>}
//                   </p>
//                 </div>
//               </label>
//             ))}
//           </div>

//           {/* Hardware Section */}
//           <div
//             className="flex justify-between items-center mb-8 cursor-pointer hover:bg-gray-50 px-2 rounded mt-6 border-t pt-4"
//             onClick={() => setShowHardware(!showHardware)}
//           >
//             <h3 className="text-lg font-semibold">
//               Hardware Color: <span className="text-gray-500">{selectedHardware}</span>
//             </h3>
//             <span className="text-gray-400">{showHardware ? "▲" : "▼"}</span>
//           </div>

//           {showHardware && (
//             <div className="mb-6">
//               <p className="text-left text-sm">Please choose hardware color.</p>
//               <p className="text-left text-xs mb-2">
//                 2-way zippers have two pulls, allowing you to keep the garment zipped while leaving the lower portion open.
//               </p>
//               <div className="grid grid-cols-3 gap-4 max-h-[400px] overflow-y-scroll p-2">
//                 {hardwareColor.map((hardware, index) => (
//                   <label
//                     key={index}
//                     className={`relative border rounded-lg cursor-pointer overflow-hidden group transition-all duration-200 ${
//                       selectedHardware === hardware.name ? "ring-2 ring-gray-800" : "hover:ring-1 hover:ring-gray-400"
//                     }`}
//                   >
//                     <img src={hardware.img} alt={hardware.name} className="w-full h-20 object-cover" />
//                     <input
//                       type="radio"
//                       name="hardware"
//                       value={hardware.name}
//                       checked={selectedHardware === hardware.name}
//                       onChange={() => setSelectedHardware(hardware.name)}
//                       className="absolute top-2 left-2 accent-black"
//                     />
//                     <div className="text-center text-xs py-2">
//                       <p>{hardware.name}</p>
//                     </div>
//                   </label>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Comments Section */}
//           <button
//             onClick={() => setShowComment(!showComment)}
//             className="w-full bg-gray-50 border border-gray-200 text-gray-700 font-medium py-2 rounded-md hover:bg-gray-100 transition-colors mb-4"
//           >
//             {showComment ? "HIDE COMMENTS ▲" : "COMMENTS ▼"}
//           </button>



//           {showComment && (
//             <div className="border border-gray-300 rounded-md">
//               <div className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-t-md">
//                 <h4 className="text-sm font-medium text-gray-700">Comments</h4>
//               </div>
//               <textarea
//                 value={comment}
//                 onChange={handleCommentChange}
//                 placeholder="Enter your comments here..."
//                 className="w-full px-4 py-3 border-0 rounded-b-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px] text-sm"
//                 rows={4}
//                 maxLength={600}
//               />
//               <div className="text-right px-4 pt-1 pb-2 text-xs text-gray-400">
//                 {600 - comment.length} characters remaining
//               </div>
//             </div>
//           )}

//           {/* Scroll back to top */}
//           <button
//             onClick={() => {
//               setShowCustomization(!showCustomization);
//               window.scrollTo({ top: 0, behavior: "smooth" });
//             }}
//             className="w-full pt-4 font-medium text-gray-500 underline hover:text-gray-700 hover:no-underline transition-all"
//           >
//             {showCustomization ? "HIDE CUSTOMIZATION ▲" : "ADVANCED CUSTOMIZATION ▼"}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default JacketCustomization;



import React, { useState, useEffect } from "react";

/* ─────────────────────────────────────────────────────────────
   DATA  (original — untouched)
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

/* ─────────────────────────────────────────────────────────────
   STYLES
───────────────────────────────────────────────────────────── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap');

  @keyframes jcUp   { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
  @keyframes jcFade { from{opacity:0} to{opacity:1} }
  @keyframes jcShim {
    0%  {background-position:-500px 0}
    100%{background-position: 500px 0}
  }

  .jc-root { font-family:Georgia,serif; }

  /* ── Toggle button ── */
  .jc-toggle {
    width:100%; padding:14px 20px;
    background:linear-gradient(160deg,#1e120a,#150c05);
    border:1px solid rgba(200,151,58,0.25); border-radius:8px;
    color:#c8973a; cursor:pointer;
    font-size:9px; letter-spacing:0.3em;
    font-family:Montserrat,sans-serif; font-weight:700;
    display:flex; align-items:center; justify-content:space-between; gap:10px;
    transition:all 0.25s; position:relative; overflow:hidden;
  }
  .jc-toggle::before {
    content:''; position:absolute; inset:0;
    background:rgba(200,151,58,0.04);
    opacity:0; transition:opacity 0.2s;
  }
  .jc-toggle:hover { border-color:rgba(200,151,58,0.5); color:#f7c568; }
  .jc-toggle:hover::before { opacity:1; }

  /* ── Panel ── */
  .jc-panel {
    background:linear-gradient(160deg,#1a100a,#150c05);
    border:1px solid rgba(200,151,58,0.16); border-radius:8px;
    overflow:hidden;
    animation:jcUp 0.38s cubic-bezier(0.16,1,0.3,1) both;
  }

  /* ── Section header ── */
  .jc-sec-hdr {
    display:flex; align-items:center; justify-content:space-between;
    padding:14px 18px; cursor:pointer;
    border-bottom:1px solid rgba(200,151,58,0.1);
    transition:background 0.2s;
  }
  .jc-sec-hdr:hover { background:rgba(200,151,58,0.04); }

  /* ── Option tile ── */
  .jc-tile {
    border-radius:8px; overflow:hidden; cursor:pointer;
    border:2px solid rgba(200,151,58,0.12);
    background:#0e0804;
    transition:all 0.22s; position:relative;
  }
  .jc-tile:hover {
    border-color:rgba(200,151,58,0.42);
    transform:translateY(-2px);
    box-shadow:0 8px 24px rgba(0,0,0,0.5);
  }
  .jc-tile.selected {
    border-color:#f7c568;
    box-shadow:0 0 0 1px rgba(247,197,104,0.4), 0 6px 20px rgba(0,0,0,0.5);
  }
  .jc-tile img {
    width:100%; height:80px; object-fit:cover; display:block;
    transition:transform 0.4s ease;
  }
  .jc-tile:hover img { transform:scale(1.06); }
  .jc-tile-label {
    padding:6px 6px 8px; text-align:center;
    border-top:1px solid rgba(200,151,58,0.08);
  }

  /* ── Selected check overlay ── */
  .jc-check {
    position:absolute; top:6px; right:6px;
    width:20px; height:20px; border-radius:50%;
    background:linear-gradient(135deg,#c8973a,#f7c568);
    display:flex; align-items:center; justify-content:center;
    opacity:0; transform:scale(0.5);
    transition:all 0.22s;
  }
  .jc-tile.selected .jc-check { opacity:1; transform:scale(1); }

  /* ── Price total bar ── */
  .jc-total {
    display:flex; align-items:center; justify-content:space-between;
    padding:14px 18px;
    background:rgba(0,0,0,0.22);
    border-top:1px solid rgba(200,151,58,0.15);
  }

  /* ── Comment textarea ── */
  .jc-textarea {
    width:100%; background:rgba(200,151,58,0.04);
    border:1px solid rgba(200,151,58,0.18); border-top:none;
    padding:12px 16px; outline:none; resize:vertical;
    color:#f0ddc0; font-family:Montserrat,sans-serif; font-size:12px;
    min-height:100px; border-radius:0 0 6px 6px;
    transition:border-color 0.2s, box-shadow 0.2s;
  }
  .jc-textarea:focus { border-color:#c8973a; box-shadow:0 0 0 3px rgba(200,151,58,0.1); }
  .jc-textarea::placeholder { color:rgba(200,151,58,0.3); font-style:italic; }

  /* ── Scroll grid ── */
  .jc-grid {
    display:grid;
    grid-template-columns:repeat(auto-fill,minmax(100px,1fr));
    gap:10px;
    padding:16px 18px;
    max-height:340px;
    overflow-y:auto;
  }
  .jc-grid::-webkit-scrollbar { width:5px; }
  .jc-grid::-webkit-scrollbar-track { background:rgba(200,151,58,0.05); }
  .jc-grid::-webkit-scrollbar-thumb { background:rgba(200,151,58,0.25); border-radius:10px; }

  .jc-grid-sm {
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:10px;
    padding:16px 18px;
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
    <path d="M20 6L9 17l-5-5" stroke="#1a0f0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IcoDiamond = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="1" transform="rotate(45 12 12)"
      stroke="#c8973a" strokeWidth="1.3" fill="rgba(200,151,58,0.1)" />
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
  <div style={{ borderBottom: "1px solid rgba(200,151,58,0.1)" }}>
    <div className="jc-sec-hdr" onClick={onToggle}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ color: "rgba(200,151,58,0.6)" }}>{icon}</span>
        <div>
          <p style={{
            fontSize: 9, color: "#c8973a", letterSpacing: "0.26em",
            fontFamily: "Montserrat,sans-serif", fontWeight: 700, marginBottom: 2
          }}>{title}</p>
          <p style={{
            fontSize: 13, color: "#f0ddc0", fontFamily: "'Cormorant Garamond',serif",
            fontStyle: "italic"
          }}>{value}</p>
        </div>
      </div>
      <span style={{ color: "rgba(200,151,58,0.5)" }}><IcoChevron open={open} /></span>
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

  /* ── Original price logic — untouched ── */
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
                fontSize: 8, color: "#4ade80", fontFamily: "Montserrat,sans-serif",
                background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.25)",
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

            {/* Gold top bar */}
            <div style={{ height: 2, background: "linear-gradient(to right,transparent,#c8973a 30%,#f7c568 50%,#c8973a 70%,transparent)", opacity: 0.6 }} />

            {/* ── Price summary bar ── */}
            <div style={{
              padding: "14px 18px", background: "rgba(0,0,0,0.18)",
              borderBottom: "1px solid rgba(200,151,58,0.1)",
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <div>
                <p style={{
                  fontSize: 8, color: "#c8973a", letterSpacing: "0.32em",
                  fontFamily: "Montserrat,sans-serif", fontWeight: 700, marginBottom: 2
                }}>CUSTOMISATION TOTAL</p>
                <p style={{ fontSize: 10, color: "#8a6830", fontFamily: "Montserrat,sans-serif", letterSpacing: "0.1em" }}>
                  Base ${basePrice.toFixed(2)}
                  {liningExtra > 0 && ` + Lining $${liningExtra}`}
                  {quiltedExtra > 0 && ` + Quilted $${quiltedExtra}`}
                </p>
              </div>
              <p style={{
                fontSize: 26, color: "#f7c568", fontFamily: "'Cormorant Garamond',serif",
                fontWeight: 600, lineHeight: 1
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
                        fontSize: 8.5, color: "#f0ddc0", fontFamily: "Montserrat,sans-serif",
                        letterSpacing: "0.06em", marginBottom: 2
                      }}>{lining.name}</p>
                      <p style={{
                        fontSize: 8, fontFamily: "Montserrat,sans-serif",
                        color: lining.price > 0 ? "#4ade80" : "rgba(200,151,58,0.4)",
                        letterSpacing: "0.1em"
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
                        fontSize: 9, color: "#f0ddc0", fontFamily: "Montserrat,sans-serif",
                        letterSpacing: "0.06em", marginBottom: 2
                      }}>{lining.name}</p>
                      <p style={{
                        fontSize: 8, fontFamily: "Montserrat,sans-serif",
                        color: lining.price > 0 ? "#4ade80" : "rgba(200,151,58,0.4)",
                        letterSpacing: "0.1em"
                      }}>
                        {lining.price > 0 ? `+$${lining.price}` : "Included"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* ── Section 3: Hardware (accordion) ── */}
            <Section
              title="HARDWARE COLOUR"
              value={selectedHardware}
              icon={<IcoWrench />}
              open={showHardware}
              onToggle={() => setShowHardware(h => !h)}
            >
              <div style={{ padding: "0 18px 6px" }}>
                <p style={{
                  fontSize: 10, color: "rgba(240,220,190,0.5)", fontFamily: "'Cormorant Garamond',serif",
                  fontStyle: "italic", marginBottom: 4
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
                        fontSize: 9, color: "#f0ddc0", fontFamily: "Montserrat,sans-serif",
                        letterSpacing: "0.06em"
                      }}>{hw.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* ── Section 4: Comments (accordion) ── */}
            <div>
              <div className="jc-sec-hdr" onClick={() => setShowComment(c => !c)}
                style={{ borderBottom: showComment ? "none" : "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: "rgba(200,151,58,0.6)" }}><IcoComment /></span>
                  <div>
                    <p style={{
                      fontSize: 9, color: "#c8973a", letterSpacing: "0.26em",
                      fontFamily: "Montserrat,sans-serif", fontWeight: 700, marginBottom: 2
                    }}>SPECIAL INSTRUCTIONS</p>
                    <p style={{
                      fontSize: 13, color: comment ? "#f0ddc0" : "#8a6830",
                      fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic"
                    }}>
                      {comment ? `${comment.substring(0, 40)}${comment.length > 40 ? "…" : ""}` : "Any notes for the atelier?"}
                    </p>
                  </div>
                </div>
                <span style={{ color: "rgba(200,151,58,0.5)" }}><IcoChevron open={showComment} /></span>
              </div>

              {showComment && (
                <div style={{ padding: "0 18px 18px", animation: "jcFade 0.25s ease both" }}>
                  <div style={{
                    borderRadius: 6, overflow: "hidden",
                    border: "1px solid rgba(200,151,58,0.18)",
                  }}>
                    <div style={{
                      padding: "8px 14px",
                      background: "rgba(200,151,58,0.06)",
                      borderBottom: "1px solid rgba(200,151,58,0.18)",
                      display: "flex", alignItems: "center", justifyContent: "space-between"
                    }}>
                      <span style={{
                        fontSize: 8, color: "#c8973a", fontFamily: "Montserrat,sans-serif",
                        letterSpacing: "0.22em", fontWeight: 700
                      }}>YOUR NOTES</span>
                      <span style={{
                        fontSize: 8, color: "rgba(200,151,58,0.4)",
                        fontFamily: "Montserrat,sans-serif"
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

            {/* ── Bottom: collapse button ── */}
            <div style={{
              padding: "12px 18px", textAlign: "center",
              borderTop: "1px solid rgba(200,151,58,0.1)",
              background: "rgba(0,0,0,0.1)",
            }}>
              <button
                onClick={() => { setShowCustomization(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontSize: 8, color: "rgba(200,151,58,0.45)", letterSpacing: "0.22em",
                  fontFamily: "Montserrat,sans-serif", fontWeight: 600, textDecoration: "underline",
                  transition: "color 0.2s"
                }}
                onMouseEnter={e => e.target.style.color = "#c8973a"}
                onMouseLeave={e => e.target.style.color = "rgba(200,151,58,0.45)"}
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