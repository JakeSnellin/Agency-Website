import React from "react";
import { IThoughtPage } from "../interfaces/thought_interfaces";
import Image from "next/image";
import { Fragment } from "react";
export interface IPostProps {
  data: IThoughtPage;
}

export function filterImages(child: any) {
  return child.type === "image";
}

function filterParagraphs(child: any) {
  return child.type === "paragraph";
}

function joinParagraphs(paragraphs: any) {
  const firstParagraph = paragraphs[0].children[0].text;
  const secondParagraph = paragraphs[1].children[0].text;
  const paragraph = firstParagraph + secondParagraph;
  return paragraph;
}

function formatDate(date: any) {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "numeric",
    year: "2-digit",
  });
  const formattedDate = formatter.format(new Date(date));
  return formattedDate.replaceAll("/", ".");
}

export const getPostData = (data: IThoughtPage) => {
  const images = data.children ? data.children.filter(filterImages) : null;

  const paragraphs = data.children
    ? data.children.filter(filterParagraphs)
    : null;

  const paragraph = data.children ? joinParagraphs(paragraphs) : null;

  const post = data.children?.map((child, index) => {
    if (child.type === "paragraph" && index === 0) {
      return (
        <Fragment key={index}>
          <p className="blogText hidden lg:block lg:mb-[53px]">{paragraph}</p>{" "}
          <p className="blogText block lg:hidden">{child.children[0].text}</p>
        </Fragment>
      );
    } else if (child.type === "paragraph" && index === 2) {
      return (
        <Fragment key={index}>
          <p className="block lg:hidden blogText">{child.children[0].text}</p>
        </Fragment>
      );
    } else if (child.type === "paragraph" && index === 4) {
      return (
        <Fragment key={index}>
          <p className="blogText">{child.children[0].text}</p>
        </Fragment>
      );
    } else if (child.type === "image") {
      if (child.handle === images?.[0].handle) {
        return (
          <Fragment key={index}>
            <div className="flex flex-col items-end mb-[34px] lg:block lg:col-span-5">
              <div className="w-[71.25%] lg:w-auto">
                <div className="relative pt-[74.66216216216216%] w-full h-0 mb-[7px] lg:col-span-5">
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
          </Fragment>
        );
      } else {
        return (
          <Fragment key={index}>
            <div className="mb-[25px] lg:col-span-12">
              <div className="w-full h-0 pt-[44.16666666666667%] relative mb-[7px]">
                <Image
                  src={child.src}
                  alt={child.altText}
                  fill={true}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p className="text-grey-6 text-m-caption leading-21 font-400 font-main ml-16">
                {data.thoughtPage.captionText002}
              </p>
            </div>
          </Fragment>
        );
      }
    }
  });

  return post;
};

export default function Post({ data }: IPostProps) {
  const post = getPostData(data);

  return (
    <>
      <div className="bg-cream pb-[68px] pt-[116px]">
        <div className="font-main lg:grid lg:grid-cols-12 lg:gap-x-8">
          <h1 className="mx-4 lg:mx-0 text-m1 text-black font-light leading-9 mb-15 lg:col-start-3 lg:col-span-10 lg:text-h1 lg:leading-[70.4px] lg:mb-[62px]">
            {data.thoughtPage.postHeading && data.thoughtPage.postHeading}
          </h1>
          <p className="mx-4 lg:mx-0 lg:row-start-2 text-m4 lg:text-h4 lg:leading-9 lg:font-250 font-light leading-24 text-grey-6 mb-26 lg:col-start-2">
            {data.thoughtPage.postDate && formatDate(data.thoughtPage.postDate)}
          </p>
          {post}
        </div>
      </div>
    </>
  );
}
