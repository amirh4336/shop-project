import { withFormik } from "formik";
import  Router from "next/router";

import * as yup from "yup";

import { VerifyNumberFormValuesInterface } from "../../contracts/auth/index";
import InnerVerifyPhoneForm from "../../components/auth/innerVerifyPhoneForm";
import callApi from "../../helpers/callApi";
import ValidationError from "../../exceptions/validationError";

const loginFormValidationSchema = yup.object().shape({
  phone: yup.number().required("Please Enter your number"),
});

interface VerifyFormProps {
  setCookies: any;
}

const VerifyPhoneForm = withFormik<VerifyFormProps, VerifyNumberFormValuesInterface>({
  mapPropsToValues: (props) => ({
    code: "",
  }),
  validationSchema: loginFormValidationSchema,
  handleSubmit: async (values, { props, setFieldError }) => {
    try {
      const res = await callApi().post("/auth/login", values);
      if (res.status === 200) {
        props.setCookies("verify-shopy-token", res.data.token, {
          maxAge: 3600 * 24 * 30,
          domain: "localhost",
          path: "/",
          sameSite: "lax",
        });
        Router.push('/auth/register')
      }
    } catch (error) {
      if (error instanceof ValidationError) {
        Object.entries(error.messages).forEach(([key, value]) =>
          setFieldError(key, value as string)
        );
      }
    }
  },
})(InnerVerifyPhoneForm);

export default VerifyPhoneForm;
