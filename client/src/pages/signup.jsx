// halaman untuk sign up

import { useState } from "react";
import { OtpComponent } from "../components/login/otp";
import { SignUpForm } from "../components/login/signupform";

export const SignUp = () => {
  const [otpLight, setOtpLight] = useState(false);
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-tr from-cyan-600 to-cyan-300">
        <div className="flex justify-center items-center h-screen">
          <div className="">
            <h1 className="text-3xl mb-12 font-semibold text-center font-sour">
              Welcome To Our Task Manager
            </h1>
            <SignUpForm setOtpFormState={(value) => setOtpLight(value)} />
          </div>
        </div>
        {otpLight && <OtpComponent />}
      </div>
    </>
  );
};
