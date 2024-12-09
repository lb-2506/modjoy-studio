import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function DetailsProjectsComponent(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 1, // Section considérée visible à 50%
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
        behavior: "smooth", // Défilement fluide
        block: "start", // Aligne la section au centre de l'écran
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
          {props.project.context.sections.map((section, i) => (
            <button
              key={i}
              onClick={() => handleScrollToSection(i)} // Scrolle vers la section correspondante
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
        <h1
          className="text-4xl mb-4"
          style={{ fontFamily: "'Brockmann Medium', sans-serif" }}
        >
          {props.project.context.heading}
        </h1>

        <p>{props.project.context.description}</p>

        <div
          className="mt-12 h-[380px] bg-cover bg-center rounded-xl "
          style={{
            backgroundImage: `url(${props.project.context.image.src})`,
          }}
          aria-label={props.project.title}
        />

        <p className="border-l-2 pl-2 mt-4">
          {props.project.context.image.caption}
        </p>

        <p className="my-8">{props.project.context.details}</p>

        <div className="flex flex-col">
          {props.project.context.sections.map((section, i) => (
            <div
              key={i}
              className="flex flex-col gap-4"
              ref={(el) => (sectionsRef.current[i] = el)}
            >
              <p className="text-xl font-bold pt-12">{section.heading}</p>
              {section.content && <p>{section.content}</p>}
              {section.quote && (
                <p className="border-l-2 pl-2 italic">"{section.quote}"</p>
              )}
              {section.image && (
                <div
                  className="mt-12 h-[380px] bg-cover bg-center rounded-xl "
                  style={{
                    backgroundImage: `url(${section.image.src})`,
                  }}
                  aria-label={props.project.title}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
