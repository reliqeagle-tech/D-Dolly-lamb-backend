import React, { useContext, useState, useRef } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ITEM_TO_SUBCATEGORY } from "./categoriesMapping";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import {
  faMagnifyingGlass,
  faUser,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import Title from "./Title";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileAccord, setMobileAccord] = useState(null);
  const hideTimeoutRef = useRef(null);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  const hideMenu = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 300);
  };

  const showMenu = (menu) => {
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    setActiveMenu(menu);
  };

  const toggleMobileAccord = (section) => {
    setMobileAccord(mobileAccord === section ? null : section);
  };

  return (
    <div className="pb-[2px] sticky top-0 z-[99] bg-gradient-to-r from-indigo-500 via-indigo-500 to-black ">
      <div className="sticky top-0 z-[9999] bg-black w-full shadow-sm bg-blend-saturation">
        {/* ------------------- TOP NAV ------------------- */}
        <div className="flex items-center justify-between py-5 font-medium max-w-7xl mx-auto px-4">
          <Link to="/">
            <h1 className="text-2xl font-bold text-white py-2"><span className="text-[#f7c568]">D DOLLY</span> LAMB</h1>
          </Link>

          {/* ------------------- DESKTOP LINKS ------------------- */}
          <ul className="hidden sm:flex md:gap-8 sm:gap-5 md:text-sm text-xs text-white">
            <NavLink
              to="/"
              className="flex flex-col items-center gap-1 pt-[2px]"
            >
              <p>HOME</p>
            </NavLink>

            {/* MEN MENU */}
            <li
              onMouseEnter={() => showMenu("men")}
              onMouseLeave={hideMenu}
              className="relative cursor-pointer"
            >
              <div className="flex items-center">
                <p className="hover:text-gray-300">MEN</p>
                <RiArrowDropDownLine
                  className={`text-2xl transition-transform duration-300 ${
                    activeMenu === "men" ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>

              {activeMenu === "men" && (
                <MegaMenu
                 showMenu={() => showMenu("men")} 
                 hideMenu={hideMenu}>
                  { /* top wear */ }
                  <MegaColumn
                    title="TOPS"
                    items={[
                      {
                        label: "Jackets",
                        category: "Topwear",
                        gender: "Men",
                      },
                      {
                        label: "Coats",
                        category: "Topwear",
                        gender: "Men",
                      },
                      {
                        label: "Blazers",
                        category: "Topwear",
                        gender: "Men",
                      },
                      {
                        label: "Celebrity",
                        category: "Topwear",
                        gender: "Men",
                      },
                      {
                        label: "Suits",
                        category: "Topwear",
                        gender: "Men",
                      },
                      {
                        label: "Boys",
                        category: "Topwear",
                        gender: "Men",
                      },
                    ]}
                  />

                  <MegaColumn
                    title="BOTTOMS"
                    items={[
                      {
                        label: "Pants",
                        category: "Bottomwear",
                        gender: "Men",
                      },
                      {
                        label: "Shorts",
                        category: "Bottomwear",
                        gender: "Men",
                      },
                      {
                        label: "Chaps",
                        category: "Bottomwear",
                        gender: "Men",
                      },
                    ]}
                  />

                  <MegaColumn
                    title="ACCESSORIES"
                    items={[
                      {
                        label: "Belt",
                        category: "Accessories",
                        gender: "Men",
                      },
                      {
                        label: "Cap",
                        category: "Accessories",
                        gender: "Men",
                      },
                      {
                        label: "Wristband",
                        category: "Accessories",
                        gender: "Men",
                      },
                      {
                        label: "Hood",
                        category: "Accessories",
                        gender: "Men",
                      },
                    ]}
                  />

                  <div className="flex-shrink-0 w-[250px] self-start">
                    <img
                      src={assets.leatherModel2}
                      className="rounded-lg shadow-md w-full h-[300px] object-cover"
                      alt="preview"
                    />
                  </div>
                </MegaMenu>
              )}
            </li>

            {/* WOMEN MENU */}
            <li
              onMouseEnter={() => showMenu("women")}
              onMouseLeave={hideMenu}
              className="relative cursor-pointer"
            >
              <div className="flex items-center">
                <p className="hover:text-gray-300">WOMEN</p>
                <RiArrowDropDownLine
                  className={`text-2xl transition-transform duration-300 ${
                    activeMenu === "women" ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>

              {activeMenu === "women" && (
  <MegaMenu
    showMenu={() => showMenu("women")}
    hideMenu={hideMenu}
  >
    {/* TOPS */}
    <MegaColumn
      title="TOPS"
      items={[
        { label: "Jackets", category: "Topwear", gender: "Women" },
        { label: "Jackets", category: "Topwear", gender: "Women" },
        { label: "Coats", category: "Topwear", gender: "Women" },
        { label: "Dresses", category: "Topwear", gender: "Women" },
        { label: "Tops", category: "Topwear", gender: "Women" },
      ]}
    />

    {/* BOTTOMS */}
    <MegaColumn
      title="BOTTOMS"
      items={[
        { label: "Pants", category: "Bottomwear", gender: "Women" },
        { label: "Skirts", category: "Bottomwear", gender: "Women" },
        { label: "Shorts", category: "Bottomwear", gender: "Women" },
      ]}
    />

    {/* ACCESSORIES */}
    <MegaColumn
      title="ACCESSORIES"
      items={[
        { label: "Bags", category: "Accessories", gender: "Women" },
        { label: "Wallets", category: "Accessories", gender: "Women" },
        { label: "Hats", category: "Accessories", gender: "Women" },
      ]}
    />

    {/* IMAGE */}
    <div className="flex-shrink-0 w-[250px] self-start">
      <img
        src={assets.hero_img_3}
        className="rounded-lg shadow-md w-full h-[300px] object-cover"
        alt=""
      />
    </div>
  </MegaMenu>
)}

            </li>

            <NavLink to="/collection">COLLECTION</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/contact">CONTACT</NavLink>
          </ul>

          {/* ------------------- RIGHT ICONS ------------------- */}
          <div className="flex items-center gap-6">
            <FontAwesomeIcon
              onClick={() => {
                setShowSearch(true);
                navigate("/collection");
              }}
              className="cursor-pointer text-2xl"
              icon={faMagnifyingGlass}
              style={{ color: "#ffffff" }}
            />

            {/* Profile */}
            <div className="group relative">
              <FontAwesomeIcon
                onClick={() => (token ? null : navigate("/login"))}
                className="cursor-pointer text-2xl"
                icon={faUser}
                style={{ color: "#ffffff" }}
              />
              {token && (
                <div className="group-hover:block hidden absolute right-0 pt-4 z-[9999]">
                  <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow">
                    <p
                      onClick={() => navigate("/profile")}
                      className="cursor-pointer"
                    >
                      My Profile
                    </p>
                    <p
                      onClick={() => navigate("/orders")}
                      className="cursor-pointer"
                    >
                      Orders
                    </p>
                    <p onClick={logout} className="cursor-pointer">
                      Logout
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <FontAwesomeIcon
                icon={faBagShopping}
                style={{ color: "#ffffff" }}
                className="w-6 min-w-5 text-2xl"
              />
              <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-gray-700 text-white aspect-square rounded-full text-[8px]">
                {getCartCount()}
              </p>
            </Link>

            <img
              onClick={() => setVisible(true)}
              src={assets.menu_icon}
              className="w-5 cursor-pointer sm:hidden invert"
            />
          </div>
        </div>

        {/* ------------------- MOBILE SIDEBAR ------------------- */}
        <div
          className={`fixed top-0 right-0 bottom-0 bg-white z-[9999] transition-all duration-300 
        ${visible ? "w-full" : "w-0"} overflow-hidden`}
        >
          <div className="flex flex-col text-gray-600">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-3 cursor-pointer border-b"
            >
              <HiOutlineMenuAlt3 />
              {/* <img className="h-4 rotate-180 invert" src={assets.dropdown_icon} /> */}
              <p>Back</p>
            </div>

            <SidebarLink to="/" label="HOME" close={setVisible} />

            {/* Mobile MEN */}
            <MobileAccordion
              title="MEN"
              open={mobileAccord === "men"}
              toggle={() => toggleMobileAccord("men")}
              sections={{
                TOPS: [
                  {
                    label: "Leather Jackets",
                    category: "Topwear",
                    gender: "Men",
                  },
                  { label: "Leather Coats", category: "Topwear", gender: "Men" },
                  {
                    label: "Leather Blazers",
                    category: "blazers",
                    gender: "men",
                  },
                  {
                    label: "Celebrity Jackets",
                    category: "celebrity-Topwear",
                    gender: "men",
                  },
                  { label: "Leather Suits", category: "Topwear", gender: "Men" },
                  {
                    label: "Boys Leather Jackets",
                    category: "Topwear",
                    gender: "boys",
                  },
                ],
                BOTTOMS: [
                  { label: "Leather Pants", category: "Bottomwear", gender: "Men" },
                  {
                    label: "Leather Shorts",
                    category: "Bottomwear",
                    gender: "men",
                  },
                  { label: "Leather Chaps", category: "Bottomwear", gender: "Men" },
                ],
                ACCESSORIES: [
                  { label: "Leather Belt", category: "Accessories", gender: "Men" },
                  { label: "Leather Cap", category: "Accessories", gender: "Men" },
                  {
                    label: "Leather Wristband",
                    category: "Accessories",
                    gender: "men",
                  },
                  { label: "Leather Hood", category: "Accessories", gender: "Men" },
                ],
              }}

              closeSidebar={() => setVisible(false)}
            />

            {/* Mobile WOMEN */}
            <MobileAccordion
              title="WOMEN"
              open={mobileAccord === "women"}
              toggle={() => toggleMobileAccord("women")}
              sections={{
                TOPS: [
                  {
                    label: "Leather Jackets",
                    category: "Topwear",
                    gender: "Women",
                  },
                  {
                    label: "Celebrity Jackets",
                    category: "Topwear",
                    gender: "Women",
                  },
                  {
                    label: "Leather Long Coats",
                    category: "Topwear",
                    gender: "Women",
                  },
                  { label: "Dresses", category: "Topwear", gender: "Women" },
                  { label: "Tops", category: "Topwear", gender: "Women" },
                ],

                BOTTOMS: [
                  { label: "Pants", category: "Bottomwear", gender: "Women" },
                  { label: "Skirts", category: "Bottomwear", gender: "Women" },
                  {
                    label: "Leather Shorts",
                    category: "Bottomwear",
                    gender: "Women",
                  },
                ],

                ACCESSORIES: [
                  {
                    label: "Leather Bags",
                    category: "Accessories",
                    gender: "Women",
                  },
                  {
                    label: "Leather Wallets",
                    category: "Accessories",
                    gender: "Women",
                  },
                  {
                    label: "Leather Hats",
                    category: "Accessories",
                    gender: "Women",
                  },
                ],
              }}
              closeSidebar={() => setVisible(false)}
            />

            <SidebarLink
              to="/collection"
              label="COLLECTION"
              close={setVisible}
            />
            <SidebarLink to="/about" label="ABOUT" close={setVisible} />
            <SidebarLink to="/contact" label="CONTACT" close={setVisible} />
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------------- HELPER COMPONENTS ---------------------- */

const SidebarLink = ({ to, label, close }) => (
  <NavLink onClick={() => close(false)} className="py-2 pl-6 border-b" to={to}>
    {label}
  </NavLink>
);

const MegaMenu = ({ children, showMenu, hideMenu }) => (
  <div
    onMouseEnter={showMenu}
    onMouseLeave={hideMenu}
    className="fixed inset-x-0 top-[80px] bg-black/95 p-8 z-[9999] shadow-2xl border-t-4 border-indigo-600"
  >
    <div className="max-w-7xl mx-auto flex flex-wrap gap-8 px-4 items-start">
      {children}
    </div>
  </div>
);

const MegaColumn = ({ title, items }) => {
  return (
    <div className="flex-1 min-w-[150px]">
      <h3 className="font-semibold mb-3 text-white text-xl border-b-2 w-1/2 border-indigo-600">
        {title}
      </h3>

      <ul className="space-y-2 text-white">
        {items.map((item, index) => {
          const toURL = `/collection?category=${encodeURIComponent(
            item.gender
          )}&sub=${encodeURIComponent(item.category)}`;

          console.log("Generated URL:", toURL); // Debug

          return (
            <li key={index}>
              <Link
                to={toURL}
                className="hover:text-indigo-400 transition"
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};


/* ---------------------- MOBILE ACCORDION ---------------------- */
const MobileAccordion = ({ title, open, toggle, sections, closeSidebar }) => (
  <div>
    <button
      onClick={toggle}
      className="w-full text-left py-3 px-6 border-b flex justify-between items-center"
    >
      {title}
      <RiArrowDropDownLine
        className={`text-3xl transition-transform duration-300 ${
          open ? "rotate-180" : ""
        }`}
      />
    </button>

    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out 
      ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
    >
      <div className="bg-gray-50 px-6 py-3 border-b space-y-4">
        {Object.entries(sections).map(([section, items], index) => (
          <div key={index}>
            <h4 className="font-semibold text-gray-800 mb-2">{section}</h4>
            <ul className="text-gray-600 space-y-1">
              {items.map((item, i) => (
                <li key={i} className="pl-2">
                  <Link
                    to={`/collection?category=${encodeURIComponent(item.gender)}&sub=${encodeURIComponent(item.category)}`}
                    className="block w-full hover:text-black transition"
                    onClick={closeSidebar} // 🚀 CLOSE ON CLICK
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);


export default Navbar;
