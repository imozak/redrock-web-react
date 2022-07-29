import styled from "@emotion/styled";
import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Divider } from "@mui/material";
import Footer from "./Footer";

const springTrainsition = {
  type: "spring",
  stiffness: 150,
  damping: 15,
};

const bgAnimation = {
  initial: { opacity: 1 },
  animate: { opacity: 0 },
  exit: { opacity: 1 },
};

const fromLeftAnimation = {
  initial: {
    opacity: 0,
    x: -100,
    transition: { ...springTrainsition, delay: "0.2" },
  },
  animate: { opacity: 1, x: 0 },
  exit: {
    opacity: 0,
    x: 100,
    transition: {
      type: "linear",
      duration: 0.1,
      delay: 0,
    },
  },
};

const fromDownAnimation = {
  initial: {
    opacity: 0,
    y: 100,
    transition: { ...springTrainsition },
  },
  animate: { opacity: 1, y: 0 },
  exit: {
    opacity: 0,
    y: 100,
    transition: {
      type: "linear",
      duration: 0.1,
      delay: 0,
    },
  },
};
const widthExtendAnimation = {
  initial: {
    width: "0%",
    transition: { ...springTrainsition, delay: "0.2" },
  },
  animate: {
    width: "100%",
  },
  exit: {
    width: "0%",
    transition: {
      type: "linear",
      duration: 0.1,
      delay: 0,
    },
  },
};

const PortfolioPage = ({ screenWidth, screenHeight }) => {
  const imageElementRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const onImageLoaded = () => setImageLoaded(true);

  useEffect(() => {
    if (imageElementRef.current !== null && imageElementRef !== undefined) {
      imageElementRef.current.addEventListener("load", onImageLoaded);
    }
    return () => {
      if (imageElementRef.current !== null && imageElementRef !== undefined)
        imageElementRef.current.removeEventListener("load", onImageLoaded);
    };
  }, [imageElementRef]);

  return (
    <>
      <PageContainer>
        <ContentContainer style={{ height: "100vh" }}>
          <ImageComponent
            onLoad={onImageLoaded}
            ref={imageElementRef}
            src="imgs/bg03.jpg"
            alt="portfolio page img"
            screenWidth={screenWidth}
            screenHeight={screenHeight}
          />

          {imageLoaded ? (
            <motion.div
              initial={{
                opacity: 1,
                transition: { duration: "0.25", delay: "0" },
              }}
              animate={{
                opacity: 0,
                transition: { duration: "0.25", delay: "0" },
              }}
              exit={{
                opacity: 1,
                transition: { duration: "0.1", delay: "0" },
              }}
            >
              <ImageCover />
            </motion.div>
          ) : (
            <ImageCover />
          )}

          <ContentWrapper
            screenWidth={screenWidth}
            screenHeight={screenHeight}
            style={{ zIndex: "3" }}
          >
            <motion.div
              variants={fromLeftAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <p
                style={{
                  fontSize: "2.4rem",
                  fontWeight: "800",
                  letterSpacing: "0.7rem",
                  color: "#F0F0F0",
                  lineHeight: "0rem",
                }}
              >
                PORTFOLIO
              </p>
              <motion.div
                variants={widthExtendAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ ...springTrainsition, delay: "0.3" }}
              >
                <Divider
                  sx={{
                    width: screenWidth > screenHeight ? "95%" : "100%",
                    borderColor: "#C2C2C2",
                    mt: 0,
                    mb: 5,
                  }}
                  orientation="horizontal"
                />
              </motion.div>
            </motion.div>
            <LogoContainer>
              <LogoMotionDiv
                variants={fromDownAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ ...springTrainsition, delay: "0.1" }}
              >
                <LogoComponent
                  src="logos/logo_codedao_allwhite.png"
                  alt="logo image"
                  screenWidth={screenWidth}
                  screenHeight={screenHeight}
                />
                <LogoText>CODEDAO</LogoText>
              </LogoMotionDiv>
              <LogoMotionDiv
                variants={fromDownAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ ...springTrainsition, delay: "0.2" }}
              >
                <LogoComponent
                  src="logos/Logo_falconx.png"
                  alt="logo image"
                  screenWidth={screenWidth}
                  screenHeight={screenHeight}
                />
                <LogoText>FALCONX (EXITED)</LogoText>
              </LogoMotionDiv>

              <LogoMotionDiv
                variants={fromDownAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ ...springTrainsition, delay: "0.3" }}
              >
                <LogoComponent
                  src="logos/logo_coindcx_allwhite.png"
                  alt="logo image"
                  screenWidth={screenWidth}
                  screenHeight={screenHeight}
                />
                <LogoText>COINDCX</LogoText>
              </LogoMotionDiv>

              <LogoMotionDiv
                variants={fromDownAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ ...springTrainsition, delay: "0.4" }}
              >
                <LogoComponent
                  src="logos/logo_ftx_allwhite.png"
                  alt="logo image"
                  screenWidth={screenWidth}
                  screenHeight={screenHeight}
                />
                <LogoText>FTX</LogoText>
              </LogoMotionDiv>

              <LogoMotionDiv
                variants={fromDownAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ ...springTrainsition, delay: "0.5" }}
              >
                <LogoComponent
                  src="logos/Logo_cardiohealth.png"
                  alt="logo image"
                  screenWidth={screenWidth}
                  screenHeight={screenHeight}
                />
                <LogoText>CARDIO HEALTH</LogoText>
              </LogoMotionDiv>
            </LogoContainer>
          </ContentWrapper>
        </ContentContainer>
      </PageContainer>

      <Footer screenWidth={screenWidth} screenHeight={screenHeight} />
    </>
  );
};

const PageContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: #231f1e;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

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

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 4rem;
  row-gap: 2rem;
`;

const LogoMotionDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LogoComponent = styled.img`
  height: ${(props) =>
    props.screenWidth > props.screenHeight ? "3vmax" : "9vmin"};
  opacity: 0.9;
`;

const LogoText = styled.p`
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  color: #bfbfbf;
  text-align: center;
  line-height: 0;

  display: none;
`;

export default PortfolioPage;
