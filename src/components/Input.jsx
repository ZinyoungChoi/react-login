import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "./Input.css";
class Input extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      isInputError: false,
      isFirstFocus: false,
    };

    this.setRef = this.setRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  setRef(ref) {
    this.ref = ref;
  }

  handleChange(e) {
    const { name, onChange } = this.props;
    console.log(
      `handleChange() name : ${name} , e.target.value : ${e.target.value}`
    );

    let checkError = false;

    this.setState({ isInputError: checkError, value: e.target.value });

    onChange(name, e.target.value);
  }

  handleFocus(e) {
    const { name, onFocus } = this.props;
    console.log(
      `handleFocus() name : ${name} , e.target.value : ${e.target.value}`
    );
    if (this.state.isFirstFocus === false) {
      console.log(
        `First on focus -> name : ${name} , e.target.value : ${e.target.value}`
      );
      this.setState({ isFirstFocus: true });
    }

    onFocus(name, e.target.value);
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      this.ref.focus();
    }
  }
  

  render() {
    const { label, name, type, errorMessage } = this.props;
    return (
      <div className="input_wrap">
        <label className="label">
          {label}
          <input
            className="input"
            id={`input_${name}`}
            value={this.state.value}
            type={type}
            ref={this.setRef}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
          />
          {this.state.isInputError && errorMessage}
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  type: PropTypes.oneOf(["text", "password"]),
  autoFocus: PropTypes.bool,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
};

Input.defaultProps = {
  value: "",
  type: "text",
  autoFocus: false,
  onChange: () => {},
  onFocus: () => {},
};

export default Input;
