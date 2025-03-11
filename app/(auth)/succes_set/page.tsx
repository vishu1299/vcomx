"use client";
import Image from "next/image";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="rounded-lg p-8 w-full max-w-md text-center">
        <div className="text-orange-500 text-5xl mb-4 flex justify-center">
          <Image
            src="/src/Assets/Images/succeslogo.png"
            alt="Success Logo"
            width={100}
            height={100}
            className="text-[#FF6F3C]"
          />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-[#1F1D2B]">
          Password Reset Successfully
        </h2>
        <p className="text-[#555555] mb-6">
          You have successfully confirmed your new password. Please use your new
          password when logging in.
        </p>
        <Link href="/signIn">
          <button className="w-full bg-[#FF6F3C] text-white py-2 rounded-lg hover:bg-orange-600 transition">
            Back To Login
          </button>
        </Link>
      </div>
    </div>
  );
}
