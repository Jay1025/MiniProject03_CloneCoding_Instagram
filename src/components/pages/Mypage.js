import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import { BsGearWide } from "react-icons/bs";
import { AiOutlineTable } from "react-icons/ai";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { BsPersonSquare } from "react-icons/bs";
import alert from "sweetalert";

import { Grid, Text, Image, Button } from "../atoms/index";
import Navigation from "../organisms/Navigation";
import Footer from "../organisms/Footer";

const Mypage = () => {
  const user_name = localStorage.getItem("username");
  const user_fullname = localStorage.getItem("fullname");

  //-------Modal-------
  const [profileChange, setProfileChange] = useState(false);

  const closeModal = () => {
    setProfileChange(false);
  };

  //프로필 이미지 파일 변경
  const [uploadMyFile, setUploadMyFile] = useState(null);
  const [uploadMyURL, setUploadMyURL] = useState();

  const addUploadFile = async (e) => {
    e.preventDefault();
    setUploadMyFile(e.target.files[0]);
    console.log(e.target.files[0]);

    // const ImgUrl = URL.createObjectURL(e.target.files[0]);
    // console.log(ImgUrl);
    // setUploadMyURL(ImgUrl);
    addProfile();
  };

  const addProfile = async () => {
    console.log(uploadMyFile);
    const accessToken = document.cookie.split("=")[1];
    console.log("1");
    const token = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    console.log(token);
    let formdata = new FormData();

    formdata.append("imgUrl", uploadMyFile);
    console.log(formdata);

    return axios
      .post(`http://13.125.132.120/users/1`, formdata, token)
      .then((response) => {
        console.log(response);
        alert("정상적으로 프로필사진이 변경되었습니다.");
        setProfileChange(false);
      })
      .catch((e) => alert(e));
  };

  return (
    <React.Fragment>
      <Navigation />
      <Grid width="975px" margin="0 auto">
        <Grid
          is_flex
          padding="85px 85px 40px 85px"
          borderB=" 1px solid #dbdbdb"
        >
          {/* 프로필 사진 변경 모달창 띄우기 */}
          <Grid width="260px" height="150px">
            <Image
              shape="myIcon"
              src="https://fdn.gsmarena.com/imgroot/news/18/03/instagram-timeline-changes/-728/gsmarena_001.jpg"
              _onClick={() => {
                setProfileChange(true);
              }}
            />
            <div profileChange={profileChange} closeModal={closeModal}></div>
            {profileChange ? (
              <Background onClick={closeModal}>
                <ModalContainer onClick={(e) => e.stopPropagation()}>
                  {/* 프로필 이미지 변경 버튼 */}
                  <Text profileModal>프로필 사진 바꾸기</Text>
                  <Text modalChoices color="#0095f6">
                    <label htmlFor="myFile" style={{ cursor: "pointer" }}>
                      사진 업로드
                    </label>
                  </Text>
                  <input
                    type="file"
                    id="myFile"
                    style={{ display: "none" }}
                    accept="image/*"
                    onChange={addUploadFile}
                  />
                  {/* 프로필 이미지 변경 버튼 ----(끝)----*/}
                  <Text modalChoices color="#ed4956">
                    현재 사진 삭제
                  </Text>
                  <Text _onClick={closeModal} padding="15px 0" cursor="pointer">
                    취소
                  </Text>
                </ModalContainer>
              </Background>
            ) : null}
          </Grid>
          {/* 프로필 사진 변경 모달창 띄우기 ----(끝)--- */}

          <Grid>
            <Grid is_flex margin="0 0 25px 0">
              <Text size="28px">{user_name}</Text>
              <Button
                profileBtn
                type="file"
                _onClick={() => {
                  alert("준비 중 입니다.");
                }}
              >
                프로필 편집
              </Button>
              <BsGearWide size="23" />
            </Grid>
            <Grid is_flex margin="0 0 25px">
              <Text profileText>게시물 0</Text>
              <Text profileText>팔로워 0</Text>
              <Text profileText>팔로우 0</Text>
            </Grid>
            <Grid is_flex margin="0 0 20px">
              <Text profileText>{user_fullname}</Text>
            </Grid>
          </Grid>
        </Grid>
        <Grid is_flex justify="center">
          <Grid is_flex margin="1.5em 2em" color="#8e8e8e">
            <AiOutlineTable />
            <Text margin="0 0 0 6px">게시물</Text>
          </Grid>
          <Grid is_flex margin="1.5em 2em" color="#8e8e8e">
            <AiOutlinePlayCircle />
            <Text margin="0 0 0 6px">동영상</Text>
          </Grid>
          <Grid is_flex margin="1.5em 2em" color="#8e8e8e">
            <BsBookmark />
            <Text margin="0 0 0 6px">저장됨</Text>
          </Grid>
          <Grid is_flex margin="1.5em 2em" color="#8e8e8e">
            <BsPersonSquare />
            <Text margin="0 0 0 6px">태그됨</Text>
          </Grid>
        </Grid>
        <Grid is_flex margin="0 0 2em 0" justify="space-between" wrap="wrap">
          <Image
            shape="imgBtn"
            src="https://play-lh.googleusercontent.com/h9jWMwqb-h9hjP4THqrJ50eIwPekjv7QPmTpA85gFQ10PjV02CoGAcYLLptqd19Sa1iJ=s180-rw"
            width="21em"
            height="21em"
          />
          <Image
            shape="imgBtn"
            src="https://play-lh.googleusercontent.com/h9jWMwqb-h9hjP4THqrJ50eIwPekjv7QPmTpA85gFQ10PjV02CoGAcYLLptqd19Sa1iJ=s180-rw"
            width="21em"
            height="21em"
          />
          <Image
            shape="imgBtn"
            src="https://play-lh.googleusercontent.com/h9jWMwqb-h9hjP4THqrJ50eIwPekjv7QPmTpA85gFQ10PjV02CoGAcYLLptqd19Sa1iJ=s180-rw"
            width="21em"
            height="21em"
          />
        </Grid>
      </Grid>
      <Footer />
    </React.Fragment>
  );
};
//모달창 CSS
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 225px;
  width: 25rem;
  height: 225px;
  background: #ffffff;
  border-radius: 10px;
  text-align: center;
`;

const ModalTitle = styled.label`
  font-weight: 600;
  font-size: 18px;
  padding: 30px 0;
  border-bottom: 1px solid #dbdbdb;
`;
export default Mypage;
