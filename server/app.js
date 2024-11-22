// halaman untuk konfigurasi back end
const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
require("./database/mongoose");
const dataUser = require("./model/mongodb");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// middleware pada token untuk mengambil data dari jwt
// decode jwt dengan membuat fungsi itu sendiri
const authenticate = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(403).json({ message: "Tidak dapat mengenali user" });
  }

  try {
    const decoded = jwt.verify(token, "IndkGyci83bdl");

    const userId = decoded.id;
    req.dataUser = { _id: userId };
    next();
  } catch {
    console.log("terjadi kesalahan pada saat mengambil token");
  }
};

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

// listener port part
app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`);
});