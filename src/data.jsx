import {
  FaTwitter,
  FaFacebook,
  FaSquarespace,
  FaWallet,
  FaTree,
  FaSocks,
} from 'react-icons/fa';

import img1 from './assets/images/tour-1.jpeg';
import img2 from './assets/images/tour-2.jpeg';
import img3 from './assets/images/tour-3.jpeg';
import img4 from './assets/images/tour-4.jpeg';

export const pageLinks = [
  {
    id: 1,
    href: '#home',
    link: 'home',
  },
  {
    id: 2,
    href: '#about',
    link: 'about',
  },
  {
    id: 3,
    href: '#services',
    link: 'services',
  },
  {
    id: 4,
    href: '#tours',
    link: 'tours',
  },
];

export const socialLinks = [
  {
    id: 1,
    href: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 2,
    href: 'https://www.facebook.com',
    icon: <FaFacebook />,
  },
  {
    id: 3,
    href: 'https://www.facebook.com',
    icon: <FaSquarespace />,
  },
];

export const services = [
  {
    id: 1,
    icon: <FaWallet />,
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
  {
    id: 2,
    icon: <FaTree />,
    title: 'Endless Hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
  {
    id: 3,
    icon: <FaSocks />,
    title: 'Amazing Comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
];

export const tours = [
  {
    id: 1,
    img: img1,
    date: 'August 26th, 2020',
    title: 'Tibet Adventure',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'China',
    duration: 6,
    price: 2100,
  },
  {
    id: 2,
    img: img2,
    date: 'October 1th, 2020',
    title: 'Best Of Java',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'Indonesia',
    duration: 11,
    price: 1400,
  },
  {
    id: 3,
    img: img3,
    date: 'September 15th, 2020',
    title: 'Explore Hong Kong',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'Hong Kong',
    duration: 8,
    price: 5000,
  },
  {
    id: 4,
    img: img4,
    date: 'December 5th, 2019',
    title: 'Kenya Highlights',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'Kenya',
    duration: 20,
    price: 3300,
  },
];
