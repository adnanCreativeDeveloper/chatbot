import React, { useState } from "react";
import { Route, Routes, useSearchParams } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";

function RegistrationRoutes({ setIsLoggedIn }) {
  const [access, setAccess] = useState("");
  const [refresh, setRefresh] = useState("");

 

  

  return (
    <>
      <Routes>
        <Route
          exact
          path='/login'
          element={
            <LoginForm
              formHeading='Welcome back'
              formLinkText="Don't have an account?"
              loginOrSignUp='Sign Up'
              linkPath='/sign-up'
              setAccess={setAccess}
              setRefresh={setRefresh}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
        <Route
          exact
          path='/sign-up'
          element={
            <RegistrationForm
              formHeading='Create an account'
              formLinkText='Already have an account?'
              loginOrSignUp='Login'
              linkPath='/login'
              setAccess={setAccess}
              setRefresh={setRefresh}
            />
          }
        />
      </Routes>
    </>
  );
}

export default RegistrationRoutes;
