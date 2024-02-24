import React from "react";
import FoodBox from "../../foodBox";

export default function MenuPages({ menuItems }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-center mt-20 sm:gap-x-6 2xl:gap-x-10 gap-y-20">
      {menuItems
        .filter((item) => item.selected)
        .map((item) => {
          return item.items
            .sort((a, b) => b.availability - a.availability)
            .map((item, index) => {
              return <FoodBox foods={item} key={index} />;
            });
        })}
    </div>
  );
}
