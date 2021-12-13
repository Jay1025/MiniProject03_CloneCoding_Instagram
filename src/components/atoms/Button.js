import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    text,
    _onClick,
    children,
    margin,
    width,
    padding,
    text_color,
    disabled,
    radius,
    bgColor,
    opacity,
    color,
    className,
    mainBtn,
  } = props;

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
    disabled: disabled,
    radius: radius,
    bgColor: bgColor,
    opacity: opacity,
    color: color,
    className: className,
  };
  if (mainBtn) {
    return (
      <React.Fragment>
        <MainBtn {...styles} onClick={_onClick}>
          {text ? text : children}
        </MainBtn>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>
        {text ? text : children}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text_color: false,
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  width: "100%",
  padding: "12px 0px",
  disabled: false,
  radius: false,
  bgColor: false,
  opacity: 1,
  color: "#ffffff",
  className: false,
};
//로그인, 회원가입화면 버튼
const MainBtn = styled.button`
  background-color: #0095f6;
  color: #ffffff;
  font-size: 14px;
  margin: 0px 40px 6px;
  padding: 5px 9px;
  width: 268px;
  height: 30px;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
`;

//---- 기본 return Button ----
const ElButton = styled.button`
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: none;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  position: ${(props) => (props.position ? `${props.position}` : "")};
  background-color: ${(props) => (props.bgColor ? `${props.bgColor}` : "")};
  ${(props) => (props.className ? `className: ${props.className}` : "")};
  cursor: pointer;
`;

export default Button;
