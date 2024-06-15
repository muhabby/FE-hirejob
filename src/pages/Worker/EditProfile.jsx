import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { HiOutlinePencil } from 'react-icons/hi';
import { FiUpload } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { IoMdCloudUpload } from 'react-icons/io';
import { ButtonYellow } from '../../components/Button';
import { TextInput, TimeInput, BoxInput } from '../../components/Input';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  CreatePortofolio,
  CreateSkills,
  CreateWorkExperience
} from '../../redux/action/postAction';
import { UpdateSkill, UpdateWorker } from '../../redux/action/putAction';
import { fetchDataById } from '../../redux/action/fetchAction';
import { deleteWorkExperience } from '../../redux/action/deleteAction';
import { deletePortofolio } from '../../redux/action/deleteAction';
import { IoIosClose } from 'react-icons/io';

const EditProfileWorker = () => {
  const dataDiri = useSelector((state) => state.fetchReducer.workerbyidData.data);
  const skillsById = useSelector((state) => state.fetchReducer.skillsDataData.data);
  const experienceDataById = useSelector((state) => state.fetchReducer.experiencebyidData);
  const portofolioDataById = useSelector((state) => state.fetchReducer.portfoliobyidData);
  const tokenUser = useSelector((state) => state?.login?.user?.token);
  const userData = useSelector((state) => state?.login?.user?.userData);
  const userId = userData?.id_user;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const skillId = skillsById?.id;

  useEffect(() => {
    dispatch(fetchDataById('worker', 'workerbyid', userId));
    dispatch(fetchDataById('skills', 'skillsData', userId));
    dispatch(fetchDataById('workExperience', 'experiencebyid', userId));
    dispatch(fetchDataById('portofolio', 'portfoliobyid', userId));
  }, [dispatch, userId]);

  // Data diri
  const [photoDataDiri, setPhotoDataDiri] = useState();
  const [inputDataDiri, setInputDataDiri] = useState({
    name: '',
    job_desk: '',
    city: '',
    province: '',
    last_work: '',
    bio: '',
    photo: ''
  });

  const updateDataDiri = (event) => {
    event.preventDefault();
    let bodyData = new FormData();
    bodyData.append('name', inputDataDiri.name);
    bodyData.append('job_desk', inputDataDiri.job_desk);
    bodyData.append('city', inputDataDiri.city);
    bodyData.append('province', inputDataDiri.province);
    bodyData.append('last_work', inputDataDiri.last_work);
    bodyData.append('bio', inputDataDiri.bio);
    bodyData.append('photo', photoDataDiri);

    dispatch(UpdateWorker(bodyData, tokenUser));
  };

  const onChange = (e) => {
    setInputDataDiri({ ...inputDataDiri, [e.target.name]: e.target.value });
  };

  const onChangePhotoDataDiri = (e) => {
    setPhotoDataDiri(e.target.files[0]);

    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setInputDataDiri({
        ...inputDataDiri,
        photo: readerEvent.target.result
      });
    };
  };

  // Portofolio
  const [photoPorto, setPhotoPorto] = useState();
  const [inputPorto, setInputPorto] = useState({
    porto_name: '',
    link_repo: '',
    type: '',
    photo: ''
  });

  const createPorto = (event) => {
    event.preventDefault();
    let bodyData = new FormData();
    bodyData.append('porto_name', inputPorto.porto_name);
    bodyData.append('link_repo', inputPorto.link_repo);
    bodyData.append('type', inputPorto.type);
    bodyData.append('photo', photoPorto);
    dispatch(CreatePortofolio(bodyData, tokenUser));
  };

  const onChangePorto = (event) => {
    const { name, value } = event.target;
    setInputPorto((prevstate) => ({
      ...prevstate,
      [name]: value
    }));
  };

  const onChangePhotoPorto = (e) => {
    setPhotoPorto(e.target.files[0]);
    e.target.files[0] &&
      setInputPorto({
        ...inputPorto,
        photo: URL.createObjectURL(e.target.files[0])
      });
    console.log(e.target.files);
  };

  // Work Experience
  const [photoWorkExperience, setphotoWorkExperience] = useState();
  const [inputWorkExperience, setInputWorkExperience] = useState({
    position: '',
    company_name: '',
    working_start_at: '',
    working_end_at: '',
    description: '',
    photo: ''
  });

  const createWorkExp = (event) => {
    event.preventDefault();
    let bodyData = new FormData();
    bodyData.append('position', inputWorkExperience.position);
    bodyData.append('company_name', inputWorkExperience.company_name);
    bodyData.append('working_start_at', inputWorkExperience.working_start_at);
    bodyData.append('working_end_at', inputWorkExperience.working_end_at);
    bodyData.append('description', inputWorkExperience.description);
    bodyData.append('photo', photoWorkExperience);
    dispatch(CreateWorkExperience(bodyData, tokenUser, navigate));
  };

  const onChangeDataWorkExp = (event) => {
    const { name, value } = event.target;
    setInputWorkExperience((prevstate) => ({
      ...prevstate,
      [name]: value
    }));
  };

  const onChangePhoto = (e) => {
    setphotoWorkExperience(e.target.files[0]);
    e.target.files[0] &&
      setInputWorkExperience({
        ...inputWorkExperience,
        photo: URL.createObjectURL(e.target.files[0])
      });
    console.log(e.target.files);
  };

  // create skill

  // update skill
  const [inputEditSkill, setInputEditSkill] = useState({
    skill_name: ''
  });

  const editSkill = (event) => {
    event.preventDefault();
    dispatch(UpdateSkill(inputEditSkill, tokenUser, skillId));
  };

  const onChangeEditSkill = (e) => {
    setInputEditSkill({ ...inputEditSkill, skill_name: e.target.value });
  };

  return (
    <main>
      <Navbar />
      {/* Media Screen LG - 2XL */}
      <body className="w-full flex justify-center">
        <div className="bg-[#5E50A1] w-full h-[411px] -z-10 absolute"></div>
        <section className="flex flex-col  items-center justify-start w-full">
          <form onSubmit={updateDataDiri} className="flex justify-center w-10/12 mt-48 space-x-10 ">
            {/* Profile */}
            <div className="flex flex-col space-y-5 w-4/12">
              <div className="bg-white rounded-md shadow-md h-2/3">
                <div className="flex flex-col items-center justify-center pt-16">
                  {/* <img src={userData?.photo} alt="" className="rounded-full w-[200px]" /> */}
                  <div className="flex pt-4 items-center">
                    <input
                      type="file"
                      name="photo"
                      id="inputFile"
                      onChange={onChangePhotoDataDiri}
                      style={{ display: 'none' }}
                    />
                    <label htmlFor="inputFile" className="w-40 cursor-pointer rounded-full">
                      {photoDataDiri ? (
                        <div
                          className="bg-yellow w-40 h-40 rounded-full cursor-pointer"
                          style={{
                            backgroundImage: `url(${inputDataDiri?.photo})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}></div>
                      ) : (
                        <div
                          className="bg-yellow w-40 h-40 rounded-full cursor-pointer"
                          style={{
                            backgroundImage: `url(${dataDiri?.photo})`,
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
                <div className="pt-10 pl-10">
                  <div className="flex flex-col lg:space-y-2 gap-3">
                    <h1 className="text-2xl">{dataDiri?.name}</h1>
                    <h5 className="text-[#8d8d8d] ">{dataDiri?.last_work}</h5>
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
                        {dataDiri?.city}, {dataDiri?.province}
                      </div>
                    </p>
                    <p className=" text-[#000000] font-normal lg:text-sm 2xl:text-lg ">
                      <div style={{ fontSize: 15 }}>{dataDiri?.job_desk}</div>
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-5">
                <button
                  type="submit"
                  className="w-full h-[50px] bg-[#5E50A1] text-xl text-white rounded-md shadow-md hover:bg-[#473c81]">
                  Simpan
                </button>
                <button className="w-full h-[50px] text-xl text-[#5E50A1] rounded-md shadow-md hover:bg-grey-white outline outline-offset-1 outline-[#5E50A1] outline-1 ">
                  Batal
                </button>
              </div>
            </div>

            {/* Data Diri */}

            <div className="w-5/12 h-full shadow-md bg-white rounded-md">
              <div className="mx-10 py-5 ">
                <h1 className="font-semibold text-2xl text-[#1F2A36]">Data diri</h1>
              </div>
              <hr className="w-full text-[#C4C4C4]" />
              <div className="m-10 space-y-5">
                <div className="space-y-3">
                  <h1 className="font-normal text-base text-[#9EA0A5]">Nama Lengkap</h1>
                  <input
                    type="text"
                    name="name"
                    onChange={onChange}
                    placeholder="Masukan nama lengkap"
                    defaultValue={dataDiri?.name}
                    className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                  />
                </div>
                <div className="space-y-3">
                  <h1 className="font-normal text-base text-[#9EA0A5]">Job desk</h1>
                  <input
                    defaultValue={dataDiri?.job_desk}
                    onChange={onChange}
                    type="text"
                    name="job_desk"
                    placeholder="Masukan jobdesk"
                    className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                  />
                </div>
                <div className="space-y-3">
                  <h1 className="font-normal text-base text-[#9EA0A5]">Provinsi</h1>
                  <input
                    defaultValue={dataDiri?.province}
                    onChange={onChange}
                    type="text"
                    name="province"
                    placeholder="Masukan provinsi"
                    className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                  />
                </div>
                <div className="space-y-3">
                  <h1 className="font-normal text-base text-[#9EA0A5]">Kota</h1>
                  <input
                    defaultValue={dataDiri?.city}
                    onChange={onChange}
                    type="text"
                    name="city"
                    placeholder="Masukan kota"
                    className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                  />
                </div>

                <div className="space-y-3">
                  <h1 className="font-normal text-base text-[#9EA0A5]">Tempat kerja</h1>
                  <input
                    defaultValue={dataDiri?.last_work}
                    onChange={onChange}
                    type="text"
                    name="last_work"
                    placeholder="Masukan tempat kerja"
                    className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                  />
                </div>
                <div className="space-y-3">
                  <h1 className="font-normal text-base text-[#9EA0A5]">Deskripsi Singkat</h1>
                  <textarea
                    defaultValue={dataDiri?.bio}
                    onChange={onChange}
                    name="bio"
                    rows={4}
                    cols={50}
                    type="text"
                    placeholder="Masukan deskripsi singkat"
                    className="w-full h-[150px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                  />
                </div>
              </div>

              {/* End Data Diri */}
            </div>
          </form>
          {/* End Profile */}

          {/* Form */}
          <div className=" space-y-10 w-8/12 px-4 my-14">
            {/*  Skill */}
            <section className="flex justify-end">
              <div className="w-[54%] h-[227px] shadow-md bg-white  rounded-md">
                <div className="mx-10 py-5 ">
                  <h1 className="font-semibold text-2xl text-[#1F2A36]">Skill</h1>
                </div>
                <hr className="w-full text-[#C4C4C4]" />
                <form onSubmit={editSkill} className="m-10 space-y-5">
                  {skillsById?.skill_name ? (
                    <div className="flex flex-col gap-3">
                      <div className="space-x-12 flex flex-row">
                        <input
                          onChange={onChangeEditSkill}
                          type="text"
                          defaultValue={skillsById?.skill_name}
                          placeholder="Masukkan Skill"
                          className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                        />
                        <ButtonYellow
                          text={'Update'}
                          type="submit"
                          className={
                            'w-[100px] h-[50px] bg-[#FBB017] rounded-md text-white flex justify-center items-center font-bold text-base'
                          }
                        />
                      </div>
                      <p className="text-[#c45124]" style={{ fontSize: 14 }}>
                        Pisahkan skill dengan koma dan spasi ", "
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-3">
                      <div className="space-x-12 flex flex-row">
                        <input
                          onChange={onChangeEditSkill}
                          type="text"
                          defaultValue={skillsById?.skill_name}
                          placeholder="Masukkan Skill"
                          className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                        />
                        <ButtonYellow
                          text={'Submit'}
                          type="submit"
                          className={
                            'w-[100px] h-[50px] bg-[#FBB017] rounded-md text-white flex justify-center items-center font-bold text-base'
                          }
                        />
                      </div>
                      <p className="text-[#c45124]" style={{ fontSize: 14 }}>
                        Pisahkan skill dengan koma dan spasi ", "
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </section>
            {/*  End Skill */}

            {/*  Pengalaman Kerja */}
            <section className="flex justify-end">
              <div className="w-[54%] shadow-md rounded-md">
                <div className="mx-10 py-5 ">
                  <h1 className="font-semibold text-2xl text-[#1F2A36]">Pengalaman Kerja</h1>
                </div>
                <hr className="w-full text-[#C4C4C4]" />
                <div className="px-10 pt-10 space-y-5">
                  {experienceDataById?.data && experienceDataById?.data.length > 0 ? (
                    experienceDataById?.data.map((item, index) => {
                      return (
                        <div
                          className="flex flex-col justify-center p-10 bg-[#e8e4ff]"
                          key={index}
                          style={{
                            height: 100,
                            width: '100%',
                            borderRadius: 10
                          }}>
                          <div className="flex flex-row justify-between items-center" style={{}}>
                            <div
                              className="flex flex-col"
                              style={{
                                width: '75%'
                              }}>
                              <p>{item.company_name}</p>
                              <p>{item.position}</p>
                            </div>
                            <div className="flex flex-col" style={{}}>
                              <button
                                onClick={() => dispatch(deletePortofolio(item.id, tokenUser))}>
                                <IoIosClose className="text-4xl text-[#9b3d3d]" />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div
                      className="flex flex-col items-center justify-center p-10 bg-[#fbffbc]"
                      style={{
                        height: 100,
                        width: '100%',
                        borderRadius: 10
                      }}>
                      <p className="text-[#646464]">Tidak ada pengalaman kerja</p>
                    </div>
                  )}
                </div>
                <form onSubmit={createWorkExp} className="w-full p-10 space-y-5">
                  <div className="space-y-5">
                    <div>
                      <h1 className="mb-3 font-normal text-base text-[#9EA0A5]">Photo</h1>
                      <input
                        type="file"
                        id="photoWorkExp"
                        onChange={onChangePhoto}
                        style={{ display: 'none' }}
                      />
                      <label htmlFor="photoWorkExp">
                        {photoWorkExperience ? (
                          <div className="w-full h-60 flex justify-center">
                            <img src={inputWorkExperience?.photo} />
                          </div>
                        ) : (
                          <div className="bg-white border-2 border-dashed border-grey w-full h-32 flex justify-center items-center space-x-3">
                            <FiUpload className="text-4xl text-grey" />
                            <h1 className="text-grey">Click For Upload</h1>
                          </div>
                        )}
                      </label>
                    </div>
                    <div>
                      <h1 className="font-normal text-base text-[#9EA0A5]">Posisi</h1>
                      <TextInput
                        onChange={onChangeDataWorkExp}
                        name="position"
                        placeholder={'Web Developer'}
                      />
                    </div>
                    <div>
                      <h1 className="font-normal text-base text-[#9EA0A5]">Nama Perusahaan</h1>
                      <TextInput
                        onChange={onChangeDataWorkExp}
                        name="company_name"
                        placeholder={'PT Harus bisa'}
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="w-full lg:flex flex-col items-start lg:space-y-3">
                      <TimeInput
                        onChange={onChangeDataWorkExp}
                        name="working_start_at"
                        label={'Dari Bulan/tahun'}
                      />
                      <TimeInput
                        onChange={onChangeDataWorkExp}
                        name="working_end_at"
                        label={'Sampai Bulan/tahun'}
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h1 className="font-normal text-base text-[#9EA0A5]">Deskripsi Singkat</h1>
                    <BoxInput
                      onChange={onChangeDataWorkExp}
                      name="description"
                      placeholder={'Deskripsikan pekerjaan anda'}
                    />
                  </div>
                  <hr className="text-[#C4C4C4]" />
                  <button
                    type="submit"
                    className="bg-white border-2 border-[#FBB017] rounded w-full h-10 text-[#FBB017] font-semibold hover:text-lg focus:bg-[#fff2d8] ">
                    Tambah pengalaman kerja
                  </button>
                </form>
              </div>
            </section>
            {/* End Pengalaman Kerja */}

            {/* Portofolio */}
            <section className="flex justify-end">
              <div className="w-[54%] h-auto shadow-md rounded-md">
                <div className="mx-10 py-5 ">
                  <h1 className="font-semibold text-2xl text-[#1F2A36]">Portofolio</h1>
                </div>
                <hr className="w-full text-[#C4C4C4]" />
                <div className="px-10 pt-10 space-y-5">
                  {portofolioDataById?.data && portofolioDataById?.data.length > 0 ? (
                    portofolioDataById?.data.map((item, index) => {
                      return (
                        <div
                          className="flex flex-col justify-center p-10 bg-[#e8e4ff]"
                          key={index}
                          style={{
                            height: 100,
                            width: '100%',
                            borderRadius: 10
                          }}>
                          <div className="flex flex-row justify-between items-center" style={{}}>
                            <div
                              className="flex flex-col"
                              style={{
                                width: '75%'
                              }}>
                              <p>{item.porto_name}</p>
                              <p>{item.type}</p>
                            </div>
                            <div className="flex flex-col" style={{}}>
                              <button
                                onClick={() => dispatch(deletePortofolio(item.id, tokenUser))}>
                                <IoIosClose className="text-4xl text-[#9b3d3d]" />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div
                      className="flex flex-col items-center justify-center p-10 bg-[#fbffbc]"
                      style={{
                        height: 100,
                        width: '100%',
                        borderRadius: 10
                      }}>
                      <p className="text-[#646464]">Tidak ada portofolio</p>
                    </div>
                  )}
                </div>
                <form onSubmit={createPorto} className="m-10 space-y-5">
                  <div className="space-y-3">
                    <h1 className="font-normal text-base text-[#9EA0A5]">Nama Aplikasi</h1>
                    <TextInput
                      name="porto_name"
                      onChange={onChangePorto}
                      placeholder={'Masukan nama aplikasi'}
                    />
                  </div>
                  <div className="space-y-3">
                    <h1 className="font-normal text-base text-[#9EA0A5]">Link Repository</h1>
                    <div className="">
                      <TextInput
                        name="link_repo"
                        onChange={onChangePorto}
                        placeholder={'Masukan link repository'}
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h1 className="font-normal text-base text-[#9EA0A5]">Type Portofolio</h1>
                    {/* <CheckBox /> */}
                    <TextInput name="type" onChange={onChangePorto} placeholder={'Masukan type'} />
                  </div>
                  <div className="space-y-3 w-full">
                    <h1 className="font-normal text-base text-[#9EA0A5]">Upload Gambar</h1>
                    <div className="">
                      <input
                        type="file"
                        id="inputPorto"
                        onChange={onChangePhotoPorto}
                        style={{ display: 'none' }}
                      />
                      <label htmlFor="inputPorto" className="">
                        {photoPorto ? (
                          <div className="w-full h-60 flex justify-center">
                            <img src={inputPorto?.photo} />
                          </div>
                        ) : (
                          <div className="flex flex-col space-y-3 cursor-pointer outline-dashed outline-offset-2 outline-[#9EA0A5] outline-2 h-[348px]  justify-center items-center">
                            <IoMdCloudUpload className="text-8xl text-[#9EA0A5]" />
                            <p className="text-sm text-[#9EA0A5]">
                              Drag & Drop untuk Upload Gambar
                            </p>
                            <p className="text-xs text-[#9EA0A5]">
                              Atau cari untuk mengupload file dari direktorimu.
                            </p>
                            <div className="flex space-x-10">
                              <div className="flex space-x-3 items-center">
                                <p className="text-sm text-[#9EA0A5]">
                                  High-Res Image <br />
                                  PNG, JPG or GIF
                                </p>
                              </div>
                              <div className="flex space-x-3 items-center">
                                <p className="text-sm text-[#9EA0A5]">
                                  Size <br />
                                  1080x1920 or 600x800
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>
                  <hr className="text-[#C4C4C4]" />
                  <button
                    type="submit"
                    className="bg-white border-2 border-[#FBB017] rounded w-full h-10 text-[#FBB017] font-semibold hover:text-lg focus:bg-[#fff2d8] ">
                    Tambah Portofolio
                  </button>
                </form>
              </div>
            </section>
            {/* End Portofolio */}
          </div>
          {/* End Form */}
        </section>
      </body>
      <Footer />
    </main>
  );
};

export default EditProfileWorker;
