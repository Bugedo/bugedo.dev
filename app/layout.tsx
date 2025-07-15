import '../styles/globals.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Nicolás Bugedo | Portfolio',
  description: 'Killer portfolio created with Next.js 15, TailwindCSS v4, and Radix Themes',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Theme appearance="dark" accentColor="gray" radius="medium" scaling="95%">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
