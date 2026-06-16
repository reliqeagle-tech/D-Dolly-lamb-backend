import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        categoryName: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        subCategories: [
            {
                type: String,
                trim: true
            }
        ]
    },
    { timestamps: true }
)

const categoryModel =
    mongoose.models.category ||
    mongoose.model("category", categorySchema);

export default categoryModel;