import React, { useState, useEffect, useRef } from "react";

function DropdownMenu({ items, handleTabClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(
    items.find((item) => item.selected)
  );
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleItemClick = (index) => {
    handleTabClick(index);
    setSelectedItem(items[index]);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-dark-200 rounded-lg px-4 py-2 cursor-pointer"
      >
        {selectedItem.name}
      </button>
      {isOpen && (
        <div className="absolute left-0 z-40 mt-2 w-48 rounded-md shadow-lg bg-dark-200">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {items.map((item, index) => (
              <a
                key={index}
                onClick={() => handleItemClick(index)}
                className="block px-4 py-2 text-sm hover:bg-gray-50 text-primary-200 hover:text-dark-200 cursor-pointer"
                role="menuitem"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
