import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const TextInput = ({ type, text, name, placeholder, onChange, autoComplete }) => {
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
      />
    </div>
  );
};

const PasswordInput = ({ name, text, placeholder, onChange, autoComplete }) => {
  const [password, setPassword] = useState('');
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
          value={password}
          placeholder={placeholder}
          onChange={(e) => {
            setPassword(e.target.value);
            onChange(e);
          }}
          autoComplete={autoComplete}
          className="w-full bg-white border border-light-grey rounded-md p-3 placeholder:text-[#858D96] active:border focus:border-dark-grey"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 px-3 py-2 flex items-center"
        >
          {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </button>
      </div>
    </div>
  );
}

export {TextInput, PasswordInput};
