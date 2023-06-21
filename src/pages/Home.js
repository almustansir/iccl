import React from "react";
import NavBarComp from "../components/NavBarComp";
import styled from "styled-components";
import homeHeroBg from "./../static/homeHeroBg.jpg";
import productPageBg from "./../static/productPage.jpg";
import HomeStatsComp from "../components/HomeStatsComp";
import HC1 from "./../static/HC1.png";
import HC2 from "./../static/HC2.png";
import HC3 from "./../static/HC3.png";
import HC4 from "./../static/HC4.png";
import HC5 from "./../static/HC5.png";
import HC6 from "./../static/HC6.png";
import HC7 from "./../static/HC7.png";
import HC8 from "./../static/HC8.png";
import HC9 from "./../static/HC9.png";
import activeCircle from "./../static/active_circle.svg";
import inactiveCircle from "./../static/inactive_circle.svg";
import PartnersComp from "../components/HomePartnersComp";
import FooterComp from "../components/FooterComp";

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

const NewProductsDiv = styled.div`
  text-align: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${productPageBg});
`;

const NewProductsHeader = styled.h2`
  font-family: "Roboto", sans-serif;
`;

const CarouselDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const CarouselDiv1 = styled.div`
  display: flex;
  flex-direction: row;
`;

const CarouselDiv2 = styled.div`
  display: flex;
  flex-direction: row;
`;

const CarouselDiv3 = styled.div`
  display: flex;
  flex-direction: row;
`;
const CarouselCounterDiv = styled.div``;

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
      <NewProductsDiv>
        <NewProductsHeader>New Products</NewProductsHeader>
        <CarouselDiv>
          <CarouselDiv1>
            <img src={HC1} width={"420px"} height={"310px"} alt="1" />
            <img src={HC2} width={"420px"} height={"310px"} alt="1" />
            <img src={HC3} width={"420px"} height={"310px"} alt="1" />
          </CarouselDiv1>
          <CarouselDiv2>
            <img src={HC4} width={"420px"} height={"310px"} alt="1" />
            <img src={HC5} width={"420px"} height={"310px"} alt="1" />
            <img src={HC6} width={"420px"} height={"310px"} alt="1" />
          </CarouselDiv2>
          <CarouselDiv3>
            <img src={HC7} width={"420px"} height={"310px"} alt="1" />
            <img src={HC8} width={"420px"} height={"310px"} alt="1" />
            <img src={HC9} width={"420px"} height={"310px"} alt="1" />
          </CarouselDiv3>
        </CarouselDiv>
        <CarouselCounterDiv>
          {<img src={activeCircle} alt="active" />}
          {<img src={inactiveCircle} alt="active" />}
          {<img src={inactiveCircle} alt="active" />}
        </CarouselCounterDiv>
      </NewProductsDiv>
      <PartnersComp />
      <FooterComp />
    </HomeDiv>
  );
};

export default Home;
