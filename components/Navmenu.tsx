import Link from "next/link";

export default function Navmenu() {
  return (
    <nav className="nav-menu pt-[14.2px] pb-[14.2px] flex items-center md:pt-[43px] md:pb-[43px]">
      <ul className="nav-menu__inner flex ml-13 overflow-x-auto [&::-webkit-scrollbar]:hidden">
        <li className="nav-menu__item mr-6">
          <Link href="/projects">
            <h5 className="text-m5 text-blue font-light font-labgrotesque-light leading-21.6 md:text-[20px] md:leading-6">
              Projects
            </h5>
          </Link>
        </li>
        <li className="nav-menu__item mr-6">
          <Link href="/services">
            <h5 className="text-m5 text-blue font-main leading-21.6 md:text-[20px] md:leading-6">
              Expertise
            </h5>
          </Link>
        </li>
        <li className="nav-menu__item mr-6">
          <Link href="/studio">
            <h5 className="text-m5 text-blue font-main leading-21.6 md:text-[20px] md:leading-6">
              Studio
            </h5>
          </Link>
        </li>
        <li className="nav-menu__item mr-6">
          <Link href="/thoughts">
            <h5 className="text-m5 text-blue font-main leading-21.6 md:text-[20px] md:leading-6">
              Thoughts
            </h5>
          </Link>
        </li>
        <li className="nav-menu__item mr-6 md:mr-0">
          <Link href="/contact">
            <h5 className="text-m5 text-blue font-main leading-21.6 md:text-[20px] md:leading-6">
              Contact
            </h5>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
