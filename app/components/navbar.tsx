const Navbar: React.FC = () => {
  return (
    <nav className='text-white py-4 border border-solid'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-xl font-bold'>Portfolio</div>
        <div className='flex space-x-4'>
          <a>Resume</a>

          <a>Current Projects</a>

          <a href='https://www.linkedin.com'>LinkedIn</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
