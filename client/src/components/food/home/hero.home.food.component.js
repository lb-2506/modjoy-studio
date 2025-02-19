import { useEffect, useRef, useState } from "react";

// I18N
import { useTranslation } from "next-i18next";

export default function HeroHomeFoodComponent() {
  const { t } = useTranslation("hero-section");

  return (
    <div
      className="fixed top-0 -z-10 bg-white w-full h-[100dvh]"
      style={{
        backgroundImage: "url('/img/food/bg-noise.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "100%",
      }}
    >
      <img
        className="absolute max-w-[80%] left-1/2 bottom-0 -translate-x-1/2"
        src="/img/food/bg-plate.webp"
        alt="bg-plate"
      />

      <section
        style={{ pointerEvents: "all" }}
        className="h-[65dvh] pt-[104px] flex justify-center items-center relative overflow-hidden"
      >
        <div className="max-w-[1000px] text-darkBlue flex flex-col gap-12 tablet:gap-8 items-center justify-center text-center">
          <h3 className="font-medium flex gap-3 border items-center border-lightBlue border-opacity-30 p-2 pr-3 rounded-full">
            <span className="text-lightBlue bg-lightBlue bg-opacity-20 px-2 rounded-full text-sm flex items-center justify-center border border-lightBlue border-opacity-30">
              NEW
            </span>
            {t("food.catchPhrase")}
          </h3>

          <h1
            className="text-[9vw]  mobile:pt-0 leading-[12vw] mobile:leading-[85px] tablet:text-[80px] flex items-center gap-2 mobile:gap-3 justify-center flex-wrap text-center"
            style={{ fontFamily: "'Brockmann Medium', sans-serif" }}
          >
            {t("food.title")}
          </h1>

          <h2 className="">{t("food.subtitle")}</h2>

          <button
            className="bg-darkBlue hover:bg-opacity-75 transition-all ease-in-out duration-200 text-white rounded-full px-5 py-2 mt-4"
            data-cal-namespace="appel-decouverte-30-min"
            data-cal-link="modjoystudio/appel-decouverte-30-min"
            data-cal-config='{"layout":"month_view"}'
          >
            {t("food.button")}
          </button>
        </div>
      </section>

      <section className="h-[35dvh] relative">
        <img
          src="/img/food/stats-1.png"
          alt="stats-1"
          className="absolute left-[5%] top-1/2 -translate-y-1/2 max-w-[25%] min-w-[300px] z-10 rounded-b-xl"
        />

        <img
          src="/img/food/stats-2.png"
          alt="stats-2"
          className="absolute left-[10%] top-3/4 -translate-y-1/2 max-w-[25%] min-w-[300px] scale-[80%] shadow-md rounded-b-xl"
        />

        <img
          src="/img/food/stats-3.png"
          alt="stats-3"
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 max-w-[25%] min-w-[300px] shadow-md rounded-b-xl"
        />

        <img
          src="/img/food/stats-4.png"
          alt="stats-4"
          className="absolute right-[10%] bottom-0  max-w-[20%] min-w-[300px]"
        />

        <img
          src="/img/food/cherry.png"
          alt="cherry"
          className="absolute left-[5%] bottom-5 max-w-[3%] min-w-[50px]"
        />

        <img
          src="/img/food/pepper.png"
          alt="pepper"
          className="absolute left-[35%] top-0 max-w-[3%] min-w-[50px]"
        />

        <img
          src="/img/food/lemon.png"
          alt="lemon"
          className="absolute right-[30%] -top-5 max-w-[3%] min-w-[50px]"
        />

        <img
          src="/img/food/broccoli.png"
          alt="broccoli"
          className="absolute right-[40%] bottom-6 max-w-[4%] min-w-[50px]"
        />

        <img
          src="/img/food/watermelon.png"
          alt="watermelon"
          className="absolute right-[3%] bottom-6 max-w-[4%] min-w-[50px]"
        />
      </section>
    </div>
  );
}
