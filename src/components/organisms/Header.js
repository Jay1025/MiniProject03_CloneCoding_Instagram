import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Wrap>
      <Link to="/">
        <ImgArea>
          <ImgBox>
            <Img
              src="https://icon-library.com/images/50x50-icon/50x50-icon-18.jpg"
              alt="wha?"
            />
          </ImgBox>
          <Text>흐으음</Text>
        </ImgArea>
      </Link>
      <Link to="/">
        <ImgArea>
          <ImgBox>
            <Img
              src="https://icon-library.com/images/50x50-icon/50x50-icon-18.jpg"
              alt="wha?"
            />
          </ImgBox>
          <Text>흐으음</Text>
        </ImgArea>
      </Link>
      <Link to="/">
        <ImgArea>
          <ImgBox>
            <Img
              src="https://icon-library.com/images/50x50-icon/50x50-icon-18.jpg"
              alt="wha?"
            />
          </ImgBox>
          <Text>흐으음</Text>
        </ImgArea>
      </Link>
      <Link to="/">
        <ImgArea>
          <ImgBox>
            <Img
              src="https://icon-library.com/images/50x50-icon/50x50-icon-18.jpg"
              alt="wha?"
            />
          </ImgBox>
          <Text>흐으음</Text>
        </ImgArea>
      </Link>
      <Link to="/">
        <ImgArea>
          <ImgBox>
            <Img
              src="https://icon-library.com/images/50x50-icon/50x50-icon-18.jpg"
              alt="wha?"
            />
          </ImgBox>
          <Text>흐으음</Text>
        </ImgArea>
      </Link>
      <Link to="/">
        <ImgArea>
          <ImgBox>
            <Img
              src="https://icon-library.com/images/50x50-icon/50x50-icon-18.jpg"
              alt="wha?"
            />
          </ImgBox>
          <Text>흐으음</Text>
        </ImgArea>
      </Link>
      <Link to="/">
        <ImgArea>
          <ImgBox>
            <Img
              src="https://icon-library.com/images/50x50-icon/50x50-icon-18.jpg"
              alt="wha?"
            />
          </ImgBox>
          <Text>흐으음</Text>
        </ImgArea>
      </Link>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 616px;
  height: 116px;
  padding: 16px 0;
  margin-bottom: 24px;
  background-color: #fff;
  display: flex;
  /* justify-content: center; */
  border: 1px solid #ddd;
  border-radius: 3px;
  overflow: none;
`;

const ImgArea = styled.div`
  width: 60px;
  height: 84px;
  margin: 0 10px;
  text-align: center;
`;

const ImgBox = styled.div`
  height: 63px;
  width: 63px;
  border: 2px solid transparent;
  border-radius: 100%;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right, #f7d358, #f781be, #df01d7);
  background-origin: border-box;
  background-clip: content-box, border-box;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Img = styled.img`
  width: 56px;
  height: 56px;
  outline: none;
  border-radius: 100%;
`;

const Text = styled.div``;
