// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     description: { type: String, required: true },
//     price: { type: Number, required: true },
//     image: { type: Array, required: true },
//     category: { type: String, required: true },
//     subCategory: { type: String, required: true },
//     sizes: { type: Array, required: true },
//     // color: { type: String, required: true},
//     color: { type: [String], required: true },
//     bestseller: { type: Boolean },
//     date: { type: Number, required: true }
// })

// const productModel  = mongoose.models.product || mongoose.model("product",productSchema);

// export default productModel


import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true }, // Added trim for whitespace
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 }, // Prevent negative prices
    image: { type: [String], required: true }, // Explicit array of strings (URLs)
    category: { type: String, required: true, index: true }, // Index for queries
    subCategory: { type: String, required: true },
    sizes: { type: [String], required: true, unique: true }, // Unique to avoid duplicates
    color: { type: [String], required: true, unique: true }, // Unique items
    // ✅ NEW: For customizations like jacket lining
    customOptions: {
        linings: [{
            name: { type: String, required: true },
            price: { type: Number, required: true, min: 0 }
        }] // Default empty; populate via admin UI
    },
    bestseller: { type: Boolean, default: false, index: true }, // Default + index
    date: { type: Date, default: Date.now, required: true }, // Changed to Date; auto-now
    isDeleted: { type: Boolean, default: false } // Soft delete
}, {
    timestamps: true // Auto createdAt/updatedAt
});

// Optional: Virtual for full price (if needed for base + avg lining)
// productSchema.virtual('avgFullPrice').get(function() {
//     const avgLining = this.customOptions?.linings?.reduce((sum, l) => sum + l.price, 0) / (this.customOptions?.linings?.length || 1) || 0;
//     return this.price + avgLining;
// });

const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;