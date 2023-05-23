import type { GetStaticPaths, GetStaticProps } from "next";
import { gql, GraphQLClient } from 'graphql-request';

export interface IThoughtPage {
    thoughtPage: {
        id: string;
        thoughtHeading: string;
        postDate: string;
        postImage: {
            url: string;
        }
        postText: string;
        slug: string;
    }
}

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

interface IthoughtSlug {
    thought: {
        thoughtList: {
            slug: string
        }[];
    }
}

export const getStaticPaths: GetStaticPaths = async () =>{
    
    const query = gql`
    query Thought {
        thought(where: {id: "cli06kw1jqcfr0bmpcldt1zsg"}) {
          thoughtList{
            slug
          }
        }
      }`;

      const response : IthoughtSlug = await client.request(query);

      console.log(response);

      const paths = response.thought.thoughtList.map((thought) =>({
        params: {slug: thought.slug}
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