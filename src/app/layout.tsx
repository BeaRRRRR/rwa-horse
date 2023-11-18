import type { Metadata } from 'next'
import "./globals.css";

import { Web3Modal } from "../context/Web3Modal";

export const metadata: Metadata = {
  title: "Web3Modal",
  description: "Web3Modal Example",
};

export type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props ) {
  return (
    <html lang="en">
      <body>
        <Web3Modal>{children}</Web3Modal>
      </body>
    </html>
  );
}
