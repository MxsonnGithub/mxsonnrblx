import "@/app/globals.css";

import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

const ms_sans_serif = localFont({
  src: [
    { path: "../fonts/ms_sans_serif.woff2", weight: "400", style: "normal" },
    {
      path: "../fonts/ms_sans_serif_bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata = {
  author: "NotMxsonn",
  title: "Mxsonn - Web Developer",
  description:
    "Hey, I am a 13 y/o that just randomly started coding and then it became my passion!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ms_sans_serif.className}>
      <body className="overflow-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
