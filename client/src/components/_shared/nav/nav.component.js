import { useState, useEffect } from "react";
import Link from "next/link";

// ROUTER
import { useRouter } from "next/router";

// I18N
import { useTranslation } from "next-i18next";

export default function NavbarComponent() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (isMenuOpen) {
      const currentScrollY = window.scrollY;
      setScrollPosition(currentScrollY);

      document.body.style.position = "fixed";
      document.body.style.top = `-${currentScrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";

      window.scrollTo(0, scrollPosition);
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
    };
  }, [isMenuOpen, scrollPosition]);

  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function handleScrollToSection(id) {
    setIsMenuOpen(false);
    await wait(300);
    if (router.pathname !== "/") {
      await router.push("/");
      setTimeout(() => {
        const section = document.querySelector(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    } else {
      requestAnimationFrame(() => {
        const section = document.querySelector(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  }

  return (
    <nav>
      {/* BACKDROP CLIQUABLE */}
      <div
        className={`fixed w-full h-full inset-0 flex desktop:hidden justify-center items-center ${
          isMenuOpen
            ? "bg-white bg-opacity-5 backdrop-blur-sm"
            : "pointer-events-none"
        } transition-bg duration-200 ease-in-out z-30`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* BOUTON BURGER */}
      <div className="bg-darkGreen absolute top-0 left-0 right-0 flex items-center justify-between px-6 desktop:hidden h-[80px] z-40">
        <Link href="/">
          <a>
            <img
              src="/img/logo.png"
              draggable={false}
              alt="logo"
              className="left-6 top-6 max-h-[30px] z-30"
            />
          </a>
        </Link>

        <button
          className="flex flex-col items-end"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div
            className={`h-0.5 bg-creamy transform transition-all duration-500 ease-in-out w-8 ${
              isMenuOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <div className="my-2">
            <div
              className={`h-0.5 bg-creamy transition-all duration-500 ease-in-out ${
                isMenuOpen ? "opacity-0 w-8" : "opacity-100 w-6"
              }`}
            />
          </div>
          <div
            className={`h-0.5 bg-creamy transform transition-all duration-500 ease-in-out ${
              isMenuOpen ? "-rotate-45 -translate-y-2.5 w-8" : "w-4"
            }`}
          />
        </button>
      </div>

      {/* MENU */}
      <div
        className={`${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } transition-all duration-300 ease-in-out desktop:translate-y-0 rounded-b-2xl desktop:rounded-b-none bg-darkGreen absolute top-0 left-0 right-0 flex flex-col gap-20 desktop:gap-0 desktop:flex-row desktop:items-center justify-between px-6 desktop:px-12 py-6 z-30`}
      >
        <Link href="/">
          <a>
            <img
              src="/img/logo.png"
              draggable={false}
              alt="logo"
              className="max-h-[30px] hidden desktop:block"
            />
          </a>
        </Link>

        <ul className="flex flex-col desktop:flex-row desktop:items-center desktop:gap-12 text-creamy">
          <li>
            <button
              onClick={() => handleScrollToSection("#expertises")}
              className="py-4 cursor-pointer"
            >
              {t("nav.list.1")}
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollToSection("#skills")}
              className="py-4 cursor-pointer"
            >
              {t("nav.list.2")}
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollToSection("#projects")}
              className="py-4 cursor-pointer"
            >
              {t("nav.list.3")}
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollToSection("#team")}
              className="py-4 cursor-pointer"
            >
              {t("nav.list.4")}
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollToSection("#work")}
              className="py-4 cursor-pointer"
            >
              {t("nav.list.5")}
            </button>
          </li>

          <button
            className="bg-orange text-darkGreen rounded-2xl px-4 py-2 mt-6 w-[300px] desktop:w-auto mx-auto desktop:mx-0 desktop:mt-0"
            data-tally-open="wkKoEe"
            data-tally-layout="modal"
            data-tally-width="400"
            data-tally-emoji-animation="wave"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("nav.button.estimate")}
          </button>
        </ul>
      </div>
    </nav>
  );
}
