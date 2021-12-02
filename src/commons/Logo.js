import { Typography } from "antd";
import React from "react";

export default function Logo() {
  const { Title } = Typography;
  return (
    <div className="flex">
      <Title level={2}>
        <span style={{ color: "#97d165" }}>አ</span>
        <span style={{ color: "#fc9491" }}>ፋ</span>
      </Title>
    </div>
  );
}
