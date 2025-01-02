import { Raleway, Taviraj } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const raleway = Raleway({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-raleway",
});

const taviraj = Taviraj({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-taviraj",
});

export const metadata = {
  title: "Kalakriti",
  description: "A Handmade in Andaman",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${taviraj.variable} font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
