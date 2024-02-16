import React, { useEffect } from "react";
import { useState } from "react";
import useScrollPosition from "../hooks/useScrollPosition";

export default function ProgressBar() {
  const scrollPosition = useScrollPosition();
  const [width, setWidth] = useState<number | null>(0);

  useEffect(() => {
    let scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );

    let offsetHeight = scrollHeight - window.innerHeight;

    const percentageScrolled = scrollPosition
      ? (scrollPosition / offsetHeight) * 100
      : 0;

    setWidth(percentageScrolled);
  }, [scrollPosition]);

  return (
    <div
      style={{ width: width?.toString() + "%" }}
      className="h-1 bg-orange fixed z-[100]"
    ></div>
  );
}
