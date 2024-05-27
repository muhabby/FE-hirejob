import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextInput } from './Input';
import { ButtonWhite } from './Button';
import { BsSend } from 'react-icons/bs';
import company from '../assets/image/company.jpeg';
import { postData } from '../redux/action/postAction';

const ContentMessage = ({ room, initialMessages }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.login?.user);
  const userLoginId = useSelector((state) => state.login?.user?.userData?.id_user);

  const [messages, setMessages] = useState(initialMessages || []);
  const [message, setMessage] = useState({
    id_messagedetail: '',
    message_value: ''
  });

  const messageEndRef = useRef(null);

  // Scroll to bottom function
  const scrollToBottom = () => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update message state when room changes
  useEffect(() => {
    if (room) {
      setMessage({
        id_messagedetail: room.id_messagedetail,
        message_value: ''
      });
      setMessages(initialMessages);
    }
  }, [room, initialMessages]);

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleChange = (event) => {
    setMessage((prevState) => ({
      ...prevState,
      message_value: event.target.value
    }));
  };

  const handleSubmit = () => {
    dispatch(postData('message', message, userLogin?.token));
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id_user: userLoginId,
        message_value: message.message_value
      }
    ]);
    setMessage((prevState) => ({
      ...prevState,
      message_value: ''
    }));
  };

  return (
    <section className="w-full h-[800px] bg-white rounded-xl overflow-clip">
      <div className="flex justify-between items-center px-3 bg-white h-[75px]">
        <div className="flex items-center space-x-3">
          <img src={room.photo || company} alt="" width={55} className="rounded-full" />
          <h1>{room.name}</h1>
        </div>
        <h1 className="text-[#9B9B9B]">{room.position}</h1>
        <ButtonWhite className="outline-none hover:bg-grey-white" text="Detail Profile" />
      </div>
      <hr className="text-[#E2E5ED] shadow-2xl" />
      {/* Messages layout */}
      <div className="h-[640px] flex flex-col-reverse gap-3 p-5 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
        {messages?.map((msg, index) => (
          <div key={index}>
            <div className={`flex gap-2 mx-2 order-2 items-${msg?.id_user === userLoginId ? 'end justify-end' : 'start justify-start'}`}>
              <span className="px-4 py-2 rounded-xl inline-block rounded-br-none bg-grey-white text-grey">
                {msg.message_value}
              </span>
            </div>
          </div>
        ))}
        <div ref={messageEndRef} />
      </div>
      {/* Input message */}
      <hr className="text-[#E2E5ED] shadow-2xl" />
      <div className="flex h-[80px] items-center space-x-3 pt-5 pb-5 rounded-b-md">
        <div className="w-11/12">
          <TextInput
            name="message"
            className="rounded-3xl ml-3 pl-7"
            placeholder="type message..."
            value={message.message_value}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center">
          <button
            type="button"
            onClick={handleSubmit}
            className="rounded-full bg-[#5E50A1] w-[50px] h-[50px] flex justify-center items-center hover:bg-yellow"
          >
            <BsSend style={{ fontSize: 25, color: 'white' }} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentMessage;
