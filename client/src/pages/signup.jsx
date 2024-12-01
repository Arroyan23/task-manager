// halaman untuk sign up

import { useState } from "react";
import { OtpComponent } from "../components/login/otp";
import { SignUpForm } from "../components/login/signupform";

export const SignUp = () => {
  const [otpLight, setOtpLight] = useState(false);
  // melakukan state untuk lifting dari sign up form
  const [fullnames, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="w-full h-screen bg-gradient-to-tr from-cyan-600 to-cyan-300">
        <div className="flex justify-center items-center h-screen">
          <div className="">
            <h1 className="text-3xl mb-12 font-semibold text-center font-sour">
              Welcome To Our Task Manager
            </h1>
            <SignUpForm
              setOtpFormState={(value) => setOtpLight(value)}
              fullName={(value) => setFullName(value)}
              emailState={(value) => setEmail(value)}
              passwordState={(value) => setPassword(value)}
            />
          </div>
        </div>
        {otpLight && (
          <OtpComponent
            fullnameDatabase={fullnames}
            emailDatabase={email}
            passwordDatabase={password}
          />
        )}
      </div>
    </>
  );
};
