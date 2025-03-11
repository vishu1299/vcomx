import Image from "next/image";
// import confirm from "@/public/Assets/Images/confirm.png";
export default function OrderConfirmation() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  p-4">
      {/* Confirmation Message */}
      <div className="w-full max-w-xl bg-white rounded-lg  p-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16  flex items-center justify-center">
            <Image
              src="/src/Assets/Images/confirm.png"
              width={70}
              height={70}
              alt="Picture of the Confirmation"
            />
          </div>
        </div>
        <h2 className="text-xl font-bold">Your Order Has Been Fulfilled</h2>
        <p className="text-gray-500">
          I’m grateful. We have received your order.
        </p>
      </div>

      {/* Order Details */}
      <div className="w-full max-w-xl bg-white  p-6 mt-5 rounded-lg">
        <h3 className="text-lg font-bold mb-2">Order Details</h3>
        <hr className="mb-4" />
        <div className="text-sm space-y-2">
          <div className="flex justify-between">
            <span className="font-semibold">Item Name</span>
            <span className="text-right">
              Axus Zens 123 Metalic Color I5 Ryzin Generation 10 16” FHD Laptop
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Subtotal</span>
            <span>100.00 $</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Delivery Charge</span>
            <span>10.00 $</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>110.00 $</span>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-sm space-y-2">
          <div className="flex justify-between">
            <span className="font-semibold">Name</span>
            <span>Martin Paez</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Address</span>
            <span className="text-right">12334 London, Britania Raya</span>
          </div>
        </div>
      </div>

      {/* Track Order Button */}

      <div className="w-full max-w-xl bg-white rounded-b-lg shadow-lg p-6 flex justify-center">
        <button className="w-full bg-orange text-white py-3 rounded-full text-lg font-semibold">
          Track Your Order
        </button>
      </div>
    </div>
  );
}
