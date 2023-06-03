import { RichTextContent } from "@graphcms/rich-text-types";

export interface IRichText {
  thoughtPage: {
    post: {
      raw: {
        children: {
          type: string;
          title: string;
          altText: string;
          src: string;
          handle: string;
          text: string;
          children: {
            text: string;
          }[];
        }[];
      };
    };
  };
}

export interface IThoughtPage {
  thoughtPage: {
    id: string;
    slug: string;
    postHeading: string;
    postDate: string;
    captionText001: string;
    captionText002: string;
  };
  children: {
    type: string;
    title: string;
    altText: string;
    src: string;
    handle: string;
    children: {
      text: string;
    }[];
  }[];
}

export interface IThought {
  thought: {
    thoughtList: {
      id: string;
      slug: string;
      postHeading: string;
      postThumbnail: {
        url: string;
      };
      postDate: string;
      imageAlt: string;
    }[];
  };
  thoughtCount: number;
}

export interface IThoughtSlug {
  thought: {
    thoughtList: {
      slug: string;
    }[];
  };
}
