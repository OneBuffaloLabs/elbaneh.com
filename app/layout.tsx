// app/layout.tsx
import type { Metadata, Viewport } from "next";
import GoogleAnalytics from "@/components/_silabs/GoogleAnalytics";
//Theme imports
import Preloader from "@/layouts/Preloader";
import "@/public/css/animate.css";
import "@/public/css/glitche-basic.css";
import "@/public/css/glitche-layout.css";
import "@/public/css/ionicons.css";
import "@/public/css/magnific-popup.css";
import "@/public/css/template-colors/orange.css";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import State from "@/context/context";

// --- Environment Variables ---
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_APP_GA_TRACKING_ID;
const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "SiloCityPages";
const APP_DESC = process.env.NEXT_PUBLIC_APP_DESC || "Default description";
const APP_KEYWORDS =
  process.env.NEXT_PUBLIC_APP_KEYWORDS || "default, keywords";

// --- Metadata ---
// Define static metadata for the entire application
export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`, // Example: "About | SiloCityPages"
  },
  description: APP_DESC,
  keywords: APP_KEYWORDS?.split(",").map((k) => k.trim()),
  manifest: "/manifest.json",
};

// --- Viewport ---
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  // themeColor: "#ffffff", // Optional: Add theme color
};

// Setup a font (example using Inter)
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {GA_TRACKING_ID && <GoogleAnalytics gaId={GA_TRACKING_ID} />}

      <body className={robotoMono.variable}>
        <Preloader />
        <State>{children} </State>
      </body>
    </html>
  );
}
