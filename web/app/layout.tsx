import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Footer from "./_components/Footer";
import { RootMetaData } from "@/constants/MetaData/root";
import { GlobalStyles } from "@mui/material";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = RootMetaData;


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
      <ThemeSwitcher>
        <GlobalStyles styles={{
          'body': {margin: 0}
        }}/>
        {children}
        <Footer />
      </ThemeSwitcher>
      </body>
    </html>
  );
}
