import Head from "next/head";

// I18N
import { i18n } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// COMPONENTS
import HeroHomeComponent from "@/components/home/hero.home.component";
import NavbarComponent from "@/components/_shared/nav/nav.component";
import ExpertisesHomeComponent from "@/components/home/expertises.home.component";
import SkillsHomeComponent from "@/components/home/skills.home.component";
import ProjectsHomeComponent from "@/components/home/projects.home.component";
import TeamHomeComponent from "@/components/home/team.home.component";
import WorkHomeComponent from "@/components/home/work.home.component";
import FaqHomeComponent from "@/components/home/faq.home.component";
import PartnersHomeComponent from "@/components/home/partners.home.component";
import FooterComponent from "@/components/_shared/footer/footer.component";

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
          <meta
            property="og:url"
            content="https://www.modjoy-studio.com"
          />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/img/open-graph.jpg" />
          <meta property="og:image:width" content="756" />
          <meta property="og:image:height" content="756" />
        </>
      </Head>

      <div className="select-none">
        <NavbarComponent />

        <HeroHomeComponent />
        <ExpertisesHomeComponent />
        <SkillsHomeComponent />
        <ProjectsHomeComponent />
        <TeamHomeComponent />
        <WorkHomeComponent />
        <FaqHomeComponent />
        <PartnersHomeComponent />
        <FooterComponent />
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
