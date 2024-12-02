import Head from "next/head";

// I18N
import { i18n } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// COMPONENTS
import HeroHomeComponent from "@/components/home/hero.home.component";
import NavbarComponent from "@/components/_shared/nav/nav.component";
import TechnoHomeComponent from "@/components/home/techno.home.component";
import ExpertisesHomeComponent from "@/components/home/expertises.home.component";

export default function HomePage(props) {
  let title;
  let description;

  switch (i18n.language) {
    case "en":
      title = "Modjoy Studio";
      description = "";
      break;
    default:
      title = "Modjoy Studio";
      description = "";
  }
  return (
    <>
      <Head>
        <title>{title}</title>

        {/* <>
          {description && <meta name="description" content={description} />}
          {title && <meta property="og:title" content={title} />}
          {description && (
            <meta property="og:description" content={description} />
          )}
          <meta
            property="og:url"
            content="https://lespetitsbilingues-newham.com/"
          />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/img/open-graph.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </> */}
      </Head>

      <div className="relative bg-darkGreen">
        <NavbarComponent/>

        <HeroHomeComponent/>
        <TechnoHomeComponent/>
        <ExpertisesHomeComponent/>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "index"])),
    },
  };
}
