export interface IProjectPage {
    projectPage: {
    id: string;
    slug: string;
    image: {
      url: string
    };
    projectHeading: string;
    disciplines: string;
    clientDiscriptionHeading: string;
    clientDescription: string;
    taskDescription: string;
    blockQuote: string;
    citation: string;
    processDescription: string;
    captionText: string;
  };
  }

  export interface IProjectSlug{
    project: {
      projectList: {
        slug: string;
      }[]
    }
  }

  export interface IProjectItem {
    project: {
      projectList: {
        id: string;
        slug: string;
        thumbnail: {
          url: string;
        }
        title: string;
        disciplines: string;
        isFeatured: boolean;
        imageAlt: string;
      }[];
    }
  }

  