import { useState } from "react";

// I18N
import { useTranslation } from "next-i18next";

// DATA
import { featuresData } from "@/_assets/data/features.data";


export default function ExpertisesHomeComponent() {
  const { t } = useTranslation("index");

  const [activeFeature, setActiveFeature] = useState(1);
  const [previousFeature, setPreviousFeature] = useState(null);



  const handleClick = (id) => {
    if (id !== activeFeature) {
      setPreviousFeature(activeFeature);
      setActiveFeature(id);
    }
  };

  return (
    <section className="bg-creamy rounded-t-[48px] pt-24 pb-36 flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 text-center">
        <h3>Tagline</h3>

        <h1
          className="text-5xl"
          style={{ fontFamily: "'Brockmann Medium', sans-serif" }}
        >
          Nos expertises
        </h1>

        <img
          src="/img/underline-green.png"
          alt="underline"
          draggable={false}
          className="max-w-[250px] mx-auto"
        />

        <h2 className="pt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
      </div>

      <div className="flex mt-12 w-[90%] mx-auto h-[650px] rounded-xl overflow-hidden">
        {featuresData?.map((feature, index) => {
          const isActive = activeFeature === feature.id;
          const isClosing = previousFeature === feature.id;

          return (
            <div
              key={feature.id}
              className={`flex transition-all duration-500 ${
                isActive ? "w-full" : "w-[70px]"
              }`}
              onClick={() => handleClick(feature.id)}
            >
              {/* Bande verticale contenant numéro et titre */}
              <div
                className={`py-6 flex flex-col w-[70px] items-center justify-between h-full transition-colors duration-500 ${
                  isActive ? feature.bgColor : feature.bgTransparentColor
                } ${
                  index === featuresData.length - 1 && !isActive
                    ? "rounded-e-xl"
                    : ""
                } ${isActive ? "" : "cursor-pointer"}`}
              >
                <p className="text-lg font-bold">{`0${index + 1}`}</p>
                <p className="text-lg font-semibold -rotate-90 whitespace-nowrap -translate-y-[150%]">
                  {feature.title}
                </p>
              </div>

              {/* Contenu de la feature */}
              {(isActive || isClosing) && (
                <div
                  className={`${feature.bgTransparentColor} overflow-hidden flex flex-col justify-center px-8 transition-all ${
                    isActive ? "w-full" : "w-0 duration-[1250ms]"
                  } ${
                    index === featuresData.length - 1 && isActive
                      ? "rounded-e-xl"
                      : ""
                  }`}
                >
                  <div className="min-w-[500px]">
                    <h1 className="text-2xl font-bold mb-4">{feature.title}</h1>
                    <p className="text-md">{feature.content}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
