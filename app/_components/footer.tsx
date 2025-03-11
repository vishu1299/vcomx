import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

function Footer() {
  return (
    <div>
      <div className="bg-[#142535]  text-white py-10">
        <div className="lg:w-[85%] mx-auto">
          <div className=" px-4 ">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-b border-[#FFFFFF] pb-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-white">
                    <img
                      src="/src/Assets/Images/footer/call-1.svg"
                      alt="Call"
                    />
                  </div>
                  <div>
                    <p className="font-Oswald font-normal text-[#FFFFFF] text-[21px]">
                      Call us 24/7
                    </p>
                    <p className="font-Oswald font-normal text-[#FFFFFF] text-[25px]">
                      +1 (208) 703-6484
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-white">
                    <img
                      src="/src/Assets/Images/footer/gmai-1.svg"
                      alt="Email"
                    />
                  </div>
                  <div>
                    <p className="font-Oswald font-normal text-[#FFFFFF] text-[21px]">
                      Subscribe Newsletter
                    </p>
                    <p className="font-Oswald font-normal text-[#FFFFFF] text-[15px]">
                      Sign up for weekly newsletter
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 p-3 w-full text-gray-600 rounded-lg outline-none"
                />
                <button className="absolute right-0 bg-[#FF6F3C] text-white font-bold px-4 md:px-6 py-3 rounded-lg uppercase">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-6 py-4">
              <div className="col-span-2">
                <p className="font-Oswald text-[32px] md:text-[42px] font-normal text-[#FFFFFF]">
                  Mall Shopping
                </p>
                <p className="font-Oswald text-[15px] font-normal text-[#FFFFFF]">
                  Monday – Saturday: 8:00 am – 4:00 pm
                </p>
                <p className="font-Oswald text-[15px] font-normal text-[#FFFFFF]">
                  Sunday: 9:00 am – 5:00 pm
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#FFFFFF] text-[18px] font-Oswald">
                  Quick Links
                </p>
                <ul className="space-y-1 text-[#B8BEC2] text-[15px] font-Oswald font-normal">
                  <li>About us</li>
                  <li>Blog</li>
                  <li>Check out</li>
                  <li>Contact</li>
                  <li>Service</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[#FFFFFF] text-[18px] font-Oswald">
                  Categories
                </p>
                <ul className="space-y-1 text-[#B8BEC2] text-[15px] font-Oswald font-normal">
                  <li>Promotions</li>
                  <li>Sweatshirts</li>
                  <li>Jackets</li>
                  <li>Denim Jeans</li>
                  <li>Swimwear</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[#FFFFFF] text-[18px] font-Oswald">
                  Help Center
                </p>
                <ul className="space-y-1 text-[#B8BEC2] text-[15px] font-Oswald font-normal">
                  <li>Help & FAQs</li>
                  <li>Returns Policy</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Support Center</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[#FFFFFF] text-[18px] font-Oswald">
                  Contact info
                </p>
                <ul className="space-y-1 text-[#B8BEC2] text-[15px] font-Oswald font-normal">
                  <li>E 516 Goma Plaza </li>
                  <li>sector 7 dwarka, New Delhi</li>
                  <li>info@xcrino.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center text-[#FFFFFF] font-Oswald font-normal border-t bg-[#FF6F3C] text-[15px] border-gray-700 py-3 px-6 md:px-16">
        <p className="text-center md:text-left">
          Copyright © 2025 Xcrino Business Solutions Inc. All rights reserved
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <FaFacebookF className="hover:text-white cursor-pointer" />
          <FaInstagram className="hover:text-white cursor-pointer" />
          <CiYoutube className="hover:text-white cursor-pointer" />
          <FaTwitter className="hover:text-white cursor-pointer" />
          <FaPinterestP className="hover:text-white cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
