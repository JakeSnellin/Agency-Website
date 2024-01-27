import React from "react";
import { IProjectPage } from "../interfaces/project_interfaces";
import ProjectImageBannerMobile from "./Projectimagebannermobile";
import ProjectImageBannerDesktop from "./Projectimagebannerdesktop";
import ProjectNavMobile from "./Projectnavmobile";
import ProjectNavDesktop from "./Projectnavdesktop";
import ProjectHeroTitleBlock from "./Projectherotitleblock";
import Process from "./Process";
import ProjectImages from "./Projectimages";

export interface IProjectProps {
  data: IProjectPage;
}

export default function Project({ data }: IProjectProps) {
  return (
    <>
      <div className="block md:hidden">
        <ProjectImageBannerMobile data={data} />
        <ProjectNavMobile />
      </div>

      <div className="hidden md:block">
        <ProjectImageBannerDesktop data={data} />
      </div>

      <div className="md:flex md:mt-[104px] md:gap-[72px] md:justify-between">
        <div className="hidden md:block">
          <ProjectNavDesktop />
        </div>
        <div className="mr-4 ml-4 md:mr-[64px] md:ml-0">
          <ProjectHeroTitleBlock data={data} />
        </div>
      </div>

      <div className="mr-4 ml-4 mb-[56px] md:mr-[64px] md:ml-[19.93055555555556%]">
        <ProjectImages data={data} />
      </div>

      <div className="process bg-cream text-grey-3 md:mt-[72px] md:overflow-auto">
        <div className="pl-4 pr-4 md:pr-[12.01388888888889%] md:pl-[19.93055555555556%]">
          <Process data={data} />
        </div>
      </div>
    </>
  );
}
