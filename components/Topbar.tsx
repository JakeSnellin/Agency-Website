import Link from "next/link";
import Image from "next/image";
import Icons from "./Icons";
import { Children } from "react";

interface ITopBarProps {
  children: React.ReactNode;
}

export default function Topbar({ children }: ITopBarProps) {
  return (
    <header className="h-16 flex items-center justify-between md:h-[110px]">
      <Link href="/">
        <div className="logo h-34 w-34 relative inline-block ml-4 md:h-[54px] md:w-[54px] md:ml-35">
          <Image
            className="object-contain"
            src="/../public/logo3x.png"
            alt="logo"
            fill={true}
            quality={100}
          />
        </div>
      </Link>
      <div className="flex items-center">
        <div className="hidden md:block">{children}</div>
        <div className="social-media flex gap-5 mr-4">
          <Icons />
        </div>
      </div>
    </header>
  );
}
