import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataByToken, fetchDataById } from '../redux/action/fetchAction';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContentMessage from '../components/ContentMessage';
import company from '../assets/image/company.jpeg';

const MyChat = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.login?.user);
  const messageDetails = useSelector((state) => state.fetchReducer?.messagedetailData?.data);
  const messages = useSelector((state) => state.fetchReducer?.messagebyidData?.data);
  const [room, setRoom] = useState('');

  // Fetch message details when user logs in
  useEffect(() => {
    dispatch(fetchDataByToken('messagedetail/user', 'messagedetail', userLogin.token));
  }, [dispatch, userLogin]);

  // Fetch messages when room changes
  useEffect(() => {
    if (room?.id_messagedetail) {
      dispatch(fetchDataById('message', 'messagebyid', room.id_messagedetail, userLogin.token));
    }
  }, [room, dispatch, userLogin]);

  const handleShowMessage = (data) => {
    setRoom(data);
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row bg-grey-white gap-20 px-5 pt-8 pb-[100px] lg:px-16 md:pt-16 2xl:px-48">
        {/* List of user messages */}
        <section className="w-[450px] h-[800px] bg-white shadow-lg rounded-xl">
          <h1 className="text-[#1f2a36] text-xl font-semibold mx-5 my-6">Messages</h1>
          <hr className="text-[#E2E5ED] shadow-2xl" />
          <div className="h-[720px] flex flex-col overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
            {/* Item message */}
            {messageDetails?.map((item, index) => (
              <button
                key={index}
                onClick={() => handleShowMessage(item)}
                className={`flex items-center bg-white px-5 py-3 w-full space-x-5 hover:bg-light-grey cursor-pointer ${room.id_messagedetail === item.id_messagedetail ? 'bg-grey-light' : ''}`}
              >
                <img src={item.photo || company} alt="" width={60} className="rounded-full" />
                <div>
                  <h1 className="font-semibold text-start">{item.name}</h1>
                  <p className="text-start text-[#9B9B9B]">{item.position}</p>
                </div>
              </button>
            ))}
          </div>
        </section>
        {/* Content message */}
        <ContentMessage room={room} initialMessages={messages} />
      </div>
      <Footer />
    </div>
  );
};

export default MyChat;
