import React, { useState } from "react";
import Modal from "./Posting";

import styled from "styled-components";

import { AiOutlineClose } from "react-icons/ai";

export default function Comment(props) {
  const [visible, setVisible] = useState(props.visible);

  return (
    <>
      <Modal visible={visible} width="90%" maxWidth="800px" outline="none">
        <ModalArea>
          <LeftArea></LeftArea>
          <RightArea></RightArea>
        </ModalArea>
      </Modal>
    </>
  );
}

const ModalArea = styled.div``;

const LeftArea = styled.div``;

const RightArea = styled.div``;
