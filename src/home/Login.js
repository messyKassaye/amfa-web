import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";
export default function Login() {
  const [loginForm] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onLogin = (values) => {
    setLoading(true);
    setMessage("");
    const username = values.email;
    const password = values.password;
  };
  return (
    <Form
      className={"w-full"}
      form={loginForm}
      layout="vertical"
      onFinish={onLogin}
      requiredMark={false}
    >
      <div className="mb-2">
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "ትክክለኛ የኢሜይል አካውንትዎን ያስገቡ.",
            },
          ]}
        >
          <Input
            autoComplete="email"
            type="email"
            placeholder={"ኢሜይል"}
            name="email"
          />
        </Form.Item>
      </div>

      <div className="mb-2">
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "ትክክለኛ የይለፍ ቃልዎን ያስገቡ",
            },
          ]}
        >
          <Input type={"password"} placeholder="የይለፍ ቃል" name="password" />
        </Form.Item>
      </div>

      <div className="mt-10 text-center">
        <Button
          id="submit"
          type="primary"
          htmlType="submit"
          className="w-full flex justify-center space-x-3"
          loading={loading ? true : false}
        >
          ይግቡ
        </Button>
      </div>
    </Form>
  );
}
