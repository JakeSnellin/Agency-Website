import React from "react";
import { GetStaticProps } from "next";
import { gql, GraphQLClient } from "graphql-request";
import { IProjectItem } from "..//../interfaces/project_interfaces";
import Image from "next/image";

const client = new GraphQLClient(process.env.HYGRAPH_URL as string);

export const getStaticProps: GetStaticProps = async () => {
  const query = gql`
    query Project {
      project(where: { id: "clhyv0zrjln9j0cmikv5txplr" }) {
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
    }
  `;

  const response: IProjectItem = await client.request(query);

  console.log(response);

  let projectCount: number = 0;

  response.project.projectList.forEach(() => {
    projectCount++;
  });

  console.log(projectCount);

  return {
    props: { ...response, projectCount },
  };
};

export default function Projects(response: IProjectItem) {
  const projects = response.project.projectList.map((project) => (
    <div key={project.id}>
      <div>
        <Image
          src={project.thumbnail.url}
          alt={project.imageAlt}
          width={1200}
          height={675}
        />
      </div>
      <div className="pt-18 pl-4 pr-4 pb-65 bg-gradient-to-b from-[#212121] to-[#121212]">
        <span className="mr-1 text-grey m5 leading-27 pb-2 font-main">
          Project
        </span>
        <h5 className="text-cream m5 inline-block leading-27 pb-2 font-main">
          {project.title}
        </h5>
        <p className="text-grey text-m-caption font-m-caption leading-21 font-main">
          {project.disciplines}
        </p>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="flex items-center justify-between mt-77 mb-26">
        <div>
          <h3 className="text-m3 text-blue font-main leading-27.6 ml-17 font-250">
            All projects
          </h3>
        </div>
        <div>
          <h5 className="text-m-body text-orange font-main leading-24 mr-4 font-250">
            {response.projectCount.toString() + " Projects"}
          </h5>
        </div>
      </div>
      <div>{projects}</div>
    </div>
  );
}
