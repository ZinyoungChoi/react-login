import React from "react";
import "./Input.css";

function Input({ type, label, name, value, onChange}) {
  return (
    <div className="input_wrap">
      <label className="label">
        {label}
        <input
          className="input"
          id={`input_${name}`}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default Input;
