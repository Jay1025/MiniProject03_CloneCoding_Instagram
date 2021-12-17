import React, { useEffect, useState } from "react";
import Modal from "./Posting";

import { useSelector, useDispatch } from "react-redux";
import { loadCommentDB } from "../../redux/comment";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { AiOutlineClose, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { IoMdPaperPlane } from "react-icons/io";
import { IoChatbubbleOutline } from "react-icons/io5";
import { RiBookmarkLine } from "react-icons/ri";

export default function Comment(props) {
  const [visible, setVisible] = useState(props.visible);
  const [like, setLike] = useState(false);

  const postId = props.postId;
  const imgUrl = props.imgUrl;

  const dispatch = useDispatch();

  console.log(postId);
  console.log(imgUrl);

  useEffect(() => {
    dispatch(loadCommentDB(postId));
  }, [dispatch]);

  const comments = useSelector((store) => store.comment.list);
  console.log(comments);

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
              •<Follow>팔로우</Follow>
              <MenuArea>
                <BsThreeDots size="20" />
              </MenuArea>
            </WriterInfo>

            <ContentArea>
              <Scroll>
                <Contents>
                  <div
                    style={{
                      position: "relative",
                      paddingLeft: "50px",
                      paddingTop: "20px",
                    }}
                  >
                    <Link to="/">
                      <PostTitle style={{ marginBottom: "10px" }}>
                        누군가의타이틀1
                      </PostTitle>
                    </Link>
                    123123123123123123121231231231231233123123123123
                    <ModifiedAt>X시간 전</ModifiedAt>
                    <PostTitleImgArea
                      style={{
                        position: "absolute",
                        top: "-10px",
                        left: "-10px",
                      }}
                    >
                      <PostTitleImg
                        src="https://icon-library.com/images/50x50-icon/50x50-icon-18.jpg"
                        alt="누군가의이미지123"
                      />
                    </PostTitleImgArea>
                  </div>

                  <Comments>
                    <PostTitle>누군가의타이틀</PostTitle>
                    <Commentna>
                      12123123121231231212312312123123121231231212312312123123
                      1212312312123123121231231212312312123123
                    </Commentna>
                    <CommentFooter>
                      <Link to="/">
                        <ModifiedAt>X시간 전</ModifiedAt>
                      </Link>
                      <Like>좋아요 X개</Like>
                      <ReComment>답글 달기</ReComment>
                    </CommentFooter>
                    <PostTitleImgArea
                      style={{
                        position: "absolute",
                        top: "-10px",
                        left: "-10px",
                      }}
                    >
                      <PostTitleImg
                        src="https://icon-library.com/images/50x50-icon/50x50-icon-18.jpg"
                        alt="누군가의이미지"
                      />
                    </PostTitleImgArea>
                    {(like && (
                      <AiFillHeart
                        size="13"
                        style={{
                          position: "absolute",
                          top: "0",
                          right: "10px",
                        }}
                        onClick={() => setLike(false)}
                        color="red"
                      />
                    )) || (
                      <AiOutlineHeart
                        size="13"
                        style={{
                          position: "absolute",
                          top: "0",
                          right: "10px",
                        }}
                        onClick={() => setLike(true)}
                      />
                    )}
                  </Comments>
                </Contents>
              </Scroll>
            </ContentArea>
            <RightFooter>
              <FooterMenu>
                {(like && (
                  <AiFillHeart
                    size="28"
                    style={{ margin: "8px" }}
                    onClick={() => setLike(false)}
                    color="red"
                  />
                )) || (
                  <AiOutlineHeart
                    size="28"
                    style={{ margin: "8px" }}
                    onClick={() => setLike(true)}
                  />
                )}

                <Link to="/">
                  <IoChatbubbleOutline size="28" style={{ margin: "8px" }} />
                </Link>
                <Link to="/direct">
                  <IoMdPaperPlane size="28" style={{ margin: "8px" }} />
                </Link>
                <Link to="/">
                  <RiBookmarkLine
                    size="28"
                    style={{ position: "absolute", top: "10px", right: "8px" }}
                  />
                </Link>
              </FooterMenu>
            </RightFooter>
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
  position: relative;
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
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`;

const MenuArea = styled.div`
  position: absolute;
  right: 10px;
  cursor: pointer;
`;

const ContentArea = styled.div`
  display: flex;
`;

const Contents = styled.div`
  word-break: break-all;
`;

const ModifiedAt = styled.div`
  font-size: 10px;
  color: #999;
  padding: 20px 0 40px;
`;

const Comments = styled.div`
  position: relative !important;
  padding-left: 50px;
`;

const Commentna = styled.div`
  margin-top: 5px;
`;

const CommentFooter = styled.div`
  display: flex;
`;

const Like = styled.div`
  font-size: 10px;
  color: #777;
  padding: 20px 0 40px 10px;
`;

const ReComment = styled.div`
  font-size: 10px;
  color: #777;
  padding: 20px 0 40px 10px;
`;

const Scroll = styled.div`
  width: 330px;
  margin-top: 25px;
  max-height: 400px;
  overflow: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
    width: 0 !important;
  }
`;

const RightFooter = styled.div``;

const FooterMenu = styled.div`
  padding: 8px;
  position: relative;
`;
