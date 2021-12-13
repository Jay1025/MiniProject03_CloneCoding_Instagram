import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { bold, color, size, children, margin, className, align, link } = props;

  const styles = {
    bold: bold,
    color: color,
    size: size,
    margin: margin,
    className: className,
    align: align,
    link: link,
  };
  if (link) {
    return <A {...styles}>{children}</A>;
  }

  return <P {...styles}>{children}</P>;
};

Text.defaultProps = {
  children: null,
  className: false,
  align: false,
};

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  margin: ${(props) => props.margin};
  ${(props) => (props.className ? `className: ${props.className};` : "")}
  ${(props) => (props.align ? `text-align: ${props.align};` : "")}
`;

const A = styled.a`
  color: #0095f6;
  margin: ${(props) => props.margin};
  cursor: pointer;
`;

export default Text;
