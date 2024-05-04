import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RAG-Enhanced Query System",
  description:
    "A system that uses the RAG Architecture to enhance user experience and facilitate efficient model training and query handling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
