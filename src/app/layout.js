import "./CSS/globals.css";
import NavBar from "./Components/Layout/NavBar";
import Footer from "./Components/Layout/Footer";
import BootstrapClient from "./Components/Layout/BootstrapClient";

export const metadata = {
  title: "Juan Ignacio | Portfolio", 
  description: "Portafolio profesional y servicios de IT",
  icons: {
    icon: '/icons/favicon.ico', 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
