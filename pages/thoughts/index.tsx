import React from "react";
import { GetStaticProps } from "next";
import { gql, GraphQLClient } from "graphql-request";
import { IThought } from "../../interfaces/thought_interfaces";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const client = new GraphQLClient(process.env.HYGRAPH_URL as string);

export const getStaticProps: GetStaticProps = async () => {
  const query = gql`
    query Thought {
      thought(where: { id: "cli2y5dww4x4c0cmm99b20wjc" }) {
        thoughtList {
          id
          slug
          postHeading
          postThumbnail {
            url
          }
          postDate
          imageAlt
        }
      }
    }
  `;

  const response: IThought = await client.request(query);

  console.log(response);

  let thoughtCount: number = 0;

  response.thought.thoughtList.forEach(() => {
    thoughtCount++;
  });

  console.log(thoughtCount);

  return {
    props: { ...response, thoughtCount },
  };
};

export default function Thoughts(response: IThought) {
  const thoughts = response.thought.thoughtList.map((thought) => (
    <div key={thought.id}>
      <Link href={"/thoughts/[slug]"} as={`/thoughts/${thought.slug}`}>
        <div>
          <div className="w-full">
            <div className="h-0 pt-[56.25%] relative">
              <Image
                src={thought.postThumbnail.url}
                alt={thought.imageAlt}
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="pt-18 pl-4 pr-4 pb-65 bg-gradient-to-b from-[#212121] to-[#121212]">
            <h5 className="text-cream m5 inline-block leading-27 pb-2 font-main">
              {thought.postHeading}
            </h5>
            <p className="text-grey text-m-caption font-m-caption leading-21 font-main">
              {thought.postDate}
            </p>
          </div>
        </div>
      </Link>
    </div>
  ));

  return (
    <div>
      <div className="flex items-center justify-between mt-77 mb-26">
        <div>
          <h3 className="text-m3 text-blue font-main leading-27.6 ml-17 font-250">
            All thoughts
          </h3>
        </div>
        <div>
          <h5 className="text-m-body text-orange font-main leading-24 mr-4 font-250">
            {response.thoughtCount.toString() + " Thoughts"}
          </h5>
        </div>
      </div>
      <div>{thoughts}</div>
    </div>
  );
}
