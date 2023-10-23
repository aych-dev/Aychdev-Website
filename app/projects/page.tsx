import React from 'react';
import Image from 'next/image';

type PersonalProjects = {
  name: string;
  description: string;
  image: string;
  website: string;
  github: string;
};

const Projects = () => {
  const projectArray: PersonalProjects[] = [
    {
      name: 'Game Hub',
      description:
        'A gaming hub to search up your favorite games. Built using Typescript, Chakra UI and Node/Express',
      image: '/images/gamehub.png',
      website: 'https://gamehub-ten.vercel.app/',
      github: 'https://github.com/aych-dev/GameHub',
    },
    {
      name: 'Mad Mash',
      description:
        'Browse through the Mad Lads NFT Solana Collection and select which one you like more. Built using Typescript, React, Material UI, Tailwind and Node/Express.',
      image: '/images/madmash.png',
      website: 'https://madmash.vercel.app/',
      github: 'https://github.com/aych-dev/MadMash',
    },
    {
      name: 'SOL Gallery',
      description:
        'SOLGallery allows a user to view all the NFTs owned by a Solana wallet. Built using React, Helius, Typescript, Tailwind and Material UI.',
      image: '/images/solgallery.png',
      website: 'https://solgallery-git-main-aych-dev.vercel.app/',
      github: 'https://github.com/aych-dev/SOLGallery',
    },
  ];

  return <div className='flex-grow text-white'></div>;
};

export default Projects;
