import Image from 'next/image';
import Navbar from './components/navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='flex min-h-screen flex-col items-center justify-between p-24 text-white'>
        <div>My Portfolio</div>
      </main>
      <footer className='flex items-center justify-center py-4 text-xl border border-solid'>
        Footer
      </footer>
    </>
  );
}
