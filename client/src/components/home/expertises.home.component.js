import { useTranslation } from "next-i18next";

// DATA
import { featuresData } from "@/_assets/data/features.data";

export default function ExpertisesHomeComponent() {
  const { t } = useTranslation("index");

  return (
    <section className="bg-creamy rounded-t-[48px] pt-24  flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 text-center">
        <h3>Tagline</h3>

        <h1
          className="text-5xl"
          style={{ fontFamily: "'Brockmann Medium', sans-serif" }}
        >
          Nos expertises
        </h1>

        <div className="h-[35px]">
          <img
            src="/img/underline-green.png"
            alt="underline"
            draggable={false}
            className="h-full mx-auto"
          />
        </div>

        <h2 className="pt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
      </div>

      {/* L'accordéon horizontal */}
      <ul className="mt-12 w-[90%] mx-auto h-[650px] rounded-xl overflow-hidden">
        {featuresData.map((feature, index) => {
          const tabId = `rad${index + 1}`;

          return (
            <li key={feature.id}>
              <input
                id={tabId}
                type="radio"
                name="rad"
                defaultChecked={index === 0 ? true : undefined}
                className="peer absolute w-[1px] h-[1px] overflow-hidden whitespace-nowrap hidden"
              />

              <label
                className={`
                  ${feature.bgColor} 
                   float-left h-[650px] w-[70px] overflow-hidden text-center text-[14px]
                  flex flex-col  justify-between py-4 hover:cursor-pointer  peer-checked:cursor-default
                `}
                htmlFor={tabId}
              >
                <span className="text-lg font-bold">0{index + 1}</span>

                <span className="text-lg font-semibold whitespace-nowrap -rotate-90 -translate-y-5">
                  {feature.title}
                </span>
              </label>

              <div
                className={`accslide block h-full w-0 py-9 float-left overflow-x-hidden whitespace-nowrap transition-all duration-300  ${feature.bgTransparentColor} min-h-[650px]`}
              >
                <div className="content pl-6">
                  <h1 className="text-2xl font-bold mb-4">{feature.title}</h1>

                  <p className="text-sm">{feature.content}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
