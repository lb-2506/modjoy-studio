// I18N
import { useTranslation } from "next-i18next";

// DATA
import { skillsData } from "@/_assets/data/_index.data";

// COMPONENTS
import BallBouncingComponent from "../_shared/bouncing/ball.bouncing.component";

export default function SkillsHomeComponent() {
  const { t } = useTranslation("index");

  return (
    <section className="bg-creamy py-48 relative">
      <div className="max-w-[80%] mx-auto flex gap-24">
        <div className="max-w-[250px] flex flex-col gap-6">
          <h1
            style={{ fontFamily: "'Brockmann Medium', sans-serif" }}
            className="text-5xl"
          >
            Nos atouts
          </h1>

          <p style={{ fontFamily: "'Satoshi Medium', sans-serif" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>

          <button className="bg-orange text-darkGreen px-4 py-2 rounded-2xl w-fit">
            Button
          </button>
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-16">
          {skillsData.map((skill, i) => {
            return (
              <div key={i} className="flex flex-col gap-6">
                <img
                  src={skill.pictoSrc}
                  alt="picto"
                  draggable={false}
                  className="max-w-[50px] rounded-xl p-2"
                  style={{
                    border: "1px solid rgba(0, 0, 0, 0.2)",
                  }}
                />
                <h2
                  className="text-2xl text-balance"
                  style={{ fontFamily: "'Satoshi Bold', sans-serif" }}
                >
                  {skill.title}
                </h2>
                <p style={{ fontFamily: "'Satoshi Medium', sans-serif" }}>
                  {skill.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <BallBouncingComponent />
    </section>
  );
}
