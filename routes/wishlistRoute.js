import express from "express";
import { getWishlist, toggleWishlist } from "../controllers/wishlistControllers.js";


const wishlistRouter = express.Router();

wishlistRouter.post("/toggle", toggleWishlist);
wishlistRouter.get("/:userId", getWishlist);

export default wishlistRouter;
