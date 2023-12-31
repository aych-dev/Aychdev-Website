import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ProfilePic from './components/ProfilePic';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aychdev',
  description: "Welcome to Henry's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex flex-col min-h-screen'>
          <Navbar />
          <ProfilePic />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
