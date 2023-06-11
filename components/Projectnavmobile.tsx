import React from "react";

export default function ProjectNavMobile() {
  return (
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
  );
}
