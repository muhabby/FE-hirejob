import photoAuth from '../assets/image/photo-auth.png';
import LogoWhite from '../assets/logo-white.svg';

const LeftContentAuth = () => {
  return (
    <div>
      {/* LeftContentAuth */}
      <div
        className="flex flex-col"
        style={{
          height: 800,
          width: '100%',
          backgroundImage: `url(${photoAuth})`,
          backgroundSize: 'cover',
          padding: 30
        }}>
        <img src={LogoWhite} height={100} width={70} />
        <div className="flex items-center" style={{ height: '100%', width: '100%' }}>
          <h1 style={{ color: 'white', fontSize: 30, fontWeight: '600' }}>
            Temukan developer berbakat & terbaik di berbagai bidang keahlian
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LeftContentAuth;
