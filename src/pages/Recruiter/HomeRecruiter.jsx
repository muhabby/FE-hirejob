import React, { useEffect, useState, useRef } from 'react';
import { FiSearch } from 'react-icons/fi';
import { MdArrowDropDown } from 'react-icons/md';
import { Button } from '../../components/Button';
import { Transition } from '@headlessui/react';
import Navbar from '../../components/Navbar';
import HomeCard from '../../components/HomeCard';
import Pagination from '../../components/Pagination';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/action/fetchAction';

const HomeRecruiter = () => {
  const dispatch = useDispatch();
  const workerData = useSelector((state) => state.fetchReducer.workerData?.data);
  const paginationData = useSelector((state) => state.fetchReducer.workerData?.pagination);
  console.log(paginationData)
  const searchInput = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('createdAt');
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const [params, setParams] = useState({
    search: '',
    sort: 'ASC',
    sortBy: 'createdAt',
    limit: 4,
    page: 1
  });

  useEffect(() => {
    dispatch(fetchData('worker', params));
  }, [dispatch, params]);

  localStorage.clear();

  const handleSearch = () => {
    setParams({ ...params, search: searchInput.current.value, page: 1 });
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setParams((prevParams) => ({
      ...prevParams,
      page: page
    }));
  };

  const handlePagePrev = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      setParams((prevParams) => ({
        ...prevParams,
        page: prevPage
      }));
    }
  };

  const handlePageNext = () => {
    if (currentPage !== paginationData.page_total) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      setParams((prevParams) => ({
        ...prevParams,
        page: nextPage
      }));
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setParams((prevParams) => ({
      ...prevParams,
      sortBy: option,
      page: 1, // reset to page 1 when sorting changes
    }));
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
              name="search"
              placeholder="Search for any skill"
              className="w-full p-3 placeholder:text-grey"
              onKeyPress={handleKeyPress}
              ref={searchInput}
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
                  aria-expanded={isOpen ? 'true' : 'false'}
                  className="w-full md:w-28 py-2 flex flex-row items-center justify-center gap-1 text-grey">
                  <MdArrowDropDown size={25} />
                  Sort by
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
                leaveTo="opacity-0 translate-y-1">
                <div
                  className="absolute mt-2 w-56 rounded-md shadow-lg bg-white"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu">
                  <div className="py-1" role="none">
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-light-grey"
                      role="menuitem"
                      onClick={() => handleOptionSelect('name')}>
                      Sortir berdasarkan Name
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-light-grey"
                      role="menuitem"
                      onClick={() => handleOptionSelect('createdAt')}>
                      Sortir berdasarkan Tanggal
                    </button>
                  </div>
                </div>
              </Transition>
            </div>
            <Button className="bg-primary hover:bg-[#483d7e]" onClick={handleSearch}>
              Search
            </Button>
          </div>
        </div>
        {/* Content  */}
        <div className="w-full bg-white shadow rounded-lg">
          <div>
            {workerData?.map((item, index) => (
              <div key={index}>
                <HomeCard
                  to={`/portfolio/${item.user_id}`}
                  photo={item.photo}
                  name={item.name}
                  position={item.job_desk}
                  province={item.province_name}
                  city={item.city_name}
                  skill={item.skill_name}
                />
                <div className="w-full border border-light-grey"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination  */}
        <Pagination
          currentPage={currentPage}
          totalPages={paginationData.pageTotal}
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
