import { useContext } from "react";
import { useNavigate } from "react-router";
import toastConfig from "../configs/ToastConfig";
import { FiLock, FiUser } from "react-icons/fi";
import { login } from "../services/auth";
import { Input } from "../components/textField";
import Title from "../components/AuthTitle";
import { PrimaryButton } from "../components/button";
import TextLink from "./../components/textLink";
import { Context } from "../context/AuthContext";
import { useFormik } from "formik";
import loginSchema from "../helper/validation/loginValidation";
import { useTranslation } from "react-i18next";

function Login() {
  const { dispatch } = useContext(Context);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values, { setSubmitting, setErrors }) => {
      login(values)
        .then((response) => {
          const data = response.data;
          const user = response.config.data;
          localStorage.setItem("token", data);
          localStorage.setItem("user", JSON.stringify(values));
          dispatch("user", values);
          toastConfig.success(t("successLogin"));
          navigate("/");
        })
        .catch((error) => {
          if (error.response) {
            setErrors({ server: error.response.data });
            toastConfig.error(`${t("error")}: ${error.response.data}`);
          } else if (error.request) {
            // Handle errors due to no response from the server
            toastConfig.error(t("serverNoResponse"));
          } else {
            // Handle other errors
            toastConfig.error(t("error"), error.message);
          }
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
    validationSchema: loginSchema,
  });

  return (
    <div className="flex justify-center items-center h-screen px-5">
      <div className="flex flex-col items-center gap-4 p-10 bg-dark-200 rounded-lg shadow-lg w-[400px]">
        <div>
          <Title title={t("login")} text={t("welcomeBack")} />
        </div>
        <form onSubmit={formik.handleSubmit} className="w-full">
          <div>
            <Input
              value={formik.values.username}
              onChange={formik.handleChange}
              name="username"
              label={t("username")}
              type="text"
              placeholder={t("username")}
              icon={<FiUser />}
              error={formik.errors["username"]}
            />
          </div>
          <div className="mt-5">
            <Input
              value={formik.values.password}
              onChange={formik.handleChange}
              name="password"
              label={t("password")}
              type="password"
              placeholder={t("password")}
              icon={<FiLock />}
              error={formik.errors["password"]}
            />
          </div>
          <div className="mt-14 flex justify-center">
            <PrimaryButton type={"submit"} text={t("login")} />
          </div>

          <div className="mt-8">
            <TextLink text={t("noAccount")} link={"/register"} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
