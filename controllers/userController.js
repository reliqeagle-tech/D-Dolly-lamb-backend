
// import cloudinary from "../config/cloudinary.js";
import { cloudinary } from "../config/cloudinary.js";
// import userModel from "../models/userModel.js";
// import streamifier from "streamifier"; // npm install streamifier
import validator from "validator";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import userModel from "../models/userModel.js";
import { sendMail } from "./sendMail.js";
import fs from "fs";
import streamifier from "streamifier";


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


// // Route for user register
// const registerUser = async (req, res) => {
//     try {

//         const { name, email, password } = req.body;

//         // checking user already exists or not
//         const exists = await userModel.findOne({ email });
//         if (exists) {
//             return res.json({ success: false, message: "User already exists" })
//         }

//         // validating email format & strong password
//         if (!validator.isEmail(email)) {
//             return res.json({ success: false, message: "Please enter a valid email" })
//         }
//         if (password.length < 8) {
//             return res.json({ success: false, message: "Please enter a strong password" })
//         }

//         // hashing user password
//         const salt = await bcrypt.genSalt(10)
//         const hashedPassword = await bcrypt.hash(password, salt)

//         const newUser = new userModel({
//             name,
//             email,
//             password: hashedPassword
//         })

//         const user = await newUser.save()
//         // HTML Email Template with inline Tailwind-inspired styles
//     const htmlTemplate = `
//       <!DOCTYPE html>
//       <html lang="en">
//       <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Welcome to Our Ecommerce Project</title>
//       </head>
//       <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333;">
//         <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px;">
//           <div style="text-align: center; padding: 20px 0; background-color: #4a5568; color: white;">
//             <h1 style="margin: 0; font-size: 24px; font-weight: bold;">Welcome to Our Ecommerce Project!</h1>
//           </div>
//           <div style="padding: 30px 20px;">
//             <h2 style="font-size: 20px; color: #2d3748; margin-bottom: 10px;">Hi ${name},</h2>
//             <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
//               Thank you for registering with us! We're excited to have you join our community.
//             </p>
//             <p style="font-size: 16px; line-height: 1.5; margin-bottom: 30px;">
//               We wish you'd like our products and services. Feel free to explore and shop with us!
//             </p>
//             <div style="text-align: center; margin-bottom: 30px;">
//               <a href="https://lethercult-e-commerce-app-frontend.vercel.app" style="display: inline-block; background-color: #4a5568; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-size: 16px; font-weight: bold;">
//                 Start Shopping
//               </a>
//             </div>
//             <p style="font-size: 14px; color: #718096; line-height: 1.5;">
//               If you have any questions, feel free to contact us at support@clothsy.com.
//             </p>
//             <div style="text-align: center; padding-top: 30px; border-top: 1px solid #e2e8f0; margin-top: 30px;">
//               <p style="margin: 0; font-size: 14px; color: #718096;">
//                 Best regards,<br>
//                 The Our Clothsy Ecommerce Team
//               </p>
//             </div>
//           </div>
//         </div>
//       </body>
//       </html>
//     `;
//         sendMail(email,"Welcome to Our Clothsy_TRENDS MEET TRUST","",htmlTemplate)

//         const token = createToken(user._id)

//         res.json({ success: true, token })

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message })
//     }
// }



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

    // ── D Dolly Lamb Premium Welcome Email ──────────────────────────────
    const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome to D Dolly Lamb</title>
</head>
<body style="margin:0; padding:0; background-color:#0d0703; font-family: Georgia, 'Times New Roman', serif;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0d0703; padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" border="0"
          style="max-width:600px; background-color:#1a0f0a; border:1px solid #3a2010; border-radius:4px; overflow:hidden;">

          <!-- Gold top accent line -->
          <tr>
            <td style="height:3px; background:linear-gradient(to right,#0d0703,#c8924a 30%,#f7c568 50%,#c8924a 70%,#0d0703);"></td>
          </tr>

          <!-- ── HEADER: Real Logo Image ── -->
          <tr>
            <td align="center" style="padding:40px 40px 28px; background-color:#150c07; border-bottom:1px solid #2a1508;">

              <!-- Divider under logo -->
              <table cellpadding="0" cellspacing="0" border="0" style="margin:22px auto 0; width:200px;">
                <tr>
                  <td style="height:1px; background:linear-gradient(to right,transparent,#c8924a,transparent);"></td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── HERO: Greeting ── -->
          <tr>
            <td align="center" style="padding:44px 40px 32px; background-color:#1a0f0a;">

              <!-- Eyebrow label -->
              <p style="margin:0 0 14px; font-size:10px; letter-spacing:0.4em; color:#c8924a; font-family:Arial,sans-serif; font-weight:700; text-transform:uppercase;">
                ACCOUNT CREATED SUCCESSFULLY
              </p>

              <!-- Main heading — simple and clear -->
              <h1 style="margin:0 0 18px; font-size:28px; font-weight:400; color:#f5e6cc; letter-spacing:0.05em; line-height:1.35;">
                Welcome, <span style="color:#f7c568;">${name}!</span>
              </h1>

              <!-- Gold diamond rule -->
              <table cellpadding="0" cellspacing="0" border="0" style="margin:0 auto 24px;">
                <tr>
                  <td style="width:40px; height:1px; background:linear-gradient(to left,#c8924a,transparent);"></td>
                  <td style="width:8px;">&nbsp;</td>
                  <td style="width:40px; height:1px; background:linear-gradient(to right,#c8924a,transparent);"></td>
                </tr>
              </table>

              <!-- Quote -->
              <p style="margin:0 0 16px; font-size:15px; color:#d4a96a; line-height:1.8; font-style:italic;">
                "Every stitch tells a story."
              </p>

              <!-- Body text — plain, easy to understand -->
              <p style="margin:0 0 12px; font-size:14px; color:#c8a870; line-height:1.9;">
                Thank you for joining <strong style="color:#f0c878;">D Dolly Lamb</strong>. Your account is now active. You can browse our full collection of handcrafted leather jackets, coats, skirts, and accessories.
              </p>
              <p style="margin:0 0 30px; font-size:13px; color:#a07848; line-height:1.9;">
                Log in with your email and password anytime to track orders, save items to your wishlist, and get early access to new arrivals and exclusive sales.
              </p>

              <!-- CTA Button -->
              <table cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
                <tr>
                  <td align="center" style="background:linear-gradient(135deg,#c8924a,#f7c568); border-radius:3px;">
                    <a href="https://ddollylamb.com/collection"
                       style="display:inline-block; padding:15px 44px; font-size:11px; font-weight:700; letter-spacing:0.28em; color:#1a0f0a; text-decoration:none; font-family:Arial,sans-serif; text-transform:uppercase;">
                      SHOP THE COLLECTION &rarr;
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- ── 3 PERKS ROW ── -->
          <tr>
            <td style="padding:0 28px 36px; background-color:#1a0f0a;">
              <table cellpadding="0" cellspacing="0" border="0" width="100%"
                style="border:1px solid #2a1808; border-radius:3px; background-color:#150c07;">
                <tr>
                  <!-- Perk 1 -->
                  <td align="center" style="padding:22px 12px; border-right:1px solid #2a1808; width:33%;">
                    <p style="margin:0 0 7px; font-size:20px; color:#c8924a;">✦</p>
                    <p style="margin:0 0 5px; font-size:9px; letter-spacing:0.22em; color:#f0c070; font-family:Arial,sans-serif; font-weight:700; text-transform:uppercase;">Authentic</p>
                    <p style="margin:0; font-size:11px; color:#907050; line-height:1.6;">100% genuine<br/>lambskin leather</p>
                  </td>
                  <!-- Perk 2 -->
                  <td align="center" style="padding:22px 12px; border-right:1px solid #2a1808; width:33%;">
                    <p style="margin:0 0 7px; font-size:20px; color:#c8924a;">◆</p>
                    <p style="margin:0 0 5px; font-size:9px; letter-spacing:0.22em; color:#f0c070; font-family:Arial,sans-serif; font-weight:700; text-transform:uppercase;">Handcrafted</p>
                    <p style="margin:0; font-size:11px; color:#907050; line-height:1.6;">Artisan-made,<br/>piece by piece</p>
                  </td>
                  <!-- Perk 3 -->
                  <td align="center" style="padding:22px 12px; width:33%;">
                    <p style="margin:0 0 7px; font-size:20px; color:#c8924a;">◈</p>
                    <p style="margin:0 0 5px; font-size:9px; letter-spacing:0.22em; color:#f0c070; font-family:Arial,sans-serif; font-weight:700; text-transform:uppercase;">Free Returns</p>
                    <p style="margin:0; font-size:11px; color:#907050; line-height:1.6;">7-day hassle-free<br/>return policy</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 28px;">
              <div style="height:1px; background:linear-gradient(to right,transparent,#3a2010,transparent);"></div>
            </td>
          </tr>

          <!-- ── FOOTER ── -->
          <tr>
            <td align="center" style="padding:28px 40px 36px; background-color:#1a0f0a;">
              <p style="margin:0 0 6px; font-size:10px; letter-spacing:0.3em; color:#c8924a; font-family:Arial,sans-serif; font-weight:700; text-transform:uppercase;">
                D DOLLY LAMB
              </p>
              <p style="margin:0 0 14px; font-size:9px; letter-spacing:0.28em; color:#5a3818; font-family:Arial,sans-serif; text-transform:uppercase;">
                ARTISAN LEATHER ATELIER · EST. 2001
              </p>
              <p style="margin:0 0 14px; font-size:11px; color:#7a5030; line-height:1.7;">
                Need help? Email us at
                <a href="mailto:support@ddollylamb.com" style="color:#c8924a; text-decoration:none;">support@ddollylamb.com</a>
              </p>
              <p style="margin:0; font-size:10px; color:#4a2e10; letter-spacing:0.08em; line-height:1.8; font-family:Arial,sans-serif;">
                You received this email because you created an account at ddollylamb.com.<br/>
                &copy; 2025 D Dolly Lamb. All rights reserved.
              </p>

              <table cellpadding="0" cellspacing="0" border="0" style="margin:22px auto 0; width:120px;">
                <tr>
                  <td style="height:1px; background:linear-gradient(to right,transparent,#c8924a,transparent);"></td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Gold bottom accent line -->
          <tr>
            <td style="height:3px; background:linear-gradient(to right,#0d0703,#c8924a 30%,#f7c568 50%,#c8924a 70%,#0d0703);"></td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
        `;
    // ────────────────────────────────────────────────────────────────────

    sendMail(email, "Welcome to D Dolly Lamb — Your Account Is Ready", "", htmlTemplate)

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

    const { email, password } = req.body

    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token })
    } else {
      res.json({ success: false, message: "Invalid credentials" })
    }

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message })
  }
}


const frontendMail = async (req, res) => {
  try {
    const { email } = req.body;

    // ── D Dolly Lamb Premium Newsletter Welcome Email ────────────────────
    const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>You're In — D Dolly Lamb Inner Circle</title>
</head>
<body style="margin:0; padding:0; background-color:#0d0703; font-family:Georgia,'Times New Roman',serif;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0d0703; padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" border="0"
          style="max-width:600px; background-color:#1a0f0a; border:1px solid #3a2010; border-radius:4px; overflow:hidden;">

          <!-- Gold top accent line -->
          <tr>
            <td style="height:3px; background:linear-gradient(to right,#0d0703,#c8924a 30%,#f7c568 50%,#c8924a 70%,#0d0703);"></td>
          </tr>

      

          <!-- ── HERO ── -->
          <tr>
            <td align="center" style="padding:48px 44px 36px; background-color:#1a0f0a;">

              <!-- Eyebrow -->
              <p style="margin:0 0 14px; font-size:9px; letter-spacing:0.46em; color:#c8924a; font-family:Arial,sans-serif; font-weight:700; text-transform:uppercase;">
                THE INNER CIRCLE
              </p>

              <!-- Heading -->
              <h1 style="margin:0 0 8px; font-size:30px; font-weight:400; color:#f5e6cc; letter-spacing:0.05em; line-height:1.3;">
                You're officially
              </h1>
              <h1 style="margin:0 0 22px; font-size:30px; font-weight:400; color:#f7c568; letter-spacing:0.05em; line-height:1.3;">
                on the list.
              </h1>

              <!-- Gold rule -->
              <table cellpadding="0" cellspacing="0" border="0" style="margin:0 auto 26px;">
                <tr>
                  <td style="width:50px; height:1px; background:linear-gradient(to left,#c8924a,transparent);"></td>
                  <td style="padding:0 10px;">
                    <div style="width:6px; height:6px; background:#c8924a; transform:rotate(45deg);"></div>
                  </td>
                  <td style="width:50px; height:1px; background:linear-gradient(to right,#c8924a,transparent);"></td>
                </tr>
              </table>

              <!-- Body copy -->
              <p style="margin:0 0 12px; font-size:15px; color:#d4a96a; line-height:1.8; font-style:italic;">
                "Style is not what you wear — it is how you carry what is crafted for you."
              </p>
              <p style="margin:0 0 28px; font-size:13px; color:#a07848; line-height:1.9;">
                Thank you for subscribing to <strong style="color:#f0c878;">D Dolly Lamb</strong>. You will now be the first to know about new arrivals, private sales, exclusive member discounts, and behind-the-scenes stories from our atelier.
              </p>

              <!-- 20% OFF highlight box -->
              <table cellpadding="0" cellspacing="0" border="0" style="margin:0 auto 32px; width:100%; max-width:400px;">
                <tr>
                  <td align="center"
                    style="padding:20px 28px; border:1px solid #c8924a; border-radius:3px; background-color:#150c07;">
                    <p style="margin:0 0 6px; font-size:9px; letter-spacing:0.36em; color:#c8924a; font-family:Arial,sans-serif; font-weight:700; text-transform:uppercase;">
                      YOUR WELCOME GIFT
                    </p>
                    <p style="margin:0 0 4px; font-size:36px; font-weight:400; color:#f7c568; letter-spacing:0.04em; line-height:1.1;">
                      20% OFF
                    </p>
                    <p style="margin:0; font-size:11px; color:#907050; letter-spacing:0.12em; font-family:Arial,sans-serif; text-transform:uppercase;">
                      YOUR FIRST ORDER
                    </p>
                    <!-- Discount code box -->
                    <table cellpadding="0" cellspacing="0" border="0" style="margin:16px auto 0;">
                      <tr>
                        <td style="padding:10px 24px; border:1px dashed rgba(200,146,74,0.4); border-radius:2px; background:rgba(200,146,74,0.06);">
                          <p style="margin:0; font-size:14px; font-weight:700; color:#f0c878; letter-spacing:0.28em; font-family:Arial,sans-serif;">
                            DDLWELCOME20
                          </p>
                        </td>
                      </tr>
                    </table>
                    <p style="margin:10px 0 0; font-size:9px; color:#5a3818; font-family:Arial,sans-serif; letter-spacing:0.1em;">
                      APPLY AT CHECKOUT · VALID FOR 30 DAYS
                    </p>
                  </td>
                </tr>
              </table>

              <!-- CTA Button -->
              <table cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
                <tr>
                  <td align="center" style="background:linear-gradient(135deg,#c8924a,#f7c568); border-radius:3px;">
                    <a href="https://ddollylamb.com/collection"
                       style="display:inline-block; padding:15px 44px; font-size:11px; font-weight:700; letter-spacing:0.28em; color:#1a0f0a; text-decoration:none; font-family:Arial,sans-serif; text-transform:uppercase;">
                      SHOP THE COLLECTION &rarr;
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- ── WHAT YOU GET ROW ── -->
          <tr>
            <td style="padding:0 28px 36px; background-color:#1a0f0a;">
              <p style="margin:0 0 16px; font-size:9px; letter-spacing:0.34em; color:#c8924a; font-family:Arial,sans-serif; font-weight:700; text-transform:uppercase; text-align:center;">
                WHAT YOU GET AS A SUBSCRIBER
              </p>
              <table cellpadding="0" cellspacing="0" border="0" width="100%"
                style="border:1px solid #2a1808; border-radius:3px; background-color:#150c07;">
                <tr>
                  <!-- Benefit 1 -->
                  <td align="center" style="padding:22px 10px; border-right:1px solid #2a1808; width:25%;">
                    <p style="margin:0 0 7px; font-size:18px; color:#c8924a;">✦</p>
                    <p style="margin:0 0 4px; font-size:8px; letter-spacing:0.18em; color:#f0c070; font-family:Arial,sans-serif; font-weight:700; text-transform:uppercase;">Early Access</p>
                    <p style="margin:0; font-size:10px; color:#7a5838; line-height:1.5;">New drops before anyone else</p>
                  </td>
                  <!-- Benefit 2 -->
                  <td align="center" style="padding:22px 10px; border-right:1px solid #2a1808; width:25%;">
                    <p style="margin:0 0 7px; font-size:18px; color:#c8924a;">◆</p>
                    <p style="margin:0 0 4px; font-size:8px; letter-spacing:0.18em; color:#f0c070; font-family:Arial,sans-serif; font-weight:700; text-transform:uppercase;">Private Sales</p>
                    <p style="margin:0; font-size:10px; color:#7a5838; line-height:1.5;">Exclusive subscriber discounts</p>
                  </td>
                  <!-- Benefit 3 -->
                  <td align="center" style="padding:22px 10px; border-right:1px solid #2a1808; width:25%;">
                    <p style="margin:0 0 7px; font-size:18px; color:#c8924a;">◈</p>
                    <p style="margin:0 0 4px; font-size:8px; letter-spacing:0.18em; color:#f0c070; font-family:Arial,sans-serif; font-weight:700; text-transform:uppercase;">Style Notes</p>
                    <p style="margin:0; font-size:10px; color:#7a5838; line-height:1.5;">Curated leather care tips</p>
                  </td>
                  <!-- Benefit 4 -->
                  <td align="center" style="padding:22px 10px; width:25%;">
                    <p style="margin:0 0 7px; font-size:18px; color:#c8924a;">❋</p>
                    <p style="margin:0 0 4px; font-size:8px; letter-spacing:0.18em; color:#f0c070; font-family:Arial,sans-serif; font-weight:700; text-transform:uppercase;">No Spam</p>
                    <p style="margin:0; font-size:10px; color:#7a5838; line-height:1.5;">Only what matters to you</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 28px;">
              <div style="height:1px; background:linear-gradient(to right,transparent,#3a2010,transparent);"></div>
            </td>
          </tr>

          <!-- ── FOOTER ── -->
          <tr>
            <td align="center" style="padding:28px 40px 36px; background-color:#1a0f0a;">
              <p style="margin:0 0 6px; font-size:10px; letter-spacing:0.3em; color:#c8924a; font-family:Arial,sans-serif; font-weight:700; text-transform:uppercase;">
                D DOLLY LAMB
              </p>
              <p style="margin:0 0 14px; font-size:9px; letter-spacing:0.28em; color:#5a3818; font-family:Arial,sans-serif; text-transform:uppercase;">
                ARTISAN LEATHER ATELIER · EST. 2001
              </p>
              <p style="margin:0 0 10px; font-size:11px; color:#7a5030; line-height:1.7;">
                Questions? Email us at
                <a href="mailto:support@ddollylamb.com" style="color:#c8924a; text-decoration:none;">support@ddollylamb.com</a>
              </p>
              <p style="margin:0; font-size:10px; color:#4a2e10; letter-spacing:0.08em; line-height:1.8; font-family:Arial,sans-serif;">
                You subscribed at ddollylamb.com. To unsubscribe,
                <a href="https://ddollylamb.com/unsubscribe" style="color:#5a3818; text-decoration:underline;">click here</a>.<br/>
                &copy; 2025 D Dolly Lamb. All rights reserved.
              </p>
              <table cellpadding="0" cellspacing="0" border="0" style="margin:22px auto 0; width:120px;">
                <tr>
                  <td style="height:1px; background:linear-gradient(to right,transparent,#c8924a,transparent);"></td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Gold bottom accent line -->
          <tr>
            <td style="height:3px; background:linear-gradient(to right,#0d0703,#c8924a 30%,#f7c568 50%,#c8924a 70%,#0d0703);"></td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
    `;
    // ─────────────────────────────────────────────────────────────────────

    await sendMail(
      email,
      "You're In — Welcome to the D Dolly Lamb Inner Circle",
      "",
      htmlTemplate
    );

    res.status(200).json({ success: true, message: "Mail sent successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}



// Logout Controllers

export const logoutController = async (req, res) => {
  try {
    const userId = req.userId; //middleware
    const cookieOption = {
      secure: true,
      httpOnly: true,
      sameSite: "None",
    };

    res.clearCookie("accessToken", cookieOption);
    res.clearCookie("refreshToken", cookieOption);
    const removeRefreshToken = await userModel.findByIdAndUpdate(userId, {
      refresh_token: "",
    });
    return res.json({
      message: "Logout successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};


export const userAvatarController = async (req, res) => {
  try {
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ success: false, message: "No file uploaded" });
    }

    // ✅ Step 1: Delete OLD avatar from Cloudinary BEFORE uploading new one
    if (user.avatar) {
      try {
        const urlParts = user.avatar.split("/");
        const uploadIndex = urlParts.indexOf("upload");
        const publicIdWithExt = urlParts.slice(uploadIndex + 2).join("/");
        const publicId = publicIdWithExt.replace(/\.[^/.]+$/, "");

        console.log("🗑️ Deleting old avatar:", publicId);
        const deleteResult = await cloudinary.uploader.destroy(publicId);
        console.log("🗑️ Delete result:", deleteResult); // should log { result: 'ok' }
      } catch (e) {
        console.log("Old avatar delete failed:", e.message);
      }
    }

    // ✅ Step 2: Upload NEW avatar
    const uploadFromBuffer = (buffer) => {
      return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: "avatar" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        streamifier.createReadStream(buffer).pipe(uploadStream);
      });
    };

    const result = await uploadFromBuffer(req.files[0].buffer);

    // ✅ Step 3: Save NEW avatar URL to database
    user.avatar = result.secure_url;
    await user.save();

    res.status(200).json({
      success: true,
      imageUrl: result.secure_url,
    });

  } catch (error) {
    console.error("Avatar Upload Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};



export const removeImageFromCloudinary = async (req, res) => {
  try {
    const imgUrl = req.query.img;

    if (!imgUrl || typeof imgUrl !== "string") {
      return res.status(400).json({
        success: false,
        message: "Image URL is required",
      });
    }

    // ✅ Correctly extract public_id including folder
    // URL: https://res.cloudinary.com/xxx/image/upload/v123456/avatar/filename.jpg
    // public_id needed: "avatar/filename"
    const urlParts = imgUrl.split("/");
    const uploadIndex = urlParts.indexOf("upload");
    const publicIdWithExt = urlParts.slice(uploadIndex + 2).join("/");
    const publicId = publicIdWithExt.replace(/\.[^/.]+$/, ""); // remove extension

    console.log("Deleting from Cloudinary, public_id:", publicId);

    const result = await cloudinary.uploader.destroy(publicId);

    if (result.result !== "ok") {
      return res.status(400).json({
        success: false,
        message: "Failed to delete image",
        result,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Image deleted successfully",
      result,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};




export const updateUserDetails = async (req, res) => {
  try {
    const userId = req.userId; // ✅ from auth middleware
    const { name, mobile } = req.body; // only name & mobile from frontend

    const userExist = await userModel.findById(userId);
    if (!userExist) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    const updateUser = await userModel.findByIdAndUpdate(
      userId,
      { name, mobile },
      { new: true }
    );

    return res.json({
      success: true,
      message: "User updated successfully",
      user: {
        name: updateUser?.name,
        _id: updateUser?._id,
        email: updateUser?.email,
        mobile: updateUser?.mobile,
        avatar: updateUser?.avatar,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || error,
    });
  }
};



// forgot password
export const forgotPasswordController = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Email not available",
        error: true,
        success: false,
      });
    }
    let verifyCode = Math.floor(100000 + Math.random() * 900000).toString();

    user.otp = verifyCode;
    user.otpExpires = Date.now() + 600000;
    await user.save();

    await sendEmailFun({
      sendTo: email,
      subject: "Verify email from DDolly Lamb",
      text: "",
      html: verificationEmail(user.name, verifyCode),
    });

    return res.json({
      message: "check your email",
      error: false,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export const verifyForgotPasswordOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    // 1️⃣ Validate input first
    if (!email || !otp) {
      return res.status(400).json({
        message: "Provide required fields: email, otp",
        error: true,
        success: false,
      });
    }
    // 2️⃣ Find user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Email not available",
        error: true,
        success: false,
      });
    }

    // 3️⃣ Check OTP
    if (otp !== user.otp) {
      return res.status(400).json({
        message: "Invalid OTP",
        error: true,
        success: false,
      });
    }

    // 4️⃣ Check OTP expiry
    const currentTime = new Date().toISOString();
    if (user.otpExpires < currentTime) {
      return res.status(400).json({
        message: "OTP is expired",
        error: true,
        success: false,
      });
    }

    // 5️⃣ Clear OTP after success
    user.otp = null;
    user.otpExpires = null;
    await user.save();

    // 6️⃣ Success response
    return res.status(200).json({
      message: "OTP verified successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { email, oldPassword, newPassword, confirmPassword } = req.body;
    if (!email || !newPassword || !confirmPassword) {
      return res.status(400).json({
        message: "provide required fields email, newPassword, confirmPassword",
        error: true,
        success: false,
      });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Email is not available",
        error: true,
        success: false,
      });
    }

    const checkPassword = await bcrypt.compare(oldPassword, user.password);
    if (!checkPassword) {
      return res.status(400).json({
        message: "Your old password is wrong",
        error: true,
        success: false,
      });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        message: "newPassword and cofirmPassword must be same",
        error: true,
        success: false,
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(newPassword, salt);
    await userModel.findByIdAndUpdate(user._id, {
      password: hashPassword,
    });

    return res.json({
      message: "Password update successfully.",
      error: false,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};



export { loginUser, registerUser, adminLogin, frontendMail, }