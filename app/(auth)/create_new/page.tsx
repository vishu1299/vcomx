"use client"
import Image from "next/image";
import { useState } from "react";
import {  FiEye, FiEyeOff } from "react-icons/fi";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="rounded-lg p-8 w-full max-w-md text-center">
        <div className="text-orange-500 text-5xl mb-4 flex justify-center">
          <Image 
            src="/Assets/Images/resetlogo.png" // Path inside the `public` folder
            alt="Description of image"
            width={100} 
            height={100} 
            className="text-[#FF6F3C]" />
        </div>
        <h2 className="text-2xl font-semibold mb-2">Reset Password</h2>
        <p className="text-gray-600 mb-6">Please kindly set your new password</p>

        <div className="mb-4 relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6F3C]"
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>

        <div className="mb-6 relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Re-enter Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6F3C]"
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>

        <button className="w-full bg-[#FF6F3C] text-white py-3 rounded-lg hover:bg-orange-600 transition font-semibold">
          Save
        </button>
      </div>
    </div>
  );
}
