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

  const handleScrollToSection = (index) => {
    if (sectionsRef.current[index]) {
      sectionsRef.current[index].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="bg-creamy py-24 rounded-[48px] px-[5%] flex gap-12">
      {/* Sommaire à gauche */}
      <div className="w-1/3 sticky top-24 h-fit">
        <h1
          className="text-xl"
          style={{ fontFamily: "'Brockmann Medium', sans-serif" }}
        >
          Table of content
        </h1>

        <div className="flex flex-col mt-6 max-w-[350px]">
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
      </div>

      {/* Sections à droite */}
      <div className="w-2/3">
        {props.project.details.sections.map((section, i) => (
          <div
            key={i}
            ref={(el) => (sectionsRef.current[i] = el)}
            className="mb-12"
          >
            <h2
              style={{ fontFamily: "'Brockmann Medium', sans-serif" }}
              className="text-2xl font-bold mb-4"
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
