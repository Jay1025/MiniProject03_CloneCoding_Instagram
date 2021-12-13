import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";

export default function Post() {
  return (
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
        <PostMainImg src="" />
      </PostCenter>
      <PostFooter></PostFooter>
    </Wrap>
  );
}

const Wrap = styled.div`
  border: 1px solid #eee;
  width: 616px;
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

const PostMainImg = styled.img``;

const PostFooter = styled.div``;
