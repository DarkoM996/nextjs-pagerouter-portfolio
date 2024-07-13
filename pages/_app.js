import "@/styles/globals.css";
import { Work_Sans } from "next/font/google";

const worksans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font--bodoni--moda",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={worksans.className}>
      <Component {...pageProps} />
    </main>
  );
}
