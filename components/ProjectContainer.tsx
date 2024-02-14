import { IProjectGrid } from "@/interfaces/project_interfaces";
import clsx from "clsx";
import ProjectBlock from "./ProjectBlock";

export default function ProjectContainer(response: IProjectGrid) {
  return (
    <div className="projects-container mx-4 desktop:mx-0">
      <div className="w-full desktop:max-w-80.875 flex flex-col mx-auto gap-11">
        {response.projectGrid.projectList.map((projectBlock) => (
          <div
            className={clsx(
              "flex flex-col desktop:flex-row desktop:ml-5",
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
