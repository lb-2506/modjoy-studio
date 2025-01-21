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

  const [smileyStyle, setSmileyStyle] = useState({});
  const [smiley2Style, setSmiley2Style] = useState({});

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

      if (distance < 500) {
        const factor = (500 - distance) / 500;
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
  }, [mousePos]);

  return (
    <div className="fixed top-0 -z-10 bg-darkGreen">
      <section
        style={{ pointerEvents: "all" }}
        className="h-[80dvh] flex justify-center items-center relative overflow-hidden"
      >
        <img
          src="/img/pointbg.png"
          draggable={false}
          className="inset-0 absolute opacity-20 pointer-events-none"
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

        <img
          src="/img/smiley-1.png"
          draggable={false}
          ref={smileyRef}
          style={smileyStyle}
          className="hidden tablet:block max-w-[100px] absolute desktop:right-[15%] desktop:top-[20%] right-[10%] top-[15%]"


        />

        <img
          src="/img/smiley-2.png"
          draggable={false}
          ref={smiley2Ref}
          style={smiley2Style}
          className="hidden tablet:block max-w-[100px] absolute left-[15%] bottom-[10%]"
        />

        <div className="max-w-[800px] text-creamy flex flex-col mt-12 gap-6 tablet:gap-8 items-center justify-center text-center">
          <h3>{t("catchPhrase")}</h3>

          <h1
            className="text-3xl mobile:text-[60px] mobile:leading-[65px] tablet:text-[80px] tablet:leading-[85px] flex items-center gap-3 justify-center flex-wrap text-center"
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
                src="/img/smile.png"
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

          <div className="hidden tablet:grid gap-2 grid-cols-2 tablet:grid-cols-4  text-xs tablet:text-base ">
            <div className="bg-creamy bg-opacity-10 backdrop-blur-sm rounded-lg px-4 py-2">Stratégie digitale</div>
            <div className="bg-creamy bg-opacity-10 backdrop-blur-sm rounded-lg px-4 py-2">Direction artistique</div>
            <div className="bg-creamy bg-opacity-10 backdrop-blur-sm rounded-lg px-4 py-2">Site web & app mobile</div>
            <div className="bg-creamy bg-opacity-10 backdrop-blur-sm rounded-lg px-4 py-2">Motion design</div>
          </div>

          <button
            className="bg-creamy text-darkGreen rounded-2xl px-4 py-2 mt-4"
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
