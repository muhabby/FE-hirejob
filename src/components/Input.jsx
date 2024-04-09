import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const TextInput = ({ text, name, placeholder, onChange, autoComplete }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="pl-1 text-grey text-sm">{text}</label>
      <input
        type='text'
        id={name}
        name={name}
        placeholder={placeholder}
        className="bg-white border border-light-grey rounded-md p-3 placeholder:text-[#858D96] active:border focus:border-dark-grey"
        onChange={onChange}
        autoComplete={autoComplete}
        required
      />
    </div>
  );
};

const PasswordInput = ({ name, text, placeholder, onChange, autoComplete }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="pl-1 text-grey text-sm">{text}</label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          autoComplete={autoComplete}
          className="w-full bg-white border border-light-grey rounded-md p-3 placeholder:text-[#858D96] active:border focus:border-dark-grey"
          required
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute bg-white rounded-r-md inset-y-[0.7px] right-[0.7px] px-4 py-1 flex items-center"
        >
          {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </button>
      </div>
    </div>
  );
}

const EmailInput = ({ text, name, placeholder, onChange, autoComplete }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="pl-1 text-grey text-sm">{text}</label>
      <input
        type='email'
        id={name}
        name={name}
        placeholder={placeholder}
        className="bg-white border border-light-grey rounded-md p-3 placeholder:text-[#858D96] active:border focus:border-dark-grey"
        onChange={onChange}
        autoComplete={autoComplete}
        required
      />
    </div>
  );
};

const BoxInput = ({ text, name, placeholder, onChange, autoComplete }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="pl-1 text-grey text-sm">{text}</label>
      <textarea
        rows="4" 
        cols="50"
        id={name}
        name={name}
        placeholder={placeholder}
        className="bg-white border border-light-grey rounded-md p-3 placeholder:text-[#858D96] active:border focus:border-dark-grey"
        onChange={onChange}
        autoComplete={autoComplete}
        required
      />
    </div>
  );
};

export { TextInput, PasswordInput, EmailInput, BoxInput };
