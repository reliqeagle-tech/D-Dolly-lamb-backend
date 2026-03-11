import wishlistModel from "../models/wishlistModel.js";

// Add or Remove
export const toggleWishlist = async (req, res) => {
    try {
        const { userId, productId } = req.body;

        const exists = await wishlistModel.findOne({ userId, productId });

        if (exists) {
            await wishlistModel.findByIdAndDelete(exists._id);
            return res.json({ success: true, message: "Removed from wishlist" });
        }

        await wishlistModel.create({ userId, productId });
        res.json({ success: true, message: "Added to wishlist" });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Get User Wishlist
export const getWishlist = async (req, res) => {
    try {
        const wishlist = await wishlistModel.find({ userId: req.params.userId });
        res.json({ success: true, wishlist });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};
