import Navbar from '../../components/Navbar';
import PhotoProfile from '../../assets/photo-profile.svg';
import Footer from '../../components/Footer';
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BoxInput, TextInput } from '../../components/Input';
import { Button } from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataById } from '../../redux/action/fetchAction';
import { postData } from '../../redux/action/postAction';

const Hire = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const userLogin = useSelector((state) => state.login?.user);
  const workerDataById = useSelector((state) => state.fetchReducer.workerbyidData?.data);
  const skillsDataById = useSelector((state) => state.fetchReducer.skillsbyidData?.data);
  const cityDataById = useSelector((state) => state.fetchReducer.citybyidData?.data);
  const id_messagedetail = useSelector((state) => state.postReducer?.messagedetailData?.data.id_messagedetail);
  const [room, setRoom] = useState({
    position: "",
    id_user: id,
  });
  const [message, setMessage] = useState({
    id_messagedetail: "" || id_messagedetail,
    message_value: "",
  });

  useEffect(() => {
    dispatch(fetchDataById('worker', 'workerbyid', id));
    dispatch(fetchDataById('skills', 'skillsbyid', id));
    dispatch(fetchDataById('city', 'citybyid', workerDataById?.city_id));
    dispatch(fetchDataById('contact', 'contactbyid', id));
  }, [id]);

  const skillData = skillsDataById?.skill_name.split(', ');

  const handleChange = async () => {
    const { name, value } = event.target;
    if (name === "position") {
      setRoom((prevState) => ({
        ...prevState,
        [name]: value
      }));
    } else {
      setMessage((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  }

  const handleSubmit = async () => {
    dispatch(postData('messagedetail', room, userLogin?.token))
    dispatch(postData('message', message, userLogin?.token))
    navigate('/mychat')
  }
  window.scroll(0, 0);
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row bg-grey-white gap-28 px-5 pt-8 pb-[200px] lg:px-16 md:pt-16 md:pb-[700px] 2xl:px-48">
        <div className="w-full md:w-1/3 bg-white rounded-md p-6 flex flex-col gap-8 ">
          <div className="w-full flex flex-row justify-center">
            <img src={workerDataById?.photo} className="w-28 h-28 rounded-full" />
          </div>
          <div className="flex flex-col items-start gap-4">
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
        </div>
        <div className="w-full md:w-2/4 flex flex-col gap-16 p-4 ">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-semibold">Hubungi Lous Tomlinson</h1>
            <p className="text-xl text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui
              rhoncus auctor.
            </p>
          </div>
          <form className="flex flex-col gap-5">
            <TextInput
              text="Untuk Posisi"
              name="position"
              placeholder="Fulltime Frontend Developer"
              onChange={handleChange}
              autoComplete="current-position"
            />
            <BoxInput
              text="Deskripsi"
              name="message_value"
              placeholder="Berikan pesan kepada talent"
              onChange={handleChange}
              autoComplete="current-position"
            />
          </form>
          <Button 
            className="bg-yellow hover:bg-[#db9709]"
            onClick={handleSubmit}
          >
            Hire
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Hire;
