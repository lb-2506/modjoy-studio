import { useState, useRef } from "react";

// I18N
import { useTranslation } from "next-i18next";

// DATA
import { faqData } from "@/_assets/data/faq.data";

// SVG
import { CrossSvg } from "../_shared/_svgs/cross.svg";

export default function FaqHomeComponent() {
  const { t } = useTranslation("index");
  const [openIndex, setOpenIndex] = useState(null);

  function toggleFaq(index) {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  }

  return (
    <section className="px-12 py-24 max-w-[90%] mx-auto flex gap-12 bg-creamy rounded-[48px]">
      <div className="text-darkGreen flex flex-col gap-6 w-1/2">
        <h1
          style={{ fontFamily: "'Brockmann Medium', sans-serif" }}
          className="text-5xl"
        >
          FAQs
        </h1>

        <p style={{ fontFamily: "'Satoshi Medium', sans-serif" }}>
          Answers to common questions about Modjoy, fees, and security.
        </p>

        <button className="bg-orange text-darkGreen px-4 py-2 rounded-2xl w-fit">
          Button
        </button>
      </div>

      <div className="w-1/2 flex flex-col gap-4">
        {faqData.map((data, index) => {
          const isOpen = openIndex === index;
          const contentHeight = useRef();

          return (
            <div
              key={index}
              className={`bg-darkGreen bg-opacity-5 rounded-[15px] overflow-hidden transition-all duration-300`}
            >
              {/* Header */}
              <div
                className={`flex justify-between h-[60px] items-center px-6 ${index === openIndex ? "" : "cursor-pointer"}`}
                onClick={() => {index === openIndex ? null : toggleFaq(index)}}
              >
                <h2
                  style={{ fontFamily: "'Satoshi Medium', sans-serif" }}
                  className="font-bold text-lg"
                >
                  {data.title}
                </h2>

                <CrossSvg
                  className={`transform transition-transform duration-300 ${
                    isOpen ? "" : "rotate-45"
                  }`}
                />
              </div>

              {/* Content */}
              <div
                ref={contentHeight}
                className="transition-[height] duration-500 ease-in-out px-6"
                style={{
                  height: isOpen
                    ? `${contentHeight.current?.scrollHeight}px`
                    : "0px",
                  overflow: isOpen ? "visible" : "hidden",
                }}
              >
                <p className="py-4">{data.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
