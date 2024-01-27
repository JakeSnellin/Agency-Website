import React from "react";

import Image from "next/image";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ children, onClose }: ModalProps) {
  return (
    <div>
      <button
        className="fixed top-[23px] right-[16px] z-50 md:top-11 md:right-16"
        onClick={onClose}
      >
        <div className="relative h-[53px] w-[53px] md:h-[80px] md:w-[80px]">
          <Image
            src="/../public/close_button.png"
            alt="button close"
            fill={true}
          ></Image>
        </div>
      </button>
      {children}
    </div>
  );
}
