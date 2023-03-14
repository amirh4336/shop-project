import { withFormik } from "formik";

import * as yup from "yup";


import { LoginFormValuesInterface } from "../../contracts/auth/index";
import InnerLoginForm from "../../components/auth/innnerLoginForm";
import callApi from '../../helpers/callApi';


const loginFormValidationSchema = yup.object().shape({
  email: yup.string().required("Please Enter your Email").email(),
  password: yup
    .string()
    .required("Please Enter your password")
    .min(8)
});


interface LoginFormProps {
  setCookies : any
}

const LoginForm = withFormik<LoginFormProps, LoginFormValuesInterface>({
  mapPropsToValues: (props) => ({
    email: "",
    password: "",
  }),
  validationSchema: loginFormValidationSchema,
  handleSubmit: async (values , {props}) => {
    const res = await callApi().post('/auth/login' , values)
    if (res.status === 200) {
      props.setCookies('shopy-token' , res.data.token , {
        'maxAge' : 3600 * 24 * 30,
        'domain' : 'localhost',
        'path' : '/',
        'sameSite' : 'lax'
      })
    }
  },
})(InnerLoginForm);

export default LoginForm;
