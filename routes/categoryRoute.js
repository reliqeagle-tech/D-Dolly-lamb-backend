import express from "express";
import { addCategory, addSubCategory, deleteCategory, deleteSubCategory, getCategories, updateCategory } from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.get("/list", getCategories);
categoryRouter.post("/add", addCategory);
categoryRouter.post("/add-subcategory", addSubCategory);
categoryRouter.put("/update/:categoryId", updateCategory);
categoryRouter.delete("/delete/:categoryId", deleteCategory);
categoryRouter.post("/delete-subcategory", deleteSubCategory);

export default categoryRouter;