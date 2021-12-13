import React from "react";
import styled from "styled-components";
import { Grid, Image, Input, Text, Button } from "../atoms/index";
const Card = () => {
  return (
    <React.Fragment>
      <Grid width="350px" height="490px">
        <Grid margin="0 0 10px" padding="10px 0" border="1px solid #dbdbdb">
          <Image
            shape="rectangle"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            width="175px"
            height="51px"
            margin="22px auto 12px"
          />
          <Grid>
            <Text className="mainText">
              친구들의 사진과 동영상을 보려면 가입하세요.
            </Text>

            <Button mainBtn text="Facebook으로 로그인하기"></Button>
            <Text align="center" margin="10px 40px 18px" color="#8e8e8e">
              ----------------- 또는 ----------------
            </Text>
            <Input main_input placeholder="이메일 주소"></Input>
            <Input main_input placeholder="성명"></Input>
            <Input main_input placeholder="사용자 이름"></Input>
            <Input main_input placeholder="비밀번호"></Input>
            <Button mainBtn text="가입" />
          </Grid>
        </Grid>
        <Grid
          is_flex
          justify="center"
          margin="0 0 10px"
          padding="10px 0"
          border="1px solid #dbdbdb"
        >
          <Text size="15px" margin="15px">
            계정이 있으신가요?
            <Text link>로그인</Text>
          </Text>
        </Grid>
        <Grid>
          <Text align="center" margin="10px 20px">
            앱을 다운로드하세요.
          </Text>
        </Grid>
        <Grid is_flex margin="10px 0">
          <Image
            shape="rectangle"
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"
            width="136px"
            height="40px"
            margin="0 0 0 40px"
          />
          <Image
            shape="rectangle"
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
            width="136px"
            height="40px"
            margin="0 0 0 -70px"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;
export default Card;
