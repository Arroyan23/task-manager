// halaman untuk konfigurasi back end
const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
require("./database/mongoose");
const dataUser = require("./model/mongodb");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const privData = require("./model/privatedata");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// menambahkan fungsi api untuk menambahkan data
app.post("/add/data/1562", async (req, res) => {
  try {
    const { nama, email, password } = req.body;
    // cek dulu apakah email sudah terdaftar di dalam database
    const existingEmail = await dataUser.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email sudah digunakan" });
    }

    // ubah passwordnya dengan bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
    const newDataMhs = new dataUser({
      fullName: nama,
      email,
      password: hashedPassword,
    });
    newDataMhs.save();
  } catch {
    console.log("Terjadi Kesalahan Dalam memasukkan kedalam database");
  }
});

// untuk halaman login dan konfigurasi tokennya
app.post("/login", async (req, res) => {
  try {
    // ambil dulu semua data yang terdapat di dalam halaman login
    const { email, password } = req.body;

    // cek apakah terdapat user di dalam database
    const user = await dataUser.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message:
          "Maaf user yang anda cari tidak dapat ditemukan dalam database",
      });
    }

    // cek validasi password dengan bcrypt
    const validatedPassword = bcrypt.compare(password, user.password);
    if (!validatedPassword) {
      return res.status(401).json({ message });
    }

    // jika semuanya sudah melewati tahap validasi maka mulai generate token agar bisa validasi
    const token = jwt.sign(
      { id: user._id, email: user.email },
      "IndkGyci83bdl",
      { expiresIn: "1h" }
    );

    // response sukses dan kirim token ke front end
    res.status(200).json({
      message: "login berhasil!",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch {
    console.log("gagal memvalidasi kepada database");
  }
});

// menambah server untuk menambahkan ke dalam database dengan keunikan profile
app.post("/add/private/data", async (req, res) => {
  try {
    // jangan lupa untuk mengirim jsonwebtoken ke backend di front end bagian
    // headers authorization
    const token = req.header("Authorization");
    const decoded = jwt.verify(token, "IndkGyci83bdl");
    const objectId = decoded.id;

    const { role, fullName, email } = req.body;
    const newPrivateData = new privData({
      nama: fullName,
      email,
      jobs: role,
      profile: objectId,
    });

    // tambahkan ke dalam database
    await newPrivateData.save();
  } catch (error) {
    console.log("gagal untuk menambahkan ke dalam database BACKEND : " + error);
  }
});

// menampilkan ke dalam data dengan keunikan profile
app.get("/get-priv-data", async (req, res) => {
  // tangkap id nya dengan menggunakan token
  const token = req.header("Authorization");
  const decoded = jwt.verify(token, "IndkGyci83bdl");
  const getObjectId = decoded.id;

  const findDetailById = await privData.find({ profile: getObjectId });
  // kirimkan ke api menggunakan res.json
  res.json(findDetailById);
});

// fungsi untuk menghapus data berdasarkan object id nya
app.delete("/delete-id/:id", async (req, res) => {
  // tangkap idnya berdasarkan yang dikirimkan oleh id yang dikirimkan
  try {
    const id = req.params.id;
    const deleteData = await privData.findByIdAndDelete(id);
    res.status(200).json({ message: "Berhasil menghapus data di database" });
    console.log("BERHASIL DI HAPUS BACKEND");
  } catch {
    console.log("Gagal untuk melakukan delete dari back end");
  }
});

// buat debugging untuk konfirmasi kode otp

app.post("/login-debug-otp", async (req, res) => {
  // halaman untuk menjalankan debugging email

  const { email } = req.body;
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
    text: `Kode otp anda adalah : ${otp}`,
  };

  transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      console.log("something when error" + error);
    } else {
      console.log("Email Sent : " + info);
      res.status(200).json({ otp });
    }
  });
});

// listener port part
app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`);
});
