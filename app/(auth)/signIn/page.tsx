"use client";

import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string }>();

  const onSubmit = (data: { email: string; password: string }) => {
    console.log("Form Data:", data);
  };

  const [showpass, setshowpass] = useState(true);

  const showpassfun = () => {
    setshowpass(!showpass);
  };
  return (
    <div className="flex min-h-screen font-Oswald">
      {/* Left Side - Login Form */}
      <div className="w-1/2 bg-[#F8F8F8]  p-10">
        <div className="w-[70%]">
          <h2 className=" text-4xl font-semibold mb-6">Registered Customers</h2>
          <p className=" pb-5 text-lg font-normal ">
            If you have an account, sign in with your email address.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className=" block mb-1">
                Email<span className="text-red-500 pl-1">*</span>
              </label>
              <input
                type="email"
                className="w-full p-2 border border-orange rounded outline-none "
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm pt-2">
                  {errors.email.message?.toString()}
                </p>
              )}
            </div>
            <div>
              <label className=" block mb-1">
                Password<span className="text-red-500 pl-1">*</span>
              </label>
              <div className="flex gap-2 border bg-white border-orange rounded">
                <input
                  type={showpass ? "password" : "text"}
                  className=" w-full p-2 rounded outline-none"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {showpass ? (
                  <AiFillEye
                    onClick={showpassfun}
                    className="h-6 w-6 my-auto mr-2 text-orange"
                  />
                ) : (
                  <AiFillEyeInvisible
                    onClick={showpassfun}
                    className="h-6 w-6 my-auto mr-2 text-orange"
                  />
                )}
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm pt-2">
                  {errors.password.message?.toString()}
                </p>
              )}
            </div>
            <div className="flex gap-3">
              <input className="w-7 h-7" type="checkbox" />
              <h1>
                By using this form you agree with the storage and handling of
                your data by this website.
              </h1>
            </div>
            <button
              type="submit"
              className="w-full bg-orange font-semibold text-white  p-2 rounded"
            >
              Sign In
            </button>
            <Link href="/reset_pass">
              <p className="text-orange cursor-pointer text-right">
                Forgot Password?
              </p>
            </Link>
          </form>
        </div>
      </div>
      {/* Right Side - Register Section */}
      <div className="w-1/2 bg-white  p-10">
        <div className="w-96">
          <h2 className="text-black text-4xl font-semibold mb-4">
            Create An Account
          </h2>
          <p className="text-black mb-6 font-normal text-lg">
            Creating an account has many benefits: check out faster, keep more
            than one address, track orders and more.
          </p>
          <Link href="/sign_up">
            <button className="w-full bg-orange font-semibold text-white  p-2 rounded">
              Create An Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
