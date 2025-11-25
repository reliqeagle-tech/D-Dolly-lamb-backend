
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

import React, { useState, useEffect } from "react";

const JacketCustomization = ({ basePrice = 36, onPriceChange }) => {
  const [showCustomization, setShowCustomization] = useState(false);
  const [showHardware, setShowHardware] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [selectedLining, setSelectedLining] = useState("Default");
  const [selectedQuilted, setSelectedQuilted] = useState("NO");
  const [selectedHardware, setSelectedHardware] = useState("Antique Brass");
  const [comment, setComment] = useState("");
  const [displayPrice, setDisplayPrice] = useState(basePrice);

  // 🧵 Jacket lining options
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

  // 🧵 Quilted lining options
  const quantityLining = [
    { name: "NO", price: 0, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/no_quiltedlining.jpg" },
    { name: "Normal", price: 45, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/quiltedlining.jpg" },
    { name: "Thinsulate Body Warmer", price: 70, img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/thinsulate_quiltedlining.jpg" },
  ];

  // ⚙️ Hardware options
  const hardwareColor = [
    { name: "Antique Brass", img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/antiquebrasshardware.jpg" },
    { name: "Antique Silver", img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/antiquesilverhardware.jpg" },
    { name: "Silver", img: "https://cdn.shopify.com/s/files/1/0623/6992/3156/files/silverhardware.jpg" },
  ];

  // 🧮 Update price dynamically
  useEffect(() => {
    const liningPrice = linings.find(l => l.name === selectedLining)?.price || 0;
    const quiltedPrice = quantityLining.find(q => q.name === selectedQuilted)?.price || 0;
    const total = basePrice + liningPrice + quiltedPrice;
    setDisplayPrice(total);

    // optional: notify parent
    if (onPriceChange) onPriceChange(total);
  }, [selectedLining, selectedQuilted]);

  // 💬 Comment input handler
  const handleCommentChange = (e) => {
    if (e.target.value.length <= 600) {
      setComment(e.target.value);
    }
  };

  return (
    <div className="p-6 bg-white text-center rounded-lg w-full max-w-4xl mx-auto mt-2 px-10">

      {/* Toggle Button */}
      <button
        onClick={() => setShowCustomization(!showCustomization)}
        className="w-[98%] border rounded-md py-2.5 font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all"
      >
        {showCustomization ? "HIDE CUSTOMIZATION ▲" : "ADVANCED CUSTOMIZATION ▼"}
      </button>

      {showCustomization && (
        <div className="mt-6 border-t pt-4">
                {/* 💰 Show dynamic price */}
      <p className="mt-4 text-xl font-semibold text-gray-800">
        Total Price: ${displayPrice.toFixed(2)}
      </p>
          {/* Jacket Lining */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">
              Jacket Lining: <span className="text-gray-500">{selectedLining}</span>
            </h3>
          </div>

          <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 mt-4 max-h-[400px] overflow-y-scroll p-2 mb-6">
            {linings.map((lining, index) => (
              <label
                key={index}
                className={`relative border rounded-lg cursor-pointer overflow-hidden group transition-all duration-200 ${
                  selectedLining === lining.name ? "ring-2 ring-gray-800" : "hover:ring-1 hover:ring-gray-400"
                }`}
              >
                <img src={lining.img} alt={lining.name} className="w-full h-20 object-cover" />
                <input
                  type="radio"
                  name="jacketLining"
                  value={lining.name}
                  checked={selectedLining === lining.name}
                  onChange={() => setSelectedLining(lining.name)}
                  className="absolute top-2 left-2 accent-black"
                />
                <div className="text-center text-xs py-2">
                  <p>
                    {lining.name} {lining.price > 0 && <span>(+${lining.price})</span>}
                  </p>
                </div>
              </label>
            ))}
          </div>

          {/* Quilted Lining */}
          <div className="flex justify-between items-center mb-4 mt-6 border-t pt-4">
            <h3 className="text-lg font-semibold">
              Quilted Lining: <span className="text-gray-500">{selectedQuilted}</span>
            </h3>
          </div>

          <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 mt-4 max-h-[400px] overflow-y-scroll p-2 mb-6">
            {quantityLining.map((lining, index) => (
              <label
                key={index}
                className={`relative border rounded-lg cursor-pointer overflow-hidden group transition-all duration-200 ${
                  selectedQuilted === lining.name ? "ring-2 ring-gray-800" : "hover:ring-1 hover:ring-gray-400"
                }`}
              >
                <img src={lining.img} alt={lining.name} className="w-full h-20 object-cover" />
                <input
                  type="radio"
                  name="quiltedLining"
                  value={lining.name}
                  checked={selectedQuilted === lining.name}
                  onChange={() => setSelectedQuilted(lining.name)}
                  className="absolute top-2 left-2 accent-black"
                />
                <div className="text-center text-xs py-2">
                  <p>
                    {lining.name} {lining.price > 0 && <span>(+${lining.price})</span>}
                  </p>
                </div>
              </label>
            ))}
          </div>

          {/* Hardware Section */}
          <div
            className="flex justify-between items-center mb-8 cursor-pointer hover:bg-gray-50 px-2 rounded mt-6 border-t pt-4"
            onClick={() => setShowHardware(!showHardware)}
          >
            <h3 className="text-lg font-semibold">
              Hardware Color: <span className="text-gray-500">{selectedHardware}</span>
            </h3>
            <span className="text-gray-400">{showHardware ? "▲" : "▼"}</span>
          </div>

          {showHardware && (
            <div className="mb-6">
              <p className="text-left text-sm">Please choose hardware color.</p>
              <p className="text-left text-xs mb-2">
                2-way zippers have two pulls, allowing you to keep the garment zipped while leaving the lower portion open.
              </p>
              <div className="grid grid-cols-3 gap-4 max-h-[400px] overflow-y-scroll p-2">
                {hardwareColor.map((hardware, index) => (
                  <label
                    key={index}
                    className={`relative border rounded-lg cursor-pointer overflow-hidden group transition-all duration-200 ${
                      selectedHardware === hardware.name ? "ring-2 ring-gray-800" : "hover:ring-1 hover:ring-gray-400"
                    }`}
                  >
                    <img src={hardware.img} alt={hardware.name} className="w-full h-20 object-cover" />
                    <input
                      type="radio"
                      name="hardware"
                      value={hardware.name}
                      checked={selectedHardware === hardware.name}
                      onChange={() => setSelectedHardware(hardware.name)}
                      className="absolute top-2 left-2 accent-black"
                    />
                    <div className="text-center text-xs py-2">
                      <p>{hardware.name}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Comments Section */}
          <button
            onClick={() => setShowComment(!showComment)}
            className="w-full bg-gray-50 border border-gray-200 text-gray-700 font-medium py-2 rounded-md hover:bg-gray-100 transition-colors mb-4"
          >
            {showComment ? "HIDE COMMENTS ▲" : "COMMENTS ▼"}
          </button>

          

          {showComment && (
            <div className="border border-gray-300 rounded-md">
              <div className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-t-md">
                <h4 className="text-sm font-medium text-gray-700">Comments</h4>
              </div>
              <textarea
                value={comment}
                onChange={handleCommentChange}
                placeholder="Enter your comments here..."
                className="w-full px-4 py-3 border-0 rounded-b-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px] text-sm"
                rows={4}
                maxLength={600}
              />
              <div className="text-right px-4 pt-1 pb-2 text-xs text-gray-400">
                {600 - comment.length} characters remaining
              </div>
            </div>
          )}

          {/* Scroll back to top */}
          <button
            onClick={() => {
              setShowCustomization(!showCustomization);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="w-full pt-4 font-medium text-gray-500 underline hover:text-gray-700 hover:no-underline transition-all"
          >
            {showCustomization ? "HIDE CUSTOMIZATION ▲" : "ADVANCED CUSTOMIZATION ▼"}
          </button>
        </div>
      )}
    </div>
  );
};

export default JacketCustomization;
