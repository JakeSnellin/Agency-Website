import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { setCookie } from "cookies-next";

export default function CookiesModal() {
  const [showConsent, setShowConsent] = useState<boolean>(true);

  const handleClose = (label: any) => {
    localStorage.setItem("seenPopUp", "true");
    label === "Yes" ? setCookie("cookie", "true", { maxAge: 31536000 }) : null;
  };

  // // the useEffect to trigger on first render and check if in the localStorage we already have data about user seen and closed the pop-up
  useEffect(() => {
    //   // getting value of "seenPopUp" key from localStorage
    let returningUser = localStorage.getItem("seenPopUp");
    //   // if it's not there, for a new user, it will be null
    //   // if it's there it will be boolean true
    //   // setting the opposite to state, false for returning user, true for a new user
    if (returningUser !== null) {
      setShowConsent(!JSON.parse(returningUser) === true);
    }
  }, []);

  return (
    <div className="w-100 h-100">
      <button onClick={handleClose} />
    </div>
  );
}
