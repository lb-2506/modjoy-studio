import Link from "next/link";

// I18N
import { useTranslation } from "next-i18next";

// ROUTER
import { useRouter } from "next/router";

// SVG
import { InstagramSvg, LinkedInSvg } from "../_svgs/_index";

export default function FooterComponent() {
  const { t } = useTranslation("common");
  const router = useRouter();

  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function handleScrollToSection(id) {
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
    <footer className="py-12 tablet:py-24 bg-darkGreen ">
      <div className="max-w-[90%] mx-auto">
        <div className="flex flex-col gap-12 desktop:gap-0 desktop:flex-row items-center justify-between">
          <div className="desktop:w-[10%]">
            <img
              src="/img/logo.png"
              draggable={false}
              alt="logo"
              className="max-h-[30px]"
            />
          </div>

          <ul className="flex flex-col mobile:flex-row justify-center items-center gap-12 text-creamy desktop:w-[80%]">
            <li>
              <button
                onClick={() => handleScrollToSection("#expertises")}
                className="cursor-pointer text-nowrap"
              >
                {t("nav.list.1")}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollToSection("#skills")}
                className="cursor-pointer text-nowrap"
              >
                {t("nav.list.2")}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollToSection("#projects")}
                className="cursor-pointer text-nowrap"
              >
                {t("nav.list.3")}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollToSection("#team")}
                className="cursor-pointer text-nowrap"
              >
                {t("nav.list.4")}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollToSection("#work")}
                className="cursor-pointer text-nowrap"
              >
                {t("nav.list.5")}
              </button>
            </li>
          </ul>

          <ul className="flex justify-end gap-4 items-center desktop:w-[10%]">
            <li>
              <a
                href="https://www.instagram.com/modjoy_studio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="instagram"
              >
                <InstagramSvg />
              </a>
            </li>
            
            <li>
              <a
                href="https://www.linkedin.com/company/modjoy-studio/about/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedIn"
              >
                <LinkedInSvg />
              </a>
            </li>
          </ul>
        </div>

        <hr className="text-creamy opacity-10 mt-24 mb-12" />

        <div
          style={{ fontFamily: "'Satoshi Medium', sans-serif" }}
          className="flex flex-col tablet:flex-row justify-center items-center text-center gap-4 text-creamy"
        >
          <p>© 2025 Modjoy Studio. All rights reserved.</p>
          <Link href="/privacy-policy">
            <a className="underline">Privacy Policy</a>
          </Link>

          <Link href="/terms">
            <a className="underline">Terms of Use</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
