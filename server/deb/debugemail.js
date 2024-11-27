// halaman untuk menjalankan debugging email
// berhasil melakukan konfigurasi email
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const email = `dimasdriyasmoro1@gmail.com`;

// generate kode otp
const otp = Math.floor(100000 + Math.random() * 900000).toString();

const transporter = nodemailer.createTransport({
  // konfigurasi akun emailw
  service: "gmail",
  auth: {
    user: "syawqiarroyan@gmail.com",
    pass: "zgob akxl aapk vvmh",
  },
});

const mailOption = {
  from: "syawqiarroyan@gmail.com",
  to: email,
  subject: "Kode Verifikasi Login",
  text: `Kode otp anda adalah Muhammad Fikri : ${otp}`,
};

transporter.sendMail(mailOption, (error, info) => {
  if (error) {
    console.log("something when error" + error);
  } else {
    console.log("Email Sent : " + info);
  }
});
