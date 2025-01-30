import Head from "next/head";
import { useRouter } from "next/router";

// I18N
import { i18n } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// COMPONENTS
import NavbarComponent from "@/components/_shared/nav/nav.component";
import PartnersHomeComponent from "@/components/home/partners.home.component";
import FooterComponent from "@/components/_shared/footer/footer.component";
import HeroProjectsComponent from "@/components/projects/hero.projects.component";

// DATA
import { projectsData } from "@/_assets/data/projects.data";
import ProjectsHomeComponent from "@/components/home/projects.home.component";
import DetailsProjectsComponent from "@/components/projects/details.projects.component";

export default function ProjectPage(props) {
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

      <div className="relative bg-darkGreen">
        <NavbarComponent />

        <HeroProjectsComponent project={props.project} />
        <DetailsProjectsComponent project={props.project} />
        <ProjectsHomeComponent projectPage={true} />
        <PartnersHomeComponent />
        <FooterComponent />
      </div>
    </>
  );
}

export async function getStaticProps({ locale, params }) {
  const slug = params.slug;

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "index",
        "projects",
        "partners",
      ])),
      project,
    },
  };
}

export async function getStaticPaths({ locales }) {
  const paths = projectsData.flatMap((project) =>
    locales.map((locale) => ({
      params: { slug: project.slug },
      locale,
    }))
  );

  return { paths, fallback: false };
}
