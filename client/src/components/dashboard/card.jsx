// halaman untuk komponen kartu
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CardMhs = ({ name, email, objectId, dataDeleted }) => {
  // masukkan ke dalam table untuk menambahkan di bagian front end
  const [data, setData] = useState();
  const Navigate = useNavigate();
  // membuat fungsi delete dengan jika diketahui unik dari object id tersebut
  const handleDeleteClick = async () => {
    const confirmDelete = confirm(
      "Apakah anda yakin ingin menghapus data ini? "
    );

    if (confirmDelete) {
      try {
        const responses = await axios.delete(
          `http://localhost:5000/delete-id/${objectId}`
        );
      } catch {
        console.log("gagal untuk menghapus data: FRONT END");
      }
    }

    Navigate("/dashboard");
  };

  return (
    <>
      <div className="bg-slate-100 shadow-xl py-2 px-5 rounded-lg cursor-pointer mb-3">
        <div className="flex items-center space-x-4 justify-between">
          <FontAwesomeIcon
            icon="fa-solid fa-code"
            className="border-2 h-7 w-7 p-2 rounded-full border-slate-600"
          />
          <div className="flex-1">
            <h1>{name}</h1>
            <p className="text-slate-500">{email}</p>
          </div>
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon
              icon="fa-solid fa-trash"
              className="text-red-500"
              onClick={handleDeleteClick}
            />
            <FontAwesomeIcon
              icon="fa-solid fa-pencil"
              className="text-cyan-500"
            />
          </div>
        </div>
      </div>
    </>
  );
};
