"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const brands = [
  { name: "Promotions" },
  { name: "Deals Of The Month" },
  { name: "New Arrivals" },
  { name: "On Discounts" },
  { name: "Free Shipping" },
];

export default function Highlight() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  return (
    <div className=" w-full max-w-xs mx-auto rounded-md bg-white shadow-md p-4">
      <h2 className="text-lg font-bold mb-3 text-black">Highlight</h2>

      <div className="space-y-2">
        {brands.map((brand) => (
          <div key={brand.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#1C1F23] text-[14px] font-normal  font-Oswald">
              <div
                role="checkbox"
                aria-checked={selectedBrands.includes(brand.name)}
                tabIndex={0}
                onClick={() => toggleBrand(brand.name)}
                className={cn(
                  "w-4 h-4 border border-black flex items-center justify-center cursor-pointer",
                  selectedBrands.includes(brand.name) ? "bg-white" : "bg-white"
                )}
              >
                {selectedBrands.includes(brand.name) && (
                  <div className="w-2 h-2 bg-black"></div>
                )}
              </div>
              <label htmlFor={brand.name} className="text-sm text-black">
                {brand.name}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
