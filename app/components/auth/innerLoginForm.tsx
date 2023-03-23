import { Form, FormikProps } from "formik";
import { LoginFormValuesInterface } from "../../contracts/auth";
import MyTextInput from "../shared/form/myTextInput";


const InnerLoginForm = (props: FormikProps<LoginFormValuesInterface>) => {
  return (
    <Form className="flex flex-col space-y-[1.8rem]">
      <MyTextInput label="Email" name="email" type="email" />

      <MyTextInput label="Password" name="password" type="password" />

      <button
        type="submit"
        className="w-full bg-[#3c38ff] text-white py-[.5rem] mt-8 rounded-md hover:bg-white
              hover:text-[#3c38ff] border-2 border-[#3c38ff] transition-all "
      >
        Log in
      </button>

    </Form>
  );
};

export default InnerLoginForm