import type { GetStaticPaths, GetStaticProps } from "next";
import { gql, GraphQLClient } from 'graphql-request';
import { IProjectSlug } from "..//..//interfaces/project_interfaces";
import { IThoughtPage } from "../../interfaces/thought_interfaces";

const client = new GraphQLClient(process.env.HYGRAPH_URL as string);

export const getStaticProps: GetStaticProps = async (context) => {

    const slug = context.params?.slug as string;

    const query = gql`
    query ThoughtPage($slug: String!) {
        thoughtPage(where: {slug: $slug}) {
          id
          thoughtHeading
          postDate
          postImage {
            url
          }
          postText
          slug
        }
      }`;

    const response: IThoughtPage = await client.request(query, {slug});
      
    return {props:  response }
};

export const getStaticPaths: GetStaticPaths = async () =>{
    
    const query = gql`
    query Project {
      project(where: {id: "clhyv0zrjln9j0cmikv5txplr"}) {
      projectList {
        slug
      }
    }
  }`;

      const response : IProjectSlug = await client.request(query);

      console.log(response);

      const paths = response.project.projectList.map((project) =>({
        params: {slug: project.slug}
      }))

      return {
        paths: paths,
        fallback: 'blocking'
      }
}

export default function Thought(data: IThoughtPage) {
    return (
      <div><h1>{data.thoughtPage.thoughtHeading}</h1></div>
    )
  }