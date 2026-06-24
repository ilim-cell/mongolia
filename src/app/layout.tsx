import type {Metadata} from 'next';
import './globals.css';
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"

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
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@700;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body className="antialiased bg-white text-black selection:bg-black selection:text-white overflow-x-hidden">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
