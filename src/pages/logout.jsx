import { useNavigate } from "react-router-dom";
import Title from "../components/AuthTitle";
import { PrimaryButton } from "../components/button";
import { useContext } from "react";
import { Context } from "../context/AuthContext";
import Strings from "../helper/localization/localization";

function Logout() {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    dispatch("user", {});
    // window.location.reload();
  };

  return (
    <div className="flex justify-center items-center h-screen px-5">
      <div className="flex flex-col items-center gap-4 p-10 bg-dark-200 rounded-lg shadow-lg w-[400px]">
        <div>
          <Title title={Strings.logout} text={Strings.logoutAccount} />
        </div>
        <form onSubmit={handleLogout} className="w-full">
          <div className="mt-14 flex justify-center">
            <PrimaryButton type={"submit"} text={Strings.logout} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Logout;
