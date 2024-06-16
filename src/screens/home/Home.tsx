import {TypeAnimation} from 'react-type-animation';
import Logo from '../projects/port.jpg';
import Logo2 from '../projects/port2.jpg';
import './Home.css';
import bhuwanCV from './bhuwancv.pdf';
export const Home = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = bhuwanCV;
    link.download = 'bhuwancv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewCV = () => {
    window.open(bhuwanCV, '_blank');
  };

  return (
    <div className="flex flex-col-reverse items-center justify-center sm:px-10 lg:pb-40 xl:flex-row xl:pb-0 xl:pt-20">
      <div className="flex w-full flex-col items-center py-10 text-xl xl:w-1/2 xl:items-end">
        <div className="m-5 w-fit xl:m-20">
          <p className="text-xl text-themePrimaryColor">
            <span className="span">{'<'}</span>Hi 👋 my name is
          </p>

          <h1 className="pt-2 text-3xl font-bold text-primaryColor opacity-70 sm:text-5xl">
            Bhuwan Joshi <span className="text-3xl font-extrabold text-themePrimaryColor sm:text-5xl">{'/>'}</span>{' '}
          </h1>
          <TypeAnimation
            sequence={[
              'Computer Engineer Student',
              1000,
              'Python Developer',
              1000,
              'Machine Learning',
              1000,
              'Ai enthusiastic',
              1000,
              'Software Engineer',
              1000,
            ]}
            wrapper="span"
            speed={1}
            style={{
              paddingTop: '8px',
              fontWeight: '300',
              fontSize: '1.5rem',
              color: '#768390',
              display: 'inline-block',
            }}
            repeat={Infinity}
          />
          <div className="mt-10 flex w-full flex-col sm:flex-row">
            <button
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              onClick={handleDownloadCV}
            >
              Download CV
            </button>
            <button
              className="mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 sm:ml-4 sm:mt-0"
              onClick={handleViewCV}
            >
              View CV
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center xl:relative xl:top-[-64px] xl:w-1/2 xl:pt-10">
        <div className="flex gap-6">
          <img className="h-90 animate-fade-in-up w-80" loading="lazy" src={Logo} alt="Logo 1" />
          <img className="h-90 animate-fade-in-down w-80" loading="lazy" src={Logo2} alt="Logo 2" />
        </div>
      </div>
    </div>
  );
};

export default Home;
