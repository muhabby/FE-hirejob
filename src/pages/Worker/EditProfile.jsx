import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import company from '../../assets/image/company.jpeg';
import { HiOutlinePencil } from 'react-icons/hi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { ButtonYellow, ButtonWhite } from '../../components/Button';
import { TextInput, TimeInput, BoxInput, CheckBox } from '../../components/Input';
import uploadLogo from '../../assets/uplodLogo.svg';
import uploadLogo1 from '../../assets/uploadLogo.svg';
import uploadLogo2 from '../../assets/uploadLogo2.svg';

const EditProfileWorker = () => {
  return (
    <main>
      <Navbar />
      {/* Media Screen LG - 2XL */}
      <body className="hidden mb-10 w-[98vw] lg:flex justify-center">
        <div className="bg-[#5E50A1] w-full h-[411px] -z-10 absolute"></div>
        <section className="flex justify-center lg:space-x-3 2xl:space-x-10 w-full lg:px-10 ">
          {/* Profile */}
          <div className="lg:w-[300px] 2xl:w-[500px] lg:h-[450px] 2xl:h-[600px] mt-48 space-y-5 ">
            <div className="flex flex-col bg-white rounded-md shadow-md w-full lg:h-full">
              <div className="flex flex-col items-center justify-center pt-16">
                <img src={company} alt="" className="rounded-full lg:w-[150px] 2xl:w-[200px]" />
                <form className="flex pt-4 items-center">
                  <HiOutlinePencil
                    style={{
                      color: '#9EA0A5',
                      fontSize: 20
                    }}
                  />
                  <input
                    type="file"
                    id="inputEdit"
                    name="inputEdit"
                    style={{ display: 'none' }}
                    placeholder=""
                    onChange=""
                    autoComplete=""
                  />
                  <label
                    htmlFor="inputEdit"
                    type="submit"
                    className="text-[#9EA0A5] font-semibold lg:text-lg pl-1"
                  >
                    Edit
                  </label>
                </form>
              </div>
              <div className="lg:pt-10 2xl:pt-20 lg:pl-10">
                <div className="flex flex-col lg:space-y-2">
                  <h1 className="lg:text-lg 2xl:text-4xl">Lois Tomlinson</h1>
                  <h2 className="lg:text-sm 2xl:text-2xl">Web Developer</h2>
                  <p className="flex items-center text-[#9EA0A5] lg:text-xs ">
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
                  <p className=" text-[#9EA0A5] font-normal lg:text-sm 2xl:text-lg ">Freelancer</p>
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <button
                type="submit"
                className="w-full h-[50px] bg-[#5E50A1] text-2xl text-white rounded-md shadow-md hover:bg-yellow"
              >
                Simpan
              </button>
              <button
                type="submit"
                className="w-full h-[50px] text-2xl text-[#5E50A1] rounded-md shadow-md hover:bg-grey-white outline outline-offset-1 outline-[#5E50A1] outline-1 "
              >
                Batal
              </button>
            </div>
          </div>
          {/* End Profile */}

          {/* Form */}
          <div className="space-y-10 w-[600px] h-[3508px]">
            {/* Data Diri */}
            <div className="w-full h-[751px] shadow-md bg-white mt-48 rounded-md">
              <div className="mx-10 py-5 ">
                <h1 className="font-semibold text-2xl text-[#1F2A36]">Data diri</h1>
              </div>
              <hr className="w-full text-[#C4C4C4]" />
              <form className="m-10 space-y-5">
                <div className="space-y-3">
                  <h1 className="font-normal text-base text-[#9EA0A5]">Nama Perushaan</h1>
                  <input
                    type="text"
                    placeholder="Masukan nama perushaan"
                    className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                  />
                </div>
                <div className="space-y-3">
                  <h1 className="font-normal text-base text-[#9EA0A5]">Bidang</h1>
                  <input
                    type="text"
                    placeholder="Masukan bidang perusahaan ex : Financial"
                    className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                  />
                </div>
                <div className="space-y-3">
                  <h1 className="font-normal text-base text-[#9EA0A5]">Provinsi</h1>
                  <input
                    type="text"
                    placeholder="Masukan Provinsi"
                    className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                  />
                </div>
                <div className="space-y-3">
                  <h1 className="font-normal text-base text-[#9EA0A5]">Kota</h1>
                  <input
                    type="text"
                    placeholder="Masukan kota"
                    className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                  />
                </div>
                <div className="space-y-3">
                  <h1 className="font-normal text-base text-[#9EA0A5]">Deskripsi Singkat</h1>
                  <textarea
                    rows={4}
                    cols={50}
                    type="text"
                    placeholder="Tuliskan deskripsi singkat"
                    className="w-full h-[150px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                  />
                </div>
              </form>
            </div>
            {/* End Data Diri */}

            {/*  Skill */}
            <div className="w-full h-[227px] shadow-md bg-white mt-48 rounded-md">
              <div className="mx-10 py-5 ">
                <h1 className="font-semibold text-2xl text-[#1F2A36]">Skill</h1>
              </div>
              <hr className="w-full text-[#C4C4C4]" />
              <form className="m-10 space-y-5">
                <div className="space-x-12 flex">
                  <input
                    type="text"
                    placeholder="Javascript, Html, css"
                    className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                  />
                  <ButtonYellow
                    text={'Simpan'}
                    className={
                      'w-[100px] h-[50px] bg-[#FBB017] rounded-md text-white flex justify-center items-center font-bold text-base'
                    }
                  />
                </div>
              </form>
            </div>
            {/*  End Skill */}

            {/*  Pengalaman Kerja */}
            <div className="w-full lg:h-[872px] 2xl:h-[900px] shadow-md  mt-48 rounded-md">
              <div className="mx-10 py-5 ">
                <h1 className="font-semibold text-2xl text-[#1F2A36]">Pengalaman Kerja</h1>
              </div>
              <hr className="w-full text-[#C4C4C4]" />
              <form className="w-full  p-10 space-y-10">
                <div className="space-y-3">
                  <h1 className="font-normal text-base text-[#9EA0A5]">Posisi</h1>
                  <TextInput placeholder={'Web Developer'} />
                </div>
                <div className="w-full space-y-3">
                  <h1 className="font-normal text-base text-[#9EA0A5]">Nama Perushaan</h1>
                  <div className="w-full lg:flex flex-col items-start lg:space-y-5">
                    <TextInput placeholder={'PT Harus bisa'} className={'w-96'} />
                    <TimeInput label={'Dari Bulan/tahun'} />
                    <TimeInput label={'Sampai Bulan/tahun'} />
                  </div>
                </div>
                <div className="space-y-3">
                  <h1 className="font-normal text-base text-[#9EA0A5]">Deskripsi Singkat</h1>
                  <BoxInput placeholder={'Deskripsikan pekerjaan anda'} />
                </div>
                <hr className="text-[#C4C4C4]" />
                <ButtonWhite className={'text-[#FBB017]'} text={'Tambah pengalaman kerja'} />
              </form>
            </div>
            {/* End Pengalaman Kerja */}

            {/* Portofolio */}
            <div className="w-full lg:h-auto 2xl:h-auto shadow-md mt-48 rounded-md py-5">
              <div className="mx-10 py-5 ">
                <h1 className="font-semibold text-2xl text-[#1F2A36]">Portofolio</h1>
              </div>
              <hr className="w-full text-[#C4C4C4]" />
              <form className="m-10 space-y-10">
                <div className="space-y-3">
                  <h1 className="font-normal text-base text-[#9EA0A5]">Nama Aplikasi</h1>
                  <TextInput placeholder={'Masukan nama aplikasi'} />
                </div>
                <div className="space-y-3">
                  <h1 className="font-normal text-base text-[#9EA0A5]">Link Repository</h1>
                  <div className="">
                    <TextInput placeholder={'Masukan link repository'} />
                  </div>
                </div>
                <div className="space-y-3">
                  <h1 className="font-normal text-base text-[#9EA0A5]">Type Portofolio</h1>
                  <CheckBox />
                </div>
                <div className="space-y-3">
                  <h1 className="font-normal text-base text-[#9EA0A5]">Upload Gambar</h1>
                  <form className="">
                    <input
                      type="file"
                      id="inputFile"
                      name="inputFile"
                      style={{ display: 'none' }}
                      placeholder=""
                      onChange=""
                      autoComplete=""
                    />
                    <label
                      htmlFor="inputFile"
                      className=" flex flex-col space-y-9 cursor-pointer outline-dashed rounded-md outline-offset-2 outline-[#9EA0A5] outline-3 h-[348px]  justify-center items-center"
                    >
                      <img src={uploadLogo} alt="" />
                      <p className="text-lg">Drag & Drop untuk Upload Gambar Aplikasi Mobile</p>
                      <p className="">Atau cari untuk mengupload file dari direktorimu.</p>
                      <div className="flex space-x-10">
                        <div className="flex space-x-3 items-center">
                          <img src={uploadLogo2} alt="" width={35} />
                          <p className="text-sm">
                            High-Res Image <br />
                            PNG, JPG or GIF
                          </p>
                        </div>
                        <div className="flex space-x-3 items-center">
                          <img src={uploadLogo1} alt="" width={35} />
                          <p className="text-sm">
                            Size <br />
                            1080x1920 or 600x800
                          </p>
                        </div>
                      </div>
                    </label>
                  </form>
                </div>
                <hr className="text-[#C4C4C4]" />
                <ButtonWhite className={'text-[#FBB017]'} text={'Tambah pengalaman kerja'} />
              </form>
            </div>
            {/* End Portofolio */}
          </div>
          {/* End Form */}
        </section>
      </body>

      {/* Media Screen SM - MD */}
      <body className="lg:hidden mb-10 w-screen flex justify-center">
        <div className="bg-[#5E50A1] sm:w-full h-[500px] -z-10 sm:absolute"></div>
        <section className="sm:flex w-fu flex-col justify-between items-center w-full sm:px-5 ">
          <div className="sm:w-full h-[500px] mt-48 space-y-5 rounded-lg ">
            <div className="flex flex-col bg-white rounded-md shadow-md w-full h-full">
              <div className="flex flex-col items-center justify-center pt-16">
                <img src={company} alt="" className="rounded-full sm:w-[150px]" />
                <form className="flex pt-4 items-center">
                  <HiOutlinePencil
                    style={{
                      color: '#9EA0A5',
                      fontSize: 20
                    }}
                  />
                  <input
                    type="file"
                    id="inputEdit"
                    name="inputEdit"
                    style={{ display: 'none' }}
                    placeholder=""
                    onChange=""
                    autoComplete=""
                  />
                  <label
                    htmlFor="inputEdit"
                    type="submit"
                    className="text-[#9EA0A5] font-semibold md:text-xl pl-1"
                  >
                    Edit
                  </label>
                </form>
              </div>
              <div className="pt-20 sm:mx-10">
                <div className="flex flex-col space-y-3">
                  <h1 className="sm:text-2xl md:text-3xl">Lois Tomlinson</h1>
                  <h2 className="sm:text-lg md:text-xl">Web Developer</h2>
                  <p className="flex items-center text-[#9EA0A5] sm:text-xs md:text-sm">
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
                  <p className=" text-[#9EA0A5] md:text-md font-normal">Freelancer</p>
                </div>
              </div>
            </div>
            <div className="space-y-5 w-full">
              <button
                type="submit"
                className="w-full h-[50px] bg-[#5E50A1] sm:text-xl text-white rounded-md shadow-md hover:bg-yellow"
              >
                Simpan
              </button>
              <button
                type="submit"
                className="w-full h-[50px] sm:text-xl text-[#5E50A1] rounded-md shadow-md hover:bg-grey-white outline outline-offset-1 outline-[#5E50A1] outline-1 "
              >
                Batal
              </button>
            </div>
          </div>
          <div className="space-y-10 w-full">
            <div className="w-full h-[751px] shadow-md bg-white mt-48 rounded-md">
              <div className="px-10 py-5 ">
                <h1 className="font-semibold text-2xl text-[#1F2A36]">Data diri</h1>
              </div>
              <hr className="w-full text-[#C4C4C4]" />
              <form className="p-10 space-y-5">
                <div className="space-y-3">
                  <h1 className="font-normal text-base text-[#9EA0A5]">Nama Perushaan</h1>
                  <input
                    type="text"
                    placeholder="Masukan nama perushaan"
                    className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                  />
                </div>
                <div className="space-y-3">
                  <h1 className="font-normal text-base text-[#9EA0A5]">Bidang</h1>
                  <input
                    type="text"
                    placeholder="Masukan bidang perusahaan ex : Financial"
                    className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                  />
                </div>
                <div className="space-y-3">
                  <h1 className="font-normal text-base text-[#9EA0A5]">Provinsi</h1>
                  <input
                    type="text"
                    placeholder="Masukan Provinsi"
                    className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                  />
                </div>
                <div className="space-y-3">
                  <h1 className="font-normal text-base text-[#9EA0A5]">Kota</h1>
                  <input
                    type="text"
                    placeholder="Masukan kota"
                    className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                  />
                </div>
                <div className="space-y-3">
                  <h1 className="font-normal text-base text-[#9EA0A5]">Deskripsi Singkat</h1>
                  <textarea
                    rows={4}
                    cols={50}
                    type="text"
                    placeholder="Tuliskan deskripsi singkat"
                    className="w-full h-[150px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                  />
                </div>
              </form>
            </div>
            <div className="w-full h-[227px] shadow-md bg-white mt-48 rounded-md">
              <div className="mx-10 py-5 ">
                <h1 className="font-semibold text-2xl text-[#1F2A36]">Skill</h1>
              </div>
              <hr className="w-full text-[#C4C4C4]" />
              <form className="m-10 space-y-5">
                <div className="space-x-5 flex">
                  <input
                    type="text"
                    placeholder="Javascript, Html, css"
                    className="w-full h-[50px] p-3 rounded-sm outline outline-offset-2 outline-1 outline-[#E2E5ED] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                  />
                  <ButtonYellow
                    text={'Simpan'}
                    className={
                      'w-full h-[50px] bg-[#FBB017] rounded-md text-white flex justify-center items-center font-bold text-base'
                    }
                  />
                </div>
              </form>
            </div>
            <div className="w-full h-[900px] shadow-md bg-white mt-48 rounded-md">
              <div className="mx-10 py-5 ">
                <h1 className="font-semibold text-2xl text-[#1F2A36]">Pengalaman Kerja</h1>
              </div>
              <hr className="w-full text-[#C4C4C4]" />
              <form className="m-10 space-y-10">
                <div className="space-y-3">
                  <h1 className="font-normal text-base text-[#9EA0A5]">Posisi</h1>
                  <TextInput placeholder={'Web Developer'} />
                </div>
                <div className="space-y-3 w-full sm:flex flex-col">
                  <h1 className="font-normal text-base text-[#9EA0A5]">Nama Perushaan</h1>
                  <div className="sm:space-y-5">
                    <TextInput placeholder={'PT Harus bisa'} className={'w-full'} />
                    <TimeInput label={'Dari Bulan/tahun'} />
                    <TimeInput label={'Sampai Bulan/tahun'} />
                  </div>
                </div>
                <div className="space-y-3">
                  <h1 className="font-normal text-base text-[#9EA0A5]">Deskripsi Singkat</h1>
                  <BoxInput placeholder={'Deskripsikan pekerjaan anda'} />
                </div>
                <hr className="text-[#C4C4C4]" />
                <ButtonWhite className={'text-[#FBB017]'} text={'Tambah pengalaman kerja'} />
              </form>
            </div>
            <div className="w-full h-[120vh] shadow-md bg-white mt-48 rounded-md">
              <div className="mx-10 py-5 ">
                <h1 className="font-semibold text-2xl text-[#1F2A36]">Portofolio</h1>
              </div>
              <hr className="w-full text-[#C4C4C4]" />
              <form className="m-10 space-y-10">
                <div className="space-y-3">
                  <h1 className="font-normal text-base text-[#9EA0A5]">Nama Aplikasi</h1>
                  <TextInput placeholder={'Masukan nama aplikasi'} />
                </div>
                <div className="space-y-3">
                  <h1 className="font-normal text-base text-[#9EA0A5]">Link Repository</h1>
                  <div className="">
                    <TextInput placeholder={'Masukan link repository'} />
                  </div>
                </div>
                <div className="space-y-3">
                  <h1 className="font-normal text-base text-[#9EA0A5]">Type Portofolio</h1>
                  <CheckBox />
                </div>
                <div className="space-y-3">
                  <h1 className="font-normal text-base text-[#9EA0A5]">Upload Gambar</h1>
                  <form className="flex justify-center items-center ">
                    <input
                      type="file"
                      id="inputFile"
                      name="inputFile"
                      style={{ display: 'none' }}
                      placeholder=""
                      onChange=""
                      autoComplete=""
                    />
                    <label
                      htmlFor="inputFile"
                      className=" flex w-full flex-col sm:space-y-4 cursor-pointer outline-dashed rounded-md outline-offset-2 outline-[#9EA0A5] outline-3 h-[348px]  justify-center items-center sm:px-2"
                    >
                      <img src={uploadLogo} alt="" className="sm:w-20 md:w-36" />
                      <p className="sm:text-sm md:text-base text-center ">
                        Drag & Drop untuk Upload Gambar Aplikasi Mobile
                      </p>
                      <p className="text-center sm:text-xs md:text-sm">
                        Atau cari untuk mengupload file dari direktorimu.
                      </p>
                      <div className="flex sm:space-x-10">
                        <div className="flex space-x-3 items-center w-full">
                          <img src={uploadLogo2} alt="" className="sm:w-7 md:w-10" />
                          <p className="sm:text-[9px] md:text-[10px]">
                            High-Res Image PNG, JPG or GIF
                          </p>
                        </div>
                        <div className="flex space-x-3 items-center w-full">
                          <img src={uploadLogo1} alt="" className="sm:w-7 md:w-10" />
                          <p className="sm:text-[9px] md:text-[11px]">Size 1080x1920 or 600x800</p>
                        </div>
                      </div>
                    </label>
                  </form>
                </div>
                <hr className="text-[#C4C4C4]" />
                <ButtonWhite className={'text-[#FBB017]'} text={'Tambah pengalaman kerja'} />
              </form>
            </div>
          </div>
        </section>
      </body>
      <Footer />
    </main>
  );
};

export default EditProfileWorker;
