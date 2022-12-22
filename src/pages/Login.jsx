import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login(props) {
  const navigate = useNavigate();
  return (
    <div className="login_wrap">
      <h1>로그인</h1>
      <div className="input_wrap1">
        <div className="input_1">
          <Input label="ID" name="id" autoFocus={true} type="text" />
        </div>
        <Input label="PW" name="pw" type="password" />
      </div>
      <div className="button_wrap">
        <Button
          onClick={() => alert("로그인하시겠습니까?")}
          background="orange"
        >
          로그인
        </Button>
        <Button onClick={() => navigate("/signup")} background="lightgreen">
          회원가입
        </Button>
      </div>
    </div>
  );
}

export default Login;
