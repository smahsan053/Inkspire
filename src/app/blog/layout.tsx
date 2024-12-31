"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import "../../app/globals.css";
import { Provider } from "react-redux";
import store from "../store"; // Path to your store file

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Only render layout content after the component has mounted on the client
  if (!isClient) {
    return null; // Or render a loading spinner, or an empty fragment
  }

  return (
    <html lang="en">
      <body>
        <Navbar />
        <Provider store={store}>{children}</Provider>
        <footer className="bg-gray-900 text-white py-4">
          <div className="container mx-auto px-8 text-center">
            <p>&copy; 2024 Inkspire. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
