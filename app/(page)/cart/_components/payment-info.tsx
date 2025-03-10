"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  FaPhone,
  FaEnvelope,
  FaBuilding,
  FaCcVisa,
  FaPaypal,
  FaCreditCard,
} from "react-icons/fa";
import { MdOutlineAtm, MdCardGiftcard } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";

export default function PaymentForm() {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  const paymentMethods = [
    {
      value: "visa",
      label: "Visa/Master Card",
      icon: <FaCcVisa className="text-blue-600" />,
    },
    {
      value: "atm",
      label: "ATM Card",
      icon: <MdOutlineAtm className="text-green-600" />,
    },
    {
      value: "bank",
      label: "Bank",
      icon: <FaCreditCard className="text-gray-600" />,
    },
    {
      value: "paypal",
      label: "PayPal",
      icon: <FaPaypal className="text-blue-800" />,
    },
    {
      value: "gift",
      label: "Gift Card",
      icon: <MdCardGiftcard className="text-purple-600" />,
    },
  ];

  const orderItems = [
    {
      id: 1,
      name: "Fashion Glasses",
      description: "Sunny Premium",
      quantity: 2,
      price: 43.15,
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&q=80",
    },
    {
      id: 2,
      name: "Apple Watch Series 5",
      description: "MWV62VN/A",
      quantity: 1,
      price: 517.77,
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&q=80",
    },
    {
      id: 3,
      name: "Apple Macbook Air",
      description: "MWTJ2SA/A Space Grey",
      quantity: 1,
      price: 1013.97,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&q=80",
    },
  ];

  const subtotal = orderItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 10.99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen  py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-start mb-8">
          Payment Information
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Customer Information */}
          <div className="w-full lg:w-1/2">
            <Card className="shadow-lg h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Personal Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <Input placeholder="Full Name" className="w-full" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center border rounded-md px-3 py-2 bg-white">
                      <FaPhone className="text-gray-500 mr-2 flex-shrink-0" />
                      <Input
                        placeholder="Phone Number"
                        className="border-none focus:ring-0 w-full"
                      />
                    </div>
                    <div className="flex items-center border rounded-md px-3 py-2 bg-white">
                      <FaEnvelope className="text-gray-500 mr-2 flex-shrink-0" />
                      <Input
                        placeholder="Email Address"
                        className="border-none focus:ring-0 w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Address Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Delivery Address</h3>

                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select City" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newyork">New York</SelectItem>
                      <SelectItem value="losangeles">Los Angeles</SelectItem>
                      <SelectItem value="chicago">Chicago</SelectItem>
                      <SelectItem value="houston">Houston</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select District" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="district1">District 1</SelectItem>
                        <SelectItem value="district2">District 2</SelectItem>
                        <SelectItem value="district3">District 3</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Town / Ward" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="town1">Town 1</SelectItem>
                        <SelectItem value="town2">Town 2</SelectItem>
                        <SelectItem value="town3">Town 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center border rounded-md px-3 py-2 bg-white">
                    <FaBuilding className="text-gray-500 mr-2 flex-shrink-0" />
                    <Input
                      placeholder="Street Address (e.g. ABC Building, 1890 NY)"
                      className="border-none focus:ring-0 w-full"
                    />
                  </div>
                </div>

                {/* Order Notes */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">
                    Additional Information
                  </h3>
                  <Textarea
                    placeholder="Notes about your order (optional)"
                    className="min-h-24"
                  />
                </div>

                {/* Terms and Privacy */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={acceptedTerms}
                    onCheckedChange={() => setAcceptedTerms(!acceptedTerms)}
                  />
                  <label htmlFor="terms" className="text-sm">
                    I accept the{" "}
                    <span className="text-blue-600 cursor-pointer">
                      terms and conditions
                    </span>{" "}
                    and{" "}
                    <span className="text-blue-600 cursor-pointer">
                      privacy policy
                    </span>
                    .
                  </label>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/2">
            <Card className="shadow-lg h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Order Items */}
                <div className="space-y-4">
                  {orderItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 py-2 border-b last:border-b-0"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="rounded-md bg-gray-200 object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-bold truncate">{item.name}</p>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                        <p className="text-sm">Qty: {item.quantity}</p>
                      </div>
                      <span className="font-bold whitespace-nowrap">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Order Totals */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">${shipping.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between pt-4 border-t">
                    <span className="font-bold text-lg">Total</span>
                    <span className="font-bold text-lg">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Payment Method</h3>

                  <RadioGroup
                    className="space-y-3"
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                  >
                    {paymentMethods.map((method) => (
                      <div
                        key={method.value}
                        className={`flex items-center gap-3 p-3 border rounded-md cursor-pointer hover:bg-gray-50 transition-colors ${
                          paymentMethod === method.value
                            ? "border-blue-500 bg-blue-50"
                            : ""
                        }`}
                      >
                        <RadioGroupItem
                          value={method.value}
                          id={method.value}
                        />
                        <div className="flex items-center gap-2">
                          {method.icon}
                          <label
                            htmlFor={method.value}
                            className="cursor-pointer"
                          >
                            {method.label}
                          </label>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Checkout Button */}
                <Button
                  className="w-full py-6 text-lg mt-6"
                  disabled={!acceptedTerms || !paymentMethod}
                >
                  Complete Payment
                </Button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  Your personal data will be used to process your order, support
                  your experience, and for other purposes described in our
                  privacy policy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
