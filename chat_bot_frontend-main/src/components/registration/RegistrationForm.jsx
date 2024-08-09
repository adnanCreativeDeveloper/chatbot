import { Link, useNavigate } from "react-router-dom";
import chat_bot_logo from "../../assets/media/img/svg/chat_bot_logo.svg";
import { useState } from "react";

function RegistrationForm({
  formHeading,
  formLinkText,
  loginOrSignUp,
  linkPath,
  setAccess,
  setRefresh,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [togglePasswordType, setTogglePasswordType] = useState(false);
  const [emailAlreadyExist, setEmailAlreadyExist] = useState(false);
  const navigateToLogin = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr(false);
    setEmailAlreadyExist(false);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setEmailAlreadyExist(false);
    if (password.length < 12 || !password) {
      setPasswordErr(false);
    }
  };
  async function handleRegistration() {
    try {
      const payload = {
        username: email,
        password: password,
      };

      console.log("Sending data:", payload);

      const response = await fetch("http://127.0.0.1:8000/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log(`Response Status: ${response.status}`);

      if (!response.ok) {
        const errorText = await response.text();
        console.error(
          `HTTP error! status: ${response.status}, message: ${errorText}`
        );

        // Check for specific error message and handle it
        if (errorText.includes("A user with that username already exists")) {
          setEmailAlreadyExist(true);
        }

        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // mail
      // 067600615@gmsil.co
      // password
      // dsdadaadsdasdasad;
      // access
      // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIzMTc4Mjg3LCJpYXQiOjE3MjMxNzc5ODcsImp0aSI6IjNkMzU5ZTZhZmJmNTQ1MjlhNzU2Mzg5YTY1NzNhZDljIiwidXNlcl9pZCI6N30.DwZmphEcMGb3n71lbwnivbo_uyxvEJv-0Yo8VNA9x9k
      // refresh token
      // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMzI2NDM4NywiaWF0IjoxNzIzMTc3OTg3LCJqdGkiOiI4OGM5MDJmZjU1Nzk0OGIyOTVlMGU5ZDc3OWNmMzY4YiIsInVzZXJfaWQiOjd9.uRMAEOQKCc7PLCNvFzJaBJBIb09UO4a3NQcPw78oLtk

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        console.log(data.access, data.refresh);
        setAccess(data.access);
        setRefresh(data.refresh);
        data.access && navigateToLogin("/login");
      } else {
        const text = await response.text();
        console.error("Non-JSON response:", text);
        throw new Error(`Unexpected response format: ${text}`);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let hasErrors = false;

    if (!emailRegex.test(email)) {
      setEmailErr(true);
      hasErrors = true;
    }

    if (password.length < 12 || !password) {
      setPasswordErr(true);
      hasErrors = true;
    }

    if (!hasErrors) {
      setEmail("");
      setPassword("");
      setEmailAlreadyExist(false);
      handleRegistration();
    }
  };

  const font_family = {
    fontFamily: "Helvetica, sans-serif",
  };

  return (
    <>
      <div className='sign-up' style={font_family}>
        <div className='w-fit mx-auto'>
          <div className=''>
            <img
              className='mx-auto h-8 mt-7 scale-105'
              src={chat_bot_logo}
              alt='chat_bot_logo'
            />
          </div>
          <div className='sm:w-80 w-64 py- min-h-96  sm:my-20 mb-5 mx-auto scale-105'>
            <form action='' onSubmit={(event) => handleSubmit(event)}>
              <div className='text-center scale-90'>
                <h1 className='text-center sm:text-3xl text-2xl text-gray-700 pb-6 pt-10 font-bold'>
                  {formHeading}
                </h1>
              </div>
              <div>
                <div className='mb-10'>
                  <div className='relative sm:text-md text-sm mb-3'>
                    {/* ******************* input field *********************** */}
                    <input
                      value={email}
                      onChange={(e) => handleEmail(e)}
                      type='email'
                      id='email'
                      name='email'
                      className='peer w-full sm:p-4 p-3 border border-green-500/50 overflow-hidden
                  placeholder-transparent 
                  duration-300 rounded-lg focus:border-green-500 outline-none'
                      placeholder=' '
                    />
                    {/* ******************* input field label *********************** */}
                    <label
                      htmlFor='email'
                      className={`absolute  top-0 transition-all 
                  duration-200 transform                   
                  text-gray-500
                   cursor-text
                   bg-white px-2                      
                   ${
                     email
                       ? "sm:-translate-y-2 scale-90 sm:left-1"
                       : "sm:translate-y-4 translate-y-3 sm:left-4 left-2 peer-focus:-translate-y-2 -peer-focus:-translate-y-2 peer-focus:left-1 peer-focus:scale-90"
                   }
                   `}>
                      Email*
                    </label>
                  </div>

                  {emailErr && (
                    <div className='flex gap-2 items-center pb-4'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        viewBox='0 0 24 24'
                        fill='red'>
                        <path d='M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                      </svg>
                      <p className='text-red-600 text-sm'>
                        {emailAlreadyExist
                          ? "Email already exist"
                          : "Email is not valid"}
                      </p>
                      <p className='text-red-600 text-sm'></p>
                    </div>
                  )}

                  <div className='relative sm:text-md text-sm mb-3'>
                    {/* ******************* input field *********************** */}
                    <input
                      value={password}
                      onChange={(e) => handlePassword(e)}
                      type={togglePasswordType ? "text" : "password"}
                      id='password'
                      name='password'
                      className='peer w-full sm:p-4 p-3 border border-green-500/50 overflow-hidden
                  placeholder-transparent 
                  duration-300 rounded-lg focus:border-green-500 outline-none'
                      placeholder=' '
                    />
                    {/* ******************* hide and show password icons *********************** */}
                    <span
                      onClick={() => setTogglePasswordType(!togglePasswordType)}
                      className='absolute right-px top-px duration-300 bg-white
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
                    {/* ******************* input field label *********************** */}
                    <label
                      htmlFor='password'
                      className={`absolute  top-0 transition-all 
                  duration-200 transform                   
                  text-gray-500
                   cursor-text
                   bg-white px-2                      
                   ${
                     password
                       ? "sm:-translate-y-2 scale-90 sm:left-1"
                       : "sm:translate-y-4 translate-y-3 sm:left-4 left-2 peer-focus:-translate-y-2 -peer-focus:-translate-y-2 peer-focus:left-1 peer-focus:scale-90"
                   }
                   `}>
                      Password*
                    </label>
                  </div>

                  {passwordErr && (
                    <div className='flex gap-2 items-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        viewBox='0 0 24 24'
                        fill='red'>
                        <path d='M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                      </svg>
                      <p className='text-red-600 text-sm'>
                        Password is not valid
                      </p>
                    </div>
                  )}
                  <div className=''>
                    <button
                      className='w-full sm:p-4 p-3 mt-3 text-white
                  duration-300 rounded-lg bg-emerald-600 hover:bg-emerald-700'>
                      Continue
                    </button>
                  </div>
                  <p className='text-sm mt-4 text-center'>
                    {formLinkText}
                    <Link to={linkPath}>
                      <span className='text-emerald-600 ps-1 cursor-pointer'>
                        {loginOrSignUp}
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
          <div className='text-center pb-4'>
            <p className='text-sm text-emerald-600 cursor-pointer'>
              Terms of Use <span className='px-1'>|</span> Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegistrationForm;
