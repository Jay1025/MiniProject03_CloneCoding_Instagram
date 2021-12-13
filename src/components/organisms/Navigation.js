import styled from "styled-components";
import { GrHomeRounded } from "react-icons/gr";
import { IoMdPaperPlane } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FiPlusSquare } from "react-icons/fi";
import {
  AiOutlineHome,
  AiFillCompass,
  AiOutlineCompass,
  AiOutlineHeart,
} from "react-icons/ai";

export default function Navi() {
  return (
    <Wrap>
      <NavWrap>
        <ImgArea>
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="insta_logo"
          />
        </ImgArea>
        <InputArea>
          {/* <IoSearch /> */}
          <Input style={{ border: "1px solid #999" }} />
        </InputArea>
        <NavPages>
          <AiOutlineHome size="28" style={{ margin: "0 10px" }} />
          <IoMdPaperPlane size="28" style={{ margin: "0 10px" }} />
          <FiPlusSquare size="28" style={{ margin: "0 10px" }} />
          <AiOutlineCompass size="28" style={{ margin: "0 10px" }} />
          <AiOutlineHeart size="28" style={{ margin: "0 10px" }} />
          <img
            src=""
            alt="profile"
            style={{ margin: "0 10px", width: "30px", borderRadius: "100%" }}
          />
        </NavPages>
      </NavWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 1440px;
  height: 60px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: #fff;
  position: fixed;
  z-index: 3;
  border-bottom: 1px solid #ddd;
`;

const NavWrap = styled.div`
  max-width: 975px;
  width: 975px;
  padding: 0 20px;
  display: flex;
  height: 60px;
  background-color: #fff;
  margin: auto;
  align-items: center;
  justify-content: center;
  /* position: fixed; */
  border-bottom: 1px solid #ddd;
`;

const ImgArea = styled.div`
  width: 36%;
`;

const Img = styled.image``;

const InputArea = styled.div`
  display: flex;
  position: relative;
`;

const Input = styled.input`
  width: 268px;
  height: 36px;
  padding: 12px;
  /* border: 1px solid #eee; */
  border-radius: 2px;
  background-color: rgba(var(--b3f, 250, 250, 250), 1);
  outline: none;
`;

const NavPages = styled.div`
  width: 36%;
  display: flex;
  justify-content: flex-end;
`;
