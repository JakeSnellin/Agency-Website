import React from "react";
import clsx from "clsx";
import Image from "next/image";

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
          <div className="pt-18 pr-4 pb-65 bg-gradient-to-b">
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
      ))}
    </>
  );
}
