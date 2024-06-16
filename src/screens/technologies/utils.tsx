import {BiLogoPostgresql} from 'react-icons/bi';
import {FaCss3, FaHtml5, FaPython} from 'react-icons/fa';
import {
  SiJavascript,
  SiMysql,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiTailwindcss,
} from 'react-icons/si';

export const skillset = [
  {
    name: '',
    items: [
      {
        label: 'Javascipt',
        icon: <SiJavascript color="#E9D54B" className="text-[48px] sm:text-[64px]" />,
        expirience: 1,
      },
      {
        label: 'Python',
        icon: <FaPython color="#2F75C0" className="text-[48px] sm:text-[64px]" />,
        expirience: 6,
      },
    ],
  },
  {
    name: 'Front-End',
    items: [
      {
        label: 'HTML5',
        icon: <FaHtml5 color="#DE4B25" className="text-[48px] sm:text-[64px]" />,
        expirience: 7,
      },
      {
        label: 'CSS3',
        icon: <FaCss3 color="#2873BC" className="text-[48px] sm:text-[64px]" />,
        expirience: 6,
      },
      {
        label: 'Tailwind',
        icon: <SiTailwindcss color="#3FBDCC" className="text-[48px] sm:text-[64px]" />,
        expirience: 1,
      },
    ],
  },
  {
    name: 'Back-End',
    items: [
      {
        label: 'Python',
        icon: <FaPython color="#86cf35" className="text-[48px] sm:text-[64px]" />,
        expirience: 3,
      },

      {
        label: 'Postgresql',
        icon: <BiLogoPostgresql color="#3A6596" className="text-[48px] sm:text-[64px]" />,
        expirience: 4,
      },
    ],
  },
  {
    name: 'Database Technologies',
    items: [
      {
        label: 'Postgres SQL',
        icon: <SiPostgresql color="#2F75C0" className="text-[48px] sm:text-[64px]" />,
        expirience: 1,
      },
      {
        label: 'My Sql',
        icon: <SiMysql color="#2F75C0" className="text-[48px] sm:text-[64px]" />,
        expirience: 6,
      },
    ],
  },
  {
    name: 'Data Visualization',
    items: [
      {
        label: 'Pandas',
        icon: <SiPandas color="#F1941D" className="text-[48px] sm:text-[64px]" />,
        expirience: null,
      },
      {
        label: 'Numpy',
        icon: <SiNumpy color="#6058f8" className="text-[48px] sm:text-[64px]" />,
        expirience: null,
      },
      {
        label: 'Py Torch',
        icon: <SiPytorch className="text-[48px] text-white light:text-black sm:text-[64px]" />,
        expirience: null,
      },
      {
        label: 'Python with OOP',
        icon: <SiPython className="text-[48px] text-white light:text-black sm:text-[64px]" />,
        expirience: null,
      },

      {
        label: 'Mathmatics With Python',
        icon: <SiPython color="#146BFF" className="text-[48px] sm:text-[64px]" />,
        expirience: null,
      },
    ],
  },
];
