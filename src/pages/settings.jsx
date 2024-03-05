import React from "react";
import ChangeLanguage from "../components/settings/ChangeLanguage";
import Strings from "../helper/localization/localization";

export default function Settings() {
  return (
    <>
      <div className="flex justify-center w-full">
        <div className="bg-dark-200 p-6 rounded-xl w-96">
          <div className="mb-9">
            <h2 className="text-3xl font-semibold">{Strings.settings}</h2>
          </div>
          <ChangeLanguage />
        </div>
      </div>
    </>
  );
}
