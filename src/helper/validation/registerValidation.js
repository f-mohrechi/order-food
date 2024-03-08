import * as yup from "yup";

const registerSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters!")
    .max(20, "Password must be less than 20 characters!")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Password must be at least 8 characters long, contain at least one letter and one number."
    )
    .required(),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export default registerSchema;
