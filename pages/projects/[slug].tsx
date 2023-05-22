import type { GetStaticPaths, GetStaticProps } from "next";
import { gql, GraphQLClient } from 'graphql-request';

interface IProject {
  projectPages: {
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
}[];
}

const client = new GraphQLClient(process.env.HYGRAPH_URL as string);

export const getStaticProps: GetStaticProps<{data: IProject}> = async (context) => {

const slug = context.params?.slug as string;

//const slug = 'ecstatic-dance-brighton';

const query = gql`
      query GetProductPageBySlug($slug: String!) {
          projectPages(where: {slug: $slug}) {
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

const data: IProject = await client.request(query, {slug});

if(!data.projectPages){
  return {
    notFound: true
  }
}

console.log("data back is " + data);

return {props: { data }}
};

export default function Project({data}: {data: IProject}) {

  const headings = data.projectPages.map((project) =>
  <div key={project.id}>
    <h3>{project.projectHeading}</h3>
    <p>{project.clientDiscriptionHeading}</p>
    <p>{project.clientDescription}</p>
  </div>
  );

  return (
    <>
      <div><h1>project</h1></div>
      {console.log('THE DATA IS ' + data)}
      <div>{headings}</div>
    </>
  )
}

interface IProjectList{
  homePage: {
    projectList: {
      slug: string;
    }[]
  }
}

export const getStaticPaths: GetStaticPaths = async () => {

  const query = gql`
    query GetSlugByProjectList {
      homePage(where: {id: "clhyv0zrjln9j0cmikv5txplr"}) {
      projectList {
        slug
      }
    }
  }`;


  const response: IProjectList = await client.request(query);

  const { data } = {data: response};

  const paths = data.homePage.projectList.map((project) =>({
    params: { slug: project.slug },
  }));
  
  /*paths.forEach((path)=>{
    console.log(path);
  })*/

  return {
    paths: paths,
    fallback: true
  }
}

/*const client = new GraphQLClient(process.env.HYGRAPH_URL as string);

interface IProject {
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
}

export default function Project({project}: {project: IProject}){
    return (
        <>
        <h1>{project.projectHeading}</h1>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({params}) => {

    if(params){
        const slug = params.slug as string;

        const query = gql`
        query GetProductPageBySlug($slug: String!) {
            projectPages(where: {slug: $slug}) {
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

          const data: { project: IProject | null } = await client.request(query, {slug});

          if(!data.project){
            return{
              notFound: true,
            }
          }

          console.log(data);
    
        return{
            props: {project: data.project}
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {

    const query = gql`
    query GetSlugByProjectList {
      homePage(where: {id: "clhyv0zrjln9j0cmikv5txplr"}) {
      id
      projectList {
        slug
      }
    }
  }`;

    const data: any = await client.request(query);

    console.log(data)

    return {
        paths: data.homePage.projectList.map((project: any) => ({
            params: {slug: project.slug}
        })),
        fallback: "blocking"
    }
}*/