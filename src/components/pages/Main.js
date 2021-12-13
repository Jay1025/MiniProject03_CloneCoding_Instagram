import Navigation from "../organisms/Navigation";
import styled from "styled-components";

export default function Main() {
  return (
    <Wrap>
      <Navigation />
      <Center />
    </Wrap>
  );
}

const Wrap = styled.div`
  margin: auto;
  width: 975px;
`;

const Center = styled.div`
  max-width: 935px;
  padding: 20px;
`;
