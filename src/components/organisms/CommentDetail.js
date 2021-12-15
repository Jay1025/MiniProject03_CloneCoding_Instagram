import React, { useState } from "react";
import Modal from "./Posting";

import styled from "styled-components";
import { Link } from "react-router-dom";

import { AiOutlineClose } from "react-icons/ai";

export default function Comment(props) {
  const [visible, setVisible] = useState(props.visible);

  return (
    <>
      <Modal visible={visible} maxWidth="900px" outline="none">
        <ModalArea>
          <LeftArea>
            <Img
              src="https://www.pinclipart.com/picdir/big/194-1948210_open-jpg-100x100-pixels-clipart.png"
              alt="detailImg"
            />
          </LeftArea>
          <RightArea>
            <WriterInfo>
              <Link to="/">
                <PostTitleImgArea>
                  <PostTitleImg
                    src="https://icon-library.com/images/50x50-icon/50x50-icon-18.jpg"
                    alt="누군가의이미지"
                  />
                </PostTitleImgArea>
              </Link>
              <Link to="/">
                <PostTitle>누군가의타이틀</PostTitle>
              </Link>
              •<Follow>asd</Follow>
            </WriterInfo>

            <ContentArea>
              <PostTitleImgArea>
                <PostTitleImg
                  src="https://icon-library.com/images/50x50-icon/50x50-icon-18.jpg"
                  alt="누군가의이미지"
                />
              </PostTitleImgArea>
              <Link to="/">
                <PostTitle>누군가의타이틀</PostTitle>
              </Link>
            </ContentArea>
          </RightArea>
        </ModalArea>
      </Modal>
    </>
  );
}

const ModalArea = styled.div`
  @media (min-width: 600px) {
    display: flex;
    box-sizing: border-box;
  }
  /* @media (width < 600) {
    display: block;
  } */
`;

const LeftArea = styled.div`
  width: 70%;
  max-width: 600px;
`;

const Img = styled.img`
  width: 100%;
  max-width: 600px;
`;

const RightArea = styled.div`
  width: 30%;
  min-width: 344px;
`;

const WriterInfo = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #999;
`;

const PostTitleImgArea = styled.div`
  width: 39px;
  height: 39px;
  border: 2px solid transparent;
  border-radius: 100%;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right, #f7d358, #f781be, #df01d7);
  background-origin: border-box;
  background-clip: content-box, border-box;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 16px;
  cursor: pointer;
`;

const PostTitleImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 100%;
`;

const PostTitle = styled.div`
  font-weight: bold;
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const Follow = styled.div`
  margin-left: 5px;
`;

const ContentArea = styled.div`
  display: flex;
  align-items: center;
`;
