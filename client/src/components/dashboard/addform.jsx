// halaman untuk menambahkan form pada react di halaman dashboard
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const FormAdd = ({ liftingState }) => {
  const [close, setClose] = useState(true);
  const Navigate = useNavigate();
  useEffect(() => {
    liftingState(close);
  }, [close, liftingState]);
  //   untuk lifting state close
  const handleCloseLift = () => {
    setClose(false);
    liftingState(close);
  };
  //   logika untuk menghidupkan kepada database
  const [role, setRole] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleClickSubmit = async () => {
    try {
      const newMhs = { role, fullName, email };
      const responses = await axios.post(
        "http://localhost:5000/add/private/data",
        newMhs,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      Navigate("/dashboard");
    } catch {
      console.log("Gagal untuk menambahkan ke dalam database FRONT END");
    }
  };

  return (
    <>
      <div className="bg-black bg-opacity-50 h-screen absolute top-0 w-full">
        <div className=" bg-white shadow-xl shadow-slate-900 absolute w-96 h-96 p-4 z-50 top-1/3 right-[49rem] rounded-xl">
          <div className="relative">
            <form class="max-w-xl mx-auto">
              {/* button untuk menonaktifkan */}
              <motion.button
                className="absolute -top-6 -left-6 bg-black text-white px-2 py-[3px] rounded-full cursor-pointer"
                onClick={() => handleCloseLift}
                whileDrag={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 240, damping: 10 }}
              >
                <FontAwesomeIcon icon="fa-solid fa-x" />
              </motion.button>
              <h1 className="text-xl font-semibold text-center mb-3">
                Menambahkan Data ke Database
              </h1>
              <div class="mb-5">
                <label
                  for="large-input"
                  class="block mb-2 text-sm font-medium text-black"
                >
                  Role
                </label>
                <input
                  type="text"
                  id="large-input"
                  class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>
              <div class="mb-5">
                <label
                  for="base-input"
                  class="block mb-2 text-sm font-medium text-black"
                >
                  full name
                </label>
                <input
                  type="text"
                  id="base-input"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="small-input"
                  class="block mb-2 text-sm font-medium text-black"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                className="bg-sky-400 py-2 px-4 mt-2 rounded-xl font-semibold"
                onClick={handleClickSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
