import { Star } from "lucide-react";

const LeatherJacketDescription = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-800 bg-white rounded-xl shadow-sm mt-10">
      {/* Description Section */}
      <div>
        <h2 className="text-lg font-semibold mb-2 uppercase">Description</h2>
        <p className="text-sm leading-relaxed">
          Planning to commit to a new look this season? Then why not our Charles Burnt Tan Leather Jacket
          that will help you make a statement on its own. Amp up your whole look with the elegantly
          designed leather jacket which will transform an otherwise boring look. Make yourself fall in love
          with this amazing leather piece.
        </p>
        <button className="text-sm text-gray-500 mt-2 hover:underline">Read More</button>
      </div>

      {/* Icons Section */}
      <div className="flex justify-between items-center border-t border-b py-4 mt-6 text-sm font-medium">
        <div className="flex flex-col items-center">
          <span className="text-2xl">🪡</span>
          <p>HAND CRAFTED</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl">👜</span>
          <p>100% GENUINE LEATHER</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl">⚙️</span>
          <p>PREMIUM HARDWARE</p>
        </div>
      </div>

      {/* Rating Section */}
      <div className="flex items-center mt-6">
        <p className="text-2xl font-semibold">4.9</p>
        <div className="flex mx-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-blue-600 fill-blue-600" />
          ))}
        </div>
        <p className="text-sm text-gray-600">
          4.9.5 based on <span className="font-semibold">5311</span> reviews.
        </p>
      </div>

      {/* Delivery and Custom Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="flex flex-col border p-4 rounded-2xl shadow-sm">
          <div className="flex items-center mb-2">
            <span className="text-2xl mr-2">📅</span>
            <h3 className="font-semibold">
              Handcrafted Just for You | Delivery Time: 2 Weeks
            </h3>
          </div>
          <p className="text-sm text-gray-600">
            Subject to confirmed measurement inputs and stock availability.
            Also ordering other products together which do not specify delivery
            dates may delay shipping.
          </p>
        </div>

        <div className="flex flex-col border p-4 rounded-2xl shadow-sm">
          <div className="flex items-center mb-2">
            <span className="text-2xl mr-2">✂️</span>
            <h3 className="font-semibold">Custom Made</h3>
          </div>
          <p className="text-sm text-gray-600">
            All garments are Custom Tailored by our team of expert Master Tailors and
            Skilled Craftsmen. Each garment is individually tailored for you from the
            fabric stage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeatherJacketDescription;
