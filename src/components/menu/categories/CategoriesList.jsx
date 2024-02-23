import React from "react";

export default function CategoriesList({ menuItems, handleTabClick }) {
  return (
    <div className="flex items-center">
      {menuItems.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => handleTabClick(index)}
            className={`px-8 border-b-2 cursor-pointer pb-2 transition-all ease-in-out delay-75 ${
              item.selected
                ? "border-b-primary-200 text-primary-200"
                : "border-b-gray-200"
            }`}
          >
            <p className="">{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}
