import Link from "next/link";
import Image from "next/image";
import Icons from "./Icons";
import logo3x from "../public/static/logo3x.png";

interface ITopBarProps {
  children: React.ReactNode;
}

export default function Topbar({ children }: ITopBarProps) {
  return (
    <header className="pt-[15px] pb-[15px] flex items-center justify-between md:pt-0 md:pb-0">
      <Link href="/">
        <div className="logo h-34 w-34 relative block ml-4 md:h-[54px] md:w-[54px] md:ml-35">
          <Image
            className="object-contain"
            src={logo3x}
            alt="logo"
            fill={true}
            quality={100}
          />
        </div>
      </Link>
      <div className="flex items-center gap-[29px]">
        <div className="hidden md:block">{children}</div>
        <div className="social-media flex gap-5 mr-4 md:mr-35">
          <Icons />
        </div>
      </div>
    </header>
  );
}
