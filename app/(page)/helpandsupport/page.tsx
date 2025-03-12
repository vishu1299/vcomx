"use client";

import Link from "next/link";
import React, { useState, ReactNode } from "react";
import { AiFillWechat } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import {
  FaPhone,
  FaEnvelope,
  FaUser,
  FaBox,
  FaWallet,
  FaShippingFast,
  FaCog,
  FaStream,
} from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

// TypeScript interfaces
interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

interface HelpTopic {
  name: string;
  icon: ReactNode;
}

interface SectionTitleProps {
  title: string;
}

interface HelpTopicItemProps {
  topic: HelpTopic;
}

interface FaqItemProps {
  item: FaqItem;
  isOpen: boolean;
  toggleFaq: (id: number) => void;
}

interface SupportCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  buttonText: string;
}

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "Why engage wesenatis volutpat?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    question: "Another question here?",
    answer: "Suspendisse ornare, leo sit amet pulvinar consequat, urna eros ?",
  },
  {
    id: 3,
    question: "Why engage wesenatis volutpat?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    question: "Why engage wesenatis volutpat?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    question: "Why engage wesenatis volutpat?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    question: "Why engage wesenatis volutpat?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const helpTopics: HelpTopic[] = [
  { name: "Orders & Returns", icon: <FaBox /> },
  { name: "Payments & Wallet", icon: <FaWallet /> },
  { name: "Shipping & Delivery", icon: <FaShippingFast /> },
  { name: "Seller Related", icon: <FaUser /> },
  { name: "Account Settings", icon: <FaCog /> },
  { name: "Product Related", icon: <FaStream /> },
  { name: "Live Stream", icon: <FaStream /> },
];

// Section title component for consistency
const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => (
  <div className="relative w-fit mb-6">
    <h2 className="text-2xl font-bold text-gray-900 pb-2">{title}</h2>
    <div className="absolute left-0 bottom-0 w-20 h-1 bg-orange"></div>
  </div>
);

// Help topic item component
const HelpTopicItem: React.FC<HelpTopicItemProps> = ({ topic }) => (
  <li className="flex items-center py-3 px-2 text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-200 cursor-pointer">
    <div className="text-red-500 mr-3">{topic.icon}</div>
    <span className="flex-grow">{topic.name}</span>
    <BiChevronRight size={20} className="text-gray-400" />
  </li>
);

// FAQ item component
const FaqItem: React.FC<FaqItemProps> = ({ item, isOpen, toggleFaq }) => (
  <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm mb-3">
    <button
      onClick={() => toggleFaq(item.id)}
      className={`w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 bg-white hover:bg-gray-50 transition-colors duration-100 relative ${
        isOpen
          ? "border-l-[40px] border-orange"
          : "border-l-[40px] border-[#b7bdc4]"
      }`}
    >
      {/* Question number - positioned in the left border */}
      <div
        className={`absolute left-[-20px]  transform -translate-y-1/2 text-white font-semibold ${
          isOpen ? "top-[100%]" : "top-1/2"
        }`}
      >
        {item.id}
      </div>
      <span className="font-medium text-black text-lg">{item.question}</span>
      {isOpen ? (
        <IoIosArrowDown className="text-orange" />
      ) : (
        <IoIosArrowForward className="text-orange" />
      )}
    </button>
    {isOpen && (
      <div
        className={`bg-white p-4 text-gray-700 transition-colors duration-100 ${
          isOpen
            ? "border-l-[40px] border-orange"
            : "border-l-[40px] border-orange"
        }`}
      >
        {/* No number in the answer section */}
        {item.answer}
      </div>
    )}
  </div>
);

// Support card component - fixed to ensure consistent height and alignment
const SupportCard: React.FC<SupportCardProps> = ({
  icon,
  title,
  description,
  buttonText,
}) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
    <div className="p-6 text-center flex flex-col flex-grow">
      <div className="text-orange mx-auto mb-3 h-12 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <button className="bg-orange text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors duration-200 w-full mt-auto">
        {buttonText}
      </button>
    </div>
  </div>
);

export default function HelpCenter(): React.ReactElement {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleFaq = (id: number): void => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const toggleSidebar = (): void => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden p-4 flex items-center bg-white shadow-sm">
        <button
          onClick={toggleSidebar}
          className="flex items-center text-gray-800 focus:outline-none"
        >
          <FaStream className="mr-2" />
          <span>Help Topics</span>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row p-4 md:p-6 lg:p-8 gap-6">
        {/* Sidebar - hidden on mobile by default */}
        <div
          className={`${
            sidebarOpen ? "block" : "hidden"
          } lg:block lg:w-1/4 bg-white p-4 md:p-6 shadow-md rounded-lg h-fit`}
        >
          <h2 className="text-xl font-bold mb-4">Help Topics</h2>
          <ul className="space-y-1">
            {helpTopics.map((topic, index) => (
              <HelpTopicItem key={index} topic={topic} />
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4">
          {/* FAQ Section */}
          <section className="mb-12">
            <SectionTitle title="Frequently Asked Questions" />
            <div className="space-y-3">
              {faqData.map((item) => (
                <FaqItem
                  key={item.id}
                  item={item}
                  isOpen={openFaq === item.id}
                  toggleFaq={toggleFaq}
                />
              ))}
            </div>
          </section>

          {/* Contact Support Section */}
          <section className="mb-12">
            <SectionTitle title="Still Need Help?" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <SupportCard
                icon={<FaPhone className="text-3xl" />}
                title="Call Us"
                description="24x7 support available"
                buttonText="CALL NOW"
              />
              <SupportCard
                icon={<FaEnvelope className="text-3xl" />}
                title="Email Support"
                description="Get a response within 24 hours"
                buttonText="SEND EMAIL"
              />
              <div className="h-full">
                {" "}
                {/* Wrapper to maintain consistent height */}
                <Link href="/cartsupport" className="h-full block">
                  <SupportCard
                    icon={<AiFillWechat className="text-3xl" />}
                    title="Live Chat"
                    description="Chat with our support team"
                    buttonText="START CHAT"
                  />
                </Link>
              </div>
            </div>
          </section>

          {/* Seller Support Section */}
          <section>
            <SectionTitle title="Seller Support" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SupportCard
                icon={<FaUser className="text-3xl" />}
                title="New Seller Guide"
                description="Everything you need to know about selling on our platform"
                buttonText="START SELLING"
              />
              <SupportCard
                icon={<FaCog className="text-3xl" />}
                title="Seller Login"
                description="Access your seller account and manage your business"
                buttonText="SELLER LOGIN"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
