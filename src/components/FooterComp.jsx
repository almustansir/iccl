import React from 'react';
import facebookIcon from "./../static/FacebookLink.png";
import googleIcon from "./../static/GoogleLink.svg";
import linkedinIcon from "./../static/LinkedInLink.svg";
import twitterIcon from "./../static/TwitterLink.svg";
import youtubeIcon from "./../static/YouTubeLink.svg";
import styled from 'styled-components';


const FooterDiv = styled.div`
  margin-top: 200px;
  background-color: #787a91;
  height: 300px;
  border-top: 5px solid #000;
  text-align: center;
`;
const FooterHeader = styled.h2`
  font-family: "Pacifico";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 84px;
  color: #1e1e1e;
`;
const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 5%;
  margin: 0 auto;
`;
const FooterLinkImg = styled.img``;
const FooterContent = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #1e1e1e;
  margin-top: 55px;
`;

const FooterComp = () => {
  return (
    <FooterDiv>
        <FooterHeader>ICCL</FooterHeader>
        <FooterLinks>
          <FooterLinkImg src={facebookIcon} alt="" width="" height="" />
          <FooterLinkImg src={googleIcon} alt="" width="" height="" />
          <FooterLinkImg src={linkedinIcon} alt="" width="" height="" />
          <FooterLinkImg src={youtubeIcon} alt="" width="" height="" />
          <FooterLinkImg src={twitterIcon} alt="" width="" height="" />
        </FooterLinks>
        <FooterContent>
          (c) International Classic Composite Ltd. (ICCL)
        </FooterContent>
      </FooterDiv>
  )
}

export default FooterComp