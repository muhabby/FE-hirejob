import { useEffect, useState } from 'react'
import photoAuth from '../../../assets/photo-auth.svg'
import { Button } from '../../../components/Button'
import { PasswordInput } from "../../../components/Input";
import Alert from "../../../components/Alert";

const InputNewPassword = () => {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState();

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  useEffect(() => {
    if(formData.password !== '' && formData.confirmPassword !== '') {
      if(formData.password !== formData.confirmPassword) {
        setError(true)
      } else {
        setError(false)
      }
    }
  }, [formData])
  // console.log(formData)

  return (
    <div className="flex flex-row items-center md:gap-16 px-8 md:px-16 py-14 bg-grey-white">
      <div className="w-1/2 hidden md:flex md:justify-center">
        <img src={photoAuth} />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-5">
        <div className='flex flex-col gap-4'>
          <h1 className='text-4xl text-dark '>Halo, Pewpeople</h1>
          <p className='text-xl text-dark-grey tracking-wide '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
        </div>
        <Alert 
          error={error}
          isError="Password tidak cocok !"
          isSuccess="Password cocok !"
        />
        <form id='formSubmit' className='flex flex-col gap-14'>
          <PasswordInput 
            text="New Password"
            name='password'
            placeholder='Masukan Password'
            onChange={onChange}
            autoComplete="current-password"
          />
          <PasswordInput 
            text="Confirmation Password"
            name='confirmPassword'
            placeholder='Masukan New Password'
            onChange={onChange}
            autoComplete="current-confirmPassword"
          />
          <div>
            <Button className="bg-yellow hover:bg-[#db9709]">Reset Password</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default InputNewPassword
