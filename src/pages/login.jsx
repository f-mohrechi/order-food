import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router";
import toastConfig from "../configs/ToastConfig";
import { FiLock, FiUser } from "react-icons/fi";
import { login } from "../services/auth";
import { Input } from "../components/textField";
import Title from "../components/AuthTitle";
import { PrimaryButton } from "../components/button";
import TextLink from "./../components/textLink";
import { Context } from "../context/AuthContext";

function Login() {
  const { dispatch } = useContext(Context);
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    const errors = {};
    for (let [key, value] of Object.entries(data)) {
      if (!value) {
        errors[key] = `${key} is required`;
      }
    }

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    } else {
      setError({});
    }

    login(data)
      .then((response) => {
        const data = response.data;
        const user = response.config.data;
        localStorage.setItem("token", data);
        localStorage.setItem("user", user);
        dispatch("user", user);
        toastConfig.success("login successful");
        navigate("/");
        window.location.reload();
        console.log("result", data);
        console.log("user", user);
      })
      .catch((error) => {
        if (error.response) {
          toastConfig.error(`Error: ${error.response.data}`);
        } else if (error.request) {
          toastConfig.error("No response from server");
        } else {
          toastConfig.error("Error", error.message);
        }
      });
  };

  return (
    <div className="flex justify-center items-center h-screen px-5">
      <div className="flex flex-col items-center gap-4 p-10 bg-dark-200 rounded-lg shadow-lg w-[400px]">
        <div>
          <Title title={"Login"} text={"Welcome back"} />
        </div>
        <form onSubmit={handleSubmit} className="w-full">
          <div>
            <Input
              label={"username"}
              error={error["username"]}
              ref={usernameRef}
              type="text"
              placeholder=" username"
              icon={<FiUser />}
            />
          </div>
          <div className="mt-5">
            <Input
              label={"password"}
              error={error["password"]}
              ref={passwordRef}
              type="password"
              placeholder=" Password"
              icon={<FiLock />}
            />
          </div>
          <div className="mt-14 flex justify-center">
            <PrimaryButton type={"submit"} text={"login"} />
          </div>

          <div className="mt-8">
            <TextLink
              text={"Don't have an account? Register"}
              link={"/register"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
