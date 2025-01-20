import { useState, useRef, useEffect } from "react";

// I18N
import { useTranslation } from "next-i18next";

// DATA
import { faqData } from "@/_assets/data/faq.data";

// SVG
import { CrossSvg } from "../_shared/_svgs/cross.svg";

export default function FaqHomeComponent() {
  const { t } = useTranslation("faq");
  const [openIndex, setOpenIndex] = useState(0);

  const paragraphRefs = useRef([]);

  const [heights, setHeights] = useState([]);

  const updateHeights = () => {
    const newHeights = paragraphRefs.current.map((p) => p?.scrollHeight || 0);
    setHeights(newHeights);
  };

  useEffect(() => {
    updateHeights();

    const handleResize = () => {
      requestAnimationFrame(() => {
        updateHeights();
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function toggleFaq(index) {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  }

  return (
    <section className="bg-darkGreen">
      <div className="px-12 py-24 max-w-[90%] mx-auto flex gap-12 bg-creamy rounded-[48px]">
        <div className="text-darkGreen flex flex-col gap-6 w-1/2">
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

        <div className="w-1/2 flex flex-col gap-4">
          {faqData.map((data, index) => {
            const isOpen = openIndex === index;
            const height =
              isOpen && heights[index] ? `${heights[index]}px` : "0px";

            return (
              <div
                key={index}
                className="bg-darkGreen bg-opacity-5 rounded-[15px] overflow-hidden transition-all duration-250"
              >
                {/* Header */}
                <div
                  className={`flex justify-between h-[60px] items-center px-6 ${!isOpen ? "cursor-pointer" : ""}`}
                  onClick={() => {
                    if (!isOpen) toggleFaq(index);
                  }}
                >
                  <h2
                    style={{ fontFamily: "'Satoshi Medium', sans-serif" }}
                    className="font-bold text-lg"
                  >
                    {t(data.title)}
                  </h2>

                  <CrossSvg
                    className={`transform transition-transform duration-300 ${isOpen ? "" : "rotate-45"}`}
                  />
                </div>

                {/* Content */}
                <div
                  className="transition-height duration-250 ease-in-out px-6"
                  style={{
                    height: height,
                    overflow: "hidden",
                    transition: "height 0.25s ease",
                  }}
                >
                  <p
                    className="py-4"
                    ref={(el) => (paragraphRefs.current[index] = el)}
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
