import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "For Clement · From Sharon",
  description: "A little place, made with love. For Clement, from Sharon.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
