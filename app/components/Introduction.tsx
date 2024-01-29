import React from 'react';

const Introduction = () => {
  return (
    <>
      <div className='max-w-2xl'>
        <div className='border border-white '>
          <div className='border bg-white'>
            <h1 className='ml-4 text-black font-bold'>My Name Is...</h1>
          </div>
          <p className='m-4 '>
            My name is Henry Dominguez and I go by the alias Aychdev (eych-dev)
            online. I am a software engineer interested in all things blockchain
            and web/app development. It was not until I got older that I grew a
            huge interest in coding/development so I hope my story inspires
            anyone to go for it. I love that my work feels meaningful and I
            really enjoy helping up-and-coming aspiring developers. More than
            anything, I want my story to inspire people to believe in their
            potential regardless of what they might feel or hear from others. Do
            not hesitate to reach out!
          </p>
        </div>
        <div className='border border-white mt-5 '>
          <div className='border bg-white '>
            <h1 className=' text-black font-bold flex items-center justify-center'>
              Languages and Technologies
            </h1>
          </div>
          <div className='m-4 grid grid-cols-2 p-5 text-center text-customGreen '>
            <p className='my-1 font-semibold  '>Javascript</p>
            <p className='my-1 font-semibold '>Typescript</p>
            <p className='my-1 font-semibold '>React.js</p>
            <p className='my-1 font-semibold '>Node.js</p>
            <p className='my-1 font-semibold '>Next.js</p>
            <p className='my-1 font-semibold '>Express.js</p>
            <p className='my-1 font-semibold '>Python</p>
            <a
              href='https://www.helius.dev/'
              target='_blank'
              className='my-1 font-semibold hover:text-white '
            >
              Helius
            </a>
            <p className='my-1 font-semibold '>Web3.js</p>
            <p className='my-1 font-semibold '>MongoDB</p>
            <p className='my-1 font-semibold '>HTML</p>
            <p className='my-1 font-semibold '>Tailwind</p>
            <p className='my-1 font-semibold '>Chakra UI</p>
            <p className='my-1 font-semibold '>Material UI</p>
            <p className='my-1 font-semibold '>Bootstrap</p>
            <p className='my-1 font-semibold '>Git</p>
            <p className='my-1 font-semibold '>GitHub</p>
            <p className='my-1 font-semibold '>Heroku</p>
            <p className='my-1 font-semibold '>Vercel</p>
            <p className='my-1 font-semibold '>Netlify</p>
            <p className='my-1 font-semibold '>CSS</p>
            <p className='my-1 font-semibold '>OpenAI API</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
