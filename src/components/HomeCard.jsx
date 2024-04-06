import PhotoProfile from "../assets/photo-profile.svg";
import { ButtonPurple } from "../components/Button";
import { HiOutlineLocationMarker } from "react-icons/hi";

const HomeCard = () => {
  return (
    <div>
      <div className="flex flex-col justify-between items-start gap-5 mx-5 my-5 md:my-16 md:flex-row md:items-center">
        <div className="flex flex-row items-center gap-10">
          <div>
            <img src={PhotoProfile} className="w-28 h-28 rounded-full" />
          </div>
          <div className="flex flex-col items-start gap-3">
            <h1 className="text-2xl font-semibold">Louis Tomlinson</h1>
            <p className="text-grey">Web developer</p>
            <div className="flex flex-row items-center gap-3 text-grey">
              <HiOutlineLocationMarker />
              <p>Lorem ipsum</p>
            </div>
            <div className="hidden md:flex flex-row gap-3">
              <label className="min-w-14 bg-yellow bg-opacity-60 border-2 border-yellow text-white text-center rounded-lg py-1 px-8">
                PHP
              </label>
              <label className="min-w-14 bg-yellow bg-opacity-60 border-2 border-yellow text-white text-center rounded-lg py-1 px-8">
                PHP
              </label>
              <label className="min-w-14 bg-yellow bg-opacity-60 border-2 border-yellow text-white text-center rounded-lg py-1 px-8">
                PHP
              </label>
              <label className="min-w-14 bg-yellow bg-opacity-60 border-2 border-yellow text-white text-center rounded-lg py-1 px-8">
                PHP
              </label>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 auto-cols-max gap-4 md:hidden">
          <label className="min-w-14 bg-yellow bg-opacity-60 border-yellow text-white text-sm text-center rounded-lg border py-1 px-4 md:w-auto md:text-base md:border-2 md:px-8">
            PHP
          </label>
        </div>
        <div className="mr-14 w-full md:w-40">
          <ButtonPurple text="Lihat Profile" />
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
