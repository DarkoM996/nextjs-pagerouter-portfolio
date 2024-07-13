import "@/styles/globals.css";
import { Open_Sans } from "next/font/google";

const opensans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font--bodoni--moda",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={opensans.className}>
      <Component {...pageProps} />
    </main>
  );
}
