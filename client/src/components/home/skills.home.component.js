// I18N
import { useTranslation } from "next-i18next";

// DATA
import { skillsData } from "@/_assets/data/_index.data";

export default function SkillsHomeComponent() {
  const { t } = useTranslation("skills");

  return (
    <section id="skills" className="bg-creamy relative">
      <div className="max-w-[80%] pt-12 pb-24 tablet:py-24 mx-auto flex flex-col desktop:flex-row gap-24">
        <div className="desktop:max-w-[320px] flex flex-col gap-6">
          <h1
            style={{ fontFamily: "'Brockmann Medium', sans-serif" }}
            className="text-3xl tablet:text-5xl"
          >
            {t("title")}
          </h1>

          <p style={{ fontFamily: "'Satoshi Medium', sans-serif" }}>
            {t("subtitle")}
          </p>

          <button
            data-cal-namespace="appel-decouverte-30-min"
            data-cal-link="modjoystudio/appel-decouverte-30-min"
            data-cal-config='{"layout":"month_view"}'
            className="bg-orange hover:bg-[#f47029] transition-all ease-in-out duration-200 text-darkGreen px-4 py-2 rounded-2xl w-fit"
          >
            {t("button")}
          </button>
        </div>

        <div className="grid tablet:grid-cols-2 gap-x-12 gap-y-16">
          {skillsData.map((skill, i) => {
            return (
              <div key={i} className="flex flex-col gap-6">
                <img
                  src={skill.pictoSrc}
                  alt="picto"
                  draggable={false}
                  className="max-w-[70px] rounded-xl p-2"
                />
                <h2
                  className="text-2xl text-balance"
                  style={{ fontFamily: "'Satoshi Bold', sans-serif" }}
                >
                  {t(skill.title)}
                </h2>
                <p
                  style={{ fontFamily: "'Satoshi Medium', sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: t(skill.content) }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
