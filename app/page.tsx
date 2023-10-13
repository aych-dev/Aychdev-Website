import Navbar from './components/Navbar';
import MainPage from './components/MainPage';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='flex min-h-screen flex-col items-center p-24 text-white'>
        <MainPage />
      </main>
      <footer className='flex items-center justify-center  text-xl border border-solid'>
        Footer
      </footer>
    </>
  );
}
