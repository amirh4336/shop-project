import {Field , ErrorMessage} from 'formik';
import { FC } from 'react';

interface InputProps {
  name : string,
  type? : string,
  // inputClassName? : string,
  errorClassName? : string,
  label : string
}

const MyTextInput:FC<InputProps> = ({
  name,
  type = "text",
  label,
  errorClassName
}) => {

  return(
    <div className="mt-3">
      <ErrorMessage name={name} className={`text-red-500 text-end ${errorClassName ?? ""}`} component="div" />
      <div className="relative">
        <Field name={name}  type={type} placeholder="s" className="border
        placeholder:text-white
        w-full h-10 rounded-md pl-3 mt-1 peer focus:outline-none focus:border-[#3c38ff]"/>
        <label 
        htmlFor={name}
        className="text-[#3c38ff] text-[.9rem] font-medium 
        transition-all absolute left-[12px] top-[-7px] peer-focus:text-[#3c38ff]
        peer-focus:top-[-7px] peer-focus:left-[12px] bg-white px-1
        peer-placeholder-shown:top-[14px] peer-placeholder-shown:left-[14px] 
        peer-placeholder-shown:text-slate-500"
        >{label}
        </label>
      </div>
    </div>
  )
}


export default MyTextInput