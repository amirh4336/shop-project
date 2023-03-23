import { Form, FormikProps } from "formik";
import { VerifyNumberFormValuesInterface } from "../../contracts/auth";
import MyTextInput from "../shared/form/myTextInput";

const InnerVerifyPhoneForm = (
  props: FormikProps<VerifyNumberFormValuesInterface>
) => {
  return (
    <Form className="flex flex-col space-y-[1.8rem]">
      <MyTextInput label="code" name="code" type="text" />

      <button
        type="submit"
        className="w-full bg-[#3c38ff] text-white py-[.5rem] mt-8 rounded-md hover:bg-white
              hover:text-[#3c38ff] border-2 border-[#3c38ff] transition-all "
      >
        Send
      </button>
    </Form>
  );
};

export default InnerVerifyPhoneForm;
