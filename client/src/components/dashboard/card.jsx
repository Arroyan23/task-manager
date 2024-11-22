// halaman untuk komponen kartu
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CardMhs = () => {
  return (
    <>
      <div className="bg-slate-100 shadow-xl py-2 px-5 rounded-lg cursor-pointer mb-3">
        <div className="flex items-center space-x-4 justify-between">
          <FontAwesomeIcon
            icon="fa-solid fa-code"
            className="border-2 h-7 w-7 p-2 rounded-full border-slate-600"
          />
          <div className="flex-1">
            <h1>Ahmad Syawqi Arroyan</h1>
            <p className="text-slate-500">syawqiarroyan@gmail.com</p>
          </div>
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon
              icon="fa-solid fa-trash"
              className="text-red-500"
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
