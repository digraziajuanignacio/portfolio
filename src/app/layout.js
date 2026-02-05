import { Raleway } from "next/font/google";
import "./CSS/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./Components/BootstrapClient";
import NavBar from "./Components/NavBar";
import Footer from './Components/Footer';

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: "Juan Ignacio | Portfolio", 
  description: "Portafolio profesional y servicios de IT",
  icons: {
    icon: '/favicon.ico', 
  },
  // -------------------
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
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