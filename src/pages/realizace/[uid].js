import Head from "next/head";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { getLocales } from "@/lib/getLocales";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Layout } from "@/components/Layout";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Play from "@/assets/svg/Play";

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
      <div className="grid min-h-[80vh]  grid-cols-1 grid-rows-2  bg-slate-200/80 sm:grid-cols-2 sm:grid-rows-1">
        <div className="items-middle m-x-3 flex h-full flex-col justify-center gap-4 text-center">
          <PrismicRichText field={realizace.data.title} />
          {prismic.isFilled.richText(realizace.data.short_description) && (
            <span>
              <PrismicRichText field={realizace.data.short_description} />
            </span>
          )}
          {prismic.isFilled.link(realizace.data.video) && (
            <div className="items-middle flex justify-evenly">
              <PrismicNextLink href={realizace.data.video}>
                <span className="inline-flex items-center">
                  <a className="mr-4 underline">Video</a>
                  <Play />
                </span>
              </PrismicNextLink>
            </div>
          )}
        </div>
        <div>
          <figure className="h-full">
            <PrismicNextImage
              className="h-full w-full object-contain"
              field={realizace.data.image.Big}
            />
          </figure>
        </div>
      </div>
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
