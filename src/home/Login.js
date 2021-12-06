import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";
import { API_AUTH_URL } from "../config/Variable";
import axios from "axios";
import "./style.css";
import { useHistory } from "react-router-dom";
import { set } from "../TokenService";
export default function Login() {
  const [loginForm] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();

  const onLogin = (values) => {
    setLoading(true);
    setMessage("");
    const username = values.email;
    const passwords = values.password;
    const formData = JSON.stringify({ email: username, password: passwords });

    axios
      .post(`${API_AUTH_URL}login`, formData, {
        headers: {
          "content-type": "Application/json",
        },
        timeout: 1000 * 5,
      })
      .then((response) => {
        if (response.status === 200) {
          setLoading(false);
          set(response.data.token);
          history.push("/auth");
        }
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
        console.log(error.response.status);
        if (error.response.status === 401) {
          setMessage(
            "በዚህ የኢሜይል አድራሻ የተመዘገበ ሰው የለም። እባክዎ መልሰው ይሞክሩ ወይም እንዲመዘገቡ የነገረዎትን ሰው ደግሞ ያናግሩት።እናመሰግናለን"
          );
          setLoading(false);
        }
      });
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
        <span className="error">{message}</span>
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
