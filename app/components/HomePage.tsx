import React from 'react';
import ProfilePic from './ProfilePic';
import Introduction from './Introduction';

const HomePage = () => {
  return (
    <div>
      <ProfilePic />
      <div className='mt-8'>
        <Introduction />
      </div>
    </div>
  );
};

export default HomePage;
