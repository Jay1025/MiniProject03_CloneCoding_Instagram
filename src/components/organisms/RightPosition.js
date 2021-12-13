import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function RightPosition() {
  return (
    <Wrap>
      <MyProfile>
        <Link to="/">
          <MyImg
            src="https://icon-library.com/images/50x50-icon/50x50-icon-18.jpg"
            alt="myProfile"
          />
        </Link>
        <Name>
          <Link to="/">
            <MyNickName>user nickname</MyNickName>
          </Link>
          <MyRealName>user realname</MyRealName>
        </Name>
        <Transfer>전환</Transfer>
      </MyProfile>
      <OtherProfile>
        <ForYou>
          <div style={{ width: "248px" }}>회원님을 위한 추천</div>
          <Link to="/">
            <div style={{ fontSize: "12px", color: "#000" }}>모두 보기</div>
          </Link>
        </ForYou>
        <OtherPeople>
          <Link to="/">
            <OtherImg
              src="https://icon-library.com/images/50x50-icon/50x50-icon-18.jpg"
              alt="myProfile"
            />
          </Link>
          <Name>
            <Link to="/">
              <MyNickName>user nickname</MyNickName>
            </Link>
            <MyRealName>user status</MyRealName>
          </Name>
          <Transfer>팔로우</Transfer>
        </OtherPeople>
        <OtherPeople>
          <Link to="/">
            <OtherImg
              src="https://icon-library.com/images/50x50-icon/50x50-icon-18.jpg"
              alt="myProfile"
            />
          </Link>
          <Name>
            <Link to="/">
              <MyNickName>user nickname</MyNickName>
            </Link>
            <MyRealName>user status</MyRealName>
          </Name>
          <Transfer>팔로우</Transfer>
        </OtherPeople>
        <OtherPeople>
          <Link to="/">
            <OtherImg
              src="https://icon-library.com/images/50x50-icon/50x50-icon-18.jpg"
              alt="myProfile"
            />
          </Link>
          <Name>
            <Link to="/">
              <MyNickName>user nickname</MyNickName>
            </Link>
            <MyRealName>user status</MyRealName>
          </Name>
          <Transfer>팔로우</Transfer>
        </OtherPeople>
        <OtherPeople>
          <Link to="/">
            <OtherImg
              src="https://icon-library.com/images/50x50-icon/50x50-icon-18.jpg"
              alt="myProfile"
            />
          </Link>
          <Name>
            <Link to="/">
              <MyNickName>user nickname</MyNickName>
            </Link>
            <MyRealName>user status</MyRealName>
          </Name>
          <Transfer>팔로우</Transfer>
        </OtherPeople>
        <OtherPeople>
          <Link to="/">
            <OtherImg
              src="https://icon-library.com/images/50x50-icon/50x50-icon-18.jpg"
              alt="myProfile"
            />
          </Link>
          <Name>
            <Link to="/">
              <MyNickName>user nickname</MyNickName>
            </Link>
            <MyRealName>user status</MyRealName>
          </Name>
          <Transfer>팔로우</Transfer>
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
        <div>© 2021 INSTAGRAM FROM META</div>
      </Footers>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 293px;
  height: 415px;
  position: fixed;
  top: 130px;
  right: 250px;
`;
// top: calc(34px + var(--desktop-nav-height));

const MyProfile = styled.div`
  display: flex;
  /* justify-content: center; */
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
