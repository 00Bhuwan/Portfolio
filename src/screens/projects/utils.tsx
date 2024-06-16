import {FaNodeJs, FaPython, FaReact} from 'react-icons/fa';

import {SiMongodb} from 'react-icons/si';

import porfolioLogo from '../../../public/logo.svg';
import NumberGuess from './bhuwan1.png';
import Hangman from './bhuwan2.png';
import WebScrapper from './bhuwan3.png';
import TicTao from './bhuwan4.png';

export interface Project {
  name: string;
  description: string;
  img: string;
  stack: JSX.Element[];
  url?: string;
  git?: string;
}

export const comerciaProjects: Project[] = [
  {
    name: 'Number Guessing Game',
    description: `Create a program that generates a random number and asks the user to guess it. Provide hints if the guess is too high or too low. `,
    img: NumberGuess,
    stack: [<FaPython key="python" color="#5ED4F4" className="text-[28px]" />],
  },
  {
    name: 'Hangman Game',
    description: `Create a hangman game where users have to guess a word letter by letter. Include a limit on the number of incorrect guesses.
 `,
    img: Hangman,
    stack: [<FaPython key="node" color="#F1941D" className="text-[28px]" />],
  },
  {
    name: 'Web Scraper',
    description: `Write a script to scrape data from a website, such as extracting headlines from a news site. 
    `,
    img: WebScrapper,
    stack: [<FaPython key="python" color="#5ED4F4" className="text-[28px]" />],
  },
  {
    name: 'Tic-Tac-Toe Game',
    description: `Write a program to play a game of Tic-Tac-Toe with a user, either against the computer or another player.`,
    img: TicTao,
    stack: [<FaPython key="python" color="#2F75C0" className="text-[28px]" />],
  },
];

export const customProjects: Project[] = [
  {
    name: 'My Portfolio',
    url: '',
    description: `Welcome to my portfolio! Explore my diverse range of projects,
      showcasing my expertise in building responsive and dynamic Python Developer.
      Dive into my code, discover my skills,
      and get in touch to discuss exciting opportunities. Let's bring ideas to life through technology!`,
    img: porfolioLogo,
    stack: [
      <FaPython key="python" color="#5ED4F4" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <FaNodeJs key="node" color="#86cf35" className="text-[28px]" />,
      <SiMongodb key="mongodb" color="#2c913f" className="text-[28px]" />,
    ],

    git: 'https://github.com/enikosoft/portfolio',
  },
];
