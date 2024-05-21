import Navbar from '../components/Navbar';
import PhotoProfile from '../assets/photo-profile.svg';
import company from '../assets/image/company.jpeg';
import Footer from '../components/Footer';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { TextInput } from '../components/Input';
import { Button } from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataById } from '../redux/action/fetchAction';
import { ButtonWhite } from '../components/Button';
import { BsSend } from 'react-icons/bs';

const MyChat = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const workerDataById = useSelector((state) => state.fetchReducer.workerbyidData?.data);
  const skillsDataById = useSelector((state) => state.fetchReducer.skillsbyidData?.data);
  const cityDataById = useSelector((state) => state.fetchReducer.citybyidData?.data);
  useEffect(() => {
    dispatch(fetchDataById('worker', 'workerbyid', id));
    dispatch(fetchDataById('skills', 'skillsbyid', id));
    dispatch(fetchDataById('city', 'citybyid', workerDataById?.city_id));
    dispatch(fetchDataById('contact', 'contactbyid', id));
  }, [dispatch, id, workerDataById]);

  const skillData = skillsDataById?.skill_name?.split(', ');
  window.scroll(0, 0);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row bg-grey-white gap-20 px-5 pt-8 pb-[200px] lg:px-16 md:pt-16 md:pb-[700px] 2xl:px-48">
        {/* list user message  */}
        <section className="w-[450px] h-[800px] bg-white shadow-lg rounded-xl ">
          <h1 className="text-[#1f2a36] text-xl font-semibold mx-5 my-6">Messages</h1>
          <hr className="text-[#E2E5ED] shadow-2xl" />

          <div className="h-[720px] flex flex-col overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
            {/* item message */}
            <div className="flex items-center bg-white px-5 py-3 w-full space-x-5 hover:bg-light-grey cursor-pointer ">
              <div>
                <img src={company} alt="" width={60} className="rounded-full" />
              </div>
              <div>
                <h1 className="font-semibold">PT Softhouse</h1>
                <p className="text-[#9B9B9B]">Fulltime Frontend Developer</p>
              </div>
            </div>
            <div className="flex items-center bg-white px-5 py-3 w-full space-x-5 hover:bg-light-grey cursor-pointer ">
              <div>
                <img src={company} alt="" width={60} className="rounded-full" />
              </div>
              <div>
                <h1 className="font-semibold">PT Softhouse</h1>
                <p className="text-[#9B9B9B]">Fulltime Frontend Developer</p>
              </div>
            </div>
            <div className="flex items-center bg-white px-5 py-3 w-full space-x-5 hover:bg-light-grey cursor-pointer ">
              <div>
                <img src={company} alt="" width={60} className="rounded-full" />
              </div>
              <div>
                <h1 className="font-semibold">PT Softhouse</h1>
                <p className="text-[#9B9B9B]">Fulltime Frontend Developer</p>
              </div>
            </div>
            <div className="flex items-center bg-white px-5 py-3 w-full space-x-5 hover:bg-light-grey cursor-pointer ">
              <div>
                <img src={company} alt="" width={60} className="rounded-full" />
              </div>
              <div>
                <h1 className="font-semibold">PT Softhouse</h1>
                <p className="text-[#9B9B9B]">Fulltime Frontend Developer</p>
              </div>
            </div>
            <div className="flex items-center bg-white px-5 py-3 w-full space-x-5 hover:bg-light-grey cursor-pointer ">
              <div>
                <img src={company} alt="" width={60} className="rounded-full" />
              </div>
              <div>
                <h1 className="font-semibold">PT Softhouse</h1>
                <p className="text-[#9B9B9B]">Fulltime Frontend Developer</p>
              </div>
            </div>
            <div className="flex items-center bg-white px-5 py-3 w-full space-x-5 hover:bg-light-grey cursor-pointer ">
              <div>
                <img src={company} alt="" width={60} className="rounded-full" />
              </div>
              <div>
                <h1 className="font-semibold">PT Softhouse</h1>
                <p className="text-[#9B9B9B]">Fulltime Frontend Developer</p>
              </div>
            </div>
            <div className="flex items-center bg-white px-5 py-3 w-full space-x-5 hover:bg-light-grey cursor-pointer ">
              <div>
                <img src={company} alt="" width={60} className="rounded-full" />
              </div>
              <div>
                <h1 className="font-semibold">PT Softhouse</h1>
                <p className="text-[#9B9B9B]">Fulltime Frontend Developer</p>
              </div>
            </div>
            <div className="flex items-center bg-white px-5 py-3 w-full space-x-5 hover:bg-light-grey cursor-pointer ">
              <div>
                <img src={company} alt="" width={60} className="rounded-full" />
              </div>
              <div>
                <h1 className="font-semibold">PT Softhouse</h1>
                <p className="text-[#9B9B9B]">Fulltime Frontend Developer</p>
              </div>
            </div>
            <div className="flex items-center bg-white px-5 py-3 w-full space-x-5 hover:bg-light-grey cursor-pointer ">
              <div>
                <img src={company} alt="" width={60} className="rounded-full" />
              </div>
              <div>
                <h1 className="font-semibold">PT Softhouse</h1>
                <p className="text-[#9B9B9B]">Fulltime Frontend Developer</p>
              </div>
            </div>
            {/* ====  */}
          </div>
        </section>

        {/* content message  */}
        <section className="w-full h-[800px] bg-white rounded-xl overflow-clip">
          <div className="flex justify-between items-center px-3 bg-white h-[75px]">
            <div className="flex items-center space-x-3">
              <img src={company} alt="" width={55} className="rounded-full" />
              <h1>PT Softhouse</h1>
            </div>
            <h1 className="text-[#9B9B9B]">Fulltime Frontend Developer</h1>
            <ButtonWhite className={'outline-none hover:bg-grey-white'} text={'Detail Profile'} />
          </div>
          <hr className="text-[#E2E5ED] shadow-2xl" />

          {/* {Message layout} */}
          <div className="h-[640px] flex flex-col-reverse gap-3 space-y-4 p-5 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
            
            {/* {First Message} */}
            <div className="flex gap-2 mx-2 order-2 items-start justify-start ">
              <img src={company} alt="" width={40} className="rounded-full" />
              <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-grey-white text-grey">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
            {/* {Second Message} */}
            <div className="flex gap-2 mx-2 order-2 items-end justify-end ">
              <img src={company} alt="" width={40} className="rounded-full order-1" />
              <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-grey-white text-grey">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </span>
            </div>

          </div>

          {/* input message */}
          <hr className="text-[#E2E5ED] shadow-2xl" />
          <div className="flex h-[80px] items-center space-x-3 pt-5 pb-5 rounded-b-md">
            <div className=" w-11/12">
              <TextInput className={'rounded-3xl ml-3 pl-7'} placeholder={'type message...'} />
            </div>
            <div className="flex items-center">
              <button
                type="submit"
                className="rounded-full bg-[#5E50A1] w-[50px] h-[50px] flex justify-center items-center hover:bg-yellow">
                <BsSend
                  style={{
                    fontSize: 25,
                    color: 'white'
                  }}
                />
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default MyChat;