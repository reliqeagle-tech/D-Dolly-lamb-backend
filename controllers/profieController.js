// // import bcrypt from 'bcryptjs';
// import bcrypt from 'bcryptjs'; // ✅ Changed to bcryptjs
// import jwt from 'jsonwebtoken';
// import userModel from '../models/userModel.js';
// import orderModel from '../models/orderModel.js'; // Assume Order model exists

// // Edit Profile (update name, email)
// export const updateProfile = async (req, res) => {
//   try {
//     const { userId } = req.user; // From auth middleware
//     const { name, email } = req.body;

//     if (!name || !email) {
//       return res.json({ success: false, message: 'Name and email required' });
//     }

//     // Check if email already exists (for other user)
//     const existingUser = await userModel.findOne({ email, _id: { $ne: userId } });
//     if (existingUser) {
//       return res.json({ success: false, message: 'Email already in use' });
//     }

//     const updatedUser = await userModel.findByIdAndUpdate(
//       userId,
//       { name, email },
//       { new: true }
//     );

//     res.json({ success: true, message: 'Profile updated', user: { name: updatedUser.name, email: updatedUser.email } });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// // Change Password
// export const changePassword = async (req, res) => {
//   try {
//     const { userId } = req.user;
//     const { oldPassword, newPassword } = req.body;

//     if (!oldPassword || !newPassword) {
//       return res.json({ success: false, message: 'Old and new password required' });
//     }

//     const user = await userModel.findById(userId);
//     if (!user) {
//       return res.json({ success: false, message: 'User not found' });
//     }

//     // Verify old password
//     const isMatch = await bcrypt.compare(oldPassword, user.password);
//     if (!isMatch) {
//       return res.json({ success: false, message: 'Old password incorrect' });
//     }

//     // Hash new password
//     const hashedPassword = await bcrypt.hash(newPassword, 12);
//     user.password = hashedPassword;
//     await user.save();

//     res.json({ success: true, message: 'Password changed successfully' });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// // View Orders
// export const getOrders = async (req, res) => {
//   try {
//     const { userId } = req.user;
//     const user = await userModel.findById(userId).populate('orders');
//     if (!user) {
//       return res.json({ success: false, message: 'User not found' });
//     }

//     res.json({ success: true, orders: user.orders });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// // Get Addresses
// export const getAddresses = async (req, res) => {
//   try {
//     const { userId } = req.user;
//     const user = await userModel.findById(userId);
//     if (!user) {
//       return res.json({ success: false, message: 'User not found' });
//     }

//     res.json({ success: true, addresses: user.addresses });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// // Add/Update Address
// export const updateAddress = async (req, res) => {
//   try {
//     const { userId } = req.user;
//     const { addresses } = req.body; // Array of addresses

//     if (!Array.isArray(addresses) || addresses.length === 0) {
//       return res.json({ success: false, message: 'Valid addresses array required' });
//     }

//     const user = await userModel.findById(userId);
//     if (!user) {
//       return res.json({ success: false, message: 'User not found' });
//     }

//     // Set only one as default
//     addresses.forEach(addr => (addr.isDefault = false));
//     if (addresses[0]) addresses[0].isDefault = true; // First as default

//     user.addresses = addresses;
//     await user.save();

//     res.json({ success: true, message: 'Addresses updated', addresses: user.addresses });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// // Logout (frontend handles token removal; backend just responds)
// export const logout = async (req, res) => {
//   try {
//     res.json({ success: true, message: 'Logged out successfully' });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };



import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';

// ✅ Get user profile
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// ✅ Update user profile
export const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    const updatedUser = await user.save();
    res.json({ success: true, user: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update profile' });
  }
};

// ✅ Upload profile photo
export const uploadProfilePhoto = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    const user = await User.findById(req.user.id);
    user.profilePhoto = `/uploads/${req.file.filename}`;
    await user.save();

    res.json({ success: true, imageUrl: user.profilePhoto });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Image upload failed' });
  }
};

// ✅ Change password
export const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const user = await User.findById(req.user.id);

    if (!user) return res.status(404).json({ success: false, message: 'User not found' });

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch)
      return res.status(400).json({ success: false, message: 'Incorrect current password' });

    if (newPassword.length < 6)
      return res.status(400).json({ success: false, message: 'Password too short' });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    await user.save();

    res.json({ success: true, message: 'Password changed successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Password change failed' });
  }
};


// import bcrypt from 'bcrypt';  // For password hashing
// import User from '../models/userModel.js';  // Adjust path

// ✅ New: Change Password
// export const changePassword = async (req, res) => {
//   try {
//     const userId = req.userId;  // From auth middleware
//     const { currentPassword, newPassword, confirmPassword } = req.body;

//     // Validate inputs
//     if (!currentPassword || !newPassword || !confirmPassword) {
//       return res.json({ success: false, message: "All password fields are required" });
//     }
//     if (newPassword !== confirmPassword) {
//       return res.json({ success: false, message: "New passwords do not match" });
//     }
//     if (newPassword.length < 6) {
//       return res.json({ success: false, message: "New password must be at least 6 characters" });
//     }

//     // Fetch user
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.json({ success: false, message: "User not found" });
//     }

//     // Verify current password
//     const isMatch = await bcrypt.compare(currentPassword, user.password);
//     if (!isMatch) {
//       return res.json({ success: false, message: "Current password is incorrect" });
//     }

//     // Hash and update
//     user.password = await bcrypt.hash(newPassword, 10);  // Salt rounds: 10
//     await user.save();

//     res.json({ success: true, message: "Password changed successfully" });
//   } catch (error) {
//     console.error("Change Password Error:", error);
//     res.json({ success: false, message: error.message });
//   }
// };