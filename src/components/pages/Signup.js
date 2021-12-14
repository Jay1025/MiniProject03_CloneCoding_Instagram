import React from "react";
import { history } from "../../redux/ConfigStore";

import styled from "styled-components";
import { Grid, Image, Text, Input, Button } from "../atoms/index";
import { AiFillFacebook } from "react-icons/ai";

import Footer from "../organisms/Footer";

const Login = () => {
  return (
    <React.Fragment>
      <Grid width="350px" height="743px" margin="50px auto" padding="50px 0">
        <Grid
          margin="0 0 10px"
          padding="10px 0"
          border="1px solid #dbdbdb"
          height="490px"
        >
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

            <Button mainBtn>
              <Grid margin="0 5px 0 0">
                <AiFillFacebook size="20" />
              </Grid>
              Facebook으로 로그인하기
            </Button>
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
            <Text
              link
              _onClick={() => {
                history.push("/login");
              }}
            >
              로그인
            </Text>
          </Text>
        </Grid>
        <Grid>
          <Text align="center" margin="10px 20px" padding="10px 0">
            앱을 다운로드하세요.
          </Text>

          <Grid is_flex margin="10px 0">
            <Image
              shape="imgBtn"
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"
              width="136px"
              height="40px"
              margin="0 0 0 40px"
            />
            <Image
              shape="imgBtn"
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
              width="136px"
              height="40px"
              margin="0 0 0 -70px"
            />
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </React.Fragment>
  );
};

export default Login;
