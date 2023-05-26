import Footer from "./Footer";
import Topbar from "./Topbar";
import Navmenu from "./Navmenu";

type LayoutProps = {
    children: React.ReactNode,
  };

export default function Layout({ children }: LayoutProps ) {
    return (
      <div className="content" >
        <Topbar />
        <Navmenu />
          { children }
        <Footer />
      </div>
    );
  }