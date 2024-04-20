import { useState, useEffect } from 'react';
import photoAuth from '../../../assets/photo-auth.svg';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../../components/Button';
import { EmailInput, PasswordInput, TextInput } from '../../../components/Input';
import { useDispatch, useSelector } from 'react-redux';
import { authRegister } from '../../../redux/action/auth';
import { AlertSubmit, Alert } from '../../../components/Alert';

const RegisterRecruiter = () => {
  const rolePage = 'recruiter';
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isError = useSelector((state) => state.register.error);
  const isLoading = useSelector((state) => state.register.loading);
  const isSuccess = useSelector((state) => state.register.data?.message);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: rolePage,
    company_name: '',
    position: ''
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
    console.log(formData);
    dispatch(authRegister(formData, rolePage, navigate));
  };

  return (
    <div className="flex flex-row items-center md:gap-16 px-8 md:px-16 py-14 bg-grey-white">
      <div className="w-auto hidden md:flex md:justify-center fixed top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <img src={photoAuth} className="md:w-2/3 lg:w-4/5 2xl:w-auto" />
      </div>
      <div className="w-1/2 hidden md:flex"></div>
      <div className="w-full md:w-1/2 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl text-dark ">Halo, Pewpeople</h1>
          <p className="text-xl text-dark-grey tracking-wide ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus
            auctor.
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
            text="Perusahaan"
            name="company_name"
            placeholder="Masukan nama perusahaan"
            autoComplete="current-company_name"
            onChange={onChange}
          />
          <TextInput
            text="Jabatan"
            name="position"
            placeholder="Posisi di perusahaan anda"
            autoComplete="current-position"
            onChange={onChange}
          />
          <TextInput
            text="No. Handphone"
            name="phone"
            placeholder="Masukan nomor handphone"
            autoComplete="current-phone"
            onChange={onChange}
          />
          <Alert error={error} isSuccess='Password sama' isError='Password tidak sama' />
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
          <div className="text-end min-w-0">
            <Link to="/" className="hover:text-primary">
              Lupa kata sandi ?
            </Link>
          </div>
          <div className="">
            <Button className="bg-yellow hover:bg-[#db9709]" isLoading={isLoading}>
              Daftar
            </Button>
          </div>
        </form>
        <div className="text-center">
          Anda sudah punya akun?
          <Link to="/login/recruiter" className="text-yellow hover:text-primary">
            {' '}
            Masuk disini
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterRecruiter;
