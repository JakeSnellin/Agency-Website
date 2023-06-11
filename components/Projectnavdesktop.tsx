import React from "react";

export default function ProjectNavDesktop() {
  return (
    <div className="project-nav bg-grey-4 pt-[44px] pb-[44px] pl-[63px] w-[216px] flex mt-[100px]">
      <div className="project-nav__inner flex content-center">
        <div className="h-[137px] w-px bg-grey-3 mr-[25px] self-center"></div>
        <div>
          <ul className="font-main text-blue flex flex-col gap-[5px]">
            <li className="pt-[8px] pb-[8px] relative">
              <h5 className="font-250 leading-27 text-m5">Overview</h5>
              <div className="absolute h-full bg-white w-px top-0 left-[-26px]"></div>
            </li>
            <li className="pt-[8px] pb-[8px]">
              <h5 className="font-250 leading-27 text-m5">Outcome</h5>
            </li>
            <li className="pt-[8px] pb-[8px]">
              <h5 className="font-250 leading-27 text-m5">Process</h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
