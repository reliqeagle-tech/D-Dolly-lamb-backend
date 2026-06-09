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
    detailedDescription: { type: String, required: true },


    // BASE PRICE (for reference)
    price: { type: Number, required: true, min: 0 },
    discountPrice: { type: Number, default: 0, min: 0 },
    discountActive: { type: Boolean, default: false },

    image: { type: [String], required: true }, // Explicit array of strings (URLs)
    category: { type: String, required: true, index: true }, // Index for queries
    subCategory: { type: String, required: true },


    // ✅ UPDATED: SIZE-BASED PRICING WITH CUSTOM PRICE OPTION
    sizes: [{
        size: {
            type: String,
            required: true
        },
        priceMultiplier: {
            type: Number,
            default: 1,
            min: 0.5,
            max: 2,
            required: true
        },
        stock: {
            type: Number,
            default: 0,
            min: 0
        },
        // ✅ NEW FIELDS FOR CUSTOM PRICING
        customPrice: {
            type: Number,
            default: 0,
            min: 0
        },
        useCustomPrice: {
            type: Boolean,
            default: false
        }
    }],


    // ✅ COLORS WITH HEX VALUES
    color: [{
        name: { type: String, required: true },
        hex: { type: String, required: true }
    }],


    // ✅ NEW: For customizations like jacket lining
    customOptions: {
        linings: [{
            name: { type: String, required: true },
            price: { type: Number, required: true, min: 0 }
        }] // Default empty; populate via admin UI
    },

    // itemDetails:
    // {
    //     title: String,
    //     value: String,
    // },

    itemDetails: [
        {
            title: {
                type: String,
                trim: true
            },

            value: {
                type: String,
                trim: true
            }
        }
    ],
    sku: {
        type: String,
        required: true,
        uppercase: true,
        unique: true,
        index: true
    },
    bestseller: { type: Boolean, default: false, index: true }, // Default + index
    date: { type: Date, default: Date.now, required: true }, // Changed to Date; auto-now
    isDeleted: { type: Boolean, default: false } // Soft delete
}, {
    timestamps: true // Auto createdAt/updatedAt
});


const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;