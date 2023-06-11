import React from "react";
import { IProjectImageBannerProps } from "./Projectimagebannermobile";
import Image from "next/image";

export default function ProjectImageBannerDesktop({
  data,
}: IProjectImageBannerProps) {
  return (
    <div className="h-0 w-full pt-[42.84722222222222%] relative">
      <Image
        src={data.projectPage.heroImage.url}
        alt={data.projectPage.heroImageAlt}
        fill={true}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
