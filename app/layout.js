import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/app/components/nav";
import Footer from "@/app/components/footer";
import AuthProvider from "@/app/components/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kentec Global Concepts",
  description: "We deal with concrete stamping floor",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <div className="max-w-6xl mx-auto p-4 lg:p-0 lg:pt-4">
            <Navbar />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    </AuthProvider>
  );
}

// className={`${geistSans.variable} ${geistMono.variable} antialiased`}
