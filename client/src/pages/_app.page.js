import { useEffect, useRef } from "react";

// STYLES
import "@/styles/style.scss";
import "@/styles/tailwind.css";
import "@/styles/custom/_index.scss";

// I18N
import { appWithTranslation } from "next-i18next";

// SMOOTH SCROLL
import Lenis from "@studio-freight/lenis";

function App({ Component, pageProps }) {
  const lenisRef = useRef(null);

  // useEffect(() => {
  //   if (typeof window === "undefined") return;

  //   const lenis = new Lenis({
  //     duration: 1.1,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //     direction: "vertical",
  //     gestureDirection: "vertical",
  //     smooth: true,
  //     smoothTouch: false,
  //     touchMultiplier: 2,
  //     infinite: false,
  //   });

  //   lenisRef.current = lenis;

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);

  //   return () => {
  //     if (lenisRef.current) {
  //       lenisRef.current.destroy();
  //     }
  //   };
  // }, []);

  return <Component {...pageProps} />;
}

export default appWithTranslation(App);
