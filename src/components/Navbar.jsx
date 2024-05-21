import { FiBell, FiMail } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import LogoPurple from '../assets/logo-purple.svg';
import NavbarPhoto from '../assets/navbar-photo.svg';
import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const navigate = useNavigate();
  const userRole = useSelector((state) => state.login.user.userData.role);
  console.log(userRole)
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getEditProfileLink = () => {
    if (userRole === 'recruiter') {
      navigate("/editcompany");
    } else {
      navigate("/editworker");
    }
  };

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
            className="p-2 m-2 rounded-full bg-white hover:bg-primary hover:text-white hover:shadow-lg active:shadow-inner">
            <FiBell size={20} className="transition duration-300 ease-in-out active:scale-75" />
          </Link>
          <Link
            to="/"
            className="p-2 m-2 rounded-full bg-white hover:bg-primary hover:text-white hover:shadow-lg active:shadow-inner">
            <FiMail size={20} className="transition duration-300 ease-in-out active:scale-75" />
          </Link>
          <button
            type="button"
            onClick={toggleDropdown}
            aria-haspopup="true"
            aria-expanded={isOpen ? 'true' : 'false'}
            className="rounded-full hover:drop-shadow-xl hover:shadow-purple active:shadow-inner">
            <img
              src={NavbarPhoto}
              className="w-8 rounded-full transition duration-300 ease-in-out active:scale-75"
            />
          </button>

          {/* button */}
          <div className="w-full md:w-auto relative inline-block text-left">
            {/* option  */}
            <Transition
              show={isOpen}
              enter="transition ease-out duration-100 transform"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-75 transform"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1">
              <div
                className="absolute mt-6 left-0 transform -translate-x-1/2 w-[200px] rounded-md shadow-lg bg-white p-4"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu">
                <div className="flex flex-col gap-4 py-1" role="none">
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-grey hover:text-dark-grey hover:bg-light-grey"
                    onClick={getEditProfileLink}>
                    Edit Profile
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-grey hover:text-dark-grey hover:bg-light-grey"
                    onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
