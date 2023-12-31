import type {Metadata} from 'next';
import {Inter} from 'next/font/google';

import '../styles/main.scss';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Bryan Arévalo Portfolio',
  description: 'Bryan Arévalo Portfolio'
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
