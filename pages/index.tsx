import Hero from "@/components/Hero";
import ProjectContainer from "@/components/ProjectContainer";
import React from "react";
import { GetStaticProps } from "next";
import { gql, GraphQLClient } from "graphql-request";
import { IProjectGrid } from "../interfaces/project_interfaces";

const client = new GraphQLClient(process.env.HYGRAPH_URL as string);

export const getStaticProps: GetStaticProps = async () => {
  const homePage = gql`
    query ProjectGrid {
      projectGrid(where: { id: "clsemnt0znyem0amoivlwjr0v" }) {
        title
        subtitle
        projectList {
          ... on ProjectBlock {
            isFeatured
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
              isPortrait
              imageAlt
            }
          }
        }
      }
    }
  `;

  const response: IProjectGrid = await client.request(homePage);

  const filteredResponse = {
    projectGrid: {
      title: response.projectGrid.title,
      subtitle: response.projectGrid.subtitle,
      projectList: response.projectGrid.projectList.filter(checkFeatured),
    },
  };

  return {
    props: { ...filteredResponse },
  };
};

const checkFeatured = (project: any) => {
  return project.isFeatured === true;
};

export default function Home(response: IProjectGrid) {
  return (
    <>
      <div className="desktop:max-w-75.188 desktop:mx-auto">
        <Hero
          title={response.projectGrid.title}
          subtitle={response.projectGrid.subtitle}
        />
        <ProjectContainer {...response} />
      </div>
    </>
  );
}
