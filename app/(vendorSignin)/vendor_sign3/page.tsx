import React from "react";
import { FaMoneyCheckAlt, FaProjectDiagram } from "react-icons/fa";

const FinancialCards = () => {
  return (
    <div className="bg-white flex m-12 relative">
      {/* Left Section (Financial Cards) */}
      <div className="relative p-12 flex flex-col justify-center m-12 rounded-3xl w-1/2 ">
        <div className="flex flex-col gap-6 ">
          {/* First Card */}
          <div className="bg-gray-100 p-12 rounded-xl ">
            <h2 className="text-2xl font-semibold text-gray-900">
              Personalized <br /> Financial Solutions
            </h2>
            <p className="text-gray-600 mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque urna ut magna bibendum, eget malesuada.
            </p>
            <div className="mt-6 p-3 bg-white rounded-lg w-fit ">
              <FaMoneyCheckAlt className="text-gray-700 text-xl" />
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-blue-700 p-12 rounded-xl shadow-md text-white">
            <h2 className="text-2xl font-semibold">
              Streamlined <br /> Financial Management
            </h2>
            <p className="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque urna ut magna bibendum, eget malesuada.
            </p>
            <div className="mt-6 p-3 bg-white bg-opacity-20 rounded-lg w-fit">
              <FaProjectDiagram className="text-white text-xl" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-30px] right-1/2 translate-x-1/2 flex gap-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === 2 ? "bg-[#F66B0E]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right Section (Login Form) */}
      <div className="w-1/2 p-12 flex items-center">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-8 text-center">Welcome!</h2>

          <button className="w-full py-3 px-4 border border-gray-300 rounded-lg mb-6 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
            Sign in with Google
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-gray-500">OR</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address*
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F66B0E] focus:border-transparent"
                required
              />
            </div>

            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <a href="#" className="text-sm underline text-[#F66B0E] hover:text-[#F66B0E]">
                  Forgot password
                </a>
              </div>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F66B0E] focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="remember"
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
            Not a member?{' '}
            <a href="#" className="text-[hsl(24,93%,51%)] hover:text-[#F66B0E]">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinancialCards;
