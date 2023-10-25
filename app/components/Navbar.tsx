import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='text-white p-4 min-w-full '>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/' className='text-xl font-bold'>
          Aychdev
        </Link>
        <div className='flex space-x-4'>
          <a
            href='https://resume.creddle.io/resume/dmxtfydshbx'
            target='_blank'
          >
            Resume
          </a>
          <Link href='/projects'>Projects</Link>
          <a
            href='https://www.linkedin.com/in/henry-dominguez-856937260/'
            target='_blank'
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
