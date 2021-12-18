import React, { useState } from "react";
import { history } from "../../redux/ConfigStore";
import { useDispatch } from "react-redux";
import { userCreators as userActions } from "../../redux/user";
import styled from "styled-components";

import { Grid, Image, Text, Input, Button } from "../atoms/index";
import { AiFillFacebook } from "react-icons/ai";

import Footer from "../organisms/Footer";

const Login = () => {
  const dispatch = useDispatch();
  
  const [RandomPic, setRadomPic] = useState();

  const imgArray = [
    "https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg",
  ];

  React.useEffect(() => {
    window.onload = showImage(RandomPic);
  }, []);

  function showImage() {
    const imgNum = Math.round(Math.random() * 4);
    setRadomPic(imgArray[imgNum]);
    setTimeout(showImage, 2000);
  }

  //---- 아이디 비밀번호 ----
  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  //---- 오류메시지 상태저장 ----
  const [Message, setMessage] = React.useState("");

  //---- 유효성 검사 ----
  // const [isState, setIsState] = React.useState(false);

  const emailRegex =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

  //---- email값 가져오기 ----
  const emailCheck = (e) => {
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);
  };

  //---- pwd값 가져오기 -----
  const pwdCheck = (e) => {
    setPwd(e.target.value);
  };

  const loginClick = (e) => {
    if (!emailRegex.test(email) || pwd.length < 3 || pwd.length > 10) {
      setMessage(`이메일 혹은 비밀번호를 다시 확인해 주십시오.`);
      // setIsState(false);
    } else {
      // setIsState(true);
      dispatch(userActions.loginDB(email, pwd));
    }
  };

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
          <Image
            shape="rectangle"
            src={RandomPic}
            width="242px"
            height="430px"
            margin="-520px 0 0 150px"
          />
        </Grid>
        <Grid width="350px" margin="12px 0 0" padding="50px 0">
          <Grid
            margin="0 0 10px"
            padding="10px 0"
            border="1px solid #dbdbdb"
            // height="380px"
          >
            <Image
              shape="rectangle"
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              width="175px"
              height="51px"
              margin="22px auto 12px"
            />
            <Grid padding="20px 0">
              {/* 이메일(ID)입력 */}
              <Input
                main_input
                placeholder="이메일"
                _onChange={emailCheck}
              ></Input>
              {/* Password 입력 */}
              <Input
                password
                placeholder="비밀번호"
                _onChange={pwdCheck}
              ></Input>
              {(!emailRegex.test(email) ||
                pwd.length < 3 ||
                pwd.length > 10) && <Span>{Message}</Span>}

              {/* Login버튼 */}
              <Button mainBtn text="로그인" _onClick={loginClick} />
              {/* 아래는 뷰만 구현 */}
              <Text align="center" margin="10px 40px 18px" color="#8e8e8e">
                ------------------ 또는 -----------------
              </Text>
              <Grid
                is_flex
                color="#00376b"
                justify="center"
                margin="20px 0"
                cursor="pointer"
                _onClick={() => {
                  window.alert("준비 중 입니다.");
                }}
              >
                <Grid margin="0 5px 0 0">
                  <AiFillFacebook size="20" />
                </Grid>
                Facebook으로 로그인하기
              </Grid>
              <Grid
                size="12px"
                color="#00376b"
                align="center"
                margin="10px 0"
                cursor="pointer"
                _onClick={() => {
                  window.alert("준비 중 입니다.");
                }}
              >
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
                _onClick={() => {
                  window.location.href =
                    "https://apps.apple.com/app/instagram/id389801252?vt=lo";
                }}
              />
              <Image
                shape="imgBtn"
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
                width="136px"
                height="40px"
                margin="0 0 0 -70px"
                _onClick={() => {
                  window.location.href =
                    "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb&utm_campaign=loginPage&ig_mid=D1ACAFFB-6F51-4798-AE32-792EC2AC38EA&utm_content=lo&utm_medium=badge";
                }}
              />
            </Grid>
          </Grid>
        </Grid>{" "}
      </Grid>
      <Footer />
    </React.Fragment>
  );
};

const Span = styled.div`
  margin-top: 10px;
  text-align: center;
  color: red;
`;

export default Login;
