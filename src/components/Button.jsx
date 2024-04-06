const Button = ({ text }) => {
  return (
    <div>
      <div className="w-full p-3 bg-primary rounded-md md:w-48">
        <p className="font-semibold text-white text-center">{text}</p>
      </div>
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

export { Button, ButtonYellow };
