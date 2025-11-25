import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const backendUrl = import.meta.env.DEV ? import.meta.env.VITE_BACKEND_URL_D : import.meta.env.VITE_BACKEND_URL;

    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('')
    const navigate = useNavigate();

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
        await axios.post(backendUrl + '/api/cart/add', {
            itemId, size, color, customPrice
        }, { headers: { Authorization: `Bearer ${token}` } });
    }
};


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
        await axios.post(backendUrl + '/api/cart/update', {
            itemId, size, color, quantity
        }, {headers: { Authorization: `Bearer ${token}`}  });
    }
};

    const getCartCount = () => {
  let totalCount = 0;
  for (const items in cartItems) {
    for (const item in cartItems[items]) {
      const itemData = cartItems[items][item];  // ✅ Extract (object or number)
      // ✅ Handle both: old number or new {quantity: n}
      totalCount += typeof itemData === 'number' ? itemData : (itemData?.quantity || 0);
    }
  }
//   console.log('Cart Count:', totalCount);  // 🔍 Debug: Check in console (remove after test)
  return totalCount;  // e.g., 2 + 1 + 5 + 3 = 11
};

  const getCartAmount = () => {
  let totalAmount = 0;
//   console.log('Calculating Cart Amount - Raw cartItems:', cartItems);  // 🔍 Debug (remove after test)
  for (const items in cartItems) {
    const itemInfo = products.find((product) => product._id === items);
    if (!itemInfo) continue;
    for (const item in cartItems[items]) {
      const itemData = cartItems[items][item];  // ✅ Extract raw (object or number)
      const qty = typeof itemData === 'number' ? itemData : (itemData?.quantity || 0);  // ✅ Normalize qty
      const addon = typeof itemData === 'number' ? 0 : (itemData?.customPrice || 0);  // ✅ Normalize custom
      if (qty > 0) {
        const lineTotal = (itemInfo.price + addon) * qty;  // ✅ Base + custom * qty
        totalAmount += lineTotal;
        // console.log(`Line Calc: ${itemInfo.name} - Qty ${qty} x (Base ${itemInfo.price} + Custom ${addon}) = ${lineTotal}`);  // 🔍 Per-line debug (remove after)
      }
    }
  }
//   console.log('Final Subtotal:', totalAmount);  // 🔍 Total debug (remove after)
  return totalAmount;  // e.g., 25.00 for 2x12.50
};



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

    // Updated: Add userId to body if backend needs it (extract from token or localStorage)
    const getUserCart = async (token) => {
        try {
            // Assume userId from localStorage or decode token – adjust as per your auth
            const userId = localStorage.getItem('token',token); // Or jwt decode
            const response = await axios.post(backendUrl + '/api/cart/get', { userId }, { headers: { Authorization: `Bearer ${token}`}  });
            if (response.data.success) {
                setCartItems(response.data.cartData); // Expects object { itemId: { "S-Tobacco": 1 } }
            }
        } catch (error) {
            console.log(error);
            // Don't toast error on load – silent fail
        }
    };

    useEffect(() => {
        getProductsData();
    }, []);

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'));
            getUserCart(localStorage.getItem('token'));
        }
        if (token) {
            getUserCart(token);
        }
    }, [token]);

    // New helper: For cart page, to get detailed items with split size/color
    const getCartDetails = () => {
        const details = [];
        for (const itemId in cartItems) {
            const product = products.find(p => p._id === itemId);
            if (!product) continue;
            for (const key in cartItems[itemId]) {
                if (cartItems[itemId][key] > 0) {
                    const [size, color] = key.split('-');
                    details.push({
                        productId: itemId,
                        product,
                        size,
                        color,
                        quantity: cartItems[itemId][key]
                    });
                }
            }
        }
        return details;
    };

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart, setCartItems,
        getCartCount, updateQuantity, // Now with color
        getCartAmount, getCartDetails, // New helper for display
        navigate, backendUrl,
        setToken, token
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;