import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import axios from "axios";
import alert from "sweetalert";

// react-icons
import { NavLink, withRouter, useHistory } from "react-router-dom";
import { GrHomeRounded, GrSettingsOption } from "react-icons/gr";
import {
  IoMdPaperPlane,
  IoIosArrowRoundBack,
  IoIosPaperPlane,
} from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import {
  AiOutlineHome,
  AiOutlineCompass,
  AiOutlineHeart,
  AiFillHome,
  AiFillCompass,
  AiFillHeart,
} from "react-icons/ai";
import { AiOutlinePicture, AiOutlineClose } from "react-icons/ai";
import { BsPlayBtn, BsPlusSquare, BsPlusSquareFill } from "react-icons/bs";
import { CgSmile, CgProfile } from "react-icons/cg";
import { RiBookmarkLine } from "react-icons/ri";
import { TiArrowRepeat } from "react-icons/ti";
import Modal from "./Posting";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper";

import { addPostDB, addPost } from "../../redux/post";
import { userCreators as userActions } from "../../redux/user";

function Navi({ location }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [swiper, setSwiper] = useState(null);
  const [PostModal, setPostModal] = useState(false);
  const [uploadFiles, setUploadFiles] = useState(null);
  const [uploadURL, setUploadURL] = useState([]);
  const [content, setContent] = useState("");
  const [heart, setHeart] = useState(false);
  const [postBtnColor, setPostBtnColor] = useState(false);
  const [profileClick, setProfileClick] = useState(false);

  const username = localStorage.getItem("username");

  SwiperCore.use([Navigation, Pagination]);

  const swiperParams = {
    navigation: true,
    pagination: true,
    onSwiper: setSwiper,
  };

  const handleContent = (e) => {
    setContent(e.target.value);
    console.log(e.target.value);
  };

  const addUploadURL = async (e) => {
    e.preventDefault();
    setUploadFiles(e.target.files);
    console.log(e.target.files);
    const ImgUrlList = [...uploadURL];
    for (let i = 0; i < e.target.files.length; i++) {
      const ImgUrl = URL.createObjectURL(e.target.files[i]);

      ImgUrlList.push(ImgUrl);
    }
    setUploadURL(ImgUrlList);
  };

  const closeUpload = (e) => {
    e.preventDefault();

    setUploadURL([]);
    setPostModal(false);
  };

  const goBack = () => {
    setUploadURL([]);
  };

  const addPost = async () => {
    const accessToken = document.cookie.split("=")[1];
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    let fd = new FormData();
    // fd.append("imgUrl", uploadFiles);

    for (let i = 0; i < uploadFiles.length; i++) {
      fd.append("imgUrl", uploadFiles[i]);
    }
    fd.append("content", content);

    return axios
      .post("http://13.125.132.120/posts/", fd, config)
      .then((res) => {
        console.log(res);
        alert("등록 성공");
        setPostModal(false);
        setPostBtnColor(false);
        // dispatch(addPost());
      });
  };

  const logOut = () => {
    dispatch(userActions.logoutDB());
  };

  return (
    <Wrap>
      <NavWrap>
        <ImgArea onClick={() => history.push("/")}>
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="insta_logo"
          />
        </ImgArea>
        <InputArea>
          <IoSearch
            style={{ position: "absolute", right: "5px", top: "2px" }}
            size="30"
            color="#999"
          />
          <Input />
        </InputArea>
        <NavPages>
          <NavLink to="/">
            {location.pathname === "/" ? (
              <AiFillHome
                size="28"
                style={{ margin: "0 10px", cursor: "pointer" }}
              />
            ) : (
              <AiOutlineHome
                size="28"
                style={{ margin: "0 10px", cursor: "pointer" }}
              />
            )}
          </NavLink>
          <NavLink to="/direct">
            {location.pathname === "/direct" ? (
              <IoIosPaperPlane
                size="28"
                style={{ margin: "0 10px", cursor: "pointer" }}
              />
            ) : (
              <IoMdPaperPlane
                size="28"
                style={{ margin: "0 10px", cursor: "pointer" }}
              />
            )}
          </NavLink>
          {postBtnColor ? (
            <BsPlusSquareFill
              size="28"
              style={{ margin: "0 10px", cursor: "pointer" }}
              onClick={() => {
                setPostModal(false);
                setPostBtnColor(false);
              }}
            />
          ) : (
            <BsPlusSquare
              size="28"
              style={{ margin: "0 10px", cursor: "pointer" }}
              onClick={() => {
                setPostModal(true);
                setPostBtnColor(true);
              }}
            />
          )}
          <NavLink to="/explore">
            {location.pathname === "/explore" ? (
              <AiFillCompass
                size="28"
                style={{ margin: "0 10px", cursor: "pointer" }}
              />
            ) : (
              <AiOutlineCompass
                size="28"
                style={{ margin: "0 10px", cursor: "pointer" }}
              />
            )}
          </NavLink>
          {heart ? (
            <AiFillHeart
              size="28"
              style={{ margin: "0 10px", cursor: "pointer" }}
              onClick={() => setHeart(false)}
            />
          ) : (
            <AiOutlineHeart
              size="28"
              style={{ margin: "0 10px", cursor: "pointer" }}
              onClick={() => setHeart(true)}
            />
          )}
          {/* 프로필 모달창 */}
          {profileClick ? (
            <div style={{ position: "relative" }}>
              <img
                src="https://www.pngall.com/wp-content/uploads/5/Instagram-Logo-PNG-Image.png"
                alt="profile"
                style={{
                  margin: "2px 10px",
                  width: "25px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  zIndex: "9999",
                }}
                onClick={() => setProfileClick(false)}
              />
              <Teduri onClick={() => setProfileClick(false)}></Teduri>
              <Triangle></Triangle>
              <SideBarModal>
                <NavLink to="/mypage">
                  <SideGoProfile>
                    <CgProfile size="18" />
                    <SideBarText>프로필</SideBarText>
                  </SideGoProfile>
                </NavLink>
                <NavLink to="/">
                  <SideGoProfile>
                    <RiBookmarkLine size="18" />
                    <SideBarText>저장됨</SideBarText>
                  </SideGoProfile>
                </NavLink>
                <NavLink to="/">
                  <SideGoProfile>
                    <GrSettingsOption size="18" />
                    <SideBarText>설정</SideBarText>
                  </SideGoProfile>
                </NavLink>
                <NavLink to="/">
                  <SideGoProfile>
                    <TiArrowRepeat size="18" />
                    <SideBarText>계정 전환</SideBarText>
                  </SideGoProfile>
                </NavLink>
                <SideGoProfile
                  style={{ borderTop: "1px solid #ddd", cursor: "pointer" }}
                  onClick={logOut}
                >
                  <SideBarText style={{ margin: "0" }}>로그아웃</SideBarText>
                </SideGoProfile>
              </SideBarModal>
            </div>
          ) : (
            <>
              <div style={{ position: "relative" }}>
                <img
                  src="https://www.pngall.com/wp-content/uploads/5/Instagram-Logo-PNG-Image.png"
                  alt="profile"
                  style={{
                    margin: "2px 10px",
                    width: "25px",
                    borderRadius: "100%",
                    cursor: "pointer",
                  }}
                  onClick={() => setProfileClick(true)}
                />
              </div>
            </>
          )}
        </NavPages>
      </NavWrap>
      {uploadURL.length === 0 && (
        <Modal
          visible={PostModal}
          width="500px"
          borderRadius="10px"
          outline="none"
        >
          <PostingTitleArea>
            <PostingTitle>새 게시물 만들기</PostingTitle>
          </PostingTitleArea>

          <PostingImgArea>
            <PostingImg>
              <ImgIconArea>
                <AiOutlinePicture size="75" />
                <Skew>
                  <BsPlayBtn size="75" style={{ backgroundColor: "#fff" }} />
                </Skew>
              </ImgIconArea>
              <ImgContent>사진과 동영상을 여기에 끌어다 놓으세요.</ImgContent>
              <Label htmlFor="file">컴퓨터에서 선택</Label>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                multiple
                accept="image/*, video/*"
                onChange={addUploadURL}
              />
            </PostingImg>
          </PostingImgArea>

          <ClosePosting
            onClick={(e) => {
              closeUpload(e);
              setPostBtnColor(false);
            }}
          >
            <AiOutlineClose size="35" color="#fff" />
          </ClosePosting>
        </Modal>
      )}
      {uploadURL.length !== 0 && (
        <Modal
          visible={PostModal}
          width="90%"
          maxWidth="853px"
          borderRadius="10px"
          outline="none"
        >
          <PostingTitleArea>
            <IoIosArrowRoundBack
              style={{
                fontSize: "50px",
                position: "absolute",
                left: "10px",
                cursor: "pointer",
              }}
              onClick={goBack}
            />
            <PostingTitle>새 게시물 만들기</PostingTitle>
            <UploadPost onClick={addPost}>등록하기</UploadPost>
          </PostingTitleArea>

          <MainSector>
            <div
              style={{
                width: "60%",
                borderRight: "1px solid #ccc",
              }}
            >
              <Swiper {...swiperParams} ref={setSwiper}>
                {uploadURL.length !== 0 &&
                  uploadURL.map((file, key) => {
                    return (
                      <>
                        <SwiperSlide
                          style={{ margin: "auto", position: "relative" }}
                          key={key}
                        >
                          <div
                            style={{
                              width: "100%",
                              height: "480px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <img
                              src={file}
                              alt="userUploadImg"
                              style={{
                                maxWidth: "440px",
                                maxHeight: "480px",
                                display: "block",
                              }}
                            />
                          </div>
                        </SwiperSlide>
                      </>
                    );
                  })}
              </Swiper>
            </div>
            <MainRight>
              <RightTop>
                <UserInfo>
                  <img
                    src="https://icon-library.com/images/50x50-icon/50x50-icon-18.jpg"
                    alt="alts"
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "100%",
                      marginRight: "10px",
                    }}
                  />
                  <div style={{ fontWeight: "bold" }}>
                    {localStorage.getItem("username")}
                  </div>
                </UserInfo>
                <Textarea
                  placeholder="문구 입력..."
                  autoComplete="off"
                  autoCorrect="off"
                  onChange={handleContent}
                />
                <TopOfBottom>
                  <CgSmile
                    size="23"
                    style={{
                      margin: "0 16px",
                      cursor: "pointer",
                    }}
                  />
                  <NumLetter>0/2,200</NumLetter>
                </TopOfBottom>
              </RightTop>
            </MainRight>
          </MainSector>
          <ClosePosting
            onClick={(e) => {
              closeUpload(e);
              setPostBtnColor(false);
            }}
          >
            <AiOutlineClose size="35" color="#fff" />
          </ClosePosting>
        </Modal>
      )}
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 60px;
  margin: 0 auto;
  background-color: #fff;
  position: fixed;
  z-index: 3;
  border-bottom: 1px solid #ddd;
`;

const NavWrap = styled.div`
  max-width: 975px;
  /* width: 975px; */
  padding: 0 20px;
  display: flex;
  height: 60px;
  background-color: #fff;
  margin: auto;
  align-items: center;
  /* justify-content: center; */
  position: relative;
  border-bottom: 1px solid #ddd;
`;

const ImgArea = styled.div`
  width: 25%;
  min-width: 250px;
  cursor: pointer;
  display: block;
`;

const Img = styled.image``;

const InputArea = styled.div`
  display: flex;
  position: absolute;
  right: 300px;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const Input = styled.input`
  width: 268px;
  height: 36px;
  padding: 12px;
  border: none;
  border-radius: 10px;
  background-color: #eee;
  outline: none;
`;

const NavPages = styled.div`
  /* width: 36%; */
  display: flex;
  justify-content: flex-end;
  position: absolute;
  right: 0;
`;

const PostingTitleArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border-bottom: 1px solid #ccc;
  padding: 18px;
`;

const PostingImgArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 465px;
`;

const ImgIconArea = styled.div`
  position: absolute;
  top: 175px;
  left: 190px;
`;

const PostingImg = styled.div`
  text-align: center;
`;

const Skew = styled.div`
  transform: rotate(20deg);
  position: absolute;
  top: -20px;
  left: 40px;
  /* background-color: #fff; */
  box-sizing: border-box;
  outline: none;
`;
const PostingTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const UploadPost = styled.div`
  color: #0095f6;
  position: absolute;
  right: 10px;
  font-size: 14px;
  cursor: pointer;
`;

const ImgContent = styled.div`
  font-size: 22px;
  color: #262626;
  padding-bottom: 30px;
`;

const Label = styled.label`
  width: 88px;
  height: 18px;
  background-color: #0095f6;
  color: #fff;
  padding: 5px 10px;
  border-radius: 3px;
  font-weight: bold;
  cursor: pointer;
`;

const ClosePosting = styled.div`
  position: fixed;
  top: -60px;
  right: -60px;
  cursor: pointer;
`;

const MainSector = styled.div`
  display: flex;
`;

const MainRight = styled.div`
  width: 40%;
`;

const RightTop = styled.div`
  border-bottom: 1px solid #ccc;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

const Textarea = styled.textarea`
  resize: none;
  display: block;
  width: 100%;
  height: 168px;
  border: none;
  padding: 10px;
  outline: none;
  font-size: 16px;
`;

const TopOfBottom = styled.div`
  height: 36px;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
`;

const NumLetter = styled.div`
  padding: 10px;
  font-size: 12px;
  color: #999;
`;

// 프로필 모달창
const SideBarModal = styled.div`
  position: absolute;
  background-color: #fff;
  top: 43px;
  right: -10px;
  border-radius: 5px;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);
  z-index: 9998;
`;

const SideGoProfile = styled.div`
  display: flex;
  align-items: center;
  width: 230px;
  height: 37px;
  padding: 15px;

  &:hover {
    background-color: #f7f7f7;
  }
`;

const Teduri = styled.div`
position: absolute;
top: 0;
left: 8px;
width:29px;
height: 29px;
  border: 1px solid #000;
  border-radius: 100%;
  background-image: linear-gradient(#000, #000)
  background-origin: border-box;
  background-clip: content-box, border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:1;
  cursor: pointer;
`;

const Triangle = styled.div`
  width: 0px;
  height: 0px;
  border-top: 10px solid none;
  border-bottom: 10px solid #eee;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
  position: absolute;
  bottom: -12px;
  left: 14px;
  z-index: 9997;
  background-color: #fff;
`;

const SideBarText = styled.div`
  margin-left: 10px;
`;

export default withRouter(Navi);
