import { useState } from "react";
import { Sidebar } from "../components/sidebar";
import Menu from "./Menu";
import CartPage from "./cart";
import { MobileHeader } from "../components/header";
import Login from "./login";
import Logout from "./logout";
import InstallPrompt from "../components/installPWAPrompt";

export default function Home() {
  const [activeComponent, setActiveComponent] = useState("Menu");

  const handleSelectPage = (page_name) => {
    setActiveComponent(page_name);
  };

  function handleWhichActive(page_name) {
    switch (page_name) {
      case "Menu":
        return <Menu />;
      case "Cart":
        return <CartPage />;
      case "Login":
        return <Login />;
      case "Logout":
        return <Logout />;
      default:
        return <Menu />;
    }
  }

  return (
    <div className="px-6 lg:px-16 2xl:px-40 py-6">
      <div className="mb-4">
        <MobileHeader
          handleSelectPage={handleSelectPage}
          activeComponent={activeComponent}
        />
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="hidden md:block col-start-1 col-end-2 h-full fixed top-6">
          <Sidebar
            handleSelectPage={handleSelectPage}
            activeComponent={activeComponent}
          />
        </div>

        <div className="col-start-1 md:col-start-3 col-end-13 h-full">
          {handleWhichActive(activeComponent)}
        </div>
      </div>

      <div>
        <InstallPrompt />
      </div>
    </div>
  );
}
