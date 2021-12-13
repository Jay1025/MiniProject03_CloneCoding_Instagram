import React from "react";
import styled from "styled-components";
import { Grid, Image } from "../atoms/index";
import Card from "../organisms/Card";

const Login = () => {
  return (
    <React.Fragment>
      <Grid is_flex className="layout">
        <Grid className="phoneLayout">
          <Image
            shape="rectangle"
            src="https://www.instagram.com/static/images/homepage/home-phones@2x.png/9364675fb26a.png"
            width="454px"
            height="618px"
          />
        </Grid>
        <Card />
      </Grid>
    </React.Fragment>
  );
};

export default Login;
