import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import "./SignUp.css";


function SignUp() {
  const selectList = ["", "devrock.co.kr", "naver.com", "google.com"];
  const [option, setOption] = useState("");
  const mailChange = (e) => {
    setOption(e.target.value);
  }
  const [value, setValue] = useState({
    id1: "",
    pw: "",
    pwCheck: "",
    email: "",
  });
  let { id1, pw, pwCheck, email} = value;
  const onChange = (e) => {
    const { name, value } = e.target;
    setValue({
      ...value,
      [name]: value,
    });
  };
  const onReset = () => {
    setValue({
      id1: "",
      pw: "",
      pwCheck: "",
      email: "",
    });
    setOption("");
  };
  useEffect(()=>{
    
  },[value])
  const onClick = () => {

  }
  return (
    <div className="signup_wrap">
      <h1>회원가입</h1>
      <div className="input_wrap2">
        <div className="input_button">
          <Input
            label="ID"
            name="id1"
            type="text"
            value={value.id1}
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
          <Input
            label="PW"
            name="pw"
            type="password"
            value={value.pw}
            onChange={onChange}
          />
        </div>
        <div className="interval">
          <Input
            label="PW체크"
            name="pwCheck"
            type="password"
            value={value.pwCheck}
            onChange={onChange}
          />
        </div>
        <div className="email_wrap">
          <Input
            label="Email"
            name="email"
            type="text"
            value={value.email}
            onChange={onChange}
          />
          <span className="symbols">@</span>
          <select onChange={mailChange} className="select" name="option" value={option}>
            {selectList.map((item)=>(
              <option value={item} key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="button_wrap2">
        <Button
          onClick={onClick}
          padding="8px 34px"
          background="skyblue"
        >
          가입하기
        </Button>
        <Button onClick={onReset} background="slategrey">
          초기화
        </Button>
      </div>
      <div>
        <p>ID : {id1}</p>
        <p>비밀번호 : {pw}</p>
        <p>비밀번호 확인 : {pwCheck}</p>
        <p>email : {email} @{option}</p>
      </div>
    </div>
  );
}

export default SignUp;
