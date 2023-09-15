import { PrismicNextImage } from "@prismicio/next";
import React from "react";
import * as prismicH from "@prismicio/helpers";
import parseDate from "@/functions/parseDate";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import Button from "./Button";
import Arrow from "@/assets/svg/Arrow";
import * as prismic from "@prismicio/client";
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

export default function Article({ data, type = 0 }) {
  if (type === 0)
    return (
      <article key={data.id} className="m-4 flex w-full max-w-md flex-col ">
        <LightGallery plugins={[lgZoom]} elementClassNames="h-full">
          <a href={prismic.asImageSrc(data.data.image)}>
            <figure className="aspect-[4/3] overflow-hidden">
              <PrismicNextImage
                className="h-full w-full rounded-md object-contain"
                field={data.data.image.Small}
              />
            </figure>
          </a>
        </LightGallery>
        <span className="my-5">
          <time>{data.data.date && parseDate(data.data.date)}</time>
        </span>
        <PrismicRichText field={data.data.title} />
        <span className="my-5">
          <PrismicLink document={data}>
            <Button type={"secondary"}>VÍCE</Button>
          </PrismicLink>
        </span>
      </article>
    );
  if (type === 1) {
    return (
      <article
        key={data.id}
        className="m-4 box-border flex w-full max-w-md flex-col rounded-lg border bg-white p-4"
      >
        <figure className="aspect-4 overflow-hidden">
          <PrismicNextImage
            className="h-full w-full object-contain object-left"
            field={data.data.image.Small}
          />
        </figure>
        <span className="my-5">
          <time>{data.data.date && parseDate(data.data.date)}</time>
        </span>
        <PrismicRichText field={data.data.short_description} />
        <span className="my-5">
          <PrismicLink document={data}>
            <Button type={"tertiary"}>
              <span className="inline-flex items-center gap-4 underline transition-all hover:gap-5 ">
                VÍCE
                <Arrow />
              </span>
            </Button>
          </PrismicLink>
        </span>
      </article>
    );
  }
}
