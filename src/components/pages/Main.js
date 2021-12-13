import Navigation from "../organisms/Navigation";
import styled from "styled-components";
import Header from "../organisms/Header";
import Post from "../organisms/Post";

export default function Main() {
  return (
    <>
      <Navigation />
      <Wrap>
        <Center>
          <Header />
          <Post />
        </Center>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  margin: auto;
  width: 975px;
  height: 1000px;
  position: relative;
  top: 80px;
`;

const Center = styled.div`
  max-width: 935px;
  padding: 20px;
`;
