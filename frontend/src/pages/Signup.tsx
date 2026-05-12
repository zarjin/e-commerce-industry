import React from "react";
import beatsnoop from "../assets/beatsnoop.svg";
import { Link } from "react-router";

const Signup: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row font-sans text-[#000000]">
      {/* Left Side: Illustration Area */}
      <div className="relative flex flex-1 items-center justify-center bg-[#CBE4E8] py-12 lg:py-0">
        <div className="relative w-full max-w-2xl px-8">
          {/* Note: In a real app, replace the src with your actual 3D asset.
            The image provided contains a 3D smartphone, shopping cart, and bags.
          */}
          <img
            src={beatsnoop}
            alt="Shopping Illustration"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>

      {/* Right Side: Form Area */}
      <div className="flex flex-1 items-center justify-center bg-white px-8 py-12 lg:px-20">
        <div className="w-full max-w-[400px]">
          <h1 className="mb-3 text-4xl font-medium tracking-tight">
            Create an account
          </h1>
          <p className="mb-10 text-base font-normal">
            Enter your details below
          </p>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            {/* Name Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Name"
                className="w-full border-b border-gray-300 py-2 outline-none focus:border-black transition-colors placeholder:text-gray-400"
              />
            </div>

            {/* Contact Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Email"
                className="w-full border-b border-gray-300 py-2 outline-none focus:border-black transition-colors placeholder:text-gray-400"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full border-b border-gray-300 py-2 outline-none focus:border-black transition-colors placeholder:text-gray-400"
              />
            </div>

            {/* CTA Button */}
            <button
              type="submit"
              className="w-full rounded-[4px] bg-[#DB4444] py-4 text-base font-medium text-white transition-hover hover:bg-[#c23b3b]"
            >
              Create Account
            </button>
          </form>

          {/* Footer Link */}
          <div className="mt-8 flex items-center justify-center gap-4 text-base">
            <span className="text-gray-600">Already have account?</span>
            <Link
              to="/login"
              className="border-b border-gray-500 font-medium text-black hover:text-gray-600"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
