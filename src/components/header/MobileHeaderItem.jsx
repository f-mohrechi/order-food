import React from "react";
import { Link } from "react-router-dom";

export default function MobileHeaderItem({
  img,
  handleSelectPage,
  title,
  isActive,
  setOpen,
  link,
}) {
  const handleClick = (title) => {
    handleSelectPage(title);
    setOpen(false);
  };
  return (
    <>
      {!link ? (
        <div
          className="cursor-pointer"
          onClick={() => {
            handleClick(title);
          }}
        >
          <img
            className={`w-4 h-4 transition-all ease-in-out delay-75 ${
              isActive ? "contrast-100" : " contrast-0"
            }`}
            src={img}
            alt=""
          />
        </div>
      ) : (
        <Link className="cursor-pointer" to={link}>
          <img
            className={`w-4 h-4 transition-all ease-in-out delay-75`}
            src={img}
            alt=""
          />
        </Link>
      )}
    </>
  );
}
