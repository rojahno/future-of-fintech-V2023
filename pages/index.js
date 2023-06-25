import { LandingPage } from "../components/content/landing/LandingPage";
import { Header } from "../components/layout/header/Header.jsx";
import Head from "next/head";
import { Footer } from "../components/layout/footer/Footer";
import { MainContent } from "../components/layout/MainContent";
import { PageLayout } from "../components/layout/PageLayout";

// This is the page that will be rendered at the root of your site.
export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Electrify</title>
      </Head>

      {/* <Header /> */}
      <main>
        <PageLayout>
          <LandingPage />
        </PageLayout>
      </main>
      {/* <Footer /> */}
    </>
  );
}
