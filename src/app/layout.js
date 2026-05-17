import "./CSS/globals.css";
import NavBar from "./Components/Layout/NavBar";
import Footer from "./Components/Layout/Footer";
import BootstrapClient from "./Components/Layout/BootstrapClient";

export const metadata = {
  metadataBase: new URL('https://juanignacio.tech'), // Reemplazar con tu dominio real
  title: {
    default: "Juan Ignacio Di Grazia | Full-Stack Developer & IT Specialist",
    template: "%s | Juan Ignacio Di Grazia"
  },
  description: "Estudiante de Ingeniería en Sistemas (UTN). Especialista en desarrollo Full-Stack y soporte técnico de infraestructura IT. Buenos Aires, Argentina.",
  keywords: ["Juan Ignacio Di Grazia", "Full-Stack Developer", "IT Specialist", "UTN FRBA", "Soporte Técnico", "React", "Next.js", "Argentina"],
  authors: [{ name: "Juan Ignacio Di Grazia" }],
  creator: "Juan Ignacio Di Grazia",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://juanignacio.tech",
    title: "Juan Ignacio Di Grazia | Full-Stack Developer & IT Specialist",
    description: "Soluciones tecnológicas integrales: desde el código hasta la infraestructura.",
    siteName: "Juan Ignacio Portfolio",
    images: [
      {
        url: "/images/profilepicture.webp",
        width: 800,
        height: 800,
        alt: "Juan Ignacio Di Grazia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Ignacio Di Grazia | Full-Stack Developer & IT Specialist",
    description: "Desarrollo de software y soporte técnico especializado.",
    images: ["/images/profilepicture.webp"],
  },
  icons: {
    icon: '/icons/favicon.ico',
    apple: '/icons/favicon.ico', // Idealmente un png de 180x180
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="antialiased">
        <NavBar />
        <main>{children}</main>
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
