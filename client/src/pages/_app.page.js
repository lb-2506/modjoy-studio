import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

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
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Initialisation de Lenis
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Réinitialiser le scroll lors des changements de route
    const handleRouteChange = () => {
      if (lenisRef.current) {
        lenis.scrollTo(0, { immediate: true }); // Force le scroll en haut
      } else {
        window.scrollTo(0, 0); // Fallback
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return <Component {...pageProps} />;
}

export default appWithTranslation(App);
