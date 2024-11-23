// halaman untuk mengatur tambah hapus update dan baca sesuai dengan user
import { useState, useEffect } from "react";
import { Table } from "../components/dashboard/table";
import { motion } from "framer-motion";
import axios from "axios";
import { FormAdd } from "../components/dashboard/addform";

export const Dashboard = () => {
  // menambahkan fungsi state untuk menambahkan form
  const [formLifted, setFormLifted] = useState(false);
  // menambahkan fungsi untuk logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  // ambil jwt token dan kirim ke back end menggunakan axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await axios.get("http://localhost:5000/profile", {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        // ... proses data dari response ...
      } catch (error) {
        console.error("Gagal mendapatkan token:", error); // Tampilkan error lebih detail
      }
    };

    fetchData(); // Panggil fungsi async
  }, []);
  return (
    <>
      <div className="h-screen w-full bg-gradient-to-br from-purple-600 to-pink-600">
        <motion.button
          className="absolute top-20 left-1/2 bg-purple-500 p-3 rounded-lg text-white shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          onClick={handleLogout}
        >
          Logout
        </motion.button>
        <div className="">
          {/* buat tabel untuk membaca data dari database */}
          <Table liftingForms={(value) => setFormLifted(value)} />
        </div>
      </div>
      {/* dengan posisi absolut */}
      {formLifted && <FormAdd liftingState={(value) => setFormLifted(value)} />}
    </>
  );
};
