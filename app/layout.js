import "./globals.css";
import CrosshairCursor from "@/components/CrosshairCursor";
import { profile } from "@/data/profile";

export const metadata = {
  title: `${profile.name} | Portfolio`,
  description: profile.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CrosshairCursor />
        {children}
      </body>
    </html>
  );
}
