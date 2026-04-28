import type { Metadata } from 'next';
import { Inter, Newsreader } from 'next/font/google';
import { SiteNav } from './_components/SiteNav';
import '../src/styles/tokens.css';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The Brand Report — Design System',
  description:
    'Tokens, typography, and reference React components for The Brand Report.',
  metadataBase: new URL('https://designsystem.thebrand.report'),
  openGraph: {
    title: 'The Brand Report — Design System',
    description:
      'The publication’s design language: parchment, Newsreader, Inter, one orange accent.',
    url: 'https://designsystem.thebrand.report',
    siteName: 'TBR Design System',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body>
        <SiteNav />
        <main>{children}</main>
        <footer className="site-footer">
          <span>The Brand Report · Design System</span>
          <a href="https://github.com/dcoe-tbr/tbr-design-system">GitHub</a>
        </footer>
      </body>
    </html>
  );
}
