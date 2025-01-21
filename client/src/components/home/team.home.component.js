// I18N
import { useTranslation } from "next-i18next";

// DATA
import { teamData } from "@/_assets/data/team.data";

export default function TeamHomeComponent() {
  const { t } = useTranslation("team");

  return (
    <section id="team" className="bg-darkGreen">
      <div className="max-w-[90%] mx-auto rounded-[48px] px-4 tablet:px-12 py-12 tablet:py-24 bg-green flex flex-col desktop:flex-row gap-12 tablet:gap-24">
        <div className="desktop:max-w-[330px] flex flex-col gap-6">
          <h3>{t("sectionName")}</h3>

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
            className="bg-orange text-darkGreen px-4 py-2 rounded-2xl w-fit"
          >
            {t("button")}
          </button>
        </div>

        <div className="grid tablet:grid-cols-2 gap-6">
          {teamData.map((data, i) => {
            return (
              <div
                key={i}
                className="flex flex-col gap-6 bg-creamy p-8 rounded-3xl"
              >
                <img
                  src={data.pictoSrc}
                  alt="picto"
                  draggable={false}
                  className="max-w-[50px] p-1 rounded-xl bg-[#F8EFDE]"
                />

                <div>
                  <h2
                    className="text-2xl mb-4 tablet:mb-2"
                    style={{ fontFamily: "'Satoshi Bold', sans-serif" }}
                  >
                    {data.name}
                  </h2>

                  <p style={{ fontFamily: "'Satoshi Medium', sans-serif" }}>
                    {data.job}
                  </p>
                </div>

                <p style={{ fontFamily: "'Satoshi Medium', sans-serif" }}>
                  {data.description}
                </p>

                <div className="flex gap-4">
                  {data.linkedIn && (
                    <a
                      href={data.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/img/linkedin.png"
                        alt="linkedin"
                        draggable={false}
                        className="max-w-[20px]"
                      />
                    </a>
                  )}

                  {data.twitter && (
                    <a
                      href={data.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/img/twitter.png"
                        alt="twitter"
                        draggable={false}
                        className="max-w-[20px]"
                      />
                    </a>
                  )}

                  {data.dribble && (
                    <a
                      href={data.dribble}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/img/dribble.png"
                        alt="dribble"
                        draggable={false}
                        className="max-w-[20px]"
                      />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
