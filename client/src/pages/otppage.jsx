import Otp2 from "../components/otp/kodeform";

// halaman untuk konfigurasi kode otp
export const OtpPage = () => {
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <section>
          <div className="mt-10 bg-red-400">
            <h1 className="text-xl font-semibold">Masukkan Kode Otp</h1>
            <p className="mt-2">
              Kami telah mengirimkan kode otp ke: syawqiarroyan@gmail.com
            </p>
            <Otp2 />
            {/* untuk konfigurasi hitungan 5 menit akan expired */}
            {/* untuk tombol suubmit pendaftaran */}
            <div className=" flex justify-center mt-4">
              <button className="bg-sky-400 py-2 px-5 rounded-lg shadow-xl text-white">
                Submit OTP
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
