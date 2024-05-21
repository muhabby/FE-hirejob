import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import company from '../../assets/image/company.jpeg';
import { HiOutlinePencil } from 'react-icons/hi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { putData } from '../../redux/action/putAction';

const EditProfileCompany = () => {
  const authDataRecruiter = useSelector((state) => state.auth?.data);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [photo, setPhoto] = useState();
  const [inputData, setInputData] = useState({
    company_name: '',
    company_email: '',
    company_phone: '',
    company_field: '',
    company_info: '',
    province_id: '',
    city_id: '',
    linkedin: '',
    photo: ''
  });

  const updateData = (event) => {
    event.preventDefault();
    let bodyData = new FormData();
    bodyData.append('company_name', inputData.company_name);
    bodyData.append('company_email', inputData.company_email);
    bodyData.append('company_phone', inputData.company_phone);
    bodyData.append('company_field', inputData.company_field);
    bodyData.append('company_info', inputData.company_info);
    bodyData.append('province_id', inputData.province_id);
    bodyData.append('city_id', inputData.city_id);
    bodyData.append('linkedin', inputData.linkedin);
    bodyData.append('photo', photo);

    dispatch(putData(id, bodyData, navigate));
  };

  const onChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const onChangePhoto = (e) => {
    setPhoto(e.target.files[0]);

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

  console.log(inputData);

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
                <div className="flex pb-3 items-center">
                  <HiOutlinePencil
                    style={{
                      color: '#9EA0A5',
                      fontSize: 20
                    }}
                  />
                  <input
                    type="file"
                    id="inputFile"
                    name="inputFile"
                    style={{ display: 'none' }}
                    onChange={onChangePhoto}
                    autoComplete=""
                  />
                  <label
                    htmlFor="inutFile"
                    type="submit"
                    className="text-[#9EA0A5] font-semibold lg:text-lg pl-1">
                    {photo ? (
                      <img
                        src={inputData.photo}
                        className="rounded-full lg:w-[100px] 2xl:w-[200px]"
                      />
                    ) : (
                      <img
                        src={authDataRecruiter?.data?.photo}
                        alt=""
                        className="rounded-full lg:w-[100px] 2xl:w-[200px]"
                      />
                    )}
                    Edit
                  </label>
                </div>
              </div>
              <div className="lg:pt-10 2xl:pt-20 mx-14">
                <div className="flex flex-col">
                  <h1 className="lg:text-base 2xl:text-4xl">
                    {authDataRecruiter?.data?.company_name}
                  </h1>
                  <h2 className="lg:text-sm 2xl:text-2xl lg:pt-2 2xl:pt-3">
                    {authDataRecruiter?.data?.company_field}
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
                    {authDataRecruiter?.data?.company_field}
                    {authDataRecruiter?.data?.city_id}
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
                  id="company_name"
                  name="company_name"
                  placeholder={authDataRecruiter?.data?.company_name}
                  onChange={onChange}
                  className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                />
              </div>
              <div className="space-y-3">
                <h1 className="font-normal text-base text-[#9EA0A5]">Bidang</h1>
                <input
                  type="text"
                  id="company_field"
                  name="company_field"
                  placeholder={authDataRecruiter?.data?.company_field}
                  onChange={onChange}
                  className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                />
              </div>
              <div className="space-y-3">
                <h1 className="font-normal text-base text-[#9EA0A5]">Provinsi</h1>
                <input
                  type="text"
                  id="province_id"
                  name="province_id"
                  placeholder={authDataRecruiter?.data?.province_id}
                  onChange={onChange}
                  className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                />
              </div>
              <div className="space-y-3">
                <h1 className="font-normal text-base text-[#9EA0A5]">Kota</h1>
                <input
                  type="text"
                  id="city_id"
                  name="city_id"
                  placeholder={authDataRecruiter?.data?.city_id}
                  onChange={onChange}
                  className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                />
              </div>
              <div className="space-y-3">
                <h1 className="font-normal text-base text-[#9EA0A5]">Deskripsi Singkat</h1>
                <textarea
                  id="company_info"
                  name="company_info"
                  placeholder={authDataRecruiter?.data?.company_info}
                  onChange={onChange}
                  rows={4}
                  cols={50}
                  className="w-full h-[150px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                />
              </div>
              <div className="space-y-3">
                <h1 className="font-normal text-base text-[#9EA0A5]">Email</h1>
                <input
                  type="email"
                  id="company_info"
                  name="company_info"
                  placeholder={authDataRecruiter?.data?.company_email}
                  onChange={onChange}
                  className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                />
              </div>
              <div className="space-y-3">
                <h1 className="font-normal text-base text-[#9EA0A5]">Email Perushaan</h1>
                <input
                  type="text"
                  id="company_info"
                  name="company_info"
                  placeholder={authDataRecruiter?.data?.company_email}
                  onChange={onChange}
                  className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                />
              </div>
              <div className="space-y-3">
                <h1 className="font-normal text-base text-[#9EA0A5]">Nomor Telepon</h1>
                <input
                  type="text"
                  id="company_phone"
                  name="company_phone"
                  placeholder={authDataRecruiter?.data?.company_phone}
                  onChange={onChange}
                  className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                />
              </div>
              <div className="space-y-3">
                <h1 className="font-normal text-base text-[#9EA0A5]">Linkedin</h1>
                <input
                  type="text"
                  id="linkedin"
                  name="linkedin"
                  placeholder={authDataRecruiter?.data?.linkedin}
                  onChange={onChange}
                  className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                />
              </div>
            </div>
          </div>
        </form>
      </section>

      {/* Media Screen SM - MD */}
      <section className="lg:hidden mb-10 w-screen flex justify-center ">
        <div className="bg-[#5E50A1] sm:w-full h-[500px] sm:-z-10 sm:absolute"></div>
        <section className="sm:flex flex-col justify-between items-center w-full ">
          <div className="sm:w-[300px] h-[450px] mt-48 space-y-5 bg-white rounded-lg  ">
            <div className="flex flex-col shadow-md w-full h-full">
              <div className="flex flex-col items-center justify-center pt-5">
                <div className="flex pb-3 items-center">
                  <HiOutlinePencil
                    style={{
                      color: '#9EA0A5',
                      fontSize: 20
                    }}
                  />
                  <button type="submit" className="text-[#9EA0A5] font-semibold sm:text-xl pl-2">
                    Edit
                  </button>
                </div>
                <img src={company} alt="" className="rounded-full sm:w-[150px]" />
              </div>
              <div className="pt-20 sm:mx-10">
                <div className="flex flex-col">
                  <h1 className="sm:text-xl">PT. Martabat Jaya Abadi</h1>
                  <h2 className="sm:text-base pt-3">Financial</h2>
                  <p className="flex items-center pt-3 text-[#9EA0A5] sm:text-xs">
                    <span className="pr-3">
                      <HiOutlineLocationMarker
                        style={{
                          color: '#9EA0A5',
                          fontSize: 25
                        }}
                      />
                    </span>
                    Purwokerto, Jawa Tengah
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-5 w-full">
              <button
                type="submit"
                className="w-full h-[50px] bg-[#5E50A1] sm:text-xl text-white rounded-md shadow-md hover:bg-yellow">
                Simpan
              </button>
              <button
                type="submit"
                className="w-full h-[50px] sm:text-xl text-[#5E50A1] rounded-md shadow-md hover:bg-grey-white outline outline-offset-0 outline-[#5E50A1] outline-1 ">
                Batal
              </button>
            </div>
          </div>
          <div className="sm:w-11/12 h-[1508px] shadow-md bg-light-grey mt-48 rounded-md">
            <div className=" sm:m-10">
              <h1 className="font-semibold text-2xl text-[#1F2A36]">Data diri</h1>
            </div>
            <hr className="w-full" />
            <form className="m-10 space-y-12">
              <div className="space-y-3">
                <h1 className="font-normal text-base text-[#9EA0A5]">Nama Perushaan</h1>
                <input
                  type="text"
                  placeholder="Masukan nama perushaan"
                  className="w-full h-[50px] sm:text-xs md:text-base p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                />
              </div>
              <div className="space-y-3">
                <h1 className="font-normal text-base text-[#9EA0A5]">Bidang</h1>
                <input
                  type="text"
                  placeholder="Masukan bidang perusahaan ex : Financial"
                  className="w-full h-[50px] sm:text-[10px] md:text-base p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                />
              </div>
              <div className="space-y-3">
                <h1 className="font-normal text-base text-[#9EA0A5]">Provinsi</h1>
                <input
                  type="text"
                  placeholder="Masukan Provinsi"
                  className="w-full h-[50px] sm:text-xs md:text-base p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                />
              </div>
              <div className="space-y-3">
                <h1 className="font-normal text-base text-[#9EA0A5]">Kota</h1>
                <input
                  type="text"
                  placeholder="Masukan kota"
                  className="w-full h-[50px] sm:text-xs md:text-base p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                />
              </div>
              <div className="space-y-3">
                <h1 className="font-normal text-base text-[#9EA0A5]">Deskripsi Singkat</h1>
                <textarea
                  rows={4}
                  cols={50}
                  type="text"
                  placeholder="Tuliskan deskripsi singkat"
                  className="w-full h-[150px] sm:text-xs md:text-base p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                />
              </div>
              <div className="space-y-3">
                <h1 className="font-normal text-base text-[#9EA0A5]">Email</h1>
                <input
                  type="email"
                  placeholder="Masukan email"
                  className="w-full h-[50px] sm:text-xs md:text-base p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                />
              </div>
              <div className="space-y-3">
                <h1 className="font-normal text-base text-[#9EA0A5]">Email Perushaan</h1>
                <input
                  type="text"
                  placeholder="Masukan email perushaan"
                  className="w-full h-[50px] sm:text-xs md:text-base p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                />
              </div>
              <div className="space-y-3">
                <h1 className="font-normal text-base text-[#9EA0A5]">Nomor Telepon</h1>
                <input
                  type="text"
                  placeholder="Masukan nomor telepon"
                  className="w-full h-[50px] sm:text-xs md:text-base p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                />
              </div>
              <div className="space-y-3">
                <h1 className="font-normal text-base text-[#9EA0A5]">Linkedin</h1>
                <input
                  type="text"
                  placeholder="Masukan nama linkedin"
                  className="w-full h-[50px] sm:text-xs md:text-base p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                />
              </div>
            </form>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default EditProfileCompany;
