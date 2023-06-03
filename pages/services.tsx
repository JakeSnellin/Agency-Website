import React from "react";
import Image from "next/image";

export default function Services() {
  return (
    <div className="mt-12 font-main">
      <div>
        <div className="ml-16 mr-16">
          <div>
            <h1 className="text-m1 text-blue font-250 leading-35.52 mb-6">
              Our Services
            </h1>
          </div>
          <p className="text-m-body text-white font-250 leading-24 mb-[179px]">
            Ecstatic dance brighton is a dance event company based in brighton
            somthing similar to rainbow rhythms from peep show. Ecstatic dance
            brighton is a dance event company based in brighton somthing similar
            to rainbow rhythms from peep show.
          </p>
        </div>
        <div className="w-[61.25%] h-[95.76271186440678%] absolute top-[460px] left-0 z-[-1]">
          <div className="relative h-0 w-full pt-[100%]">
            <Image
              src="/../public/paintbg.png"
              alt="abstract paint background"
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="ml-4 mr-4 bg-cream pl-8 pr-7 pt-10 pb-[49px] mb-[68px]">
          <h5 className="m5 leading-27 text-black mb-3">Sectors</h5>
          <ul className="mb-12">
            <li>
              <p className="m-body-text">
                Digital design and UI/UX consultancy
              </p>
            </li>
            <li>
              <p className="m-body-text">Identity Design</p>
            </li>
            <li>
              <p className="m-body-text">Strategy</p>
            </li>
            <li>
              <p className="m-body-text">Iconography</p>
            </li>
            <li>
              <p className="m-body-text">Advertising marketing</p>
            </li>
            <li>
              <p className="m-body-text">Animation</p>
            </li>
            <li>
              <p className="m-body-text">Experimental code</p>
            </li>
          </ul>
          <h5 className="m5 leading-27 text-black mb-3">Sectors</h5>
          <p className="mb-12">
            We aren't specialised to a specific sector. We work with clients who
            contribute great things to the world.
          </p>
          <h5 className="m5 leading-27 text-black mb-3">Process</h5>
          <p className="mb-[49px]">
            We don't have a set way of working. It depends on the unique
            requirements of your project.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
}
