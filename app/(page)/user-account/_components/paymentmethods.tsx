import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ChevronLeft,
  CirclePlus,
  ClockAlert,
  CreditCard,
  UserRound,
} from "lucide-react";
import Image from "next/image";

interface PaymentAddres {
  id: string;
  isDefault?: boolean;
  cardno: string;
  Name: string;
  Expiredate: string;
}

export default function Paymentmethods() {
  const [Payment, setPayments] = useState<PaymentAddres[]>([
    {
      id: "1",
      cardno: "416",
      Name: "Dr. Strange",
      Expiredate: "02/2040",
    },
    {
      id: "2",
      cardno: "420",
      Name: "Nick Jones",
      Expiredate: "02/2040",
    },
  ]);

  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const [isDefaultPayment, setIsDefaultPayment] = useState(false);
  const [cardNumber, setCardNumber] = useState("1234 5678 9012 3456");

  const handleSetAsDefault = (id: string) => {
    setPayments(
      Payment.map((payments) => ({
        ...payments,
        isDefault: payments.id === id,
      }))
    );
  };

  return (
    <div className="container w-full mx-auto max-w-4xl px-4 sm:px-6">
      <div className="flex items-center justify-between mb-6 pt-4">
        <h1 className="text-xl sm:text-2xl font-bold">Saved Payment</h1>
      </div>

      <div className="space-y-4">
        {Payment.map((payments) => (
          <Card key={payments.id} className="border-0 shadow-none">
            <CardContent className="p-0">
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4">
                  <div className="w-full sm:w-auto flex justify-center">
                    <Image
                      src="/src/Assets/Images/ATM.png"
                      alt="ATM CARD"
                      width={200}
                      height={200}
                      className="object-cover mt-1 max-w-full h-auto"
                    />
                  </div>
                  <div className="flex-1 w-full">
                    <div className="grid grid-cols-1 gap-3 my-auto mt-2">
                      <div className="flex items-center gap-3">
                        <CreditCard
                          size={20}
                          strokeWidth={2.5}
                          className="text-black flex-shrink-0"
                        />
                        <span className="text-black text-sm font-semibold">
                          {payments.cardno}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <UserRound
                          size={20}
                          strokeWidth={2.5}
                          className="text-black flex-shrink-0"
                        />
                        <span className="text-black text-sm font-semibold">
                          {payments.Name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ClockAlert
                          size={20}
                          strokeWidth={2.5}
                          className="text-black flex-shrink-0"
                        />
                        <span className="text-black text-sm font-semibold">
                          {payments.Expiredate}
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2 pb-2 gap-3">
                        <div className="flex flex-wrap gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-gray-500 hover:text-gray-700 text-xs sm:text-sm"
                          >
                            EDIT PAYMENT
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-gray-500 hover:text-gray-700 text-xs sm:text-sm"
                          >
                            DELETE PAYMENT
                          </Button>
                        </div>

                        {payments.isDefault ? (
                          <div className="sm:ml-auto mt-2 sm:mt-0">
                            <span className="text-orange text-sm font-medium hover:underline">
                              SELECTED
                            </span>
                          </div>
                        ) : (
                          <div className="sm:ml-auto mt-2 sm:mt-0">
                            <Button
                              variant="ghost"
                              className="text-orange text-sm font-medium hover:text-orange hover:underline hover:bg-transparent p-0"
                              onClick={() => handleSetAsDefault(payments.id)}
                            >
                              SET AS DEFAULT
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex gap-4 justify-center mt-6 mb-8">
        <Button
          variant="ghost"
          className="text-gray-600 bg-white hover:bg-white w-full flex items-center justify-center gap-2 py-3"
          onClick={() => setIsPaymentDialogOpen(true)}
        >
          ADD NEW CARD
          <CirclePlus strokeWidth={2.5} size={22} className="my-auto" />
        </Button>
      </div>

      {/* Payment Method Dialog */}
      <Dialog open={isPaymentDialogOpen} onOpenChange={setIsPaymentDialogOpen}>
        <DialogContent className="sm:max-w-md w-[95vw] max-w-[95vw] p-4 sm:p-6">
          <DialogHeader>
            <div className="flex items-center">
              <Button variant="ghost" size="sm" className="mr-2 p-1">
                <ChevronLeft size={24} />
              </Button>
              <DialogTitle className="text-xl sm:text-2xl font-bold">
                Add Payment Method
              </DialogTitle>
            </div>
          </DialogHeader>

          <div className="space-y-4 sm:space-y-6 py-2 sm:py-4">
            <div className="space-y-2">
              <label className="text-sm sm:text-base font-medium">
                Card Number
              </label>
              <Input
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full p-2 sm:p-4 text-sm sm:text-base"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm sm:text-base font-medium">
                  Expiry date
                </label>
                <Input className="w-full p-2 sm:p-4 text-sm sm:text-base" />
              </div>
              <div className="space-y-2">
                <label className="text-sm sm:text-base font-medium">CVV</label>
                <Input className="w-full p-2 sm:p-4 text-sm sm:text-base" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm sm:text-base font-medium">
                Cardholder Name
              </label>
              <Input className="w-full p-2 sm:p-4 text-sm sm:text-base" />
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="default-payment"
                checked={isDefaultPayment}
                onCheckedChange={(checked) =>
                  setIsDefaultPayment(checked as boolean)
                }
                className="mt-1"
              />
              <div className="space-y-1">
                <label
                  htmlFor="default-payment"
                  className="text-sm sm:text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Set as default payment method
                </label>
                <p className="text-xs sm:text-sm text-gray-500">
                  This will be used as your primary payment method
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-2 mt-4">
            <Button
              variant="outline"
              onClick={() => setIsPaymentDialogOpen(false)}
              className="text-sm sm:text-base px-3 py-1 sm:px-4 sm:py-2"
            >
              Cancel
            </Button>
            <Button className="bg-orange hover:bg-orange text-white text-sm sm:text-base px-3 py-1 sm:px-4 sm:py-2">
              Save Card
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
