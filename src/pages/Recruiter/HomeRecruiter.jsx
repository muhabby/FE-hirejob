import { FiSearch } from "react-icons/fi";
import { MdArrowDropDown } from "react-icons/md";
import { ButtonPurple } from "../../components/Button";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import HomeCard from "../../components/HomeCard";
import Pagination from "../../components/Pagination";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PhotoProfile from "../../assets/photo-profile.svg";

const HomeRecruiter = () => {
  const user_worker = [
    {
      image: PhotoProfile,
      name: 'Louis Tomlinson',
      position: 'Web developer',
      province: 'Jawa Tengah',
      city: 'Purwokerto',
      skill: 'PHP, Javascript, React, NextJS, Tailwind, PostgreSQL, MySQL'
    },
    {
      image: PhotoProfile,
      name: 'Kijaru',
      position: 'Front-End Web',
      province: 'DKI Jakarta',
      city: 'Jakarta Timur',
      skill: 'Javascript, React, NextJS, Tailwind, PostgreSQL'
    },
    {
      image: PhotoProfile,
      name: 'Tom Holland',
      position: 'Full-stack Developer',
      province: 'DKI Jakarta',
      city: 'Jakarta Barat',
      skill: 'PHP, Javascript, React, Tailwind, PostgreSQL'
    },
    {
      image: PhotoProfile,
      name: 'Viky Ranbasi',
      position: 'Back-end Developer',
      province: 'Jawa Barat',
      city: 'Bandung',
      skill: 'PHP, Tailwind, PostgreSQL'
    },
  ]

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = page => {
    setCurrentPage(page);
    // Tambahkan logika untuk memuat data sesuai halaman yang dipilih
  };

  const handlePagePrev = () => {
    if (currentPage == 1) {
      setCurrentPage(currentPage);
    } else {
      setCurrentPage(currentPage - 1);
    }
  }
  
  const handlePageNext = () => {
    if (currentPage == 10) { // ubah 10 ini jadi total page 
      setCurrentPage(currentPage);
    } else {
      setCurrentPage(currentPage + 1);
    }
  }

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
      <Header />
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
            {user_worker.map((item, index) => (
              <div key={index}>
                <HomeCard 
                  photo={item.image}
                  name={item.name}
                  position={item.position}
                  province={item.province}
                  city={item.city}
                  skill={item.skill}
                />
                <div className="w-full border border-light-grey"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination  */}
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          handlePagePrev={handlePagePrev}
          handlePageNext={handlePageNext}
        />
      </div>

      <Footer />
    </div>
  );
};

export default HomeRecruiter;
