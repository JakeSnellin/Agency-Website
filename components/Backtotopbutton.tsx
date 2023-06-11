import React from "react";

interface IBackToTopButtonProps {}

const isBrowser = () => typeof window !== "undefined";

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function BackToTopButton() {
  return (
    <button
      onClick={scrollToTop}
      className="return-container flex items-center gap-2"
    >
      <div>
        <p className="text-cream font-light font-main leading-24 text-m4">
          Back to top
        </p>
      </div>
      <div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
            />
          </svg>
        </div>
      </div>
    </button>
  );
}
