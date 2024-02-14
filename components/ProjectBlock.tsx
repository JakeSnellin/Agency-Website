import React from "react";
import clsx from "clsx";
import Image from "next/image";
import ProjectTitleBlock from "./ProjectTitleBlock";
import Link from "next/link";

export default function ProjectBlock({ projectBlock }: any) {
  return (
    <>
      {projectBlock.projects.map((project: any) => (
        <div
          className={clsx(
            "w-full",
            projectBlock.projects.length < 2
              ? "desktop:max-w-70.9"
              : project.isPortrait
              ? "desktop:max-w-37.9 desktop:mt-157"
              : "desktop:max-w-50.6"
          )}
        >
          <Link href={`projects/${project.slug}`}>
            <div
              className={clsx(
                project.isPortrait ? "w-52.9 desktop:w-81.4" : "w-full"
              )}
            >
              <div
                className={clsx(
                  "relative h-0",
                  project.isPortrait ? "pt-133.7" : "pt-57.7"
                )}
              >
                <Image
                  src={project.thumbnail?.url}
                  alt={project.imageAlt}
                  fill={true}
                  className={clsx(
                    project.isPortrait
                      ? "object-contain object-left"
                      : "object-cover"
                  )}
                  //sizes="(max-width: 1440px) 100vw, 70vw"
                />
              </div>
            </div>
            <ProjectTitleBlock project={project} />
          </Link>
        </div>
      ))}
    </>
  );
}
