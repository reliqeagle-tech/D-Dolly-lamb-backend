import express from 'express';
import { loginUser, registerUser, adminLogin, frontendMail, getUserProfile, updateProfile, logoutController, userAvatarController, removeImageFromCloudinary, updateUserDetails, forgotPasswordController, verifyForgotPasswordOtp, resetPassword } from '../controllers/userController.js';
import auth from '../middleware/auth.js';
import profileAuth from '../middleware/profileAuth.js';
import authUser from '../middleware/auth.js';
// import upload from '../middleware/multer.js';
import uploader from '../middleware/avatarUpload.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/admin', adminLogin)
userRouter.post('/send-mail', frontendMail)
userRouter.get('/profile', profileAuth, getUserProfile)
userRouter.put('/profile', authUser, updateProfile);
userRouter.get('/logout', auth, logoutController)
userRouter.put('/user-avatar', auth, uploader.array('avatar'), userAvatarController)
userRouter.delete('/deleteImage', auth, removeImageFromCloudinary)
userRouter.put('/:id', auth, updateUserDetails)
userRouter.post('/forgot-password', forgotPasswordController)
userRouter.post('/verify-forgot-password-otp', verifyForgotPasswordOtp)
userRouter.post('/reset-password', resetPassword)

export default userRouter;