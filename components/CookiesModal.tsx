import React from "react";
import { useEffect } from "react";
import ReactPortal from "./ReactPortal";
import Button from "./Button";

interface CookieModalProps {
  handleClose: (e: any) => void;
  isOpen: boolean;
}

export default function CookiesModal({
  handleClose,
  isOpen,
}: CookieModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return (): void => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!isOpen) return null;

  return (
    <>
      <ReactPortal wrapperId={"react-portal-modal-container"}>
        <div className="fixed top-0 left-0 w-screen h-screen z-0 opacity-60 bg-black"></div>
        <div className="fixed desktop:bottom-[97px] desktop:top-auto desktop:inset-auto desktop:right-[60px] flex top-[140px] bottom-[91px] inset-x-6 overflow-hidden flex-col min-w-fit min-h-fit desktop:min-w-[676px] desktop:w-[676px] bg-cream text-black rounded-1.25 pt-[39px] desktop:pt-[68px] desktop:pb-[74px] desktop:pl-[72px] desktop:pr-[116px] pb-[31px] pl-[25px] pr-[20px]">
          <h2 className="leading-31.5 desktop:text-h2 text-black font-labgrotesque-light font-250 mb-3 desktop:mb-4">
            We use cookies
          </h2>
          <p className="text-body leading-24 font-labgrotesque-light font-250 mb-4 desktop:mb-6">
            Privacy – unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta su.
          </p>
          <div className="flex flex-col desktop:flex-row desktop:gap-[6px] text-h5">
            <div>
              <Button
                className={
                  "desktop:px-5 desktop:py-[10px] px-[51px] py-[10px] text-center mb-3 desktop:mb-0 rounded-3xl border-black border-[1px]"
                }
                onClick={(e: any) => handleClose(e)}
              >
                Accept Cookies
              </Button>
            </div>
            <div>
              <Button
                className={
                  "desktop:px-5 desktop:py-[10px] px-[51px] py-[10px] text-center mb-3 desktop:mb-0 rounded-3xl border-black border-[1px]"
                }
                onClick={(e: any) => handleClose(e)}
              >
                Reject Cookies
              </Button>
            </div>
          </div>
        </div>
      </ReactPortal>
    </>
  );
}
