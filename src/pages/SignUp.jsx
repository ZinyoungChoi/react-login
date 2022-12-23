import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import "./SignUp.css";

function SignUp() {

  const [value, setValue] = useState({
    id1: "",
    pw: "",
    pwCheck: "",
    email: "",
    emailSelect: "",
  });
  const {id1, pw, pwCheck, email, emailSelect} = value;
  const onChange = (e) => {
    const { name, value } = e.target;
    setValue({
      ...value,
      [name]: value,
    });
  }
  const onReset = () => {
    setValue({
      id1: "",
      pw: "",
      pwCheck: "",
      email: "",
      emailSelect: "",
    });
  };
  return (
    <div className="signup_wrap">
      <h1>회원가입</h1>
      <div className="input_wrap2">
        <div className="input_button">
          <Input
            label="ID"
            name="id1"
            type="text"
            value={id1}
            onChange={onChange}
          />
          <Button
            onClick={() => alert("사용중인 아이디입니다")}
            background="red"
            font="0.8rem"
            padding="8px 20px"
          >
            중복체크
          </Button>
        </div>
        <div className="interval">
          <Input label="PW" name="pw" type="password" value={pw} onChange={onChange} />
        </div>
        <div className="interval">
          <Input
            label="PW체크"
            name="pwcheck"
            type="password"
            value={pwCheck}
            onChange={onChange}
          />
        </div>
        <div className="email_wrap">
          <Input label="Email" name="email" type="text" value={email} onChange={onChange} />
          <span className="symbols">@</span>
          <select className="select">
            <option value={emailSelect}> </option>
            <option value="devrock.co.kr">devrock.co.kr</option>
            <option value="naver.com">naver.com</option>
            <option value="gmail.com">gmail.com</option>
          </select>
        </div>
      </div>
      <div className="button_wrap2">
        <Button
          onClick={() => alert("반갑습니다")}
          padding="8px 34px"
          background="skyblue"
        >
          가입하기
        </Button>
        <Button onClick={onReset} background="slategrey">초기화</Button>
      </div>
    </div>
  );
}

export default SignUp;