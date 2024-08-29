import { useEffect, useState } from "react";
import "../globals.scss";
import type { AppProps } from "next/app";
import Loading from "../components/Loading";

export default function App({ Component, pageProps }: AppProps) {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setHasLoaded(true), 2500);
  }, []);

  return (
    <>
      <div className={`loading-container ${hasLoaded ? "has-loaded" : ""}`}>{!hasLoaded && <Loading />}</div>
      <Component {...pageProps} />
    </>
  );
}
