import React from 'react';
import partner1 from "./../static/partner1.png";
import partner2 from "./../static/partner2.png";
import partner3 from "./../static/partner3.png";
import styled from 'styled-components';


const PartnersDiv = styled.div`
  text-align: center;
`;
const PartnersDivHeader = styled.h2`
  font-family: "Times New Roman";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 74px;
  text-align: center;
  color: #1e1e1e;
`;
const PartnersSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 5%;
`;
const Partner = styled.div``;
const PartnerImg = styled.img``;
const PartnerName = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  color: #1e1e1e;
`;

const PartnersComp = () => {
  return (
    <PartnersDiv>
        <PartnersDivHeader>Partners</PartnersDivHeader>
        <PartnersSection>
          <Partner>
            <PartnerImg
              src={partner1}
              alt=""
              width={"340px"}
              height={"200px"}
            />
            <PartnerName>H&M</PartnerName>
          </Partner>
          <Partner>
            <PartnerImg
              src={partner2}
              alt=""
              width={"340px"}
              height={"200px"}
            />
            <PartnerName>Zara</PartnerName>
          </Partner>
          <Partner>
            <PartnerImg
              src={partner3}
              alt=""
              width={"340px"}
              height={"200px"}
            />
            <PartnerName>Dorjibari</PartnerName>
          </Partner>
        </PartnersSection>
      </PartnersDiv>
  )
}

export default PartnersComp