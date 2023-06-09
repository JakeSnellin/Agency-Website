import React from "react";
import { IProjectPage } from "../interfaces/project_interfaces";
import Image from "next/image";

interface IProjectProps {
  data: IProjectPage;
}

function createMarkup(c: string) {
  return { __html: c };
}

export default function Project({ data }: IProjectProps) {
  return (
    <>
      <div className="h-0 w-full pt-[75%] relative">
        <Image
          src={data.projectPage.heroImage.url}
          alt={data.projectPage.heroImageAlt}
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="bg-grey-4 relative">
        <div className="absolute bottom-0 left-0 bg-grey-3 h-px w-full"></div>
        <ul className="flex font-main text-blue pt-12 pl-23 gap-35">
          <li className="h-10 relative">
            <h5 className="font-250 leading-27 text-m5">Overview</h5>
            <div className="absolute h-px bg-white w-full bottom-0 left-0"></div>
          </li>
          <li className="h-10">
            <h5 className="font-250 leading-27 text-m5">Outcome</h5>
          </li>
          <li className="h-10">
            <h5 className="font-250 leading-27 text-m5">Process</h5>
          </li>
        </ul>
      </div>
      <div className="mr-4 ml-4 mb-56">
        <h1 className="text-blue leading-35.52 font-250 text-m1 mb-4 mt-12">
          {data.projectPage.projectHeading}
        </h1>
        <hr className="border-t-[0.5px] border-white mb-4"></hr>
        <div>
          <h5 className="leading-27 m5 text-blue mb-2">Disciplines Covered</h5>
          <div className="text-white text-m4 leading-28.2 font-250 mb-53">
            {
              <div
                dangerouslySetInnerHTML={createMarkup(
                  data.projectPage.disciplines.html
                )}
              ></div>
            }
          </div>
          <div className="leading-27 text-blue m5">
            <h5 className="mb-2">
              {data.projectPage.clientDiscriptionHeading}
            </h5>
            <p className="leading-24 text-white text-m-body font-250 mb-6">
              {data.projectPage.clientDescription}
            </p>
            <h5 className="mb-2">The Task</h5>
            <p className="leading-24 text-white text-m-body font-250 mb-12">
              {data.projectPage.taskDescription}
            </p>
          </div>
          <div>
            <div className="w-full h-0 pt-[56.25%] relative mb-4">
              <Image
                src={data.projectPage.overviewImages[0].image.url}
                alt={data.projectPage.overviewImages[0].altText}
                fill={true}
                style={{ objectFit: "cover" }}
              ></Image>
            </div>
            <div className="w-full h-0 pt-[133.3333333333333%] relative mb-12">
              <Image
                src={data.projectPage.overviewImages[1].image.url}
                alt={data.projectPage.overviewImages[1].altText}
                fill={true}
                style={{ objectFit: "cover" }}
              ></Image>
            </div>
          </div>
          <div className="text-white">
            <div className="text-m4 font-250 leading-28.2 mb-16">
              {data.projectPage.blockQuote}
            </div>
            <div className="text-m-caption font-400 leading-21 mb-12">
              {data.projectPage.citation}
            </div>
          </div>
          <div className="w-full h-0 pt-[75%] relative mb-12">
            <Image
              src={data.projectPage.overviewImages[3].image.url}
              alt={data.projectPage.overviewImages[3].altText}
              fill={true}
              style={{ objectFit: "cover" }}
            ></Image>
          </div>
          <div className="leading-27 text-blue m5">
            <h5 className="mb-2">
              {data.projectPage.clientDiscriptionHeading}
            </h5>
            <p className="leading-24 text-white text-m-body font-250 mb-6">
              {data.projectPage.clientDescription}
            </p>
          </div>
          <div className="w-full h-0 pt-[133.3333333333333%] relative mb-4">
            <Image
              src={data.projectPage.overviewImages[4].image.url}
              alt={data.projectPage.overviewImages[4].altText}
              fill={true}
              style={{ objectFit: "cover" }}
            ></Image>
          </div>
          <div className="w-full h-0 pt-[133.3333333333333%] relative">
            <Image
              src={data.projectPage.overviewImages[5].image.url}
              alt={data.projectPage.overviewImages[5].altText}
              fill={true}
              style={{ objectFit: "cover" }}
            ></Image>
          </div>
        </div>
      </div>
      <section className=" bg-cream text-grey-3">
        <div className="ml-17 mr-15">
          <h2 className="text-m2 font-250 leading-31.5 mb-4 pt-74">Process</h2>
          <h4 className="text-m4 font-250 leading-28.2 pb-94">
            {data.projectPage.taskDescription}
          </h4>
        </div>
        <div className="ml-4 mr-4">
          <div className="ml-33">
            <div className="w-full h-0 pt-[56.07843137254902%] relative mb-14">
              <Image
                src={data.projectPage.processImages[0].image.url}
                alt={data.projectPage.processImages[0].altText}
                fill={true}
                style={{ objectFit: "cover" }}
              ></Image>
            </div>
            <p className="text-m-caption font-400 leading-21 pb-98">
              {data.projectPage.taskDescription}
            </p>
          </div>
          <div className="mr-27">
            <div className="w-full h-0 pt-[132.5670498084291%] relative mb-14">
              <Image
                src={data.projectPage.processImages[1].image.url}
                alt={data.projectPage.processImages[1].altText}
                fill={true}
                style={{ objectFit: "cover" }}
              ></Image>
            </div>
            <p className="text-m-caption font-400 leading-21 pb-81">
              {data.projectPage.taskDescription}
            </p>
          </div>
          <div className="ml-32">
            <div className="w-full h-0 pt-[132.421875%] relative mb-14">
              <Image
                src={data.projectPage.processImages[2].image.url}
                alt={data.projectPage.processImages[2].altText}
                fill={true}
                style={{ objectFit: "cover" }}
              ></Image>
            </div>
            <p className="text-m-caption font-400 leading-21 pb-97">
              {data.projectPage.taskDescription}
            </p>
          </div>
          <div className="mr-28">
            <div className="w-full h-0 pt-[56.15384615384615%] relative mb-14">
              <Image
                src={data.projectPage.processImages[3].image.url}
                alt={data.projectPage.processImages[3].altText}
                fill={true}
                style={{ objectFit: "cover" }}
              ></Image>
            </div>
            <p className="text-m-caption font-400 leading-21 pb-97">
              {data.projectPage.taskDescription}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
