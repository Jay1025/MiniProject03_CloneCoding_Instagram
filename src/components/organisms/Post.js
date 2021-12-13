import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { IoMdPaperPlane } from "react-icons/io";
import { IoChatbubbleOutline } from "react-icons/io5";
import { RiBookmarkLine } from "react-icons/ri";
import { CgSmile } from "react-icons/cg";

export default function Post() {
  const [hasComment, setHasComment] = useState("");

  return (
    <>
      <Wrap>
        <PostHeader>
          <HeaderLeft>
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
          </HeaderLeft>
          <PostMenu>
            <MenuArea>
              <BsThreeDots size="20" />
            </MenuArea>
          </PostMenu>
        </PostHeader>
        <PostCenter>
          <PostMainImg
            src="https://lh3.googleusercontent.com/proxy/dqmEALVjMrft2rsEZuyHXpRTSksTrRZvHsfkU2z_-feJUrfCPQRcg6i4FH--31_9LSs_nsUhz1z-lLg6yQPEaeJN5QKaNz_TcGfwP5xaZpEx46SXdqDxIHoGjNyv-eenI8wmHe_2uSKWpQ"
            alt="지구본"
          />
        </PostCenter>
        <PostFooter>
          <FooterMenu>
            <Link to="/">
              <AiOutlineHeart size="28" style={{ margin: "8px" }} />
            </Link>
            <Link to="/">
              <IoChatbubbleOutline size="28" style={{ margin: "8px" }} />
            </Link>
            <Link to="/">
              <IoMdPaperPlane size="28" style={{ margin: "8px" }} />
            </Link>
            <Link to="/">
              <RiBookmarkLine
                size="28"
                style={{ margin: "8px 8px 8px 415px" }}
              />
            </Link>
          </FooterMenu>
          <LikeArea>
            <Like>좋아요 X개</Like>
          </LikeArea>
          <PostContent>
            <Link to="/">
              <Username>username</Username>
            </Link>
            <ContentTitle>contentTitle</ContentTitle>
            <ContentMore>
              <span>... </span>
              <span
                style={{ color: "#999", fontWeight: "600", cursor: "pointer" }}
              >
                더 보기
              </span>
            </ContentMore>
          </PostContent>
          <Comments>댓글 X개 모두 보기</Comments>
          <Link to="/">
            <ModifiedAt>X시간 전</ModifiedAt>
          </Link>
          <WriteComment>
            <CgSmile
              size="28"
              style={{ margin: "0 16px", cursor: "pointer" }}
            />
            <Message placeholder="댓글 달기..." />
            <Commenting>게시</Commenting>
          </WriteComment>
        </PostFooter>
      </Wrap>

      <Wrap>
        <PostHeader>
          <HeaderLeft>
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
          </HeaderLeft>
          <PostMenu>
            <MenuArea>
              <BsThreeDots size="20" />
            </MenuArea>
          </PostMenu>
        </PostHeader>
        <PostCenter>
          <PostMainImg
            src="https://lh3.googleusercontent.com/proxy/dqmEALVjMrft2rsEZuyHXpRTSksTrRZvHsfkU2z_-feJUrfCPQRcg6i4FH--31_9LSs_nsUhz1z-lLg6yQPEaeJN5QKaNz_TcGfwP5xaZpEx46SXdqDxIHoGjNyv-eenI8wmHe_2uSKWpQ"
            alt="지구본"
          />
        </PostCenter>
        <PostFooter>
          <FooterMenu>
            <Link to="/">
              <AiOutlineHeart size="28" style={{ margin: "8px" }} />
            </Link>
            <Link to="/">
              <IoChatbubbleOutline size="28" style={{ margin: "8px" }} />
            </Link>
            <Link to="/">
              <IoMdPaperPlane size="28" style={{ margin: "8px" }} />
            </Link>
            <Link to="/">
              <RiBookmarkLine
                size="28"
                style={{ margin: "8px 8px 8px 415px" }}
              />
            </Link>
          </FooterMenu>
          <LikeArea>
            <Like>좋아요 X개</Like>
          </LikeArea>
          <PostContent>
            <Link to="/">
              <Username>username</Username>
            </Link>
            <ContentTitle>contentTitle</ContentTitle>
            <ContentMore>
              <span>... </span>
              <span
                style={{ color: "#999", fontWeight: "600", cursor: "pointer" }}
              >
                더 보기
              </span>
            </ContentMore>
          </PostContent>
          <Comments>댓글 X개 모두 보기</Comments>
          <Link to="/">
            <ModifiedAt>X시간 전</ModifiedAt>
          </Link>
          <WriteComment>
            <CgSmile
              size="28"
              style={{ margin: "0 16px", cursor: "pointer" }}
            />
            <Message placeholder="댓글 달기..." />
            <Commenting>게시</Commenting>
          </WriteComment>
        </PostFooter>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  border: 1px solid #ddd;
  width: 616px;
  background-color: #fff;
  margin-bottom: 25px;
`;

const PostHeader = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
`;

const HeaderLeft = styled.div`
  width: 566px;
  display: flex;
  align-items: center;
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

  &:hover {
    text-decoration: underline;
  }
`;

const PostMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: auto;
  padding-right: 8px;
  cursor: pointer;
`;

const MenuArea = styled.div`
  padding: 8px;
`;

const PostCenter = styled.div``;

const PostMainImg = styled.img`
  width: 614px;
`;

const PostFooter = styled.div``;

const FooterMenu = styled.div`
  padding: 8px;
`;

const LikeArea = styled.div`
  font-weight: bold;
  padding: 0 16px 10px;
`;

const Like = styled.span`
  cursor: pointer;
`;

const PostContent = styled.div`
  padding: 0 16px;
  display: flex;
`;

const Username = styled.div`
  font-weight: bold;
  padding-right: 6px;

  &:hover {
    text-decoration: underline;
  }
`;

const ContentTitle = styled.span``;

const ContentMore = styled.div``;

const Comments = styled.div`
  color: #999;
  padding: 6px 16px;
`;

const ModifiedAt = styled.div`
  font-size: 10px;
  color: #999;
  padding: 0 16px 20px;
  border-bottom: 1px solid #ddd;
`;

const WriteComment = styled.div`
  height: 53px;
  display: flex;
  align-items: center;
`;

const Message = styled.textarea`
  width: 500px;
  height: 18px;
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
`;
