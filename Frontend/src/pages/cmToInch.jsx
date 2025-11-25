import React, { useState } from "react";

const CmInchConverter = () => {
  const [cm, setCm] = useState("");
  const [inch, setInch] = useState("");

  const handleCmChange = (value) => {
    setCm(value);
    if (value === "" || isNaN(value)) {
      setInch("");
    } else {
      setInch((value / 2.54).toFixed(4));
    }
  };

  const handleInchChange = (value) => {
    setInch(value);
    if (value === "" || isNaN(value)) {
      setCm("");
    } else {
      setCm((value * 2.54).toFixed(4));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-black to-gray-900 p-6">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 text-white">
        
        <h1 className="text-3xl font-bold mb-6 text-center">
          CM ↔ Inch Converter
        </h1>

        {/* CM Input */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-semibold">
            Centimeters (cm)
          </label>
          <input
            type="number"
            value={cm}
            onChange={(e) => handleCmChange(e.target.value)}
            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl outline-none focus:ring-2 focus:ring-indigo-400 text-white placeholder-gray-300"
            placeholder="Enter value in cm"
          />
        </div>

        {/* Inch Input */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-semibold">
            Inches (inch)
          </label>
          <input
            type="number"
            value={inch}
            onChange={(e) => handleInchChange(e.target.value)}
            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl outline-none focus:ring-2 focus:ring-indigo-400 text-white placeholder-gray-300"
            placeholder="Enter value in inches"
          />
        </div>

        {/* Footer */}
        <p className="text-center text-gray-300 text-sm mt-4">
          Conversion: <span className="font-semibold">1 inch = 2.54 cm</span>
        </p>
      </div>
    </div>
  );
};

export default CmInchConverter;
