import "@/styles/globals.css";
import { Open_Sans } from "next/font/google";

// Open Sans similar font to Segoe UI.
// Although I may use the default Segoe UI that's available from system fonts

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
