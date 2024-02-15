export interface IProjectPage {
  projectPage: {
    id: string;
    slug: string;
    heroImage: {
      url: string;
    };
    projectHeading: string;
    disciplines: {
      html: string;
    };
    clientDiscriptionHeading: string;
    clientDescription: string;
    taskDescription: string;
    blockQuote: string;
    citation: string;
    processDescription: string;
    captionText: string;
    heroImageAlt: string;
    overviewImages: {
      id: string;
      altText: string;
      image: {
        url: string;
      };
    }[];
    processImages: {
      id: string;
      altText: string;
      image: {
        url: string;
      };
    }[];
  };
}

export interface IProjectSlug {
  projectGrid: {
    projectList: {
      projects: {
        slug: string;
      }[];
    }[];
  };
}

export interface IProjectGrid {
  projectGrid: {
    title: string;
    subtitle: string;
    projectList: {
      projects: {
        id: string;
        slug: string;
        thumbnail: {
          url: string;
          width: number;
          height: number;
        };
        title: string;
        disciplines: string;
        isFeatured: boolean;
        isPortrait: boolean;
        imageAlt: string;
      }[];
    }[];
  };
  projectCount: number;
  featuredProjects: {};
}
