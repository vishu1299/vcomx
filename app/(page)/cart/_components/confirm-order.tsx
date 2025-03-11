import Image from "next/image";
// import confirm from "@/public/Assets/Images/confirm.png";
export default function OrderConfirmation() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      {/* Confirmation Message */}
      <div className="w-full max-w-xl bg-white rounded-lg shadow-md p-4 sm:p-6 text-center mb-4 sm:mb-5">
        <div className="flex justify-center mb-2 sm:mb-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
            <Image
              src="/src/Assets/Images/confirm.png"
              width={70}
              height={70}
              alt="Picture of the Confirmation"
              className="w-10 h-10 sm:w-16 sm:h-16 object-contain"
            />
          </div>
        </div>
        <h2 className="text-lg sm:text-xl font-bold">
          Your Order Has Been Fulfilled
        </h2>
        <p className="text-gray-500 text-sm sm:text-base">
          Im grateful. We have received your order.
        </p>
      </div>

      {/* Order Details */}
      <div className="w-full max-w-xl bg-white shadow-md p-4 sm:p-6 rounded-lg mb-4 sm:mb-5">
        <h3 className="text-base sm:text-lg font-bold mb-2">Order Details</h3>
        <hr className="mb-4" />
        <div className="text-xs sm:text-sm space-y-2">
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <span className="font-semibold mb-1 sm:mb-0">Item Name</span>
            <span className="sm:text-right sm:max-w-xs">
              Axus Zens 123 Metalic Color I5 Ryzin Generation 10 16 FHD Laptop
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
          <div className="flex justify-between font-bold text-sm sm:text-base">
            <span>Total</span>
            <span>110.00 $</span>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-xs sm:text-sm space-y-2">
          <div className="flex justify-between">
            <span className="font-semibold">Name</span>
            <span>Martin Paez</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <span className="font-semibold mb-1 sm:mb-0">Address</span>
            <span className="sm:text-right">12334 London, Britania Raya</span>
          </div>
        </div>
      </div>

      {/* Track Order Button */}
      <div className="w-full max-w-xl bg-white rounded-lg shadow-md p-4 sm:p-6 flex justify-center">
        <button className="w-full bg-orange-500 text-white py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-orange-600 transition-colors">
          Track Your Order
        </button>
      </div>
    </div>
  );
}
