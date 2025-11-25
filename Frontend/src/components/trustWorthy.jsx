import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const TrustWorthy = () => {
  return (
    <div className="bg-[#6e604a] py-16 px-4 md:px-10 pb-10">
  <div className="text-center mb-12">
    <p className="text-sm tracking-widest text-white/70">
      BEHIND THE BRAND
    </p>
    <h2 className="text-3xl md:text-4xl font-bold text-white">
      The Leather Lovers Difference
    </h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 border border-white/20 w-full">
    
    {/* Tile 1 */}
    <div className="flex p-6 border-b border-white/20 md:border-r gap-6">
      <img src={assets.Trust3}
        className="w-1/2 h-48 md:h-64 object-cover rounded"
      />
      <div className="pt-3">
        <h3 className="text-lg font-semibold text-white mb-2">
          Premium Raw Materials
        </h3>
        <p className="text-white/80 text-sm leading-relaxed">
          From high-quality leather to durable hardware, every piece starts
          with premium materials crafted for longevity and comfort.
        </p>
      </div>
    </div>

    {/* Tile 2 */}
    <div className="flex p-6 border-b border-white/20 gap-6">
      <img src={assets.Trust2}
        className="w-1/2 h-48 md:h-64 object-cover rounded"
      />
      <div className="pt-3">
        <h3 className="text-lg font-semibold text-white mb-2">
          Crafted by Hand
        </h3>
        <p className="text-white/80 text-sm leading-relaxed">
          Each product is carefully crafted by experienced artisans to
          ensure detail, durability, and quality in every stitch.
        </p>
      </div>
    </div>

    {/* Tile 3 */}
    <div className="flex p-6 border-b md:border-b-0 border-white/20 md:border-r gap-6">
      <img src={assets.Trust1}
        className="w-1/2 h-48 md:h-64 object-cover rounded"
      />
      <div className="pt-3">
        <h3 className="text-lg font-semibold text-white mb-2">
          Workshop to You
        </h3>
        <p className="text-white/80 text-sm leading-relaxed">
          We deliver directly from our workshop to you — no middleman, no
          inflated pricing. Just honest value.
        </p>
      </div>
    </div>

    {/* Tile 4 */}
    <div className="flex p-6 gap-6">
      <img src={assets.Trust4}
        className="w-1/2 h-48 md:h-64 object-cover rounded"
      />
      <div className="pt-3">
        <h3 className="text-lg font-semibold text-white mb-2">
          Ready-Made Fits
        </h3>
        <p className="text-white/80 text-sm leading-relaxed">
          Our ready-made leather jackets come in a wide range of sizes,
          crafted to deliver perfect comfort and style straight off the rack.
        </p>
      </div>
    </div>

  </div>
</div>

  );
};

export default TrustWorthy;
