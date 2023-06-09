import type { GetStaticPaths, GetStaticProps } from "next";
import { gql, GraphQLClient } from "graphql-request";
import { IProjectPage } from "../../interfaces/project_interfaces";
import { IProjectSlug } from "../../interfaces/project_interfaces";
import Image from "next/image";
import Modal from "../../components/Modal";
import { useRouter } from "next/router";
import Project from "../../components/Project";

const client = new GraphQLClient(process.env.HYGRAPH_URL as string);

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string;

  if (slug === undefined) {
    console.log("Slug is undefined. Check the slug passed into getStaticProps");
  }

  const query = gql`
    query ProjectPage($slug: String!) {
      projectPage(where: { slug: $slug }) {
        id
        slug
        heroImage {
          url
        }
        projectHeading
        disciplines {
          html
        }
        clientDiscriptionHeading
        clientDescription
        taskDescription
        blockQuote
        citation
        processDescription
        captionText
        heroImageAlt
        overviewImages {
          ... on ProjectImageComponent {
            id
            altText
            image {
              url
            }
          }
        }
        processImages {
          ... on ProjectImageComponent {
            id
            altText
            image {
              url
            }
          }
        }
      }
    }
  `;

  const response: { projectPage: IProjectPage | null } = await client.request(
    query,
    { slug }
  );

  if (!response.projectPage) {
    return { notFound: true };
  }

  return { props: response };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const query = gql`
    query Project {
      project(where: { id: "clhyv0zrjln9j0cmikv5txplr" }) {
        projectList {
          slug
        }
      }
    }
  `;

  const response: IProjectSlug = await client.request(query);

  const paths = response.project.projectList.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export default function ProjectPage(data: IProjectPage) {
  const router = useRouter();

  return (
    <div className="font-main">
      <div className="w-full h-1 bg-orange"></div>
      <Modal onClose={() => router.push("/projects")}>
        <Project data={data} />
      </Modal>
    </div>
  );
}
