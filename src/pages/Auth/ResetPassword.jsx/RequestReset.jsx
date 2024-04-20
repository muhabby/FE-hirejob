import { useState, useEffect } from 'react';
import photoAuth from '../../../assets/photo-auth.svg';
import { Button } from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import { EmailInput } from '../../../components/Input';
import { useDispatch, useSelector } from 'react-redux';
import { requestOTP } from '../../../redux/action/auth';
import { AlertSubmit } from '../../../components/Alert';

const RequestReset = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isError = useSelector((state) => state.requestOTP.error);
  const isLoading = useSelector((state) => state.requestOTP.loading);
  const isSuccess = useSelector((state) => state.register.data?.message);
  const [formData, setFormData] = useState({
    email: ''
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
    console.log(formData);
    dispatch(requestOTP(formData, navigate));
  };

  return (
    <div className="flex flex-row items-center md:gap-16 px-8 md:px-16 py-14 bg-grey-white">
      <div className="w-1/2 hidden md:flex md:justify-center">
        <img src={photoAuth} />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl text-dark ">Halo, Pewpeople</h1>
          <p className="text-xl text-dark-grey tracking-wide ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus
            auctor.
          </p>
        </div>
        <AlertSubmit isError={isError} isSuccess={isSuccess} />
        <form onSubmit={handleSubmit} id="formSubmit" className="flex flex-col gap-14">
          <EmailInput
            text="Email"
            name="email"
            placeholder="Masukan alamat email"
            onChange={onChange}
            autoComplete="current-email"
          />
          <div className="">
            <Button className="bg-yellow hover:bg-[#db9709]" isLoading={isLoading}>
              Send password reset 
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestReset;
