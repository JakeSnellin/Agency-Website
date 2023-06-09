import React from "react";
import Image from "next/image";
import Link from "next/link";

interface IIcons {
  children: React.ReactNode;
}

export default function Icons() {
  return (
    <>
      <div className="w-8 h-8 relative flex items-center justify-center">
        <Image
          className={"object-contain"}
          src={"/../public/ellipse.png"}
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
            src={"/../public/insta_icon3x.png"}
            alt={"instagram icon"}
            fill={true}
            quality={100}
          />
        </Link>
      </div>

      <div className="w-8 h-8 relative flex items-center justify-center">
        <Image
          className={"object-contain"}
          src={"/../public/ellipse.png"}
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
            src={"/../public/indesign_icon3x.png"}
            alt={"linkedIn icon"}
            fill={true}
            quality={100}
          />
        </Link>
      </div>
    </>
  );
}
