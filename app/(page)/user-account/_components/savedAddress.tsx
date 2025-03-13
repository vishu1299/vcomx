// pages/saved-addresses.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Search,
  MapPin,
  User,
  Phone,
  ChevronLeft,
  CirclePlus,
} from "lucide-react";
import Image from "next/image";

interface Address {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  isDefault: boolean;
  type: "home" | "office";
}

export default function SavedAddresses() {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: "1",
      name: "John Smith",
      street: "123 Main Street, Apt 4B",
      city: "New York",
      state: "NY",
      zip: "10001",
      phone: "(555) 123-4567",
      isDefault: true,
      type: "home",
    },
    {
      id: "2",
      name: "John Smith",
      street: "123 Main Street, Apt 4B",
      city: "New York",
      state: "NY",
      zip: "10001",
      phone: "(555) 123-4567",
      isDefault: false,
      type: "office",
    },
  ]);

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [currentAddress, setCurrentAddress] = useState<Address | null>(null);

  const handleSetAsDefault = (id: string) => {
    setAddresses(
      addresses.map((address) => ({
        ...address,
        isDefault: address.id === id,
      }))
    );
  };

  const handleEditAddress = (address: Address) => {
    setCurrentAddress(address);
    setIsEditDialogOpen(true);
  };

  return (
    <div className="container w-full mx-auto max-w-4xl ">
      <div className="flex flex-col sm:flex-row items-center justify-between p-4 border-b bg-white">
        <div className="flex items-center gap-2 mb-3 sm:mb-0">
          <MapPin size={24} className="text-gray-800" />
          <h1 className="text-xl font-bold text-gray-800">Saved Address</h1>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Search size={20} className="text-gray-600" />
          <Select defaultValue="shipping">
            <SelectTrigger className="w-full sm:w-48 border-none shadow-none focus:ring-0">
              <SelectValue placeholder="Shipping Address" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="shipping">Shipping Address</SelectItem>
              <SelectItem value="billing">Billing Address</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="py-6 space-y-4">
        {addresses.map((address) => (
          <Card
            key={address.id}
            className="p-4 bg-white border-none shadow-sm rounded-lg"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-24 h-32 sm:h-24 bg-gray-100 rounded-md overflow-hidden">
                <Image
                  src="/src/Assets/Images/profilestore/pro-img-1.png"
                  alt="Map location"
                  width={120}
                  height={120}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="flex-1">
                <div className="flex justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-gray-600" />
                    <span className="font-medium">{address.name}</span>
                  </div>
                  <div>
                    {address.isDefault ? (
                      <span className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-md uppercase">
                        Home
                      </span>
                    ) : (
                      <span className="px-3 py-1 text-xs bg-purple-100 text-purple-600 rounded-md uppercase">
                        Office
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-2 flex items-start gap-2">
                  <MapPin
                    size={16}
                    className="text-gray-600 mt-0.5 flex-shrink-0"
                  />
                  <div className="flex-1 break-words">
                    <p className="text-sm text-gray-700">{address.street}</p>
                    <p className="text-sm text-gray-700">
                      {address.city}, {address.state} {address.zip}
                    </p>
                  </div>
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <Phone size={16} className="text-gray-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{address.phone}</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 sm:gap-4">
                  <Button
                    variant="outline"
                    className="px-2 sm:px-4 py-2 h-auto text-xs border font-bold border-gray-300 text-gray-700 rounded hover:bg-gray-50"
                    onClick={() => handleEditAddress(address)}
                  >
                    EDIT ADDRESS
                  </Button>
                  <Button
                    variant="outline"
                    className="px-2 sm:px-4 py-2 h-auto text-xs border font-bold border-gray-300 text-gray-700 rounded hover:bg-gray-50"
                  >
                    DELETE ADDRESS
                  </Button>

                  {address.isDefault ? (
                    <div className="ml-auto mt-2 sm:mt-0">
                      <span className="text-orange text-sm font-medium hover:underline">
                        SELECTED
                      </span>
                    </div>
                  ) : (
                    <div className="ml-auto mt-2 sm:mt-0">
                      <Button
                        variant="ghost"
                        className="text-orange text-sm font-medium hover:text-orange hover:underline hover:bg-transparent p-0"
                        onClick={() => handleSetAsDefault(address.id)}
                      >
                        SET AS DEFAULT
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-4 mb-6">
        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-md"
          onClick={() => {
            setCurrentAddress(null);
            setIsEditDialogOpen(true);
          }}
        >
          ADD NEW ADDRESS
          <CirclePlus strokeWidth={2.5} size={22} className="my-auto" />
        </Button>
      </div>

      {/* Fixed Dialog with Buttons at Bottom */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-lg p-0 max-h-[90vh] flex flex-col w-[95vw]">
          <div className="flex items-center p-4 border-b bg-white sticky top-0 z-10">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2"
              onClick={() => setIsEditDialogOpen(false)}
            >
              <ChevronLeft size={24} />
            </Button>
            <h2 className="text-lg sm:text-xl font-semibold truncate">
              {currentAddress
                ? "Edit Shipping Address"
                : "Add Shipping Address"}
            </h2>
          </div>

          <div className="overflow-y-auto flex-1">
            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Address Label
                </label>
                <Select defaultValue={currentAddress?.type || "home"}>
                  <SelectTrigger className="w-full border rounded-md">
                    <SelectValue placeholder="Select address type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="home">Home</SelectItem>
                    <SelectItem value="office">Office</SelectItem>
                    <SelectItem value="shipping">Shipping Address</SelectItem>
                    <SelectItem value="billing">Billing Address</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Map Location
                </label>
                <div className="h-32 bg-gray-100 rounded-md overflow-hidden">
                  <Image
                    src="/src/Assets/Images/map.png"
                    alt="Map location"
                    width={768}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name<span className="text-red-500 ml-1">*</span>
                  </label>
                  <Input
                    className="w-full border rounded-md"
                    defaultValue={currentAddress?.name || ""}
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Mobile Phone<span className="text-red-500 ml-1">*</span>
                  </label>
                  <Input
                    className="w-full border rounded-md"
                    defaultValue={currentAddress?.phone || ""}
                    placeholder="(000) 000-0000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Street Address<span className="text-red-500 ml-1">*</span>
                </label>
                <Input
                  className="w-full border rounded-md"
                  defaultValue={currentAddress?.street || ""}
                  placeholder="123 Main St, Apt 4B"
                />
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Country<span className="text-red-500 ml-1">*</span>
                  </label>
                  <Select defaultValue="us">
                    <SelectTrigger className="w-full border rounded-md">
                      <SelectValue placeholder="Select Country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    State<span className="text-red-500 ml-1">*</span>
                  </label>
                  <Select
                    defaultValue={currentAddress?.state?.toLowerCase() || "ny"}
                  >
                    <SelectTrigger className="w-full border rounded-md">
                      <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ny">New York</SelectItem>
                      <SelectItem value="ca">California</SelectItem>
                      <SelectItem value="tx">Texas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    City<span className="text-red-500 ml-1">*</span>
                  </label>
                  <Select defaultValue="nyc">
                    <SelectTrigger className="w-full border rounded-md">
                      <SelectValue placeholder="Select City" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nyc">New York City</SelectItem>
                      <SelectItem value="la">Los Angeles</SelectItem>
                      <SelectItem value="chi">Chicago</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Zip Code<span className="text-red-500 ml-1">*</span>
                  </label>
                  <Input
                    className="w-full border rounded-md"
                    defaultValue={currentAddress?.zip || ""}
                    placeholder="Enter zip code"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-t p-4 flex justify-end gap-3 sticky top-0 z-10">
            <Button
              variant="outline"
              className="px-4 sm:px-6 py-2 h-auto font-medium border border-gray-300"
              onClick={() => setIsEditDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              className="px-4 sm:px-6 py-2 h-auto font-medium bg-orange hover:bg-orange-600 text-white"
              onClick={() => setIsEditDialogOpen(false)}
            >
              Save Changes
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
