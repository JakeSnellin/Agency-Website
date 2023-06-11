import React from "react";
import Link from "next/link";

export default function Copyright() {
  return (
    <div className="leading-24 md:flex md:justify-between">
      <p className="text-m-caption text-grey-6 font-main mt-5">
        © 2022 Lowein-Levy Ltd. All rights reserved.
      </p>
      <ul className="legal flex mt-5">
        <li className="legal__terms">
          <Link href="/terms">
            <p className="text-m-caption text-grey-6 font-main mr-5">Terms</p>
          </Link>
        </li>
        <li className="legal__privacy">
          <Link href="/privacy">
            <p className="text-m-caption text-grey-6 font-main mr-5">Privacy</p>
          </Link>
        </li>
        <li className="legal__cookies">
          <Link href="/cookies">
            <p className="text-m-caption text-grey-6 font-main">Cookies</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
