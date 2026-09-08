import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.qinyu-chen.com'),
  title: {
    default: 'Efficient Intelligence Group · Leiden University',
    template: '%s',
  },
  description:
    'Research at the intersection of efficient AI, neuromorphic computing, bio-signal processing, embedded systems, and intelligent perception.',
  openGraph: {
    title: 'Efficient Intelligence Group · Leiden University',
    description: 'Efficient systems for intelligent interaction—from algorithms and architectures to embedded hardware.',
    type: 'website',
    siteName: 'Efficient Intelligence Group',
  },
  twitter: {
    card: 'summary',
    title: 'Efficient Intelligence Group · Leiden University',
    description: 'Efficient systems for intelligent interaction—from algorithms and architectures to embedded hardware.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <div id="main-content">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
