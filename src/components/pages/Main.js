import Navigation from "../organisms/Navigation";
import styled from "styled-components";
import Header from "../organisms/Header";
import Post from "../organisms/Post";
import RightPosition from "../organisms/RightPosition";

import Login from "./Login";

export default function Main() {
  const username = localStorage.getItem("username");

  return (
    <>
      {(username && (
        <>
          <Navigation />
          <Wrap>
            <Center>
              <Header />
              <Post />
            </Center>
          </Wrap>
          <RightPosition />
        </>
      )) || <Login />}
    </>
  );
}

const Wrap = styled.div`
  margin: auto;
  width: 975px;
  height: 1000px;
  position: relative;
  top: 80px;

  @media screen and (max-width: 920px) {
    width: 80%;
  }
`;

const Center = styled.div`
  /* max-width: 935px; */
  /* padding: 20px; */
`;
