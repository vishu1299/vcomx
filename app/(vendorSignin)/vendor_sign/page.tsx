"use client";
import React, { useState } from "react";
import { CheckCircle, Eye, EyeOff } from "lucide-react";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-white flex m-12 relative ">
      {/* Left Section (Gray Box) */}
      <div className="flex items-center min-h-screen w-1/2 p-12">
        <div className="relative p-12 flex flex-col justify-center  bg-[#f0f0f0] rounded-3xl">
          <h1 className="text-4xl font-bold mb-4">
            Real-Time Analytics <br /> and Insights
          </h1>
          <p className="text-gray-500 mb-12">
            Transform your data into actionable insights with our comprehensive
            analytics platform.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-[#F66B0E] mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Instant Access to Key Metrics
                </h3>
                <p className="text-gray-500">
                  Monitor your most important KPIs in real-time with our
                  intuitive dashboard.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-[#F66B0E] mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Customizable Data Dashboards
                </h3>
                <p className="text-gray-500">
                  Create personalized views that focus on the metrics that
                  matter most to you.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-[#F66B0E] mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Comprehensive Reporting
                </h3>
                <p className="text-gray-500">
                  Generate detailed reports with just a few clicks, perfect for
                  stakeholder presentations.
                </p>
              </div>
            </div>
          </div>

          {/* Dots correctly positioned below the box */}
          <div className="absolute bottom-[-30px] right-1/2 translate-x-1/2 flex gap-2">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === 0 ? "bg-[#F66B0E]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Section (Login Form) */}
      <div className="w-1/2 p-12 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-8 text-center">Welcome!</h2>

          <button className="w-full py-3 px-4 border border-gray-300 rounded-lg mb-6 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors">
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-5 h-5"
            />
            Sign in with Google
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-gray-500">OR</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email address*
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F66B0E] focus:border-transparent"
                required
              />
            </div>

            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-sm underline text-[#F66B0E] hover:text-[#F66B0E]"
                >
                  Forgot password
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F66B0E] focus:border-transparent"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="remember"
                checked={keepSignedIn}
                onChange={(e) => setKeepSignedIn(e.target.checked)}
                className="h-4 w-4 text-[#F66B0E] rounded border-gray-300"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Keep me signed in
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#F66B0E] text-white py-3 rounded-lg font-semibold hover:bg-[#EA650D] transition-colors"
            >
              LOGIN
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            Not a member?{" "}
            <a href="#" className="text-[hsl(24,93%,51%)] hover:text-[#F66B0E]">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
