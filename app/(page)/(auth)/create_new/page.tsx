"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Link from "next/link";

type FormValues = {
  password: string;
  confirmPassword: string;
};

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Password Reset Data:", data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="rounded-lg p-8 w-full max-w-md  bg-white shadow-lg">
        <div className="text-orange-500 text-5xl mb-4 flex justify-center">
          <Image
            src="/src/Assets/Images/resetlogo.png"
            alt="Reset Password"
            width={100}
            height={100}
            className="text-[#FF6F3C]"
          />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-center">Reset Password</h2>
        <p className="text-gray-600 mb-6 text-center">
          Please kindly set your new password
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Password Input */}
          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6F3C]"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password Input */}
          <div className="mb-6 relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-enter Password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6F3C]"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
            </button>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Link href="/succes_set">
            <button
              type="submit"
              className="w-full bg-[#FF6F3C] text-white py-3 rounded-lg hover:bg-orange-600 transition font-semibold"
            >
              Save
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
