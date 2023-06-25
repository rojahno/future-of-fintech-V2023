import { Overview } from "../components/content/overview/Overview";
import { PageLayout } from "../components/layout/PageLayout";
import Head from "next/head";

export default function Oversikt() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Electrify</title>
      </Head>
      <PageLayout>
        <Overview />
      </PageLayout>
    </>
  );
}
