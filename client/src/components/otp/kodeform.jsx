import React, { useRef, useState } from "react";

export default function Otp2({ sendOtpCode }) {
  const [otp, setOtp] = useState(Array(6).fill("")); // Array with 6 empty strings
  const inputRefs = useRef([]); // Array of refs for each input field
  const [error, setError] = useState(false);

  const handleKeyDown = (e) => {
    const index = inputRefs.current.indexOf(e.target);
    if (e.key === "Backspace" || e.key === "Delete") {
      setOtp((prevOtp) => [
        ...prevOtp.slice(0, index),
        "",
        ...prevOtp.slice(index + 1),
      ]);
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
      e.preventDefault();
    } else if (
      !/^[0-9]{1}$/.test(e.key) &&
      !["Tab", "ArrowLeft", "ArrowRight"].includes(e.key)
    ) {
      e.preventDefault();
    }
  };

  const handleInput = (e) => {
    const { target } = e;
    const index = inputRefs.current.indexOf(target);
    if (/^[0-9]{1}$/.test(target.value)) {
      setOtp((prevOtp) => [
        ...prevOtp.slice(0, index),
        target.value,
        ...prevOtp.slice(index + 1),
      ]);
      if (index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text").slice(0, otp.length);
    if (/^[0-9]+$/.test(text)) {
      const digits = text.split("");
      setOtp((prevOtp) =>
        digits.map((digit, index) => digits[index] || prevOtp[index])
      );
    }
  };

  const handleCliCk = () => {
    const localstorageConfirm = localStorage.getItem("otpCode");
    const confirmOtpInput = otp.join("");
    if (confirmOtpInput === localstorageConfirm) {
      setError(false);
      sendOtpCode(confirmOtpInput);
    } else {
      setError(true);
    }
  };

  return (
    <section className="mt-4 dark:bg-dark pl-7">
      <div className="container">
        <div>
          <form id="otp-form" className="flex gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
                onFocus={handleFocus}
                onPaste={handlePaste}
                ref={(el) => (inputRefs.current[index] = el)}
                className="shadow-xs flex w-[64px] items-center justify-center rounded-lg border border-stroke bg-white p-2 text-center text-2xl font-medium text-gray-5 outline-none sm:text-4xl dark:border-black dark:bg-white/5"
              />
            ))}
          </form>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="">
          {error && (
            <p className="text-red-500 mt-2">
              Kode OTP yang anda masukkan{" "}
              <span className="font-bold">SALAH</span>
            </p>
          )}
          <div className="flex justify-center">
            <button
              className="bg-sky-400 py-2 px-4 rounded-lg mt-2 shadow-xl"
              onClick={handleCliCk}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
