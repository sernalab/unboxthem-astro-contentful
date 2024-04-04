import contentful from "contentful";
import type { EntryFieldTypes, Entry } from 'contentful';


interface imageLink {
  title: string;
  description: string;
  file: {
    url: string;
  };
}
export interface AuthorFields {
  contentTypeId: "author"
  fields: {
    name: string,
    slug: string,
    bio: string,
    potrait: imageLink,
    youtube: string,
    twitch: string,
    twitter: string,
    facebook: string,
    instagram: string,
    only_fans: string,
  }
}
export interface PostFields {
  contentTypeId: "post",
  fields: {
    title: string,
    slug: string,
    body: string
    heroImage: imageLink,
    description: string,
    publishDate: string,
    tags: string[],
    author: AuthorFields
  }
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});