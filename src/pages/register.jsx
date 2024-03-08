import { useContext, useRef, useState } from "react";
import { register } from "../services/auth";
import { FiLock, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router";
import { Input } from "../components/textField";
import Title from "../components/AuthTitle";
import { PrimaryButton } from "../components/button";
import TextLink from "./../components/textLink";
import Strings from "../helper/localization/localization";
import toastConfig from "../configs/ToastConfig";
import { Context } from "../context/AuthContext";
import { useFormik } from "formik";
import registerSchema from "../helper/validation/registerValidation";

function Register() {
  const navigate = useNavigate();
  const { dispatch } = useContext(Context);
  // const usernameRef = useRef();
  // const passwordRef = useRef();
  // const [error, setError] = useState({});

  // const formik = useFormik({
  //   initialValues: {
  //     username: "",
  //     password: "",
  //     confirm_password: "",
  //   },
  //   onSubmit: (values) => {
  //     console.log(JSON.stringify(values, null, 2));
  //     navigate("/");
  //   },
  //   validationSchema: registerSchema,
  // });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirm_password: "",
    },
    onSubmit: (values) => {
      const data = {
        username: values.username,
        password: values.password,
      };

      register(data)
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("token", res.data);
            localStorage.setItem("user", JSON.stringify(data));
            dispatch("user", data);
            toastConfig.success(Strings.successLogin);
            navigate("/");
          }
        })
        .catch((error) => {
          toastConfig.error(error.message);
        });
    },
    validationSchema: registerSchema,
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const data = {
  //     username: usernameRef.current.value,
  //     password: passwordRef.current.value,
  //   };

  //   const errors = {};
  //   for (let [key, value] of Object.entries(data)) {
  //     if (!value) {
  //       errors[key] = `${key} is required`;
  //     }
  //   }

  //   if (data.password && data.password.length < 8) {
  //     errors["password"] = "Password must be at least 8 characters";
  //   }

  //   if (Object.keys(errors).length > 0) {
  //     setError(errors);
  //     return;
  //   } else {
  //     setError({});
  //   }

  //   register(data).then((res) => {
  //     if (res.status === 200) {
  //       const data = res.data;
  //       const user = res.config.data;
  //       localStorage.setItem("token", data);
  //       localStorage.setItem("user", user);
  //       dispatch("user", user);
  //       toastConfig.success(Strings.successLogin);
  //       navigate("/");
  //     }
  //   });
  // };

  return (
    <div className="flex justify-center items-center h-screen px-5">
      <div className="flex flex-col items-center gap-4 p-10 bg-dark-200 rounded-lg shadow-lg w-[400px]">
        <div>
          <Title title={Strings.register} text={Strings.createAccount} />
        </div>
        <form onSubmit={formik.handleSubmit} className="w-full">
          <div>
            <Input
              value={formik.values.username}
              onChange={formik.handleChange}
              name="username"
              label={Strings.username}
              type="text"
              placeholder={Strings.username}
              icon={<FiUser />}
              error={formik.errors["username"]}
              // ref={usernameRef}
            />
          </div>
          <div className="mt-5">
            <Input
              value={formik.values.password}
              onChange={formik.handleChange}
              name="password"
              label={Strings.password}
              type="password"
              placeholder={Strings.password}
              icon={<FiLock />}
              error={formik.errors["password"]}
              // ref={passwordRef}
            />
          </div>
          <div className="mt-5">
            <Input
              value={formik.values.confirm_password}
              onChange={formik.handleChange}
              name="confirm_password"
              label={Strings.confirmPassword}
              type="password"
              placeholder={Strings.confirmPassword}
              icon={<FiLock />}
              error={formik.errors["confirm_password"]}
              // ref={passwordRef}
            />
          </div>
          <div className="mt-14 flex justify-center">
            <PrimaryButton type={"submit"} text={Strings.register} />
          </div>

          <div className="mt-8">
            <TextLink text={Strings.haveAccount} link={"/login"} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
