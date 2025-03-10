"use client";
import { useState } from "react";
import Image from "next/image";

import { FiAlertCircle, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      setError("Email address is incorrect, please re-enter");
    } else {
      setError("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className=" rounded-lg p-8 w-full max-w-md text-center">
        <div className="text-orange-500 text-5xl mb-4 flex justify-center">
          <Image
            src="/src/Assets/Images/forgetlogo.png"
            alt="Description of image"
            width={100}
            height={100}
            className="text-[#FF6F3C]"
          />
        </div>
        <h2 className="text-2xl font-semibold mb-2 text-[#1F1D2B]">
          Forgot Your Password?
        </h2>
        <p className="text-[#555555] mb-6">
          Type your email and we will send you a reset link for your password.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-left">
            <label
              className="block text-sm font-medium text-[#1F1D2B]"
              htmlFor="email"
            >
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              className={`w-full px-4 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 ${
                error
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-orange-500"
              }`}
              placeholder="e.g username@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <FiAlertCircle /> {error}
              </p>
            )}
          </div>
          <Link href="/check_mail">
            <button
              type="submit"
              className="w-full bg-[#FF6F3C] text-white py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Send Mail
            </button>
          </Link>
        </form>
        <Link href="/signIn">
          <button
            className="mt-4 text-[#1F1D2B] hover:underline flex justify-center items-center gap-1 w-full"
            onClick={() => "Go back to login"}
          >
            <FiArrowLeft /> Back to Login
          </button>
        </Link>
      </div>
    </div>
  );
}
