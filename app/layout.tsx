import type { Metadata } from 'next';
import type { ReactNode } from 'react';

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
