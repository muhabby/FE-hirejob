import Navbar from '../../components/Navbar';
import PhotoProfile from '../../assets/photo-profile.svg';
import Portfolio1 from '../../assets/portfolio1.svg';
import Tokped from '../../assets/tokped.svg';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiInstagram, FiGithub, FiGitlab, FiMail } from 'react-icons/fi';
import Footer from '../../components/Footer';
import { Button } from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataById } from '../../redux/action/fetchAction';

const Portfolio = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const workerDataById = useSelector((state) => state.fetchReducer.workerbyidData?.data);
  const skillsDataById = useSelector((state) => state.fetchReducer.skillsbyidData?.data);
  const portfolioDataById = useSelector((state) => state.fetchReducer.portfoliobyidData?.data);
  const experienceDataById = useSelector((state) => state.fetchReducer.experiencebyidData?.data);
  const cityDataById = useSelector((state) => state.fetchReducer.citybyidData?.data);
  const contactDataById = useSelector((state) => state.fetchReducer.contactbyidData?.data[0]);
  useEffect(() => {
    dispatch(fetchDataById('worker', 'workerbyid', id));
    dispatch(fetchDataById('skills', 'skillsbyid', id));
    dispatch(fetchDataById('portofolio', 'portfoliobyid', id));
    dispatch(fetchDataById('workExperience', 'experiencebyid', id));
    dispatch(fetchDataById('city', 'citybyid', workerDataById?.city_id));
    dispatch(fetchDataById('contact', 'contactbyid', id));
  }, [dispatch, id]);
  const skillData = skillsDataById?.skill_name?.split(', ');

  const experience = [
    {
      image: Tokped,
      position: 'Engineer',
      job_place: 'Tokopedia',
      start_work: '1561939200',
      end_work: '1577836800',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.'
    },
    {
      image: Tokped,
      position: 'Front-end Web',
      job_place: 'Toko Biru',
      start_work: '1561939200',
      end_work: '1577836800',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.'
    }
  ];

  const experiencesWithDates = experience?.map((exp) => {
    const startDate = new Date(Number(exp.start_work) * 1000);
    const endDate = new Date(Number(exp.end_work) * 1000);

    const options = {
      year: 'numeric',
      month: 'long'
    };

    const startDateFormat = startDate.toLocaleDateString('en-US', options);
    const endDateFormat = endDate.toLocaleDateString('en-US', options);

    const diffInMonths =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      endDate.getMonth() -
      startDate.getMonth();

    const duration = diffInMonths > 1 ? `${diffInMonths} months` : `1 month`;

    return {
      ...exp,
      start_work: startDateFormat,
      end_work: endDateFormat,
      duration: duration
    };
  });
  // Dummy Data

  return (
    <div className="relative">
      <Navbar />
      {/* Content Left  */}
      <div className="relative flex flex-col md:flex-row bg-grey-white z-10 gap-28 px-5 py-8 lg:px-16 md:py-28 2xl:px-48">
        <div className="bg-primary h-[340px] w-full absolute top-0.5 left-0 -z-10"></div>
        <div className="w-full md:w-1/3 bg-white rounded-md p-6 mt-4 flex flex-col gap-20 ">
          <div className="flex flex-col items-start gap-4 mb-10">
            <div className="w-full flex flex-row justify-center">
              <img src={workerDataById?.photo} className="w-40 h-40 rounded-full" />
            </div>
            <h1 className="text-2xl font-semibold">{workerDataById?.name}</h1>
            <p className="text-grey">{workerDataById?.job_desk}</p>
            <div className="flex flex-row items-center gap-3 text-grey">
              <HiOutlineLocationMarker size={25} />
              <p>
                {cityDataById?.city_name}, {cityDataById?.province_name}
              </p>
            </div>
            <p className="text-grey">{workerDataById?.bio}</p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold">Skill</h1>
            <div className="flex flex-wrap gap-4 items-center">
              {skillData?.map((item, index) => (
                <label
                  key={index}
                  className="w-auto bg-yellow bg-opacity-60 border-yellow text-white text-sm text-center rounded-lg border py-2 px-5">
                  {item}
                </label>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-row items-center gap-5 text-grey">
              <FiMail size={30} />
              <p>{contactDataById?.email}</p>
            </div>
            <div className="flex flex-row items-center gap-5 text-grey">
              <FiInstagram size={30} />
              <p>{contactDataById?.instagram}</p>
            </div>
            <div className="flex flex-row items-center gap-5 text-grey">
              <FiGithub size={30} />
              <p>{contactDataById?.github}</p>
            </div>
            <div className="flex flex-row items-center gap-5 text-grey">
              <FiGitlab size={30} />
              <p>{contactDataById?.gitlab}</p>
            </div>
          </div>
          <Link to={`/hire/${id}`}>
            <Button className="bg-primary hover:bg-[#483d7e]">Hire</Button>
          </Link>
        </div>
        {/* Content Right  */}
        <div className="w-full bg-white rounded-md px-6 py-10 flex flex-col gap-20">
          {/* Portfolio  */}
          <div className="flex flex-col items-start gap-8">
            <h1 className="font-semibold text-2xl">
              Portofolio
              <hr className="bg-primary h-1 rounded-full mt-2" />
            </h1>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4">
              {portfolioDataById?.map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <img src={item?.photo} alt="..." className="w-80 rounded-md" />
                  <Link to={item?.link_repo} className="hover:text-primary">
                    {item.type}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* Experience  */}
          <div className="w-11/12 flex flex-col items-start">
            <h1 className="font-semibold text-2xl">
              Pengalaman kerja
              <hr className="bg-primary h-1 rounded-full mt-2" />
            </h1>
            <div className="flex flex-col gap-4 mt-8">
              {experienceDataById?.map((item, index) => (
                <div key={index} className="flex flex-col gap-4 md:flex-row md:gap-8">
                  <div className="min-w-32">
                    <img src={item.photo} alt="..." className="w-20 md:w-28 ml-2" />
                  </div>
                  <div className="flex flex-col gap-4 md:gap-8">
                    <div className="flex flex-col gap-2">
                      <h1 className="font-semibold text-xl md:text-2xl">{item.position}</h1>
                      <p className="font-base text-lg md:text-xl">{item.company_name}</p>
                      <label className="font-base text-base md:text-lg text-grey flex flex-col md:flex-row gap-2 md:gap-8">
                        {item.working_start_at} - {item.working_end_at} <p>6 month</p>
                      </label>
                    </div>
                    <p className="text-base md:text-lg">{item.description}</p>
                    <div className="w-full bg-[#E2E5ED] h-[1px]"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
