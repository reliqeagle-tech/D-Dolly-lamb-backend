// import { createContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios'
// import { jwtDecode } from "jwt-decode";

// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {
//     const currency = '$';
//     const delivery_fee = 10;
//     const backendUrl = import.meta.env.VITE_BACKEND_URL;

//     //    const backendUrl = import.meta.env.DEV ? import.meta.env.VITE_BACKEND_URL_D : import.meta.env.VITE_BACKEND_URL;

//     const [search, setSearch] = useState('');
//     const [showSearch, setShowSearch] = useState(false);
//     const [cartItems, setCartItems] = useState({});
//     const [products, setProducts] = useState([]);
//     const [token, setToken] = useState('');
//     const [wishlist, setWishlist] = useState([]);
//     const [userId, setUserId] = useState(null);
//     const navigate = useNavigate();

//     const decodeToken = (tok) => {
//         try {
//             const decoded = jwtDecode(tok);
//             return decoded.id;
//         } catch {
//             return null;
//         }
//     };

//     const addToCart = async (itemId, size, color, customPrice = 0) => {
//         if (!size || !color) {
//             toast.error('Please select size and color');
//             return;
//         }

//         let cartData = structuredClone(cartItems);
//         const key = `${size}-${color}`;

//         if (!cartData[itemId]) cartData[itemId] = {};

//         if (cartData[itemId][key]) {
//             cartData[itemId][key].quantity += 1;
//         } else {
//             cartData[itemId][key] = {
//                 quantity: 1,
//                 customPrice
//             };
//         }

//         setCartItems(cartData);

//         if (token) {
//             await axios.post(backendUrl + '/api/cart/add', {
//                 itemId, size, color, customPrice
//             }, { headers: { Authorization: `Bearer ${token}` } });
//         }
//     };


//     const updateQuantity = async (itemId, size, color, quantity) => {
//         const key = `${size}-${color}`;
//         let cartData = structuredClone(cartItems);

//         if (!cartData[itemId] || !cartData[itemId][key]) return;

//         if (quantity <= 0) {
//             delete cartData[itemId][key];
//             if (Object.keys(cartData[itemId]).length === 0) delete cartData[itemId];
//         } else {
//             cartData[itemId][key].quantity = quantity;
//         }

//         setCartItems(cartData);

//         if (token) {
//             await axios.post(backendUrl + '/api/cart/update', {
//                 itemId, size, color, quantity
//             }, { headers: { Authorization: `Bearer ${token}` } });
//         }
//     };

//     const getCartCount = () => {
//         let totalCount = 0;
//         for (const items in cartItems) {
//             for (const item in cartItems[items]) {
//                 const itemData = cartItems[items][item];  // ✅ Extract (object or number)
//                 // ✅ Handle both: old number or new {quantity: n}
//                 totalCount += typeof itemData === 'number' ? itemData : (itemData?.quantity || 0);
//             }
//         }
//         //   console.log('Cart Count:', totalCount);  // 🔍 Debug: Check in console (remove after test)
//         return totalCount;  // e.g., 2 + 1 + 5 + 3 = 11
//     };

//     // const getCartAmount = () => {
//     //     let totalAmount = 0;
//     //     //   console.log('Calculating Cart Amount - Raw cartItems:', cartItems);  // 🔍 Debug (remove after test)
//     //     for (const items in cartItems) {
//     //         const itemInfo = products.find((product) => product._id === items);
//     //         if (!itemInfo) continue;
//     //         for (const item in cartItems[items]) {
//     //             const itemData = cartItems[items][item];  // ✅ Extract raw (object or number)
//     //             const qty = typeof itemData === 'number' ? itemData : (itemData?.quantity || 0);  // ✅ Normalize qty
//     //             const addon = typeof itemData === 'number' ? 0 : (itemData?.customPrice || 0);  // ✅ Normalize custom
//     //             if (qty > 0) {
//     //                 const lineTotal = (itemInfo.price + addon) * qty;  // ✅ Base + custom * qty
//     //                 totalAmount += lineTotal;
//     //                 // console.log(`Line Calc: ${itemInfo.name} - Qty ${qty} x (Base ${itemInfo.price} + Custom ${addon}) = ${lineTotal}`);  // 🔍 Per-line debug (remove after)
//     //             }
//     //         }
//     //     }
//     //     //   console.log('Final Subtotal:', totalAmount);  // 🔍 Total debug (remove after)
//     //     return totalAmount;  // e.g., 25.00 for 2x12.50
//     // };

//     const getCartAmount = () => {
//         let total = 0;
//         for (const id in cartItems) {
//             const product = products.find((p) => p._id === id);
//             if (!product) continue;

//             for (const combo in cartItems[id]) {
//                 const item = cartItems[id][combo];
//                 const qty = item.quantity || 0;
//                 const extra = Number(item.customPrice) || 0;

//                 const original = Number(product.price);
//                 // const discounted = Number(product.discountPrice) || 0;
//                 // const finalPrice = discounted > 0 && discounted < original ? discounted : original;

//                 const discountPercent = Number(product.discountPrice) || 0;

//                 const discountAmount =
//                     discountPercent > 0 && discountPercent < 100
//                         ? (original * discountPercent) / 100
//                         : 0;

//                 const finalPrice = original - discountAmount;

//                 total += (finalPrice + extra) * qty;
//             }
//         }
//         return Number(total.toFixed(2));
//     };


//     const getCartDiscount = () => {
//         let saved = 0;
//         for (const id in cartItems) {
//             const product = products.find((p) => p._id === id);
//             if (!product) continue;

//             for (const combo in cartItems[id]) {
//                 const qty = cartItems[id][combo].quantity || 0;
//                 const original = Number(product.price);
//                 const discounted = Number(product.discountPrice) || 0;

//                 if (discounted > 0 && discounted < original) {
//                     saved += (original - discounted) * qty;
//                 }
//             }
//         }
//         return Number(saved.toFixed(2));
//     };


//     const getProductsData = async () => {
//         try {
//             const response = await axios.get(backendUrl + '/api/product/list');
//             if (response.data.success) {
//                 setProducts(response.data.products.reverse());
//             } else {
//                 toast.error(response.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.message);
//         }
//     };


//     const getSingleProduct = async (productId) => {
//         try {
//             const res = await axios.post(`${backendUrl}/api/product/single`, { productId });
//             if (res.data.success) {
//                 return res.data.product;
//             }
//             return null;
//         } catch (err) {
//             console.log(err);
//             toast.error("Failed to load product details");
//             return null;
//         }
//     };

//     // Updated: Add userId to body if backend needs it (extract from token or localStorage)
//     const getUserCart = async (token) => {
//         try {
//             // Assume userId from localStorage or decode token – adjust as per your auth
//             const userId = localStorage.getItem('token', token); // Or jwt decode
//             const response = await axios.post(backendUrl + '/api/cart/get', { userId }, { headers: { Authorization: `Bearer ${token}` } });
//             if (response.data.success) {
//                 setCartItems(response.data.cartData); // Expects object { itemId: { "S-Tobacco": 1 } }
//             }
//         } catch (error) {
//             console.log(error);
//             // Don't toast error on load – silent fail
//         }
//     };

//     useEffect(() => {
//         getProductsData();
//     }, []);

//     useEffect(() => {
//         if (!token && localStorage.getItem('token')) {
//             setToken(localStorage.getItem('token'));
//             getUserCart(localStorage.getItem('token'));
//         }
//         if (token) {
//             getUserCart(token);
//         }
//     }, [token]);

//     // New helper: For cart page, to get detailed items with split size/color
//     const getCartDetails = () => {
//         const details = [];
//         for (const itemId in cartItems) {
//             const product = products.find(p => p._id === itemId);
//             if (!product) continue;
//             for (const key in cartItems[itemId]) {
//                 if (cartItems[itemId][key] > 0) {
//                     const [size, color] = key.split('-');
//                     details.push({
//                         productId: itemId,
//                         product,
//                         size,
//                         color,
//                         quantity: cartItems[itemId][key]
//                     });
//                 }
//             }
//         }
//         return details;
//     };


//     /* ────────────────────────────── WISHLIST ────────────────────────────── */

//     const toggleWishlistItem = async (productId) => {
//         try {
//             if (!userId) {
//                 toast.error("Please login first");
//                 return;
//             }

//             const res = await axios.post(`${backendUrl}/api/wishlist/toggle`, {
//                 userId,
//                 productId,
//             });

//             toast.success(res.data.message);
//             fetchWishlist();
//         } catch (error) {
//             console.error(error);
//             toast.error(error.response?.data?.message || "Failed to update wishlist");
//         }
//     };

//     const fetchWishlist = async () => {
//         try {
//             if (!userId) return;
//             const res = await axios.get(`${backendUrl}/api/wishlist/${userId}`);
//             setWishlist(res.data.wishlist);
//         } catch (error) {
//             console.error(error);
//             toast.error("Failed to load wishlist");
//         }
//     };

//     /* ────────────────────────────── REVIEW FUNCTIONS ────────────────────────────── */

//     const submitReview = async (product, rating, comment) => {
//         try {
//             if (!token) {
//                 toast.error("Please login to post a review");
//                 return false;
//             }

//             const response = await axios.post(
//                 `${backendUrl}/api/review/add`,
//                 { product, rating, comment },
//                 { headers: { Authorization: `Bearer ${token}` } }
//             );

//             toast.success("Review submitted successfully!");
//             return true;
//         } catch (error) {
//             console.log(error);
//             if (error.response?.data?.message) {
//                 toast.error(error.response.data.message);
//             } else {
//                 toast.error("Failed to submit review");
//             }
//             return false;
//         }
//     };

//     const getProductReviews = async (productId) => {
//         try {
//             const res = await axios.get(`${backendUrl}/api/review/${productId}`);
//             if (res.data.success) return res.data.reviews;
//             return [];
//         } catch {
//             toast.error("Failed to load reviews");
//             return [];
//         }
//     };

//     const deleteReview = async (reviewId) => {
//         try {
//             const res = await axios.delete(
//                 `${backendUrl}/api/review/${reviewId}`,
//                 { headers: { Authorization: `Bearer ${token}` } }
//             );

//             if (res.data.success) {
//                 toast.success("Review deleted");
//                 return true;
//             } else {
//                 toast.error(res.data.message);
//                 return false;
//             }
//         } catch (err) {
//             toast.error("Failed to delete review");
//             return false;
//         }
//     };

//     const calculateSalePrice = (product) => {
//         const original = Number(product.price);
//         const percent = Number(product.discountPrice) || 0;
//         const discount = (original * percent) / 100;
//         return original - discount;
//     };


//     /* ────────────────────────────── TOKEN PERSISTENCE ────────────────────────────── */

//     useEffect(() => {
//         const saved = localStorage.getItem("token");
//         if (saved) {
//             setToken(saved);
//             setUserId(decodeToken(saved));
//         }
//     }, []);

//     useEffect(() => {
//         if (token) {
//             localStorage.setItem("token", token);
//             setUserId(decodeToken(token));
//         }
//     }, [token]);


//     const value = {
//         products, currency, delivery_fee,
//         search, setSearch, showSearch, setShowSearch,
//         cartItems, addToCart, setCartItems,
//         getCartCount, updateQuantity, // Now with color
//         getCartAmount, getCartDetails, getCartDiscount, // New helper for display
//         navigate, backendUrl,
//         setToken, token, userId,
//         toggleWishlistItem, fetchWishlist, wishlist, setWishlist,
//         submitReview, getProductReviews, deleteReview,
//         calculateSalePrice, getSingleProduct
//     };

//     return (
//         <ShopContext.Provider value={value}>
//             {props.children}
//         </ShopContext.Provider>
//     );
// };

// export default ShopContextProvider;






import { createContext, useEffect, useState, useMemo } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { jwtDecode } from "jwt-decode";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 0;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');
    const [wishlist, setWishlist] = useState([]);
    const [userId, setUserId] = useState(null);
    const navigate = useNavigate();

    // ─────────────────────────────────────────────
    // TOKEN DECODE
    // ─────────────────────────────────────────────
    const decodeToken = (tok) => {
        try {
            const decoded = jwtDecode(tok);
            return decoded.id;
        } catch {
            return null;
        }
    };

    // ── Existing states ke saath yeh add karo ──
    const [savedAddress, setSavedAddress] = useState(() => {
        try {
            const saved = localStorage.getItem('ddolly_address');
            return saved ? JSON.parse(saved) : null;
        } catch { return null; }
    });

    const saveAddress = (address) => {
        setSavedAddress(address);
        localStorage.setItem('ddolly_address', JSON.stringify(address));
    };

    // ─────────────────────────────────────────────
    // CART - GET FROM SERVER
    // ─────────────────────────────────────────────
    const getUserCart = async (tok) => {
        try {
            const uid = decodeToken(tok); // ✅ Properly decode userId from token
            if (!uid) return;

            const response = await axios.post(
                backendUrl + '/api/cart/get',
                { userId: uid },
                { headers: { Authorization: `Bearer ${tok}` } }
            );

            if (response.data.success) {
                setCartItems(response.data.cartData);
            }
        } catch (error) {
            console.log(error);
            // Silent fail on load
        }
    };

    // ─────────────────────────────────────────────
    // CART - ADD
    // ─────────────────────────────────────────────
    const addToCart = async (itemId, size, color, customPrice = 0) => {
        if (!size || !color) {
            toast.error('Please select size and color');
            return;
        }

        let cartData = structuredClone(cartItems);
        const key = `${size}-${color}`;

        if (!cartData[itemId]) cartData[itemId] = {};

        if (cartData[itemId][key]) {
            cartData[itemId][key].quantity += 1;
        } else {
            cartData[itemId][key] = {
                quantity: 1,
                customPrice
            };
        }

        setCartItems(cartData);

        if (token) {
            await axios.post(
                backendUrl + '/api/cart/add',
                { itemId, size, color, customPrice },
                { headers: { Authorization: `Bearer ${token}` } }
            );
        }
    };

    // ─────────────────────────────────────────────
    // CART - UPDATE QUANTITY
    // ─────────────────────────────────────────────
    const updateQuantity = async (itemId, size, color, quantity) => {
        const key = `${size}-${color}`;
        let cartData = structuredClone(cartItems);

        if (!cartData[itemId] || !cartData[itemId][key]) return;

        if (quantity <= 0) {
            delete cartData[itemId][key];
            if (Object.keys(cartData[itemId]).length === 0) delete cartData[itemId];
        } else {
            cartData[itemId][key].quantity = quantity;
        }

        setCartItems(cartData);

        if (token) {
            await axios.post(
                backendUrl + '/api/cart/update',
                { itemId, size, color, quantity },
                { headers: { Authorization: `Bearer ${token}` } }
            );
        }
    };

    // ─────────────────────────────────────────────
    // CART - COUNT
    // ─────────────────────────────────────────────
    // const getCartCount = () => {
    //     let totalCount = 0;
    //     for (const items in cartItems) {
    //         for (const item in cartItems[items]) {
    //             const itemData = cartItems[items][item];
    //             totalCount += typeof itemData === 'number' ? itemData : (itemData?.quantity || 0);
    //         }
    //     }
    //     return totalCount;
    // };

    const getCartCount = useMemo(() => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                const itemData = cartItems[items][item];
                totalCount += typeof itemData === 'number' ? itemData : (itemData?.quantity || 0);
            }
        }
        return totalCount;
    }, [cartItems]);

    // ─────────────────────────────────────────────
    // CART - AMOUNT (with discount%)
    // ─────────────────────────────────────────────
    const getCartAmount = () => {
        let total = 0;
        for (const id in cartItems) {
            const product = products.find((p) => p._id === id);
            if (!product) continue;

            for (const combo in cartItems[id]) {
                const item = cartItems[id][combo];
                const qty = item.quantity || 0;
                const extra = Number(item.customPrice) || 0;
                const original = Number(product.price);
                const discountPercent = Number(product.discountPrice) || 0;
                const discountAmount =
                    discountPercent > 0 && discountPercent < 100
                        ? (original * discountPercent) / 100
                        : 0;
                const finalPrice = original - discountAmount;
                total += (finalPrice + extra) * qty;
            }
        }
        return Number(total.toFixed(2));
    };

    // ─────────────────────────────────────────────
    // CART - DISCOUNT AMOUNT
    // ─────────────────────────────────────────────
    const getCartDiscount = () => {
        let saved = 0;
        for (const id in cartItems) {
            const product = products.find((p) => p._id === id);
            if (!product) continue;

            for (const combo in cartItems[id]) {
                const qty = cartItems[id][combo].quantity || 0;
                const original = Number(product.price);
                const discounted = Number(product.discountPrice) || 0;

                if (discounted > 0 && discounted < original) {
                    saved += (original - discounted) * qty;
                }
            }
        }
        return Number(saved.toFixed(2));
    };

    // ─────────────────────────────────────────────
    // CART - DETAILS (for cart page display)
    // ─────────────────────────────────────────────
    const getCartDetails = () => {
        const details = [];
        for (const itemId in cartItems) {
            const product = products.find(p => p._id === itemId);
            if (!product) continue;
            for (const key in cartItems[itemId]) {
                const qty = cartItems[itemId][key]?.quantity || 0; // ✅ Fixed: object check
                if (qty > 0) {
                    const [size, ...colorParts] = key.split('-');
                    const color = colorParts.join('-'); // ✅ handles colors with dashes
                    details.push({
                        productId: itemId,
                        product,
                        size,
                        color,
                        quantity: qty
                    });
                }
            }
        }
        return details;
    };

    // ─────────────────────────────────────────────
    // PRODUCTS - FETCH ALL
    // ─────────────────────────────────────────────
    const getProductsData = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list');
            if (response.data.success) {
                setProducts(response.data.products.reverse());
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    // ─────────────────────────────────────────────
    // PRODUCTS - FETCH SINGLE
    // ─────────────────────────────────────────────
    const getSingleProduct = async (productId) => {
        try {
            const res = await axios.post(`${backendUrl}/api/product/single`, { productId });
            if (res.data.success) {
                return res.data.product;
            }
            return null;
        } catch (err) {
            console.log(err);
            toast.error("Failed to load product details");
            return null;
        }
    };

    // ─────────────────────────────────────────────
    // WISHLIST
    // ─────────────────────────────────────────────
    const toggleWishlistItem = async (productId) => {
        try {
            if (!userId) {
                toast.error("Please login first");
                return;
            }
            const res = await axios.post(`${backendUrl}/api/wishlist/toggle`, {
                userId,
                productId,
            });
            toast.success(res.data.message);
            fetchWishlist();
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || "Failed to update wishlist");
        }
    };

    const fetchWishlist = async () => {
        try {
            if (!userId) return;
            const res = await axios.get(`${backendUrl}/api/wishlist/${userId}`);
            setWishlist(res.data.wishlist);
        } catch (error) {
            console.error(error);
            toast.error("Failed to load wishlist");
        }
    };

    // ─────────────────────────────────────────────
    // REVIEWS
    // ─────────────────────────────────────────────
    const submitReview = async (product, rating, comment) => {
        try {
            if (!token) {
                toast.error("Please login to post a review");
                return false;
            }
            const response = await axios.post(
                `${backendUrl}/api/review/add`,
                { product, rating, comment },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            toast.success("Review submitted successfully!");
            return true;
        } catch (error) {
            console.log(error);
            if (error.response?.data?.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error("Failed to submit review");
            }
            return false;
        }
    };

    const getProductReviews = async (productId) => {
        try {
            const res = await axios.get(`${backendUrl}/api/review/${productId}`);
            if (res.data.success) return res.data.reviews;
            return [];
        } catch {
            toast.error("Failed to load reviews");
            return [];
        }
    };

    const deleteReview = async (reviewId) => {
        try {
            const res = await axios.delete(
                `${backendUrl}/api/review/${reviewId}`,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            if (res.data.success) {
                toast.success("Review deleted");
                return true;
            } else {
                toast.error(res.data.message);
                return false;
            }
        } catch (err) {
            toast.error("Failed to delete review");
            return false;
        }
    };

    // ─────────────────────────────────────────────
    // PRICE HELPER
    // ─────────────────────────────────────────────
    const calculateSalePrice = (product) => {
        const original = Number(product.price);
        const percent = Number(product.discountPrice) || 0;
        const discount = (original * percent) / 100;
        return original - discount;
    };

    // ─────────────────────────────────────────────
    // USE EFFECTS - CLEAN & CORRECT ORDER
    // ─────────────────────────────────────────────

    // 1. Fetch products on mount
    useEffect(() => {
        getProductsData();
    }, []);

    // 2. On mount - load token + userId + cart (SINGLE SOURCE OF TRUTH) ✅
    useEffect(() => {
        const savedToken = localStorage.getItem('token');
        if (savedToken) {
            setToken(savedToken);
            setUserId(decodeToken(savedToken));
            getUserCart(savedToken); // ✅ Direct pass - no state dependency
        }
    }, []);

    // 3. Save token to localStorage when it changes (e.g. after login)
    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
            setUserId(decodeToken(token));
        }
    }, [token]);

    // ─────────────────────────────────────────────
    // CONTEXT VALUE
    // ─────────────────────────────────────────────
    // const value = {
    //     products, currency, delivery_fee,
    //     search, setSearch, showSearch, setShowSearch,
    //     cartItems, addToCart, setCartItems,
    //     getCartCount, updateQuantity,
    //     getCartAmount, getCartDetails, getCartDiscount,
    //     navigate, backendUrl,
    //     setToken, token, userId,
    //     toggleWishlistItem, fetchWishlist, wishlist, setWishlist,
    //     submitReview, getProductReviews, deleteReview,
    //     calculateSalePrice, getSingleProduct,
    //     savedAddress, saveAddress,
    // }; 


    const value = useMemo(() => ({
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart, setCartItems,
        getCartCount, updateQuantity,
        getCartAmount, getCartDetails, getCartDiscount,
        navigate, backendUrl,
        setToken, token, userId,
        toggleWishlistItem, fetchWishlist, wishlist, setWishlist,
        submitReview, getProductReviews, deleteReview,
        calculateSalePrice, getSingleProduct,
        savedAddress, saveAddress,
    }), [
        products, currency, delivery_fee,
        search, showSearch, cartItems,
        navigate, backendUrl, token, userId,
        wishlist, savedAddress,
    ]);

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;