import { FiBell, FiMail } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import LogoPurple from '../assets/logo-purple.svg';
import NavbarPhoto from '../assets/navbar-photo.svg';
import { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import PhotoDefault from '../assets/image/default_profile.png';
import NoNotification from '../assets/nothing-notif.svg';
import NoMessage from '../assets/nothing-chat.svg';
import { fetchDataById } from '../redux/action/fetchAction';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRole = useSelector((state) => state.login?.user?.userData?.role);
  const id = useSelector((state) => state.login?.user?.userData?.id_user);
  const recruiterPhoto = useSelector((state) => state.fetchReducer?.recruiterbyidData?.data?.photo);
  const workerPhoto = useSelector((state) => state.fetchReducer?.workerbyidData?.data?.photo);
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [isOpenMessage, setIsOpenMessage] = useState(false);
  const [isOpenNotification, setIsOpenNotification] = useState(false);

  useEffect(() => {
    console.log(userRole)
    if (userRole === 'recruiter') {
      dispatch(fetchDataById('recruiter', 'recruiterbyid', id));
    } else if (userRole === 'worker') {
      dispatch(fetchDataById('worker', 'workerbyid', id));
    }
  }, [userRole, id]);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const toggleDropdownProfile = () => {
    setIsOpenProfile(!isOpenProfile);
    setIsOpenMessage(false);
    setIsOpenNotification(false);
  };
  const toggleDropdownMessage = () => {
    setIsOpenProfile(false);
    setIsOpenMessage(!isOpenMessage);
    setIsOpenNotification(false);
  };
  const toggleDropdownNotification = () => {
    setIsOpenProfile(false);
    setIsOpenMessage(false);
    setIsOpenNotification(!isOpenNotification);
  };

  const getEditProfileLink = () => {
    if (userRole === 'recruiter') {
      navigate('/editcompany');
    } else {
      navigate('/editworker');
    }
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center px-5 py-4 lg:px-16 md:py-5 2xl:px-48">
        <Link to="/home" className="py-2">
          <img
            src={LogoPurple}
            className="w-28 text-center transition duration-300 ease-in-out active:scale-75"
          />
        </Link>
        <div className="flex flex-row gap-6 items-center justify-center text-grey">
          {/* pop up notification */}
          <div className="w-full md:w-auto relative inline-block text-left">
            {/* option  */}
            <Transition
              show={isOpenNotification}
              enter="transition ease-out duration-100 transform"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-75 transform"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1">
              <div
                className="absolute flex flex-col gap-2 items-center justify-center mt-6 left-28 top-6 transform -translate-x-1/2 z-50 w-[300px] h-[300px] rounded-md shadow-lg bg-white p-4"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu">
                <img
                  src={NoNotification}
                  className="w-[150px]"
                />
                <p>Belum ada Notifikasi !</p>
              </div>
            </Transition>
          </div>

          {/* pop up message */}
          <div className="w-full md:w-auto relative inline-block text-left">
            {/* option  */}
            <Transition
              show={isOpenMessage}
              enter="transition ease-out duration-100 transform"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-75 transform"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1">
              <div
                className="absolute flex flex-col gap-2 items-center justify-center mt-6 left-36 top-6 transform -translate-x-1/2 z-50 w-[300px] h-[300px] rounded-md shadow-lg bg-white p-4"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu">
                <img
                  src={NoMessage}
                  className="w-[150px]"
                />
                <p>Belum ada Message !</p>
              </div>
            </Transition>
          </div>

          {/* button link edit profile or logout */}
          <div className="w-full md:w-auto relative inline-block text-left">
            {/* option  */}
            <Transition
              show={isOpenProfile}
              enter="transition ease-out duration-100 transform"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-75 transform"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1">
              <div
                className="absolute mt-6 left-48 top-6 transform -translate-x-1/2 w-[200px] rounded-md shadow-lg bg-white p-4"
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
          <button
            type="button"
            onClick={toggleDropdownNotification}
            aria-haspopup="true"
            aria-expanded={isOpenNotification ? 'true' : 'false'}
            className="p-2 m-2 rounded-full bg-white hover:bg-primary hover:text-white hover:shadow-lg active:shadow-inner">
            <FiBell size={20} className="transition duration-300 ease-in-out active:scale-75" />
          </button>
          <button
            type="button"
            onClick={toggleDropdownMessage}
            aria-haspopup="true"
            aria-expanded={isOpenMessage ? 'true' : 'false'}
            className="p-2 m-2 rounded-full bg-white hover:bg-primary hover:text-white hover:shadow-lg active:shadow-inner">
            <FiMail size={20} className="transition duration-300 ease-in-out active:scale-75" />
          </button>
          <button
            type="button"
            onClick={toggleDropdownProfile}
            aria-haspopup="true"
            aria-expanded={isOpenProfile ? 'true' : 'false'}
            className="rounded-full hover:drop-shadow-xl hover:shadow-purple active:shadow-inner">
            <img
              src={recruiterPhoto || workerPhoto || PhotoDefault}
              className="w-8 rounded-full transition duration-300 ease-in-out active:scale-75"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
