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

  <!-- Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0d0703; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px; background-color:#1a0f0a; border:1px solid rgba(200,146,74,0.25); border-radius:4px; overflow:hidden;">

          <!-- Gold top accent line -->
          <tr>
            <td style="height:3px; background: linear-gradient(to right, #0d0703, #c8924a 30%, #f7c568 50%, #c8924a 70%, #0d0703);"></td>
          </tr>

          <!-- Header -->
          <tr>
            <td align="center" style="padding: 44px 40px 32px; background-color:#150c07; border-bottom:1px solid rgba(200,146,74,0.15);">

              <!-- Diamond logo mark -->
              <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom:18px;">
                <tr>
                  <td align="center">
                    <div style="width:56px; height:56px; border:1.5px solid #c8924a; transform:rotate(45deg); display:inline-block; position:relative;">
                      <div style="position:absolute; inset:6px; border:1px solid rgba(200,146,74,0.35);"></div>
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Brand name -->
              <p style="margin:0 0 4px; font-size:11px; letter-spacing:0.5em; color:#c8924a; font-family:'Arial',sans-serif; font-weight:700; text-transform:uppercase;">
                D DOLLY LAMB
              </p>
              <p style="margin:0; font-size:8px; letter-spacing:0.42em; color:#6a4820; font-family:'Arial',sans-serif; font-weight:500; text-transform:uppercase;">
                ARTISAN ATELIER
              </p>

              <!-- Divider -->
              <table cellpadding="0" cellspacing="0" border="0" style="margin:22px auto 0; width:180px;">
                <tr>
                  <td style="height:1px; background:linear-gradient(to right, transparent, #c8924a, transparent);"></td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Hero section -->
          <tr>
            <td align="center" style="padding: 48px 48px 36px; background-color:#1a0f0a;">
              <p style="margin:0 0 10px; font-size:10px; letter-spacing:0.38em; color:#c8924a; font-family:'Arial',sans-serif; font-weight:600; text-transform:uppercase;">
                WELCOME TO THE ATELIER
              </p>
              <h1 style="margin:0 0 20px; font-size:30px; font-weight:400; color:#f0ddc0; letter-spacing:0.06em; line-height:1.3;">
                A Warm Welcome,<br/>
                <span style="color:#f7c568;">${name}</span>
              </h1>

              <!-- Small gold rule -->
              <table cellpadding="0" cellspacing="0" border="0" style="margin:0 auto 28px;">
                <tr>
                  <td style="width:32px; height:1px; background:linear-gradient(to left, #c8924a, transparent);"></td>
                  <td style="width:7px; height:7px; background:#c8924a; transform:rotate(45deg); margin:0 8px;"></td>
                  <td style="width:32px; height:1px; background:linear-gradient(to right, #c8924a, transparent);"></td>
                </tr>
              </table>

              <p style="margin:0 0 16px; font-size:15px; color:#c8a870; line-height:1.8; font-style:italic;">
                "Craftsmanship is not a skill — it is a devotion."
              </p>
              <p style="margin:0 0 28px; font-size:13px; color:#7a5a38; line-height:1.9;">
                Your account has been created. You are now part of an exclusive circle of individuals who appreciate the art of genuine lambskin leather — handcrafted with precision, aged with character.
              </p>

              <!-- CTA Button -->
              <table cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
                <tr>
                  <td align="center" style="background:linear-gradient(135deg,#c8924a,#f7c568); border-radius:2px;">
                    <a href="https://d-dolly-lamb.vercel.app/collection"
                       style="display:inline-block; padding:15px 40px; font-size:10px; font-weight:700; letter-spacing:0.3em; color:#1a0f0a; text-decoration:none; font-family:'Arial',sans-serif; text-transform:uppercase;">
                      EXPLORE THE COLLECTION &rarr;
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 3 Perks row -->
          <tr>
            <td style="padding: 0 32px 36px; background-color:#1a0f0a;">
              <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border:1px solid rgba(200,146,74,0.12); border-radius:3px; background-color:#150c07;">
                <tr>
                  <!-- Perk 1 -->
                  <td align="center" style="padding:24px 16px; border-right:1px solid rgba(200,146,74,0.12); width:33%;">
                    <p style="margin:0 0 6px; font-size:18px; color:#c8924a;">✦</p>
                    <p style="margin:0 0 4px; font-size:8px; letter-spacing:0.28em; color:#c8924a; font-family:'Arial',sans-serif; font-weight:700; text-transform:uppercase;">Authentic</p>
                    <p style="margin:0; font-size:10px; color:#5a4028; line-height:1.5;">100% genuine lambskin leather</p>
                  </td>
                  <!-- Perk 2 -->
                  <td align="center" style="padding:24px 16px; border-right:1px solid rgba(200,146,74,0.12); width:33%;">
                    <p style="margin:0 0 6px; font-size:18px; color:#c8924a;">◆</p>
                    <p style="margin:0 0 4px; font-size:8px; letter-spacing:0.28em; color:#c8924a; font-family:'Arial',sans-serif; font-weight:700; text-transform:uppercase;">Handcrafted</p>
                    <p style="margin:0; font-size:10px; color:#5a4028; line-height:1.5;">Artisan-made, piece by piece</p>
                  </td>
                  <!-- Perk 3 -->
                  <td align="center" style="padding:24px 16px; width:33%;">
                    <p style="margin:0 0 6px; font-size:18px; color:#c8924a;">◈</p>
                    <p style="margin:0 0 4px; font-size:8px; letter-spacing:0.28em; color:#c8924a; font-family:'Arial',sans-serif; font-weight:700; text-transform:uppercase;">Insured</p>
                    <p style="margin:0; font-size:10px; color:#5a4028; line-height:1.5;">Every order fully insured</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 32px;">
              <div style="height:1px; background:linear-gradient(to right,transparent,rgba(200,146,74,0.18),transparent);"></div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding:32px 40px 40px; background-color:#1a0f0a;">
              <p style="margin:0 0 8px; font-size:9px; letter-spacing:0.28em; color:#c8924a; font-family:'Arial',sans-serif; text-transform:uppercase;">
                D DOLLY LAMB · ARTISAN ATELIER
              </p>
              <p style="margin:0 0 16px; font-size:10px; color:#4a3018; line-height:1.7;">
                Questions? Reach us at
                <a href="mailto:support@ddollylambofficial.com" style="color:#c8924a; text-decoration:none;">support@ddollylambofficial.com</a>
              </p>
              <p style="margin:0; font-size:9px; color:#3a2410; letter-spacing:0.12em; line-height:1.8; font-family:'Arial',sans-serif;">
                EST. 2001 &nbsp;·&nbsp; HANDCRAFTED WITH DEVOTION &nbsp;·&nbsp; ALL RIGHTS RESERVED
              </p>

              <!-- Bottom gold line -->
              <table cellpadding="0" cellspacing="0" border="0" style="margin:24px auto 0; width:120px;">
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

    sendMail(email, "Welcome to D Dolly Lamb — Artisan Leather Atelier", "", htmlTemplate)

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
// send mail via frontend
const frontendMail = async (req, res) => {
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


export { loginUser, registerUser, adminLogin, frontendMail }