// halaman untuk table dan menampilkan data dari databases mongoose
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardMhs } from "./card";
import { useState, useEffect } from "react";

export const Table = ({ liftingForms }) => {
  // menambahkan fungsi untuk tombol menambahkan form
  const [liftingForm, setLiftingForm] = useState(false); // Inisialisasi dengan false

  const handleClickLift = () => {
    setLiftingForm(true);
  };

  useEffect(() => {
    liftingForms(liftingForm);
  }, [liftingForm, liftingForms]);

  // mengambil data di database dengan keunikan profile
  // sehingga bisa ditaruh di dalam table dengan profile masing2

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
              onClick={() => handleClickLift()}
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
