import { useState } from "react";
import { Sidebar } from "../components/sidebar";
import Main from "../components/main";

export default function Home() {
  const [options, setOptions] = useState([
    { img: "/img/home.svg" },
    { img: "/img/settings.svg" },
    { img: "/img/logout.svg" },
  ]);
  return (
    <div className="px-6 lg:px-16 2xl:px-40 py-6">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-start-1 col-end-2 h-full fixed top-6">
          <Sidebar options={options} />
        </div>

        <div className="col-start-2 col-end-8 h-full">
          <Main />
        </div>
      </div>
    </div>
  );
}
