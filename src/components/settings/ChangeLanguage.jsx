import React, { useContext } from "react";
import { Context } from "../../context/AuthContext";
import Strings from "../../helper/localization/localization";
import { PrimaryButton } from "../button";

export default function ChangeLanguage() {
  const { dispatch, settings } = useContext(Context);
  const handleChangeLanguage = (lang) => {
    Strings.setLanguage(lang);
    const direction = lang === "fa" ? "rtl" : "ltr";
    dispatch(
      "settings",
      { ...settings, language: lang, direction: direction },
      true
    );
    document.body.style.direction = direction;
  };
  console.log(settings, "settings");
  return (
    <div>
      <div>
        <p className="text-xl font-medium">{Strings["select your language"]}</p>
      </div>

      <div className="flex justify-between items-center gap-10 my-6">
        <PrimaryButton
          text={Strings.english}
          OnClick={() => handleChangeLanguage("en")}
        />
        <PrimaryButton
          text={Strings.persian}
          OnClick={() => handleChangeLanguage("fa")}
        />
      </div>

      <p>{Strings.test}</p>
    </div>
  );
}
