import { Inter } from 'next/font/google';
import Header from '../components/header';
import Footer from '../components/footer';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'YourBrand - Modern Website',
//   description: 'A modern Next.js website with professional design',
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
