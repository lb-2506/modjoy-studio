// I18N
import { useTranslation } from "next-i18next";

export default function HeroHomeComponent() {
  const { t } = useTranslation("index");

  return (
    <section className="h-[85dvh] flex justify-center items-center relative overflow-hidden">
      <img
        src="/img/pointbg.png"
        draggable={false}
        className="inset-0 absolute opacity-20 pointer-events-none"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
          maskImage:
            "radial-gradient(ellipse, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskSize: "cover",
          maskSize: "cover",
        }}
      />

      <img
        src="/img/flower-orange.png"
        draggable={false}
        className="max-w-[200px] absolute left-[5%] top-[25%]"
      />
      <img
        src="/img/flower-green.png"
        draggable={false}
        className="max-w-[200px] absolute right-0"
      />
      <img
        src="/img/cube.png"
        draggable={false}
        className="max-w-[200px] absolute right-[10%] bottom-[20%]"
      />
      <img
        src="/img/smiley-1.png"
        draggable={false}
        className="max-w-[100px] absolute right-[20%] top-[20%]"
      />
      <img
        src="/img/smiley-2.png"
        draggable={false}
        className="max-w-[100px] absolute left-[20%] bottom-[10%]"
      />

      <div className="max-w-[680px] text-creamy flex flex-col gap-6 items-center justify-center text-center">
        <h3>Crafting experiences that inspire</h3>

        <h1
          className="text-[80px] leading-[85px] flex items-center gap-3 justify-center flex-wrap text-center"
          style={{ fontFamily: "'Brockmann Medium', sans-serif" }}
        >
          Elevate{" "}
          <div className="relative text-green border border-green px-3 pb-4 mt-2">
            your
            <span className="absolute top-0 left-0 w-[6px] h-[6px] bg-creamy -translate-x-1/2 -translate-y-1/2 border-green border" />
            <span className="absolute top-0 right-0 w-[6px] h-[6px] bg-creamy translate-x-1/2 -translate-y-1/2 border-green border" />
            <span className="absolute bottom-0 left-0 w-[6px] h-[6px] bg-creamy -translate-x-1/2 translate-y-1/2 border-green border" />
            <span className="absolute bottom-0 right-0 w-[6px] h-[6px] bg-creamy translate-x-1/2 translate-y-1/2 border-green border" />
          </div>{" "}
          Brand{" "}
          <img
            src="/img/smile.png"
            alt="picto"
            draggable={false}
            className="h-[100px] w-[95px]"
          />{" "}
          with our{" "}
          <div className="relative text-turquoise border border-turquoise px-3 mt-2">
            Creative
            <span className="absolute top-0 left-0 w-[6px] h-[6px] bg-creamy -translate-x-1/2 -translate-y-1/2 border-turquoise border" />
            <span className="absolute top-0 right-0 w-[6px] h-[6px] bg-creamy translate-x-1/2 -translate-y-1/2 border-turquoise border" />
            <span className="absolute bottom-0 left-0 w-[6px] h-[6px] bg-creamy -translate-x-1/2 translate-y-1/2 border-turquoise border" />
            <span className="absolute bottom-0 right-0 w-[6px] h-[6px] bg-creamy translate-x-1/2 translate-y-1/2 border-turquoise border" />
          </div>{" "}
          Magic
        </h1>

        <h2 className="max-w-[580px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique
        </h2>

        <button className="bg-creamy text-darkGreen rounded-2xl px-4 py-2">
          Button
        </button>
      </div>
    </section>
  );
}
