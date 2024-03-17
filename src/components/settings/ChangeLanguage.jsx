import React from "react";
import Strings from "../../helper/localization/localization";
import { PrimaryButton } from "../button";
import i18n from "../../helper/localization/i18n";
import { useTranslation } from "react-i18next";

export default function ChangeLanguage() {
  const changeLanguage = (lng) => {
    // Set language in i18n
    i18n.changeLanguage(lng);

    // Get direction based on language
    const direction = i18n.dir(lng);

    // Set language and direction in localStorage
    localStorage.setItem("language", lng);
    localStorage.setItem("direction", direction);

    // Set document direction
    document.documentElement.dir = direction;
  };

  const { t } = useTranslation();

  console.log(Strings.getLanguage(), "settings");
  return (
    <div>
      <div>
        <p className="text-xl font-medium">{t("select your language")}</p>
      </div>

      <div className="flex justify-between items-center gap-10 my-6">
        <PrimaryButton
          text={t("english")}
          OnClick={() => changeLanguage("en")}
        />
        <PrimaryButton
          text={t("persian")}
          OnClick={() => changeLanguage("fa")}
        />
      </div>
    </div>
  );
}
