import React from 'react';
import Image from 'next/image';

const ProfilePic = () => {
  return (
    <div className='flex items-center justify-center py-5'>
      <div className='px-4 '>
        <Image
          className='rounded-full border-4 border-white'
          src='/images/aychimage.jpeg'
          alt='profile-pic'
          width={200}
          height={200}
          priority={true}
        />
        <h2 className='text-center font-bold text-white'>Henry Dominguez</h2>
      </div>
      <div>
        <Image
          className='rounded-full border-4 border-white'
          src='/images/grayboy.png'
          alt='profile-pic2'
          width={200}
          height={200}
          priority={true}
        />
        <h2 className='text-center font-bold text-white'>Aychdev</h2>
      </div>
    </div>
  );
};

export default ProfilePic;
