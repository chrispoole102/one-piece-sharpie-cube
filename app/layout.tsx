import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/app/components/NavBar";
import Header from "@/app/components/Header";

export const metadata: Metadata = {
  title: "One Piece Sharpie Cube",
  description: "one piece sharpie cube",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
      <div className={'flex flex-col'}>
          <Header></Header>
          <div className={'md:flex md:flex-row'}>
              <NavBar></NavBar>
              {children}
          </div>
      </div>

      </body>
    </html>
  );
}
