import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../../redux/ConfigStore";
import { userCreators as userActions } from "../../redux/user";

import { Grid, Image, Text, Input, Button } from "../atoms/index";
import { AiFillFacebook } from "react-icons/ai";
import { FcCheckmark } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";

import Footer from "../organisms/Footer";

const Login = () => {
  const dispatch = useDispatch();

  // const isIdResponse = useSelector((store) => store.user.response);

  //-- 아아디, 비밀번호, 비밀번호확인 , 이메일  --
  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [fullname, setFullname] = React.useState("");

  //-- 오류메시지 상태저장--
  const [emailMessage, setEmailMessage] = React.useState("");
  const [pwdMessage, setPwdMessage] = React.useState("");
  const [pwdCheckMessage, setPwdCheckMessage] = React.useState("");

  //-- 유효성 검사 --
  const [isEmail, setIsEmail] = React.useState(false);
  const [isPassword, setIsPassword] = React.useState(false);
  const [isPwdCheck, setIsPwdCheck] = React.useState(false);

  //---- 이메일 유효성 검사  ----
  const emailCheck = (e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage(<FcCancel size="20" />);
      setIsEmail(false);
    } else {
      setEmailMessage(<FcCheckmark size="20" />);
      setIsEmail(true);
    }
  };

  //---- 비밀번호 유효성 검사  ----
  const onChangePwd = (e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{3,10}$/;
    const passwordCurrent = e.target.value;
    setPwd(passwordCurrent);

    if (passwordRegex.test(passwordCurrent)) {
      setPwdMessage(<FcCheckmark size="20" />);
      setIsPassword(true);
    } else {
      setPwdMessage(<FcCancel size="20" />);
      setIsPassword(false);
    }
  };

  //---- 비밀번호 중복 확인  ----
  const onChangePwdCheck = (e) => {
    const pwdCurrent = e.target.value;
    setPwdCheck(pwdCurrent);
    if (pwd === pwdCurrent) {
      setPwdCheckMessage(<FcCheckmark size="20" />);
      setIsPwdCheck(true);
    } else {
      setPwdCheckMessage(<FcCancel size="20" />);
      setIsPwdCheck(false);
    }
  };

  //---- fullname값 가져오기 ----
  const fullnameCheck = (e) => {
    const fullnameCurrent = e.target.value;
    setFullname(fullnameCurrent);
  };

  //---- username값 가져오기 ----
  const usernameCheck = (e) => {
    const usernameCurrent = e.target.value;
    setUsername(usernameCurrent);
  };

  // ---- 회원가입 버튼 클릭 ----
  const signUpClick = () => {
    if (!isPassword || !isPwdCheck || !isEmail) {
      window.alert("이메일, 패스워드를 정확하게  입력해주세요");
      return;
    }
    if (fullname.trim() === "" || username.trim() === "") {
      window.alert("입력란 모두 입력해 주세요.");
      return;
    }
    dispatch(userActions.signUpDB(email, fullname, username, pwd));
  };

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

            <Button
              mainBtn
              _onClick={() => {
                window.alert("준비 중 입니다.");
              }}
            >
              <Grid margin="0 5px 0 0">
                <AiFillFacebook size="20" />
              </Grid>
              Facebook으로 로그인하기
            </Button>
            <Text align="center" margin="10px 40px 18px" color="#8e8e8e">
              ----------------- 또는 ----------------
            </Text>
            {/* Email(ID부분) */}
            <Grid is_flex>
              <Input
                main_input
                placeholder="이메일 주소"
                _onChange={emailCheck}
              ></Input>
              {email.length > 0 && <Text>{emailMessage}</Text>}
            </Grid>
            {/* real name */}
            <Input
              main_input
              placeholder="성명"
              _onChange={fullnameCheck}
            ></Input>

            {/* username */}
            <Input
              main_input
              placeholder="사용자 이름"
              _onChange={usernameCheck}
            ></Input>

            {/* pwd */}
            <Grid is_flex>
              <Input
                main_input
                placeholder="비밀번호 (3~10글자 영문,숫자)"
                _onChange={onChangePwd}
              ></Input>
              {pwd.length > 0 && <Text>{pwdMessage}</Text>}
            </Grid>
            {/* pwd check */}
            <Grid is_flex>
              <Input
                main_input
                placeholder="비밀번호 확인"
                _onChange={onChangePwdCheck}
              ></Input>
              {pwd_check.length > 0 && <Text>{pwdCheckMessage}</Text>}
            </Grid>
            <Button mainBtn text="가입" _onClick={signUpClick} />
          </Grid>
        </Grid>
        {/* 아래는 뷰만 구현 */}
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
      </Grid>
      <Footer />
    </React.Fragment>
  );
};
export default Login;
