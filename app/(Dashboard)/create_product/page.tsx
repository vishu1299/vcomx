import React from "react";
import { CloudUpload } from "lucide-react"; // Importing Cloud Upload icon

const CreateProduct = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Create Product</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Section */}
          <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
            {/* Description */}
            <h3 className="text-lg font-medium mb-2">Description</h3>
            <div className="border border-gray-200 rounded-lg p-6">
              <label className="block text-sm font-semibold mb-1">
                PRODUCT NAME
              </label>
              <input
                type="text"
                placeholder="Enter Product Name"
                className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg mb-4"
              />
              <label className="block text-sm font-semibold mb-1">
                PRODUCT DESCRIPTION
              </label>
              <textarea
                placeholder="Enter Product Description"
                className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Product Categories */}
            <h3 className="text-lg font-medium mb-2">Product Categories</h3>
            <div className="border border-gray-200 rounded-lg p-6">
              <label className="block text-sm font-semibold mb-1">
                PRODUCT CATEGORY
              </label>
              <select className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg mb-4">
                <option>Select Category</option>
              </select>
              <label className="block text-sm font-semibold mb-1">
                PRODUCT TAGS
              </label>
              <div className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg mb-4">
                <div className="inline-flex items-center gap-2">
                  <span className="bg-gray-200 text-sm px-3 py-1 rounded-lg">
                    FURNITURE
                  </span>
                  <button className="text-red-500 text-sm">✕</button>
                </div>
              </div>
              <label className="block text-sm font-semibold mb-1">
                PRODUCT SHORT DESCRIPTION
              </label>
              <textarea
                placeholder="Add short description for product"
                className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Publish Section */}
            <h3 className="text-lg font-medium mb-2">Publish</h3>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    STATUS
                  </label>
                  <select className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg">
                    <option>Published</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    VISIBILITY
                  </label>
                  <select className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg">
                    <option>Public</option>
                  </select>
                </div>
              </div>
              <label className="block text-sm font-semibold mb-1">
                PUBLISH SCHEDULE
              </label>
              <input
                type="datetime-local"
                className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white shadow-md rounded-lg p-6 space-y-6 flex flex-col justify-between h-full">
            {/* General Info */}
            <h3 className="text-lg font-medium mb-2">General Info</h3>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="space-y-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    MANUFACTURER NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Manufacturer Name"
                    className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    MANUFACTURER BRAND
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Manufacturer Brand"
                    className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    STOCKS
                  </label>
                  <input
                    type="number"
                    placeholder="Stocks"
                    className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    PRICE, $
                  </label>
                  <input
                    type="text"
                    placeholder="Price"
                    className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    DISCOUNT, %
                  </label>
                  <input
                    type="number"
                    placeholder="Discount"
                    className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    PRODUCT SKU
                  </label>
                  <input
                    type="text"
                    placeholder="Orders"
                    className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Product Gallery */}
            <h3 className="text-lg font-medium mb-2">Product Gallery</h3>
            <div className="border border-gray-200 rounded-lg p-6 flex-grow h-full">
              <div className="border-dashed border-2 border-gray-300 p-10 text-center rounded-lg bg-gray-100 relative h-64 flex flex-col justify-center items-center">
                <CloudUpload className="w-8 h-8 text-gray-400 mb-2" />
                <p className="text-gray-500">
                  Drop files here or click to upload Video
                </p>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 mt-4">
                {Array(8)
                  .fill(null)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="w-12 h-12 bg-gray-100 border border-gray-300 rounded-lg"
                    />
                  ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4">
              <button className="bg-gray-200 px-6 py-2 rounded-lg">
                Cancel
              </button>
              <button className="bg-[#FF8548] text-white px-6 py-2 rounded-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
