import styled from "@emotion/styled";
import React, { useState, forwardRef, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = ({ screenWidth, screenHeight }) => (
  <>
    <HomeContainer>
      <ContentContainer style={{ height: "95vmin" }}>
        <ImageComponent
          src="imgs/RedRockImg01.jpg"
          alt="main page img"
          screenWidth={screenWidth}
          screenHeight={screenHeight}
        />
        <ContentWrapper
          screenWidth={screenWidth}
          screenHeight={screenHeight}
          style={{ marginTop: "-24vmin" }}
        >
          <p
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              letterSpacing: "0.2rem",
              color: "#E2E2E2",
            }}
          >
            PROMOTIONAL TEXT
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              fontWeight: "300",
              color: "#E2E2E2",
              lineHeight: "2rem",
              letterSpacing: "0.05rem",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </ContentWrapper>
      </ContentContainer>

      <ContentContainer style={{ height: "100vmin" }}>
        <ContentWrapper screenWidth={screenWidth} screenHeight={screenHeight}>
          <p
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              letterSpacing: "0.2rem",
              color: "#E2E2E2",
            }}
          >
            PORTFOLIOS
          </p>
          <PortfolioContainer>
            <PortfolioLogoBox />
            <PortfolioLogoBox />
            <PortfolioLogoBox />
            <PortfolioLogoBox />
            <PortfolioLogoBox />
            <PortfolioLogoBox />
            <PortfolioLogoBox />
            <PortfolioLogoBox />
            <PortfolioLogoBox />
            <PortfolioLogoBox />
            <PortfolioLogoBox />
            <PortfolioLogoBox />
            <PortfolioLogoBox />
            <PortfolioLogoBox />
            <PortfolioLogoBox />
          </PortfolioContainer>
        </ContentWrapper>
      </ContentContainer>
    </HomeContainer>
  </>
);

const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: #231f1e;

  display: flex;
  flex-direction: column;

  & * {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

const ContentWrapper = styled.div`
  position: relative;

  width: ${(props) => (props.screenWidth > props.screenHeight ? "70%" : "90%")};
`;

const ImageComponent = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: ${(props) =>
    props.screenWidth > props.screenHeight ? "100%" : "auto"};
  height: ${(props) =>
    props.screenWidth > props.screenHeight ? "auto" : "100%"};
  mix-blend-mode: lighten;
  opacity: 0.55;
`;

const PortfolioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
`;

const PortfolioLogoBox = styled.div`
  width: 15rem;
  height: 9rem;
  background-color: white;
`;

export default HomePage;
