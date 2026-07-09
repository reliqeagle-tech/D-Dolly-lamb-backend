import reviewModel from "../models/reviewModel.js";
import productModel from "../models/productModel.js";


// ========================
//  ADD REVIEW
// ========================
export const addReview = async (req, res) => {
    try {
        const { product, rating, comment } = req.body;
        const user = req.userId;

        if (!product || !rating || !comment) {
            return res.status(400).json({ success: false, message: "All fields are required." });
        }

        // Check if product exists
        const existingProduct = await productModel.findById(product);
        if (!existingProduct) {
            return res.status(404).json({ success: false, message: "Product not found." });
        }

        // Prevent duplicate reviews by same user
        const alreadyReviewed = await reviewModel.findOne({ product, user });
        if (alreadyReviewed) {
            return res.status(400).json({ success: false, message: "You have already reviewed this product." });
        }

        const newReview = await reviewModel.create({
            product,
            user,
            rating,
            comment
        });

        res.status(201).json({
            success: true,
            message: "Review added successfully!",
            review: newReview
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};


// ========================
//  GET REVIEWS FOR PRODUCT
// ========================
export const getReviewsByProduct = async (req, res) => {
    try {
        const { productId } = req.params;

        const reviews = await reviewModel
            .find({ product: productId })
            .populate("user", "name email") // send back only name + email
            .sort({ createdAt: -1 }); // newest first

        res.json({
            success: true,
            reviews
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};


// ========================
//  DELETE REVIEW
// ========================
export const deleteReview = async (req, res) => {
    try {
        const { reviewId } = req.params;
        const user = req.userId;

        const review = await reviewModel.findById(reviewId);

        if (!review) {
            return res.status(404).json({ success: false, message: "Review not found." });
        }

        // Only allow user who wrote it OR admin
        if (review.user.toString() !== user) {
            return res.status(403).json({ success: false, message: "Not authorized to delete this review." });
        }

        await review.deleteOne();

        res.json({
            success: true,
            message: "Review deleted successfully."
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};


// ========================
//  ADD THIS to reviewController.js
// ========================

// Admin delete (bypasses user ownership check)
export const adminDeleteReview = async (req, res) => {
    try {
        const { reviewId } = req.params;
        const review = await reviewModel.findById(reviewId);
        if (!review) {
            return res.status(404).json({ success: false, message: "Review not found." });
        }
        await review.deleteOne();
        res.json({ success: true, message: "Review deleted by admin." });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

