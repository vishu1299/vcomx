import React from "react";

const GenerateReport = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Generate Report</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Section */}
          <div className="bg-white border border-gray-200 shadow-md rounded-lg p-4 sm:p-6">
            {/* Report Section */}
            <h3 className="text-lg font-medium mb-2">Report</h3>
            <div className="border border-gray-200 rounded-lg p-4 sm:p-6 mb-6">
              <input
                type="text"
                placeholder="Enter Report Name"
                className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg mb-4"
              />
              {/* Data Source */}
              <h4 className="text-sm font-medium mb-2">DATA SOURCE</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                <button className="bg-[#ffeee6] text-[#FF8548] px-4 py-2 rounded-lg border border-[#FF8548]">
                  📊 Website Analytics
                </button>
                <button className="bg-gray-100 px-4 py-2 rounded-lg border border-gray-300">
                  🌐 Website Analytics
                </button>
                <button className="bg-gray-100 px-4 py-2 rounded-lg border border-gray-300">
                  📈 Website Analytics
                </button>
              </div>

              {/* Export Format */}
              <h4 className="text-sm font-medium mb-2">EXPORT FORMAT</h4>
              <div className="flex flex-wrap gap-4 mb-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="format"
                    className="text-[#FF8548]"
                  />
                  <span>PDF</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="format" />
                  <span>EXCEL</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="format" />
                  <span>CSV</span>
                </label>
              </div>
            </div>

            {/* Data Configuration Section */}
            <h3 className="text-lg font-medium mb-2">Data Configuration</h3>
            <div className="border border-gray-200 rounded-lg p-4 sm:p-6 mb-6">
              <input
                type="text"
                value="Last 7 days"
                disabled
                className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg mb-4"
              />
              <h4 className="text-sm font-medium mb-2">METRICS</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Page Views",
                  "Session Duration",
                  "Conversion Rate",
                  "Unique Visitors",
                  "Bounce Rate",
                  "Revenue",
                ].map((metric, index) => (
                  <label key={index} className="flex items-center space-x-2">
                    <input type="checkbox" className="text-orange-500" />
                    <span>{metric}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Visualization Settings Section */}
            <h3 className="text-lg font-medium mb-2">Visualization Settings</h3>
            <div className="border border-gray-200 rounded-lg p-4 sm:p-6">
              <div className="flex flex-wrap gap-2">
                <button className="bg-[#ffeee6] text-[#FF8548] px-4 py-2 rounded-lg border border-[#FF8548]">
                  📊 Line Chart
                </button>
                <button className="bg-gray-100 px-4 py-2 rounded-lg border border-gray-300">
                  📊 Bar Chart
                </button>
                <button className="bg-gray-100 px-4 py-2 rounded-lg border border-gray-300">
                  📊 Pie Chart
                </button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white border border-gray-200 shadow-md rounded-lg p-4 sm:p-6">
            {/* Schedule Settings Section */}
            <h3 className="text-lg font-medium mb-2">Schedule Settings</h3>
            <div className="border border-gray-200 rounded-lg p-4 sm:p-6">
              {/* Export Format */}
              <h4 className="text-sm font-medium mb-2">EXPORT FORMAT</h4>
              <div className="flex flex-wrap gap-4 mb-4">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="schedule" defaultChecked />
                  <span>Daily</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="schedule" />
                  <span>Weekly</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="schedule" />
                  <span>Monthly</span>
                </label>
              </div>

              {/* Recipients */}
              <h4 className="text-sm font-medium mb-2">RECIPIENTS</h4>
              <div className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg mb-4">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-gray-200 text-sm px-3 py-1 rounded-lg border border-gray-300">
                    JOHN@EXAMPLE.COM ✕
                  </span>
                  <span className="bg-gray-200 text-sm px-3 py-1 rounded-lg border border-gray-300">
                    SARAH@EXAMPLE.COM ✕
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Add recipient email"
                  className="w-full bg-transparent p-2 outline-none"
                />
              </div>

              {/* Notification Preferences */}
              <h4 className="text-sm font-medium mb-2">
                NOTIFICATION PREFERENCES
              </h4>
              <div className="space-y-2 mb-4">
                {[
                  "Send email when report is generated",
                  "Notify on report failure",
                  "Include report summary in email",
                ].map((item, index) => (
                  <label key={index} className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons - Aligned Outside Right Box */}
        <div className="flex justify-end gap-4 mt-6">
          <button className="bg-gray-200 px-6 py-2 rounded-lg">
            Reset Setting
          </button>
          <button className="bg-[#FF8548] text-white px-6 py-2 rounded-lg">
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerateReport;
