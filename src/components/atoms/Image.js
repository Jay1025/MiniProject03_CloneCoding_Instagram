import styled from "styled-components";
import React from "react";

const Image = (props) => {
  const { shape, src, size, height, width, margin } = props;

  const styles = {
    src: src,
    size: size,
    width: width,
    height: height,
    margin: margin,
  };

  if (shape === "circle") {
    return <ImageCircle {...styles} />;
  }

  if (shape === "rectangle") {
    return (
      <AspectOutter>
        <AspectInner {...styles} />
      </AspectOutter>
    );
  }

  return <React.Fragment></React.Fragment>;
};

Image.defaultProps = {
  shape: "circle",
  src: "",
  size: 36,
  margin: false,
};

const AspectOutter = styled.div`
  width: ${(props) => props.width};
  min-width: 250px;
`;

const AspectInner = styled.div`
  position: relative;
  overflow: hidden;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  ${(props) => (props.src ? `background-image: url(${props.src});` : "")}
  background-size: cover;
`;

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  ${(props) => (props.src ? `background-image: url(${props.src});` : "")}
  background-size: cover;
`;

export default Image;
