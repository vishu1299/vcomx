import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5"; // Importing upload icon

const GoLive: React.FC = () => {
  return (
    <div className=" bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">Go Live</h2>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Section */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border border-gray-200 w-full">
          {/* Stream Configuration */}
          <h3 className="text-lg font-medium mb-4">Stream Configuration</h3>

          <div className="mb-6 border border-gray-200 p-4 rounded-lg">
            <input
              type="text"
              placeholder="Enter Stream Title"
              className="w-full p-3 mb-4 bg-gray-100 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Enter Stream Description"
              className="w-full p-3 mb-4 bg-gray-100 border border-gray-300 rounded"
              rows={4}
            ></textarea>
          </div>

          {/* Categories */}
          <h3 className="text-lg font-medium mb-4">Categories</h3>

          <div className="mb-6 border border-gray-200 p-4 rounded-lg">
            <select className="w-full p-3 mb-4 bg-gray-100 border border-gray-300 rounded">
              <option>Fashion & Beauty</option>
            </select>

            {/* Product Tags */}
            <div className="mb-4">
              <label className="text-sm font-medium mb-2 block">
                Product Tags
              </label>
              <div className="w-full p-3 bg-gray-100 border border-gray-300 rounded flex items-center gap-2">
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  Furniture ✕
                </span>
                <input
                  type="text"
                  className="flex-1 bg-transparent focus:outline-none"
                  placeholder="Add tags"
                />
              </div>
            </div>

            {/* Stream Language */}
            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2">Stream Language</h4>
              <div className="flex flex-wrap gap-4">
                {["720", "1080", "4K"].map((quality, index) => (
                  <label
                    key={index}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="quality"
                      defaultChecked={index === 0}
                    />
                    <span>{quality}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Configuration */}
          <h3 className="text-lg font-medium mb-4">Chat Configuration</h3>

          <div className="border border-gray-200 p-4 rounded-lg">
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <select className="w-full sm:w-1/2 p-3 bg-gray-100 border border-gray-300 rounded">
                <option>No delay</option>
              </select>
              <input
                type="text"
                placeholder="Enter Word"
                className="w-full sm:w-1/2 p-3 bg-gray-100 border border-gray-300 rounded"
              />
            </div>
            <div className="flex items-center justify-between">
              <span>Slow Mode</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  defaultChecked
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer-checked:bg-[#FF683A] peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border border-gray-200 w-full">
          {/* Monetization */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-4">Monetization</h3>
            {[
              "Enable Super Chat",
              "Allow Donations",
              "Product Showcase",
              "Affiliate Links",
              "Email Notifications",
              "Push Notifications",
              "Stream Start Reminders",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between mb-3"
              >
                <span>{item}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked={item !== "Product Showcase"}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer-checked:bg-[#FF683A] peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
            ))}
          </div>

          {/* Upload Thumbnail Section */}
          <h3 className="text-lg font-medium mb-4">Upload Thumbnail</h3>
          <div className="border border-gray-200 p-4 rounded-lg mb-6">
            <div className="border-dashed bg-gray-100 border-2 border-gray-300 p-6 rounded-lg text-center mb-4 h-40 sm:h-60 flex flex-col justify-center items-center">
              <IoCloudUploadOutline className="text-4xl text-gray-500 mb-2" />
              <p className="text-gray-500">Upload thumbnail for live stream</p>
            </div>
            <button className="w-full py-2 bg-gray-200 text-gray-700 rounded">
              Change
            </button>
          </div>
        </div>
      </div>

      {/* Start Stream Button Outside and Aligned */}
      <div className="w-full flex justify-end mt-4">
        <button className="px-6 py-2 bg-[#FF8548] text-white rounded hover:bg-orange-600">
          Start Stream
        </button>
      </div>
    </div>
  );
};

export default GoLive;
