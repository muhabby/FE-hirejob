import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const HomeCard = ({ photo, name, position, province, city, skill, to }) => {
  const skillData = skill.split(', ');
  // console.log(skillData);
  return (
    <div>
      <div className="flex flex-col justify-between items-start gap-5 mx-5 my-5 md:my-16 md:flex-row md:items-center">
        <div className="flex flex-row items-center gap-10">
          <div>
            <img src={photo} className="w-28 h-28 rounded-full" />
          </div>
          <div className="flex flex-col items-start gap-3">
            <h1 className="text-2xl font-semibold">{name}</h1>
            <p className="text-grey">{position}</p>
            <div className="flex flex-row items-center gap-3 text-grey">
              <HiOutlineLocationMarker size={25} />
              <p>
                {city}, {province}
              </p>
            </div>
            <div className="hidden md:flex md:w-[600px] flex-wrap gap-3">
              {skillData.map((item, index) => (
                <label
                  key={index}
                  className="min-w-14 bg-yellow bg-opacity-60 border-2 border-yellow text-white text-sm text-center rounded-lg py-1 px-5"
                >
                  {item}
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 items-center md:hidden">
          {skillData.map((item, index) => (
            <label
              key={index}
              className="min-w-8 text-sm bg-yellow bg-opacity-60 border-1 border-yellow text-white text-center rounded-lg py-1 px-4"
            >
              {item}
            </label>
          ))}
        </div>
        <div className="mr-14 w-full md:w-40">
          <Link to={to}>
            <Button className="bg-primary hover:bg-[#483d7e]">Lihat Profile</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
