"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function OtpScreen() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

  const handleChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const handleResend = () => {
    if (canResend) {
      setResendTimer(30);
      setCanResend(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="rounded-lg p-8 w-full max-w-md text-center">
        <div className="text-orange-500 text-5xl mb-4 flex justify-center">
          <Image
            src={"/src/Assets/Images/otplogo.png"} // Path inside the `public` folder
            alt="Description of image"
            width={100}
            height={100}
            className="text-[#FF6F3C]"
          />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-[#1F1D2B]">Enter OTP</h2>
        <p className="text-[#555555] mb-6">
          Weve sent a password OTP to your email. Please check your inbox and
          follow the instructions.
        </p>
        <div className="flex justify-center gap-4 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-12 h-12 border text-xl text-center rounded-[5px] focus:outline-none focus:ring-2 focus:ring-[#FF6F3C]"
            />
          ))}
        </div>
        <Link href="/create_new">
          <button className="w-full bg-[#FF6F3C] text-white py-3 rounded-lg hover:bg-orange-600 transition font-semibold mb-4">
            Continue
          </button>
        </Link>
        <p className="text-gray-600 text-sm">
          {canResend ? (
            <button
              onClick={handleResend}
              className="text-[#1F1D2B] font-semibold hover:underline"
            >
              Resend OTP
            </button>
          ) : (
            `Resend in ${resendTimer}s`
          )}
        </p>
      </div>
    </div>
  );
}
