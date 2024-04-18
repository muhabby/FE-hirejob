import photoAuth from "../../../assets/photo-auth.svg";
import { Link } from "react-router-dom";
import { Button } from "../../../components/Button";
import { EmailInput, PasswordInput, TextInput } from "../../../components/Input";

const RegisterWorker = () => {
  return (
    <div className="flex flex-row items-center md:gap-16 px-8 md:px-16 py-14 bg-grey-white">
      <div className="w-1/2 hidden md:flex md:justify-center">
        <img src={photoAuth} />
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
            autoComplete="current-confirmPassword"
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
          <Link to="/login/worker" className="text-yellow hover:text-primary"> Masuk disini</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterWorker;
