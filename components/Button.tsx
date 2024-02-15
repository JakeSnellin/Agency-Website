import React from "react";

export default function Button({
  onClick,
  children,
  className,
}: {
  onClick: any;
  children: React.ReactNode;
  className: string;
}) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
