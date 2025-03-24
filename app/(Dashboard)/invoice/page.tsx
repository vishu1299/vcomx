// app/page.tsx
"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Check,
  CheckCircle,
  AlertCircle,
  Search,
  Plus,
  Filter,
} from "lucide-react";

export default function InvoiceDashboard() {
  return (
    <div className="w-full min-h-screen">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-gray-900">Invoices</h1>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="flex bg-white rounded-lg p-4 shadow-sm border border-purple-100">
          <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mr-4">
            <CheckCircle className="h-5 w-5 text-purple-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">85</h2>
            <p className="text-gray-500 text-sm">Paid Invoices</p>
          </div>
        </div>

        <div className="flex bg-white rounded-lg p-4 shadow-sm border border-blue-100">
          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
            <div className="h-5 w-5 rounded-full border-2 border-dashed border-blue-400"></div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">10</h2>
            <p className="text-gray-500 text-sm">Unpaid Invoices</p>
          </div>
        </div>

        <div className="flex bg-white rounded-lg p-4 shadow-sm border border-orange">
          <div className="w-10 h-10 rounded-lg bg-orange flex items-center justify-center mr-4">
            <AlertCircle className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">5</h2>
            <p className="text-gray-500 text-sm">Overdue Invoices</p>
          </div>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Action Bar */}
        <div className="">
          <div className="w-full flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                className="pl-10 bg-white w-full border-gray-200"
                placeholder="Search invoices"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="border-gray-200 bg-white">
                <Filter className="h-4 w-4 mr-2" />
              </Button>
              <Button className="bg-orange hover:bg-orange text-white">
                <Plus className="h-4 w-4 mr-2" />
                Add
              </Button>
            </div>
          </div>
          {/* Invoice List */}
          <div className="md:col-span-1 space-y-4">
            <InvoiceItem
              id="INV-1001"
              date="April 1, 2028"
              amount="$250.00"
              status="paid"
            />
            <InvoiceItem
              id="INV-1002"
              date="April 3, 2028"
              amount="$422.50"
              status="paid"
              selected={true}
            />
            <InvoiceItem
              id="INV-1003"
              date="April 5, 2028"
              amount="$320.00"
              status="unpaid"
            />
            <InvoiceItem
              id="INV-1004"
              date="April 7, 2028"
              amount="$75.00"
              status="overdue"
            />
            <InvoiceItem
              id="INV-1005"
              date="April 9, 2028"
              amount="$500.00"
              status="paid"
            />
            <InvoiceItem
              id="INV-1006"
              date="April 11, 2028"
              amount="$200.00"
              status="unpaid"
            />
            <InvoiceItem
              id="INV-1007"
              date="April 13, 2028"
              amount="$450.00"
              status="overdue"
            />
          </div>
        </div>

        {/* Invoice Detail */}
        <div className="md:col-span-2">
          {/* Tabs */}
          <div className="border-b border-gray-200 mb-6">
            <div className="flex">
              <button className="px-4 py-2 border-b-2 border-orange text-gray-900 font-medium">
                Preview
              </button>
              <div className="flex-grow"></div>
              <div className="flex gap-2">
                <Button variant="outline" className="bg-white border-gray-200">
                  Edit
                </Button>
                <Button variant="outline" className="bg-white border-gray-200">
                  Hold
                </Button>
                <Button className="bg-orange hover:bg-orange text-white">
                  Send Invoice
                </Button>
              </div>
            </div>
          </div>

          <Card className="border-gray-200">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row justify-between mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <h2 className="text-xl font-medium text-gray-900">
                      Invoice
                    </h2>
                    <span className="text-xl font-medium text-orange">
                      #INV-1002
                    </span>
                    <Badge
                      variant="outline"
                      className="bg-blue-50 text-blue-600 border-blue-200 flex items-center gap-1 ml-2"
                    >
                      <Check className="h-3 w-3" />
                      Paid
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-sm text-gray-500 mb-1">Bill From</h3>
                  <p className="font-medium">Fashion Hub Inc.</p>
                  <p className="text-sm text-gray-600">
                    456 Market Street, Suite 101, Los Angeles, CA 90015
                  </p>
                  <p className="text-sm text-gray-600">
                    billing@fashionhub.com
                  </p>
                  <p className="text-sm text-gray-600">(213) 555-6789</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 mb-1">Bill To</h3>
                  <p className="font-medium">Linda Moore</p>
                  <p className="text-sm text-gray-600">
                    789 Pine Avenue, Apartment 4C, New York, NY 10001
                  </p>
                  <p className="text-sm text-gray-600">
                    linda.moore@example.com
                  </p>
                  <p className="text-sm text-gray-600">(212) 555-1234</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-sm text-gray-500 mb-1">Issued Date</h3>
                  <p className="text-sm">April 3, 2028</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 mb-1">Due Date</h3>
                  <p className="text-sm">April 8, 2028</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-medium mb-4">Item Details</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-2 px-4 text-left text-gray-500 font-normal text-sm">
                          Description
                        </th>
                        <th className="py-2 px-4 text-left text-gray-500 font-normal text-sm">
                          Price
                        </th>
                        <th className="py-2 px-4 text-left text-gray-500 font-normal text-sm">
                          Qty
                        </th>
                        <th className="py-2 px-4 text-right text-gray-500 font-normal text-sm">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 px-4 text-gray-700">
                          Luxury Wristwatch
                        </td>
                        <td className="py-4 px-4 text-gray-700">$ 250.00</td>
                        <td className="py-4 px-4 text-gray-700">1</td>
                        <td className="py-4 px-4 text-right text-gray-700">
                          $ 250.00
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 px-4 text-gray-700">
                          Designer Sunglasses
                        </td>
                        <td className="py-4 px-4 text-gray-700">$ 120.00</td>
                        <td className="py-4 px-4 text-gray-700">1</td>
                        <td className="py-4 px-4 text-right text-gray-700">
                          $ 120.00
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 px-4 text-gray-700">
                          Eco-Friendly T-Shirt
                        </td>
                        <td className="py-4 px-4 text-gray-700">$ 20.00</td>
                        <td className="py-4 px-4 text-gray-700">2</td>
                        <td className="py-4 px-4 text-right text-gray-700">
                          $ 40.00
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <div className="w-full md:w-64 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Sub Total</span>
                    <span className="text-gray-700">$ 410.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Delivery Fee</span>
                    <span className="text-gray-700">$ 10.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Discount</span>
                    <span className="text-gray-700">- $ 25.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Tax (10%)</span>
                    <span className="text-gray-700">$ 27.50</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-gray-200 font-medium">
                    <span className="text-gray-700">Total Amount</span>
                    <span className="text-gray-900">$ 422.50</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 py-6 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            Copyright © 2024 Peterdraw
            <span className="mx-2">·</span>
            <a href="#" className="hover:text-gray-700">
              Privacy Policy
            </a>
            <span className="mx-2">·</span>
            <a href="#" className="hover:text-gray-700">
              Term and conditions
            </a>
            <span className="mx-2">·</span>
            <a href="#" className="hover:text-gray-700">
              Contact
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-700">
              <span className="sr-only">Facebook</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-700">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-700">
              <span className="sr-only">Instagram</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-700">
              <span className="sr-only">YouTube</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-700">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface InvoiceItemProps {
  id: string;
  date: string;
  amount: string;
  status: "paid" | "unpaid" | "overdue";
  selected?: boolean;
}

function InvoiceItem({ id, date, amount, status, selected }: InvoiceItemProps) {
  const getBadgeStyles = () => {
    switch (status) {
      case "paid":
        return {
          bg: "bg-blue-50",
          text: "text-blue-600",
          border: "border-blue-200",
          icon: <Check className="h-3 w-3" />,
        };
      case "unpaid":
        return {
          bg: "bg-purple-50",
          text: "text-purple-600",
          border: "border-purple-200",
          icon: null,
        };
      case "overdue":
        return {
          bg: "bg-red-50",
          text: "text-red-600",
          border: "border-red-200",
          icon: <AlertCircle className="h-3 w-3" />,
        };
    }
  };

  const styles = getBadgeStyles();

  return (
    <div
      className={`p-4 border rounded-lg ${
        selected
          ? "border-purple-400 bg-purple-100"
          : "border-gray-200 bg-white"
      }`}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{id}</span>
        <Badge
          variant="outline"
          className={`${styles.bg} ${styles.text} ${styles.border} flex items-center gap-1 capitalize`}
        >
          {styles.icon}
          {status}
        </Badge>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-500">
          Issued Date: <span className="text-gray-700">{date}</span>
        </span>
        <span className="font-medium">{amount}</span>
      </div>
    </div>
  );
}
