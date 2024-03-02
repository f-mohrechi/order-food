import React, { useState } from "react";
import CategoriesList from "./categories/CategoriesList";
import MenuPages from "./menuPages";
import MobileCategoriesList from "./categories/MobileCategoriesList";
import JSONData from "../../db/menuDb.json";

export default function MainMenu({}) {
  const [menuItems, setMenuItems] = useState(JSONData);

  const handleTabClick = (index) => {
    const newCategories = [...menuItems];
    newCategories.forEach((category, i) => {
      if (i === index) {
        category.selected = true;
      } else {
        category.selected = false;
      }
    });
    setMenuItems(newCategories);
  };

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
