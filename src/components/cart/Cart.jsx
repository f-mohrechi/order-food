import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-dark-200 pl-10 py-6 rounded-2xl h-[95vh] w-[400px]">
      {cart.length > 0 ? (
        <div className=" flex flex-col justify-between h-full">
          <div className="h-full flex-1">
            <div>
              <p className="text-xl font-semibold">order</p>
            </div>

            <div className="grid grid-cols-6 py-5 border-b-2 border-b-gray-200 mr-9">
              <div className="col-span-3">
                <p className="font-semibold">item</p>
              </div>

              <div>
                <p className="font-semibold text-center">number</p>
              </div>

              <div>
                <p className="font-semibold text-end">price</p>
              </div>
              <div>
                <p className="font-semibold text-end">action</p>
              </div>
            </div>

            <div className="pr-5">
              <div className="max-h-[600px] overflow-y-scroll pr-3">
                {cart.map((item, index) => {
                  return (
                    <div key={index}>
                      <CartItem food={item} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="border-t border-t-gray-200 pt-5 mr-9">
            <div className="flex justify-between w-full pt-3">
              <p className="text-sm text-gray-50">Sub total</p>
              <p>$ {totalPrice.toFixed(2)}</p>
            </div>

            <div className="flex justify-center mt-4">
              <button className="bg-primary-100 w-full py-2 rounded-lg hover:shadow-main">
                Continue to Payment
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-lg font-bold flex items-center h-full justify-center">
          <p>Your cart is empty!</p>
        </div>
      )}
    </div>
  );
}
