import { Montserrat } from "next/font/google";
import Head from "next/head";
import Navbar from "./components/Navbar";

const monstserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Darko | Create Designer and Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  );
}
