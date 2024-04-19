import { FiBell, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import LogoPurple from '../assets/logo-purple.svg';
import NavbarPhoto from '../assets/navbar-photo.svg';

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center px-5 py-4 lg:px-16 md:py-5 2xl:px-48">
        <Link to="/" className="py-2">
          <img
            src={LogoPurple}
            className="w-28 text-center transition duration-300 ease-in-out active:scale-75"
          />
        </Link>
        <div className="flex flex-row gap-6 items-center justify-center text-grey">
          <Link
            to="/"
            className="p-2 m-2 rounded-full bg-white hover:bg-primary hover:text-white hover:shadow-lg active:shadow-inner"
          >
            <FiBell size={20} className="transition duration-300 ease-in-out active:scale-75" />
          </Link>
          <Link
            to="/"
            className="p-2 m-2 rounded-full bg-white hover:bg-primary hover:text-white hover:shadow-lg active:shadow-inner"
          >
            <FiMail size={20} className="transition duration-300 ease-in-out active:scale-75" />
          </Link>
          <Link
            to="/"
            className="rounded-full hover:drop-shadow-xl hover:shadow-purple active:shadow-inner"
          >
            <img
              src={NavbarPhoto}
              className="w-8 rounded-full transition duration-300 ease-in-out active:scale-75"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
