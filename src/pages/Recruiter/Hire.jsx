import Navbar from "../../components/Navbar"
import PhotoProfile from "../../assets/photo-profile.svg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Footer from "../../components/Footer";
import { BoxInput, TextInput } from "../../components/Input";
import { ButtonYellow } from "../../components/Button";

const Hire = () => {
  const profile_worker = {
    image: PhotoProfile,
    name: 'Louis Tomlinson',
    position: 'Web developer',
    province: 'Jawa Tengah',
    city: 'Purwokerto',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.'
  }
  const skill = [
    "PHP",
    "Javascript",
    "React",
    "NextJS",
    "Tailwind",
    "PostgreSQL"
  ];

  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row bg-grey-white gap-28 px-5 pt-8 pb-[200px] lg:px-16 md:pt-16 md:pb-[700px] 2xl:px-48">
        <div className="w-full md:w-1/3 bg-white rounded-md p-6 flex flex-col gap-8 ">
          <div className="w-full flex flex-row justify-center">
            <img src={[profile_worker.image]} className="w-28 h-28 rounded-full" />
          </div>
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-2xl font-semibold">{profile_worker.name}</h1>
            <p className="text-grey">{profile_worker.position}</p>
            <div className="flex flex-row items-center gap-3 text-grey">
              <HiOutlineLocationMarker size={25} />
              <p>{profile_worker.city}, {profile_worker.province}</p>
            </div>
            <p className="text-grey" >{profile_worker.description}</p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold">Skill</h1>
            <div className="flex flex-wrap gap-4 items-center">
              {skill.map((item, index) => (
                <label
                  key={index}
                  className="w-auto bg-yellow bg-opacity-60 border-yellow text-white text-sm text-center rounded-lg border py-2 px-5"
                >
                  {item}
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/4 flex flex-col gap-16 p-4 ">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-semibold">Hubungi Lous Tomlinson</h1>
            <p className="text-xl text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
          </div>
          <form className="flex flex-col gap-5">
            <TextInput 
              text="Untuk Posisi"
              name="position"
              placeholder="Fulltime Frontend Developer"
              // onChange={}
              autoComplete="current-position"
            />
            <BoxInput
              text="Deskripsi"
              name="message"
              placeholder="Berikan pesan kepada talent"
              // onChange={}
              autoComplete="current-position"
            />
            <div className="mt-10">
              <ButtonYellow text="Hire" />
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Hire