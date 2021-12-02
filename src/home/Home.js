import React from "react";
import Logo from "../commons/Logo";
import Slogan from "../commons/Slogan";
import Login from "./Login";
import LoginSidebar from "./LoginSidebar";
import "./style.css";
export default function Home() {
  return (
    <div className="w-full h-screen flex flex-row items-stretch">
      <div className="hidden md:block w-2/5 login-container">
        <LoginSidebar />
      </div>
      <div className="md:w-3/5 w-full">
        <div className="h-full">
          <div className="standardList  flex flex-wrap md:justify-center justify-center md:items-center items-start bg-no-repeat h-screen">
            <div className="relative mx-6 md:mx-auto w-full md:w-1/2 lg:w-96 z-20 mt-8 md:mt-0">
              <div className="md:hidden block flex justify-center items-center">
                <Logo />
              </div>
              <span className="flex justify-center font-medium text-gray-900 md:text-2xl text-lg text-center">
                ወደ አካውንትዎ ይግቡ።
              </span>
              <div className="md:mt-10 mt-2">
                <Login />
              </div>
              <div className="md:hidden block mt-20">
                <Slogan color="black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
