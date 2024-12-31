'use client'
import { Geist, Geist_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "./store";

export const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"], // Choose weights
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider store={store}>

        {children}
        </Provider>
      </body>
    </html>
  );
}
