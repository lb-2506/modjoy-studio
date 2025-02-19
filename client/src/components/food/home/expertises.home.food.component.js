import { useTranslation } from "next-i18next";

// SVG
import { ArrowSvg } from "../_shared/_svgs/arrow.svg";

export default function ExpertisesHomeFoodComponent() {
  const { t } = useTranslation("expertises");

  return (
    <section
      id="expertises"
      className="relative bg-darkBlue max-w-[95%] mx-auto text-white rounded-t-[48px] rounded-b-xl py-24 mt-[100vh] flex flex-col items-center justify-center"
    >
      <img
        src="/img/food/line.png"
        alt="line"
        className="absolute max-h-[60%] top-[60%] -translate-y-1/2 left-[7%]"
      />

      <img
        src="/img/food/line.png"
        alt="line"
        className="absolute max-h-[60%] top-[60%] -translate-y-1/2 right-[7%] transform scale-x-[-1]"
      />

      <div className="flex justify-center items-center flex-col gap-6 text-center z-10">
        <h2 className="uppercase font-light rounded-full border border-white w-fit px-3 py-1 mx-auto text-sm">
          {t("sectionName")}
        </h2>

        <h1
          className="text-3xl text-pretty tablet:text-5xl max-w-[875px] px-6"
          style={{ fontFamily: "'Brockmann Medium', sans-serif" }}
        >
          {t("food.title")}
        </h1>

        <h3 className="text-pretty text-lg px-6 font-light">{t("food.subtitle")}</h3>

        <div className="flex gap-4 justify-center mt-4">
          <p className="text-sm bg-white bg-opacity-10 px-4 py-2 w-fit rounded-xl">
            {t("food.tags.1")}
          </p>

          <p className="text-sm bg-white bg-opacity-10 px-4 py-2 w-fit rounded-xl">
            {t("food.tags.2")}
          </p>

          <p className="text-sm bg-white bg-opacity-10 px-4 py-2 w-fit rounded-xl">
            {t("food.tags.3")}
          </p>

          <p className="text-sm bg-white bg-opacity-10 px-4 py-2 w-fit rounded-xl">
            {t("food.tags.4")}
          </p>
        </div>

        <div className="flex justify-center gap-6 max-w-[70%] min-w-[1000px] mt-12">
          <div className="bg-white p-2 rounded-[20px] flex flex-col items-start">
            <img src="/img/food/expertise-1.png" alt="expertise-1" />

            <div className="text-darkBlue flex flex-col gap-4 text-start px-4 pt-6 pb-4">
              <h4 className="font-medium">Web Agency</h4>

              <p className="opacity-75 font-light">
                Du design sur-mesure à la technique, on concocte des sites qui
                donnent faim. Notre équipe mitonne chaque pixel pour que votre
                restaurant brille sur le web.
              </p>

              <button className="flex items-center gap-4 w-fit">
                <div className="border border-darkBlue border-opacity-20 w-10 h-10 rounded-full flex items-center justify-center">
                  <ArrowSvg fillColor="#001D25" width={12} />
                </div>

                <p className="font-medium">Découvrir</p>
              </button>
            </div>
          </div>

          <div className="bg-white p-2 rounded-[20px] flex flex-col items-start">
            <img src="/img/food/expertise-2.png" alt="expertise-2" />

            <div className="text-darkBlue flex flex-col gap-4 text-start px-4 pt-6 pb-4">
              <h4 className="font-medium text-xl">Food Marketing</h4>

              <p className="opacity-75 font-light text-lg">
                Stratégie digitale, réseaux sociaux, contenu... On assaisonne
                votre présence en ligne pour attirer et fidéliser vos clients.
              </p>

              <button className="flex items-center gap-4 w-fit">
                <div className="border border-darkBlue border-opacity-20 w-10 h-10 rounded-full flex items-center justify-center">
                  <ArrowSvg fillColor="#001D25" width={12} />
                </div>

                <p className="font-medium text-lg">Découvrir</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
