import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/app/components/NavBar";
import Header from "@/app/components/Header";


export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
        <head>
            <title>One Piece Sharpie Cube</title>
            <meta charSet="UTF-8"/>
            <meta name="description" content="Learn more about the One Piece Sharpie Cube, view the card list and simulate pack openings!"/>
            <meta name="keywords" content="One Piece, OPTCG, Trading Card Game, Cube, Cube Draft, Sharpie Cube"/>
            <meta name="author" content="Christopher Poole"/>

            <meta property="og:image" content="https://one-piece-sharpie-cube-cards.s3.us-east-1.amazonaws.com/share-image.jpg" />
            <meta property="og:description"
                content="Learn more about the One Piece Sharpie Cube, view the card list and simulate pack openings!" />
            <meta property="og:title" content="One Piece Sharpie Cube" />
        </head>
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
