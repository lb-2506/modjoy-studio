import { useEffect, useRef, useState } from "react";

// I18N
import { useTranslation } from "next-i18next";

// COMPONENTS
import LogosHomeComponent from "./logos.home.component";
import HelixR3fComponent from "../_shared/r3f/helix/helix.r3f.component";

export default function HeroHomeComponent() {
  const { t } = useTranslation("hero-section");

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const smileyRef = useRef(null);
  const smiley2Ref = useRef(null);
  const smiley3Ref = useRef(null);
  const smiley4Ref = useRef(null);

  const [smileyStyle, setSmileyStyle] = useState({});
  const [smiley2Style, setSmiley2Style] = useState({});
  const [smiley3Style, setSmiley3Style] = useState({});
  const [smiley4Style, setSmiley4Style] = useState({});

  useEffect(() => {
    function handleGlobalMouseMove(e) {
      setMousePos({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
    };
  }, []);

  useEffect(() => {
    function updateSmileyStyle(ref, setStyle) {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const smileyCenterX = rect.left + rect.width / 2;
      const smileyCenterY = rect.top + rect.height / 2;

      const dx = mousePos.x - smileyCenterX;
      const dy = mousePos.y - smileyCenterY;
      let distance = Math.sqrt(dx * dx + dy * dy);

      const maxOffset = 30;

      if (distance < 35) {
        distance = 35;
      }

      if (distance < 300) {
        const factor = (300 - distance) / 300;
        const offsetX = (dx / distance) * maxOffset * factor;
        const offsetY = (dy / distance) * maxOffset * factor;

        setStyle({
          transform: `translate(${offsetX}px, ${offsetY}px)`,
          transition: "transform 0.1s ease",
        });
      } else {
        setStyle({
          transform: "translate(0px, 0px)",
          transition: "transform 0.2s ease",
        });
      }
    }

    updateSmileyStyle(smileyRef, setSmileyStyle);
    updateSmileyStyle(smiley2Ref, setSmiley2Style);
    updateSmileyStyle(smiley3Ref, setSmiley3Style);
    updateSmileyStyle(smiley4Ref, setSmiley4Style);
  }, [mousePos]);

  return (
    <div className="fixed top-0 -z-10 bg-darkGreen">
      <section
        style={{ pointerEvents: "all" }}
        className="h-[80dvh] flex justify-center items-center relative overflow-hidden"
      >
        <img
          src="/img/pointbg.png"
          alt="background"
          draggable={false}
          className="inset-0 h-full object-cover absolute opacity-40 tablet:opacity-30 pointer-events-none"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
            maskImage:
              "radial-gradient(ellipse, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskSize: "cover",
            maskSize: "cover",
          }}
        />

        <div className="relative max-w-[800px] text-creamy flex flex-col mt-12 gap-12 tablet:gap-8 items-center justify-center text-center">
          <img
            src="/img/avatars/hero-rocki.webp"
            alt="memoji"
            draggable={false}
            ref={smileyRef}
            style={smileyStyle}
            className="hidden tablet:block max-w-[100px] absolute -right-[12%] top-[5%] "
          />

          <img
            src="/img/avatars/hero-leo.webp"
            alt="memoji"
            draggable={false}
            ref={smiley2Ref}
            style={smiley2Style}
            className="hidden tablet:block max-w-[100px] absolute -left-[20%] bottom-[10%]"
          />

          <img
            src="/img/avatars/hero-axoue.webp"
            alt="memoji"
            draggable={false}
            ref={smiley3Ref}
            style={smiley3Style}
            className="hidden tablet:block max-w-[100px] absolute -left-[15%] top-[20%]"
          />

          <img
            src="/img/avatars/hero-swan.webp"
            alt="memoji"
            draggable={false}
            ref={smiley4Ref}
            style={smiley4Style}
            className="hidden tablet:block max-w-[100px] absolute -right-[20%] bottom-[30%]"
          />

          <h1
            className="text-[9vw] pt-[50px] mobile:pt-0 leading-[12vw] mobile:leading-[85px] tablet:text-[80px] flex items-center gap-2 mobile:gap-3 justify-center flex-wrap text-center"
            style={{ fontFamily: "'Brockmann Medium', sans-serif" }}
          >
            <div className="relative text-green border border-green px-3 mobile:pb-2 tablet:pb-4">
              {t("title.1")}
              <span className="absolute top-0 left-0 w-[6px] h-[6px] bg-creamy -translate-x-1/2 -translate-y-1/2 border-green border" />
              <span className="absolute top-0 right-0 w-[6px] h-[6px] bg-creamy translate-x-1/2 -translate-y-1/2 border-green border" />
              <span className="absolute bottom-0 left-0 w-[6px] h-[6px] bg-creamy -translate-x-1/2 translate-y-1/2 border-green border" />
              <span className="absolute bottom-0 right-0 w-[6px] h-[6px] bg-creamy translate-x-1/2 translate-y-1/2 border-green border" />
            </div>
            {t("title.2")}
            <span className="w-full mx-auto justify-center flex items-center gap-3">
              {t("title.3")}
              <img
                src="/img/smile.webp"
                alt="picto"
                draggable={false}
                className="h-[50px] tablet:h-[100px] tablet:w-[95px]"
              />
              {t("title.4")}
            </span>

            <span className="flex gap-3">
              {t("title.5")}
              <div className="relative text-turquoise border border-turquoise px-3 whitespace-nowrap">
                {t("title.6")}
                <span className="absolute top-0 left-0 w-[6px] h-[6px] bg-creamy -translate-x-1/2 -translate-y-1/2 border-turquoise border" />
                <span className="absolute top-0 right-0 w-[6px] h-[6px] bg-creamy translate-x-1/2 -translate-y-1/2 border-turquoise border" />
                <span className="absolute bottom-0 left-0 w-[6px] h-[6px] bg-creamy -translate-x-1/2 translate-y-1/2 border-turquoise border" />
                <span className="absolute bottom-0 right-0 w-[6px] h-[6px] bg-creamy translate-x-1/2 translate-y-1/2 border-turquoise border" />
              </div>
            </span>
          </h1>

          <div className="grid gap-2 grid-cols-2 tablet:grid-cols-4 text-xs tablet:text-base ">
            <div className="bg-creamy bg-opacity-10 backdrop-blur-sm rounded-lg px-4 py-2">
              {t("skills.1")}
            </div>
            <div className="bg-creamy bg-opacity-10 backdrop-blur-sm rounded-lg px-4 py-2">
              {t("skills.2")}
            </div>
            <div className="bg-creamy bg-opacity-10 backdrop-blur-sm rounded-lg px-4 py-2">
              {t("skills.3")}
            </div>
            <div className="bg-creamy bg-opacity-10 backdrop-blur-sm rounded-lg px-4 py-2">
              {t("skills.4")}
            </div>
          </div>

          <button
            className="bg-creamy hover:bg-opacity-75 transition-all ease-in-out duration-200 text-darkGreen rounded-2xl px-4 py-2 mt-4"
            data-cal-namespace="appel-decouverte-30-min"
            data-cal-link="modjoystudio/appel-decouverte-30-min"
            data-cal-config='{"layout":"month_view"}'
          >
            {t("button")}
          </button>
        </div>
      </section>

      <LogosHomeComponent />
    </div>
  );
}
