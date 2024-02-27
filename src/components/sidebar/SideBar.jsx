import { useContext, useMemo } from "react";
import { Context } from "../../context/AuthContext";
import SideItem from "./SideItem";
import { useSelector } from "react-redux";

export default function Sidebar({ handleSelectPage, activeComponent }) {
  const cart = useSelector((state) => state.cart);
  const { user, isAuthenticated } = useContext(Context);
  console.log("isAuthenticated", isAuthenticated);

  // const isT = useMemo(() => {
  //   const lo = localStorage.getItem("user");
  //   if (!lo) return false;
  //   else return true;
  // }, []);

  // console.log("id", isT);

  return (
    <div className="bg-dark-200 rounded-2xl h-[93vh] py-6 px-4">
      <div className="h-[90vh] overflow-y-auto">
        <div className="flex flex-col items-center justify-around h-full">
          <div className="">
            <img src="/img/logo-box.svg" alt="" />
          </div>

          <div className="relative">
            <img
              onClick={() => handleSelectPage("Cart")}
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

          <SideItem
            isActive={activeComponent === "Menu" ? true : false}
            handleSelectPage={handleSelectPage}
            title={"Menu"}
            img={"/img/home.svg"}
          />

          <SideItem
            isActive={activeComponent === "Settings" ? true : false}
            handleSelectPage={handleSelectPage}
            title={"Settings"}
            img={"/img/settings.svg"}
          />

          {isAuthenticated ? (
            <SideItem title="Logout" img="/img/logout.svg" link="/logout" />
          ) : (
            <SideItem title="Login" img="/img/login.svg" link="/login" />
          )}
        </div>
      </div>
    </div>
  );
}
