import type { GetStaticPaths, GetStaticProps } from "next";
import { gql, GraphQLClient } from 'graphql-request';

interface IProjectPage {
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

const client = new GraphQLClient(process.env.HYGRAPH_URL as string);

export const getStaticProps: GetStaticProps = async (context) => {

const slug = context.params?.slug as string;

if(slug === undefined){
  console.log('Slug is undefined. Check the slug passed into getStaticProps');
}

const query = gql`
      query ProjectPage($slug: String!) {
          projectPage(where: {slug: $slug}) {
            id
            slug
            heroImage {
              url
            }
            projectHeading
            disciplines
            clientDiscriptionHeading
            clientDescription
            taskDescription
            blockQuote
            citation
            processDescription
            captionText
          }
        }`;

const response: IProjectPage = await client.request(query, {slug});

return {props:  response}
};

export default function Project(data: IProjectPage) {

  return (
    <>
      <div><h1>{data.projectPage.projectHeading}</h1></div>
    </>
  )
}

export interface IProjectSlug{
  project: {
    projectList: {
      slug: string;
    }[]
  }
}

export const getStaticPaths: GetStaticPaths = async () => {

  const query = gql`
    query Project {
      project(where: {id: "clhyv0zrjln9j0cmikv5txplr"}) {
      projectList {
        slug
      }
    }
  }`;


  const response: IProjectSlug = await client.request(query);

  const paths = response.project.projectList.map((project) =>({
    params: { slug: project.slug },
  }));

  return {
    paths: paths,
    fallback: "blocking"
  }
}