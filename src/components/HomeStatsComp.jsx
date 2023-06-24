import React from 'react'
import styled from 'styled-components';
import tshirtLogo from "./../static/tshirtLogo.svg";
import machineLogo from "./../static/machineLogo.svg";
import men from "./../static/menCorcle.svg";
import women from "./../static/womenCircle.svg";
import { PieChart } from "react-minimal-pie-chart";

const StatisticsDiv = styled.div`
  text-align: center;
`;
const StatisticsHeader = styled.h2`
  font-family: "Times New Roman";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 74px;
  text-align: center;
  color: #1e1e1e;
`;
const StatisticsSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 220px;
`;

const StatisticsSection1 = styled.div``;
const StatisticsSection1Title = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 0px;
  color: #2f58cd;
  margin-top: 20px;
`;
const StatisticsSection1Subtitle = styled.h5`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  color: #1e1e1e;
  margin-top: 0;
`;

const StatisticsSection2 = styled.div`
  width: 240px;
`;
const StatisticsSection2Info = styled.div`
  margin-top: -190px;
`;
const StatisticsSection2InfoHeading = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.215111px;
  color: #848a9c;
  margin-bottom: 0;
`;
const StatisticsSection2InfoStat = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.276571px;
  color: #3354f4;
  margin-top: 0;
`;
const StatisticsSection2Label = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: "Roboto", sans-serif;
  margin-top: 0px;
`;
const StatisticsSection2LabelWomen = styled.span``;
const StatisticsSection2LabelWomenImg = styled.img``;
const StatisticsSection2LabelMen = styled.span``;
const StatisticsSection2LabelMenImg = styled.img``;

const StatisticsSection3 = styled.div``;
const StatisticsSection3Stat = styled.h4`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 75px;
  color: #2f58cd;
  margin: 0;
`;
const StatisticsSection3Title = styled.h5`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  text-align: justify;
  color: #1e1e1e;
  margin: 0;
`;

const HomeStatsComp = () => {
  return (
    <StatisticsDiv>
        <StatisticsHeader>Statistics</StatisticsHeader>
        <StatisticsSection>
            <StatisticsSection1>
                <img width={"180px"} src={tshirtLogo} alt="tshirt" />
                <StatisticsSection1Title>4.5 M+</StatisticsSection1Title>
                <StatisticsSection1Subtitle>Pieces/Year</StatisticsSection1Subtitle>
            </StatisticsSection1>
            <StatisticsSection2>
                <PieChart
                  animate
                  animationDuration={1000}
                  animationEasing="ease-out"
                  center={[50, 50]}
                  style={{
                    width: "240px",
                    height: "240px",
                  }}
                  data={[
                    { title: "Women", value: 60, color: "#9747ff" },
                    { title: "Men", value: 40, color: "#2f58cd" },
                  ]}

                  labelPosition={50}
                  lengthAngle={360}
                  lineWidth={25}
                  paddingAngle={0}
                  radius={50}
                  rounded
                  startAngle={0}
                  viewBoxSize={[100, 100]}
                />
                <StatisticsSection2Label>
                    <StatisticsSection2LabelWomen>
                        <StatisticsSection2LabelWomenImg src={women} alt="Women" />{" "}
                        Women
                    </StatisticsSection2LabelWomen>
                    <StatisticsSection2LabelMen>
                        <StatisticsSection2LabelMenImg src={men} alt="Men" /> Men
                    </StatisticsSection2LabelMen>
                </StatisticsSection2Label>
                <StatisticsSection2Info>
                    <StatisticsSection2InfoHeading>
                        Total employees
                    </StatisticsSection2InfoHeading>
                    <StatisticsSection2InfoStat>20,000+</StatisticsSection2InfoStat>
                </StatisticsSection2Info>
            </StatisticsSection2>
            <StatisticsSection3>
                <img src={machineLogo} width={"103px"} alt="machine" />
                <StatisticsSection3Stat>35+</StatisticsSection3Stat>
                <StatisticsSection3Title>Lines</StatisticsSection3Title>
            </StatisticsSection3>
        </StatisticsSection>
    </StatisticsDiv>
  )
}

export default HomeStatsComp