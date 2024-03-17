import { useContext } from "react";
import { register } from "../services/auth";
import { FiLock, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router";
import { Input } from "../components/textField";
import Title from "../components/AuthTitle";
import { PrimaryButton } from "../components/button";
import TextLink from "./../components/textLink";
import toastConfig from "../configs/ToastConfig";
import { Context } from "../context/AuthContext";
import { useFormik } from "formik";
import registerSchema from "../helper/validation/registerValidation";
import { useTranslation } from "react-i18next";

function Register() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { dispatch } = useContext(Context);

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
            toastConfig.success(t("successLogin"));
            navigate("/");
          }
        })
        .catch((error) => {
          toastConfig.error(error.message);
        });
    },
    validationSchema: registerSchema,
  });

  return (
    <div className="flex justify-center items-center h-screen px-5">
      <div className="flex flex-col items-center gap-4 p-10 bg-dark-200 rounded-lg shadow-lg w-[400px]">
        <div>
          <Title title={t("register")} text={t("createAccount")} />
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
          <div className="mt-5">
            <Input
              value={formik.values.confirm_password}
              onChange={formik.handleChange}
              name="confirm_password"
              label={t("confirmPassword")}
              type="password"
              placeholder={t("confirmPassword")}
              icon={<FiLock />}
              error={formik.errors["confirm_password"]}
            />
          </div>
          <div className="mt-14 flex justify-center">
            <PrimaryButton type={"submit"} text={t("register")} />
          </div>

          <div className="mt-8">
            <TextLink text={t("haveAccount")} link={"/login"} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
