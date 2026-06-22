
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Steppe Odyssey | Discover Mongolia',
  description: 'A professional exploration of Mongolian heritage, landscapes, and culture.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body className="font-body antialiased bg-white text-black selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
