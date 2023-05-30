import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer bg-dark-grey h-579">
      <div className="footer__inner">
        <div className="ml-8 mr-8">
          <div className="logo h-56 w-56 relative inline-block mb-34 mt-60">
            <Image
              className="object-contain"
              src="/../public/logo3x.png"
              alt="logo"
              fill={true}
              quality={100}
            />
          </div>
          <ul className="menu leading-32.9">
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
          <div>
            <div className="flex mt-56 items-center gap-12">
              <div className="social-media flex gap-5">
                <div className="w-8 h-8 relative flex items-center justify-center">
                  <Image
                    className="object-contain"
                    src="/../public/ellipse.png"
                    alt="ellipse"
                    fill={true}
                    quality={100}
                  />
                  <a
                    href="#"
                    className="social-media__icon w-3 h-3 absolute inline-block"
                    id="instagram"
                  >
                    <Image
                      className="object-contain"
                      src="/../public/insta_icon3x.png"
                      alt="instagram icon"
                      fill={true}
                      quality={100}
                    />
                  </a>
                </div>
                <div className="w-8 h-8 relative flex items-center justify-center">
                  <Image
                    src="/../public/ellipse.png"
                    alt="ellipse"
                    fill={true}
                    quality={100}
                  />
                  <a
                    href="#"
                    className="social-media__icon w-3 h-3 relative inline-block"
                    id="linkedIn"
                  >
                    <Image
                      src="/../public/indesign_icon3x.png"
                      alt="linkedIn icon"
                      fill={true}
                      quality={100}
                    />
                  </a>
                </div>
              </div>
              <div className="return-container">
                <Link href="#" className="return-container__link">
                  <p className="text-cream font-light font-main leading-24 text-m4">
                    Back to top
                  </p>
                </Link>
                <div className="return-container__icon"></div>
              </div>
            </div>
            <div className="relative w-full h-25 bg-gradient-to-r from-grad-blue">
              <div className="w-full h-24 bg-dark-grey absolute top-0 left-0"></div>
            </div>
          </div>
        </div>
        <div className="mr-16 ml-8 leading-24">
          <div className="copyright-notice">
            <p className="text-m-caption text-grey font-main mt-5 ">
              © 2022 Lowein-Levy Ltd. All rights reserved.
            </p>
          </div>
          <ul className="legal flex mt-5 mb-71">
            <li className="legal__terms">
              <Link href="/terms">
                <p className="text-m-caption text-grey font-main mr-5">Terms</p>
              </Link>
            </li>
            <li className="legal__privacy">
              <Link href="/privacy">
                <p className="text-m-caption text-grey font-main mr-5">
                  Privacy
                </p>
              </Link>
            </li>
            <li className="legal__cookies">
              <Link href="/cookies">
                <p className="text-m-caption text-grey font-main">Cookies</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
