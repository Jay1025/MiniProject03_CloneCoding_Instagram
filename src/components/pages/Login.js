import React from "react";
import { history } from "../../redux/ConfigStore";

import { Grid, Image, Text, Input, Button } from "../atoms/index";
import { AiFillFacebook } from "react-icons/ai";

import Footer from "../organisms/Footer";

const Login = () => {
  return (
    <React.Fragment>
      <Grid is_flex className="layout" width="935px" height="787px">
        <Grid className="phoneLayout">
          <Image
            shape="rectangle"
            src="https://www.instagram.com/static/images/homepage/home-phones@2x.png/9364675fb26a.png"
            width="454px"
            height="618px"
          />
        </Grid>
        <Grid width="350px" margin="12px 0 0" padding="50px 0">
          <Grid
            margin="0 0 10px"
            padding="10px 0"
            border="1px solid #dbdbdb"
            height="380px"
          >
            <Image
              shape="rectangle"
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              width="175px"
              height="51px"
              margin="22px auto 12px"
            />
            <Grid padding="20px 0">
              <Input main_input placeholder="이메일"></Input>
              <Input main_input placeholder="비밀번호"></Input>
              <Button mainBtn text="로그인" />

              <Text align="center" margin="10px 40px 18px" color="#8e8e8e">
                ------------------ 또는 -----------------
              </Text>
              <Grid is_flex color="#00376b" justify="center" margin="20px 0">
                <Grid margin="0 5px 0 0">
                  <AiFillFacebook size="20" />
                </Grid>
                Facebook으로 로그인하기
              </Grid>
              <Grid size="12px" color="#00376b" align="center" margin="10px 0">
                비밀번호를 잊으셨나요?
              </Grid>
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
              계정이 없으신가요?
              <Text
                link
                _onClick={() => {
                  history.push("/signup");
                }}
              >
                가입하기
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
        </Grid>{" "}
      </Grid>
      <Footer />
    </React.Fragment>
  );
};

export default Login;
