import React from "react";

export default function Button({ text, OnClick }) {
  return (
    <button
      className="bg-primary-200 w-7 h-7 border  rounded-md hover:bg-transparent border-primary-200"
      onClick={OnClick}
    >
      {text}
    </button>
  );
}
