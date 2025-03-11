"use client";

import { useState } from "react";
import ShoppingCarts from "./_components/shoppingcart";
import PaymentForm from "./_components/payment-info";
import OrderConfirmation from "./_components/confirm-order";

function App() {
  const [cartStep, setcartStep] = useState("shoppingcart");

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-[#1E2A3B]">
            Cart
          </h1>

          {/* Cart Steps Container */}
          <div className="mb-8 border-b border-gray-200">
            {/* Cart Steps - Desktop Version */}
            <div className="hidden md:flex justify-between items-start mb-0 px-4 relative">
              {/* Step 1 */}
              <div
                onClick={() => setcartStep("shoppingcart")}
                className="flex flex-col items-center cursor-pointer w-1/3 relative pb-4"
              >
                <div
                  className={`w-10 h-10 rounded-full border-2 ${
                    cartStep === "shoppingcart"
                      ? "border-[#1E2A3B] font-bold"
                      : "border-gray-300"
                  } flex items-center justify-center text-lg`}
                >
                  <span
                    className={
                      cartStep === "shoppingcart"
                        ? "text-[#1E2A3B] font-bold"
                        : "text-gray-400"
                    }
                  >
                    1
                  </span>
                </div>
                <div className="mt-2 text-center">
                  <p
                    className={`text-base ${
                      cartStep === "shoppingcart"
                        ? "text-[#1E2A3B] font-bold"
                        : "text-gray-400"
                    }`}
                  >
                    Shopping Cart
                  </p>
                  <p className="text-xs text-gray-400">
                    Organize Your List of items
                  </p>
                </div>
                {/* Orange indicator for active step */}
                {cartStep === "shoppingcart" && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FB923C]"></div>
                )}
              </div>

              {/* Step 2 */}
              <div
                onClick={() => setcartStep("Payment Information")}
                className="flex flex-col items-center cursor-pointer w-1/3 relative pb-4"
              >
                <div
                  className={`w-10 h-10 rounded-full border-2 ${
                    cartStep === "Payment Information"
                      ? "border-[#1E2A3B] font-bold"
                      : "border-gray-300"
                  } flex items-center justify-center text-lg`}
                >
                  <span
                    className={
                      cartStep === "Payment Information"
                        ? "text-[#1E2A3B] font-bold"
                        : "text-gray-400"
                    }
                  >
                    2
                  </span>
                </div>
                <div className="mt-2 text-center">
                  <p
                    className={`text-base ${
                      cartStep === "Payment Information"
                        ? "text-[#1E2A3B] font-bold"
                        : "text-gray-400"
                    }`}
                  >
                    Payment Information
                  </p>
                  <p className="text-xs text-gray-400">
                    Examine Your List of Items.
                  </p>
                </div>
                {/* Orange indicator for active step */}
                {cartStep === "Payment Information" && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FB923C]"></div>
                )}
              </div>

              {/* Step 3 */}
              <div
                onClick={() => setcartStep("OrderConfirmation")}
                className="flex flex-col items-center cursor-pointer w-1/3 relative pb-4"
              >
                <div
                  className={`w-10 h-10 rounded-full border-2 ${
                    cartStep === "OrderConfirmation"
                      ? "border-[#1E2A3B] font-bold"
                      : "border-gray-300"
                  } flex items-center justify-center text-lg`}
                >
                  <span
                    className={
                      cartStep === "OrderConfirmation"
                        ? "text-[#1E2A3B] font-bold"
                        : "text-gray-400"
                    }
                  >
                    3
                  </span>
                </div>
                <div className="mt-2 text-center">
                  <p
                    className={`text-base ${
                      cartStep === "OrderConfirmation"
                        ? "text-[#1E2A3B] font-bold"
                        : "text-gray-400"
                    }`}
                  >
                    Confirmation
                  </p>
                  <p className="text-xs text-gray-400">
                    Examine and Send in Your Order.
                  </p>
                </div>
                {/* Orange indicator for active step */}
                {cartStep === "OrderConfirmation" && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FB923C]"></div>
                )}
              </div>
            </div>

            {/* Cart Steps - Mobile Version */}
            <div className="md:hidden flex justify-between px-2 pb-0 relative">
              {/* Step 1 */}
              <div
                className="flex flex-col items-center relative pb-4"
                onClick={() => setcartStep("shoppingcart")}
              >
                <div
                  className={`w-8 h-8 rounded-full border-2 ${
                    cartStep === "shoppingcart"
                      ? "border-[#1E2A3B]"
                      : "border-gray-300"
                  } flex items-center justify-center mb-1`}
                >
                  <span
                    className={
                      cartStep === "shoppingcart"
                        ? "text-[#1E2A3B] font-bold"
                        : "text-gray-400"
                    }
                  >
                    1
                  </span>
                </div>
                <p
                  className={`text-xs text-center ${
                    cartStep === "shoppingcart"
                      ? "text-[#1E2A3B] font-bold"
                      : "text-gray-400"
                  }`}
                >
                  Shopping Cart
                </p>
                {/* Orange indicator for active step */}
                {cartStep === "shoppingcart" && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FB923C]"></div>
                )}
              </div>

              {/* Step 2 */}
              <div
                className="flex flex-col items-center relative pb-4"
                onClick={() => setcartStep("Payment Information")}
              >
                <div
                  className={`w-8 h-8 rounded-full border-2 ${
                    cartStep === "Payment Information"
                      ? "border-[#1E2A3B]"
                      : "border-gray-300"
                  } flex items-center justify-center mb-1`}
                >
                  <span
                    className={
                      cartStep === "Payment Information"
                        ? "text-[#1E2A3B] font-bold"
                        : "text-gray-400"
                    }
                  >
                    2
                  </span>
                </div>
                <p
                  className={`text-xs text-center ${
                    cartStep === "Payment Information"
                      ? "text-[#1E2A3B] font-bold"
                      : "text-gray-400"
                  }`}
                >
                  Payment
                </p>
                {/* Orange indicator for active step */}
                {cartStep === "Payment Information" && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FB923C]"></div>
                )}
              </div>

              {/* Step 3 */}
              <div
                className="flex flex-col items-center relative pb-4"
                onClick={() => setcartStep("OrderConfirmation")}
              >
                <div
                  className={`w-8 h-8 rounded-full border-2 ${
                    cartStep === "OrderConfirmation"
                      ? "border-[#1E2A3B]"
                      : "border-gray-300"
                  } flex items-center justify-center mb-1`}
                >
                  <span
                    className={
                      cartStep === "OrderConfirmation"
                        ? "text-[#1E2A3B] font-bold"
                        : "text-gray-400"
                    }
                  >
                    3
                  </span>
                </div>
                <p
                  className={`text-xs text-center ${
                    cartStep === "OrderConfirmation"
                      ? "text-[#1E2A3B] font-bold"
                      : "text-gray-400"
                  }`}
                >
                  Confirmation
                </p>
                {/* Orange indicator for active step */}
                {cartStep === "OrderConfirmation" && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FB923C]"></div>
                )}
              </div>
            </div>

            {/* Mobile Subtitle */}
            <div className="md:hidden text-xs text-gray-400 text-center py-2">
              {cartStep === "shoppingcart" && "Organize Your List of items"}
              {cartStep === "Payment Information" &&
                "Examine Your List of Items."}
              {cartStep === "OrderConfirmation" &&
                "Examine and Send in Your Order."}
            </div>
          </div>

          {/* Content */}
          {cartStep === "shoppingcart" && <ShoppingCarts />}
          {cartStep === "Payment Information" && <PaymentForm />}
          {cartStep === "OrderConfirmation" && <OrderConfirmation />}
        </div>
      </div>
    </>
  );
}

export default App;
