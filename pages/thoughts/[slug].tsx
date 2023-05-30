import type { GetStaticPaths, GetStaticProps } from "next";
import { gql, GraphQLClient } from "graphql-request";
import { IThoughtSlug } from "../../interfaces/thought_interfaces";
import { IThoughtPage } from "../../interfaces/thought_interfaces";

const client = new GraphQLClient(process.env.HYGRAPH_URL as string);

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string;

  const query = gql`
    query ThoughtPage($slug: String!) {
      thoughtPage(where: { slug: $slug }) {
        id
        postHeading
        postDate
        postImage {
          url
        }
        postText
        slug
      }
    }
  `;

  const response: IThoughtPage = await client.request(query, { slug });

  return { props: response };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const query = gql`
    query Thought {
      thought(where: { id: "cli2y5dww4x4c0cmm99b20wjc" }) {
        thoughtList {
          slug
        }
      }
    }
  `;

  const response: IThoughtSlug = await client.request(query);

  console.log(response);

  const paths = response.thought.thoughtList.map((thought) => ({
    params: { slug: thought.slug },
  }));

  return {
    paths: paths,
    fallback: "blocking",
  };
};

export default function Thought(data: IThoughtPage) {
  return (
    <div>
      <h1>{data.thoughtPage.postHeading}</h1>
    </div>
  );
}
