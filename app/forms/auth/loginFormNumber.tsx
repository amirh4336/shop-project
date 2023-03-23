import { withFormik } from "formik";

import * as yup from "yup";

import { LoginNumberFormValuesInterface } from "../../contracts/auth/index";
import InnerLoginFormNumber from "../../components/auth/innerLoginFormNumber";
import callApi from "../../helpers/callApi";
import ValidationError from "../../exceptions/validationError";

const loginFormValidationSchema = yup.object().shape({
  phone: yup.number().required("Please Enter your number"),
});

interface LoginFormProps {
  setCookies: any;
}

const LoginFormNumber = withFormik<LoginFormProps, LoginNumberFormValuesInterface>({
  mapPropsToValues: (props) => ({
    phone: undefined,
  }),
  validationSchema: loginFormValidationSchema,
  handleSubmit: async (values, { props, setFieldError }) => {
    try {
      const res = await callApi().post("/auth/login", values);
      if (res.status === 200) {
        props.setCookies("shopy-token", res.data.token, {
          maxAge: 3600 * 24 * 30,
          domain: "localhost",
          path: "/",
          sameSite: "lax",
        });
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
