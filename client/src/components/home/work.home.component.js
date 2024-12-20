// I18N
import { useTranslation } from "next-i18next";

// DATA
import { workData } from "@/_assets/data/work.data";

// COMPONENTS
import BallBouncingComponent from "../_shared/bouncing/ball.bouncing.component";

export default function WorkHomeComponent() {
  const { t } = useTranslation("index");

  return (
    <section className="bg-darkGreen relative">
      <div className="py-24 max-w-[80%] mx-auto flex gap-12">
        <div className="text-creamy flex flex-col gap-6 w-1/2">
          <h3>Tagline</h3>

          <h1
            style={{ fontFamily: "'Brockmann Medium', sans-serif" }}
            className="text-5xl max-w-[550px]"
          >
            Medium length section heading goes here
          </h1>

          <button className="bg-orange text-darkGreen px-4 py-2 rounded-2xl w-fit">
            Button
          </button>
        </div>

        <div className="relative w-1/2">
          <div className="mt-6 flex flex-col gap-12">
            {workData.map((data, i) => (
              <div key={i} className="flex gap-12 text-creamy z-10">
                <p
                  className={`${data.color} border-8 border-darkGreen min-w-[46px] max-h-[46px] text-darkGreen rounded-xl flex items-center justify-center`}
                >
                  {data.id}
                </p>
                <div>
                  <h2
                    className="text-2xl"
                    style={{ fontFamily: "'Brockmann Medium', sans-serif" }}
                  >
                    {data.title}
                  </h2>

                  <p
                    className="opacity-70 pt-3"
                    style={{ fontFamily: "'Satoshi Medium', sans-serif" }}
                  >
                    {data.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <hr className="absolute w-[2px] h-full left-[23px] -translate-x-1/2 top-0 bottom-0 bg-creamy" />
        </div>
      </div>

      <BallBouncingComponent />
    </section>
  );
}
