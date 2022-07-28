import styled from "@emotion/styled";
import React, { useState, forwardRef, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";

const textFromRightAnimation = {
  initial: { opacity: 0, x: 150 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const textFromLeftAnimation = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 150 },
};

const bgAnimation = {
  initial: { opacity: 1 },
  animate: { opacity: 0 },
  exit: { opacity: 1 },
};

const springTrainsition = {
  type: "spring",
  stiffness: 150,
  damping: 15,
};

const HomePage = ({ screenWidth, screenHeight }) => (
  <>
    <PageContainer>
      <ContentContainer style={{ height: "95vh" }}>
        <ImageComponent
          src="imgs/bg01.jpg"
          alt="main page img"
          screenWidth={screenWidth}
          screenHeight={screenHeight}
        />
        <motion.div
          variants={bgAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: "0.32", delay: "0" }}
        >
          <ImageCover />
        </motion.div>
        <ContentWrapper
          screenWidth={screenWidth}
          screenHeight={screenHeight}
          style={{ marginTop: "-10vh", zIndex: "3" }}
        >
          <motion.div
            variants={textFromRightAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ ...springTrainsition, delay: "0.1" }}
          >
            <p
              style={{
                fontSize: "3rem",
                fontWeight: "700",
                letterSpacing: "0.2rem",
                color: "#E2E2E2",
              }}
            >
              PROMOT123 TEXT
            </p>
          </motion.div>
          <motion.div
            variants={textFromLeftAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ ...springTrainsition, delay: "0.2" }}
          >
            <p
              style={{
                fontSize: "1.1rem",
                fontWeight: "300",
                color: "#F0F0F0",
                lineHeight: "2rem",
                letterSpacing: "0.05rem",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </motion.div>
        </ContentWrapper>
      </ContentContainer>

      <Footer screenWidth={screenWidth} screenHeight={screenHeight} />
    </PageContainer>
  </>
);

const PageContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 5vh;
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

const ImageCover = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  height: 100%;
  background-color: #231f1e;
  z-index: 2;
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
  background-color: #231f1e;

  mix-blend-mode: lighten;
  opacity: 0.55;
  z-index: 0;
`;

const PortfolioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
`;

const PortfolioLogoBox = styled.div`
  width: 10rem;
  height: 6rem;
`;

export default HomePage;
