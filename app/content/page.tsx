import React from 'react';
import VideoContent from '../components/VideoContent';

const Content = () => {
  const videoPath = '/videos/aychback.mp4';
  return (
    <main className='flex-grow flex flex-col items-center p-12 text-white '>
      <div className='max-w-2xl'>
        <div className='border border-white'>
          <div className='border bg-white'>
            <h1 className='ml-4 text-black font-bold'>You're Not Alone... </h1>
          </div>
          <p className='m-4'>
            One of my passions is creating video content and I have found a way
            to implement it into my coding journey. I've been documenting my
            journey since day 1 not only to look back on to see my progress, but
            to show a side that I think a lot of aspring developers can relate
            too. This journey can come with a mix of emotions sometimes more
            negative than positive, but I hope that my content can be a reminder
            that they are not alone and to keep staying resilient 💪. If you
            want to follow along feel free to shoot me a follow on tok or
            Twitter.
          </p>
        </div>
        <div className='flex items-center justify-center'>
          <div className='mt-4 border border-white max-w-xs'>
            <VideoContent videoLink={videoPath} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Content;
