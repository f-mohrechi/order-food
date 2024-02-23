import React from "react";
import CategoriesList from "./categories/CategoriesList";

export default function Menu({ menuItems, handleTabClick }) {
  return (
    <div>
      <CategoriesList menuItems={menuItems} handleTabClick={handleTabClick} />

      <div>
        <p className="text-xl font-semibold mt-5">choose dishes</p>
      </div>
    </div>
  );
}
