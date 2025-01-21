// I18N
import { useTranslation } from "next-i18next";

// MARQUEE
import Marquee from "react-fast-marquee";

// SVG
import {
  AlpazeSvg,
  CadulisSvg,
  LesPtitsMotsSvg,
  LpbnSvg,
  LvsSvg,
  MirrorBotSvg,
  PluxeeSvg,
  PowerSvg,
  SodexoSvg,
  TreefleSvg,
  TrippnySvg,
} from "../_shared/_svgs/_index";

export default function LogosHomeComponent() {
  const { t } = useTranslation("hero-section");

  return (
    <section className="text-center h-[20dvh] w-[100vw]">
      <h1 className="h-[40px] py-2 text-creamy">{t("logos.title")}</h1>

      <Marquee>
        <div className="h-[calc(20dvh-40px)] flex gap-16 items-center">
          <AlpazeSvg />
          <LpbnSvg />
          <CadulisSvg />
          <TrippnySvg />
          <PluxeeSvg />
          <LvsSvg />
          <LesPtitsMotsSvg />
          <MirrorBotSvg />
          <TreefleSvg />
          <PowerSvg />
          <SodexoSvg />
        </div>
      </Marquee>
    </section>
  );
}
