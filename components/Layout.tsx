import Footer from "./Footer";
import Topbar from "./Topbar";
import Navmenu from "./Navmenu";
import { useRouter } from "next/router";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  const conditionallyCheckForLayout = () => {
    switch (router.pathname) {
      case "/thoughts/[slug]":
        return (
          <div>
            {children} <Footer />
          </div>
        );
      case "/projects/[slug]":
        return (
          <div>
            {children} <Footer />
          </div>
        );
      default:
        return (
          <div className="content">
            <Topbar>
              <Navmenu />
            </Topbar>
            <div className="block md:hidden">
              <Navmenu />
            </div>
            {children}
            <Footer />
          </div>
        );
    }
  };
  return <div>{conditionallyCheckForLayout()}</div>;
}
