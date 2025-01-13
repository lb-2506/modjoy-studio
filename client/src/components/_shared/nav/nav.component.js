import Link from "next/link";

import { useRouter } from "next/router";

// I18N
import { useTranslation } from "next-i18next";

export default function NavbarComponent() {
  const { t } = useTranslation("common");

  function handleScrollToSection(id) {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-12 py-6 z-20">
      <Link href="/">
        <a>
          <img
            src="/img/logo.png"
            draggable={false}
            alt="logo"
            className="max-h-[30px]"
          />
        </a>
      </Link>

      <ul className="flex items-center gap-12 text-creamy">
        <li>
          <button
            onClick={() => handleScrollToSection("#expertises")}
            className="cursor-pointer"
          >
            {t("nav.list.1")}
          </button>
        </li>

        <li>
          <button
            onClick={() => handleScrollToSection("#skills")}
            className="cursor-pointer"
          >
            {t("nav.list.2")}
          </button>
        </li>

        <li>
          <button
            onClick={() => handleScrollToSection("#projects")}
            className="cursor-pointer"
          >
            {t("nav.list.3")}
          </button>
        </li>

        <li>
          <button
            onClick={() => handleScrollToSection("#team")}
            className="cursor-pointer"
          >
            {t("nav.list.4")}
          </button>
        </li>
        
        <li>
          <button
            onClick={() => handleScrollToSection("#work")}
            className="cursor-pointer"
          >
            {t("nav.list.5")}
          </button>
        </li>
        <button className="bg-orange text-darkGreen rounded-2xl px-4 py-2">
          {t("nav.button.estimate")}
        </button>
      </ul>
    </nav>
  );
}
