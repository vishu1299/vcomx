import React from "react";
import {
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Truck,
  Package,
  ArrowUpRight,
} from "lucide-react";

const OrderDetails = () => {
  return (
    <div className="bg-gray-50 min-h-screen ">
      <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-lg p-6 sm:p-8 relative">
        {/* Header */}
        <div className="flex gap-4 items-start mb-6">
          <div>
            <h2 className="text-2xl font-semibold">
              Order ID: <span className="text-red-500">#1005</span>
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              April 28, 2024, 10:15 AM
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-gray-100 px-3 py-1 text-sm rounded-lg text-gray-700">
              Paid Payment
            </button>
            <button className="bg-blue-100 px-3 py-1 text-sm rounded-lg text-blue-700">
              Completed Order
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-6 right-6 flex items-center gap-4">
          <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
            <Edit className="w-5 h-5" />
            Edit
          </button>
          <button className="flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-lg">
            <Trash2 className="w-5 h-5" />
            Delete
          </button>
          <div className="flex gap-2">
            <button className="bg-gray-100 p-2 rounded-lg">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="bg-gray-100 p-2 rounded-lg">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <InfoCard title="Customer Info">
            <InfoRow label="Name" value="Chris Lee" />
            <InfoRow label="Email" value="chris.lee@example.com" />
            <InfoRow label="Phone" value="(123) 456-7890" />
            <div className="flex gap-2 mt-4">
              <button className="w-full bg-gray-100 px-4 py-2 rounded-lg">
                📞 Call
              </button>
              <button className="w-full bg-gray-100 px-4 py-2 rounded-lg">
                ✉️ Message
              </button>
            </div>
          </InfoCard>

          <InfoCard title="Payment Details">
            <InfoRow label="Date" value="April 28, 2028" />
            <InfoRow label="Method" value="Credit Card" />
            <InfoRow label="Card Name" value="Chris Lee" />
            <InfoRow label="Card No." value="**** **** **** 1234" />
          </InfoCard>

          <InfoCard title="Delivery Info">
            <InfoRow label="Name" value="Chris Lee" />
            <InfoRow label="Phone" value="(123) 456-7890" />
            <InfoRow
              label="Address"
              value="123 Green Street, Apartment 5B, New York, NY"
            />
            <InfoRow label="Postal Code" value="10001" />
          </InfoCard>
        </div>

        {/* Main Section with 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Order Items & Order Summary */}
          <div className="md:col-span-2 border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4">Order Items</h3>
            <div className="space-y-4 mb-6">
              <OrderItem
                title="Eco-Friendly T-Shirt"
                category="Women's Clothing"
                color="Blue"
                size="M"
                price="$20.00"
                qty={2}
                total="$40.00"
              />
              <OrderItem
                title="Designer Sunglasses"
                category="Accessories"
                color="Brown"
                size="-"
                price="$120.00"
                qty={1}
                total="$120.00"
              />
            </div>

            {/* Order Summary */}
            <h3 className="text-lg font-medium mb-4">Order Summary</h3>
            <div className="space-y-2">
              <SummaryRow label="Sub Total" value="3 Item" price="$160.00" />
              <SummaryRow
                label="Discount"
                value="Promo: Buy 2 Get 1 Free"
                price="- $5.00"
              />
              <SummaryRow
                label="Delivery Fee"
                value="Free Shipping (max. $3.00)"
                price="$5.00"
              />
              <SummaryRow label="Platform Fee" price="$2.00" />
              <SummaryRow
                label="Total"
                price="$162.00"
                bold
                className="border-t border-gray-200 pt-4"
              />
            </div>
          </div>

          {/* Updated Shipping Info */}
          <div className="col-span-1">
            <InfoCard title="Shipping Info">
              <InfoRow label="Shipping ID" value="SHP-56789" highlight />
              <InfoRow label="Shipping Option" value="Regular" />
              <UpdatedShippingTimeline />
            </InfoCard>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6">
    <h3 className="text-lg font-medium mb-4">{title}</h3>
    {children}
  </div>
);

const InfoRow = ({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) => (
  <div className="flex justify-between text-sm mb-2">
    <span className="text-gray-500">{label}</span>
    <span className={highlight ? "text-red-500 font-medium" : "text-gray-900"}>
      {value}
    </span>
  </div>
);

const OrderItem = ({
  title,
  category,
  color,
  size,
  price,
  qty,
  total,
}: {
  title: string;
  category: string;
  color: string;
  size: string;
  price: string;
  qty: number;
  total: string;
}) => (
  <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg flex justify-between items-center">
    <div>
      <div className="text-sm text-gray-500">{category}</div>
      <h4 className="font-medium">{title}</h4>
      <div className="text-sm text-gray-500 mt-1">
        Color: <span className="text-gray-700">{color}</span> &nbsp; | &nbsp;
        Size: <span className="text-gray-700">{size}</span>
      </div>
    </div>

    <div className="flex gap-8 text-right text-sm">
      <div>
        <div className="text-gray-500">Price</div>
        <div className="font-medium text-gray-900">{price}</div>
      </div>
      <div>
        <div className="text-gray-500">Qty</div>
        <div className="font-medium text-gray-900">{qty}</div>
      </div>
      <div>
        <div className="text-gray-500">Total</div>
        <div className="font-medium text-gray-900">{total}</div>
      </div>
    </div>
  </div>
);

const SummaryRow = ({
  label,
  value,
  price,
  bold,
  className,
}: {
  label: string;
  value?: string;
  price: string;
  bold?: boolean;
  className?: string;
}) => (
  <div className={`flex justify-between text-sm mb-2 ${className || ""}`}>
    <span className={`${bold ? "font-medium" : "text-gray-500"}`}>
      {label} {value && <span className="text-gray-400 ml-1">({value})</span>}
    </span>
    <span className={`${bold ? "font-medium" : "text-gray-900"}`}>{price}</span>
  </div>
);

const UpdatedShippingTimeline = () => {
  const steps = [
    {
      date: "Apr 29, 2028",
      time: "01:15 PM",
      status: "Delivered",
      description: "Package delivered to recipient",
      icon: <CheckCircle className="text-white" />,
      isCompleted: true,
    },
    {
      date: "Apr 29, 2028",
      time: "09:30 AM",
      status: "Out for Delivery",
      description: "Out for delivery to the recipient",
      icon: <Truck className="text-white" />,
      isCompleted: true,
    },
    {
      date: "Apr 28, 2028",
      time: "03:00 PM",
      status: "In Transit",
      description: "En route to the distribution center",
      icon: <ArrowUpRight className="text-white" />,
      isCompleted: true,
    },
    {
      date: "Apr 28, 2028",
      time: "11:00 AM",
      status: "Shipped",
      description: "Package picked up from the warehouse",
      icon: <Package className="text-white" />,
      isCompleted: true,
    },
  ];

  return (
    <div className="mt-4 space-y-4 relative">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center mb-8 relative space-x-4">
          {/* Date and Time - Left */}
          <div className="w-1/4 text-right pr-2">
            <p className="text-sm text-gray-500">{step.date}</p>
            <p className="text-sm text-gray-500">{step.time}</p>
          </div>

          {/* Icon and Line - Center */}
          <div className="relative">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full border-4 ${
                step.isCompleted
                  ? "bg-[#FF683A] border-[#FF683A]"
                  : "bg-gray-500"
              }`}
            >
              {step.icon}
            </div>
            {index !== steps.length - 1 && (
              <div className="absolute left-1/2 top-10 h-16 w-0.5 bg-[#FF683A] transform -translate-x-1/2"></div>
            )}
          </div>

          {/* Status and Description - Right */}
          <div className="w-3/4 text-left">
            <p
              className={`text-lg font-bold ${
                step.isCompleted ? "text-gray-900" : "text-gray-500"
              }`}
            >
              {step.status}
            </p>
            <p className="text-sm text-gray-500">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderDetails;
