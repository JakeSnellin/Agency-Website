import React from "react";
import { IProjectPage } from "../interfaces/project_interfaces";
import ProjectImageBannerMobile from "./Projectimagebannermobile";
import ProjectImageBannerDesktop from "./Projectimagebannerdesktop";
import ProjectNavMobile from "./Projectnavmobile";
import ProjectNavDesktop from "./Projectnavdesktop";
import ProjectHeroTitleBlock from "./Projectherotitleblock";
import Process from "./Process";
import ProjectImages from "./Projectimages";
import Image from "next/image";
import ProjectTitleBlock from "./ProjectTitleBlock";

export interface IProjectProps {
  data: IProjectPage;
}

export default function Project({ data }: IProjectProps) {
  return (
    <>
      <div className="h-0 w-full pt-[75%] md:pt-[42.8%] relative">
        <Image
          src={data.projectPage.heroImage.url}
          alt={data.projectPage.heroImageAlt}
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="sticky z-[50] top-0 desktop:min-w-fit desktop:inline-block desktop:align-top desktop:mt-[104px]">
        <div className="block desktop:hidden">
          <ProjectNavMobile />
        </div>
        <div className="hidden md:min-w-fit desktop:inline-block">
          <ProjectNavDesktop />
        </div>
      </div>
      <div className="desktop:inline-flex desktop:flex-col desktop:items-center desktop:ml-[4.9%] desktop:w-[75.6%]">
        <div className="mx-4 desktop:mx-0 desktop:max-w-[68rem] desktop:mt-[104px]">
          <ProjectHeroTitleBlock data={data} />
        </div>
        <div className="mx-4 max-w-[68.063rem] mb-[56px] desktop:mx-0">
          <ProjectImages data={data} />
        </div>
      </div>

      <div className="process bg-cream text-grey-3 md:mt-[72px] md:overflow-auto">
        <div className="pl-4 pr-4 md:pr-[12.01388888888889%] md:pl-[19.93055555555556%]">
          <Process data={data} />
        </div>
      </div>
    </>
  );
}

{
  /*<div className="block md:hidden">
        <ProjectImageBannerMobile data={data} />
        <ProjectNavMobile />
      </div>

      <div className="hidden md:block">
        <ProjectImageBannerDesktop data={data} />
      </div>

      <div className="md:flex md:mt-[104px] md:gap-[72px] md:justify-between">
        <div className="hidden md:block sticky top-0">
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
  </div>*/
}
