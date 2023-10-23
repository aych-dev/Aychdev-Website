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
      <div className='p-7'>
        <div
          key={index}
          className='shadow-lg rounded-lg max-w-2xl border border-white'
          style={{ height: '400px' }}
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
          <div className='mt-4 p-4'>
            <h2 className='text-xl font-semibold'>{project.name}</h2>
            <p className='mt-2'>{project.description}</p>
            <div className='mt-3 flex items-center justify-center font-semibold'>
              <a
                href={project.website}
                target='_blank'
                rel='noopener noreferrer'
                className=' hover:underline mr-4'
              >
                Website
              </a>
              <a
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className='flex-grow text-white'>
      <div className='flex flex-col-3 items-center justify-center '>
        {projectElement}
      </div>
    </div>
  );
};

export default Projects;
