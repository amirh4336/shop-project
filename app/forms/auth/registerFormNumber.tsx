import { withFormik } from "formik";

import * as yup from "yup";
import YupPassword from 'yup-password'
YupPassword(yup) // extend yup

import { RegisterNumberFormValuesInterface } from "../../contracts/auth";
import InnerRegisterFormNumber from "../../components/auth/innerRegisterFormNumber";
import ValidationError from "../../exceptions/validationError";
import callApi from '../../helpers/callApi';
import  Router from "next/router";


interface RegisterFormProps {
  name?: string;
}
const phoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/
const registerFormValidationSchema = yup.object().shape({
  name: yup
  .string()
  .required('Please Enter a fullname')
  .min(2),
  phone: yup
  .string()
  .required('Please Enter your number')
  .min(8)
  .matches(phoneRegExp , 'the phone format is not correct')
});

const RegisterForm = withFormik<RegisterFormProps, RegisterNumberFormValuesInterface>({
  mapPropsToValues: (props) => ({
    name: props.name ?? "",
    phone: "",
  }),
  validationSchema: registerFormValidationSchema,
  handleSubmit: async (values , { props, setFieldError }) => {
    
    try {
      const res = await callApi().post('/auth/register' , values)
      if (res.status === 201) 
        Router.push('/auth/login')
    } catch (error) {
      if (error instanceof ValidationError) {
        Object.entries(error.messages).forEach(([key, value]) =>
          setFieldError(key, value as string)
        );
      }
    }
  },
})(InnerRegisterFormNumber);

export default RegisterForm;
