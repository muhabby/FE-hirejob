const ButtonPurple = ({ text }) => {
  return (
    <div>
      <button
        type="submit"
        className="md:min-w-24 w-full p-3 bg-primary font-semibold text-white rounded-md hover:bg-[#483d7e] transition duration-300 ease-in-out active:scale-75"
      >
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
        className="w-full p-3 bg-yellow font-semibold text-white rounded-md hover:bg-[#db9709] transition duration-300 ease-in-out active:scale-75"
      >
        {text}
      </button>
    </div>
  );
};

export { ButtonPurple, ButtonYellow };
