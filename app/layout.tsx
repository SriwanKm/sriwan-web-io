import type { Metadata } from "next";
import localFont from "next/font/local";
import { Lexend, Abril_Fatface } from 'next/font/google'
import "./globals.css";
import RetroButton from "./componants/RetroButton";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const lexend = Lexend({ subsets: ['latin'], weight: "400", variable: "--font-lexend" })
const abril_fatface = Abril_Fatface({ subsets: ['latin'], weight: "400", variable: "--font-abril-fatface" })

export const metadata: Metadata = {
  title: "SRIWAN KHAOMUANG",
  description: "Generated by SRIWAN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://static.form-data.com/js/form-data-tools.v1.min.js"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lexend.variable} ${abril_fatface.variable}`}
      >

        <div className="wrapper">
          <div className="text-scrolling">
            <div className="row row-2">
              <p><span className="text-xl bold md:text-3xl">SRIWAN</span><span className="text-xl md:text-3xl">KHAOMUANG</span></p>
            </div>
          </div>
        </div>


        <div className="bg-[#FFFFFF]/[.10] drop-shadow-[30px_20px_15px_rgba(0,0,0,1)] py-8 md:py-10 backdrop-brightness-110 backdrop-blur-xl md:rounded-3xl md:w-11/12 m-auto">


        </div>
        <nav className="nav flex justify-around absolute pt-2 top-12 left-0 right-0 z-10">
          <a href="#about-me"> <div>About Me</div></a>
          <a href="#my-works"><div>My Works</div></a>
          <a href="#resume"><div>Resume</div></a>
          <a href="#contact">
            <RetroButton
              text="Contact"
              color="bg-[#FFA6FF]" />
          </a>
        </nav>

        {children}
      </body>
    </html>
  );
}
