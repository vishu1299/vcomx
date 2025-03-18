"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className=" min-h-screen ">
      <div className="">
        {/* Contents Card */}
        <Card className="mb-8 bg-white shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-lg font-bold mb-4">Contents</h2>
            <nav className="space-y-2">
              {[
                "Introduction",
                "Information We Collect",
                "How We Use Your Information",
                "Information Sharing",
                "Your Rights",
                "Security Measures",
                "Cookie Policy",
                "Changes to Privacy Policy",
                "Contact Information",
              ].map((item) => (
                <div key={item} className="text-gray-700 hover:text-gray-900">
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block py-1"
                  >
                    {item}
                  </a>
                </div>
              ))}
            </nav>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <section id="introduction">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to E-Shop. We are committed to protecting your personal
              information and your right to privacy. This Privacy Policy
              describes how we collect, use, and share your information when you
              use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section id="information-we-collect">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              2. Information We Collect
            </h2>
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              Personal Information
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Name and contact information</li>
              <li>Billing and shipping addresses</li>
              <li>Payment information</li>
              <li>Email address</li>
              <li>Phone number</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section id="how-we-use-your-information">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-3">
              We use the information we collect to provide, maintain, and
              improve our services. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Processing your orders and transactions</li>
              <li>Communicating with you about your orders</li>
              <li>Sending you marketing communications (with your consent)</li>
              <li>Improving our website and services</li>
              <li>Detecting and preventing fraud</li>
            </ul>
          </section>

          {/* Data Protection Officer Card */}
          <Card className="bg-white shadow-sm mb-6">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Data Protection Officer
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>Email: privacy@eshop.com</p>
                <p>Address: 123 Privacy Street, Security City, 12345</p>
                <p>Phone: (555) 123-4567</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
