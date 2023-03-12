import { withFormik } from "formik";

import * as yup from "yup";
import YupPassword from 'yup-password'
YupPassword(yup) // extend yup

import { LoginFormValuesInterface } from "../../contracts/auth";
import InnerRegisterForm from "../../components/auth/innerRegisterForm";

interface RegisterFormProps {
  name?: string;
}

const registerFormValidationSchema = yup.object().shape({
  name: yup
  .string()
  .required('Please Enter a fullname')
  .min(2),
  email: yup
  .string()
  .required('Please Enter your Email')
  .email(),
  password: yup
  .string()
  .required('Please Enter your password')
  .minUppercase(1, 'must at least has 1 upercase')
  .minNumbers(1, 'must at least has 1 number')
  .minSymbols(1, 'must at least has 1 symbol')
  .min(8, 'must at least has words 8')
});

const RegisterForm = withFormik<RegisterFormProps, LoginFormValuesInterface>({
  mapPropsToValues: (props) => ({
    name: props.name ?? "",
    email: "",
    password: "",
  }),
  validationSchema: registerFormValidationSchema,
  handleSubmit: (values) => {
    console.log(values);
  },
})(InnerRegisterForm);

export default RegisterForm;
