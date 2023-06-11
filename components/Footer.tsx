import Link from "next/link";
import Image from "next/image";
import Icons from "./Icons";
import BackToTopButton from "./Backtotopbutton";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <footer className="footer bg-grey-2 pb-[71px] pl-8 pr-8 md:pl-[64px] md:pr-[64px] md:pb-[98px]">
      <div className="footer__inner">
        <div>
          <div className="logo h-56 w-56 relative inline-block mb-34 mt-60 md:mt-[76px]">
            <Image
              className="object-contain"
              src="/../public/logo3x.png"
              alt="logo"
              fill={true}
              quality={100}
            />
          </div>
          <div className="md:flex md:justify-between md:mb-[88px]">
            <ul className="menu leading-32.9 md:flex md:items-center md:gap-6">
              <li className="menu__link">
                <Link href="/projects">
                  <h4 className="text-m4 text-blue font-main">Projects</h4>
                </Link>
              </li>
              <li className="menu__link">
                <Link href="/services">
                  <h4 className="text-m4 text-blue font-main">Expertise</h4>
                </Link>
              </li>
              <li className="menu__link">
                <Link href="/studio">
                  <h4 className="text-m4 text-blue font-main">Studio</h4>
                </Link>
              </li>
              <li className="menu__link">
                <Link href="/thoughts">
                  <h4 className="text-m4 text-blue font-main">Thoughts</h4>
                </Link>
              </li>
              <li className="menu__link">
                <Link href="/contact">
                  <h4 className="text-m4 text-blue font-main">Contact</h4>
                </Link>
              </li>
            </ul>
            <div className="flex mt-56 items-center gap-12 md:mt-0 md:gap-10">
              <div className="social-media flex gap-17">
                <Icons />
              </div>
              <BackToTopButton />
            </div>
          </div>
          <div className="relative w-full h-25 bg-gradient-to-r from-grad-blue">
            <div className="w-full h-24 bg-grey-2 absolute top-0 left-0"></div>
          </div>
          <Copyright />
        </div>
      </div>
    </footer>
  );
}
