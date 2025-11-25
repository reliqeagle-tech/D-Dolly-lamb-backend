import userModel from "../models/userModel.js";
import productModel from "../models/productModel.js";

const addToCart = async (req, res) => {
    try {
        const { userId, itemId, size, color, quantity = 1, customPrice = 0 } = req.body;

        if (!userId || !size || !color) {
            return res.json({ success: false, message: "userId, size and color are required" });
        }

        const product = await productModel.findById(itemId);
        if (!product || !product.color.includes(color)) {
            return res.json({ success: false, message: "Invalid color selected" });
        }

        const userData = await userModel.findById(userId);
        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData || {};
        const variantKey = `${size}-${color}`;

        if (!cartData[itemId]) {
            cartData[itemId] = {};
        }

        if (cartData[itemId][variantKey]) {
            // Preserve customPrice, increment quantity
            const existing = cartData[itemId][variantKey];
            if (typeof existing === 'object') {
                existing.quantity = (existing.quantity || 0) + quantity;
            } else {
                // Legacy number → convert
                cartData[itemId][variantKey] = {
                    quantity: (existing || 0) + quantity,
                    customPrice
                };
            }
        } else {
            cartData[itemId][variantKey] = {
                quantity,
                customPrice
            };
        }

        await userModel.findByIdAndUpdate(userId, { cartData });
        res.json({ success: true, message: "Added to Cart" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const updateCart = async (req, res) => {
    try {
        const { userId, itemId, size, color, quantity } = req.body;

        if (!userId || !size || !color) {
            return res.json({ success: false, message: "userId, size and color are required" });
        }

        const userData = await userModel.findById(userId);
        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData || {};
        const variantKey = `${size}-${color}`;

        if (!cartData[itemId] || !cartData[itemId][variantKey]) {
            return res.json({ success: false, message: "Item not found in cart" });
        }

        if (quantity <= 0) {
            delete cartData[itemId][variantKey];
            if (Object.keys(cartData[itemId]).length === 0) {
                delete cartData[itemId];
            }
        } else {
            const existing = cartData[itemId][variantKey];
            if (typeof existing === 'object') {
                existing.quantity = quantity;  // Preserve customPrice
            } else {
                // Legacy → convert
                cartData[itemId][variantKey] = {
                    quantity,
                    customPrice: 0  // Default for legacy
                };
            }
        }

        await userModel.findByIdAndUpdate(userId, { cartData });
        res.json({ success: true, message: "Cart Updated" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const getUserCart = async (req, res) => {
    try {
        const { userId } = req.body;

        if (!userId) {
            return res.json({ success: false, message: "userId is required" });
        }

        const userData = await userModel.findById(userId);
        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData || {};

        // Normalize legacy numbers to objects
        for (const itemId in cartData) {
            for (const variantKey in cartData[itemId]) {
                if (typeof cartData[itemId][variantKey] === 'number') {
                    cartData[itemId][variantKey] = {
                        quantity: cartData[itemId][variantKey],
                        customPrice: 0
                    };
                }
            }
        }

        res.json({ success: true, cartData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { addToCart, updateCart, getUserCart };