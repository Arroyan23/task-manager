import Otp2 from "../components/otp/kodeform";

// halaman untuk konfigurasi kode otp
export const OtpPage = () => {
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <section>
          <h1 className="text-xl font-semibold">Masukkan Kode Otp</h1>
          <p className="mt-2">
            Kami telah mengirimkan kode otp ke: syawqiarroyan@gmail.com
          </p>
          <Otp2 />
          {/* untuk konfigurasi hitungan 5 menit akan expired */}
          {/* untuk tombol suubmit pendaftaran */}
          <button>
            Submit OTP
          </button>
        </section>
      </div>
    </>
  );
};
