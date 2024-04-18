
};
const ButtonYellow = ({ text, className }) => {
    return (
        <div>
            <button
                type="submit"
                className={`w-full p-3 bg-yellow font-semibold text-white rounded-md hover:bg-[#db9709] transition duration-300 ease-in-out active:scale-75 ${className}`}
            >
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
                className={`outline outline-offset-2 outline-1 w-full p-3 bg-white font-semibold text-[#5E50A1] rounded-md hover:bg-grey-white transition duration-300 ease-in-out active:scale-75 ${className}`}
            >
                {text}
            </button>
        </div>
    );
};