import { Loading } from './Loading';

const Button = ({ children, className, isLoading }) => {
  return (
    <div>
      <button
        type="submit"
        className={`md:min-w-24 w-full p-3 font-semibold text-white rounded-md transition duration-300 ease-in-out active:scale-75 ${className}`}>
        {isLoading ? (
          <div className="flex flex-row items-center justify-center">
            <Loading type="bubbles" color="white" height={30} width={30} />
          </div>
        ) : (
          children
        )}
      </button>
    </div>
  );
};

const ButtonPurple = ({ text }) => {
  return (
    <div>
      <button
        type="submit"
        className="md:min-w-24 w-full p-3 bg-primary font-semibold text-white rounded-md hover:bg-[#483d7e] transition duration-300 ease-in-out active:scale-75">
        {text}
      </button>
    </div>
  );
};
const ButtonYellow = ({ text }) => {
  return (
    <div>
      <button
        type="submit"
        className="w-full p-3 bg-yellow font-semibold text-white rounded-md hover:bg-[#db9709] transition duration-300 ease-in-out active:scale-75">
        {text}
      </button>
    </div>
  );
};

const ButtonWhite = ({ text, className }) => {
  return (
    <div>
      <button
        type="submit"
        className={`outline outline-offset-2 outline-1 w-full p-3 bg-white font-semibold text-[#5E50A1] rounded-md hover:bg-grey-white transition duration-300 ease-in-out active:scale-75 ${className}`}>
        {text}
      </button>
    </div>
  );
};

export { Button, ButtonPurple, ButtonYellow, ButtonWhite };
