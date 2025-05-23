import "../styles/global.css";
import Navigation from "../components/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Movie App Built with Next.js",
    default: "Movie App Built with Next.js",
  },
  description: "Let's go into a movie world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
