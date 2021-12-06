import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.less";
import "./style.css";
import AuthRoute from "./AuthRoute";
import AppHeader from "./components/AppHeader";
export default function AuthDashboard() {
  const { Header, Sider, Content, Footer } = Layout;
  return (
    <>
      <div className="hidden md:block">
        <Layout>
          <Sider>
            <div className="flex h-full side-nav"></div>
          </Sider>
          <Layout>
            <AppHeader />
            <Content>
              <AuthRoute />
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>

      <div className="block md:hidden">
        <Layout>
          <AppHeader />
          <Content>
            <AuthRoute />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    </>
  );
}
