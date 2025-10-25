import type { Metadata } from 'next';
import { inter, playfair } from '@/lib/fonts';
import { MouseFollower } from '@/components/ui/MouseFollower';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Nestcraft | Premium Real Estate & Luxury Homes',
    template: '%s | Nestcraft',
  },
  description:
    'Discover exceptional properties across prime locations in Nigeria. Expert guidance for buying, selling, and renting luxury homes.',
  keywords: [
    'real estate',
    'luxury homes',
    'properties for sale',
    'Nigeria real estate',
    'apartments',
    'houses',
    'buy property',
    'rent property',
  ],
  authors: [{ name: 'Nestcraft' }],
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    shortcut: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nestcraft.com',
    siteName: 'Nestcraft',
    title: 'Nestcraft | Premium Real Estate & Luxury Homes',
    description:
      'Discover exceptional properties across prime locations in Nigeria. Expert guidance for buying, selling, and renting luxury homes.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nestcraft | Premium Real Estate & Luxury Homes',
    description:
      'Discover exceptional properties across prime locations in Nigeria. Expert guidance for buying, selling, and renting luxury homes.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icon.png" type="image/png" />
      </head>
      <body>
        <MouseFollower />
        {children}
      </body>
    </html>
  );
}