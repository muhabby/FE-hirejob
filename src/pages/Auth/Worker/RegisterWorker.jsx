import { useState, useEffect } from 'react';
import photoAuth from '../../../assets/photo-auth.svg';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../../components/Button';
import { EmailInput, PasswordInput, TextInput } from '../../../components/Input';
import { useDispatch, useSelector } from 'react-redux';
import { authRegister } from '../../../redux/action/auth';
import { Alert, AlertSubmit } from '../../../components/Alert';
import LeftContentAuth from '../../../components/LeftContentAuth';

const RegisterWorker = () => {
  const rolePage = 'worker';
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isError = useSelector((state) => state.register.error);
  const isLoading = useSelector((state) => state.register.loading);
  const isSuccess = useSelector((state) => state.register.data?.message);
  // const userData = useSelector((state) => state.register);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: rolePage
  });
  const [error, setError] = useState();

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  useEffect(() => {
    if (formData.password !== '' && formData.confirmPassword !== '') {
      if (formData.password !== formData.confirmPassword) {
        setError(true);
      } else {
        setError(false);
      }
    }
  }, [formData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(authRegister(formData, rolePage, navigate));
  };

  return (
    <div className="flex flex-row items-center md:gap-16 px-8 md:px-16 py-14 bg-grey-white">
      <div className="w-1/2 hidden md:flex md:justify-center" style={{ height: 1000 }}>
        <LeftContentAuth />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl text-dark ">Halo, Pewpeople</h1>
          <p className="text-2xl text-dark-grey tracking-wide ">
            Silahkan daftar sebagai <b>Pekerja</b>
          </p>
        </div>
        <AlertSubmit isError={isError} isSuccess={isSuccess} />
        <form id="formSubmit" onSubmit={handleSubmit} className="flex flex-col gap-8">
          <TextInput
            text="Name"
            name="name"
            placeholder="Masukan nama anda"
            autoComplete="current-name"
            onChange={onChange}
          />
          <EmailInput
            text="Email"
            name="email"
            placeholder="Masukan alamat email"
            autoComplete="current-email"
            onChange={onChange}
          />
          <TextInput
            text="No. Handphone"
            name="phone"
            placeholder="Masukan nomor handphone"
            autoComplete="current-phone"
            onChange={onChange}
          />
          <PasswordInput
            text="Kata Sandi"
            name="password"
            placeholder="Masukan kata sandi"
            autoComplete="current-password"
            onChange={onChange}
          />
          <PasswordInput
            text="Konfirmasi Kata Sandi"
            name="confirmPassword"
            placeholder="Masukan konfirmasi kata sandi"
            autoComplete="current-confirmPassword"
            onChange={onChange}
          />
          <Alert error={error} isSuccess="Password sama" isError="Password tidak sama" />
          <div className="">
            <Button className="bg-yellow hover:bg-[#db9709]" isLoading={isLoading}>
              Daftar
            </Button>
          </div>
        </form>
        <div className="text-center">
          Anda sudah punya akun?
          <Link to="/login/worker" className="text-yellow hover:text-primary">
            {' '}
            Masuk disini
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterWorker;
