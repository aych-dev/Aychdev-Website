import React from 'react';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='min-w-full text-2xl text-white py-3'>
      <div className='flex items-center justify-center p-4'>
        <Link className='mx-2' href={'https://twitter.com/aychdev'}>
          <FaTwitter />
        </Link>
        <Link className='mx-2' href={'mailto:henrydominguez.dev@gmail.com'}>
          <GrMail />
        </Link>
        <Link className='mx-2' href={'https://github.com/aych-dev'}>
          <FaGithub />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
