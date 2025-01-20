// SVG
import { ChevronSvg } from "../_shared/_svgs/chevron.svg";

// I18N
import { useTranslation } from "next-i18next";

export default function PartnersHomeComponent() {
  const { t } = useTranslation("partners");

  return (
    <section className="bg-darkGreen">
      <div className="flex max-w-[90%] mx-auto rounded-b-[48px] justify-center items-center relative overflow-hidden pt-48 pb-24">
        <img
          src="/img/pointbg.png"
          draggable={false}
          className="inset-0 absolute opacity-20 pointer-events-none"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%)",
            maskImage:
              "radial-gradient(ellipse, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskSize: "cover",
            maskSize: "cover",
          }}
        />

        <img
          src="/img/flower-orange.png"
          draggable={false}
          className="max-w-[200px] absolute -bottom-[80px] -left-[50px] blur-sm"
        />

        <img
          src="/img/smile.png"
          draggable={false}
          className="max-w-[200px] absolute -top-[90px] left-[55%] blur-sm opacity-60 rotate-[125deg]"
        />

        <div className="max-w-[1050px]  text-creamy flex flex-col gap-6 items-center justify-center text-center">
          <h1
            className="text-[60px] leading-[75px] flex flex-col gap-3"
            style={{ fontFamily: "'Brockmann Medium', sans-serif" }}
          >
            <span className="flex gap-3 justify-center">
              <span className="relative  border border-pink">
                <span className="absolute top-0 left-0 w-[6px] h-[6px] bg-creamy -translate-x-1/2 -translate-y-1/2 border-pink border" />
                <span className="absolute top-0 right-0 w-[6px] h-[6px] bg-creamy translate-x-1/2 -translate-y-1/2 border-pink border" />
                <span className="absolute bottom-0 left-0 w-[6px] h-[6px] bg-creamy -translate-x-1/2 translate-y-1/2 border-pink border" />
                <span className="absolute bottom-0 right-0 w-[6px] h-[6px] bg-creamy translate-x-1/2 translate-y-1/2 border-pink border" />
                {t("title.1")}
              </span>
              {t("title.2")}
            </span>

            <span className="flex gap-3 flex-wrap justify-center">
              {t("title.3")}
              <span className="relative text-nowrap border border-green">
                <span className="absolute top-0 left-0 w-[6px] h-[6px] bg-creamy -translate-x-1/2 -translate-y-1/2 border-green border" />
                <span className="absolute top-0 right-0 w-[6px] h-[6px] bg-creamy translate-x-1/2 -translate-y-1/2 border-green border" />
                <span className="absolute bottom-0 left-0 w-[6px] h-[6px] bg-creamy -translate-x-1/2 translate-y-1/2 border-green border" />
                <span className="absolute bottom-0 right-0 w-[6px] h-[6px] bg-creamy translate-x-1/2 translate-y-1/2 border-green border" />
                {t("title.4")}
              </span>
              {t("title.5")}
            </span>
          </h1>

          <h2 className="max-w-[580px]">{t("subtitle")}</h2>

          <div className="flex gap-6">
            <button className="bg-orange text-darkGreen rounded-2xl px-4 py-2">
              {t("buttons.estimate")}
            </button>

            <button
              className="w-fit font-extralight text-sm flex items-center gap-3"
              data-cal-namespace="appel-decouverte-30-min"
              data-cal-link="modjoystudio/appel-decouverte-30-min"
              data-cal-config='{"layout":"month_view"}'
            >
              {t("buttons.rdv")}{" "}
              <ChevronSvg className="-rotate-90" strokeColor="#FFFFE3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
