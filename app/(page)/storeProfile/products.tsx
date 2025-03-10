import React, { useState, useEffect } from "react";
import { IoIosNotifications } from "react-icons/io";
import ProductsDetails from "./productsDetails";
const Products = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 58,
    minutes: 36,
    seconds: 44,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="relative w-full h-64 rounded-xl overflow-hidden">
        <img
          src="/src/Assets/Images/products/imge-product.jpg"
          alt="Product"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col md:flex-row items-center p-6">
          <div className="text-white flex flex-col gap-3 w-full md:w-auto">
            <h2 className="text-[24px] md:text-[40px] text-[#FFFFFF] font-Oswald font-bold">
              Premium Fashion
            </h2>
            <p className="text-[24px] md:text-[40px] text-[#FFFFFF] font-Oswald font-bold">
              Item 1
            </p>

            <div className=" bg-[#FF6F3C] w-full md:w-[200px] flex justify-center items-center gap-4 text-white p-3 rounded-lg text-sm font-medium">
              <IoIosNotifications className="text-lg" />
              <p>SET REMINDER</p>
            </div>
          </div>

          <div className="mt-4 md:ml-auto text-white text-lg md:text-2xl font-semibold flex gap-2 justify-center w-full md:w-auto">
            <div className="text-center">
              <span>{String(timeLeft.days).padStart(2, "0")}</span>
              <p className="text-xs md:text-sm">DAYS</p>
            </div>
            <span>:</span>
            <div className="text-center">
              <span>{String(timeLeft.hours).padStart(2, "0")}</span>
              <p className="text-xs md:text-sm">HOURS</p>
            </div>
            <span>:</span>
            <div className="text-center">
              <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
              <p className="text-xs md:text-sm">MINUTES</p>
            </div>
            <span>:</span>
            <div className="text-center">
              <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
              <p className="text-xs md:text-sm">SECONDS</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ProductsDetails />
      </div>
    </div>
  );
};

export default Products;
