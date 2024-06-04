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
        <form onSubmit={updateData} className="lg:flex justify-center items-start space-x-5 w-full">
          <div className="lg:w-[300px] 2xl:w-[500px] lg:h-[500px] 2xl:h-[600px] mt-48 space-y-5">
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
                      <div
                        className="bg-yellow w-40 h-40 rounded-full cursor-pointer"
                        style={{
                          backgroundImage: `url(${inputData?.photo})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}></div>
                    ) : (
                      <div
                        className="bg-yellow w-40 h-40 rounded-full cursor-pointer"
                        style={{
                          backgroundImage: `url(${authDataRecruiter?.photo})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}></div>
                    )}
                    <span className="flex text-grey items-center justify-center text-2xl pt-2">
                      <HiOutlinePencil className="" />
                      <h1>Edit</h1>
                    </span>
                  </label>
                </div>
              </div>
              <div className="lg:pt-10 2xl:pt-20 mx-10">
                <div className="flex flex-col  gap-3">
                  <h1 className="text-xl">{authDataRecruiter?.company_name}</h1>
                  <h5 className="text-[#8d8d8d] ">{authDataRecruiter?.position}</h5>
                  <p className="flex items-center text-[#61abff] lg:text-xs ">
                    <span className="pr-3">
                      <HiOutlineLocationMarker
                        style={{
                          color: '#61abff',
                          fontSize: 25
                        }}
                      />
                    </span>
                    <div style={{ fontSize: 15 }}>
                      {authDataRecruiter?.city}, {authDataRecruiter?.province}
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-5 lg:w-full">
              <button
                type="submit"
                onClick={handdleButtonClick}
                className="w-full h-[50px] bg-[#5E50A1] text-xl text-white rounded-md shadow-md hover:bg-[#473c81]">
                Simpan
              </button>
              <button
                type="submit"
                className="w-full h-[50px] text-xl text-[#5E50A1] rounded-md shadow-md hover:bg-grey-white outline outline-offset-1 outline-[#5E50A1] outline-1 ">
                Batal
              </button>
            </div>
          </div>
          <div className="w-[900px] h-[1300px] shadow-md bg-white mt-48 rounded-md">
            <div className="mx-10 my-7">
              <h1 className="font-semibold text-2xl  text-[#1F2A36]">Data diri</h1>
            </div>
            <hr className="w-full" />
            <div className="m-10 space-y-7">
              <div className="space-y-3">
                <h1 className="font-normal text-base text-[#9EA0A5]">Nama Perusahaan</h1>
                <input
                  type="text"
                  name="company_name"
                  placeholder="Masukan nama perusahaan"
                  defaultValue={authDataRecruiter?.company_name}
                  onChange={onChange}
                  className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                />
              </div>
              <div className="space-y-3">
                <h1 className="font-normal text-base text-[#9EA0A5]">Bidang</h1>
                <input
                  type="text"
                  name="company_field"
                  placeholder="Masukan bidang perusahaan"
                  defaultValue={authDataRecruiter?.company_field}
                  onChange={onChange}
                  className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                />
              </div>
              <div className="space-y-3">
                <h1 className="font-normal text-base text-[#9EA0A5]">Provinsi</h1>
                <input
                  type="text"
                  name="province"
                  placeholder="Masukan provinsi"
                  defaultValue={authDataRecruiter?.province}
                  onChange={onChange}
                  className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                />
              </div>
              <div className="space-y-3">
                <h1 className="font-normal text-base text-[#9EA0A5]">Kota</h1>
                <input
                  type="text"
                  name="city"
                  placeholder="Masukan kota"
                  defaultValue={authDataRecruiter?.city}
                  onChange={onChange}
                  className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                />
              </div>
              <div className="space-y-3">
                <h1 className="font-normal text-base text-[#9EA0A5]">Deskripsi Singkat</h1>
                <textarea
                  name="company_info"
                  placeholder="Masukan deskripsi perusahaan"
                  defaultValue={authDataRecruiter?.company_info}
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
                  placeholder="Masukan email pribadi"
                  defaultValue={authDataRecruiter?.email}
                  onChange={onChange}
                  className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                />
              </div>
              <div className="space-y-3">
                <h1 className="font-normal text-base text-[#9EA0A5]">Email Perusahaan</h1>
                <input
                  type="text"
                  name="company_email"
                  placeholder="Masukan email perusahaan"
                  defaultValue={authDataRecruiter?.company_email}
                  onChange={onChange}
                  className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                />
              </div>
              <div className="space-y-3">
                <h1 className="font-normal text-base text-[#9EA0A5]">Nomor Telepon</h1>
                <input
                  type="text"
                  name="company_phone"
                  placeholder="Masukan nomor telepon perusahaan"
                  defaultValue={authDataRecruiter?.company_phone}
                  onChange={onChange}
                  className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                />
              </div>
              <div className="space-y-3">
                <h1 className="font-normal text-base text-[#9EA0A5]">Linkedin</h1>
                <input
                  type="text"
                  name="linkedin"
                  placeholder="Masukan linkedin perusahaan"
                  defaultValue={authDataRecruiter?.linkedin}
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
