import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.less";

export default function AuthDashboard() {
  const { Header, Sider, Content, Footer } = Layout;
  return (
    <Layout>
      <Sider>
        <div
          className="flex h-fullf"
          style={{ height: "100vh", background: "red" }}
        ></div>
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
}
