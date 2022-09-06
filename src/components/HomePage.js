import styled from "@emotion/styled";
import React, { useState, useRef, useEffect } from "react";
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

const springTrainsition = {
  type: "spring",
  stiffness: 150,
  damping: 15,
};

const HomePage = ({ screenWidth, screenHeight }) => {
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
        <ContentContainer style={{ height: "95vh" }}>
          <ImageComponent
            onLoad={onImageLoaded}
            ref={imageElementRef}
            src="imgs/bg01.jpg"
            alt="main page img"
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
            style={{ marginTop: "-10vh", zIndex: "3" }}
          >
            <motion.div
              initial={{
                opacity: 0,
                x: 150,
                transition: { ...springTrainsition, delay: "0.1" },
              }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: -100,
                transition: {
                  type: "linear",
                  duration: 0.1,
                  delay: 0,
                },
              }}
            >
              <p
                style={{
                  fontSize: "min(3.5rem, 11vw)",
                  fontWeight: "700",
                  letterSpacing: "0.0rem",
                  color: "#E2E2E2",
                  whiteSpace: "pre-wrap",
                  margin: "0",
                }}
              >
                {"We Help Good Startups\nBuild Great Companies"}
              </p>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                x: -150,
                transition: { ...springTrainsition, delay: "0.2" },
              }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: 100,
                transition: {
                  type: "linear",
                  duration: 0.1,
                  delay: 0,
                },
              }}
            >
              <p
                style={{
                  width: "min(53rem, 90vw)",
                  fontSize: "1.04rem",
                  fontWeight: "300",
                  color: "#F0F0F0",
                  lineHeight: "1.85rem",
                  letterSpacing: "0.05rem",
                  whiteSpace: "pre-wrap",
                }}
              >
                “Good is the enemy of great. And that is one of the key reasons
                why we have so little that becomes great. We don&apos;t have
                great schools, principally because we have good schools. We
                don&apos;t have great government, principally because we have
                good government. Few people attain great lives, in large part
                because it is just so easy to settle for a good life.”
              </p>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: -150,
                transition: { ...springTrainsition, delay: "2" },
              }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: 100,
                transition: {
                  type: "linear",
                  duration: 0.1,
                  delay: 0,
                },
              }}
            >
              <p
                style={{
                  width: "56rem",
                  fontSize: "1rem",
                  fontWeight: "500",
                  color: "#F0F0F0",
                  lineHeight: "1rem",
                  letterSpacing: "0.05rem",
                  whiteSpace: "pre-wrap",
                }}
              >
                - Jim Collins -
              </p>
            </motion.div>
          </ContentWrapper>
        </ContentContainer>

        <Footer screenWidth={screenWidth} screenHeight={screenHeight} />
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 7vh;
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
