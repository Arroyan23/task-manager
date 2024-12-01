import { useEffect, useState } from "react";
import Otp2 from "../otp/kodeform";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const OtpComponent = ({
  emailDatabase,
  fullnameDatabase,
  passwordDatabase,
}) => {
  const [confirmOtp, setConfirmOtp] = useState("");
  const Navigate = useNavigate();

  useEffect(() => {
    const setToDatabase = async () => {
      try {
        const mixData = {
          fullName: fullnameDatabase,
          email: emailDatabase,
          password: passwordDatabase,
        };

        const responses = await axios.post(
          "http://localhost:5000/add/data/1562",
          mixData
        );
        if (responses.status === 201) {
          console.log(
            "Berhasil memasukkan ke dalam database otp.jsx:",
            responses.data
          );
          localStorage.removeItem("otpCode"); // Hapus OTP setelah sukses
          Navigate("/"); // Redirect ke halaman '/'
        } else {
          console.log("Terjadi kesalahan" + responses.status);
        }
      } catch (error) {
        console.error(
          "Terjadi kesalahan pada saat memasukkan ke dalam database otp.jsx:",
          error.response?.data || error.message
        );
      }
    };

    // Hanya jalankan jika OTP cocok
    if (confirmOtp && confirmOtp === localStorage.getItem("otpCode")) {
      setToDatabase();
    }
  }, [confirmOtp]);

  return (
    <>
      <div className="absolute h-screen w-full bg-black top-0 bg-opacity-75">
        <div className="min-w-fit h-96 bg-white rounded-xl shadow-xl absolute top-1/3 left-[48rem] pr-8">
          <h1 className="text-center text-2xl font-semibold mt-20">
            Masukkan Kode OTP
          </h1>
          <p className="text-center mt-2">
            Kami telah mengirimkan kode OTP ke <br /> email {emailDatabase}
          </p>
          <Otp2 sendOtpCode={(value) => setConfirmOtp(value)} />
        </div>
      </div>
    </>
  );
};
