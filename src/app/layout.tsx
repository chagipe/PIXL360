import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Loader } from "@/components/site/Loader";
import { CustomCursor } from "@/components/site/CustomCursor";
import { ScrollToTop } from "@/components/site/ScrollToTop";
import { TransitionLayout } from "@/components/site/TransitionLayout";

export const metadata: Metadata = {
  title: "PIXL 360 | Precisión Aeroespacial",
  description: "Servicios profesionales de drones, filmación aérea, inspección, mapeo y datos de precisión."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Loader />
        <TransitionLayout>{children}</TransitionLayout>
        <ScrollToTop />
        <CustomCursor />
      </body>
    </html>
  );
}
