import React, { ReactNode } from 'react';
import Image from 'next/image';

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
    {
      name: 'Aychdev NFT',
      description:
        'My NFT site built on the Solana blockchain. Built using Typescript, DaisyUI, Tailwind CSS, Next.js, Metaplex SDK.',
      image: '/images/aychdevnft.png',
      website: 'https://aychdevnft.vercel.app/',
      github: 'https://github.com/aych-dev/AychdevNFT',
    },
    {
      name: 'AychGPT',
      description:
        'AychGPT uses the OpenAI GPT-3 API to create a chatbox similar to ChatGPT. Built using Typescript, Node/Express, React, Tailwind CSS, DaisyUI ',
      image: '/images/aychgpt.png',
      website: 'https://aychgpt.vercel.app/',
      github: 'https://github.com/aych-dev/AychGPT',
    },
  ];

  const projectElement: JSX.Element[] = projectArray.map((project, index) => {
    return (
      <div key={index} className='p-3 items-center justify-center'>
        <div
          className='shadow-lg rounded-lg border border-white max-w-2xl'
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
          <div className='mt-4 px-2'>
            <h2 className='text-xl font-semibold'>{project.name}</h2>
            <p className='mt-2 md:text-sm'>{project.description}</p>
          </div>
          <div className='flex items-center justify-center font-semibold mt-2 '>
            <a
              href={project.website}
              target='_blank'
              rel='noopener noreferrer'
              className='mr-4'
            >
              Website
            </a>
            <a href={project.github} target='_blank' rel='noopener noreferrer'>
              GitHub
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className=' text-white sm:grid grid-cols-4 items-center justify-center min-w-full flex-grow'>
      {projectElement}
    </div>
  );
};

export default Projects;
