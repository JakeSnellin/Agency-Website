import React from "react";
import Image from "next/image";
import studioImg from "../public/static/studio_img.png";

export default function Studio() {
  return (
    <div>
      <div className="font-main">
        <div className="ml-13 mr-16">
          <h1 className="text-blue text-m1 font-250 leading-35.52 mb-[24px] mt-[79px]">
            Studio
          </h1>
          <h4 className="text-grey-7 text-m4 leading-28.2 font-250 mb-[84px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore.
          </h4>
          <div>
            <div className="flex gap-5 w-[71.25%]">
              <div className="w-[46.41148325358852%]">
                <div className="w-full h-0 pt-[104.1237113402062%] relative">
                  <div>
                    <Image
                      src={studioImg}
                      alt="picture of designer"
                      fill={true}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
              <div className="w-[46.41148325358852%]">
                <div className="w-full h-0 pt-[104.1237113402062%] relative">
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
        </div>
        <div className="bg-cream pt-[88px] pl-4 pr-[17px] pb-[172px] mt-[-32px]">
          <div className="text-black">
            <h3 className="text-m3 font-250 leading-27.6 mb-3">Contact</h3>
            <h3 className="text-m3 font-250 leading-27.6 mb-[51px]">
              Please get in touch. We are based in London but work with
              international clients.
            </h3>
            <h4 className="text-m4 font-250 leading-28.2 mb-15">
              Email - email@email.com
            </h4>
            <h4 className="text-m4 font-250 leading-28.2">
              Phone - 07702139052
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
