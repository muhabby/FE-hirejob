import LogoWhite from '../assets/logo-white.svg';

const Footer = () => {
  return (
    <div>
      {/* Footer  */}
      <div className="flex flex-col bg-primary text-white gap-10 px-5 pt-8 pb-4 lg:px-16 md:pt-16 md:pb-6 2xl:px-48">
        <div className="w-full md:w-1/4">
          <img src={LogoWhite} className="w-40" />
          <div className="text-md mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus
            auctor.
          </div>
        </div>
        <div className="w-full border border-white rounded-full"></div>
        <div className="flex flex-row justify-between">
          <div className="w-1/2">
            <p>2020 Pewworld. All right reserved</p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:gap-10 lg:gap-24">
            <p>Telepon</p>
            <p>Email</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
