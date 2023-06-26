import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { getLocales } from "@/lib/getLocales";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Layout } from "@/components/Layout";

export default function realizace({
  realizace,
  navigation,
  settings,
  locales,
}) {
  console.log(realizace);
  return (
    <Layout locales={locales} navigation={navigation} settings={settings}>
      <Head>
        <title>
          {prismic.asText(realizace.data.title)} |{" "}
          {prismic.asText(settings.data.siteTitle)}
        </title>

        <meta
          name="description"
          content={prismic.asText(realizace.data.meta_description)}
        />
        <link
          rel="icon"
          href={prismic.asImageSrc(settings.data.logo.Icon)}
          sizes="any"
        />
        <meta
          property="og:title"
          content={
            prismic.asText(realizace.data.title) +
            "|" +
            prismic.asText(settings.data.siteTitle)
          }
        />
        <meta
          property="og:description"
          content={prismic.asText(realizace.data.meta_description)}
        />
        <meta
          property="og:image"
          content={prismic.asImageSrc(realizace.data.image)}
        />
      </Head>
      <SliceZone slices={realizace.data.slices} components={components} />
    </Layout>
  );
}

export async function getStaticProps({ params, locale, previewData }) {
  const client = createClient({ previewData });

  const realizace = await client.getByUID("realizace", params.uid, {
    lang: locale,
  });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });

  const locales = await getLocales(realizace, client);

  return {
    props: {
      realizace,
      navigation,
      settings,
      locales,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const realizaces = await client.getAllByType("realizace", { lang: "*" });

  return {
    paths: realizaces.map((realizace) => {
      return {
        params: { uid: realizace.uid },
        locale: realizace.lang,
      };
    }),
    fallback: false,
  };
}
