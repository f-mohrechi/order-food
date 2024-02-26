import React from "react";

export default function MobileHeaderItem({
  img,
  handleSelectPage,
  title,
  isActive,
  setOpen,
}) {
  const handleClick = (title) => {
    handleSelectPage(title);
    setOpen(false);
  };
  return (
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
  );
}
