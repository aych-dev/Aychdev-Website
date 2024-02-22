import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='text-white p-4 min-w-full '>
      <div className='container mx-auto flex justify-between items-center '>
        <Link href='/' className='text-m sm:text-xl font-bold'>
          Aychdev
        </Link>
        <div className='flex space-x-1 text-sm sm:space-x-4 sm:text-lg'>
          <Link href='/projects'>Projects</Link>
          <Link href='/content'>Content</Link>
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
