import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='text-white py-4 border'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-xl font-bold'>Aychdev</div>
        <div className='flex space-x-4'>
          <a href='https://resume.creddle.io/resume/dmxtfydshbx'>Resume</a>
          <Link href='/projects'>Projects</Link>
          <a href='https://www.linkedin.com/in/henry-dominguez-856937260/'>
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
