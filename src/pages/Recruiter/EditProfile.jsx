import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { HiOutlinePencil } from 'react-icons/hi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { UpdateCompany } from '../../redux/action/putAction';

const EditProfileCompany = () => {
  const authDataRecruiter = useSelector((state) => state?.fetchReducer?.recruiterbyidData?.data);
  const tokenUser = useSelector((state) => state?.login?.user?.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [photoDataDiri, setPhotoDataDiri] = useState();
  const [inputData, setInputData] = useState({
    company_name: '',
    company_field: '',
    company_info: '',
    email: '',
    company_email: '',
    company_phone: '',
    city: '',
    province: '',
    photo: '',
    linkedin: ''
  });

  const updateData = (event) => {
    event.preventDefault();
    let bodyData = new FormData();
    bodyData.append('company_name', inputData.company_name);
    bodyData.append('company_field', inputData.company_field);
    bodyData.append('company_info', inputData.company_info);
    bodyData.append('email', inputData.email);
    bodyData.append('company_email', inputData.company_email);
    bodyData.append('company_phone', inputData.company_phone);
    bodyData.append('city', inputData.city);
    bodyData.append('province', inputData.province);
    bodyData.append('linkedin', inputData.linkedin);
    bodyData.append('photo', photoDataDiri);

    dispatch(UpdateCompany(bodyData, tokenUser, navigate));
  };

  const onChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const onChangePhoto = (e) => {
    setPhotoDataDiri(e.target.files[0]);

    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setInputData({ ...inputData, photo: readerEvent.target.result });
    };
  };

  const handdleButtonClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <main>
      <Navbar />
      {/* Media Screen LG - 2XL */}
      <section className=" hidden lg:flex lg:justify-center mb-10 lg:mx-4">
        <div className="bg-[#5E50A1] w-full h-[500px] -z-10 absolute"></div>
        <form
          onSubmit={updateData}
          className="lg:flex justify-center items-start space-x-10 w-full">
          <div className="lg:w-[300px] 2xl:w-[500px] lg:h-[400px] 2xl:h-[600px] mt-48 space-y-5">
            <div className="flex flex-col bg-white rounded-md shadow-md w-full lg:h-full">
              <div className="flex flex-col items-center justify-center pt-16">
                <div className="flex pt-4 items-center">
                  <input
                    type="file"
                    name="photo"
                    id="inputFile"
                    onChange={onChangePhoto}
                    style={{ display: 'none' }}
                  />
                  <label htmlFor="inputFile" className="w-40 cursor-pointer rounded-full">
                    {photoDataDiri ? (
                      <img
                        src={inputData?.photo}
                        className=" w-44 h-40 rounded-full cursor-pointer"
                      />
                    ) : (
                      <img
                        src={authDataRecruiter?.photo}
                        className=" w-40 h-40 rounded-full cursor-pointer"
                      />
                    )}
                    <span className="flex text-grey items-center justify-center text-2xl pt-2">
                      <HiOutlinePencil className="" />
                      <h1>Edit</h1>
                    </span>
                  </label>
                </div>
              </div>
              <div className="lg:pt-10 2xl:pt-20 mx-14">
                <div className="flex flex-col">
                  <h1 className="lg:text-base 2xl:text-4xl">{authDataRecruiter?.company_name}</h1>
                  <h2 className="lg:text-sm 2xl:text-2xl lg:pt-2 2xl:pt-3">
                    {authDataRecruiter?.position}
                  </h2>
                  <p className="flex items-center pt-3 text-[#9EA0A5] lg:text-xs 2xl:text-base">
                    <span className="pr-3">
                      <HiOutlineLocationMarker
                        style={{
                          color: '#9EA0A5',
                          fontSize: 20
                        }}
                      />
                    </span>
                    {authDataRecruiter?.city}, {authDataRecruiter?.province}
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-5 lg:w-full">
              <button
                type="submit"
                onClick={handdleButtonClick}
                className="w-full h-[50px] bg-[#5E50A1] text-2xl text-white rounded-md shadow-md hover:bg-yellow">
                Simpan
              </button>
              <button
                type="submit"
                className="w-full h-[50px] text-2xl text-[#5E50A1] rounded-md shadow-md hover:bg-grey-white outline outline-offset-1 outline-[#5E50A1] outline-1 ">
                Batal
              </button>
            </div>
          </div>
          <div className="w-[900px] h-[1508px] shadow-md bg-white mt-48 rounded-md">
            <div className="m-10">
              <h1 className="font-semibold text-2xl  text-[#1F2A36]">Data diri</h1>
            </div>
            <hr className="w-full" />
            <div className="m-10 space-y-12">
              <div className="space-y-3">
                <h1 className="font-normal text-base text-[#9EA0A5]">Nama Perushaan</h1>
                <input
                  type="text"
                  name="company_name"
                  placeholder={authDataRecruiter?.company_name}
                  onChange={onChange}
                  className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                />
              </div>
              <div className="space-y-3">
                <h1 className="font-normal text-base text-[#9EA0A5]">Bidang</h1>
                <input
                  type="text"
                  name="company_field"
                  placeholder={authDataRecruiter?.company_field}
                  onChange={onChange}
                  className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                />
              </div>
              <div className="space-y-3">
                <h1 className="font-normal text-base text-[#9EA0A5]">Provinsi</h1>
                <input
                  type="text"
                  name="province"
                  placeholder={authDataRecruiter?.province}
                  onChange={onChange}
                  className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                />
              </div>
              <div className="space-y-3">
                <h1 className="font-normal text-base text-[#9EA0A5]">Kota</h1>
                <input
                  type="text"
                  name="city"
                  placeholder={authDataRecruiter?.city}
                  onChange={onChange}
                  className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                />
              </div>
              <div className="space-y-3">
                <h1 className="font-normal text-base text-[#9EA0A5]">Deskripsi Singkat</h1>
                <textarea
                  name="company_info"
                  placeholder={authDataRecruiter?.company_info}
                  onChange={onChange}
                  rows={4}
                  cols={50}
                  className="w-full h-[150px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                />
              </div>
              <div className="space-y-3">
                <h1 className="font-normal text-base text-[#9EA0A5]">Email</h1>
                <input
                  type="text"
                  name="email"
                  placeholder={authDataRecruiter?.email}
                  onChange={onChange}
                  className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                />
              </div>
              <div className="space-y-3">
                <h1 className="font-normal text-base text-[#9EA0A5]">Email Perushaan</h1>
                <input
                  type="text"
                  name="company_email"
                  placeholder={authDataRecruiter?.company_email}
                  onChange={onChange}
                  className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                />
              </div>
              <div className="space-y-3">
                <h1 className="font-normal text-base text-[#9EA0A5]">Nomor Telepon</h1>
                <input
                  type="text"
                  name="company_phone"
                  placeholder={authDataRecruiter?.company_phone}
                  onChange={onChange}
                  className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                />
              </div>
              <div className="space-y-3">
                <h1 className="font-normal text-base text-[#9EA0A5]">Linkedin</h1>
                <input
                  type="text"
                  name="linkedin"
                  placeholder={authDataRecruiter?.linkedin}
                  onChange={onChange}
                  className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                />
              </div>
            </div>
          </div>
        </form>
      </section>

      {/* Media Screen SM - MD */}

      <Footer />
    </main>
  );
};

export default EditProfileCompany;
