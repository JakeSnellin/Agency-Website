export interface IThoughtPage {
    thoughtPage: {
        id: string;
        slug: string;
        postHeading: string;
        postDate: string;
        postImage: {
            url: string;
        }
        postText: string;
    }
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
    }
}

export interface IThoughtSlug{
    thought: {
      thoughtList: {
        slug: string;
      }[];
    }
  }