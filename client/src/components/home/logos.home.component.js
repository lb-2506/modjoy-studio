// I18N
import { useTranslation } from "next-i18next";

// MARQUEE
import Marquee from "react-fast-marquee";

// SVG
import {
  AlpazeSvg,
  CadulisSvg,
  CorsairSvg,
  KfcSvg,
  LesPtitsMotsSvg,
  LpbnSvg,
  LvsSvg,
  MirrorBotSvg,
  OrangeSvg,
  PluxeeSvg,
  PowerSvg,
  SfrSvg,
  SodexoSvg,
  TreefleSvg,
  TrippnySvg,
} from "../_shared/_svgs/_index";

export default function LogosHomeComponent() {
  const { t } = useTranslation("hero-section");

  return (
    <section className="text-center tablet:h-[20dvh] w-[100vw]">
      <h1 className="h-[40px] py-2 text-creamy">{t("logos.title")}</h1>

      <Marquee>
        <div className="h-[calc(20dvh-40px)] flex gap-16 items-center">
          <AlpazeSvg />
          <LpbnSvg />
          <CadulisSvg />
          <TrippnySvg />
          <PluxeeSvg />
          <SfrSvg/>
          <LvsSvg />
          <LesPtitsMotsSvg />
          <MirrorBotSvg />
          <KfcSvg/>
          <TreefleSvg />
          <OrangeSvg/>
          <CorsairSvg/>
          <PowerSvg />
          <SodexoSvg />
        </div>
      </Marquee>
    </section>
  );
}
