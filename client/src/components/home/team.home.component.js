// I18N
import { useTranslation } from "next-i18next";

// DATA
import { teamData } from "@/_assets/data/team.data";

export default function TeamHomeComponent() {
  const { t } = useTranslation("index");

  return (
    <section className="bg-darkGreen pt-24">
      <div className="max-w-[90%] mx-auto rounded-[48px] px-12 py-24 bg-green flex gap-24">
        <div className="max-w-[250px] flex flex-col gap-6">
          <h3>Tagline</h3>

          <h1
            style={{ fontFamily: "'Brockmann Medium', sans-serif" }}
            className="text-5xl"
          >
            Notre équipe
          </h1>

          <p style={{ fontFamily: "'Satoshi Medium', sans-serif" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>

          <button className="bg-orange text-darkGreen px-4 py-2 rounded-2xl w-fit">
            Button
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6">
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
                  className="max-w-[50px] rounded-xl"
                />

                <div>
                  <h2
                    className="text-2xl text-balance"
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
