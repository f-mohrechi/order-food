import React, { useContext } from "react";
import { Context } from "../../context/AuthContext";
import Strings from "../../helper/localization/localization";

export default function ChangeLanguage() {
  const { dispatch, settings } = useContext(Context);
  const { language } = settings;
  const handleChangeLanguage = (lang) => {
    Strings.setLanguage(lang);
    dispatch("settings", { ...settings, language: lang }, true);
  };
  return (
    <div>
      <div className="m-10">
        <button onClick={() => handleChangeLanguage("fa")}>FA</button>
      </div>

      <div className="m-10">
        <button onClick={() => handleChangeLanguage("en")}>EN</button>
      </div>

      <p>{Strings.test}</p>
    </div>
  );
}
