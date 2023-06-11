import React from "react";
import Image from "next/image";
import { IProjectPage } from "@/interfaces/project_interfaces";

export interface IProjectImageBannerProps {
  data: IProjectPage;
}

export default function ProjectImageBannerMobile({
  data,
}: IProjectImageBannerProps) {
  return (
    <div className="h-0 w-full pt-[75%] relative">
      <Image
        src={data.projectPage.heroImage.url}
        alt={data.projectPage.heroImageAlt}
        fill={true}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
