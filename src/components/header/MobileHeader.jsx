import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import MobileHeaderItem from "./MobileHeaderItem";
import { useSelector } from "react-redux";

export default function MobileHeader({ handleSelectPage, activeComponent }) {
  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);

  const openCart = () => {
    handleSelectPage("Cart");
    setOpen(false);
  };

  return (
    <>
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)}>
          {open ? <IoCloseSharp /> : <FiMenu className="text-xl" />}
        </button>
      </div>

      {open && (
        <div className="w-full bg-dark-200 rounded-lg p-3 mt-2">
          <div className="flex justify-around items-center">
            <div className="relative cursor-pointer">
              <img
                onClick={openCart}
                src="/img/cart.svg"
                className={` transition-all ease-in-out delay-75 cursor-pointer ${
                  activeComponent === "Cart" ? "contrast-100" : " contrast-0"
                }`}
                alt=""
              />

              <div className="absolute -top-3 -right-3 w-5 h-5  bg-primary-100 grayscale rounded-full flex justify-center items-center">
                <p className="text-xs">{cart.length}</p>
              </div>
            </div>
            <MobileHeaderItem
              img={"/img/home.svg"}
              isActive={activeComponent === "Menu" ? true : false}
              handleSelectPage={handleSelectPage}
              title={"Menu"}
              setOpen={setOpen}
            />
            <MobileHeaderItem
              img={"/img/settings.svg"}
              isActive={activeComponent === "Settings" ? true : false}
              handleSelectPage={handleSelectPage}
              title={"Settings"}
              setOpen={setOpen}
            />
            <MobileHeaderItem
              img={"/img/logout.svg"}
              isActive={activeComponent === "Login" ? true : false}
              handleSelectPage={handleSelectPage}
              title={"Login"}
              setOpen={setOpen}
            />
          </div>
        </div>
      )}
    </>
  );
}
