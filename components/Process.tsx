import React from "react";
import Image from "next/image";
import { IProjectProps } from "./Project";

export default function Process({ data }: IProjectProps) {
  return (
    <>
      <div className="mb-4 pt-74 md:pt-[146px] w-full md:flex md:justify-between md:mb-[125px]">
        <h2 className="text-m2 font-250 leading-31.5 md:text-h2 md:leading-[52.8px]">
          Process
        </h2>
        <h4 className="text-m4 font-250 leading-28.2 pb-94 md:w-[53.87755102040816%] md:pb-0 md:text-h4 md:leading-9">
          {data.projectPage.taskDescription}
        </h4>
      </div>
      <div className="ml-33 md:w-full md:flex md:ml-0 md:gap-8 md:mb-[228px]">
        <div className="md:w-[42.44897959183673%]">
          <div className="w-full h-0 pt-[56.07843137254902%] relative mb-14 md:pt-[56.25%] md:mb-0">
            <Image
              src={data.projectPage.processImages[0].image.url}
              alt={data.projectPage.processImages[0].altText}
              fill={true}
              style={{ objectFit: "cover" }}
            ></Image>
          </div>
        </div>
        <div className="pb-98 md:w-[31.02040816326531%]">
          <p className="text-m-caption font-400 leading-21">
            {data.projectPage.taskDescription}
          </p>
        </div>
      </div>
      <div className="mr-27 md:w-[42.75510204081633%] md:float-right md:mr-0 md:mt-[-192px]">
        <div className="w-full h-0 pt-[132.5670498084291%] relative mb-14 md:mb-4 md:pt-[132.6968973747017%]">
          <Image
            src={data.projectPage.processImages[1].image.url}
            alt={data.projectPage.processImages[1].altText}
            fill={true}
            style={{ objectFit: "cover" }}
          ></Image>
        </div>
        <p className="text-m-caption font-400 leading-21 pb-81 md:pb-0 md:w-[72.55369928400955%]">
          {data.projectPage.taskDescription}
        </p>
      </div>
      <div className="ml-32 md:ml-0 md:w-[31.3265306122449%] md:mb-[142px]">
        <div className="w-full h-0 pt-[132.421875%] relative mb-14 md:mb-4 md:pt-[132.8990228013029%]">
          <Image
            src={data.projectPage.processImages[2].image.url}
            alt={data.projectPage.processImages[2].altText}
            fill={true}
            style={{ objectFit: "cover" }}
          ></Image>
        </div>
        <p className="text-m-caption font-400 leading-21 pb-97 md:pb-0">
          {data.projectPage.taskDescription}
        </p>
      </div>
      <div className="mr-28 md:clear-both md:w-[42.44897959183673%] float-right md:mr-[115px]">
        <div className="w-full h-0 pt-[56.15384615384615%] relative mb-14 md:pt-[56.25%]">
          <Image
            src={data.projectPage.processImages[3].image.url}
            alt={data.projectPage.processImages[3].altText}
            fill={true}
            style={{ objectFit: "cover" }}
          ></Image>
        </div>
        <p className="text-m-caption font-400 leading-21 pb-97 md:w-[73.31730769230769%]">
          {data.projectPage.taskDescription}
        </p>
      </div>
    </>
  );
}
