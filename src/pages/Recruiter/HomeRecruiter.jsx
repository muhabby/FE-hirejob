import { FiSearch } from "react-icons/fi";
import { MdArrowDropDown } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { ButtonPurple } from "../../components/Button";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import PhotoProfile from "../../assets/photo-profile.svg"
import HomeCard from "../../components/HomeCard";
import LogoWhite from "../../assets/logo-white.svg"

const HomeRecruiter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div>
      {/* Navbar  */}
      <Navbar />
      <div className="flex flex-col items-center bg-grey-white gap-10 px-5 py-8 lg:px-16 md:py-16 2xl:px-48">
        <div className="w-full flex flex-col md:flex-row gap-2 items-center bg-white shadow p-2 rounded-lg">
          {/* input search  */}
          <div className="w-full relative">
            <input
              type="text"
              placeholder="Search for any skill"
              className="w-full p-3 placeholder:text-grey"
            />
            <FiSearch size={25} className="absolute right-3 top-3 text-grey" />
          </div>
          {/* Line  */}
          <div className="hidden md:block h-12 py-1 border-[0.4px] border-grey rounded-full "></div>
          <div className="block md:hidden w-full px-1 border-[0.4px] border-light-grey rounded-full "></div>
          {/* button select  */}
          <div className="w-full md:w-auto flex flex-row items-center gap-2">
            <div className="w-full md:w-auto relative inline-block text-left">
              {/* button select  */}
              <div>
                <button
                  type="button"
                  onClick={toggleDropdown}
                  aria-haspopup="true"
                  aria-expanded={isOpen ? "true" : "false"}
                  className="w-full md:w-28 py-2 flex flex-row items-center justify-center gap-1 text-grey"
                >
                  <MdArrowDropDown size={25} />
                  Sort
                </button>
              </div>
              {/* option  */}
              <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <div
                  className="absolute mt-6 left-1/2 transform -translate-x-1/2 w-56 rounded-md shadow-lg bg-white"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div className="py-1" role="none">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-light-grey"
                      role="menuitem"
                      onClick={() => handleOptionSelect("Pilihan 1")}
                    >
                      Pilihan 1
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-light-grey"
                      role="menuitem"
                      onClick={() => handleOptionSelect("Pilihan 2")}
                    >
                      Pilihan 2
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-light-grey"
                      role="menuitem"
                      onClick={() => handleOptionSelect("Pilihan 3")}
                    >
                      Pilihan 3
                    </a>
                  </div>
                </div>
              </Transition>
            </div>
            <ButtonPurple text="Search" />
          </div>
        </div>
        {/* Content  */}
        <div className="w-full bg-white shadow rounded-lg">
          <div>
            <HomeCard />
            <div className="w-full border border-light-grey"></div>
          </div>
          <div>
            <HomeCard />
            <div className="w-full border border-light-grey"></div>
          </div>
          <div>
            <HomeCard />
            <div className="w-full border border-light-grey"></div>
          </div>
        </div>
      </div>

      {/* Footer  */}
      <div className="flex flex-col bg-primary text-white gap-10 px-5 pt-8 pb-4 lg:px-16 md:pt-16 md:pb-6 2xl:px-48">
        <div className="w-full md:w-1/4">
          <img src={LogoWhite} className="w-40" />
          <div className="text-md mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</div>
        </div>
        <div className="w-full border border-white rounded-full"></div>
        <div className="flex flex-row justify-between">
          <div className="w-1/2">
            <p>2020 Pewworld. All right reserved</p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:gap-10 lg:gap-24">
            <p>Telepon</p>
            <p>Email</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRecruiter;
