// I18N
import { useTranslation } from "next-i18next";
import { AlpazeSvg } from "../_shared/_svgs/logos/alpaze.svg";

export default function LogosHomeComponent() {
  const { t } = useTranslation("hero-section");

  return (
    <section className="text-center h-[20dvh] w-[100vw]">
      <h1 className="py-2 text-creamy">{t("logos.title")}</h1>

      <div className="mt-12 flex items-center">
        <AlpazeSvg className="max-h-[100px]" />
      </div>
    </section>
  );
}
