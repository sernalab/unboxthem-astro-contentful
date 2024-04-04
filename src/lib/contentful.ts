import contentful from "contentful";
import type { EntryFieldTypes } from 'contentful';


interface ContentfulAssetFields {
  title: string;
  description: string;
  file: {
    url: string;
    details: {
      size: number;
      image: {
        width: number;
        height: number;
      };
    };
    fileName: string;
    contentType: string;
  };
}

type ContentfulAsset = Entry<ContentfulAssetFields>;

export interface ImageLink {
  sys: {
    id: string;
  };
  fields: ContentfulAssetFields; // Aquí se debería utilizar ContentfulAssetFields directamente
}

export interface AuthorFields {
  contentTypeId: "author"
  fields: {
    name: EntryFieldTypes.Text,
    slug: EntryFieldTypes.Text,
    bio: EntryFieldTypes.Text,
    potrait: ContentfulAsset;
    youtube: EntryFieldTypes.Text,
    twitch: EntryFieldTypes.Text,
    twitter: EntryFieldTypes.Text,
    facebook: EntryFieldTypes.Text,
    instagram: EntryFieldTypes.Text,
    only_fans: EntryFieldTypes.Text,
  }
}
export interface PostFields {
  contentTypeId: "post",
  fields: {
    title: EntryFieldTypes.Text,
    slug: EntryFieldTypes.Text,
    body: EntryFieldTypes.Text
    heroImage: ContentfulAsset,
    description: EntryFieldTypes.Text,
    publishDate: EntryFieldTypes.Date,
    tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol>,
    author: EntryFieldTypes.EntryLink<AuthorFields>
  }
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});