import React from 'react'
import { GetStaticPaths, GetStaticProps } from "next";
import { gql, GraphQLClient } from 'graphql-request';

/*interface IProject {
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

export const getStaticProps: GetStaticProps = async () => {

  const slug = 'ecstatic-dance-brighton';

  const client = new GraphQLClient(process.env.HYGRAPH_URL as string);

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

  console.log(data.projectPages);

  return {props: {data}}
};




export default function projects({data}: {data: IProject}) {
  return (
    <>
      <div><h1>projects</h1></div>
      {console.log(data)}
      <h1>{data.projectPages[0].projectHeading}</h1>
    </>
  )
}*/

export default function Projects() {
  return (
    <div>Projects</div>
  )
}



