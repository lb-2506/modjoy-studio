import { useTranslation } from "next-i18next";
import { useRef, useEffect, useState } from "react";

// DATA
import { featuresData } from "@/_assets/data/features.data";

export default function ExpertisesHomeComponent() {
  const { t } = useTranslation("expertises");
  const [parentWidth, setParentWidth] = useState(0);
  const firstParentRef = useRef(null);

  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    if (firstParentRef.current) {
      setParentWidth(firstParentRef.current.offsetWidth - 48);
    }

    const handleResize = () => {
      if (firstParentRef.current) {
        setParentWidth(firstParentRef.current.offsetWidth - 48);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="expertises"
      className="bg-creamy rounded-t-[48px] pt-24 pb-12 mt-[100vh] flex flex-col items-center justify-center"
    >
      <div className="flex flex-col gap-4 text-center">
        <h3>{t("sectionName")}</h3>

        <h1
          className="text-3xl tablet:text-5xl max-w-[550px] px-6"
          style={{ fontFamily: "'Brockmann Medium', sans-serif" }}
        >
          {t("title")}
        </h1>

        <div className="h-[35px] mt-4">
          <img
            src="/img/underline-green.png"
            alt="underline"
            draggable={false}
            className="h-full mx-auto"
          />
        </div>

        <h2 className="pt-6 text-pretty px-6">{t("subtitle")}</h2>
      </div>

      {/* L'accordéon horizontal (tablettes/desktop) */}
      <ul className="hidden tablet:block mt-12 w-[90%] mx-auto h-[530px] rounded-xl overflow-hidden">
        {featuresData.map((feature, index) => {
          const tabId = `rad${index + 1}`;
          const contentRef = useRef(null);

          useEffect(() => {
            if (contentRef.current) {
              contentRef.current.style.minWidth = `${parentWidth}px`;
            }
          }, [parentWidth]);

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
                   float-left h-[530px] w-[70px] overflow-hidden text-center text-[14px]
                  flex flex-col  justify-between py-4 hover:cursor-pointer  peer-checked:cursor-default
                `}
                htmlFor={tabId}
              >
                <span className="text-lg font-bold">0{index + 1}</span>

                <span className="text-lg font-semibold whitespace-nowrap -rotate-90 -translate-y-5">
                  {t(feature.name)}
                </span>
              </label>

              <div
                ref={index === 0 ? firstParentRef : null}
                className={`accslide flex h-full w-0 py-9 float-left overflow-x-hidden whitespace-nowrap transition-all duration-300  ${feature.bgTransparentColor} min-h-[530px]`}
              >
                <div className="content px-6 flex flex-col gap-6 justify-center">
                  <img src={feature.img} alt="picto" className="h-20 w-20" />

                  <h1 className="text-wrap text-3xl font-bold w-[600px]">
                    {t(feature.title)}
                  </h1>

                  <p
                    ref={contentRef}
                    className="leading-7 whitespace-normal pr-6"
                    dangerouslySetInnerHTML={{ __html: t(feature.content) }}
                    style={{ fontFamily: "'Satoshi Medium', sans-serif" }}
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* L'accordéon vertical (mobile) */}
      <ul className="mt-12 tablet:hidden w-[90%] mx-auto flex flex-col gap-4">
        {featuresData.map((feature, index) => {
          const isOpen = openIndex === index;

          const contentRef = useRef(null);
          const [contentHeight, setContentHeight] = useState(0);

          useEffect(() => {
            if (contentRef.current) {
              setContentHeight(contentRef.current.scrollHeight);
            }
          }, []);

          return (
            <li key={feature.id} className="rounded-lg">
              <h2
                className={`
                  ${isOpen ? "rounded-t-lg" : "rounded-lg"}  text- font-bold flex gap-6 p-4 text-pretty 
                  hover:cursor-pointer
                  ${feature.bgColor}
                `}
                onClick={() => setOpenIndex(index)}
              >
                <span>0{index + 1}</span>
                {t(feature.name)}
              </h2>

              <div
                className={`
                  ${feature.bgTransparentColor} rounded-b-lg 
                  px-4 flex flex-col gap-4 overflow-hidden
                `}
                style={{
                  maxHeight: isOpen ? contentHeight : 0,
                  transition: "max-height 0.2s ease-in-out",
                }}
              >
                <div ref={contentRef}>
                  <img
                    src={feature.img}
                    alt="picto"
                    className="h-12 w-12 mt-6"
                  />

                  <h3 className="font-bold mt-4">{t(feature.title)}</h3>

                  <p
                    className="my-4"
                    dangerouslySetInnerHTML={{ __html: t(feature.content) }}
                    style={{ fontFamily: "'Satoshi Medium', sans-serif" }}
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
