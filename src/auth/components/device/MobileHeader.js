import React from "react";
import Logo from "../../../commons/Logo";
import { Icon } from "@iconify/react";
import "../../style.css";
import AppTitle from "../widgets/AppTitle";
export default function MobileHeader() {
  return (
    <div className="w-full p-2 flex items-center justify-between  header">
      <Logo />
      <AppTitle />
      <Icon fontSize={25} icon="ant-design:menu-outlined" color="white" />
    </div>
  );
}
