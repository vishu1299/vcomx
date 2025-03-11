"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const brands = [
  { name: "Adidas", count: 10 },
  { name: "Balmain", count: 39 },
  { name: "Balenciage", count: 95 },
  { name: "Burberry", count: 110 },
  { name: "Kenzo", count: 48 },
  { name: "Givenchy", count: 77 },
  { name: "Zara", count: 110 },
  { name: "Forever 21", count: 48 },
];

export default function BrandFilter() {
  const [search, setSearch] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const filteredBrands = brands.filter((brand) =>
    brand.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className=" w-full max-w-xs mx-auto rounded-md bg-white shadow-md p-4">
      <h2 className="text-lg font-bold mb-3 text-black">BRANDS</h2>
      <Input
        type="text"
        placeholder="Search"
        className="mb-3 text-black border border-gray-300"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="space-y-2">
        {filteredBrands.map((brand) => (
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
            <span className="text-sm  text-[#1C1F23] text-[14px] font-normal  font-Oswald">
              {brand.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
