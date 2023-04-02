import { withFormik } from "formik";
import Router from "next/router";

import * as yup from "yup";

import { VerifyNumberFormValuesInterface } from "../../contracts/auth/index";
import InnerVerifyPhoneForm from "../../components/auth/innerVerifyPhoneForm";
import callApi from "../../helpers/callApi";
import ValidationError from "../../exceptions/validationError";
import { storeLoginToken } from "../../helpers/auth";

const verifyPhoneFormValidationSchema = yup.object().shape({
  code: yup
    .string()
    .required("Please Enter your number")
    .matches(/^[0-9]+$/, "only use numbers")
    .length(6, "code must be exactly 6 numbers"),
});

interface VerifyFormProps {
  token?: string;
  clearToken : () => void
}

const VerifyPhoneForm = withFormik<
  VerifyFormProps,
  VerifyNumberFormValuesInterface
>({
  mapPropsToValues: (props) => ({
    code: "",
    token: props.token || "",
  }),
  validationSchema: verifyPhoneFormValidationSchema,
  handleSubmit: async (values, { props, setFieldError }) => {
    try {
      const res = await callApi().post("/auth/login/verify-phone", values);
      if (res.status === 200) {
        storeLoginToken(res.data?.user?.token)
        // clear phone verify token from redux
        props.clearToken()
        // Router.push("/");
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
