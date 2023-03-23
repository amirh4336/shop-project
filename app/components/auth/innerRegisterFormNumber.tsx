import { Form, FormikProps } from "formik";
import { RegisterFormValuesInterFace } from "../../contracts/auth";
import MyTextInput from "../shared/form/myTextInput";


const InnerRegisterFormNumber = (props: FormikProps<RegisterFormValuesInterFace>) => {
  return (
    <Form className="flex flex-col space-y-[1.8rem]">
      <MyTextInput label="Full name" name="name" type="text" />

      <MyTextInput label="Phone number" name="phone" type="number" />

      <button
        type="submit"
        className="w-full bg-[#3c38ff] text-white py-[.5rem] mt-8 rounded-md hover:bg-white
              hover:text-[#3c38ff] border-2 border-[#3c38ff] transition-all "
      >
        Sign Up
      </button>

    </Form>
  );
};

export default InnerRegisterFormNumber