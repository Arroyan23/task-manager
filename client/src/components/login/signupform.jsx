// halaman untuk form sign up
import { useState } from "react";
import axios from "axios";

export const SignUpForm = ({
  setOtpFormState,
  fullName,
  emailState,
  passwordState,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // menggunakan fungsi untuk memasukkan ke dalam database
  // tambahkan konfigurasi untuk menambahkan ke dalam database dan berhasil
  const onClickDatabaseUser = async (event) => {
    event.preventDefault();
    try {
      const nama = firstName + " " + lastName;
      // const newData = { nama, email, password };
      // const responses = await axios.post(
      //   "http://localhost:5000/add/data/1562",
      //   newData
      // );
      // console.log("Berhasil ditambahkan ke dalam database" + responses);
      const responses = await axios.post(
        "http://localhost:5000/login-debug-otp",
        { email }
      );
      fullName(nama);
      emailState(email);
      passwordState(password);
      // simpan otp ke dalam localstorage
      localStorage.setItem("otpCode", responses.data.otp);
      setOtpFormState(true);
      console.log("Berhasil melakukan set ke dalam lifting stage");
    } catch {
      console.log("gagal untuk memasukkan ke dalam database");
    }
  };

  const sendOtpEmail = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/login-debug-otp",
        {
          email,
        }
      );
      console.log("SUKSES", response.data);
      // Tampilkan pesan sukses kepada pengguna
    } catch (error) {
      console.error(
        "Error sending OTP:",
        error.response ? error.response.data : error.message
      );
      // Tampilkan pesan kesalahan kepada pengguna
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendOtpEmail();
  };

  return (
    <>
      {/* From Uiverse.io by ahkamboh */}
      <div className="px-7 h-screen grid justify-center items-center">
        <div className="grid gap-6" id="div">
          <div className="w-full flex gap-3">
            <form></form>
            <input
              className="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-black"
              type="text"
              placeholder="First Name"
              id="First-Name"
              name="First-Name"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className="p-3 capitalize shadow-2xl glass w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
              type="text"
              placeholder="Last Name"
              id="Last-Name"
              name="Last-Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="grid gap-6 w-full">
            <input
              className="p-3 shadow-2xl glass w-full placeholder:text-black outline-none focus:border-solid border-[#035ec5] focus:border-[1px]"
              type="email"
              placeholder="Email"
              id="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="p-3 shadow-2xl glass w-full text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
              type="date"
              required
            />
          </div>
          <div className="flex gap-3">
            <input
              className="p-3 glass shadow-2xl w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="p-3 glass shadow-2xl w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
              type="password"
              placeholder="Confirm password"
              required
            />
          </div>
          <form onSubmit={onClickDatabaseUser}>
            <button
              className="outline-none glass shadow-2xl w-full p-3 bg-[#ffffff42] hover:border-[#035ec5] hover:border-solid hover:border-[1px] hover:text-[#035ec5] font-bold"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
