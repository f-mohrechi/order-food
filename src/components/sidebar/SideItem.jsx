import React from "react";
import { Link } from "react-router-dom";

export default function SideItem({
  img,
  handleSelectPage,
  title,
  isActive,
  link,
}) {
  return (
    <>
      {!link ? (
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
      ) : (
        <Link
          to={link}
          className="p-3 bg-transparent rounded-xl cursor-pointer"
        >
          <img
            className="transition-all ease-in-out delay-75 contrast-0 "
            src={img}
            alt=""
          />
        </Link>
      )}
    </>
  );
}
