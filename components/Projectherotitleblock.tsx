import React from "react";
import { IProjectProps } from "./Project";

function createMarkup(c: string) {
  return { __html: c };
}

export default function ProjectHeroTitleBlock({ data }: IProjectProps) {
  return (
    <div className="md:w-full">
      <h1 className="text-blue font-fahkwang-extralight md:font-[275] md:tracking-[0.48em] text-right leading-35.52 font-250 text-m1 mb-4 md:text-3.125 md:leading-[71px] md:mb-[60px] md:pl-[20.22058823529412%]">
        {data.projectPage.projectHeading.toUpperCase()}
      </h1>
      <hr className="border-t-[0.5px] border-white mb-4 md:border-dashed md:mb-8"></hr>
      <div className="md:flex md:shrink-0 md:gap-[18.38235294117647%] mb-[84px]">
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
        </div>
        <div className="leading-27 text-blue m5 md:w-[48.16176470588235%]">
          <h5 className="mb-2">{data.projectPage.clientDiscriptionHeading}</h5>
          <p className="leading-24 text-white text-m-body font-250 mb-6">
            {data.projectPage.clientDescription}
          </p>
          <h5 className="mb-2">The Task</h5>
          <p className="leading-24 text-white text-m-body font-250 mb-12">
            {data.projectPage.taskDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
