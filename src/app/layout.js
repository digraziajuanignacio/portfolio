import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./Components/BootstrapClient";
import NavBar from "./Components/NavBar";
import Footer from './Components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DTech PortFolio",
  description: "Mi Portafolio virtual",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="d-flex flex-column min-vh-100">
          {/* Navbar */}
          <NavBar />
          
          {/* Contenido principal */}
          <main className="flex-grow-1">
            {children}
          </main>
          
          {/* Footer fijo */}
          <Footer />
        </div>
        
        <BootstrapClient />
      </body>
    </html>
  );
}