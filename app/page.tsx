import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Starter App",
  description: "Welcome to my Next.js starter app",
  viewport: "width=device-width, initial-scale=1",
};

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1>Hello, World!</h1>
      <Link href="/about">About page</Link>
    </main>
  );
}
