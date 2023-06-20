import React from "react";
import NavBarComp from "../components/NavBarComp";
import styled from "styled-components";
import homeHeroBg from "./../static/homeHeroBg.jpg";
import HomeStatsComp from "../components/HomeStatsComp";

const HomeDiv = styled.div`
  margin: 0;
`;

const HeroDiv = styled.div`
  position: relative;
  margin: 0;
  width: 100%;
  height: 90vh;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${homeHeroBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const HomeH2 = styled.h2`
  position: absolute;
  left: 10%;
  bottom: 35%;

  font-family: "Pacifico";
  font-style: normal;
  font-weight: 400;
  font-size: 128px;
  line-height: 225px;
  color: #f1f8fd;
`;

const HomeP = styled.p`
  position: absolute;
  width: 532px;
  height: 292px;
  left: 10%;
  top: 50%;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  text-align: justify;
  color: #f1f8fd;
`;

const Home = () => {
  return (
    <HomeDiv>
      <HeroDiv>
        <NavBarComp />
        <HomeH2>ICCL</HomeH2>
        <HomeP>
          Completed in 2007, International Classic Composite Ltd. (ICCL) is a
          vertically integrated state-of-the-art manufacturing facility that
          provides knitting, dyeing, sewing, finishing, printing and embroidery
          services.
        </HomeP>
      </HeroDiv>
      <HomeStatsComp />
    </HomeDiv>
  );
};

export default Home;
