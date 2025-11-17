import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Agentic ? Stunning Modern UI',
  description: 'A beautiful, responsive landing page built with Next.js and Tailwind CSS.',
  metadataBase: new URL('https://agentic-32af1e15.vercel.app'),
  openGraph: {
    title: 'Agentic ? Stunning Modern UI',
    description: 'A beautiful, responsive landing page built with Next.js and Tailwind CSS.',
    url: 'https://agentic-32af1e15.vercel.app',
    siteName: 'Agentic',
    images: [
      { url: '/og.png', width: 1200, height: 630, alt: 'Agentic' },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentic ? Stunning Modern UI',
    description: 'A beautiful, responsive landing page built with Next.js and Tailwind CSS.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
