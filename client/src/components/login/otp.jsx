// halaman untuk konfigurasi otp

import Otp2 from "../otp/kodeform";

export const OtpComponent = () => {
  return (
    <>
      <div className="absolute h-screen w-full bg-black top-0 bg-opacity-75">
        <div className="min-w-fit h-96 bg-white rounded-xl shadow-xl absolute top-1/3 left-[48rem] pr-8">
          <h1 className="text-center text-2xl font-semibold mt-20">
            Masukkan Kode OTP
          </h1>
          <p className="text-center mt-2">
            Kami telah mengirimkan kode OTP ke <br /> email
            syawqiarroyan@gmail.com
          </p>
          <Otp2 />
        </div>
      </div>
    </>
  );
};
