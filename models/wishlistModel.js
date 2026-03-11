import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "product", required: true },
}, { timestamps: true });

export default mongoose.model("Wishlist", wishlistSchema);
