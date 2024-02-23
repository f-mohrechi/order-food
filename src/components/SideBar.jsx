import { useState } from "react";
import SideItem from "./SideItem";

export default function Sidebar({ options }) {
  const [active, setActive] = useState({});
  const activation = (index) => {
    setActive({ [index]: true });
  };
  return (
    <div className="bg-dark-200 rounded-2xl h-[94vh] py-6 px-4">
      <div className="h-[90vh] overflow-y-auto">
        <div className="flex flex-col items-center justify-around h-full">
          <div className="">
            <img src="/img/logo-box.svg" alt="" />
          </div>

          <div className="relative">
            <img
              onClick={() => activation(4)}
              src="/img/cart.svg"
              className={` transition-all ease-in-out delay-75 cursor-pointer ${
                active[4] ? "contrast-100" : " contrast-0"
              }`}
              alt=""
            />

            <div className="absolute -top-3 -right-3 w-5 h-5  bg-primary-100 grayscale rounded-full flex justify-center items-center">
              <p className="text-xs">0</p>
            </div>
          </div>
          {options.map((item, index) => {
            return (
              <SideItem
                data={item}
                key={index}
                index={index}
                active={active}
                activation={activation}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
