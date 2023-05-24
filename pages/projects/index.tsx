import React from 'react'
import { GetStaticPaths, GetStaticProps } from "next";
import { gql, GraphQLClient } from 'graphql-request';
import { IProjectItem } from '..//../interfaces/project_interfaces'

const client = new GraphQLClient(process.env.HYGRAPH_URL as string);

export const getStaticProps: GetStaticProps = async () => {

  const query = gql`
  query Project {
    project(where: {id: "clhyv0zrjln9j0cmikv5txplr"}) {
    projectList {
      id
      slug
      thumbnail {
        url
      }
      title
      disciplines
      isFeatured
      imageAlt
    }
  }
}`;

const response: IProjectItem = await client.request(query);

console.log(response);

return{
  props: response
}

}

export default function Projects(response: IProjectItem) {
  return (
    <>
    <div>Projects</div>
    <div>{response.project.projectList[0].title}</div>
   </>
  )
}



