import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { PrimaryButton } from "../button";
import WithAuth from "../../helper/auth/WithAuth";
import { useTranslation } from "react-i18next";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const { t } = useTranslation();
  const language = localStorage.getItem("language");
  return (
    <div
      className={`bg-dark-200 py-6 rounded-2xl h-[93vh] ${
        language === "fa" ? "pr-10" : "pl-10"
      }`}
    >
      {cart.length > 0 ? (
        <div className=" flex flex-col justify-between h-full">
          <div className="h-full flex-1">
            <div>
              <p className="text-xl font-semibold">{t("orders")}</p>
            </div>

            <div
              className={`grid grid-cols-6 py-5 border-b-2 border-b-gray-200 ${
                language === "fa" ? "ml-9" : "mr-9"
              }`}
            >
              <div className="col-span-3">
                <p className="font-semibold">{t("item")}</p>
              </div>

              <div>
                <p className="font-semibold text-center">{t("number")}</p>
              </div>

              <div>
                <p className="font-semibold text-end">{t("price")}</p>
              </div>
              <div>
                <p className="font-semibold text-end">{t("action")}</p>
              </div>
            </div>

            <div className={`${language === "fa" ? "pl-5" : "pr-5"}`}>
              <div
                className={`max-h-[600px] overflow-y-scroll ${
                  language === "fa" ? "pl-3" : "pr-3"
                }`}
              >
                {cart.map((item) => (
                  <div key={item.id}>
                    <CartItem food={item} key={item.id} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`border-t border-t-gray-200 pt-5 ${
              language === "fa" ? "ml-9" : "mr-9"
            }`}
          >
            <div className="flex justify-between w-full pt-3">
              <p className="text-sm text-gray-50">{t("subTotal")}</p>
              <p>$ {totalPrice.toFixed(2)}</p>
            </div>

            <div className="flex justify-center mt-4">
              <PrimaryButton type={"button"} text={t("continuePayment")} />
            </div>
          </div>
        </div>
      ) : (
        <div className="text-lg font-bold flex items-center h-full justify-center">
          <p>{t("emptyCart")}</p>
        </div>
      )}
    </div>
  );
};

export default WithAuth(Cart);
