import React from "react";
import {
  Search,
  Package,
  Truck,
  CheckCircle,
  Clock,
  ChevronRight,
  MoreHorizontal,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

// Types for our application
type ShipmentStatus = "Completed" | "On Delivery" | "In Transit";
type ShipmentType = "Regular" | "Express" | "Instant";

interface Shipment {
  id: string;
  date: string;
  time: string;
  status: ShipmentStatus;
  progress: number;
  type: ShipmentType;
  origin?: string;
  destination?: string;
}

interface ShipmentDetail extends Shipment {
  distance?: string;
  hours?: number;
  shippingType?: string;
  pickupLocation?: {
    name: string;
    address: string;
    city: string;
    postalCode: string;
  };
  dropOffLocation?: {
    name: string;
    address: string;
    city: string;
    postalCode: string;
  };
  package?: {
    category: string;
    name: string;
    quantity: number;
    weight: string;
  };
  timeline?: {
    date: string;
    time: string;
    status: string;
    description: string;
  }[];
}

const shipments: Shipment[] = [
  {
    id: "SHP-56789",
    date: "28/04/28",
    time: "11:00 AM",
    status: "Completed",
    progress: 100,
    type: "Regular",
  },
  {
    id: "SHP-56790",
    date: "29/04/28",
    time: "09:00 AM",
    status: "On Delivery",
    progress: 80,
    type: "Express",
  },
  {
    id: "SHP-56791",
    date: "29/04/28",
    time: "01:30 PM",
    status: "In Transit",
    progress: 50,
    type: "Regular",
  },
  {
    id: "SHP-56792",
    date: "30/04/28",
    time: "10:00 AM",
    status: "On Delivery",
    progress: 70,
    type: "Instant",
  },
  {
    id: "SHP-56793",
    date: "30/04/28",
    time: "12:00 PM",
    status: "Completed",
    progress: 100,
    type: "Regular",
  },
  {
    id: "SHP-56794",
    date: "01/05/28",
    time: "08:30 AM",
    status: "In Transit",
    progress: 40,
    type: "Express",
  },
];

const selectedShipment: ShipmentDetail = {
  id: "SHP-56790",
  date: "29/04/28",
  time: "09:00 AM",
  status: "On Delivery",
  progress: 80,
  type: "Express",
  distance: "2,450 miles (approx.)",
  hours: 27,
  shippingType: "Express Shipping",
  pickupLocation: {
    name: "Fashion Hub Warehouse",
    address: "456 Market Street",
    city: "Los Angeles, CA",
    postalCode: "90015",
  },
  dropOffLocation: {
    name: "Linda Moore",
    address: "789 Pine Avenue, Apartment 4C",
    city: "New York, NY",
    postalCode: "10001",
  },
  package: {
    category: "Accessories",
    name: "Luxury Wristwatch",
    quantity: 1,
    weight: "1.5 lbs",
  },
  timeline: [
    {
      date: "Apr 30, 2028",
      time: "11:45 AM",
      status: "Nearing Delivery",
      description:
        "Delivery truck en route to final destination. 5 miles away from drop-off location",
    },
    {
      date: "Apr 30, 2028",
      time: "06:00 AM",
      status: "Out for Delivery",
      description: "Out for delivery to recipient, New York, NY",
    },
    {
      date: "Apr 29, 2028",
      time: "08:00 PM",
      status: "Arrived at Distribution Center",
      description: "Package arrived at Phoenix Distribution Center",
    },
    {
      date: "Apr 29, 2028",
      time: "02:00 PM",
      status: "In Transit",
      description: "En route to distribution center, Phoenix, AZ",
    },
    {
      date: "29/04/28",
      time: "09:00 AM",
      status: "Shipped",
      description:
        "Package picked up from Fashion Hub Warehouse, Los Angeles, CA",
    },
  ],
};

const statistics = {
  totalShipments: { count: 8, trend: "+2.5%" },
  inTransit: { count: 3, trend: "+1.5%" },
  onDelivery: { count: 2, trend: "-3.5%" },
  completed: { count: 3, trend: "+2.0%" },
};

export default function ShipmentDashboard() {
  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        {/* Left Sidebar */}
        <div className="w-96 border-r bg-white p-4 flex flex-col">
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search shipping ID"
              className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-3 top-2.5 border rounded p-0.5">
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Shipments List */}
          <div className="flex-1 overflow-auto">
            {shipments.map((shipment) => (
              <div
                key={shipment.id}
                className={`mb-4 p-4 border rounded-lg ${
                  shipment.id === selectedShipment.id
                    ? "border-blue-500 bg-blue-50"
                    : ""
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-lg">{shipment.id}</h3>
                    <p className="text-sm text-gray-500">
                      {shipment.date} - {shipment.time}
                    </p>
                  </div>
                  <Badge
                    className={`
                    ${
                      shipment.status === "Completed"
                        ? "bg-blue-300 hover:bg-blue-300 text-gray-800"
                        : ""
                    }
                    ${
                      shipment.status === "On Delivery"
                        ? "bg-orange hover:bg-orange text-white"
                        : ""
                    }
                    ${
                      shipment.status === "In Transit"
                        ? "bg-purple-200 hover:bg-purple-200 text-purple-800"
                        : ""
                    }
                  `}
                  >
                    {shipment.status}
                  </Badge>
                </div>

                <div className="flex items-center mb-2">
                  <span className="text-sm font-medium mr-2">
                    {shipment.progress}%
                  </span>
                  <Progress value={shipment.progress} className="flex-1 h-2" />
                </div>

                <div className="flex items-center">
                  <div className="mr-2">
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1"
                    >
                      <Truck size={14} />
                      {shipment.type}
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-500">
                    {shipment.status === "Completed"
                      ? "Delivered"
                      : shipment.status === "On Delivery"
                      ? "Out for Delivery"
                      : "In Transit"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header with Statistics */}
          <div className="bg-white p-6 border-b">
            <div className="grid grid-cols-4 gap-4">
              {/* Fixed Card Layouts with Consistent Alignment */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex gap-3 flex-col items-center">
                    <div className="bg-purple-100 p-3 rounded-lg mr-4">
                      <Package className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-base font-medium text-gray-500">
                        Total Shipments
                      </p>
                      <div className="flex items-center text-center">
                        <h3 className="text-2xl font-bold mr-2">
                          {statistics.totalShipments.count}
                        </h3>
                        <span className="text-green-500 text-sm">
                          {statistics.totalShipments.trend}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex flex-col gap-3 items-center">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <Truck className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-base font-medium text-gray-500">
                        In Transit
                      </p>
                      <div className="flex items-center">
                        <h3 className="text-2xl font-bold mr-2">
                          {statistics.inTransit.count}
                        </h3>
                        <span className="text-green-500 text-sm">
                          {statistics.inTransit.trend}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex flex-col gap-3 items-center">
                    <div className="bg-orange p-3 rounded-lg mr-4">
                      <Truck className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-base font-medium text-gray-500">
                        On Delivery
                      </p>
                      <div className="flex items-center">
                        <h3 className="text-2xl font-bold mr-2">
                          {statistics.onDelivery.count}
                        </h3>
                        <span className="text-red-500 text-sm">
                          {statistics.onDelivery.trend}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex gap-3 flex-col items-center">
                    <div className="bg-gray-100 p-3 rounded-lg mr-4">
                      <CheckCircle className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-base font-medium text-gray-500">
                        Completed
                      </p>
                      <div className="flex items-center">
                        <h3 className="text-2xl font-bold mr-2">
                          {statistics.completed.count}
                        </h3>
                        <span className="text-green-500 text-sm">
                          {statistics.completed.trend}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Shipment Map and Details */}
          <div className="flex-1 p-6 flex gap-6">
            <div className="flex-1">
              {/* Map with route visualization */}
              <div className="bg-white border rounded-lg overflow-hidden mb-6">
                <div className="h-full w-full">
                  <Image
                    src="/src/Assets/Images/vendorMap.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                  />
                </div>
              </div>

              {/* Shipment Summary */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500">Shipping ID</div>
                    <CardTitle>{selectedShipment.id}</CardTitle>
                  </div>
                  <Badge
                    variant="outline"
                    className={`
                    ${
                      selectedShipment.status === "On Delivery"
                        ? "bg-orange text-white"
                        : ""
                    }
                        `}
                  >
                    {selectedShipment.status}
                  </Badge>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="flex flex-col gap-5 ">
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">
                        {selectedShipment.distance}
                      </p>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-gray-500" />
                        <span className="text-sm">
                          {selectedShipment.hours} hours
                        </span>
                        <span className="mx-2">•</span>
                        <span className="text-sm">
                          {selectedShipment.shippingType}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium mb-2">
                        Pick Up Location
                      </h4>
                      <div className="space-y-1">
                        <p className="font-medium">
                          {selectedShipment.pickupLocation?.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {selectedShipment.pickupLocation?.address}
                        </p>
                        <p className="text-sm text-gray-500">
                          {selectedShipment.pickupLocation?.city}{" "}
                          {selectedShipment.pickupLocation?.postalCode}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">
                        Drop Off Location
                      </h4>
                      <div className="space-y-1">
                        <p className="font-medium">
                          {selectedShipment.dropOffLocation?.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {selectedShipment.dropOffLocation?.address}
                        </p>
                        <p className="text-sm text-gray-500">
                          {selectedShipment.dropOffLocation?.city}{" "}
                          {selectedShipment.dropOffLocation?.postalCode}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Side Panel */}
            <div className="w-80">
              {/* Package Info */}
              <Card className="mb-6">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg">Package Info</CardTitle>
                  <MoreHorizontal size={20} className="text-gray-500" />
                </CardHeader>

                <CardContent>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-md flex items-center justify-center mr-4">
                      <Package className="h-8 w-8 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">
                        {selectedShipment.package?.category}
                      </div>
                      <div className="font-medium">
                        {selectedShipment.package?.name}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Quantity</p>
                      <p className="font-medium">
                        {selectedShipment.package?.quantity} pcs
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Weight</p>
                      <p className="font-medium">
                        {selectedShipment.package?.weight}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Info - Improved Timeline */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg">Delivery Info</CardTitle>
                  <MoreHorizontal size={20} className="text-gray-500" />
                </CardHeader>

                <CardContent>
                  <div className="space-y-6">
                    {selectedShipment.timeline?.map((item, index) => (
                      <div key={index} className="relative pl-8">
                        {/* Improved timeline connector */}
                        {index < selectedShipment.timeline!.length - 1 && (
                          <div className="absolute left-3.5 top-7 w-0.5 h-16 bg-gray-200"></div>
                        )}
                        {/* Timeline point */}
                        <div
                          className={`absolute left-0 top-1 w-7 h-7 rounded-full flex items-center justify-center
                            ${
                              index === 0
                                ? "bg-orange text-white"
                                : "bg-gray-100 text-gray-500"
                            }`}
                        >
                          <CheckCircle size={16} />
                        </div>
                        <div className="pb-2">
                          <p className="text-sm text-gray-500">
                            {item.date} - {item.time}
                          </p>
                          <p className="font-medium">{item.status}</p>
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="mt-auto p-4">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Copyright © 2024 Peterdraw
          </div>

          <div className="flex items-center">
            <a href="#" className="text-sm text-gray-500 mx-3">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 mx-3">
              Term and conditions
            </a>
            <a href="#" className="text-sm text-gray-500 mx-3">
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
