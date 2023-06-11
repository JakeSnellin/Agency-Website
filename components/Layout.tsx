import Footer from "./Footer";
import Topbar from "./Topbar";
import Navmenu from "./Navmenu";
import { useRouter } from "next/router";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  return (
    <>
      {router.pathname === "/thoughts/[slug]" ? (
        <div>
          {children}
          <Footer />
        </div>
      ) : router.pathname === "/projects/[slug]" ? (
        <div>
          {children}
          <Footer />
        </div>
      ) : (
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
      )}
    </>
  );
}
