// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for Navigation documents */
interface NavigationDocumentData {
  /**
   * Links field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  links: prismic.GroupField<Simplify<NavigationDocumentDataLinksItem>>;
}
/**
 * Item in Navigation → Links
 *
 */
export interface NavigationDocumentDataLinksItem {
  /**
   * Label field in *Navigation → Links*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Optional - Label for the link
   * - **API ID Path**: navigation.links[].label
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  label: prismic.TitleField;
  /**
   * Link field in *Navigation → Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Link for navigation item
   * - **API ID Path**: navigation.links[].link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  link: prismic.LinkField;
}
/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;
/** Content for Page documents */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Title for the page
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField;
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  meta_description: prismic.RichTextField;
  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice =
  | HeroSlice
  | ImageSlice
  | TextWithFeaturesSlice
  | TextWithImageSlice
  | RealizaceSlice
  | ReferenceSlice
  | ProcedureSlice
  | TextWithImagesSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
/** Content for Realizace documents */
interface RealizaceDocumentData {
  /**
   * Title field in *Realizace*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: realizace.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField;
  /**
   * Image field in *Realizace*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: realizace.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<"Small" | "Big">;
  /**
   * Date field in *Realizace*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: realizace.date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/date
   *
   */
  date: prismic.DateField;
  /**
   * Video field in *Realizace*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: realizace.video
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  video: prismic.LinkField;
  /**
   * Short Description field in *Realizace*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: realizace.short_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  short_description: prismic.RichTextField;
  /**
   * Slice Zone field in *Realizace*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: realizace.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<RealizaceDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *Realizace*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: realizace.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  meta_description: prismic.RichTextField;
  /**
   * Meta Image field in *Realizace*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: realizace.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *Realizace*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: realizace.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Slice for *Realizace → Slice Zone*
 *
 */
type RealizaceDocumentDataSlicesSlice =
  | ProcedureSlice
  | RealizaceSlice
  | ReferenceSlice
  | TextWithImageSlice
  | HeroSlice
  | TextWithFeaturesSlice
  | ImageSlice
  | TextWithImagesSlice;
/**
 * Realizace document from Prismic
 *
 * - **API ID**: `realizace`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type RealizaceDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<RealizaceDocumentData>,
    "realizace",
    Lang
  >;
/** Content for Reference documents */
interface ReferenceDocumentData {
  /**
   * Firma field in *Reference*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: reference.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField;
  /**
   * Image field in *Reference*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: reference.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<"Small" | "Big">;
  /**
   * Date field in *Reference*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: reference.date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/date
   *
   */
  date: prismic.DateField;
  /**
   * Short Description field in *Reference*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: reference.short_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  short_description: prismic.RichTextField;
  /**
   * Slice Zone field in *Reference*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: reference.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<ReferenceDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *Reference*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: reference.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  meta_description: prismic.RichTextField;
  /**
   * Meta Image field in *Reference*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: reference.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *Reference*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: reference.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Slice for *Reference → Slice Zone*
 *
 */
type ReferenceDocumentDataSlicesSlice =
  | ProcedureSlice
  | RealizaceSlice
  | HeroSlice
  | ReferenceSlice
  | TextWithImageSlice
  | TextWithFeaturesSlice
  | ImageSlice
  | TextWithImagesSlice;
/**
 * Reference document from Prismic
 *
 * - **API ID**: `reference`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ReferenceDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ReferenceDocumentData>,
    "reference",
    Lang
  >;
/** Content for Settings documents */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Title of the site
   * - **API ID Path**: settings.siteTitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  siteTitle: prismic.TitleField;
  /**
   * Logo field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  logo: prismic.ImageField<"Icon">;
  /**
   * Footer Description field in *Settings*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Text below the sign up form
   * - **API ID Path**: settings.newsletterDescription
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  newsletterDescription: prismic.RichTextField;
  /**
   * App field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: App button text
   * - **API ID Path**: settings.app
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  app: prismic.KeyTextField;
  /**
   * copyright field in *Settings*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.copyright
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  copyright: prismic.RichTextField;
  /**
   * More info field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: More info text
   * - **API ID Path**: settings.more_info
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  more_info: prismic.KeyTextField;
}
/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;
export type AllDocumentTypes =
  | NavigationDocument
  | PageDocument
  | RealizaceDocument
  | ReferenceDocument
  | SettingsDocument;
/**
 * Primary content in Hero → Primary
 *
 */
interface HeroSliceDefaultPrimary {
  /**
   * Text field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Introductory text for the page
   * - **API ID Path**: hero.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
  /**
   * Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
}
/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;
/**
 * Primary content in Hero → Primary
 *
 */
interface HeroSliceWithButtonPrimary {
  /**
   * Text field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Introductory text for the page
   * - **API ID Path**: hero.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
  /**
   * Button Text field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.buttonText
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  buttonText: prismic.KeyTextField;
  /**
   * Button Link field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.buttonLink
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  buttonLink: prismic.LinkField;
  /**
   * Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
}
/**
 * With Button variation for Hero Slice
 *
 * - **API ID**: `withButton`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceWithButton = prismic.SharedSliceVariation<
  "withButton",
  Simplify<HeroSliceWithButtonPrimary>,
  never
>;
/**
 * Slice variation for *Hero*
 *
 */
type HeroSliceVariation = HeroSliceDefault | HeroSliceWithButton;
/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;
/**
 * Primary content in Image → Primary
 *
 */
interface ImageSliceWhitePrimary {
  /**
   * Image field in *Image → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
  /**
   * With Accent field in *Image → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: image.primary.withAccent
   * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
   *
   */
  withAccent: prismic.BooleanField;
}
/**
 * White variation for Image Slice
 *
 * - **API ID**: `white`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSliceWhite = prismic.SharedSliceVariation<
  "white",
  Simplify<ImageSliceWhitePrimary>,
  never
>;
/**
 * Primary content in Image → Primary
 *
 */
interface ImageSliceLightSlatePrimary {
  /**
   * Image field in *Image → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
  /**
   * With Accent field in *Image → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: image.primary.withAccent
   * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
   *
   */
  withAccent: prismic.BooleanField;
}
/**
 * Light Slate variation for Image Slice
 *
 * - **API ID**: `lightSlate`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSliceLightSlate = prismic.SharedSliceVariation<
  "lightSlate",
  Simplify<ImageSliceLightSlatePrimary>,
  never
>;
/**
 * Slice variation for *Image*
 *
 */
type ImageSliceVariation = ImageSliceWhite | ImageSliceLightSlate;
/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSlice = prismic.SharedSlice<"image", ImageSliceVariation>;
/**
 * Primary content in Procedure → Primary
 *
 */
interface ProcedureSliceDefaultPrimary {
  /**
   * Text field in *Procedure → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: procedure.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
  /**
   * Button Link field in *Procedure → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: procedure.primary.button_link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  button_link: prismic.LinkField;
  /**
   * Button Text field in *Procedure → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: procedure.primary.button_text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  button_text: prismic.RichTextField;
}
/**
 * Item in Procedure → Items
 *
 */
export interface ProcedureSliceDefaultItem {
  /**
   * Text field in *Procedure → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: procedure.items[].text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
}
/**
 * Default variation for Procedure Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ProcedureSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProcedureSliceDefaultPrimary>,
  Simplify<ProcedureSliceDefaultItem>
>;
/**
 * Primary content in Procedure → Primary
 *
 */
interface ProcedureSliceProcedireWithImagePrimary {
  /**
   * Image field in *Procedure → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: procedure.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
  /**
   * Button Link field in *Procedure → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: procedure.primary.button_link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  button_link: prismic.LinkField;
  /**
   * Button Text field in *Procedure → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: procedure.primary.button_text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  button_text: prismic.RichTextField;
}
/**
 * Item in Procedure → Items
 *
 */
export interface ProcedureSliceProcedireWithImageItem {
  /**
   * Text field in *Procedure → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: procedure.items[].text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
}
/**
 * Procedire - With Image variation for Procedure Slice
 *
 * - **API ID**: `procedireWithImage`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ProcedureSliceProcedireWithImage = prismic.SharedSliceVariation<
  "procedireWithImage",
  Simplify<ProcedureSliceProcedireWithImagePrimary>,
  Simplify<ProcedureSliceProcedireWithImageItem>
>;
/**
 * Slice variation for *Procedure*
 *
 */
type ProcedureSliceVariation =
  | ProcedureSliceDefault
  | ProcedureSliceProcedireWithImage;
/**
 * Procedure Shared Slice
 *
 * - **API ID**: `procedure`
 * - **Description**: `Procedure`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ProcedureSlice = prismic.SharedSlice<
  "procedure",
  ProcedureSliceVariation
>;
/**
 * Primary content in Realizace → Primary
 *
 */
interface RealizaceSliceDefaultPrimary {
  /**
   * Text field in *Realizace → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: realizace.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
  /**
   * Button text field in *Realizace → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: realizace.primary.button_text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  button_text: prismic.RichTextField;
  /**
   * Button Link field in *Realizace → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: realizace.primary.button_link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  button_link: prismic.LinkField;
  /**
   * Visible field in *Realizace → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: realizace.primary.visible
   * - **Documentation**: https://prismic.io/docs/core-concepts/number
   *
   */
  visible: prismic.NumberField;
}
/**
 * Default variation for Realizace Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type RealizaceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RealizaceSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Realizace*
 *
 */
type RealizaceSliceVariation = RealizaceSliceDefault;
/**
 * Realizace Shared Slice
 *
 * - **API ID**: `realizace`
 * - **Description**: `Realizace`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type RealizaceSlice = prismic.SharedSlice<
  "realizace",
  RealizaceSliceVariation
>;
/**
 * Primary content in Reference → Primary
 *
 */
interface ReferenceSliceDefaultPrimary {
  /**
   * Text field in *Reference → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: reference.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
  /**
   * Button text field in *Reference → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: reference.primary.button_text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  button_text: prismic.RichTextField;
  /**
   * Button Link field in *Reference → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: reference.primary.button_link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  button_link: prismic.LinkField;
  /**
   * Visible field in *Reference → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: reference.primary.visible
   * - **Documentation**: https://prismic.io/docs/core-concepts/number
   *
   */
  visible: prismic.NumberField;
}
/**
 * Default variation for Reference Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ReferenceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ReferenceSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Reference*
 *
 */
type ReferenceSliceVariation = ReferenceSliceDefault;
/**
 * Reference Shared Slice
 *
 * - **API ID**: `reference`
 * - **Description**: `Reference`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ReferenceSlice = prismic.SharedSlice<
  "reference",
  ReferenceSliceVariation
>;
/**
 * Primary content in TextWithFeatures → Primary
 *
 */
interface TextWithFeaturesSliceDefaultPrimary {
  /**
   * Icon field in *TextWithFeatures → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_features.primary.icon
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  icon: prismic.ImageField<never>;
  /**
   * Text field in *TextWithFeatures → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Primary text with rich formatting
   * - **API ID Path**: text_with_features.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
}
/**
 * Item in TextWithFeatures → Items
 *
 */
export interface TextWithFeaturesSliceDefaultItem {
  /**
   * Feature Description field in *TextWithFeatures → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Description of a feature
   * - **API ID Path**: text_with_features.items[].featureDescription
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  featureDescription: prismic.RichTextField;
}
/**
 * Default variation for TextWithFeatures Slice
 *
 * - **API ID**: `default`
 * - **Description**: `TextWithFeatures`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextWithFeaturesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextWithFeaturesSliceDefaultPrimary>,
  Simplify<TextWithFeaturesSliceDefaultItem>
>;
/**
 * Slice variation for *TextWithFeatures*
 *
 */
type TextWithFeaturesSliceVariation = TextWithFeaturesSliceDefault;
/**
 * TextWithFeatures Shared Slice
 *
 * - **API ID**: `text_with_features`
 * - **Description**: `TextWithFeatures`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextWithFeaturesSlice = prismic.SharedSlice<
  "text_with_features",
  TextWithFeaturesSliceVariation
>;
/**
 * Primary content in TextWithImage → Primary
 *
 */
interface TextWithImageSliceDefaultPrimary {
  /**
   * Text field in *TextWithImage → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Text displayed next to image
   * - **API ID Path**: text_with_image.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
  /**
   * Image field in *TextWithImage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
}
/**
 * Default variation for TextWithImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: `TextWithImage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextWithImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextWithImageSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *TextWithImage*
 *
 */
type TextWithImageSliceVariation = TextWithImageSliceDefault;
/**
 * TextWithImage Shared Slice
 *
 * - **API ID**: `text_with_image`
 * - **Description**: `TextWithImage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextWithImageSlice = prismic.SharedSlice<
  "text_with_image",
  TextWithImageSliceVariation
>;
/**
 * Primary content in TextWithImages → Primary
 *
 */
interface TextWithImagesSliceDefaultPrimary {
  /**
   * Text field in *TextWithImages → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Text above images
   * - **API ID Path**: text_with_images.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
}
/**
 * Item in TextWithImages → Items
 *
 */
export interface TextWithImagesSliceDefaultItem {
  /**
   * Image field in *TextWithImages → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_images.items[].image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
  /**
   * Text field in *TextWithImages → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_images.items[].text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
  /**
   * Link field in *TextWithImages → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_images.items[].link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  link: prismic.LinkField;
  /**
   * Button text field in *TextWithImages → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_images.items[].button_text
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  button_text: prismic.KeyTextField;
}
/**
 * Default variation for TextWithImages Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextWithImagesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextWithImagesSliceDefaultPrimary>,
  Simplify<TextWithImagesSliceDefaultItem>
>;
/**
 * Slice variation for *TextWithImages*
 *
 */
type TextWithImagesSliceVariation = TextWithImagesSliceDefault;
/**
 * TextWithImages Shared Slice
 *
 * - **API ID**: `text_with_images`
 * - **Description**: `TextWithImages`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextWithImagesSlice = prismic.SharedSlice<
  "text_with_images",
  TextWithImagesSliceVariation
>;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      NavigationDocumentData,
      NavigationDocumentDataLinksItem,
      NavigationDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      PageDocument,
      RealizaceDocumentData,
      RealizaceDocumentDataSlicesSlice,
      RealizaceDocument,
      ReferenceDocumentData,
      ReferenceDocumentDataSlicesSlice,
      ReferenceDocument,
      SettingsDocumentData,
      SettingsDocument,
      AllDocumentTypes,
      HeroSliceDefaultPrimary,
      HeroSliceDefault,
      HeroSliceWithButtonPrimary,
      HeroSliceWithButton,
      HeroSliceVariation,
      HeroSlice,
      ImageSliceWhitePrimary,
      ImageSliceWhite,
      ImageSliceLightSlatePrimary,
      ImageSliceLightSlate,
      ImageSliceVariation,
      ImageSlice,
      ProcedureSliceDefaultPrimary,
      ProcedureSliceDefaultItem,
      ProcedureSliceDefault,
      ProcedureSliceProcedireWithImagePrimary,
      ProcedureSliceProcedireWithImageItem,
      ProcedureSliceProcedireWithImage,
      ProcedureSliceVariation,
      ProcedureSlice,
      RealizaceSliceDefaultPrimary,
      RealizaceSliceDefault,
      RealizaceSliceVariation,
      RealizaceSlice,
      ReferenceSliceDefaultPrimary,
      ReferenceSliceDefault,
      ReferenceSliceVariation,
      ReferenceSlice,
      TextWithFeaturesSliceDefaultPrimary,
      TextWithFeaturesSliceDefaultItem,
      TextWithFeaturesSliceDefault,
      TextWithFeaturesSliceVariation,
      TextWithFeaturesSlice,
      TextWithImageSliceDefaultPrimary,
      TextWithImageSliceDefault,
      TextWithImageSliceVariation,
      TextWithImageSlice,
      TextWithImagesSliceDefaultPrimary,
      TextWithImagesSliceDefaultItem,
      TextWithImagesSliceDefault,
      TextWithImagesSliceVariation,
      TextWithImagesSlice,
    };
  }
}
