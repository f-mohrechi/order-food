import React, { useState } from "react";
import DropDownMenu from "../../dropdown/DropDownMenu";

export default function MobileCategoriesList({ menuItems, handleTabClick }) {
  const [open, setOpen] = useState(false);

  return (
    <DropDownMenu
      items={menuItems}
      open={open}
      setOpen={setOpen}
      handleTabClick={handleTabClick}
    />
  );
}
