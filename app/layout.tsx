import type { Metadata } from 'next';
import { Inter, Barlow } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-barlow',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dieu SteriMed Pvt. Ltd. | Trusted Sterilization Monitoring Solutions',
  description:
    'Delivering advanced sterilization monitoring products designed to meet global compliance standards — because patient safety begins with precision sterilization.',
  keywords: [
    'sterilization monitoring',
    'chemical indicators',
    'process challenge devices',
    'infection control',
    'healthcare safety',
    'autoclave indicators',
    'Dieu SteriMed',
  ],
  openGraph: {
    title: 'Dieu SteriMed Pvt. Ltd.',
    description:
      'Trusted Sterilization Monitoring Solutions for Safer Surgeries.',
    url: 'https://dieusterimed.com',
    siteName: 'Dieu SteriMed',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://dieusterimed.com/wp-content/uploads/2025/08/DIEU-STERIMED.png',
        width: 972,
        height: 274,
        alt: 'Dieu SteriMed Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dieu SteriMed Pvt. Ltd.',
    description: 'Trusted Sterilization Monitoring Solutions for Safer Surgeries.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
