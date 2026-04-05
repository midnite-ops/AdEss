import { Geist, Geist_Mono, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import MobileSidebar from "@/components/MobileSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "@/components/Navbar";
// import CountryPrompt from "@/components/CountryPrompt";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "AdEss Construction",
  description: "Building excellence across regions",
  icons: {
    icon: "/adess-favicon.svg", // 👈 your icon
  },
  openGraph: {
    title: "AdEss Construction",
    description: "Building excellence across regions",
    url: "https://ad-ess.vercel.app",
    siteName: "AdEss",
    images: [
      {
        url: "/adess-logo-colored.png", // 👈 your image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
}


export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${poppins.variable} ${roboto.variable} ${geistMono.variable} antialiased `}
      >
        {/* <CountryPrompt /> */}
        <SidebarProvider defaultOpen= {false}>
          <div className="min-h-screen w-full">
            <MobileSidebar />
            {/* <NavbarWrapper/> */}
            <Navbar />
            <main className="flex-1">
              {children}
              <Footer />
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
