import React from "react";
import "../style.css";
import MobileHeader from "./device/MobileHeader";
import DesktopHeader from "./device/DesktopHeader";
export default function AppHeader() {
  return (
    <>
      <div className="block md:hidden">
        <MobileHeader />
      </div>

      <div className="hidden md:block">
        <DesktopHeader />
      </div>
    </>
  );
}
