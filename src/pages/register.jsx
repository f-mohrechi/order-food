import { useRef, useState } from "react";
import { register } from "../services/auth";
import { FiLock, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router";
import { Input } from "../components/textField";
import Title from "../components/AuthTitle";
import { PrimaryButton } from "../components/button";
import TextLink from "./../components/textLink";

function Register() {
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

    if (data.password && data.password.length < 8) {
      errors["password"] = "Password must be at least 8 characters";
    }

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    } else {
      setError({});
    }

    register(data).then((res) => {
      if (res.status === 200) {
        navigate(-1);
        console.log("result", res.config.data);
      }
    });
  };

  return (
    <div className="flex justify-center items-center h-screen px-5">
      <div className="flex flex-col items-center gap-4 p-10 bg-dark-200 rounded-lg shadow-lg w-[400px]">
        <div>
          <Title title={"Register"} text={"Create an account"} />
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
            <PrimaryButton type={"submit"} text={"Register"} />
          </div>

          <div className="mt-8">
            <TextLink text={"Already have an account? Login"} link={"/login"} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
