import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// I18N
import { useTranslation } from "next-i18next";

// DATA
import { projectsData } from "@/_assets/data/projects.data";

// SVG
import { ChevronSvg, ArrowSvg } from "../_shared/_svgs/_index";

export default function ProjectsHomeComponent() {
  const { t } = useTranslation("projects");

  const scrollContainerRef = useRef(null);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [startX, setStartX] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);
  const [halfScreenWidth, setHalfScreenWidth] = useState(0);
  const [isDataHovered, setIsDataHovered] = useState(false);

  useEffect(() => {
    const updateHalfWidth = () => {
      setHalfScreenWidth(window.innerWidth / 2);
    };
    updateHalfWidth();
    window.addEventListener("resize", updateHalfWidth);
    return () => window.removeEventListener("resize", updateHalfWidth);
  }, []);

  function handleMouseDown(e) {
    setIsGrabbing(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setHasMoved(false);
    setShowCursor(true);
  }

  function handleMouseMove(e) {
    if (isGrabbing) {
      e.preventDefault();
      const x = e.pageX - scrollContainerRef.current.offsetLeft;
      const walk = x - startX;
      if (Math.abs(walk) > 2) {
        setHasMoved(true);
      }
      scrollContainerRef.current.scrollLeft -= walk;
      setStartX(x);
    }
    updateCursorPos(e);
  }

  function handleMouseUp(e) {
    setIsGrabbing(false);
    if (hasMoved) {
      e.preventDefault();
    }
  }

  function handleMouseEnter(e) {
    scrollContainerRef.current.style.cursor = "none";
    setShowCursor(true);
    updateCursorPos(e);
  }

  function handleMouseLeave() {
    setShowCursor(false);
  }

  function updateCursorPos(e) {
    setCursorPos({ x: e.clientX, y: e.clientY });
  }

  const arrowRotation = cursorPos.x < halfScreenWidth ? "180deg" : "0deg";

  return (
    <section
      id="projects"
      className="bg-darkGreen relative flex flex-col justify-center pt-24 w-full mx-auto"
    >
      <div className="flex flex-col gap-4 text-center text-creamy">
        <h3>{t("sectionName")}</h3>
        <h1
          className="text-5xl max-w-[650px] mx-auto text-center"
          style={{ fontFamily: "'Brockmann Medium', sans-serif" }}
        >
          {t("title")}
        </h1>
        <img
          src="/img/underline-pink.png"
          alt="underline"
          draggable={false}
          className="max-w-[250px] mx-auto mt-4"
        />
        <h2
          className="pt-6"
          dangerouslySetInnerHTML={{ __html: t("subtitle") }}
        />
      </div>

      {showCursor && (
        <div
          className="hidden desktop:fixed desktop:flex items-center justify-center left-0 top-0 w-[100px] h-[100px] bg-transparentWhite border border-[#ffffff4d] backdrop-blur rounded-full z-20 pointer-events-none"
          style={{
            transform: `translate(${cursorPos.x - 50}px, ${cursorPos.y - 50}px)`,
          }}
        >
          <div>
            {isDataHovered ? (
              <p className="text-creamy text-xl">OPEN</p>
            ) : (
              <div
                style={{
                  transform: `rotate(${arrowRotation})`,
                  transition: "transform 0.2s ease",
                }}
              >
                <ArrowSvg width={25} height={25} />
              </div>
            )}
          </div>
        </div>
      )}

      <div
        ref={scrollContainerRef}
        className="overflow-x-scroll w-full px-[5%] flex gap-6 z-10 custom-scrollbar mt-24"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
      >
        {projectsData.map((data, i) => (
          <div
            key={data.id}
            className="flex-shrink-0 select-none flex flex-col gap-4 w-[calc((100%-64px)/1)] mobile:w-[calc((100%-64px)/2)] tablet:w-[calc((100%-64px)/3)] ultraWide:w-[calc((100%-64px)/4)]"
            style={{ fontFamily: "'Satoshi Medium', sans-serif" }}
          >
            <div
              className="relative h-[630px] bg-no-repeat bg-center rounded-lg bg-cover flex flex-col justify-end text-creamy "
              style={{
                backgroundImage: `url(${data.imgCouv})`,
              }}
            >
              <div
                className="absolute inset-0 rounded-lg z-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 35, 23, 0.95), transparent)",
                }}
              />

              <Link href={`${data.slug}`}>
                <div
                  onMouseEnter={() => setIsDataHovered(true)}
                  onMouseLeave={() => setIsDataHovered(false)}
                  onClick={(e) => {
                    if (hasMoved) {
                      e.preventDefault();
                    }
                  }}
                  className="flex flex-col gap-4 p-6 z-10"
                >
                  <h2 className="text-xl uppercase">{data.title}</h2>

                  <p
                    className="opacity-75 py-2"
                    dangerouslySetInnerHTML={{ __html: data.description }}
                  />

                  <button className="cursor-none w-fit font-extralight text-sm flex items-center gap-3">
                    {t("button")}
                    <ChevronSvg className="-rotate-90" strokeColor="#FFFFE3" />
                  </button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
