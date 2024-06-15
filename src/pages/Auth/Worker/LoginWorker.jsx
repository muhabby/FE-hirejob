import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../../components/Button';
import { EmailInput, PasswordInput } from '../../../components/Input';
import { useDispatch, useSelector } from 'react-redux';
import { authLogin } from '../../../redux/action/auth';
import { AlertSubmit } from '../../../components/Alert';
import LeftContentAuth from '../../../components/LeftContentAuth';

const LoginWorker = () => {
  const rolePage = 'worker';
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isError = useSelector((state) => state.login.error);
  const isLoading = useSelector((state) => state.login.loading);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(authLogin(formData, navigate));
  };
  // localStorage.removeItem('root', register)

  return (
    <div className="flex flex-row items-center md:gap-16 px-8 md:px-16 py-14 bg-grey-white">
      <div className="w-1/2 hidden md:flex md:justify-center">
        <LeftContentAuth />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl text-dark ">Halo, Pewpeople</h1>
          <p className="text-2xl text-dark-grey tracking-wide ">
          Silahkan masuk sebagai <b>Pekerja</b>
          </p>
        </div>
        <AlertSubmit isError={isError} />
        <form onSubmit={handleSubmit} id="formSubmit" className="flex flex-col gap-8">
          <EmailInput
            text="Email"
            name="email"
            placeholder="Masukan alamat email"
            autoComplete="current-email"
            onChange={onChange}
          />
          <PasswordInput
            text="Kata Sandi"
            name="password"
            placeholder="Masukan kata sandi"
            autoComplete="current-password"
            onChange={onChange}
          />
          <div className="text-end min-w-0">
            {/* <Link to="/resetpassword" className="hover:text-primary">
              Lupa kata sandi ?
            </Link> */}
            <span >
              Lupa kata sandi ?
            </span>
          </div>
          <div className="">
            <Button className="bg-yellow hover:bg-[#db9709]" isLoading={isLoading}>
              Masuk
            </Button>
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
