// halaman untuk membuat model baru pada database dengan keunikan masing masing
const mongoose = require("mongoose");

const detailData = mongoose.model("detailinfo", {
  nama: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  jobs: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    required: true,
  },
});

module.exports = detailData;
