import React, { useContext } from "react";
import ChangeLanguage from "../components/settings/ChangeLanguage";
import Strings from "../helper/localization/localization";
import { Context } from "../context/AuthContext";

export default function Settings() {
  const { dispatch, settings } = useContext(Context);

  return (
    <>
      <div className="flex justify-center w-full">
        <div className="bg-dark-200 p-6 rounded-xl w-96">
          <div className="mb-9">
            <p className="text-3xl font-semibold">{Strings.settings}</p>
          </div>
          <ChangeLanguage />
        </div>
      </div>
    </>
  );
}
