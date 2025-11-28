import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Student Profile",
  description: "Student details page with image and JSON object",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
