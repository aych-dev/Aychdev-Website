import React, { ReactNode } from 'react';
import Image from 'next/image';
import { JsxElement } from 'typescript';

type PersonalProjects = {
  name: string;
  description: string;
  image: string;
  website: string;
  github: string;
};

const Projects = (): JSX.Element => {
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

  const projectElement: JSX.Element[] = projectArray.map((project, index) => {
    return (
      <div
        key={index}
        className='border-white border shadow-lg rounded-lg p-4 w-80'
      >
        <div className='relative h-48'>
          <Image
            src={project.image}
            alt={project.name}
            layout='fill'
            objectFit='cover'
            className='rounded-t-lg'
          />
        </div>
        <div className='mt-4'>
          <h2 className='text-xl font-semibold'>{project.name}</h2>
          <p className='mt-2 text-gray-600'>{project.description}</p>
          <div className='mt-4'>
            <a
              href={project.website}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 hover:underline mr-4'
            >
              Website
            </a>
            <a
              href={project.github}
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-700 hover:underline'
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    );
  });

  return <div className='flex-grow text-white'>{projectElement}</div>;
};

export default Projects;
