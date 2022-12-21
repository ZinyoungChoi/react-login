import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";

function Login(props) {
  return (
    <div>
      <Input label="ID" name="id" autoFocus={true} type="password" />
      <div>
        <Button background="orange">로그인</Button>
        <Button background="lightgreen" margin="20px">
          회원가입
        </Button>
      </div>
    </div>
  );
}

export default Login;
