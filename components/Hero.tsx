import React from "react";

export default function Hero({ title, subtitle }: any) {
  return (
    <div className="w-77.2 ml-44 desktop:ml-164 font-fahkwang-extralight text-blue pt-124 desktop:pt-311 pb-26 desktop:pb-54">
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
    /*<div className="h-auto flex ml-[30px] mr-[33px] mb-[62px] mt-[53px] max-w-[713px] md:block md:ml-[17.84722222222222%] md:mr-[32.63888888888889%]">
      <div className="mt-[5px] h-[168px] w-px shrink-0 mr-[19px] bg-gradient-to-b from-grad-orange md:hidden"></div>
      <div className="h-auto leading-31.5">
        <h2 className="text-m2 text-orange font-250 font-main">
          Lowein-Levy design & consultancy
        </h2>
        <h2 className="text-m2 text-blue font-250 font-main">
          Build your digital product, design your brand identity, print your
          brochure.
        </h2>
      </div>
    </div>*/
  );
}
