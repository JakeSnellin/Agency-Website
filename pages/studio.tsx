import React from "react";
import Image from "next/image";
import studioImg from "../public/static/studio_img.png";

export default function Studio() {
  return (
    <div>
      <div className="font-main">
        <div className="desktop:w-65.5 desktop:mt-230 flex flex-col desktop:flex-row desktop:justify-between desktop:ml-12">
          <div className="desktop:mx-0 w-full">
            <h1 className="text-blue ml-13 desktop:ml-0 text-m1 desktop:text-h1 font-250 leading-35.52 mb-[24px] mt-[79px] desktop:mt-0">
              Studio
            </h1>
          </div>
          <div className="desktop:max-w-27.125">
            <h4 className="text-grey-7 w-90 desktop:w-full ml-13 desktop:ml-0 text-m4 desktop:text-h4 leading-28.2 desktop:leading-9 font-250 mb-[84px] desktop:mb-182">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore.
            </h4>
            <div className="flex justify-between w-[14.302rem] ml-13 desktop:ml-0 desktop:w-full">
              <div className="relative h-6.75 w-6.483 desktop:w-12.125 desktop:h-12.625">
                <Image
                  src={studioImg}
                  alt="picture of designer"
                  fill={true}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="relative h-6.75 w-6.483 desktop:w-12.125 desktop:h-12.625">
                <Image
                  src={studioImg}
                  alt="picture of designer"
                  fill={true}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-cream pt-[88px] pl-4 pr-[17px] pb-[172px] -mt-[32px] desktop:-mt-[70px] desktop:pb-389 desktop:pt-[184px]">
          <div className="text-black max-w-65.5 desktop:ml-12">
            <h3 className="text-m3 desktop:text-h3 font-250 leading-27.6 desktop:mb-[64px] mb-3">
              Contact
            </h3>
            <h3 className="text-m3 font-250 leading-27.6 mb-[51px] desktop:float-right max-w-31 desktop:mb-0 desktop:-mt-[93px] desktop:leading-[35.2px] desktop:text-h3">
              Please get in touch. We are based in London but work with
              international clients.
            </h3>
            <h4 className="text-m4 desktop:text-h4 font-250 leading-28.2 desktop:leading-[36px] desktop:mb-[29px]">
              Email - email@email.com
            </h4>
            <h4 className="text-m4 desktop:text-h4 font-250 leading-28.2 desktop:leading-[36px]">
              Phone - 07702139052
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
