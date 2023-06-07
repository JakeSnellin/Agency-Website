import React from "react";
import { IThoughtPage } from "../interfaces/thought_interfaces";
import Image from "next/image";

interface IPostProps {
  data: IThoughtPage;
}

export default function Post({ data }: IPostProps) {
  console.log(data);

  function filterImages(child: any) {
    return child.type === "image";
  }

  const images = data.children.filter(filterImages);

  const post = data.children.map((child, index) => {
    if (child.type === "paragraph") {
      return (
        <p
          key={index}
          className="text-m-body font-250 leading-24 font-main text-black ml-16 mr-16 mb-34"
        >
          {child.children[0].text}
        </p>
      );
    } else if (child.type === "image") {
      if (child.handle === images[0].handle) {
        return (
          <div key={index} className="flex flex-col items-end mb-[34px]">
            <div className="w-[71.25%]">
              <div className="relative pt-[74.66216216216216%] w-full h-0 mb-[7px]">
                <Image
                  src={child.src}
                  alt={child.altText}
                  fill={true}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p className="text-grey-6 text-m-caption leading-21 font-400 font-main">
                {data.thoughtPage.captionText001}
              </p>
            </div>
          </div>
        );
      } else {
        return (
          <div key={index} className="mb-[25px]">
            <div className="w-full h-0 pt-[44.16666666666667%] relative mb-[7px]">
              <Image
                src={child.src}
                alt={child.altText}
                fill={true}
                style={{ objectFit: "cover" }}
              ></Image>
            </div>
            <p className="text-grey-6 text-m-caption leading-21 font-400 font-main ml-16">
              {data.thoughtPage.captionText002}
            </p>
          </div>
        );
      }
    }
  });

  return (
    <>
      <div className="bg-cream pb-[68px]">
        <div className="ml-16 mr-16 font-main">
          <h1 className="text-m1 text-black font-light leading-9 mb-15">
            {data.thoughtPage.postHeading}
          </h1>
          <p className="text-m4 font-light leading-24 text-grey-6 mb-26">
            {data.thoughtPage.postDate}
          </p>
        </div>
        {post}
      </div>
    </>
  );
}
