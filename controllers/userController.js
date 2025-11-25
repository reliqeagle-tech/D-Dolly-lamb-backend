import validator from "validator";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import userModel from "../models/userModel.js";
import { sendMail } from "./sendMail.js";


const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

// Route for user login
const loginUser = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "User doesn't exists" })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {

            const token = createToken(user._id)
            res.json({ success: true, token })

        }
        else {
            res.json({ success: false, message: 'Invalid credentials' })
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

// backend/controllers/userController.js


// export const getUserProfile = async (req, res) => {
//   try {
//     const userId = req.user.id; // From JWT middleware
//     const user = await userModel.findById(userId).select("-password");

//     if (!user) return res.status(404).json({ success: false, message: "User not found" });

//     res.json({ success: true, user });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

export const getUserProfile = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await userModel.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, user });
  } catch (error) {
    console.error("getUserProfile error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};


// Update Profile (name/email)
export const updateProfile = async (req, res) => {
  try {
    const userId = req.userId;  // From auth middleware
    const { name, email } = req.body;

    if (!name || !email) {
      return res.json({ success: false, message: "Name and email are required" });
    }

    const user = await userModel.findByIdAndUpdate(
      userId,
      { name, email },
      { new: true, runValidators: true }
    ).select('-password');

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    // ✅ FIXED: Move this OUTSIDE the if block (proper indentation)
    res.json({ success: true, user });
  } catch (error) {
    console.error("Update Profile Error:", error);
    res.json({ success: false, message: error.message || "Server error" });
  }
};


// Route for user register
const registerUser = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        // checking user already exists or not
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" })
        }

        // validating email format & strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" })
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save()
        // HTML Email Template with inline Tailwind-inspired styles
    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Our Ecommerce Project</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px;">
          <div style="text-align: center; padding: 20px 0; background-color: #4a5568; color: white;">
            <h1 style="margin: 0; font-size: 24px; font-weight: bold;">Welcome to Our Ecommerce Project!</h1>
          </div>
          <div style="padding: 30px 20px;">
            <h2 style="font-size: 20px; color: #2d3748; margin-bottom: 10px;">Hi ${name},</h2>
            <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
              Thank you for registering with us! We're excited to have you join our community.
            </p>
            <p style="font-size: 16px; line-height: 1.5; margin-bottom: 30px;">
              We wish you'd like our products and services. Feel free to explore and shop with us!
            </p>
            <div style="text-align: center; margin-bottom: 30px;">
              <a href="https://lethercult-e-commerce-app-frontend.vercel.app" style="display: inline-block; background-color: #4a5568; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-size: 16px; font-weight: bold;">
                Start Shopping
              </a>
            </div>
            <p style="font-size: 14px; color: #718096; line-height: 1.5;">
              If you have any questions, feel free to contact us at support@clothsy.com.
            </p>
            <div style="text-align: center; padding-top: 30px; border-top: 1px solid #e2e8f0; margin-top: 30px;">
              <p style="margin: 0; font-size: 14px; color: #718096;">
                Best regards,<br>
                The Our Clothsy Ecommerce Team
              </p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;
        sendMail(email,"Welcome to Our Clothsy_TRENDS MEET TRUST","",htmlTemplate)

        const token = createToken(user._id)

        res.json({ success: true, token })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

// Route for admin login
const adminLogin = async (req, res) => {
    try {
        
        const {email,password} = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password,process.env.JWT_SECRET);
            res.json({success:true,token})
        } else {
            res.json({success:false,message:"Invalid credentials"})
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}
// send mail via frontend
const frontendMail = async (req,res) =>{
      try {
    const { email } = req.body;
    await sendMail(
      email,
      "Welcome to Our Newsletter",
      "Thank you for subscribing!",
      "<h1>Thank you for subscribing!</h1>"
    );
    res.status(200).json({ success: true, message: "Mail sent successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}


export { loginUser, registerUser, adminLogin,frontendMail}