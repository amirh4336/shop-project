import { withFormik } from "formik";

import * as yup from "yup";
import YupPassword from 'yup-password'
YupPassword(yup) // extend yup

import { RegisterNumberFormValuesInterface } from "../../contracts/auth";
import InnerRegisterFormNumber from "../../components/auth/innerRegisterFormNumber";
import callApi from '../../helpers/callApi';
import  Router from "next/router";


interface RegisterFormProps {
  name?: string;
}

const registerFormValidationSchema = yup.object().shape({
  name: yup
  .string()
  .required('Please Enter a fullname')
  .min(2),
  phone: yup
  .number()
  .required('Please Enter your number')
});

const RegisterForm = withFormik<RegisterFormProps, RegisterNumberFormValuesInterface>({
  mapPropsToValues: (props) => ({
    name: props.name ?? "",
    phone: undefined,
  }),
  validationSchema: registerFormValidationSchema,
  handleSubmit: async (values) => {
    const res = await callApi().post('/auth/register' , values)
    if (res.status === 201) {
      Router.push('/auth/login')
    }
  },
})(InnerRegisterFormNumber);

export default RegisterForm;
