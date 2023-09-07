import Head from "next/head";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { getLocales } from "@/lib/getLocales";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Layout } from "@/components/Layout";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Play from "@/assets/svg/Play";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

// import plugins if you need
import lgZoom from "lightgallery/plugins/zoom";
export default function reference({
  reference,
  navigation,
  settings,
  locales,
}) {
  return (
    <Layout locales={locales} navigation={navigation} settings={settings}>
      <Head>
        <title>
          {prismic.asText(reference.data.title)} |{" "}
          {prismic.asText(settings.data.siteTitle)}
        </title>

        <meta
          name="description"
          content={prismic.asText(reference.data.meta_description)||prismic.asText(reference.data.short_description)}
        />
        <link
          rel="icon"
          href={prismic.asImageSrc(settings.data.logo.Icon)}
          sizes="any"
        />
        <meta
          property="og:title"
          content={
            prismic.asText(reference.data.title) +
            "|" +
            prismic.asText(settings.data.siteTitle)
          }
        />
        <meta
          property="og:description"
          content={prismic.asText(reference.data.meta_description)||prismic.asText(reference.data.short_description)}
        />
        <meta
          property="og:image"
          content={prismic.asImageSrc(reference.data.image)}
        />
      </Head>
      <div className="grid min-h-[40vh]  grid-cols-1 grid-rows-2 gap-4  bg-slate-200/80 sm:grid-cols-2 sm:grid-rows-1">
        <div className="items-middle m-x-3 flex h-full flex-col justify-center gap-4 text-center">
          <PrismicRichText field={reference.data.title} />
          {prismic.isFilled.richText(reference.data.short_description) && (
            <span>
              <PrismicRichText field={reference.data.short_description} />
            </span>
          )}
          {prismic.isFilled.link(reference.data.video) && (
            <div className="items-middle flex justify-evenly">
              <PrismicNextLink href={reference.data.video}>
                <span className="inline-flex items-center">
                  <a className="mr-4 underline">Video</a>
                  <Play />
                </span>
              </PrismicNextLink>
            </div>
          )}
        </div>
        <div>
        <LightGallery plugins={[lgZoom]}>
            <a href={prismic.asImageSrc(reference.data.image)}>
              <figure className="h-full">
                <PrismicNextImage
                  className="h-full w-full object-contain"
                  field={reference.data.image.Big}
                />
              </figure>
            </a>
          </LightGallery>
        </div>
      </div>
      <SliceZone slices={reference.data.slices} components={components} />
    </Layout>
  );
}

export async function getStaticProps({ params, locale, previewData }) {
  const client = createClient({ previewData });

  const reference = await client.getByUID("reference", params.uid, {
    lang: locale,
  });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });

  const locales = await getLocales(reference, client);

  return {
    props: {
      reference,
      navigation,
      settings,
      locales,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const references = await client.getAllByType("reference", { lang: "*" });

  return {
    paths: references.map((reference) => {
      return {
        params: { uid: reference.uid },
        locale: reference.lang,
      };
    }),
    fallback: false,
  };
}
