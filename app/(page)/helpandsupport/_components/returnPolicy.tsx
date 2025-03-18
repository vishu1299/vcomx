// app/page.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ReturnPolicyPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    if (openFaq === id) {
      setOpenFaq(null);
    } else {
      setOpenFaq(id);
    }
  };

  return (
    <div className="container mx-auto ">
      {/* Return Process */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Return Process</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Step 1 */}
          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-2 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-500"
                  >
                    <rect width="18" height="12" x="3" y="4" rx="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Step 1: Initiate Return</h3>
                  <p className="text-gray-600">
                    Log into your account and select the item you wish to return
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-2 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-500"
                  >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Step 2: Package Item</h3>
                  <p className="text-gray-600">
                    Carefully pack the item in its original packaging
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-2 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-500"
                  >
                    <path d="M5 7.2V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3.2M5 7.2v8.7M5 7.2h14M5 15.9V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4.1M5 15.9h14" />
                    <path d="M8 10v4M12 10v4M16 10v4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Step 3: Ship Return</h3>
                  <p className="text-gray-600">
                    Use our prepaid shipping label to send the item back
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 4 */}
          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-2 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-500"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <line x1="2" x2="22" y1="10" y2="10" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Step 4: Refund Process</h3>
                  <p className="text-gray-600">
                    Receive your refund within 5-7 business days
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Return Eligibility */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Return Eligibility</h2>

        {/* Warning box */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-amber-500"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-amber-700">
                Items must be unused and in their original packaging to be
                eligible for return.
              </p>
            </div>
          </div>
        </div>

        {/* Eligible and Non-Eligible Items */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Eligible Items */}
          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-500"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <div>
                  <h3 className="font-bold text-lg mb-3">Eligible Items</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Unworn clothing with tags attached</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Unopened beauty products</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Electronics in original packaging</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Accessories in new condition</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Non-Eligible Items */}
          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-500"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m15 9-6 6" />
                  <path d="m9 9 6 6" />
                </svg>
                <div>
                  <h3 className="font-bold text-lg mb-3">Non-Eligible Items</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Used or worn items</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Personalized items</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Intimate apparel</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Sale items marked as final sale</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Refund Information */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Refund Information</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Processing Time */}
          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <h3 className="font-bold mb-4">Processing Time</h3>
              <div className="flex items-center gap-2 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>5-7 business days after receipt</span>
              </div>
            </CardContent>
          </Card>

          {/* Refund Methods */}
          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <h3 className="font-bold mb-4">Refund Methods</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Original payment method</li>
                <li>Store credit (10% bonus)</li>
                <li>Gift card</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Shipping Guidelines */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Shipping Guidelines</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Return Shipping */}
          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <h3 className="font-bold mb-4">Return Shipping</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
                    <line x1="8" y1="16" x2="8.01" y2="16" />
                    <line x1="8" y1="20" x2="8.01" y2="20" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                    <line x1="12" y1="22" x2="12.01" y2="22" />
                    <line x1="16" y1="16" x2="16.01" y2="16" />
                    <line x1="16" y1="20" x2="16.01" y2="20" />
                  </svg>
                  <span>Free return shipping on orders over $50</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="12" x="3" y="4" rx="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                  <span>Use original packaging when possible</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Processing Time */}
          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <h3 className="font-bold mb-4">Processing Time</h3>
              <ul className="space-y-3 text-gray-600">
                <li>3-5 business days for delivery</li>
                <li>1-2 business days for processing</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {/* FAQ 1 */}
          <Card className="border border-gray-200">
            <CardContent className="p-0">
              <button
                className="w-full p-4 flex justify-between items-center text-left"
                onClick={() => toggleFaq("faq1")}
              >
                <span className="font-semibold">Whats your return window?</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openFaq === "faq1" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === "faq1" && (
                <div className="px-4 pb-4">
                  <p className="text-gray-600">
                    Our standard return window is 30 days from the date of
                    delivery for most items.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* FAQ 2 */}
          <Card className="border border-gray-200">
            <CardContent className="p-0">
              <button
                className="w-full p-4 flex justify-between items-center text-left"
                onClick={() => toggleFaq("faq2")}
              >
                <span className="font-semibold">
                  How do I get a return shipping label?
                </span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openFaq === "faq2" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === "faq2" && (
                <div className="px-4 pb-4">
                  <p className="text-gray-600">
                    Return shipping labels can be printed from your account
                    dashboard after initiating a return.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* FAQ 3 */}
          <Card className="border border-gray-200">
            <CardContent className="p-0">
              <button
                className="w-full p-4 flex justify-between items-center text-left"
                onClick={() => toggleFaq("faq3")}
              >
                <span className="font-semibold">
                  When will I receive my refund?
                </span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openFaq === "faq3" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === "faq3" && (
                <div className="px-4 pb-4">
                  <p className="text-gray-600">
                    Refunds typically process within 5-7 business days after we
                    receive your return.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* FAQ 4 */}
          <Card className="border border-gray-200">
            <CardContent className="p-0">
              <button
                className="w-full p-4 flex justify-between items-center text-left"
                onClick={() => toggleFaq("faq4")}
              >
                <span className="font-semibold">
                  Can I exchange an item instead of returning it?
                </span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openFaq === "faq4" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === "faq4" && (
                <div className="px-4 pb-4">
                  <p className="text-gray-600">
                    Yes, you can request an exchange during the return process.
                    Select Exchange instead of Return when initiating the
                    process.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
