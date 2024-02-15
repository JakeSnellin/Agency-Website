import React from "react";

export default function Hero({ title, subtitle }: any) {
  return (
    <div className="w-77.2 ml-44 desktop:ml-[45.5px] font-fahkwang-extralight text-blue pt-124 desktop:pt-311 pb-26 desktop:pb-54">
      <div className="mb-111 desktop:mb-252">
        <h1 className="text-m-hero desktop:text-d-hero max-w-58.75 leading-1.6 tracking-0.5">
          {title}
        </h1>
      </div>
      <div className="flex flex-col w-fit items-center gap-36 ml-70 desktop:ml-11">
        <h2 className="text-m-hero-sm leading-1.6 tracking-0.5">{subtitle}</h2>
        <div className="w-[1px] bg-grey-line h-5.25"></div>
      </div>
    </div>
  );
}
