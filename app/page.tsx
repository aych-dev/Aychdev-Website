import Image from 'next/image';
import Navbar from './components/navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='flex min-h-screen flex-col items-center justify-between p-24 text-white'>
        <div>My Portfolio</div>
      </main>
    </>
  );
}
