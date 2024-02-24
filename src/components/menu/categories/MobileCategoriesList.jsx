import React, { useState } from "react";
import DropDownMenu from "../../dropdown/DropDownMenu";

export default function MobileCategoriesList({ menuItems, handleTabClick }) {
  const [open, setOpen] = useState(false);

  return (
    // <div className="flex items-center">
    //   {menuItems.map((item, index) => {
    //     return (
    //       <div
    //         className={`  border-b-2 ${
    //           item.selected
    //             ? "border-b-primary-200 text-primary-200 border-b-2"
    //             : "border-b-gray-200"
    //         }`}
    //       >
    //         <div
    //           key={index}
    //           onClick={() => handleTabClick(index)}
    //           className={`px-4 lg:px-8  cursor-pointer pb-2 transition-all ease-in-out delay-75 text-nowrap text-sm md:text-base `}
    //         >
    //           <p className="">{item.name}</p>
    //         </div>
    //       </div>
    //     );
    //   })}
    // </div>

    <DropDownMenu
      propsItems={menuItems}
      open={open}
      setOpen={setOpen}
      handleTabClick={handleTabClick}
    />
  );
}
