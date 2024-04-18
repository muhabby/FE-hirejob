import photoAuth from "../../../assets/photo-auth.svg";
import { Link } from "react-router-dom";
import { Button } from "../../../components/Button";
import { EmailInput, PasswordInput, TextInput } from "../../../components/Input";

const RegisterRecruiter = () => {
  return (
    <div className="flex flex-row items-center md:gap-16 px-8 md:px-16 py-14 bg-grey-white">
      <div className="w-auto hidden md:flex md:justify-center fixed top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <img src={photoAuth} className="md:w-2/3 lg:w-4/5 2xl:w-auto" />
      </div>
      <div className="w-1/2 hidden md:flex">

      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl text-dark ">Halo, Pewpeople</h1>
          <p className="text-xl text-dark-grey tracking-wide ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>
        </div>
        <form id="formSubmit" className="flex flex-col gap-8">
          <TextInput
            text="Name"
            name="name"
            placeholder="Masukan nama anda"
            autoComplete="current-name"
          />
          <EmailInput
            text="Email"
            name="email"
            placeholder="Masukan alamat email"
            autoComplete="current-email"
          />
          <TextInput
            text="Perusahaan"
            name="perusahaan"
            placeholder="Masukan nama perusahaan"
            autoComplete="current-perusahaan"
          />
          <TextInput
            text="Jabatan"
            name="jabatan"
            placeholder="Posisi di perusahaan anda"
            autoComplete="current-jabatan"
          />
          <TextInput
            text="No. Handphone"
            name="no_hp"
            placeholder="Masukan nomor handphone"
            autoComplete="current-no_hp"
          />
          <PasswordInput
            text="Kata Sandi"
            name="password"
            placeholder="Masukan kata sandi"
            autoComplete="current-password"
          />
          <PasswordInput
            text="Konfirmasi Kata Sandi"
            name="password_confirm"
            placeholder="Masukan konfirmasi kata sandi"
            autoComplete="current-password-confirm"
          />
          <div className="text-end min-w-0">
            <Link to="/" className="hover:text-primary">
              Lupa kata sandi ?
            </Link>
          </div>
          <div className="">
            <Button className="bg-yellow hover:bg-[#db9709]">Daftar</Button>
          </div>
        </form>
        <div className="text-center">
          Anda sudah punya akun?
          <Link to="/login/recruiter" className="text-yellow hover:text-primary"> Masuk disini</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterRecruiter;
