import '../styles/globals.css';

export const metadata = {
  title: 'Nicolás Bugedo',
  description: 'Portfolio created with Next.js App Router and TailwindCSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
