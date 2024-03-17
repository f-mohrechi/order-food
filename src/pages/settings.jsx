import React from "react";
import ChangeLanguage from "../components/settings/ChangeLanguage";
import { useTranslation } from "react-i18next";

export default function Settings() {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex justify-center w-full">
        <div className="bg-dark-200 p-6 rounded-xl w-96">
          <div className="mb-9">
            <p className="text-3xl font-semibold">{t("settings")}</p>
          </div>
          <ChangeLanguage />
        </div>
      </div>
    </>
  );
}
