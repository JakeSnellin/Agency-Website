import { IProjectGrid } from "@/interfaces/project_interfaces";
import clsx from "clsx";
import ProjectBlock from "./ProjectBlock";

export default function ProjectContainer(response: IProjectGrid) {
  return (
    <div className="project-container mx-4 desktop:-ml-[25.5px]">
      <div className="w-full desktop:max-w-75.188 flex flex-col gap-11">
        {response.projectGrid.projectList.map((projectBlock) => (
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
