// halaman untuk sign up

import { SignUpForm } from "../components/login/signupform";

export const SignUp = () => {
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-tr from-cyan-600 to-cyan-300">
        <div className="flex justify-center items-center h-screen">
          <div className="">
            <h1 className="text-3xl mb-12 font-semibold text-center font-sour">
              Welcome To Our Task Manager
            </h1>
            <SignUpForm />
          </div>
        </div>
      </div>
    </>
  );
};
