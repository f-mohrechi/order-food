import React from "react";
import { useTranslation } from "react-i18next";

export default function TextField() {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-100 border border-gray-200 rounded-lg flex items-center py-2.5 px-3.5 focus-within:border-primary-100 focus-within:shadow-main focus-within:shadow-main-pink">
      <img className="" src="/img/search.svg" alt="" />
      <input
        className="bg-transparent w-full outline-none px-4"
        placeholder={t("search")}
      />
    </div>
  );
}
