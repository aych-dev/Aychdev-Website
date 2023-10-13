import Navbar from './components/Navbar';
import HomePage from './components/HomePage';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='flex min-h-screen flex-col items-center p-24 text-white'>
        <HomePage />
      </main>
      <footer className='flex items-center justify-center  text-xl border border-solid'>
        Footer
      </footer>
    </>
  );
}
