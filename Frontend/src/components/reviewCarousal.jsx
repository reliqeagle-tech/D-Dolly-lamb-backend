import { assets } from "../assets/assets";

const TeamCarousel = () => {
  // Your card data with heading, description, image, buttonText
  const cards = [
    {
      id: 1,
      heading: "Premium Lambskin Pillows",
      description: "Soft, durable, and handcrafted for luxury comfort.",
      image: assets.Pillows,
      buttonText: "Shop Now"
    },
    {
      id: 2,
      heading: "New Leather Collection",
      description: "Explore stylish, long-lasting leather home essentials.",
      image: assets.Trust1,
      buttonText: "View Collection"
    },
    {
      id: 3,
      heading: "Handcrafted Leather Jackets",
      description: "Unique designs made from 100% authentic lambskin.",
      image: assets.Trust3,
      buttonText: "Discover More"
    },
    {
      id: 4,
      heading: "Luxury Home Decor",
      description: "Upgrade your space with premium handmade products.",
      image: assets.Accessories,
      buttonText: "Browse"
    }
  ];

  const loopCards = [...cards, ...cards];

  return (
    <div className="w-full h-[80vh] overflow-hidden p-10 bg-[#674c47]">
      <div
        className="flex gap-6 animate-scroll whitespace-nowrap h-full"
        style={{ width: "max-content" }}
      >
        {loopCards.map((card, index) => (
          <div
            key={card.id + "-" + index}
            className="
              min-w-[500px] 
              h-full 
              bg-white 
              rounded-2xl 
              shadow-xl 
              overflow-hidden 
              flex flex-col 
              hover:scale-[1.02] 
              transition-transform 
              duration-300
            "
          >
            {/* Image */}
            <div className="h-1/2 w-full overflow-hidden">
              <img
                src={card.image}
                alt={card.heading}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between h-1/2">
              <div>
                <h2 className="text-xl font-bold text-black mb-2">
                  {card.heading}
                </h2>
                <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <button className="bg-[#f7c568] text-black px-5 py-2 rounded-full hover:bg-[#800000] transition">
                {card.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCarousel;
