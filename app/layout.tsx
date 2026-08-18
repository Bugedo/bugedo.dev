import { Inter, Space_Grotesk } from 'next/font/google';
import '../styles/globals.css';
import { LocaleProvider } from '@/components/providers/LocaleProvider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display-family',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body-family',
  display: 'swap',
});

export const metadata = {
  title: 'Nicolás Bugedo',
  description:
    'Full Stack Developer (React, Next.js, Node, TypeScript). Three production systems live. Remote, GMT-3, available immediately.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="flex min-h-screen flex-col font-body antialiased">
        <LocaleProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
