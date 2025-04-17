import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.style.css";
import { useNavigate } from "react-router-dom";
import loginStore from "../../stores/loginStore";

const Login = () => {

    const {login} = loginStore();
  const navigate = useNavigate();

  const loginUser = (event) => {
    event.preventDefault();
    login();
    navigate("/");
  };

  return (
    <div className="login-container">
      <Form className="login-area" onSubmit={(event) => loginUser(event)}>
        <h1 className="login-title">환영합니다</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="이메일 주소" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="비밀번호" />
        </Form.Group>
        <Form.Text className="text-muted" style={{ cursor: "pointer" }}>
          비밀번호를 잊으셨나요?
        </Form.Text>
        <Button
          className="login-button"
          variant="secondary"
          type="submit"
        >
          로그인
        </Button>
      </Form>
    </div>
  );
};

export default Login;
