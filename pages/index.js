import { Montserrat } from "next/font/google";

const monstserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1 className="text-5xl font-bold">
        Welcome from the Next.Js Page Router
      </h1>
    </main>
  );
}
