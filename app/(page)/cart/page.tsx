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
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl font-bold text-center mb-8">Cart</h1>

          <div className="flex  justify-center items-center gap-4 mb-12">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-orange text-white flex items-center justify-center text-sm">
                1
              </div>
              <div
                onClick={() => {
                  setcartStep("shoppingcart");
                }}
                className="ml-2 cursor-pointer"
              >
                <p
                  className={` ${
                    cartStep === "shoppingcart"
                      ? "font-semibold text-black "
                      : "font-normal"
                  }`}
                >
                  Shopping Cart
                </p>
                <p className="text-xs text-gray-500">
                  Organize Your List of Items
                </p>
              </div>
            </div>
            <div className="w-16 h-[2px] bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full border-2 border-gray-300 bg-orange text-white flex items-center justify-center text-sm">
                2
              </div>
              <div
                onClick={() => {
                  setcartStep("Payment Information");
                }}
                className="ml-2 cursor-pointer"
              >
                <p
                  className={` ${
                    cartStep === "Payment Information"
                      ? "font-semibold text-black "
                      : "font-normal"
                  }`}
                >
                  Payment Information
                </p>
                <p className="text-xs text-gray-500">
                  Examine Your List of Items
                </p>
              </div>
            </div>
            <div className="w-16 h-[2px] bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full border-2 border-gray-300 bg-orange text-white flex items-center justify-center text-sm">
                3
              </div>
              <div
                onClick={() => {
                  setcartStep("OrderConfirmation");
                }}
                className="ml-2 cursor-pointer"
              >
                <p
                  className={` ${
                    cartStep === "OrderConfirmation"
                      ? "font-semibold text-black "
                      : "font-normal"
                  }`}
                >
                  Confirmation
                </p>
                <p className="text-xs text-gray-500">
                  Examine and Send in Your Order
                </p>
              </div>
            </div>
          </div>
        </div>
        {cartStep === "shoppingcart" && <ShoppingCarts />}
        {cartStep === "Payment Information" && <PaymentForm />}
        {cartStep === "OrderConfirmation" && <OrderConfirmation />}
      </div>
    </>
  );
}

export default App;
