// I18N
import { useTranslation } from "next-i18next";

export default function LogosHomeComponent() {
  const { t } = useTranslation("hero-section");

  return (
    <section className="text-center h-[20dvh]">
      <h1 className="py-2 text-creamy">
       {t('logos.title')}
      </h1>

      <img
        src="/img/techno.png"
        alt="techno"
        draggable={false}
        className="w-full py-12"
      />
    </section>
  );
}
