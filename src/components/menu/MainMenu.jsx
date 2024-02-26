import React, { useState } from "react";
import CategoriesList from "./categories/CategoriesList";
import MenuPages from "./menuPages";
import MobileCategoriesList from "./categories/MobileCategoriesList";

export default function MainMenu({}) {
  const [menuItems, setMenuItems] = useState([
    {
      name: "Hot Dishes",
      selected: true,
      items: [
        {
          id: 1,
          name: "Spicy seasoned seafood noodles",
          img: "/img/food-1.svg",
          price: 2.29,
          availability: true,
          numbers: "20",
        },
        {
          id: 2,
          name: "Salted Pasta with mushroom sauce",
          img: "/img/food-2.svg",
          price: 2.69,
          availability: false,
        },
        {
          id: 3,
          name: "Beef dumpling in hot and sour soup",
          img: "/img/food-3.svg",
          price: 2.99,
          availability: true,
          numbers: "5",
        },
        {
          id: 4,
          name: "Healthy noodle with spinach leaf",
          img: "/img/food-4.svg",
          price: 3.29,
          availability: true,
          numbers: "6",
        },
      ],
    },
    {
      name: "Cold Dishes",
      selected: false,
      items: [
        {
          id: 6,
          name: "Salted Pasta with mushroom sauce",
          img: "/img/food-6.svg",
          price: 2.69,
          availability: false,
        },
        {
          id: 5,
          name: "Spicy seasoned seafood noodles",
          img: "/img/food-1.svg",
          price: 2.29,
          availability: true,
          numbers: "20",
        },
        {
          id: 8,
          name: "Healthy noodle with spinach leaf",
          img: "/img/food-4.svg",
          price: 3.29,
          availability: true,
          numbers: "6",
        },
        {
          id: 7,
          name: "Beef dumpling in hot and sour soup",
          img: "/img/food-3.svg",
          price: 2.99,
          availability: true,
          numbers: "5",
        },
      ],
    },
    {
      name: "Soup",
      selected: false,
      items: [
        {
          id: 9,
          name: "Spicy seasoned seafood noodles",
          img: "/img/food-1.svg",
          price: 2.29,
          availability: true,
          numbers: "20",
        },
        {
          id: 11,
          name: "Beef dumpling in hot and sour soup",
          img: "/img/food-3.svg",
          price: 2.99,
          availability: true,
          numbers: "5",
        },
        {
          id: 10,
          name: "Salted Pasta with mushroom sauce",
          img: "/img/food-5.svg",
          price: 2.69,
          availability: false,
        },
        {
          id: 12,
          name: "Healthy noodle with spinach leaf",
          img: "/img/food-4.svg",
          price: 3.29,
          availability: true,
          numbers: "6",
        },
      ],
    },
    {
      name: "Grill",
      selected: false,
      items: [
        {
          id: 13,
          name: "Spicy seasoned seafood noodles",
          img: "/img/food-5.svg",
          price: 2.29,
          availability: true,
          numbers: "20",
        },
        {
          id: 14,
          name: "Salted Pasta with mushroom sauce",
          img: "/img/food-2.svg",
          price: 2.69,
          availability: false,
        },
        {
          id: 15,
          name: "Beef dumpling in hot and sour soup",
          img: "/img/food-3.svg",
          price: 2.99,
          availability: true,
          numbers: "5",
        },
        {
          id: 16,
          name: "Healthy noodle with spinach leaf",
          img: "/img/food-4.svg",
          price: 3.29,
          availability: true,
          numbers: "6",
        },
      ],
    },
    {
      name: "Appetizer",
      selected: false,
      items: [
        {
          id: 19,
          name: "Beef dumpling in hot and sour soup",
          img: "/img/food-6.svg",
          price: 2.99,
          availability: true,
          numbers: "5",
        },
        {
          id: 17,
          name: "Spicy seasoned seafood noodles",
          img: "/img/food-1.svg",
          price: 2.29,
          availability: true,
          numbers: "20",
        },
        {
          id: 18,
          name: "Salted Pasta with mushroom sauce",
          img: "/img/food-2.svg",
          price: 2.69,
          availability: false,
        },
        {
          id: 20,
          name: "Healthy noodle with spinach leaf",
          img: "/img/food-4.svg",
          price: 3.29,
          availability: false,
        },
      ],
    },
    {
      name: "Dessert",
      selected: false,
      items: [
        {
          id: 21,
          name: "Spicy seasoned seafood noodles",
          img: "/img/food-1.svg",
          price: 2.29,
          availability: true,
          numbers: "20",
        },
        {
          id: 22,
          name: "Salted Pasta with mushroom sauce",
          img: "/img/food-2.svg",
          price: 2.69,
          availability: false,
          numbers: "11",
        },
        {
          id: 23,
          name: "Beef dumpling in hot and sour soup",
          img: "/img/food-3.svg",
          price: 2.99,
          availability: true,
          numbers: "5",
        },
        {
          id: 24,
          name: "Healthy noodle with spinach leaf",
          img: "/img/food-4.svg",
          price: 3.29,
          availability: true,
          numbers: "6",
        },
      ],
    },
  ]);

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
