import React,{useState} from 'react';
import { FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; // Social icons from react-icons
import { Link } from 'react-router-dom';
import NewsletterBox from './NewsletterBox';


const Footer = () => {
  const isDevelopment = import.meta.env.MODE === 'development'
    const backendUrl = isDevelopment ? import.meta.env.VITE_BACKEND_URL_D : import.meta.env.VITE_BACKEND_URL
    const [loading, setLoading] = useState(false);
  
    const onSubmitHandler = async (event) => {
      event.preventDefault();
      const email = event.target.email.value;
  
      console.log(backendUrl)
      setLoading(true);
      try {
        const res = await fetch(`${backendUrl}/api/user/send-mail`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
  
        const data = await res.json();
  
        if (data.success) {
          alert("🎉 Subscription successful! Check your email.");
          event.target.reset();
        } else {
          alert("⚠️ Error: " + data.message);
        }
      } catch (error) {
        alert("❌ Error subscribing: " + error.message);
      } finally {
        setLoading(false);
      }
    };
  return (
    <footer className="bg-black text-white py-12 px-4">
  <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">

    {/* Main Grid */}
    <div className="
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-6 
      gap-10 
      mb-12
    ">
      {/* Column 1 - INFO */}
      <div className="space-y-4 text-center sm:text-left">
        <h4 className="text-lg font-semibold text-gray-200 uppercase tracking-wide">INFO</h4>
        <ul className="space-y-2 text-sm text-gray-400">
          <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
          <li><Link to="/about" className="hover:text-white">About Us</Link></li>
          <li><Link to="/orders" className="hover:text-white">Shipping & Returns</Link></li>
          <li><Link to="/about" className="hover:text-white">Our Quality</Link></li>
          <li><Link to="" className="hover:text-white">Customer Gallery</Link></li>
          <li><Link to="/CmInchConverter" className="hover:text-white">Cm to Inch Converter</Link></li>
          <li><Link to="" className="hover:text-white">Leather Waxing</Link></li>
          <li><Link to="" className="hover:text-white">Sizing Chart</Link></li>
          <li><Link to="" className="hover:text-white">Best Sellers</Link></li>
          <li><Link to="" className="hover:text-white">Testimonials</Link></li>
        </ul>
      </div>

      {/* Column 2 - Women */}
      <div className="space-y-4 text-center sm:text-left">
        <h4 className="text-lg font-semibold text-gray-200 uppercase tracking-wide">Women's Collection</h4>
        <ul className="space-y-2 text-sm text-gray-400">
          <li><Link to="/collection?category=Women&sub=Topwear" className="hover:text-white">Women Leather Jackets</Link></li>
          <li><Link to="/collection?category=Women&sub=Bottomwear" className="hover:text-white">Leather Skirts</Link></li>
          <li><Link to="/collection?category=Women&sub=Bottomwear" className="hover:text-white">Women Leather Pants</Link></li>
          <li><Link to="/collection?category=Women&sub=Bottomwear" className="hover:text-white">Leather Tops</Link></li>
          <li><Link to="/collection?category=Women" className="hover:text-white">Leather Dresses</Link></li>
          <li><Link to="/collection?category=Women&sub=Topwear" className="hover:text-white">Women Leather Long Coats</Link></li>
          <li><Link to="/collection?category=Women&sub=Celebrity" className="hover:text-white">Women's Celebrity Leather Jacket</Link></li>
        </ul>
      </div>

      {/* Column 3 - Men */}
      <div className="space-y-4 text-center sm:text-left">
        <h4 className="text-lg font-semibold text-gray-200 uppercase tracking-wide">Men's Collection</h4>
        <ul className="space-y-2 text-sm text-gray-400">
          <li><Link to="/collection?category=Men&sub=Topwear" className="hover:text-white">Leather Jackets</Link></li>
          <li><Link to="/collection?category=Men&sub=Bottomwear" className="hover:text-white">Leather Pants</Link></li>
          <li><Link to="/collection?category=Men&sub=Topwear" className="hover:text-white">Leather Vests</Link></li>
          <li><Link to="/collection?category=Men&sub=Topwear" className="hover:text-white">Leather Long Coats</Link></li>
          <li><Link to="/collection?category=Men&sub=Topwear" className="hover:text-white">Leather Suits</Link></li>
          <li><Link to="/collection?category=Men&sub=Bottomwear" className="hover:text-white">Leather Shorts</Link></li>
          <li><Link to="/collection?category=Men&sub=Celebrity" className="hover:text-white">Celebrity Leather Jackets</Link></li>
          <li><Link to="/collection?category=Men&sub=Topwear" className="hover:text-white">Leather Blazers</Link></li>
        </ul>
      </div>

      {/* Column 4 - Accessories */}
      <div className="space-y-4 text-center sm:text-left">
        <h4 className="text-lg font-semibold text-gray-200 uppercase tracking-wide">Leather Accessories</h4>
        <ul className="space-y-2 text-sm text-gray-400">
          <li><a href="#" className="hover:text-white">Leather Tie</a></li>
          <li><a href="#" className="hover:text-white">Leather Bow</a></li>
          <li><a href="#" className="hover:text-white">Leather Wristband</a></li>
          <li><a href="#" className="hover:text-white">Leather Pocket Square</a></li>
          <li><a href="#" className="hover:text-white">Leather Cap</a></li>
          <li><a href="#" className="hover:text-white">Leather Hood</a></li>
          <li><a href="#" className="hover:text-white">Leather Belt</a></li>
          <li><a href="#" className="hover:text-white">Pillow Cover</a></li>
        </ul>
      </div>

      {/* Column 5 - New Arrivals */}
      <div className="space-y-4 text-center sm:text-left">
        <h4 className="text-lg font-semibold text-gray-200 uppercase tracking-wide">New Arrivals</h4>
        <ul className="space-y-2 text-sm text-gray-400">
          <li><a href="#" className="hover:text-white">Men's New Arrivals</a></li>
          <li><a href="#" className="hover:text-white">Women's New Arrivals</a></li>
        </ul>
      </div>

      {/* Column 6 - Newsletter */}
      <div className="space-y-4 text-center sm:text-left">
        <h4 className="text-lg font-semibold text-gray-200 uppercase tracking-wide">Newsletter</h4>
        <p className="text-sm text-gray-400">
          Join the clothsy mailing list for the latest arrivals, events, collections, and offers.
        </p>

        <form onSubmit={onSubmitHandler} className="relative">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button 
            type="submit" 
            disabled={loading} 
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white"
          >
            &gt;
          </button>
        </form>

        <div className="flex justify-center sm:justify-start space-x-4 pt-2">
          <FaEnvelope size={16} className="text-gray-400 hover:text-white" />
          <FaFacebookF size={16} className="text-gray-400 hover:text-white" />
          <FaInstagram size={16} className="text-gray-400 hover:text-white" />
          <FaTwitter size={16} className="text-gray-400 hover:text-white" />
        </div>
      </div>
    </div>

    {/* Bottom copyright */}
    <div className="border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
      COPYRIGHT © 2025 leatherlovers.com — All Rights Reserved — Privacy Policy
    </div>
  </div>
</footer>

  );
};

export default Footer;
