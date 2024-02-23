import React from "react";

export default function SideItem({ data, index, active, activation }) {
  return (
    <div
      key={index}
      onClick={() => activation(index)}
      className="p-3 bg-transparent rounded-xl cursor-pointer"
    >
      <img
        className={` transition-all ease-in-out delay-75 ${
          active[index] ? "contrast-100" : " contrast-0"
        }`}
        src={data.img}
        alt=""
      />
    </div>
  );
}
