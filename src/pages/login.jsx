import { useRef, useState } from "react";
import { login } from "../services/auth";
import { FiLock, FiUser } from "react-icons/fi";
import toastConfig from "../configs/ToastConfig";
import { useNavigate } from "react-router";
import { Input } from "../components/textField";
import Title from "../components/AuthTitle";
import { PrimaryButton } from "../components/button";
import TextLink from "./../components/textLink";

function Login() {
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
        toastConfig.success("login successful");
        navigate("/home");
        console.log("result", data);
        console.log("user", user);
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          toastConfig.error(`Error: ${error.response.data}`);
        } else if (error.request) {
          // The request was made but no response was received
          toastConfig.error("No response from server");
        } else {
          // Something happened in setting up the request that triggered an Error
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
