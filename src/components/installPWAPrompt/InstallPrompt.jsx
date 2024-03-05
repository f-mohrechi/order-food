import React, { useContext, useState } from "react";
import { Context } from "../../context/AuthContext";
import { PrimaryButton } from "../button";
import Strings from "../../helper/localization/localization";

export default function InstallPrompt() {
  const { installPrompt } = useContext(Context);
  const [show, setShow] = useState(true);

  return (
    installPrompt &&
    show && (
      <div className="fixed bottom-6 right-6 z-50 bg-primary-100 p-4 rounded-lg">
        <div className="mb-5">
          <p className="text-dark-200 text-lg font-medium">
            {Strings.installPrompt}
          </p>
        </div>
        <div className="flex justify-between items-center gap-6">
          <PrimaryButton
            text={Strings.install}
            propsClass={"bg-dark-100 border-dark-100"}
            OnClick={() => installPrompt.prompt()}
          />
          <PrimaryButton
            text={Strings.close}
            propsClass={"border-gray-100 text-gray-100"}
            OnClick={() => setShow(false)}
          />
        </div>
      </div>
    )
  );
}
