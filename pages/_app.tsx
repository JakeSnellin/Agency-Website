import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useRef } from "react";
import { memo } from "react";

const ROUTES_TO_RETAIN = ["/thoughts", "/projects", "/"];

interface IRefObj {
  [key: string]: {
    component: {};
    scrollPos: number;
  };
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const ref = useRef<IRefObj>({});

  type ObjectKey = keyof typeof ref.current;

  const objKey: ObjectKey = router.asPath as ObjectKey;

  const isRoute = ROUTES_TO_RETAIN.includes(router.asPath);

  if (isRoute && !ref.current?.hasOwnProperty(router.asPath)) {
    const MemoComponent = memo(Component);
    let refObj: IRefObj = {
      [router.asPath]: {
        component: <MemoComponent {...pageProps} />,
        scrollPos: 0,
      },
    };
    ref.current = refObj;
  }

  const handleRouteChangeStart = (url: string) => {
    if (isRoute) {
      ref.current[objKey]["scrollPos"] = window.scrollY;
      console.log(ref.current[objKey]["scrollPos"]);
    }
  };

  useEffect(() => {
    router.events.on("routeChangeStart", handleRouteChangeStart);
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
    };
  }, [router.asPath]);

  useEffect(() => {
    if (isRoute) {
      window.scrollTo(0, ref.current[objKey]["scrollPos"]);
    }
  }, [Component, pageProps]);

  return (
    <>
      <Layout>
        <div>
          <div style={{ display: isRoute ? "block" : "none" }}>
            {Object.entries(ref.current).map(([path, c]) => (
              <div
                key={path}
                style={{ display: router.asPath === path ? "block" : "none" }}
              >
                {c.component as ReactNode}
              </div>
            ))}
          </div>
          {!isRoute && <Component {...pageProps} />}
        </div>
      </Layout>
    </>
  );
}
