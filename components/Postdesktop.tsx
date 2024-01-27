import React from "react";
import { IPostProps } from "./Post";
import { getPostData } from "./Post";

export default function PostDesktop({ data }: IPostProps) {
  const post = getPostData(data);

  return (
    <div className="bg-cream">
      <div className="grid grid-cols-12 gap-8 mx-64">
        <h1 className="col-start-3 col-span-10 text-h1 text-black font-250 leading-[70.4px] mb-[62px]">
          {data.thoughtPage.postHeading}
        </h1>
      </div>
    </div>
  );
  /*<div className="bg-cream pb-[214px] pt-[214px]">
      <div className="font-main flex">
        <div className="w-[17.77777777777778%]">
          <h4 className="text-m3 font-250 leading-[36px] text-grey-6">
            {data.thoughtPage.postDate}
          </h4>
        </div>
        <div className="w-[36.52777777777778%]">
          <h1 className="text-h1 text-black font-250 leading-[70.4px] mb-[62px]">
            {data.thoughtPage.postHeading}
          </h1>
        </div>
        <div className="w-[41.11111111111111%]">
          {post[0]}
          {post[2]}
        </div>
      </div>
    </div>*/
}
