import express from "express";
import { addReview, getReviewsByProduct, deleteReview, adminDeleteReview } from "../controllers/reviewController.js";
import authUser from "../middleware/auth.js";  // your existing auth middleware

const reviewRouter = express.Router();

// Add Review
reviewRouter.post("/add", authUser, addReview);

// Get all reviews for a product
reviewRouter.get("/:productId", getReviewsByProduct);

// Delete review
reviewRouter.delete("/:reviewId", authUser, deleteReview);

// Admin delete (no ownership check)
reviewRouter.delete("/admin/:reviewId", adminDeleteReview);

export default reviewRouter;
