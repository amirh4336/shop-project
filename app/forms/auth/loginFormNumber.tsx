import { withFormik } from "formik";
import Router from "next/router";

import * as yup from "yup";

import { LoginNumberFormValuesInterface } from "../../contracts/auth/index";
import InnerLoginFormNumber from "../../components/auth/innerLoginFormNumber";
import callApi from "../../helpers/callApi";
import ValidationError from "../../exceptions/validationError";

const phoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/;
const loginFormValidationSchema = yup.object().shape({
  phone: yup
    .string()
    .required("Please Enter your number")
    .min(8)
    .matches(phoneRegExp, "the phone format is not correct"),
});

interface LoginFormProps {
  setToken : (token : string) => void
}

const LoginFormNumber = withFormik<
  LoginFormProps,
  LoginNumberFormValuesInterface
>({
  mapPropsToValues: (props) => ({
    phone: "",
  }),
  validationSchema: loginFormValidationSchema,
  handleSubmit: async (values, { props, setFieldError }) => {
    try {
      const res = await callApi().post("/auth/login", values);
      if (res.status === 200) {
        props.setToken(res.data.token)
        Router.push("/auth/login/verify-phone");
      }
    } catch (error) {
      if (error instanceof ValidationError) {
        Object.entries(error.messages).forEach(([key, value]) =>
          setFieldError(key, value as string)
        );
      }
    }
  },
})(InnerLoginFormNumber);

export default LoginFormNumber;
