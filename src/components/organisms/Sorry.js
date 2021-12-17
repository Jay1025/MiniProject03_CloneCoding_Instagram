import styled from "styled-components";

export default function Sorry() {
  return (
    <>
      <Wrap>
        <Area>
          현재 페이지는 미구현 입니다.
          <br />
          감사합니다.
        </Area>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Area = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 30px;
  background-color: #eee;
  border: 1px solid #444;
  border-radius: 5px;
  top: 100px;
  position: absolute;
`;
