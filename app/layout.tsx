import Navigation from '../components/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: "%s | Let's go NextJS",
    default: "Let's go NextJS",
  },
  description: "Let's go into a movie world with NestJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Navigation />
      <body>{children}</body>
    </html>
  );
}
