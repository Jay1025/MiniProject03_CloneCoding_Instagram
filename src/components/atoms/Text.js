import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const {
    bold,
    color,
    size,
    children,
    margin,
    className,
    align,
    link,
    span,
    padding,
    _onClick,
    profileText,
  } = props;

  const styles = {
    bold: bold,
    color: color,
    size: size,
    margin: margin,
    className: className,
    align: align,
    link: link,
    span: span,
    padding: padding,
  };
  if (link) {
    return (
      <A {...styles} onClick={_onClick}>
        {children}
      </A>
    );
  }
  if (span) {
    return <Span>{children}</Span>;
  }

  if (profileText) {
    return <Protext>{children}</Protext>;
  }

  return <P {...styles}>{children}</P>;
};

Text.defaultProps = {
  children: null,
  _onClick: () => {},
};

const A = styled.a`
  color: #0095f6;
  font-weight: 600;
  margin: ${(props) => props.margin};
  cursor: pointer;
`;

const Span = styled.span`
  padding: 0 5px;
  color: #8e8e8e;
  size: 12px;
`;

const Protext = styled.div`
  color: #262626;
  font-size: 16px;
  font-weight: 600;
  margin-right: 45px;
`;

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  margin: ${(props) => props.margin};
  ${(props) => (props.className ? `className: ${props.className};` : "")}
  ${(props) => (props.align ? `text-align: ${props.align};` : "")}
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
`;
export default Text;
