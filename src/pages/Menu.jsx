import React from "react";
import Header from "../components/header";
import MainMenu from "../components/menu/MainMenu";

export default function Menu() {
  return (
    <div>
      <Header />
      <div className="my-10">
        <MainMenu />
      </div>
    </div>
  );
}
