"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

interface Service {
  title: string;
  description: string;
  serviceIcon: string;
}

interface BrandItem {
  bg: string;
  fg: string;
  name: string;
  size: string;
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const services: Service[] = [
  {
    title: "24/7 Customer Service",
    description: "We're here to help you with any questions 24/7.",
    serviceIcon: "/src/Assets/Images/phone-call.png",
  },
  {
    title: "14-Day Money Back",
    description: "If not satisfied, return within 14 days for a refund.",
    serviceIcon: "/src/Assets/Images/Return.png",
  },
  {
    title: "Our Guarantee",
    description: "We stand behind our products.",
    serviceIcon: "/src/Assets/Images/guarantee.png",
  },
  {
    title: "Shipping Worldwide",
    description: "We ship products worldwide.",
    serviceIcon: "/src/Assets/Images/delivery-truck1.png",
  },
];

const brands: BrandItem[] = [
  {
    bg: "/src/Assets/Images/CURATEDBRANDS/Background (1).png",
    fg: "/src/Assets/Images/CURATEDBRANDS/Frame 32.png",
    name: "LOREM",
    size: "200 ML",
  },
  {
    bg: "/src/Assets/Images/CURATEDBRANDS/Background (2).png",
    fg: "/src/Assets/Images/CURATEDBRANDS/Frame 32.png",
    name: "LOREM",
    size: "200 ML",
  },

  {
    bg: "/src/Assets/Images/CURATEDBRANDS/Background (3).png",
    fg: "/src/Assets/Images/CURATEDBRANDS/Frame 32.png",
    name: "LOREM",
    size: "200 ML",
  },
  {
    bg: "/src/Assets/Images/CURATEDBRANDS/Background (1).png",
    fg: "/src/Assets/Images/CURATEDBRANDS/Frame 32.png",
    name: "LOREM",
    size: "200 ML",
  },

  {
    bg: "/src/Assets/Images/CURATEDBRANDS/Background (1).png",
    fg: "/src/Assets/Images/CURATEDBRANDS/Frame 32.png",
    name: "LOREM",
    size: "200 ML",
  },
  {
    bg: "/src/Assets/Images/CURATEDBRANDS/Background (2).png",
    fg: "/src/Assets/Images/CURATEDBRANDS/Frame 32.png",
    name: "LOREM",
    size: "200 ML",
  },
];

const CuratedBrands: React.FC = () => {
  const carouselRef = useRef<Carousel | null>(null);

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.previous(0);
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.next(1);
    }
  };

  return (
    <div className="py-10 flex flex-col items-center justify-center ">
      <div className="bg-[#FCEEE7] w-full">
        <div className="flex items-center mt-15 w-full max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#121212] px-4 py-3">
            Emerging Brands
          </h2>
          <div className="flex-1 border-t border-gray-400 text-[#D6D6D6] ml-4"></div>

          <div className="flex gap-2 ml-4">
            <button
              onClick={handleScrollLeft}
              className="bg-[#FF6F3C] text-white p-2 rounded-full hover:bg-orange-600 transition-colors"
              aria-label="Scroll left"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleScrollRight}
              className="bg-[#FF6F3C] text-white p-2 rounded-full hover:bg-orange-600 transition-colors"
              aria-label="Scroll right"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="relative w-full flex justify-center items-center overflow-hidden">
          <div className="w-full max-w-6xl p-6">
            <Carousel
              ref={carouselRef}
              responsive={responsive}
              infinite={true}
              arrows={false}
              containerClass="carousel-container"
              itemClass="carousel-item px-2"
              autoPlay={false}
              autoPlaySpeed={5000}
              keyBoardControl={true}
              customTransition="transform 500ms ease-in-out"
              transitionDuration={500}
            >
              {brands.map((brand, index) => (
                <Link href="/brandprofile" key={index}>
                  <div className="relative flex-shrink-0 flex flex-col items-center justify-end h-80 w-full rounded-lg overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src={brand.bg}
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0"
                      />
                      <div className="absolute top-[30%] inset-0 flex flex-col items-center justify-center">
                        <Image
                          src={brand.fg}
                          alt=""
                          width={100}
                          height={50}
                          className="mb-3"
                        />
                        <div className="mt-auto mb-4 bg-white px-3 py-1 text-sm rounded flex gap-2">
                          <p className="font-bold text-sm text-[#111111]">
                            {brand.name}
                          </p>
                          <p className="text-[#888888]">({brand.size})</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      <div className="flex  flex-col md:flex-row gap-4 w-full max-w-6xl p-8 mt-6">
        <div className="relative bg-orange/70 p-5 rounded-lg overflow-hidden flex items-end h-[400px] w-full md:w-1/2">
          <Image
            src="/src/Assets/Images/CURATEDBRANDS/brad1.jpeg"
            alt="Product Image"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 opacity-50"
          />
          <div className="left-5 bottom-20 relative z-10">
            <h3 className="text-sm font-extralight text-[#555555]">Hot Deal</h3>
            <h2 className="text-xl font-semibold mt-2 text-[#000000]">
              TOURS SAFE
              <br /> TRUE DISCOUNT
            </h2>
            <button className="mt-3 bg-[#FF6F3C] text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
              Order Now
            </button>
          </div>
        </div>

        <div className="relative bg-gray-700 p-5 rounded-lg overflow-hidden flex items-end h-[400px] w-full md:w-1/2">
          <Image
            src="/src/Assets/Images/CURATEDBRANDS/brewier.jpeg"
            alt="Product Image"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 opacity-50"
          />
          <div className="left-5 bottom-20 relative z-10">
            <h3 className="text-sm font-extralight text-[#555555]">
              New Product
            </h3>
            <h2 className="text-xl font-semibold mt-1 text-[#000000]">
              EXPERIENCE TECHNOLOGY
              <br /> RELAX HIGHLY
            </h2>
            <button className="mt-3 bg-[#FF6F3C] text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
              Order Now
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8 bg-white p-5 rounded-lg shadow w-full max-w-6xl">
        {services.map((service, index) => (
          <div key={index} className="text-center flex flex-col items-center">
            <Image
              src={service.serviceIcon}
              width={50}
              height={50}
              alt="Picture of the author"
            />
            {/* <p className="w-12 h-12 mb-2">{service.serviceIcon}</p> */}
            <p className="text-lg font-semibold text-[#121212] mt-3 text-end">
              {service.title}
            </p>
            <p className="text-xs text-[#5E6267] ">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CuratedBrands;
