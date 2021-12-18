import React, { useEffect, useState } from "react";
import Modal from "./Posting";

import { useSelector, useDispatch } from "react-redux";
import { loadCommentDB, addCommentDB } from "../../redux/comment";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { addLikeDB, delLikeDB } from "../../redux/like";

import { AiOutlineClose, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { IoMdPaperPlane } from "react-icons/io";
import { IoChatbubbleOutline } from "react-icons/io5";
import { RiBookmarkLine } from "react-icons/ri";
import { CgSmile } from "react-icons/cg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper";

export default function Comment(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCommentDB(postId));
  }, []);

  const [visible, setVisible] = useState(props.visible);
  const [like, setLike] = useState(false);
  const [hasComment, setHasComment] = useState("");

  const postId = props.postId;
  const imgUrl = props.imgUrl;
  // const img = imgUrl.split(",");
  const postUsername = props.postUsername;
  const postProfileUrl = props.postProfileUrl;
  const postContent = props.postContent;
  const postCreatedAt = props.postCreatedAt;
  let postNumOfLikes = props.postNumOfLikes;

  const comments = useSelector((store) => store.comment.list);

  const changeComment = (e) => {
    setHasComment(e.target.value);
  };

  const addComment = (postId) => {
    dispatch(addCommentDB(postId, hasComment));
  };

  const addLike = () => {
    // setLike(true);
    setLike(true);
    addLikeDB(postId);
  };

  const delLike = () => {
    setLike(false);
    addLikeDB(postId);
  };
  SwiperCore.use([Navigation, Pagination]);

  const swiperParams = {
    navigation: true,
    pagination: true,
  };

  return (
    <>
      <Modal visible={visible} maxWidth="900px" outline="none">
        <ModalArea>
          <Swiper {...swiperParams}>
            <LeftArea>
              {imgUrl.map((img, key) => {
                return (
                  <SwiperSlide
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Img src={img} alt="detailImg" />
                  </SwiperSlide>
                );
              })}
            </LeftArea>
          </Swiper>
          <RightArea>
            <WriterInfo>
              <Link to="/">
                <PostTitleImgArea>
                  <PostTitleImg src={postProfileUrl} alt="누군가의이미지" />
                </PostTitleImgArea>
              </Link>
              <Link to="/">
                <PostTitle>{postUsername}</PostTitle>
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
                        {postUsername}
                      </PostTitle>
                    </Link>
                    {postContent &&
                      postContent.split("\n").map((content, index) => {
                        return <div key={index}>{content}</div>;
                      })}
                    <ModifiedAt>{postCreatedAt}</ModifiedAt>
                    <PostTitleImgArea
                      style={{
                        position: "absolute",
                        top: "-10px",
                        left: "-10px",
                      }}
                    >
                      <PostTitleImg
                        src={postProfileUrl}
                        alt="누군가의이미지123"
                      />
                    </PostTitleImgArea>
                  </div>
                  {comments &&
                    comments.map((comment, key) => {
                      return (
                        <Comments>
                          <PostTitle>{comment.username}</PostTitle>
                          <Commentna>
                            {comment.content &&
                              comment.content
                                .split("\n")
                                .map((content, index) => {
                                  return <div key={index}>{content}</div>;
                                })}
                          </Commentna>
                          <CommentFooter>
                            <Link to="/">
                              <ModifiedAt>{comment.createdAt}</ModifiedAt>
                            </Link>

                            <Like>좋아요 5개</Like>

                            <ReComment>답글 달기</ReComment>
                          </CommentFooter>
                          <PostTitleImgArea
                            style={{
                              position: "absolute",
                              top: "-20px",
                              left: "-10px",
                            }}
                          >
                            {(comment.profileUrl && (
                              <PostTitleImg
                                src={`http://13.125.132.120/${comment.profileUrl}`}
                                alt="누군가의이미지"
                              />
                            )) || (
                              <PostTitleImg
                                src="https://image.similarpng.com/very-thumbnail/2020/06/Instagram-logo-transparent-PNG.png"
                                alt="프로필사진X"
                              />
                            )}
                          </PostTitleImgArea>

                          <AiOutlineHeart
                            size="13"
                            style={{
                              position: "absolute",
                              top: "0",
                              right: "10px",
                            }}
                          />
                        </Comments>
                      );
                    })}
                </Contents>
              </Scroll>
            </ContentArea>
            <RightFooter>
              <FooterMenu>
                {(like && (
                  <AiFillHeart
                    size="28"
                    style={{ margin: "8px", cursor: "pointer" }}
                    onClick={() => delLike()}
                    color="red"
                  />
                )) || (
                  <AiOutlineHeart
                    size="28"
                    style={{ margin: "8px", cursor: "pointer" }}
                    onClick={addLike}
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
                <div
                  style={{
                    margin: "5px 10px",
                    fontWeight: "900",
                    pointerEvents: "none",
                  }}
                >
                  좋아요 {postNumOfLikes}개
                </div>
                <WriteComment>
                  <CgSmile
                    size="28"
                    style={{ margin: "0 16px", cursor: "pointer" }}
                  />
                  <Message
                    placeholder="댓글 달기..."
                    onChange={changeComment}
                  />
                  {hasComment !== "" ? (
                    <Commenting onClick={() => addComment(postId)}>
                      게시
                    </Commenting>
                  ) : (
                    <Commenting
                      style={{ opacity: "0.3", pointerEvents: "none" }}
                    >
                      게시
                    </Commenting>
                  )}
                </WriteComment>
              </FooterMenu>
            </RightFooter>
          </RightArea>
        </ModalArea>
      </Modal>
    </>
  );
}

Comment.defaultProps = {
  postProfileUrl:
    "https://www.pngall.com/wp-content/uploads/5/Instagram-Logo-PNG-Image.png",
};

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
  max-height: 612px;
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
  padding-top: 20px;
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
  bottom: 0;
`;

const WriteComment = styled.div`
  height: 53px;
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;
`;

const Message = styled.textarea`
  width: 100%;
  height: 100%;
  max-height: 80px;
  outline: none;
  border: 0;
  font-size: 14px;
  resize: none;
  flex-grow: 1;
  flex-direction: column;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const Commenting = styled.div`
  width: 40px;
  color: rgba(var(--d69, 0, 149, 246), 1);
  cursor: pointer;
`;
