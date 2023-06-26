import Article from "@/components/Article";
import Button from "@/components/Button";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

/**
 * @typedef {import("@prismicio/client").Content.ReferenceSlice} ReferenceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ReferenceSlice>} ReferenceProps
 * @param {ReferenceProps}
 */
const Reference = ({ slice, context }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col items-center bg-slate-300/80 py-16"
    >
      <span className="m-4 max-w-7xl text-center">
        <PrismicRichText field={slice.primary.text} />
      </span>
      <div className="flex w-full flex-wrap place-content-around">
        {context.reference /* realizace */
          ?.slice(0, slice.primary.visible ? slice.primary.visible : 3)
          .map((project) => {
            return <Article type={1} key={project.id} data={project} />;
          })}
      </div>
      {prismicH.asText(slice.primary.button_text) && (
        <PrismicNextLink document={slice.primary.button_link}>
          <Button type={"secondary"}>
            <PrismicRichText field={slice.primary.button_text} />
          </Button>
        </PrismicNextLink>
      )}
    </section>
  );
};

export default Reference;
