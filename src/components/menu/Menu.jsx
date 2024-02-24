import React from "react";
import CategoriesList from "./categories/CategoriesList";
import MenuPages from "./menuPages";
import MobileCategoriesList from "./categories/MobileCategoriesList";

export default function Menu({ menuItems, handleTabClick }) {
  return (
    <div>
      <div className="hidden sm:block">
        <CategoriesList menuItems={menuItems} handleTabClick={handleTabClick} />
      </div>
      <div className="block sm:hidden">
        <MobileCategoriesList
          menuItems={menuItems}
          handleTabClick={handleTabClick}
        />
      </div>

      <div>
        <p className="text-xl font-semibold mt-5">choose dishes</p>
      </div>

      <MenuPages menuItems={menuItems} />
    </div>
  );
}
