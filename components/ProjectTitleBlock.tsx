import React from "react";

export default function ProjectTitleBlock({ project }: any) {
  return (
    <div className="pt-18 pr-4 pb-65 bg-gradient-to-b">
      <span className="mr-1 text-grey text-m4 leading-27 pb-2 font-main">
        Project
      </span>
      <h5 className="text-cream text-m4 inline-block leading-27 pb-2 font-main">
        {project.title}
      </h5>
      <p className="text-grey text-m-caption font-m-caption leading-21 font-main">
        {project.disciplines}
      </p>
    </div>
  );
}
