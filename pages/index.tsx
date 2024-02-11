import { GetStaticProps } from "next";
import { gql, GraphQLClient } from "graphql-request";
import Image from "next/image";
import { IProjectItem } from "../interfaces/project_interfaces";
import { IHero } from "../interfaces/hero_interface";
import Hero from "../components/Hero";
import Link from "next/link";
import { IHomePage } from "../interfaces/project_interfaces";
import ProjectBlock from "@/components/ProjectBlock";
import clsx from "clsx";

const client = new GraphQLClient(process.env.HYGRAPH_URL as string);

export const getStaticProps: GetStaticProps = async () => {
  const homePage = gql`
    query HomePage {
      homePage(where: { id: "clsemnt0znyem0amoivlwjr0v" }) {
        title
        subtitle
        projectList {
          ... on ProjectBlock {
            projects {
              id
              slug
              thumbnail {
                url
                width
                height
              }
              title
              disciplines
              isFeatured
              isPortrait
              imageAlt
            }
          }
        }
      }
    }
  `;

  const response: IProjectItem = await client.request(homePage);

  return {
    props: { ...response },
  };
};

const checkFeatured = (project: any) => {
  return project.isFeatured === true;
};

export default function Home(response: IHomePage) {
  return (
    <div className="projects-container mx-4 desktop:mx-0">
      <div className="w-full desktop:max-w-80.875 flex flex-col mx-auto">
        {response.homePage.projectList.map((projectBlock) => (
          <div
            className={clsx(
              "flex flex-col desktop:flex-row",
              projectBlock.projects.length < 2
                ? "desktop:justify-center"
                : "desktop:justify-between"
            )}
          >
            <ProjectBlock projectBlock={projectBlock} />
          </div>
        ))}
      </div>
    </div>
  );
}

/*<div className="pt-18 pl-4 pr-4 pb-65 bg-gradient-to-b">
            <span className="mr-1 text-grey m5 leading-27 pb-2 font-main">
              Project
            </span>
            <h5 className="text-cream m5 inline-block leading-27 pb-2 font-main">
              {project.title}
            </h5>
            <p className="text-grey text-m-caption font-m-caption leading-21 font-main">
              {project.disciplines}
            </p>
          </div>*/
