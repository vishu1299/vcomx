"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

function ShoppingCarts() {
  const [cartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Fashion Glasses Sunny Premium",
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&q=80",
      price: 43.15,
      quantity: 1,
    },
    {
      id: 2,
      name: "Apple Watch Series 5 MWVF2ZN/A",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&q=80",
      price: 537.77,
      quantity: 1,
    },
    {
      id: 3,
      name: "Apple MacBook Air MWT125A/A Space Grey (2020)",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&q=80",
      price: 1013.97,
      quantity: 1,
    },
  ]);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items Section */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold mb-4">Cart</h2>
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
              {/* Header - Desktop */}
              <div className="hidden md:grid grid-cols-12 gap-4 mb-4 text-sm text-gray-600 font-medium">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-right">Price</div>
                <div className="col-span-2 text-center">Qty</div>
                <div className="col-span-2 text-right">Sub Total</div>
              </div>

              {/* Cart Items */}
              {cartItems.map((item) => (
                <div key={item.id} className="border-t py-4">
                  {/* Desktop Layout */}
                  <div className="hidden md:grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-6 flex items-center gap-4">
                      <button className="text-gray-400 hover:text-gray-600">
                        <X size={16} />
                      </button>
                      <Image
                        width={50}
                        height={50}
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <p className="text-sm">{item.name}</p>
                    </div>
                    <div className="col-span-2 text-right">
                      ${item.price.toFixed(2)}
                    </div>
                    <div className="col-span-2">
                      <input
                        type="number"
                        value={item.quantity}
                        className="w-16 text-center border rounded-md p-1 mx-auto block"
                        min="1"
                      />
                    </div>
                    <div className="col-span-2 text-right font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden flex flex-col space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-3">
                        <button className="text-gray-400 hover:text-gray-600 mt-1">
                          <X size={16} />
                        </button>
                        <Image
                          width={50}
                          height={50}
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                      </div>
                      <div className="text-right">
                        <p className="font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>

                    <div className="pl-8">
                      <p className="text-sm mb-2">{item.name}</p>

                      <div className="flex justify-between items-center mt-2">
                        <div>
                          <span className="text-sm text-gray-500">Price: </span>
                          <span className="text-sm">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>

                        <div className="flex items-center">
                          <span className="text-sm text-gray-500 mr-2">
                            Qty:{" "}
                          </span>
                          <input
                            type="number"
                            value={item.quantity}
                            className="w-12 text-center border rounded-md p-1"
                            min="1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mt-6">
                <button className="px-4 py-2 bg-[#FF6F3C] text-white rounded-md hover:bg-orange-600 text-sm sm:text-base">
                  Continue Shopping
                </button>
                <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 text-sm sm:text-base">
                  Update Cart
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="mt-6 lg:mt-0">
            <h2 className="text-xl font-bold mb-4">Your Cart</h2>
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Sub Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                {/* Location selectors */}
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                  <select className="col-span-2 sm:col-span-2 p-2 border rounded-md text-sm">
                    <option>United states</option>
                  </select>
                  <select className="col-span-2 sm:col-span-1 p-2 border rounded-md text-sm">
                    <option>New York</option>
                  </select>
                  <select className="col-span-2 sm:col-span-1 p-2 border rounded-md text-sm">
                    <option>NY</option>
                  </select>
                  <select className="col-span-2 sm:col-span-2 p-2 border rounded-md text-sm">
                    <option>Brooklyn</option>
                  </select>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Free Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>

                <button className="w-full bg-black text-white py-2 rounded-md text-sm">
                  Update
                </button>

                {/* Promo code section */}
                <div>
                  <p className="font-medium mb-2 text-sm">Apply Promo Code</p>
                  <input
                    type="text"
                    placeholder="Enter promo code"
                    className="w-full p-2 border rounded-md mb-2 text-sm"
                  />
                  <button className="w-full bg-gray-200 text-gray-600 py-2 rounded-md text-sm">
                    Apply
                  </button>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Total</span>
                    <span className="font-bold">${total.toFixed(2)}</span>
                  </div>
                </div>

                <Link href="/payment-info">
                  <button className="w-full bg-[#FF6F3C] text-white py-3 rounded-md hover:bg-orange-600">
                    Next
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCarts;
