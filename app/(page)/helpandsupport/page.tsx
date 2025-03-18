"use client";

import React, { ReactNode, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import {
  FaBox,
  FaWallet,
  FaShippingFast,
  FaUser,
  FaCog,
  FaStream,
} from "react-icons/fa";
// import Faq from "./_components/faq";
import ReturnPolicyPage from "./_components/returnPolicy";
import Faq from "./_components/faq";
import TermsAndConditions from "./_components/termsCondition";
import PrivacyPolicy from "./_components/privacyPolicy";

// TypeScript interfaces
interface HelpTopic {
  name: string;
  icon: ReactNode;
}

interface HelpTopicItemProps {
  topic: HelpTopic;
}

const helpTopics: HelpTopic[] = [
  { name: "Frequently Asked Questions", icon: <FaBox /> },
  { name: "Orders & Returns", icon: <FaBox /> },
  { name: "Shipping & Delivery", icon: <FaWallet /> },
  { name: "Privacy Policy", icon: <FaShippingFast /> },
  { name: "Terms & Condition", icon: <FaUser /> },
  { name: "Return Policy", icon: <FaCog /> },
  { name: "Live Stream", icon: <FaStream /> },
];

// Help topic item component
const HelpTopicItem: React.FC<HelpTopicItemProps> = ({ topic }) => (
  <li className="flex items-center py-3 px-2 text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-200 cursor-pointer">
    <div className="text-red-500 mr-3">{topic.icon}</div>
    <span className="flex-grow">{topic.name}</span>
    <BiChevronRight size={20} className="text-gray-400" />
  </li>
);

export default function HelpCenter(): React.ReactElement {
  const [routing, setrouting] = useState("Frequently Asked Questions");

  return (
    <div className="">
      {/* Track Order Header */}
      <div className="text-center mb-8 bg-white mt-10">
        <h1 className="text-5xl font-bold text-gray-900 ">
          Help Center & Customer Support
        </h1>
      </div>

      {/* Track Order Form */}
      <div className="mt-5 flex flex-col sm:flex-row mb-10 max-w-[70%] mx-auto">
        <input
          type="text"
          placeholder="Search for help..."
          className="flex-grow  px-4 py-3 text-lg text-gray-500 border border-gray-300 focus:outline-none"
        />
        <button className="bg-black text-white font-semibold py-3 px-6 text-lg sm:px-8 uppercase tracking-wide hover:bg-black transition-colors duration-200">
          Search
        </button>
      </div>
      <div className="bg-gray-100 min-h-screen w-full">
        <div className="flex flex-col lg:flex-row p-4 md:p-6 lg:p-8 gap-6 ">
          {/* Sidebar - hidden on mobile by default */}
          <div className={` lg:block lg:w-1/4  p-4 md:p-6  h-fit`}>
            <h2 className="text-xl font-bold mb-4">Help Topics</h2>
            <ul className="space-y-1">
              {helpTopics.map((topic, index) => (
                <h1 onClick={() => setrouting(topic.name)} key={index}>
                  <HelpTopicItem topic={topic} />
                </h1>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {routing === "Frequently Asked Questions" && <Faq />}
            {routing === "Return Policy" && <ReturnPolicyPage />}
            {routing === "Terms & Condition" && <TermsAndConditions />}
            {routing === "Privacy Policy" && <PrivacyPolicy />}
            {/* {routing === "Shipping & Delivery" && <PrivacyPolicy />} */}
          </div>
        </div>
      </div>
    </div>
  );
}
