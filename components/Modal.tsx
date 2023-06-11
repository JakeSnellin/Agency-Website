import React, { useEffect } from "react";

import Image from "next/image";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ children, onClose }: ModalProps) {
  return (
    <div>
      <button
        className="absolute top-[23px] right-[16px] z-50"
        onClick={onClose}
      >
        <div className="relative h-[53px] w-[53px]">
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
