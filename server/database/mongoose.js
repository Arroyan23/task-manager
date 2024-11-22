// halaman untuk konfigurasi mongoose ke database atlas

const mongoose = require("mongoose");

// connect ke atlas db yang telah di persiapkan

const uri =
  "mongodb+srv://oyeng:hirolucu123@cluster0.1mud1.mongodb.net/authproject?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
