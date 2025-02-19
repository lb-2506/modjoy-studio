import Head from "next/head";

// I18N
import { i18n } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// COMPONENTS
import HeroHomeFoodComponent from "@/components/food/home/hero.home.food.component";
import NavbarFoodComponent from "@/components/food/_shared/nav/nav.food.component";
import ExpertisesHomeFoodComponent from "@/components/food/home/expertises.home.food.component";
import SkillsHomeFoodComponent from "@/components/food/home/skills.home.food.component";
import TeamHomeFoodComponent from "@/components/food/home/team.home.food.component";
import PartnersHomeFoodComponent from "@/components/food/home/partners.home.food.component";
import FooterFoodComponent from "@/components/food/_shared/footer/footer.food.component";
import LogosHomeFoodComponent from "@/components/food/home/logos.home.food.component";

export default function HomePage(props) {
  let title;
  let description;

  switch (i18n.language) {
    case "en":
      title =
        "Modjoy-Studio - Agence créative en communication & développement web";
      description =
        "Modjoy-Studio vous accompagne dans votre stratégie digitale : création de sites web, développement d’applications, branding, gestion des réseaux sociaux et bien plus. Transformez votre vision en succès !";
      break;
    default:
      title =
        "Modjoy-Studio - Agence créative en communication & développement web";
      description =
        "Modjoy-Studio vous accompagne dans votre stratégie digitale : création de sites web, développement d’applications, branding, gestion des réseaux sociaux et bien plus. Transformez votre vision en succès !";
  }

  return (
    <>
      <Head>
        <title>{title}</title>

        <>
          {description && <meta name="description" content={description} />}
          {title && <meta property="og:title" content={title} />}
          {description && (
            <meta property="og:description" content={description} />
          )}
          <meta property="og:url" content="https://www.modjoy-studio.com" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/img/open-graph.jpg" />
          <meta property="og:image:width" content="756" />
          <meta property="og:image:height" content="756" />
        </>
      </Head>

      <div className="select-none">
        <NavbarFoodComponent />

        <HeroHomeFoodComponent />

        <ExpertisesHomeFoodComponent />

        <LogosHomeFoodComponent />

        <SkillsHomeFoodComponent />

        <TeamHomeFoodComponent />

        <PartnersHomeFoodComponent />

        <FooterFoodComponent />
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "expertises",
        "hero-section",
        "skills",
        "projects",
        "team",
        "work",
        "faq",
        "partners",
      ])),
    },
  };
}
