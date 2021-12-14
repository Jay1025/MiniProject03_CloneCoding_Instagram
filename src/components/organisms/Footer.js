import React from "react";
import { Grid, Text } from "../atoms/index";

const Footer = () => {
  return (
    <React.Fragment>
      <Grid margin="0 0 50px 0">
        <Grid className="footerLayout">
          <Text span>Meta</Text>
          <Text span>소개</Text>
          <Text span>블로그</Text>
          <Text span>채용 정보</Text>
          <Text span>도움말</Text>
          <Text span>API</Text>
          <Text span>개인정보처리방침</Text>
          <Text span>약관</Text>
          <Text span>인기 계정</Text>
          <Text span>해시태그</Text>
          <Text span>위치</Text>
          <Text span>Instagram Lite</Text>
        </Grid>
        <Grid className="footerLayout">
          <Text span>뷰티</Text>
          <Text span>댄스</Text>
          <Text span>피트니스</Text>
          <Text span>식음료</Text>
          <Text span>집 및 정원</Text>
          <Text span>음악</Text>
          <Text span>시각 예술</Text>
        </Grid>
        <Grid className="footerLayout" margin="30px">
          <Text span>한국어</Text>
          <Text span>© 2021 Instagram from Meta</Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default Footer;
