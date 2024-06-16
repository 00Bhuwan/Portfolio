import {ReactElement, lazy} from 'react';
import {FaFilePdf, FaHtml5, FaPython} from 'react-icons/fa';
import {VscJson} from 'react-icons/vsc';
import {Navigate, createBrowserRouter} from 'react-router-dom';
import {Layout} from 'screens';

export interface RoutesLinkItems {
  logo: ReactElement;
  title: string;
  path: string;
  closable?: boolean;
}

const Home = lazy(() => import('./../../screens/home/Home'));
const About = lazy(() => import('./../../screens/about/About'));
const Contact = lazy(() => import('./../../screens/contact/Contact'));
const PdfPriever = lazy(() => import('./../../screens/pdfPreviewer/PdfPreviewer'));
const Projects = lazy(() => import('./../../screens/projects/Projects'));
const Technologies = lazy(() => import('./../../screens/technologies/Technologies'));

export const routesLinkItems = (pdfPreviewerOpen: boolean): RoutesLinkItems[] => {
  const cvMenuItem = pdfPreviewerOpen
    ? [
        {
          logo: <FaFilePdf color="#C60604" />,
          title: 'cv.pdf',
          path: '/cv',
          closable: true,
        },
      ]
    : [];

  return [
    {
      logo: <FaPython color="#5ED4F4" />,
      title: 'home.py',
      path: '/',
    },
    {
      logo: <FaHtml5 color="#DE4B25" />,
      title: 'aboute.html',
      path: '/about',
    },
    {
      logo: <FaPython color="#2F75C0" />,
      title: 'stack.py',
      path: '/technologies',
    },
    {
      logo: <VscJson color="#f1980d" />,
      title: 'projects.json',
      path: '/projects',
    },
    {
      logo: <FaPython color="#E9D54B" />,
      title: 'contact.py',
      path: '/contact',
    },
    ...cvMenuItem,
  ];
};

export const routes = (pdfPreviewerOpen: boolean) => {
  return createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {path: '*', element: <Navigate to="/" replace />},
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/projects',
          element: <Projects />,
        },
        {
          path: '/technologies',
          element: <Technologies />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        pdfPreviewerOpen
          ? {
              path: '/cv',
              element: <PdfPriever />,
            }
          : {},
      ],
    },
  ]);
};
