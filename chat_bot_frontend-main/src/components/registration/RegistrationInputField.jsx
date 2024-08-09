import React, { useRef, useState } from "react";

function RegistrationInputField({
  inputType,
  placeholder,
  handleChange,
}) {
  const [togglePasswordType, setTogglePasswordType] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleTogglePasswordType = () => {
    setTogglePasswordType(!togglePasswordType);
  };
  const handleInputValue = (e) => {
    const value = e.target.value;
    setInputValue(value);
    handleChange(value);
  };
  return (
    <>
      <div className='relative sm:text-md text-sm mb-3'>
        {/* ******************* input field *********************** */}
        <input
          value={inputValue}
          onChange={(e) => handleInputValue(e)}
          type={
            inputType === "password" && togglePasswordType === true
              ? "text"
              : inputType
          }
          id={placeholder}
          name={placeholder}
          className='peer w-full sm:p-4 p-3 border border-green-500/50 overflow-hidden
                  placeholder-transparent 
                  duration-300 rounded-lg focus:border-green-500 outline-none'
          placeholder=' '
        />
        {/* ******************* hide and show password icons *********************** */}
        {inputType === "password" && (
          <span
            onClick={handleTogglePasswordType}
            className='absolute right-px top-px duration-300
           hover:bg-blue-100 sm:py-3.5 py-2.5 sm:px-2.5 px-1.5 rounded-r-lg border-none '>
            {togglePasswordType ? (
              <svg
                style={{ fill: "#059669" }}
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'>
                <path d='M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.021-.55.038-.841.038-5.351 0-7.424-3.846-7.926-5a8.642 8.642 0 0 1 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a.994.994 0 0 0 0 .633C2.073 12.383 4.367 19 12 19zm0-14c-1.837 0-3.346.396-4.604.981L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a.994.994 0 0 0 0-.633C21.927 11.617 19.633 5 12 5zm4.972 10.558-2.28-2.28c.19-.39.308-.819.308-1.278 0-1.641-1.359-3-3-3-.459 0-.888.118-1.277.309L8.915 7.501A9.26 9.26 0 0 1 12 7c5.351 0 7.424 3.846 7.926 5-.302.692-1.166 2.342-2.954 3.558z'></path>
              </svg>
            ) : (
              <svg
                style={{ fill: "#059669" }}
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'>
                <path d='M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z'></path>
                <path d='M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z'></path>
              </svg>
            )}
          </span>
        )}
        {/* ******************* input field label *********************** */}
        <label
          htmlFor={placeholder}
          className={`absolute  top-0 transition-all 
                  duration-200 transform                   
                  text-gray-500
                   cursor-text
                   bg-white px-2                      
                   ${
                     inputValue
                       ? "sm:-translate-y-2 scale-90 sm:left-1"
                       : "sm:translate-y-4 translate-y-3 sm:left-4 left-2 peer-focus:-translate-y-2 -peer-focus:-translate-y-2 peer-focus:left-1 peer-focus:scale-90"
                   }
                   `}>
          {placeholder}*
        </label>
      </div>
    </>
  );
}

export default RegistrationInputField;
