import React from "react";
import { BsGearWide } from "react-icons/bs";
import { AiOutlineTable } from "react-icons/ai";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { BsPersonSquare } from "react-icons/bs";

import { Grid, Text, Image, Button } from "../atoms/index";
import Navigation from "../organisms/Navigation";
import Footer from "../organisms/Footer";

const Mypage = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Grid width="975px" margin="0 auto">
        <Grid
          is_flex
          padding="85px 85px 40px 85px"
          borderB=" 1px solid #dbdbdb"
        >
          <Grid width="260px" height="150px">
            <Image
              shape="myIcon"
              src="https://fdn.gsmarena.com/imgroot/news/18/03/instagram-timeline-changes/-728/gsmarena_001.jpg"
            />
          </Grid>
          <Grid>
            <Grid is_flex margin="0 0 25px 0">
              <Text size="28px">Nickname</Text>
              <Button profileBtn type="file">
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
              <Text profileText>UserName</Text>
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
        <Grid is_flex margin="0 0 2em 0">
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
export default Mypage;
