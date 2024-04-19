import { useState } from 'react';
import photoAuth from '../../../assets/photo-auth.svg';
import { Button } from '../../../components/Button';
import { EmailInput, TextInput } from '../../../components/Input';
import Alert from '../../../components/Alert';

const InputOtp = () => {
  const [formData, setFormData] = useState({
    email: '',
    otp: '1234',
    confirmOtp: ''
  });
  const [error, setError] = useState();

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.otp !== formData.confirmOtp) {
      setError(true);
    } else {
      setError(false);
    }
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
        <Alert error={error} isError="Kode otp salah !" isSuccess="Kode otp benar !" />
        <form onSubmit={handleSubmit} id="formSubmit" className="flex flex-col gap-14">
          <EmailInput
            text="Email"
            name="email"
            placeholder="Masukan alamat email"
            onChange={onChange}
            autoComplete="current-email"
          />
          <TextInput
            text="Otp"
            name="confirmOtp"
            placeholder="Masukan OTP"
            onChange={onChange}
            autoComplete="current-confirmOtp"
          />
          <div>
            <Button className="bg-yellow hover:bg-[#db9709]">Go To Change Password</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputOtp;
