// halaman untuk mengatur tambah hapus update dan baca sesuai dengan user
import { useState, useEffect } from "react";
import { Table } from "../components/dashboard/table";
import { motion } from "framer-motion";

export const Dashboard = () => {
  // fetch data dari python
  // menambahkan fungsi untuk logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
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
          <Table />
        </div>
      </div>
    </>
  );
};
