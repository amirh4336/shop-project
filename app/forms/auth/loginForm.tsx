import { withFormik } from "formik";

import * as yup from "yup";


import { LoginFormValuesInterface } from "../../contracts/auth/index";
import InnerLoginForm from "../../components/auth/innnerLoginForm";


const loginFormValidationSchema = yup.object().shape({
  name: yup.string().required("Please Enter a fullname").min(2),
  email: yup.string().required("Please Enter your Email").email(),
  password: yup
    .string()
    .required("Please Enter your password")
    .min(8, "must at least has words 8"),
});


interface LoginFormProps {
}

const LoginForm = withFormik<LoginFormProps, LoginFormValuesInterface>({
  mapPropsToValues: (props) => ({
    email: "",
    password: "",
  }),
  validationSchema: loginFormValidationSchema,
  handleSubmit: (values) => {
    console.log(values);
  },
})(InnerLoginForm);

export default LoginForm;
