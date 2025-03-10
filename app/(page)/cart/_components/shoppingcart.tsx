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
    <>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold mb-6">Cart</h2>
              <div className=" rounded-lg  p-6">
                <div className="grid grid-cols-12 gap-4 mb-4 text-sm text-gray-600">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-right">Price</div>
                  <div className="col-span-2 text-center">Qty</div>
                  <div className="col-span-2 text-right">Sub Total</div>
                </div>

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-12 gap-4 py-4 items-center border-t"
                  >
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
                ))}

                <div className="flex justify-between mt-6">
                  <button className="px-6 py-2 bg-[#FF6F3C] text-white rounded-md hover:bg-orange-600">
                    Continue Shopping
                  </button>
                  <button className="px-6 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50">
                    Update Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold mb-6">Your Cart</h2>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sub Total</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="space-y-4">
                    <select className="w-full p-2 border rounded-md">
                      <option>United states</option>
                    </select>
                    <select className="w-full p-2 border rounded-md">
                      <option>New York</option>
                    </select>
                    <select className="w-full p-2 border rounded-md">
                      <option>NY</option>
                    </select>
                    <select className="w-full p-2 border rounded-md">
                      <option>Brooklyn</option>
                    </select>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Free Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <button className="w-full bg-black text-orange py-2 rounded-md">
                    Update
                  </button>
                  <div>
                    <p className="font-medium mb-2">Apply Promo Code</p>
                    <input
                      type="text"
                      placeholder="Enter promo code"
                      className="w-full p-2 border rounded-md mb-2"
                    />
                    <button className="w-full bg-gray-200 text-gray-600 py-2 rounded-md">
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
    </>
  );
}

export default ShoppingCarts;
