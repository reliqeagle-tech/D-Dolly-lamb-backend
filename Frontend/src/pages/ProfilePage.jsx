
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

  import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ShopContext } from "../context/ShopContext.jsx";
import { assets } from "../assets/assets";

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [editing, setEditing] = useState(false);
    const [editForm, setEditForm] = useState({ name: "", email: "" });
    const [changingPassword, setChangingPassword] = useState(false);
    const [passwordForm, setPasswordForm] = useState({ currentPassword: "", newPassword: "", confirmPassword: "" });
    const [saving, setSaving] = useState(false);
    const [changingPw, setChangingPw] = useState(false);
    const [currentDate, setCurrentDate] = useState("");
    const { backendUrl } = useContext(ShopContext);

    // ✅ useEffect to set current date on component mount (no backend needed)
    useEffect(() => {
        const today = new Date().toLocaleDateString("en-US", { 
            year: "numeric", 
            month: "long", 
            day: "numeric" 
        });
        setCurrentDate(today);  // e.g., "November 10, 2025"
    }, []);

    // ✅ NEW: Load profile image from localStorage on mount
    useEffect(() => {
        const loadLocalImage = () => {
            const savedImage = localStorage.getItem('profileImageBase64');
            if (savedImage) {
                const imageUrl = `data:image/jpeg;base64,${savedImage}`;  // Adjust mime if needed
                setPreviewImage(imageUrl);
                // Optional: Update user state if you want to persist in user obj
                // setUser(prev => ({ ...prev, profilePhoto: imageUrl }));
            }
        };
        loadLocalImage();
    }, []);

    // ✅ UPDATED: Handle local image storage (no backend call)
    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Validate file
        if (file.size > 5 * 1024 * 1024) {  // 5MB limit for localStorage
            toast.error("File too large (max 5MB for local storage)");
            return;
        }
        if (!file.type.startsWith('image/')) {
            toast.error("Please select an image file");
            return;
        }

        // Show instant preview
        const previewUrl = URL.createObjectURL(file);
        setPreviewImage(previewUrl);

        try {
            setUploading(true);

            // ✅ Convert to base64 and store locally
            const base64 = await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);  // Includes data:image/... prefix
                reader.onload = () => resolve(reader.result.split(',')[1]);  // Extract pure base64
                reader.onerror = error => reject(error);
            });

            // Store base64 (without prefix) in localStorage
            localStorage.setItem('profileImageBase64', base64);
            toast.success("Profile photo saved successfully!");  // No backend, so "saved"

            // Optional: Update user state
            setUser((prev) => ({ ...prev, profilePhoto: previewUrl }));

            // Cleanup preview URL (base64 is stored, not the temp URL)
            URL.revokeObjectURL(previewUrl);
        } catch (error) {
            console.error(error);
            toast.error("Failed to save image locally");
            setPreviewImage(null);
        } finally {
            setUploading(false);
        }
    };

    // Optional: Add clear local image function (e.g., on logout)
    const clearLocalImage = () => {
        localStorage.removeItem('profileImageBase64');
        setPreviewImage(null);
        setUser((prev) => ({ ...prev, profilePhoto: null }));
        toast.info("Local profile photo cleared");
    };


    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("token");
                const { data } = await axios.get(`${backendUrl}/api/user/profile`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUser(data.user);
                setEditForm({ name: data.user.name, email: data.user.email }); // Pre-fill edit form
            } catch (error) {
                console.error(error);
                toast.error("Failed to fetch user info");
            }
        };
        fetchUser();
    }, [backendUrl]);

    // const handleImageUpload = async (e) => {
    //     const file = e.target.files[0];
    //     if (!file) return;

    //     // Show instant preview
    //     setPreviewImage(URL.createObjectURL(file));

    //     const formData = new FormData();
    //     formData.append("image", file);

    //     try {
    //         setUploading(true);
    //         const token = localStorage.getItem("token");

    //         const { data } = await axios.post(
    //             `${backendUrl}/api/user/upload-profile`,
    //             formData,
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`,
    //                     "Content-Type": "multipart/form-data",
    //                 },
    //             }
    //         );

    //         if (data.success) {
    //             toast.success("Profile photo updated!");
    //             setUser((prev) => ({ ...prev, profilePhoto: data.imageUrl }));
    //             setPreviewImage(null); // Reset local preview
    //         } else {
    //             toast.error(data.message || "Failed to upload image");
    //         }
    //     } catch (error) {
    //         console.error(error);
    //         toast.error("Image upload failed");
    //     } finally {
    //         setUploading(false);
    //     }
    // };

    const handleEditToggle = () => {
        setEditing(!editing);
        if (!editing) {
            setEditForm({ name: user.name, email: user.email });
        }
    };

    const handleEditChange = (e) => {
        setEditForm({ ...editForm, [e.target.name]: e.target.value });
    };

    const handleSaveEdit = async () => {
        if (editForm.name.trim() === "" || editForm.email.trim() === "") {
            toast.error("Name and email are required");
            return;
        }
        try {
            setSaving(true);
            const token = localStorage.getItem("token");
            const { data } = await axios.put(
                `${backendUrl}/api/user/profile`,
                editForm,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            if (data.success) {
                setUser(data.user);
                setEditing(false);
                toast.success("Profile updated successfully!");
            } else {
                toast.error(data.message || "Failed to update profile");
            }
        } catch (error) {
            console.error(error);
            toast.error("Update failed");
        } finally {
            setSaving(false);
        }
    };

    const handlePasswordChange = (e) => {
        setPasswordForm({ ...passwordForm, [e.target.name]: e.target.value });
    };

    const handleSavePassword = async () => {
        if (passwordForm.newPassword !== passwordForm.confirmPassword) {
            toast.error("New passwords do not match");
            return;
        }
        if (passwordForm.newPassword.length < 6) {
            toast.error("New password must be at least 6 characters");
            return;
        }
        try {
            setChangingPw(true);
            const token = localStorage.getItem("token");
            const { data } = await axios.put(
                `${backendUrl}/api/user/change-password`,
                passwordForm,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            if (data.success) {
                setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
                setChangingPassword(false);
                toast.success("Password changed successfully!");
            } else {
                toast.error(data.message || "Failed to change password");
            }
        } catch (error) {
            console.error(error);
            toast.error("Password change failed");
        } finally {
            setChangingPw(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    if (!user) {
        return <div className="text-center mt-10 text-gray-600">Loading profile...</div>;
    }

    const profileSrc = previewImage || user.profilePhoto || assets.uploadprofilephoto;
    const joinedDate = user.createdAt && !isNaN(Date.parse(user.createdAt))
        ? new Date(user.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
        : "Unknown";

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">My Profile</h2>

            <div className="flex items-center gap-6 border-b pb-6 mb-6">
                <label className="relative cursor-pointer group">
                    <img
                        src={profileSrc}
                        alt="Profile"
                        className={`w-28 h-28 rounded-full border-2 border-gray-300 object-cover transition 
                        ${uploading ? "opacity-50" : "hover:opacity-80"}`}
                    />
                    {uploading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white/60 rounded-full">
                            <div className="w-6 h-6 border-2 border-t-transparent border-black rounded-full animate-spin"></div>
                        </div>
                    )}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs py-1 opacity-0 group-hover:opacity-100 text-center transition">
                        Change photo
                    </div>
                </label>

                <div className="flex-1">
                    {editing ? (
                        <div className="space-y-2">
                            <input
                                type="text"
                                name="name"
                                value={editForm.name}
                                onChange={handleEditChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Name"
                            />
                            <input
                                type="email"
                                name="email"
                                value={editForm.email}
                                onChange={handleEditChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Email"
                            />
                            <div className="flex gap-2">
                                <button
                                    onClick={handleSaveEdit}
                                    disabled={saving}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                                >
                                    {saving ? "Saving..." : "Save"}
                                </button>
                                <button
                                    onClick={handleEditToggle}
                                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
                            <p className="text-gray-600">{user.email}</p>
                            <button
                                onClick={handleEditToggle}
                                className="text-blue-600 hover:underline text-sm mt-1"
                            >
                                Edit Profile
                            </button>
                        </>
                    )}
                </div>
            </div>

            {/* <div className="p-4 border rounded-xl bg-gray-50 mb-6">
                <h4 className="font-semibold mb-3 text-gray-800">Account Details</h4>
                <div className="space-y-2 text-gray-700">
                    <p>
                        <strong>Joined:</strong> {joinedDate}
                    </p>
                    <p>
                        <strong>Role:</strong> {user.isAdmin ? "Admin" : "Customer"}
                    </p>
                </div>
            </div> */}

                <div className="p-4 border rounded-xl bg-gray-50 mb-6">
                <h4 className="font-semibold mb-3 text-gray-800">Account Details</h4>
                <div className="space-y-2 text-gray-700">
                    {/* <p>
                        <strong>Joined:</strong> {joinedDate}
                    </p> */}
                    <p>
                        <strong>Role:</strong> {user.isAdmin ? "Admin" : "Customer"}
                    </p>
                    <p>  {/* ✅ Added current date display */}
                        <strong>Joined:</strong> {currentDate}
                    </p>
                </div>
            </div>

            <div className="space-y-6">
                <button
                    onClick={() => setChangingPassword(!changingPassword)}
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-left"
                >
                    {changingPassword ? "Cancel" : "Change Password"} {changingPw && "..."}
                </button>

                {changingPassword && (
                    <div className="space-y-3 p-4 border rounded-lg bg-white">
                        <input
                            type="password"
                            name="currentPassword"
                            value={passwordForm.currentPassword}
                            onChange={handlePasswordChange}
                            placeholder="Current Password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="password"
                            name="newPassword"
                            value={passwordForm.newPassword}
                            onChange={handlePasswordChange}
                            placeholder="New Password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            value={passwordForm.confirmPassword}
                            onChange={handlePasswordChange}
                            placeholder="Confirm New Password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            onClick={handleSavePassword}
                            disabled={changingPw}
                            className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50"
                        >
                            {changingPw ? "Changing..." : "Change Password"}
                        </button>
                    </div>
                )}

                {/* Optional: Add links to other sections like Orders, Addresses */}
                <div className="grid grid-cols-1 ">
                    <a
                        href="/orders"
                        className="block py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-center"
                    >
                        View Orders
                    </a>
                </div>
            </div>

            <div className="mt-8 text-center">
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
                >
                    Logout
                </button>
                {/* ✅ Optional: Add clear button */}
                <button
                    onClick={clearLocalImage}
                    className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                >
                    Clear Local Photo
                </button>
            </div>
        </div>
    );
};

export default ProfilePage;