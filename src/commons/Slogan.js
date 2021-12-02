import React from "react";
import "../home/style.css";
export default function Slogan({ color }) {
  return (
    <span
      className="font-medium text-lg md:text-4xl md:text-3xl flex md:justify-start justify-center"
      style={{
        color: `${color}`,
      }}
    >
      ታላቅ ነበር፣ ታላቅም እንሆናለን
    </span>
  );
}
