
// import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { ShopContext } from "../context/ShopContext.jsx";
// import { assets } from "../assets/assets";

// const ProfilePage = () => {
//     const [user, setUser] = useState(null);
//     const [previewImage, setPreviewImage] = useState(null);
//     const [uploading, setUploading] = useState(false);
//     const { backendUrl } = useContext(ShopContext);

//     useEffect(() => {
//         const fetchUser = async () => {
//             try {
//                 const token = localStorage.getItem("token");
//                 const { data } = await axios.get(`${backendUrl}/api/user/profile`, {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });
//                 setUser(data.user);
//             } catch (error) {
//                 console.error(error);
//                 toast.error("Failed to fetch user info");
//             }
//         };
//         fetchUser();
//     }, [backendUrl]);

//     const handleImageUpload = async (e) => {
//         const file = e.target.files[0];
//         if (!file) return;

//         // Show instant preview
//         setPreviewImage(URL.createObjectURL(file));

//         const formData = new FormData();
//         formData.append("image", file);

//         try {
//             setUploading(true);
//             const token = localStorage.getItem("token");

//             const { data } = await axios.post(
//                 `${backendUrl}/api/user/upload-profile`,
//                 formData,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                         "Content-Type": "multipart/form-data",
//                     },
//                 }
//             );

//             if (data.success) {
//                 toast.success("Profile photo updated!");
//                 setUser((prev) => ({ ...prev, profilePhoto: data.imageUrl }));
//                 setPreviewImage(null); // Reset local preview
//             } else {
//                 toast.error(data.message || "Failed to upload image");
//             }
//         } catch (error) {
//             console.error(error);
//             toast.error("Image upload failed");
//         } finally {
//             setUploading(false);
//         }
//     };

//     if (!user) {
//         return <div className="text-center mt-10 text-gray-600">Loading profile...</div>;
//     }

//     const profileSrc = previewImage || user.profilePhoto || assets.uploadprofilephoto;

//     return (
//         <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-8">
//             <h2 className="text-2xl font-bold mb-6 text-gray-800">My Profile</h2>

//             <div className="flex items-center gap-6 border-b pb-6 mb-6">
//                 <label className="relative cursor-pointer group">
//                     <img src={profileSrc} alt="Profile" className={`w-28 h-28 rounded-full border-2 border-gray-300 object-cover transition
//           ${uploading ? "opacity-50" : "hover:opacity-80"
//                         }`}
//                     />
//                     {uploading && (
//                         <div className="absolute inset-0 flex items-center justify-center bg-white/60 rounded-full">
//                             <div className="w-6 h-6 border-2 border-t-transparent border-black rounded-full animate-spin"></div>
//                         </div>
//                     )}
//                     <input
//                         type="file"
//                         accept="image/*"
//                         onChange={handleImageUpload}
//                         className="hidden"
//                     />
//                     <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs py-1 opacity-0 group-hover:opacity-100 text-center transition">
//                         Change photo
//                     </div>
//                 </label>

//                 <div>
//                     <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
//                     <p className="text-gray-600">{user.email}</p>
//                 </div>
//             </div>

//             {/* // <div className="space-y-2 text-gray-700">
//             //     <p>
//             //         <span className="font-medium">Joined:</span>{" "}
//             //         {new Date(user.createdAt).toLocaleDateString()}
//             //     </p>
//             //     {user.role && (
//             //         <p>
//             //             <span className="font-medium">Role:</span> {user.role}
//             //         </p>
//             //     )}
//             // </div> */}
//             <div className="p-4 border rounded-xl bg-gray-50">
//           <h4 className="font-semibold mb-3 text-gray-800">
//             Account Details
//           </h4>
//           <p>
//             <strong>Joined:</strong>{" "}
//             {user.createdAt
//               ? new Date(user.createdAt).toLocaleDateString()
//               : "Unknown"}
//           </p>
//           <p>
//             <strong>Role:</strong> {user.isAdmin ? "Admin" : "Customer"}
//           </p>
//         </div>
//             <div className="mt-8">

//                 <button
//                     onClick={() => {
//                         localStorage.removeItem("token");
//                         window.location.href = "/login";
//                     }}
//                     className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
//                 >
//                     Logout
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ProfilePage;

//   import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { ShopContext } from "../context/ShopContext.jsx";
// import { assets } from "../assets/assets";

// const ProfilePage = () => {
//     const [user, setUser] = useState(null);
//     const [previewImage, setPreviewImage] = useState(null);
//     const [uploading, setUploading] = useState(false);
//     const [editing, setEditing] = useState(false);
//     const [editForm, setEditForm] = useState({ name: "", email: "" });
//     const [changingPassword, setChangingPassword] = useState(false);
//     const [passwordForm, setPasswordForm] = useState({ currentPassword: "", newPassword: "", confirmPassword: "" });
//     const [saving, setSaving] = useState(false);
//     const [changingPw, setChangingPw] = useState(false);
//     const [currentDate, setCurrentDate] = useState("");
//     const { backendUrl } = useContext(ShopContext);

//     // ✅ useEffect to set current date on component mount (no backend needed)
//     useEffect(() => {
//         const today = new Date().toLocaleDateString("en-US", {
//             year: "numeric",
//             month: "long",
//             day: "numeric"
//         });
//         setCurrentDate(today);  // e.g., "November 10, 2025"
//     }, []);

//     // ✅ NEW: Load profile image from localStorage on mount
//     useEffect(() => {
//         const loadLocalImage = () => {
//             const savedImage = localStorage.getItem('profileImageBase64');
//             if (savedImage) {
//                 const imageUrl = `data:image/jpeg;base64,${savedImage}`;  // Adjust mime if needed
//                 setPreviewImage(imageUrl);
//                 // Optional: Update user state if you want to persist in user obj
//                 // setUser(prev => ({ ...prev, profilePhoto: imageUrl }));
//             }
//         };
//         loadLocalImage();
//     }, []);

//     // ✅ UPDATED: Handle local image storage (no backend call)
//     const handleImageUpload = async (e) => {
//         const file = e.target.files[0];
//         if (!file) return;

//         // Validate file
//         if (file.size > 5 * 1024 * 1024) {  // 5MB limit for localStorage
//             toast.error("File too large (max 5MB for local storage)");
//             return;
//         }
//         if (!file.type.startsWith('image/')) {
//             toast.error("Please select an image file");
//             return;
//         }

//         // Show instant preview
//         const previewUrl = URL.createObjectURL(file);
//         setPreviewImage(previewUrl);

//         try {
//             setUploading(true);

//             // ✅ Convert to base64 and store locally
//             const base64 = await new Promise((resolve, reject) => {
//                 const reader = new FileReader();
//                 reader.readAsDataURL(file);  // Includes data:image/... prefix
//                 reader.onload = () => resolve(reader.result.split(',')[1]);  // Extract pure base64
//                 reader.onerror = error => reject(error);
//             });

//             // Store base64 (without prefix) in localStorage
//             localStorage.setItem('profileImageBase64', base64);
//             toast.success("Profile photo saved successfully!");  // No backend, so "saved"

//             // Optional: Update user state
//             setUser((prev) => ({ ...prev, profilePhoto: previewUrl }));

//             // Cleanup preview URL (base64 is stored, not the temp URL)
//             URL.revokeObjectURL(previewUrl);
//         } catch (error) {
//             console.error(error);
//             toast.error("Failed to save image locally");
//             setPreviewImage(null);
//         } finally {
//             setUploading(false);
//         }
//     };

//     // Optional: Add clear local image function (e.g., on logout)
//     const clearLocalImage = () => {
//         localStorage.removeItem('profileImageBase64');
//         setPreviewImage(null);
//         setUser((prev) => ({ ...prev, profilePhoto: null }));
//         toast.info("Local profile photo cleared");
//     };


//     useEffect(() => {
//         const fetchUser = async () => {
//             try {
//                 const token = localStorage.getItem("token");
//                 const { data } = await axios.get(`${backendUrl}/api/user/profile`, {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });
//                 setUser(data.user);
//                 setEditForm({ name: data.user.name, email: data.user.email }); // Pre-fill edit form
//             } catch (error) {
//                 console.error(error);
//                 toast.error("Failed to fetch user info");
//             }
//         };
//         fetchUser();
//     }, [backendUrl]);

//     // const handleImageUpload = async (e) => {
//     //     const file = e.target.files[0];
//     //     if (!file) return;

//     //     // Show instant preview
//     //     setPreviewImage(URL.createObjectURL(file));

//     //     const formData = new FormData();
//     //     formData.append("image", file);

//     //     try {
//     //         setUploading(true);
//     //         const token = localStorage.getItem("token");

//     //         const { data } = await axios.post(
//     //             `${backendUrl}/api/user/upload-profile`,
//     //             formData,
//     //             {
//     //                 headers: {
//     //                     Authorization: `Bearer ${token}`,
//     //                     "Content-Type": "multipart/form-data",
//     //                 },
//     //             }
//     //         );

//     //         if (data.success) {
//     //             toast.success("Profile photo updated!");
//     //             setUser((prev) => ({ ...prev, profilePhoto: data.imageUrl }));
//     //             setPreviewImage(null); // Reset local preview
//     //         } else {
//     //             toast.error(data.message || "Failed to upload image");
//     //         }
//     //     } catch (error) {
//     //         console.error(error);
//     //         toast.error("Image upload failed");
//     //     } finally {
//     //         setUploading(false);
//     //     }
//     // };

//     const handleEditToggle = () => {
//         setEditing(!editing);
//         if (!editing) {
//             setEditForm({ name: user.name, email: user.email });
//         }
//     };

//     const handleEditChange = (e) => {
//         setEditForm({ ...editForm, [e.target.name]: e.target.value });
//     };

//     const handleSaveEdit = async () => {
//         if (editForm.name.trim() === "" || editForm.email.trim() === "") {
//             toast.error("Name and email are required");
//             return;
//         }
//         try {
//             setSaving(true);
//             const token = localStorage.getItem("token");
//             const { data } = await axios.put(
//                 `${backendUrl}/api/user/profile`,
//                 editForm,
//                 { headers: { Authorization: `Bearer ${token}` } }
//             );
//             if (data.success) {
//                 setUser(data.user);
//                 setEditing(false);
//                 toast.success("Profile updated successfully!");
//             } else {
//                 toast.error(data.message || "Failed to update profile");
//             }
//         } catch (error) {
//             console.error(error);
//             toast.error("Update failed");
//         } finally {
//             setSaving(false);
//         }
//     };

//     const handlePasswordChange = (e) => {
//         setPasswordForm({ ...passwordForm, [e.target.name]: e.target.value });
//     };

//     const handleSavePassword = async () => {
//         if (passwordForm.newPassword !== passwordForm.confirmPassword) {
//             toast.error("New passwords do not match");
//             return;
//         }
//         if (passwordForm.newPassword.length < 6) {
//             toast.error("New password must be at least 6 characters");
//             return;
//         }
//         try {
//             setChangingPw(true);
//             const token = localStorage.getItem("token");
//             const { data } = await axios.put(
//                 `${backendUrl}/api/user/change-password`,
//                 passwordForm,
//                 { headers: { Authorization: `Bearer ${token}` } }
//             );
//             if (data.success) {
//                 setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
//                 setChangingPassword(false);
//                 toast.success("Password changed successfully!");
//             } else {
//                 toast.error(data.message || "Failed to change password");
//             }
//         } catch (error) {
//             console.error(error);
//             toast.error("Password change failed");
//         } finally {
//             setChangingPw(false);
//         }
//     };

//     const handleLogout = () => {
//         localStorage.removeItem("token");
//         window.location.href = "/login";
//     };

//     if (!user) {
//         return <div className="text-center mt-10 text-gray-600">Loading profile...</div>;
//     }

//     const profileSrc = previewImage || user.profilePhoto || assets.uploadprofilephoto;
//     const joinedDate = user.createdAt && !isNaN(Date.parse(user.createdAt))
//         ? new Date(user.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
//         : "Unknown";

//     return (
//         <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-8">
//             <h2 className="text-2xl font-bold mb-6 text-gray-800">My Profile</h2>

//             <div className="flex items-center gap-6 border-b pb-6 mb-6">
//                 <label className="relative cursor-pointer group">
//                     <img
//                         src={profileSrc}
//                         alt="Profile"
//                         className={`w-28 h-28 rounded-full border-2 border-gray-300 object-cover transition
//                         ${uploading ? "opacity-50" : "hover:opacity-80"}`}
//                     />
//                     {uploading && (
//                         <div className="absolute inset-0 flex items-center justify-center bg-white/60 rounded-full">
//                             <div className="w-6 h-6 border-2 border-t-transparent border-black rounded-full animate-spin"></div>
//                         </div>
//                     )}
//                     <input
//                         type="file"
//                         accept="image/*"
//                         onChange={handleImageUpload}
//                         className="hidden"
//                     />
//                     <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs py-1 opacity-0 group-hover:opacity-100 text-center transition">
//                         Change photo
//                     </div>
//                 </label>

//                 <div className="flex-1">
//                     {editing ? (
//                         <div className="space-y-2">
//                             <input
//                                 type="text"
//                                 name="name"
//                                 value={editForm.name}
//                                 onChange={handleEditChange}
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 placeholder="Name"
//                             />
//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={editForm.email}
//                                 onChange={handleEditChange}
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 placeholder="Email"
//                             />
//                             <div className="flex gap-2">
//                                 <button
//                                     onClick={handleSaveEdit}
//                                     disabled={saving}
//                                     className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
//                                 >
//                                     {saving ? "Saving..." : "Save"}
//                                 </button>
//                                 <button
//                                     onClick={handleEditToggle}
//                                     className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
//                                 >
//                                     Cancel
//                                 </button>
//                             </div>
//                         </div>
//                     ) : (
//                         <>
//                             <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
//                             <p className="text-gray-600">{user.email}</p>
//                             <button
//                                 onClick={handleEditToggle}
//                                 className="text-blue-600 hover:underline text-sm mt-1"
//                             >
//                                 Edit Profile
//                             </button>
//                         </>
//                     )}
//                 </div>
//             </div>

//             {/* <div className="p-4 border rounded-xl bg-gray-50 mb-6">
//                 <h4 className="font-semibold mb-3 text-gray-800">Account Details</h4>
//                 <div className="space-y-2 text-gray-700">
//                     <p>
//                         <strong>Joined:</strong> {joinedDate}
//                     </p>
//                     <p>
//                         <strong>Role:</strong> {user.isAdmin ? "Admin" : "Customer"}
//                     </p>
//                 </div>
//             </div> */}

//                 <div className="p-4 border rounded-xl bg-gray-50 mb-6">
//                 <h4 className="font-semibold mb-3 text-gray-800">Account Details</h4>
//                 <div className="space-y-2 text-gray-700">
//                     {/* <p>
//                         <strong>Joined:</strong> {joinedDate}
//                     </p> */}
//                     <p>
//                         <strong>Role:</strong> {user.isAdmin ? "Admin" : "Customer"}
//                     </p>
//                     <p>  {/* ✅ Added current date display */}
//                         <strong>Joined:</strong> {currentDate}
//                     </p>
//                 </div>
//             </div>

//             <div className="space-y-6">
//                 <button
//                     onClick={() => setChangingPassword(!changingPassword)}
//                     className="w-full py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-left"
//                 >
//                     {changingPassword ? "Cancel" : "Change Password"} {changingPw && "..."}
//                 </button>

//                 {changingPassword && (
//                     <div className="space-y-3 p-4 border rounded-lg bg-white">
//                         <input
//                             type="password"
//                             name="currentPassword"
//                             value={passwordForm.currentPassword}
//                             onChange={handlePasswordChange}
//                             placeholder="Current Password"
//                             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                         <input
//                             type="password"
//                             name="newPassword"
//                             value={passwordForm.newPassword}
//                             onChange={handlePasswordChange}
//                             placeholder="New Password"
//                             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                         <input
//                             type="password"
//                             name="confirmPassword"
//                             value={passwordForm.confirmPassword}
//                             onChange={handlePasswordChange}
//                             placeholder="Confirm New Password"
//                             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                         <button
//                             onClick={handleSavePassword}
//                             disabled={changingPw}
//                             className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50"
//                         >
//                             {changingPw ? "Changing..." : "Change Password"}
//                         </button>
//                     </div>
//                 )}

//                 {/* Optional: Add links to other sections like Orders, Addresses */}
//                 <div className="grid grid-cols-1 ">
//                     <a
//                         href="/orders"
//                         className="block py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-center"
//                     >
//                         View Orders
//                     </a>
//                 </div>
//             </div>

//             <div className="mt-8 text-center">
//                 <button
//                     onClick={handleLogout}
//                     className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
//                 >
//                     Logout
//                 </button>
//                 {/* ✅ Optional: Add clear button */}
//                 <button
//                     onClick={clearLocalImage}
//                     className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
//                 >
//                     Clear Local Photo
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ProfilePage;





// import React from 'react'
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';

// import { useContext } from 'react';
// // import { MyContext } from '../../App';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
// import AccountSidebar from '../components/AccountSidebar';
// import Title from '../components/Title';

// const MyAccount = () => {
//     // const context = useContext(MyContext);
//     const navigate = useNavigate();

//     // useEffect(()=>{
//     //     if(context?.isLogin===true){
//     //         navigate("/");
//     //     }
//     // },[])

//     // useEffect(()=>{
//     //     const token = localStorage.getItem("accessToken");
//     //     if(token === null){
//     //         navigate("/");
//     //     }
//     // },[context?.isLogin])
//     return (
//         <section className='py-10 w-full'>
//             <div className='container flex flex-col md:flex-row gap-5 m-auto'>
//                 <div className='col1 md:w-[20%]'>
//                     <AccountSidebar />
//                 </div>

//                 <div className='col2 md:w-[60%]'>
//                     <div className="text-center p-4 text-2xl">
//                         <Title text1={"MY"} text2={"PROFILE"} />
//                     </div>
//                     <div className='card bg-white shadow-lg rounded-md p-5'>
//                         {/* <div className='border-b border-gray-300 pb-2'>
//                         <h2 className='text-gray-800 font-semibold text-lg'>My Profile</h2>
//                     </div> */}

//                         <form action="" className='mt-5'>
//                             <div className='flex items-center gap-5'>
//                                 <div className='w-[50%]'>
//                                     <TextField label="First Name" variant="outlined" size='small' className='w-full' />
//                                 </div>
//                                 <div className='w-[50%]'>
//                                     <TextField label="Last Name" variant="outlined" size='small' className='w-full' />
//                                 </div>
//                             </div>
//                             <div className='flex items-center mt-4'>
//                                 <div className='w-[100%]'>
//                                     <TextField label="Email" variant="outlined" size='small' className='w-full' />
//                                 </div>
//                             </div>
//                             <div className='w-[50%] mt-4'>
//                                 <TextField label="Mob no." variant="outlined" size='small' className='w-full' />
//                             </div>
//                             <br />
//                             <div className='flex items-center gap-4'>
//                                 <Button className='!bg-[#3872fa] !px-4 !text-white '>Save</Button>
//                                 <Button className='!bg-[#3872fa] !px-4 !text-white btn-border'>Cancel</Button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default MyAccount






import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import AccountSidebar from "../components/AccountSidebar";
import { ShopContext } from "../context/ShopContext";

/* ── Inline SVG icons ─────────────────────────── */
const IconUser = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="#c8973a" strokeWidth="1.4" />
        <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
);
const IconMail = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="#c8973a" strokeWidth="1.4" />
        <path d="M2 8l10 6 10-6" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
);
const IconPhone = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C9.61 21 3 14.39 3 6a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z"
            stroke="#c8973a" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
);
const IconSave = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M17 21v-8H7v8M7 3v5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const IconClose = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);
const IconShield = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 6v6c0 5 3.6 9.7 8 11 4.4-1.3 8-6 8-11V6l-8-4z" stroke="#c8973a" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="#c8973a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const IconEdit = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
);

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&display=swap');

  @keyframes maFadeUp {
    from { opacity:0; transform:translateY(14px); }
    to   { opacity:1; transform:translateY(0); }
  }
  .ma-card { animation: maFadeUp 0.45s cubic-bezier(0.16,1,0.3,1) both; }
  .ma-card:nth-child(1){ animation-delay:0.05s; }
  .ma-card:nth-child(2){ animation-delay:0.12s; }

  .ma-field { display:flex; flex-direction:column; gap:5px; }
  .ma-label {
    font-size:8.5px; letter-spacing:0.28em;
    color:#c8973a; font-family:Arial,sans-serif;
    font-weight:600; text-transform:uppercase;
    display:flex; align-items:center; gap:5px;
  }
  .ma-input {
    padding:11px 14px;
    background:rgba(255,255,255,0.05);
    border:1px solid rgba(200,151,58,0.25);
    color:#f5ede0; font-size:13px;
    font-family:Montserrat,serif;
    outline:none; border-radius:2px;
    transition:border-color 0.2s, background 0.2s;
    width:100%;
  }
  .ma-input:focus {
    border-color:#c8973a;
    background:rgba(200,151,58,0.06);
  }
  .ma-input::placeholder { color:rgba(200,160,100,0.4); font-style:italic; }
  .ma-input:disabled {
    opacity:0.45; cursor:not-allowed;
  }

  .ma-btn-gold {
    display:inline-flex; align-items:center; gap:8px;
    padding:12px 28px;
    background:linear-gradient(135deg,#c8973a,#f7c568);
    color:#1a0f0a; border:none;
    font-size:10px; letter-spacing:0.22em;
    font-family:Arial,sans-serif; font-weight:700;
    cursor:pointer; transition:all 0.25s; border-radius:2px;
  }
  .ma-btn-gold:hover:not(:disabled) {
    box-shadow:0 8px 28px rgba(200,151,58,0.35);
    transform:translateY(-1px);
  }
  .ma-btn-gold:disabled { opacity:0.55; cursor:not-allowed; }

  .ma-btn-ghost {
    display:inline-flex; align-items:center; gap:8px;
    padding:12px 28px;
    background:transparent;
    color:#c8973a; border:1px solid rgba(200,151,58,0.3);
    font-size:10px; letter-spacing:0.22em;
    font-family:Arial,sans-serif; font-weight:600;
    cursor:pointer; transition:all 0.25s; border-radius:2px;
  }
  .ma-btn-ghost:hover {
    border-color:#c8973a;
    background:rgba(200,151,58,0.07);
  }

  @keyframes spin { to { transform:rotate(360deg); } }
  .ma-spinner {
    width:14px; height:14px;
    border:2px solid rgba(26,15,10,0.3);
    border-top-color:#1a0f0a; border-radius:50%;
    animation:spin 0.7s linear infinite;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button { -webkit-appearance:none; }
`;

/* ── Field component ────────────────────────── */
const Field = ({ icon, label, name, value, onChange, type = "text", placeholder, disabled, half }) => (
    <div className="ma-field" style={{ flex: half ? "1 1 calc(50% - 8px)" : "1 1 100%", minWidth: half ? 120 : "auto" }}>
        <label className="ma-label">{icon}{label}</label>
        <input
            className="ma-input"
            type={type} name={name} value={value}
            onChange={onChange} placeholder={placeholder}
            disabled={disabled}
        />
    </div>
);

/* ══════════════════════════════════════════════
   MY ACCOUNT PAGE
══════════════════════════════════════════════ */
const MyAccount = () => {
    const navigate = useNavigate();
    const { backendUrl } = useContext(ShopContext);
    const [loading, setLoading] = useState(false);
    const [editing, setEditing] = useState(false);
    const [userId, setUserId] = useState(null);

    const [form, setForm] = useState({
        firstName: "", lastName: "", email: "", phone: "",
    });
    const [saved, setSaved] = useState(false);

    // Fetch user on mount
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("token");
                const { data } = await axios.get(`${backendUrl}/api/user/profile`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                if (data.success) {
                    const u = data.user;
                    setUserId(u._id); // ✅ save userId
                    const parts = (u.name || "").split(" ");
                    setForm({
                        firstName: parts[0] || "",
                        lastName: parts.slice(1).join(" ") || "",
                        email: u.email || "",
                        phone: u.mobile || "",
                    });
                }
            } catch (err) { console.error(err); }
        };
        fetchUser();
    }, [backendUrl]);

    const onChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

    const onSave = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const token = localStorage.getItem("token");
            const { data } = await axios.put(`${backendUrl}/api/user/${userId}`, {
                name: `${form.firstName} ${form.lastName}`.trim(),
                mobile: form.phone,
            }, { headers: { Authorization: `Bearer ${token}` } });

            if (data.success) {
                toast.success("Profile updated successfully");
                setSaved(true);
                setEditing(false);
                setTimeout(() => setSaved(false), 3000);
            }
        } catch { toast.error("Failed to update profile"); }
        finally { setLoading(false); }
    };

    const onCancel = () => setEditing(false);

    return (
        <>
            <style>{STYLES}</style>

            <div style={{ background: "#1a0f0a", minHeight: "100vh", color: "#f5ede0", fontFamily: "Georgia,serif", padding: "40px 5% 80px" }}>

                {/* ── Page header ── */}
                <div style={{ textAlign: "center", marginBottom: 36 }}>
                    <p style={{ fontSize: 9, letterSpacing: "0.42em", color: "#c8973a", fontFamily: "Arial", fontWeight: 700, marginBottom: 8 }}>
                        D DOLLY LAMB
                    </p>
                    <h1 style={{ fontSize: "clamp(1.4rem,3vw,2.2rem)", color: "#f7c568", fontWeight: 400, letterSpacing: "0.1em", margin: 0 }}>
                        MY ACCOUNT
                    </h1>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", marginTop: 10 }}>
                        <span style={{ flex: 1, maxWidth: 80, height: 1, background: "linear-gradient(to right,transparent,rgba(200,151,58,0.25))" }} />
                        <span style={{ width: 5, height: 5, background: "#c8973a", transform: "rotate(45deg)" }} />
                        <span style={{ flex: 1, maxWidth: 80, height: 1, background: "linear-gradient(to left,transparent,rgba(200,151,58,0.25))" }} />
                    </div>
                </div>

                {/* ── Main grid ── */}
                <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">

                    {/* Sidebar */}
                    <div className="w-full md:w-64 flex-shrink-0">
                        <AccountSidebar />
                    </div>

                    {/* Main content */}
                    <div className="flex-1 flex flex-col gap-5">

                        {/* ── Profile card ── */}
                        <div className="ma-card" style={{ background: "linear-gradient(160deg,#1e120a,#150c05)", border: "1px solid rgba(200,151,58,0.18)", borderRadius: 3, overflow: "hidden" }}>
                            {/* Gold top accent */}
                            <div style={{ height: 2, background: "linear-gradient(to right,transparent,#c8973a 35%,#f7c568 50%,#c8973a 65%,transparent)", opacity: 0.6 }} />

                            <div style={{ padding: "24px 26px" }}>

                                {/* Card header */}
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                        <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(200,151,58,0.1)", border: "1px solid rgba(200,151,58,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <IconUser />
                                        </div>
                                        <div>
                                            <p style={{ fontSize: 8, letterSpacing: "0.34em", color: "#c8973a", fontFamily: "Arial", fontWeight: 700, marginBottom: 2 }}>PERSONAL</p>
                                            <p style={{ fontSize: 14, color: "#f7c568", letterSpacing: "0.06em" }}>Profile Details</p>
                                        </div>
                                    </div>

                                    {/* Edit toggle */}
                                    {!editing && (
                                        <button className="ma-btn-ghost" style={{ padding: "8px 18px" }} onClick={() => setEditing(true)}>
                                            <IconEdit /> EDIT
                                        </button>
                                    )}
                                </div>

                                {/* Success banner */}
                                {saved && (
                                    <div style={{ marginBottom: 20, padding: "10px 16px", background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.25)", borderRadius: 2, display: "flex", alignItems: "center", gap: 8 }}>
                                        <IconShield />
                                        <span style={{ fontSize: 11, color: "#4ade80", letterSpacing: "0.08em" }}>Profile updated successfully</span>
                                    </div>
                                )}

                                {/* Form fields */}
                                <form onSubmit={onSave}>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                                        <Field icon={<IconUser />} label="First Name" name="firstName" value={form.firstName}
                                            onChange={onChange} placeholder="James" disabled={!editing} half />
                                        <Field icon={<IconUser />} label="Last Name" name="lastName" value={form.lastName}
                                            onChange={onChange} placeholder="Harrington" disabled={!editing} half />
                                        <Field icon={<IconMail />} label="Email Address" name="email" value={form.email}
                                            onChange={onChange} type="email" placeholder="james@example.com" disabled />
                                        <Field icon={<IconPhone />} label="Phone Number" name="phone" value={form.phone}
                                            onChange={onChange} type="number" placeholder="+44 7700 900000" disabled={!editing} />
                                    </div>

                                    {/* Email note */}
                                    <p style={{ fontSize: 9, color: "#5a4030", fontStyle: "italic", marginTop: 8, letterSpacing: "0.06em" }}>
                                        ◆ &nbsp;Email address cannot be changed. Contact support for assistance.
                                    </p>

                                    {/* Action buttons — only when editing */}
                                    {editing && (
                                        <div style={{ display: "flex", gap: 10, marginTop: 22, flexWrap: "wrap" }}>
                                            <button type="submit" className="ma-btn-gold" disabled={loading}>
                                                {loading ? <><div className="ma-spinner" /> SAVING...</> : <><IconSave /> SAVE CHANGES</>}
                                            </button>
                                            <button type="button" className="ma-btn-ghost" onClick={onCancel}>
                                                <IconClose /> CANCEL
                                            </button>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>

                        {/* ── Security card ── */}
                        <div className="ma-card" style={{ background: "linear-gradient(160deg,#1e120a,#150c05)", border: "1px solid rgba(200,151,58,0.18)", borderRadius: 3, overflow: "hidden" }}>
                            <div style={{ height: 2, background: "linear-gradient(to right,transparent,#c8973a 35%,#f7c568 50%,#c8973a 65%,transparent)", opacity: 0.6 }} />

                            <div style={{ padding: "22px 26px" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(200,151,58,0.1)", border: "1px solid rgba(200,151,58,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <IconShield />
                                    </div>
                                    <div>
                                        <p style={{ fontSize: 8, letterSpacing: "0.34em", color: "#c8973a", fontFamily: "Arial", fontWeight: 700, marginBottom: 2 }}>ACCOUNT</p>
                                        <p style={{ fontSize: 14, color: "#f7c568", letterSpacing: "0.06em" }}>Security</p>
                                    </div>
                                </div>

                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                                    <div>
                                        <p style={{ fontSize: 12, color: "#f5ede0", marginBottom: 3 }}>Password</p>
                                        <p style={{ fontSize: 10, color: "#7a6040", fontStyle: "italic" }}>Last changed — never</p>
                                    </div>
                                    <button
                                        className="ma-btn-ghost"
                                        style={{ padding: "10px 20px" }}
                                        onClick={() => navigate("/reset-password")}
                                    >
                                        CHANGE PASSWORD
                                    </button>
                                </div>

                                {/* Divider */}
                                <div style={{ height: 1, background: "linear-gradient(to right,transparent,rgba(200,151,58,0.1),transparent)", margin: "16px 0" }} />

                                {/* Trust badges */}
                                <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                                    {[
                                        { icon: <IconShield />, label: "Data Encrypted" },
                                        { icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#c8973a" strokeWidth="1.4" /><path d="M9 12l2 2 4-4" stroke="#c8973a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>, label: "Verified Account" },
                                    ].map((b, i) => (
                                        <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                            {b.icon}
                                            <span style={{ fontSize: 9, color: "#7a6040", letterSpacing: "0.1em" }}>{b.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyAccount;