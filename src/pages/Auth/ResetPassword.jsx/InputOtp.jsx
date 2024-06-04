import { useState } from 'react';
import { Button } from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import { TextInput } from '../../../components/Input';
import { useDispatch, useSelector } from 'react-redux';
import { inputOTP } from '../../../redux/action/auth';
import { AlertSubmit } from '../../../components/Alert';
import photoAuth from '../../../assets/photo-auth.svg';
import LeftContentAuth from '../../../components/LeftContentAuth';

const InputOtp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailData = useSelector((state) => state.requestOTP.data?.email);
  const isError = useSelector((state) => state.inputOTP.error);
  const isLoading = useSelector((state) => state.inputOTP.loading);
  const isSuccess = useSelector((state) => state.inputOTP.data?.message);
  const [formData, setFormData] = useState({
    email: emailData,
    otp: ''
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
    dispatch(inputOTP(formData, navigate));
  };

  return (
    <div className="flex flex-row items-center md:gap-16 px-8 md:px-16 py-14 bg-grey-white">
      <div className="w-1/2 hidden md:flex md:justify-center">
        <LeftContentAuth />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl text-dark ">Halo, Pewpeople</h1>
          <p className="text-xl text-dark-grey tracking-wide ">
            Masukkan OTP yang sudah dikirim ke email
          </p>
        </div>
        <AlertSubmit isError={isError} isSuccess={isSuccess} />
        <form onSubmit={handleSubmit} id="formSubmit" className="flex flex-col gap-14">
          <TextInput
            text="Otp"
            name="otp"
            placeholder="Masukan OTP"
            onChange={onChange}
            autoComplete="current-otp"
          />
          <div>
            <Button className="bg-yellow hover:bg-[#db9709]" isLoading={isLoading}>
              Go To Change Password
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputOtp;
