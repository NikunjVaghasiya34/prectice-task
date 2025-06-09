import Header from './Component/Header/page';
import './globals.css';
import { Lato } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
});

export const metadata = {
  title: 'My App',
  description: 'Using Lato with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lato.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
