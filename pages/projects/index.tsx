import React from "react";
import { GetStaticProps } from "next";
import { gql, GraphQLClient } from "graphql-request";
import { IProjectItem } from "..//../interfaces/project_interfaces";
import Image from "next/image";
import Link from "next/link";

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

  let projectCount: number = 0;

  response.project.projectList.forEach(() => {
    projectCount++;
  });

  return {
    props: { ...response, projectCount },
  };
};

export default function Projects(response: IProjectItem) {
  const projects = response.project.projectList.map((project) => (
    <Link
      key={project.id}
      className="block md:w-[50%]"
      href={"/projects/[slug]"}
      as={`/projects/${project.slug}`}
    >
      <div>
        <div className="w-full">
          <div className="h-0 pt-[56.25%] relative">
            <Image
              src={project.thumbnail.url}
              alt={project.imageAlt}
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>
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
    </Link>
  ));

  return (
    <div>
      <div className="flex mr-4 ml-17 items-center justify-between mt-77 mb-26 md:ml-[12.22222222222222%] md:mr-[4.375%] md:mb-0 md:mt-0 md:h-[144px]">
        <div className="md:self-start md:mt-[22px]">
          <h3 className="text-m3 text-blue font-main leading-27.6 font-250">
            All projects
          </h3>
        </div>
        <div className="md:self-end md:mb-[42px]">
          <h5 className="counterText">
            {response.projectCount.toString() + " Projects"}
          </h5>
        </div>
      </div>
      <div className="md:flex md:flex-wrap">{projects}</div>
    </div>
  );
}
