import photoAuth from '../../../assets/photo-auth.svg';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/Button';
import { EmailInput, PasswordInput } from '../../../components/Input';

const LoginWorker = () => {
  return (
    <div className="flex flex-row items-center md:gap-16 px-8 md:px-16 py-14 bg-grey-white">
      <div className="w-1/2 hidden md:flex md:justify-center">
        <img src={photoAuth} />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl text-dark ">Halo, Pewpeople</h1>
          <p className="text-xl text-dark-grey tracking-wide ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus
            auctor.
          </p>
        </div>
        <form id="formSubmit" className="flex flex-col gap-8">
          <EmailInput
            text="Email"
            name="email"
            placeholder="Masukan alamat email"
            autoComplete="current-email"
          />
          <PasswordInput
            text="Kata Sandi"
            name="password"
            placeholder="Masukan kata sandi"
            autoComplete="current-password"
          />
          <div className="text-end min-w-0">
            <Link to="/" className="hover:text-primary">
              Lupa kata sandi ?
            </Link>
          </div>
          <div className="">
            <Button className="bg-yellow hover:bg-[#db9709]">Masuk</Button>
          </div>
        </form>
        <div className="text-center">
          Anda belum punya akun?
          <Link to="/register/worker" className="text-yellow hover:text-primary">
            {' '}
            Daftar disini
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginWorker;
