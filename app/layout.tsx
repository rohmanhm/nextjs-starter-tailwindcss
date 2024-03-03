import '@/styles/global.css';

import { Inter as FontSans } from 'next/font/google';

import { cn } from '@/lib/utils';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Nextjs Starter by @rohmanhm',
  description: 'The Nextjs Starter with @rohmanhm configuration',
  manifest: '/manifest.json',
};

export default async function RootLayout({
  children,
}: {
  readonly children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
