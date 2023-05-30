import React from "react";

export default function Hero() {
  return (
    <div className="mt-53 mr-35 ml-30 mb-62 flex">
      <div className="mt-1 w-21 h-40 shrink-0 bg-gradient-to-b from-grad-orange relative">
        <div className="w-5 h-40 bg-black absolute top-0 right-0"></div>
      </div>
      <div className="leading-31.5">
        <h2 className="text-m2 font-250 text-orange font-main">
          Lowein-Levy design & consultancy
        </h2>
        <h2 className="text-m2 text-blue font-250 font-main">
          Build your digital product, design your brand identity, print your
          brochure.
        </h2>
      </div>
    </div>
  );
}
