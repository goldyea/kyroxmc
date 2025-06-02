import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";

import "@/styles/globals.css";
import type { FC, PropsWithChildren } from "react";
import Header from "@/components/Header";
import { ThemeProvider } from "@/features/theme";
import clsx from "clsx";
import Menu from "@/components/Menu";
import { TempoInit } from "./tempo-init";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "KyroxMC",
  description:
    "Kyrox — A premium Minecraft server experience. In search of the incredible.",
  icons: {
    icon: "/KyroxMC.png",
    shortcut: "/KyroxMC.png",
    apple: "/KyroxMC.png",
  },
  openGraph: {
    title: "KyroxMC",
    description:
      "Kyrox — A premium Minecraft server experience. In search of the incredible.",
    url: "https://your-site.com", // change to your actual site URL
    siteName: "KyroxMC",
    images: [
      {
        url: "/KyroxMC.png",
        width: 512,
        height: 512,
        alt: "KyroxMC Icon",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "KyroxMC",
    description:
      "Kyrox — A premium Minecraft server experience. In search of the incredible.",
    images: ["/KyroxMC.png"],
  },
};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, montserrat.variable)}>
        <Script src="https://api.tempo.new/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />
        <ThemeProvider>
          <Header />
          {children}
          <Menu className="xl:hidden" />
          <TempoInit />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default Layout;
