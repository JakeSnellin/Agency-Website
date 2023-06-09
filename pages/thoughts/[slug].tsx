import type { GetStaticPaths, GetStaticProps } from "next";
import { gql, GraphQLClient } from "graphql-request";
import { IThoughtSlug } from "../../interfaces/thought_interfaces";
import { IThoughtPage } from "../../interfaces/thought_interfaces";
import { IRichText } from "../../interfaces/thought_interfaces";
import Post from "../../components/Post";
import { useRouter } from "next/router";
import Modal from "../../components/Modal";

const client = new GraphQLClient(process.env.HYGRAPH_URL as string);

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string;

  const queryThoughtPage = gql`
    query ThoughtPage($slug: String!) {
      thoughtPage(where: { slug: $slug }) {
        id
        postHeading
        postDate
        slug
        captionText001
        captionText002
      }
    }
  `;

  const queryRichText = gql`
    query RichText($slug: String!) {
      thoughtPage(where: { slug: $slug }) {
        post {
          raw
        }
      }
    }
  `;

  const data: { thoughtPage: IThoughtPage | null } = await client.request(
    queryThoughtPage,
    {
      slug,
    }
  );

  if (!data.thoughtPage) {
    return { notFound: true };
  }

  const richTextData: IRichText = await client.request(queryRichText, { slug });

  const {
    thoughtPage: {
      post: {
        raw: { children },
      },
    },
  } = richTextData;

  return { props: { ...data, children } };
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

  const paths = response.thought.thoughtList.map((thought) => ({
    params: { slug: thought.slug },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export default function Thought(data: IThoughtPage) {
  const router = useRouter();

  return (
    <>
      <Modal onClose={() => router.push("/thoughts")}>
        <Post data={data} />
      </Modal>
    </>
  );
}
