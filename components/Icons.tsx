import React from "react";
import Image from "next/image";
import Link from "next/link";
import insta from "../public/static/insta_icon3x.png";
import ellipse from "../public/static/ellipse.png";
import linkedIn3x from "../public/static/Linkedin_icon3x.png";

interface IIcons {
  children: React.ReactNode;
}

export default function Icons() {
  return (
    <>
      <div className="w-8 h-8 relative flex items-center justify-center">
        <Image
          className={"object-contain"}
          src={ellipse}
          alt={"ellipse"}
          fill={true}
          quality={100}
        />
        <Link
          className="social-media__icon w-3 h-3 absolute inline-block"
          href="#"
        >
          <Image
            className={"object-contain"}
            src={insta}
            alt={"instagram icon"}
            fill={true}
            quality={100}
          />
        </Link>
      </div>

      <div className="w-8 h-8 relative flex items-center justify-center">
        <Image
          className={"object-contain"}
          src={ellipse}
          alt={"ellipse"}
          fill={true}
          quality={100}
        />
        <Link
          className="social-media__icon w-3 h-3 absolute inline-block"
          href="#"
        >
          <Image
            className={"object-contain"}
            src={linkedIn3x}
            alt={"linkedIn icon"}
            fill={true}
            quality={100}
          />
        </Link>
      </div>
    </>
  );
}
