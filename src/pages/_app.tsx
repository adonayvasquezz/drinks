import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Raleway } from "next/font/google";

const projectFont = Raleway({
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={projectFont.className}>
      <Component {...pageProps} />
    </main>
  );
}
