import Navbar from '../../components/Navbar';
import PhotoProfile from '../../assets/photo-profile.svg';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiInstagram, FiGithub, FiGitlab, FiMail } from 'react-icons/fi';
import Footer from '../../components/Footer';
// import { BoxInput, TextInput } from "../../components/Input";
import { Button } from '../../components/Button';
import Portfolio1 from '../../assets/portfolio1.svg';
import Tokped from '../../assets/tokped.svg';

const Portfolio = () => {
  // Dummy Data
  const skill = ['PHP', 'Javascript', 'React', 'NextJS', 'Tailwind', 'PostgreSQL'];
  const contact = {
    email: 'Louistommo@gmail.com',
    instagram: '@Louist91',
    github: '@Louistommo',
    gitlab: '@Louistommo91'
  };
  const portfolio = [
    {
      image: Portfolio1,
      name: 'Reminder app'
    },
    {
      image: Portfolio1,
      name: 'Consider app'
    },
    {
      image: Portfolio1,
      name: 'Jobless app'
    },
    {
      image: Portfolio1,
      name: 'Parameter app'
    },
    {
      image: Portfolio1,
      name: 'Cincai app'
    },
    {
      image: Portfolio1,
      name: 'Toko app'
    }
  ];
  const experience = [
    {
      image: Tokped,
      position: 'Engineer',
      job_place: 'Tokopedia',
      start_work: '1561939200',
      end_work: '1577836800',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.'
    },
    {
      image: Tokped,
      position: 'Front-end Web',
      job_place: 'Toko Biru',
      start_work: '1561939200',
      end_work: '1577836800',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.'
    }
  ];

  const experiencesWithDates = experience.map((exp) => {
    const startDate = new Date(Number(exp.start_work) * 1000);
    const endDate = new Date(Number(exp.end_work) * 1000);

    const options = {
      year: 'numeric',
      month: 'long'
    };

    const startDateFormat = startDate.toLocaleDateString('en-US', options);
    const endDateFormat = endDate.toLocaleDateString('en-US', options);

    const diffInMonths =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      endDate.getMonth() -
      startDate.getMonth();

    const duration = diffInMonths > 1 ? `${diffInMonths} months` : `1 month`;

    return {
      ...exp,
      start_work: startDateFormat,
      end_work: endDateFormat,
      duration: duration
    };
  });
  // Dummy Data

  return (
    <div className="relative">
      <Navbar />
      {/* Content Left  */}
      <div className="relative flex flex-col md:flex-row bg-grey-white z-10 gap-28 px-5 py-8 lg:px-16 md:py-28 2xl:px-48">
        <div className="bg-primary h-[340px] w-full absolute top-0.5 left-0 -z-10"></div>
        <div className="w-full md:w-1/3 bg-white rounded-md p-6 mt-4 flex flex-col gap-20 ">
          <div className="flex flex-col items-start gap-4 mb-10">
            <div className="w-full flex flex-row justify-center">
              <img src={PhotoProfile} className="w-40 h-40 rounded-full" />
            </div>
            <h1 className="text-2xl font-semibold">Louis Tomlinson</h1>
            <p className="text-grey">Web developer</p>
            <div className="flex flex-row items-center gap-3 text-grey">
              <HiOutlineLocationMarker size={25} />
              <p>Purwokerto, Jawa Tengah</p>
            </div>
            <p className="text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis
              nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.
            </p>
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
          <div className="flex flex-col gap-8">
            <div className="flex flex-row items-center gap-5 text-grey">
              <FiMail size={30} />
              <p>{contact.email}</p>
            </div>
            <div className="flex flex-row items-center gap-5 text-grey">
              <FiInstagram size={30} />
              <p>{contact.instagram}</p>
            </div>
            <div className="flex flex-row items-center gap-5 text-grey">
              <FiGithub size={30} />
              <p>{contact.github}</p>
            </div>
            <div className="flex flex-row items-center gap-5 text-grey">
              <FiGitlab size={30} />
              <p>{contact.gitlab}</p>
            </div>
          </div>
          <Button className="bg-primary hover:bg-[#483d7e]">Hire</Button>
        </div>
        {/* Content Right  */}
        <div className="w-full bg-white rounded-md px-6 py-10 flex flex-col gap-20">
          {/* Portfolio  */}
          <div className="flex flex-col items-start gap-8">
            <h1 className="font-semibold text-2xl">
              Portofolio
              <hr className="bg-primary h-1 rounded-full mt-2" />
            </h1>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4">
              {portfolio.map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <img src={item.image} alt="..." className="w-80 rounded-md" />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Experience  */}
          <div className="w-11/12 flex flex-col items-start">
            <h1 className="font-semibold text-2xl">
              Pengalaman kerja
              <hr className="bg-primary h-1 rounded-full mt-2" />
            </h1>
            <div className="flex flex-col gap-4 mt-8">
              {experiencesWithDates.map((item, index) => (
                <div key={index} className="flex flex-col gap-4 md:flex-row md:gap-8">
                  <div className="min-w-32">
                    <img src={item.image} alt="..." className="w-20 md:w-28 ml-2" />
                  </div>
                  <div className="flex flex-col gap-4 md:gap-8">
                    <div className="flex flex-col gap-2">
                      <h1 className="font-semibold text-xl md:text-2xl">{item.position}</h1>
                      <p className="font-base text-lg md:text-xl">{item.job_place}</p>
                      <label className="font-base text-base md:text-lg text-grey flex flex-col md:flex-row gap-2 md:gap-8">
                        {item.start_work} - {item.end_work} <p>{item.duration}</p>
                      </label>
                    </div>
                    <p className="text-base md:text-lg">{item.description}</p>
                    <div className="w-full bg-[#E2E5ED] h-[1px]"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
