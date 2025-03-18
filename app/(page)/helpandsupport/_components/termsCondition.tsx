"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { FaExclamationTriangle } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

export default function TermsAndConditions() {
  return (
    <div className="max-w-5xl ">
      {/* Introduction Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          1. Introduction
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Welcome to our e-commerce platform. These Terms and Conditions govern
          your use of our website and the services we provide. By accessing or
          using our website, you acknowledge that you have read, understood, and
          agree to be bound by these terms.
        </p>
      </section>

      {/* Acceptance of Terms Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          2. Acceptance of Terms
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          By accessing or using our website, you agree to these Terms and
          Conditions and any additional terms and conditions that may apply to
          specific sections of our website or to products and services available
          through our website.
        </p>

        {/* Warning Box */}
        <Card className="bg-yellow-50 border-yellow-100 p-4 mb-6">
          <div className="flex items-start gap-3">
            <FaExclamationTriangle
              className="text-amber-500 mt-1 flex-shrink-0"
              size={20}
            />
            <p className="text-gray-700">
              <span className="font-semibold">Important:</span> Your use of our
              website constitutes acceptance of these terms. If you do not agree
              to these terms, please do not use our website.
            </p>
          </div>
        </Card>
      </section>

      {/* User Accounts Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          3. User Accounts
        </h2>
        <ul className="space-y-3">
          <li className="flex items-baseline gap-2">
            <span className="text-gray-500">❖</span>
            <span className="text-gray-700">
              You must be at least 18 years old to create an account
            </span>
          </li>
          <li className="flex items-baseline gap-2">
            <span className="text-gray-500">❖</span>
            <span className="text-gray-700">
              You are responsible for maintaining the confidentiality of your
              account credentials
            </span>
          </li>
          <li className="flex items-baseline gap-2">
            <span className="text-gray-500">❖</span>
            <span className="text-gray-700">
              You agree to provide accurate and complete information when
              creating an account
            </span>
          </li>
          <li className="flex items-baseline gap-2">
            <span className="text-gray-500">❖</span>
            <span className="text-gray-700">
              You are responsible for all activities that occur under your
              account
            </span>
          </li>
        </ul>
      </section>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-[#FF7043] hover:bg-[#F4511E] text-white font-medium py-3 px-6 rounded-md transition-colors">
          Accept Terms
        </button>
        <button className="border border-[#FF7043] text-[#FF7043] hover:bg-orange-50 font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2">
          <FiDownload /> Download PDF
        </button>
      </div>
    </div>
  );
}
