import React from "react";

export default function SideItem({ img, handleSelectPage, title, isActive }) {
  return (
    <div
      onClick={() => {
        handleSelectPage(title);
      }}
      className="p-3 bg-transparent rounded-xl cursor-pointer"
    >
      <img
        className={` transition-all ease-in-out delay-75 ${
          isActive ? "contrast-100" : " contrast-0"
        }`}
        src={img}
        alt=""
      />
    </div>
  );
}
