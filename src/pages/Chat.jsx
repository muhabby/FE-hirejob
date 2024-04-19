import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import company from '../assets/image/company.jpeg';
import { ButtonWhite } from '../components/Button';
import { TextInput } from '../components/Input';
import { BsSend } from 'react-icons/bs';
const Chat = () => {
  return (
    <main>
      <Navbar />
      <body className=" mx-48 my-7 flex justify-between">
        <section className="w-[450px] h-[800px] shadow-lg rounded-sm ">
          <h1 className="text-[#1f2a36] text-xl font-semibold m-5">Messages</h1>
          <hr className="text-[#E2E5ED] shadow-2xl" />

          <div className=" h-[76vh] flex flex-col overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
            <div className="flex items-center bg-white px-5 w-full h-[75px] space-x-5 hover:bg-light-grey cursor-pointer ">
              <div>
                <img src={company} alt="" width={60} className="rounded-full" />
              </div>
              <div>
                <h1 className="font-semibold">PT Softhouse</h1>
                <p className="text-[#9B9B9B]">Fulltime Frontend Developer</p>
              </div>
            </div>
            <div className="flex items-center bg-white px-5 w-full h-[75px] space-x-5 hover:bg-light-grey cursor-pointer ">
              <div>
                <img src={company} alt="" width={60} className="rounded-full" />
              </div>
              <div>
                <h1 className="font-semibold">PT Sea</h1>
                <p className="text-[#9B9B9B]">Fulltime Frontend Developer</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-[990px] h-[800px] shadow-lg rounded-sm ">
          <div className="flex justify-between items-center px-3 bg-white h-[75px] border-b-[1px] border-yellow shadow-md">
            <div className="flex items-center space-x-3">
              <img src={company} alt="" width={55} className="rounded-full" />
              <h1>PT Softhouse</h1>
            </div>
            <h1 className="text-[#9B9B9B]">Fulltime Frontend Developer</h1>
            <ButtonWhite className={'outline-none hover:bg-grey-white'} text={'Detail Profile'} />
          </div>

          {/* {Message layout} */}
          <div className=" h-4/5 flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
            {/* {First Message} */}
            <div className="flex h-full">
              <div className="flex items-end">
                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                  <div>
                    <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-grey-white text-grey">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, est! Odio
                      sint, delectus pariatur iste tempora reprehenderit quibusdam, debitis,
                      deleniti cupiditate eius nemo veniam. Velit optio praesentium in quod id sint
                      quas blanditiis earum. Delectus hic unde iusto debitis et id, odit, officia
                      assumenda dolorum vitae doloremque iure aperiam alias.
                    </span>
                  </div>
                </div>
                <img src={company} alt="" width={40} className="rounded-full order-1" />
              </div>
            </div>

            {/* {Second Message} */}
            <div className="flex items-end  justify-end">
              <div className="flex items-end justify-end w-6/12">
                <div className="flex text-xs gap-2 mx-2 order-2 items-end ">
                  <img src={company} alt="" width={40} className="rounded-full order-1" />
                  <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-grey-white text-grey">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea voluptatum
                    voluptate dolorum sit incidunt hic rerum veniam perspiciatis pariatur enim
                    impedit doloribus inventore, sint laudantium quia necessitatibus ipsum
                    voluptatem iure porro amet nihil quidem laboriosam. Eius rerum, error aperiam
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[80px] items-center space-x-3 border-t-[1px] border-yellow pt-5 pb-5 rounded-b-md">
            <div className=" w-11/12">
              <TextInput className={'rounded-3xl ml-3 pl-7'} placeholder={'type message...'} />
            </div>
            <div className="flex items-center">
              <button
                type="submit"
                className="rounded-full bg-[#5E50A1] w-[50px] h-[50px] flex justify-center items-center hover:bg-yellow"
              >
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
      </body>
      <Footer />
    </main>
  );
};

export default Chat;
