import React from "react";
import FoodBox from "../../foodBox";

export default function MenuPages({ menuItems }) {
  return (
    <div className="grid grid-cols-3 mt-20 gap-x-10 gap-y-20">
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
