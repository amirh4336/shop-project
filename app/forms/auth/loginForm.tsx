import { withFormik } from "formik";

import * as yup from "yup";


import { LoginFormValuesInterface } from "../../contracts/auth/index";
import InnerLoginForm from "../../components/auth/innerLoginForm";
import callApi from '../../helpers/callApi';
import ValidationError from "../../exceptions/validationError";


const loginFormValidationSchema = yup.object().shape({
  email: yup.string().required("Please Enter your Email").email(),
  password: yup
    .string()
    .required("Please Enter your password")
    .min(8)
});


interface LoginFormProps {
  setToken : (token : string) => void
}

const LoginForm = withFormik<LoginFormProps, LoginFormValuesInterface>({
  mapPropsToValues: (props) => ({
    email: "",
    password: "",
  }),
  validationSchema: loginFormValidationSchema,
  handleSubmit: async (values , {props , setFieldError}) => {
    try {
      const res = await callApi().post('/auth/login' , values)
      if (res.status === 200) {
        // props.setCookies('shopy-token' , res.data.token , {
        //   'maxAge' : 3600 * 24 * 30,
        //   'domain' : 'localhost',
        //   'path' : '/',
        //   'sameSite' : 'lax'
        // })
      }
    } catch (error) {
      if (error instanceof ValidationError) {
        Object.entries(error.messages).forEach( ( [key , value]) => setFieldError(key , value as string))
      }
    }
  },
})(InnerLoginForm);

export default LoginForm;
