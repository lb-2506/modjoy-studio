import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// DATA
import { projectsData } from "@/_assets/data/projects.data";

// SVG
import { ChevronSvg, ArrowSvg } from "../_shared/_svgs/_index";

export default function ProjectsHomeComponent() {
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

  function handleMouseLeave() {
    setShowCursor(false);
  }

  function updateCursorPos(e) {
    setCursorPos({ x: e.clientX, y: e.clientY });
  }

  const arrowRotation = cursorPos.x < halfScreenWidth ? "180deg" : "0deg";

  return (
    <section className="bg-darkGreen relative flex flex-col justify-center pt-24 w-full mx-auto">
      <div className="flex flex-col gap-4 text-center text-creamy">
        <h3>Portfolio</h3>
        <h1
          className="text-5xl"
          style={{ fontFamily: "'Brockmann Medium', sans-serif" }}
        >
          Nos dernières réalisations
        </h1>
        <img
          src="/img/underline-pink.png"
          alt="underline"
          draggable={false}
          className="max-w-[250px] mx-auto"
        />
        <h2 className="pt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
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
              className="h-[630px] bg-no-repeat bg-center rounded-lg bg-cover flex flex-col justify-end  text-creamy "
              style={{
                backgroundImage: `url(${data.imgSrc})`,
              }}
            >
              <Link href={`${data.slug}`}>
                <div
                  onMouseEnter={() => setIsDataHovered(true)}
                  onMouseLeave={() => setIsDataHovered(false)}
                  className="flex flex-col gap-4 p-6"
                >
                  <h2 className="text-xl uppercase">{data.title}</h2>

                  <p className="opacity-70 py-2">{data.description}</p>

                  <button className="w-fit font-extralight text-sm flex items-center gap-3">
                    Button{" "}
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
