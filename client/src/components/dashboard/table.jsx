// halaman untuk table dan menampilkan data dari databases mongoose
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardMhs } from "./card";

export const Table = () => {
  // membuat fungsi untuk menambahkan ke dalam database dengan ke unikan di setiap data
  // karena menggunakan authentication user
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-xl w-[30rem] h-96 p-3">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-xl font-semibold mb-3">
              Data Mahasiswa (Nama Usher)
            </h1>
            {/* button untuk add new item */}
            <motion.div
              className="flex items-center space-x-2 bg-whitepy-2 rounded-lg border-2 border-cyan-400 px-4 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <h3>Add New Mhs</h3>
              <FontAwesomeIcon icon="fa-solid fa-plus" />
            </motion.div>
          </div>
          {/* membuat kotak untuk setiap data */}
          <CardMhs />
        </div>
      </div>
    </>
  );
};
