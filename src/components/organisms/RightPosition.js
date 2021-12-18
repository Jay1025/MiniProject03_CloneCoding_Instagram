import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function RightPosition() {
  return (
    <Wrap>
      <MyProfile>
        <a href="https://spartacodingclub.kr/" target="blank">
          <MyImg
            src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F9JGex%2Fbtq7CTVARWp%2Ff1pZigSCKq5nCkCh9QYD70%2Fimg.png"
            alt="항해99"
          />
        </a>
        <Name>
          <a href="https://spartacodingclub.kr/">
            <MyNickName>팀스파르타</MyNickName>
          </a>
          <MyRealName>항해99</MyRealName>
        </Name>
        <Transfer>문의</Transfer>
      </MyProfile>
      <OtherProfile>
        <ForYou>
          <div style={{ width: "248px" }}>개발자 추천</div>
          <Link to="/">
            <div style={{ fontSize: "12px", color: "#000" }}>모두 보기</div>
          </Link>
        </ForYou>
        <OtherPeople>
          <Link to="/">
            <OtherImg
              src="https://avatars.githubusercontent.com/u/89363456?v=4"
              alt="myProfile"
            />
          </Link>
          <Name>
            <a href="https://github.com/liamjeon">
              <MyNickName>전익현</MyNickName>
            </a>
            <MyRealName>Back-End Developer, Leader</MyRealName>
          </Name>
          <a href="https://github.com/liamjeon">
            <Transfer>깃허브</Transfer>
          </a>
        </OtherPeople>
        <OtherPeople>
          <Link to="/">
            <OtherImg
              src="https://avatars.githubusercontent.com/u/87404676?v=4"
              alt="myProfile"
            />
          </Link>
          <Name>
            <a href="https://github.com/Seungjun0906">
              <MyNickName>김승준</MyNickName>
            </a>
            <MyRealName>Back-End Developer</MyRealName>
          </Name>
          <a href="https://github.com/Seungjun0906">
            <Transfer>깃허브</Transfer>
          </a>
        </OtherPeople>
        <OtherPeople>
          <Link to="/">
            <OtherImg
              src="https://avatars.githubusercontent.com/u/91178712?v=4"
              alt="myProfile"
            />
          </Link>
          <Name>
            <a href="https://github.com/Jay1025">
              <MyNickName>박재우</MyNickName>
            </a>
            <MyRealName>Front-End Developer</MyRealName>
          </Name>
          <a href="https://github.com/Jay1025">
            <Transfer>깃허브</Transfer>
          </a>
        </OtherPeople>
        <OtherPeople>
          <Link to="/">
            <OtherImg
              src="https://avatars.githubusercontent.com/u/92702096?v=4"
              alt="myProfile"
            />
          </Link>
          <Name>
            <a href="https://github.com/O-h-y-o">
              <MyNickName>김형래</MyNickName>
            </a>
            <MyRealName>Front-End Developer</MyRealName>
          </Name>
          <a href="https://github.com/O-h-y-o">
            <Transfer>깃허브</Transfer>
          </a>
        </OtherPeople>
      </OtherProfile>
      <Footers>
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "20px 0",
            lineHeight: "1.7",
          }}
        >
          <li>
            <Link to="/">소개-</Link>
          </li>
          <li>
            <Link to="/">도움말-</Link>
          </li>
          <li>
            <Link to="/">홍보-</Link>
          </li>
          <li>
            <Link to="/">센터API-</Link>
          </li>
          <li>
            <Link to="/">채용정보-</Link>
          </li>
          <li>
            <Link to="/">개인정보처리방침-</Link>
          </li>
          <li>
            <Link to="/">약관-</Link>
          </li>
          <li>
            <Link to="/">위치-</Link>
          </li>
          <li>
            <Link to="/">인기 계정-</Link>
          </li>
          <li>
            <Link to="/">해시태그-</Link>
          </li>
          <li>
            <Link to="/">언어-</Link>
          </li>
        </ul>
        <div>© 2021 DEC - TEAM7</div>
      </Footers>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 293px;
  height: 415px;
  position: fixed;
  top: 130px;
  right: 15%;
  left: 70%;
  @media screen and (max-width: 920px) {
    display: none;
  }
`;

const MyProfile = styled.div`
  display: flex;
  align-items: center;
`;

const MyImg = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 100%;
`;

const Name = styled.div`
  padding-left: 20px;
  position: relative;
  /* width: 180px; */
`;

const MyNickName = styled.div`
  font-weight: bold;
`;

const MyRealName = styled.div``;

const Transfer = styled.div`
  color: rgba(var(--d69, 0, 149, 246), 1);
  font-size: 12px;
  font-weight: 700;
  position: absolute;
  right: 0;
  cursor: pointer;
`;

const OtherProfile = styled.div`
  margin-top: 20px;
`;

const ForYou = styled.div`
  color: #999;
  font-weight: bold;
  display: flex;
`;

const OtherPeople = styled.div`
  display: flex;
  margin: 20px 0 10px 10px;
  position: relative;
`;

const OtherImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 100%;
`;

const Footers = styled.div`
  font-size: 11px;
  color: #bbb;
`;

const Footer = styled.div`
    &::after {
        content:'\00B7';
        margin: 0.25em 0.25em;
    }
`;
