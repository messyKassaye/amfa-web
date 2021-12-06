import { Typography } from "antd";
import React from "react";

export default function AppTitle() {
  const { Title } = Typography;
  return (
    <Title level={4} style={{ color: "white" }}>
      Home
    </Title>
  );
}
