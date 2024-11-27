import React, { useState } from "react";
import axios from "axios";

export const DebugEmail = () => {
  const [gmail, setGmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    sendOtpEmail();
  };

  const sendOtpEmail = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/login-debug-otp",
        {
          gmail,
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

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={gmail}
        onChange={(e) => setGmail(e.target.value)}
        placeholder="Masukkan email"
        required
      />
      <button type="submit" className="bg-sky-400 p-2">
        Kirim OTP
      </button>
    </form>
  );
};
