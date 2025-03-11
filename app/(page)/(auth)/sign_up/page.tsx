"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";

// Define form data interface
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  newsletter: boolean;
  agreeTerms: boolean;
}

export default function CreateAccount() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const password = watch("password", "");

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-8">
      <div className="w-full max-w-5xl p-4 rounded-lg flex flex-col md:flex-row md:gap-12">
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-8">Create An Account</h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col md:flex-row gap-8"
          >
            {/* Left Column - Personal Information */}
            <div className="flex-1">
              <h2 className="text-lg font-medium mb-6">Personal Information</h2>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  First Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Lorem"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#FF6F3C]"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.firstName.message?.toString()}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Last Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Lorem"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#FF6F3C]"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.lastName.message?.toString()}
                  </p>
                )}
              </div>

              <div className="flex items-center mt-8">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="mr-2 h-4 w-4"
                  {...register("newsletter")}
                />
                <label htmlFor="newsletter" className="text-sm">
                  Sign up for newsletter
                </label>
              </div>
            </div>

            {/* Right Column - Sign in Information */}
            <div className="flex-1">
              <h2 className="text-lg font-medium mb-6">Sign in Information</h2>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Lorem@gmail.com"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#FF6F3C]"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message?.toString()}
                  </p>
                )}
              </div>

              <div className="mb-6 relative">
                <label className="block text-sm font-medium mb-2">
                  Password<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#FF6F3C] pr-10"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                      maxLength: {
                        value: 16,
                        message: "Password must not exceed 16 characters",
                      },
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
                        message: "Password doesn't meet requirements",
                      },
                    })}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={togglePassword}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <p className="text-xs text-orange-500 mt-2">
                  Password should be between 8-16 characters, contain lower case
                  letters, at least an uppercase letter, a Special Character and
                  at least one number
                </p>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password.message?.toString()}
                  </p>
                )}
              </div>

              <div className="mb-6 relative">
                <label className="block text-sm font-medium mb-2">
                  Re-enter The password<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Lorem"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#FF6F3C] pr-10"
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={toggleConfirmPassword}
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirmPassword.message?.toString()}
                  </p>
                )}
              </div>

              <div className="flex items-start mb-6">
                <input
                  type="checkbox"
                  id="agree"
                  className="mr-2 mt-1 h-4 w-4"
                  {...register("agreeTerms", {
                    required: "You must agree to the terms",
                  })}
                />
                <label htmlFor="agree" className="text-sm">
                  By using this form you agree with the storage and handling of
                  your data by this website.
                </label>
              </div>
              {errors.agreeTerms && (
                <p className="text-red-500 text-xs mb-4">
                  {errors.agreeTerms.message?.toString()}
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-[#FF6F3C] text-white py-3 rounded-md font-medium hover:bg-orange-600 transition-colors"
              >
                Sign In
              </button>

              <p className="text-xs text-red-500 mt-2">*Required fields</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
