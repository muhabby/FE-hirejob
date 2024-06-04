import { useEffect, useState } from 'react';
import { Button } from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import { PasswordInput } from '../../../components/Input';
import { useDispatch, useSelector } from 'react-redux';
import { setPassword } from '../../../redux/action/auth';
import { AlertSubmit, Alert } from '../../../components/Alert';
import photoAuth from '../../../assets/photo-auth.svg';
import LeftContentAuth from '../../../components/LeftContentAuth';

const InputNewPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputOTPData = useSelector((state) => state.inputOTP.data);
  const isError = useSelector((state) => state.setPassword.error);
  const isLoading = useSelector((state) => state.setPassword.loading);
  const isSuccess = useSelector((state) => state.setPassword.data?.message);
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
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
    const token = inputOTPData.token;
    const role = inputOTPData.userData.role;
    dispatch(setPassword(formData, token, role, navigate));
  };
  localStorage.clear('root');
  return (
    <div className="flex flex-row items-center md:gap-16 px-8 md:px-16 py-14 bg-grey-white">
      <div className="w-1/2 hidden md:flex md:justify-center">
        <LeftContentAuth/>
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl text-dark ">Halo, Pewpeople</h1>
          <p className="text-xl text-dark-grey tracking-wide ">
            Masukkan Password baru
          </p>
        </div>
        <AlertSubmit isError={isError} isSuccess={isSuccess} />
        <Alert error={error} isError="Password tidak cocok !" isSuccess="Password cocok !" />
        <form onSubmit={handleSubmit} id="formSubmit" className="flex flex-col gap-14">
          <PasswordInput
            text="New Password"
            name="password"
            placeholder="Masukan Password"
            onChange={onChange}
            autoComplete="current-password"
          />
          <PasswordInput
            text="Confirmation Password"
            name="confirmPassword"
            placeholder="Masukan New Password"
            onChange={onChange}
            autoComplete="current-confirmPassword"
          />
          <div>
            <Button className="bg-yellow hover:bg-[#db9709]" isLoading={isLoading}>
              Reset Password
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputNewPassword;
