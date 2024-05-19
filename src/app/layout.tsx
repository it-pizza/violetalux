import type {Metadata} from 'next';

export const metadata: Metadata = {
  icons: 'favicon.png',
  title: 'Salons - Violeta Lux',
  description: 'A wide range of hairdressing and cosmetic services to meet your needs.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
