import { Form, FormikProps, withFormik } from "formik";

import * as yup from "yup";

import MyTextInput from "../../components/shared/form/myTextInput";

// Shape of form values
interface FormValues {
  name: string;
  email: string;
  password: string;
}

const InnerRegisterForm = (props: FormikProps<FormValues>) => {
  return (
    <Form className="flex flex-col space-y-[1.8rem]">
      <MyTextInput label="Full name" name="name" type="text" />

      <MyTextInput label="Email" name="email" type="email" />

      <MyTextInput label="Password" name="password" type="password" />

      <button
        type="submit"
        className="w-full bg-[#3c38ff] text-white py-[.5rem] mt-8 rounded-md hover:bg-white
              hover:text-[#3c38ff] border-2 border-[#3c38ff] transition-all "
      >
        Log in
      </button>

      <p className="text-[#8b8d96] text-center mt-8">
        Have an account?
        <a className="text-[#3c38ff]" href="/auth/register">
          Sign in
        </a>
      </p>
    </Form>
  );
};

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
  .min(8, 'must at least has words 8')
});

const RegisterForm = withFormik<RegisterFormProps, FormValues>({
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
