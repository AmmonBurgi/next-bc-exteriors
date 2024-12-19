import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

import Footer from '../components/Footer';
import Header from '../components/Header';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "B&C Exteriors - Exterior Remodeling Services in Utah",
  description: "B&C Exteriors offers top-quality exterior remodeling services in Utah Valley, including...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="frame">
          <Header />
            <main>
              {children}
            </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
