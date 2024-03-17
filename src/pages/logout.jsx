import { useNavigate } from "react-router-dom";
import Title from "../components/AuthTitle";
import { PrimaryButton } from "../components/button";
import { useContext } from "react";
import { Context } from "../context/AuthContext";
import { useTranslation } from "react-i18next";

function Logout() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    dispatch("user", {});
  };

  const backToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen px-5">
      <div className="flex flex-col items-center gap-4 p-10 bg-dark-200 rounded-lg shadow-lg w-[400px]">
        <div>
          <Title title={t("logout")} text={t("logoutAccount")} />
        </div>
        <form onSubmit={handleLogout} className="w-full">
          <div className="flex justify-between items-center gap-10 mt-14">
            <PrimaryButton type={"submit"} text={t("logout")} />
            <PrimaryButton text={t("cancel")} OnClick={backToHome} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Logout;
