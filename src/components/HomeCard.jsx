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
              <HiOutlineLocationMarker size={25} />
              <p>Lorem ipsum</p>
            </div>
            <div className="hidden md:flex flex-row gap-3">
              <label className="min-w-14 bg-yellow bg-opacity-60 border-2 border-yellow text-white text-center rounded-lg py-1 px-5">
                PHP
              </label>
              <label className="min-w-14 bg-yellow bg-opacity-60 border-2 border-yellow text-white text-center rounded-lg py-1 px-5">
                PHP
              </label>
              <label className="min-w-14 bg-yellow bg-opacity-60 border-2 border-yellow text-white text-center rounded-lg py-1 px-5">
                PHP
              </label>
              <label className="min-w-14 bg-yellow bg-opacity-60 border-2 border-yellow text-white text-center rounded-lg py-1 px-5">
                5+
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 items-cecnter md:hidden">
          <label className="w-auto bg-yellow bg-opacity-60 border-yellow text-white text-sm text-center rounded-lg border py-1 px-4">
            PHP
          </label>
          <label className="w-auto bg-yellow bg-opacity-60 border-yellow text-white text-sm text-center rounded-lg border py-1 px-4">
            Javascript
          </label>
          <label className="w-auto bg-yellow bg-opacity-60 border-yellow text-white text-sm text-center rounded-lg border py-1 px-4">
            React
          </label>
          <label className="w-auto bg-yellow bg-opacity-60 border-yellow text-white text-sm text-center rounded-lg border py-1 px-4">
            Tailwind
          </label>
          <label className="w-auto bg-yellow bg-opacity-60 border-yellow text-white text-sm text-center rounded-lg border py-1 px-4">
            PostgreSQL
          </label>
          <label className="w-auto bg-yellow bg-opacity-60 border-yellow text-white text-sm text-center rounded-lg border py-1 px-4">
            5+
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
