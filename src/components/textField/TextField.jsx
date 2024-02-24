import React from "react";

export default function TextField() {
  return (
    <div
      className="w-full bg-gray-100 border border-gray-200 rounded-lg flex items-center py-2.5 px-3.5 focus-within:border-primary-100 focus-within:shadow-main focus-within:shadow-main-pink
  "
    >
      <img className="pr-4" src="/img/search.svg" alt="" />
      <input
        className="bg-transparent w-full outline-none"
        placeholder="search"
      />
    </div>
  );
}
