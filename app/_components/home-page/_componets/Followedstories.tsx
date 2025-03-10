


"use client";

import Image from "next/image";
import Link from "next/link";

const stores = [
  {
    name: "Running Shoes",
    count: 54,
    image: "/src/assets/Images/stories/stories-1.png",
  },
  {
    name: "Running Clothes",
    count: 40,
    image: "/src/assets/Images/stories/stories-1.png",
    live: true,
  },
  {
    name: "Running Watch",
    count: 16,
    image: "/src/assets/Images/stories/stories-1.png",
  },
  {
    name: "Accessory",
    count: 22,
    image: "/src/assets/Images/stories/stories-1.png",
  },
  {
    name: "Cosmetics",
    count: 17,
    image: "/src/assets/Images/stories/stories-1.png",
  },
];

const FeaturedStores = () => {
  return (
    <div className="text-center mt-16">
      <h2 className="text-3xl font-semibold">FEATURED STORES</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-10">
        {stores.map((store, index) => (
          <div key={index} className="flex flex-col items-center">
            <Link href="/storeProfile">
              <div
                className={`relative w-32 h-32 rounded-full overflow-hidden border-4 ${
                  store.live
                    ? "border-[5px] border-red-500 border-dashed animate-borderGlow"
                    : "border-transparent"
                }`}
              >
                {store.live && (
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    LIVE
                  </div>
                )}
                <Image
                  src={store.image}
                  alt={store.name}
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
            </Link>
            <p className="mt-2 text-lg font-medium">
              {store.name} ({store.count})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedStores;
