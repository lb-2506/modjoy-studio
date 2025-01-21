import { useState, useRef, useEffect } from "react";
import { useTranslation } from "next-i18next";

// DATA
import { faqData } from "@/_assets/data/faq.data";

// SVG
import { CrossSvg } from "../_shared/_svgs/cross.svg";

export default function FaqHomeComponent() {
  const { t } = useTranslation("faq");

  // Permet de savoir quel élément est ouvert ; null si aucun
  const [openIndex, setOpenIndex] = useState(null);

  // Gère l'ouverture/fermeture de l'accordéon
  function handleToggle(index) {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  }

  return (
    <section className="bg-darkGreen">
      <div className="px-6 tablet:px-12 py-12 tablet:py-24 max-w-[90%] mx-auto flex flex-col tablet:flex-row gap-12 bg-creamy rounded-[48px]">
        {/* Colonne de gauche */}
        <div className="text-darkGreen flex flex-col gap-6 tablet:w-1/2">
          <h1
            style={{ fontFamily: "'Brockmann Medium', sans-serif" }}
            className="text-5xl"
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

        {/* Colonne de droite (FAQ) */}
        <div className="tablet:w-1/2 flex flex-col gap-4">
          {faqData.map((data, index) => {
            const isOpen = openIndex === index;

            // On stocke la réf et la hauteur de contenu comme dans Expertises
            const contentRef = useRef(null);
            const [contentHeight, setContentHeight] = useState(0);

            // Au premier render, on calcule la hauteur intrinsèque du <p>
            useEffect(() => {
              if (contentRef.current) {
                setContentHeight(contentRef.current.scrollHeight);
              }
            }, []);

            return (
              <div
                key={index}
                className="bg-darkGreen bg-opacity-5 rounded-[15px] overflow-hidden"
              >
                {/* Header (titre + icône) */}
                <div
                  className={`
                    flex gap-4 justify-between items-center px-6
                    h-[90px] tablet:h-[75px]
                    cursor-pointer
                  `}
                  onClick={() => handleToggle(index)}
                >
                  <h2
                    style={{ fontFamily: "'Satoshi Medium', sans-serif" }}
                    className="font-bold text-sm tablet:text-lg"
                  >
                    {t(data.title)}
                  </h2>

                  <div>
                    <CrossSvg
                      className={`w-3 h-3 tablet:w-4 tablet:h-4 transform transition-transform duration-300 ${
                        isOpen ? "" : "rotate-45"
                      }`}
                    />
                  </div>
                </div>

                {/* Contenu (accordéon) */}
                <div
                  className="px-6 transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? `${contentHeight}px` : 0,
                    overflow: "hidden",
                  }}
                >
                  <p
                    ref={contentRef}
                    className="text-sm tablet:text-base py-4"
                    style={{ fontFamily: "'Satoshi Medium', sans-serif" }}
                  >
                    {t(data.content)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
