// halaman untuk menyimpan modal modal pada database nya
const mongoose = require("mongoose");

// debugging ke database cluster
const dataUser = mongoose.model("user", {
  fullName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

module.exports = dataUser;
