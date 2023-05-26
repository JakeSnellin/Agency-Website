import React from 'react'
import { GetStaticPaths, GetStaticProps } from "next";
import { gql, GraphQLClient } from 'graphql-request';
import { IThought } from '../../interfaces/thought_interfaces';

const client = new GraphQLClient(process.env.HYGRAPH_URL as string);

export const getStaticProps: GetStaticProps = async () => {

  const query = gql`
  query Thought {
    thought(where: {id: "cli2y5dww4x4c0cmm99b20wjc"}) {
      thoughtList {
        id
        slug
        postHeading
        postThumbnail{
          url
        }
        postDate
        imageAlt
      }
    }
  }`;

const response: IThought = await client.request(query);

console.log(response);

return{
  props: response
}

}

export default function Thoughts(response: IThought) {
  return (
    <>
    <div>Thoughts</div>
    <div>{response.thought.thoughtList[0].postHeading}</div>
   </>
  )
}
