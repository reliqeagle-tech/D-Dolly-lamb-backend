import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} }
}, { minimize: false })

const userModel = mongoose.models.user || mongoose.model('user',userSchema);

export default userModel



// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true, trim: true }, // Trim whitespace
//   email: { type: String, required: true, unique: true, lowercase: true }, // Lowercase for consistency
//   password: { type: String, required: true, minlength: 8 }, // Min 8 chars; hash in controller
//   role: { type: String, enum: ['user', 'admin'], default: 'user' }, // For permissions
//   joined: { type: Date, default: Date.now }, // Signup date
//   cartData: { type: Object, default: {} }, // Keep your cart storage
//   addresses: [{
//     street: { type: String, required: true },
//     city: { type: String, required: true },
//     state: { type: String, required: true },
//     zip: { type: String, required: true },
//     country: { type: String, required: true },
//     isDefault: { type: Boolean, default: false }, // One default address
//   }],
//   orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }], // Ref to orders
//   isDeleted: { type: Boolean, default: false }, // Soft delete
// }, {
//   timestamps: true, // Auto createdAt/updatedAt
// });

// // Index for fast queries
// // userSchema.index({ email: 1 });
// // userSchema.index({ role: 1 });

// const userModel = mongoose.models.user || mongoose.model("user", userSchema);

// export default userModel;