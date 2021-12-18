import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Wrap>
      <Link to="/">
        <ImgArea>
          <ImgBox>
            <Img
              src="https://avatars.githubusercontent.com/u/89363456?v=4"
              alt="wha?"
            />
          </ImgBox>
          <Text>전익현</Text>
        </ImgArea>
      </Link>
      <Link to="/">
        <ImgArea>
          <ImgBox>
            <Img
              src="https://avatars.githubusercontent.com/u/87404676?v=4"
              alt="wha?"
            />
          </ImgBox>
          <Text>김승준</Text>
        </ImgArea>
      </Link>
      <Link to="/">
        <ImgArea>
          <ImgBox>
            <Img
              src="https://avatars.githubusercontent.com/u/91178712?v=4"
              alt="wha?"
            />
          </ImgBox>
          <Text>박재우</Text>
        </ImgArea>
      </Link>
      <Link to="/">
        <ImgArea>
          <ImgBox>
            <Img
              src="https://avatars.githubusercontent.com/u/92702096?v=4"
              alt="wha?"
            />
          </ImgBox>
          <Text>김형래</Text>
        </ImgArea>
      </Link>
      <Link to="/">
        <ImgArea>
          <ImgBox>
            <Img
              src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F9JGex%2Fbtq7CTVARWp%2Ff1pZigSCKq5nCkCh9QYD70%2Fimg.png"
              alt="wha?"
            />
          </ImgBox>
          <Text>팀스파르타</Text>
        </ImgArea>
      </Link>
      <Link to="/">
        <ImgArea>
          <ImgBox>
            <Img
              src="https://toppng.com/uploads/preview/ew-instagram-logo-transparent-related-keywords-logo-instagram-vector-2017-115629178687gobkrzwak.png"
              alt="wha?"
            />
          </ImgBox>
          <Text>인스타그램</Text>
        </ImgArea>
      </Link>
      <Link to="/">
        <ImgArea>
          <ImgBox>
            <Img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
              alt="wha?"
            />
          </ImgBox>
          <Text>페이스북</Text>
        </ImgArea>
      </Link>
      <Link to="/">
        <ImgArea>
          <ImgBox>
            <Img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTirNT-sEwJT_oZePhvsh2DuGe9kRe8m-qZdQ&usqp=CAU"
              alt="wha?"
            />
          </ImgBox>
          <Text>트위터</Text>
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
  overflow: scroll;

  @media screen and (max-width: 920px) {
    margin: auto;
    margin-bottom: 24px;
    width: 95%;
    overflow: scroll;
  }
`;

const ImgArea = styled.div`
  width: 75px;
  height: 84px;
  margin: 0 10px;
  text-align: center;
`;

const ImgBox = styled.div`
  height: 62px;
  width: 62px;
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
  margin-left: 5px;
`;

const Img = styled.img`
  width: 56px;
  height: 56px;
  outline: none;
  border-radius: 100%;
`;

const Text = styled.div`
  /* width: 100%; */
`;
