import React from "react";
import Image from "next/image";
import { IProjectProps } from "./Project";

export default function ProjectImages({ data }: IProjectProps) {
  return (
    <div>
      <div>
        <div className="w-full h-0 pt-[56.25%] relative mb-4 md:mb-6">
          <Image
            src={data.projectPage.overviewImages[0].image.url}
            alt={data.projectPage.overviewImages[0].altText}
            fill={true}
            style={{ objectFit: "cover" }}
          ></Image>
        </div>
        <div className="md:flex md:justify-between">
          <div className="md:w-[48.48484848484848%]">
            <div className="w-full h-0 pt-[133.3333333333333%] relative mb-12 md:pt-[133.5227272727273%] md:w-auto md:mb-6">
              <Image
                src={data.projectPage.overviewImages[1].image.url}
                alt={data.projectPage.overviewImages[1].altText}
                fill={true}
                style={{ objectFit: "cover" }}
              ></Image>
            </div>
          </div>
          <div className="text-white md:w-[38.20018365472911%] md:mt-[216px]">
            <div className="text-m4 font-250 leading-28.2 mb-16 md:text-m3">
              {data.projectPage.blockQuote}
            </div>
            <div className="text-m-caption font-400 leading-21 mb-12 md:mb-0 md:text-base">
              {data.projectPage.citation}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex gap-[32px]">
        <div className="md:w-[48.48484848484848%] hidden md:block">
          <div className="w-full h-0 pt-[133.3333333333333%] relative mb-12 md:pt-[133.5227272727273%] md:w-auto md:mb-6">
            <Image
              src={data.projectPage.overviewImages[2].image.url}
              alt={data.projectPage.overviewImages[2].altText}
              fill={true}
              style={{ objectFit: "cover" }}
            ></Image>
          </div>
        </div>
        <div className="leading-27 text-blue m5 font-400 md:w-[28.65013774104683%] md:mt-[139px]">
          <h5 className="mb-2">{data.projectPage.clientDiscriptionHeading}</h5>
          <p className="leading-24 text-white text-m-body font-250 mb-6">
            {data.projectPage.clientDescription}
          </p>
        </div>
      </div>
      <div className="w-full h-0 pt-[75%] relative mb-12 md:mb-6">
        <Image
          src={data.projectPage.overviewImages[3].image.url}
          alt={data.projectPage.overviewImages[3].altText}
          fill={true}
          style={{ objectFit: "cover" }}
        ></Image>
      </div>
      <div className="leading-27 text-blue m5 md:hidden">
        <h5 className="mb-2">{data.projectPage.clientDiscriptionHeading}</h5>
        <p className="leading-24 text-white text-m-body font-250 mb-6">
          {data.projectPage.clientDescription}
        </p>
      </div>
      <div className="md:flex gap-6">
        <div className="md:w-[48.85215794306703%]">
          <div className="h-0 pt-[133.3333333333333%] relative mb-4 md:pt-[130.8270676691729%]">
            <Image
              src={data.projectPage.overviewImages[4].image.url}
              alt={data.projectPage.overviewImages[4].altText}
              fill={true}
              style={{ objectFit: "cover" }}
            ></Image>
          </div>
        </div>
        <div className="md:w-[48.85215794306703%]">
          <div className="h-0 pt-[133.3333333333333%] relative md:pt-[130.8270676691729%]">
            <Image
              src={data.projectPage.overviewImages[5].image.url}
              alt={data.projectPage.overviewImages[5].altText}
              fill={true}
              style={{ objectFit: "cover" }}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
