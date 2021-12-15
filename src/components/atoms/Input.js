import React from "react";
import styled from "styled-components";
import Text from "./Text";

const Input = (props) => {
  const {
    label,
    placeholder,
    _onChange,
    type,
    margin,
    height,
    width,
    padding,
    _value,
    main_input,
  } = props;

  if (main_input) {
    return (
      <React.Fragment>
        <MainInput placeholder={placeholder} onChange={_onChange}></MainInput>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Text>{label}</Text>
      <ElInput
        placeholder={placeholder}
        onChange={_onChange}
        type={type}
        id={type}
        margin={margin}
        width={width}
        height={height}
        value={_value}
        padding={padding}
      />
    </React.Fragment>
  );
};

Input.defaultProps = {
  width: "100%",
  label: false,
  placeholder: false,
  _onChange: false,
  margin: false,
};

const ElInput = styled.input`
  border: 1px solid #87cefa;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  margin: ${(props) => props.margin};
`;

const MainInput = styled.input`
  margin: 0px -30px 6px 40px;
  padding: 9px 0 7px 8px;
  width: 268px;
  height: 36px;
  border-radius: 4px;
  background: #fafafa;
  text-overflow: ellipsis;
  border: 1px solid #dbdbdb;
`;
export default Input;
