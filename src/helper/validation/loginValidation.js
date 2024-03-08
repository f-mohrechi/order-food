import * as yup from "yup";

const loginSchema = yup.object().shape({
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
});

export default loginSchema;
