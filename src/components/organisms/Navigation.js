import styled from "styled-components";
import { Input } from "../atoms/index";
import { GrHomeRounded } from "react-icons/gr";
import { IoMdPaperPlane } from "react-icons/io";
import { FiPlusSquare } from "react-icons/fi";
import {
  AiOutlineHome,
  AiFillCompass,
  AiOutlineCompass,
  AiOutlineHeart,
} from "react-icons/ai";

export default function Navi() {
  return (
    <NavWrap>
      <ImgArea>
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="insta_logo"
        />
      </ImgArea>
      <Input type="text" width="268px" height="36px" padding="12px" />
      <NavPages>
        <AiOutlineHome size="28" style={{ margin: "0 10px" }} />
        <IoMdPaperPlane size="28" style={{ margin: "0 10px" }} />
        <FiPlusSquare size="28" style={{ margin: "0 10px" }} />
        <AiOutlineCompass size="28" style={{ margin: "0 10px" }} />
        <AiOutlineHeart size="28" style={{ margin: "0 10px" }} />
        <img src="" alt="profile" style={{ margin: "0 10px", width: "30px" }} />
      </NavPages>
    </NavWrap>
  );
}

const NavWrap = styled.div`
max-width:975px;
width: 975px;
  padding: 0 20px;
  display: flex;
  height: 60px;
  background-color : rgba(255,255,255,1)
  margin:auto;
  align-items: center;
  justify-content: center;
  position: fixed;
`;

const ImgArea = styled.div`
  width: 36%;
`;

const Img = styled.image``;

const NavPages = styled.div`
  width: 36%;
  display: flex;
  justify-content: flex-end;
`;
