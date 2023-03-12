import { Form, FormikProps } from "formik";
import { RegisterFormValuesInterFace } from "../../contracts/auth";
import MyTextInput from "../shared/form/myTextInput";


const InnerRegisterForm = (props: FormikProps<RegisterFormValuesInterFace>) => {
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
        Sign Up
      </button>

      <p className="text-[#8b8d96] text-center mt-8">
        Have an account?
        <a className="text-[#3c38ff]" href="/auth/login">
          Login
        </a>
      </p>
    </Form>
  );
};

export default InnerRegisterForm