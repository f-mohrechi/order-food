import React from "react";
import Button from "../button";

export default function FoodBox({ foods }) {
  return (
    <div className="bg-dark-200 w-56 px-4 pb-10 rounded-xl flex flex-col items-center relative">
      <div className="absolute -top-14">
        <img src={foods.img} width={132} height={132} alt="" />
      </div>

      <p className="text-center text-sm font-medium mt-24">{foods.name}</p>

      <p className="text-sm pt-5">$ {foods.price}</p>

      <div className="pt-5">
        {foods.availability ? (
          <p className="text-sm text-gray-50">
            {foods.numbers} Bowls available!
          </p>
        ) : (
          <p className="text-main-pink text-sm">Unavailable!</p>
        )}
      </div>

      <div className="flex items-center pt-5">
        <Button text={"-"} />
        <p className="px-4">0</p>

        <Button text={"+"} />
      </div>
    </div>
  );
}
