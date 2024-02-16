import React from "react";
import { IProjectProps } from "./Project";

function createMarkup(c: string) {
  return { __html: c };
}

export default function ProjectHeroTitleBlock({ data }: IProjectProps) {
  return (
    <div>
      <h1 className="text-blue font-fahkwang-extralight desktop:font-[275] desktop:tracking-[0.48em] desktop:text-right leading-35.52 font-250 text-m1 mb-4 desktop:text-3.125 desktop:leading-[71px] desktop:mb-[36px] desktop:pl-[17rem] pt-[48px] text-left">
        {data.projectPage.projectHeading.toUpperCase()}
      </h1>
      <hr className="border-t-[0.5px] border-white mb-4 border-dashed desktop:mb-8"></hr>
      <div className="desktop:flex gap-[18.838rem] desktop:shrink-0 mb-[84px]">
        <div>
          <h5 className="leading-27 text-m5 text-blue mb-2">
            Disciplines Covered
          </h5>
          <div className="text-white text-m4 leading-28.2 desktop:leading-[36px] font-250 mb-53">
            {
              <div
                dangerouslySetInnerHTML={createMarkup(
                  data.projectPage.disciplines.html
                )}
              ></div>
            }
          </div>
        </div>
        <div className="leading-27 text-blue m5 desktop:w-[48.16176470588235%]">
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
