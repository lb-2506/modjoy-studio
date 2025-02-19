// I18N
import { useTranslation } from "next-i18next";

// DATA
import { skillsFoodData } from "@/_assets/data/skills.food.data";

export default function SkillsHomeFoodComponent() {
  const { t } = useTranslation("skills");

  return (
    <section
      id="skills"
      className="bg-lightGrey relative z-10 max-w-[95%] mx-auto rounded-b-[48px] rounded-t-xl"
      style={{
        backgroundImage: "url('/img/food/bg-noise.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "100%",
      }}
    >
      <div className="pt-24 pb-48 max-w-[90%] mx-auto flex flex-col items-center gap-12">
        <div className="text-darkBlue max-w-[850px] flex flex-col gap-8 items-center justify-center text-center">
          <h2 className="font-light uppercase bg-white border border-black border-opacity-10 w-fit rounded-full px-4 py-1">
            {t("food.sectionName")}
          </h2>

          <h1
            className="text-[9vw] leading-[12vw] mobile:leading-[85px] tablet:text-[80px] flex flex-col gap-3"
            style={{ fontFamily: "'Brockmann Medium', sans-serif" }}
          >
            {t("food.title")}
          </h1>

          <h3 className="max-w-[650px] text-lg opacity-80 font-light">
            {t("food.subtitle")}
          </h3>
        </div>

        <div className="relative flex flex-col gap-36 max-w-[1200px]">
          <div className="absolute w-[2px] h-full left-1/2 -translate-x-1/2 bg-[#EDEEF1]">
            <span className="absolute w-[2px] left-1/2 -translate-x-1/2 bg-lightBlue" />
          </div>

          {skillsFoodData.map((data, i) => {
            return (
              <div
                key={i}
                className={`flex items-stretch justify-center ${i % 2 ? "flex-row-reverse" : ""}`}
              >
                <div className="w-1/2 flex flex-col justify-center gap-8">
                  <h4
                    style={{ fontFamily: "'Brockmann Medium', sans-serif" }}
                    className="text-3xl"
                  >
                    {t(data.title)}
                  </h4>

                  <p className="opacity-60 font-light leading-8">
                    {t(data.content)}
                  </p>

                  <button
                    className="bg-darkBlue text-white px-4 py-2 rounded-full w-fit flex items-center gap-3 group"
                    data-cal-namespace="appel-decouverte-30-min"
                    data-cal-link="modjoystudio/appel-decouverte-30-min"
                    data-cal-config='{"layout":"month_view"}'
                  >
                    {t(data.button)}
                  </button>
                </div>

                <div
                  className="w-[200px] flex justify-center text-3xl"
                  style={{ fontFamily: "'Satoshi Medium', sans-serif" }}
                >
                  <span
                    style={{
                      backgroundImage: "url('/img/food/bg-noise.png')",
                      backgroundRepeat: "repeat",
                      backgroundSize: "100%",
                      backgroundAttachment: "fixed",
                    }}
                    className={`z-[2] bg-lightGrey h-fit ${i === 0 ? "pb-4" : "py-4"}`}
                  >{`0${i + 1}`}</span>
                </div>

                <div className="bg-[#EDEEF1] w-1/2 rounded-3xl relative">
                  <img
                    src={data.img}
                    alt="gusto-manager"
                    className={`absolute max-w-[70%] top-1/2 -translate-y-1/2 ${i % 2 ? "-left-10" : "-right-10"}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
