import { useEffect, useState, useRef } from "react";

export default function DetailsProjectsComponent(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionsRef.current.findIndex(
            (ref) => ref === entry.target
          );
          setActiveIndex(index);
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  function handleScrollToSection(index) {
    const sectionEl = sectionsRef.current[index];
    if (sectionEl) {
      sectionEl.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <section className="bg-creamy py-12 tablet:py-24 rounded-[48px] px-[5%] flex flex-col tablet:flex-row gap-12">
      <div className="tablet:w-1/3 sticky top-6 tablet:top-24 h-fit">
        <h1
          className="hidden tablet:block text-xl"
          style={{ fontFamily: "'Brockmann Medium', sans-serif" }}
        >
          Table of content
        </h1>

        <div className="hidden tablet:flex flex-col mt-6 max-w-[350px]">
          {props.project.details.sections.map((section, i) => (
            <button
              key={i}
              onClick={() => handleScrollToSection(i)}
              className={`h-[40px] rounded-full flex items-center px-4 ${
                i === activeIndex ? "bg-pink text-white" : "bg-transparent"
              }`}
              style={{
                marginLeft: `${i * 20}px`,
              }}
            >
              {section.heading}
            </button>
          ))}
        </div>

        <select
          style={{
            fontFamily: "'Brockmann Medium', sans-serif",
            WebkitTapHighlightColor: "transparent",
          }}
          className={`
            p-2 rounded-xl border-pink border w-full bg-pink text-darkGreen
            outline-none text-lg h-[60px]
            appearance-none        
            focus:bg-pink          
            active:bg-pink      
            focus:opacity-100
            active:opacity-100
            tablet:hidden
          `}
          value={activeIndex + 1}
          onChange={(e) => {
            const val = parseInt(e.target.value, 10);
            if (val > 0) {
              handleScrollToSection(val - 1);
            }
          }}
        >
          <option value="0" disabled>
            Table of content
          </option>

          {props.project.details.sections.map((section, i) => (
            <option key={i} value={i + 1}>
              {section.heading}
            </option>
          ))}
        </select>
      </div>

      {/* Bloc de droite (Sections) */}
      <div className="tablet:w-2/3">
        {props.project.details.sections.map((section, i) => (
          <div
            key={i}
            ref={(el) => (sectionsRef.current[i] = el)}
            className="mb-12 scroll-mt-[45px]"
          >
            <h2
              style={{ fontFamily: "'Brockmann Medium', sans-serif" }}
              className="text-xl font-bold mb-4"
            >
              {section.heading}
            </h2>
            <div dangerouslySetInnerHTML={{ __html: section.content }}></div>
          </div>
        ))}
      </div>
    </section>
  );
}
