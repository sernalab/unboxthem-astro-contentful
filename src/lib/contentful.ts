import contentful from "contentful";

export interface Author {
  contentTypeId: "author"
  fields:{
    name: string;
    slug: string;
    bio?: string;
    potrait?: Asset;
    youtube?: string;
    twitch?: string;
    twitter?: string;
    onlyFans?: string;
    facebook?: string;
    instagram?: string;
  }  
}
export interface Asset {
  sys: { id: string };
  fields: { 
    title?: string;
    description?: string;
    file: { 
      url: string;
      details?: any;
      fileName?: string;
      contentType?: string;
    }; 
  };
}
export interface BlogPost {
  contentTypeId: "post",
  fields: {
    title?: string;
    slug?: string;
    body?: string;
    heroImage?: Asset;
    description?: string;
    publishDate?: string;
    tags?: string;
    author: Author;
  }
}
export interface EntryLink {
  type: string;
  linkType: string;
  id: string;
}


// export interface Asset {
//   sys: { id: string };
//   fields: { 
//     file: { 
//       url: string;
//       details?: any;
//       fileName?: string;
//       contentType?: string;
//     }; 
//   };
// }

// export interface AuthorFields {
//   contentTypeId: "author"
//   fields: {
//     name: EntryFieldTypes.Text,
//     slug: EntryFieldTypes.Text,
//     bio: EntryFieldTypes.Text,
//     potrait: Asset,
//     youtube: EntryFieldTypes.Text,
//     twitch: EntryFieldTypes.Text,
//     twitter: EntryFieldTypes.Text,
//     facebook: EntryFieldTypes.Text,
//     instagram: EntryFieldTypes.Text,
//     only_fans: EntryFieldTypes.Text,
//   }
// }
// export interface PostFields {
//   contentTypeId: "post",
//   fields: {
//     title: EntryFieldTypes.Text,
//     slug: EntryFieldTypes.Text,
//     body: EntryFieldTypes.Text
//     heroImage: Asset,
//     description: EntryFieldTypes.Text,
//     publishDate: EntryFieldTypes.Date,
//     tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol>,
//     author: EntryFieldTypes.EntryLink<AuthorFields>
//   }
// }

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});