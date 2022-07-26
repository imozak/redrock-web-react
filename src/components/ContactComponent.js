import styled from "@emotion/styled";
import React, { useState, useEffect, useRef, useCtextback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const fadeInAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const textFromTopAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const textFromBottomAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const ContactComponent = ({ screenWidth, screenHeight }) => {
  const elementRef = useRef(null);
  const [textWidth, setTextWidth] = useState(200);

  const handleTextWidth = () => {
    let value = 0;
    if (elementRef.current !== undefined && elementRef.current !== null) {
      if (elementRef.current.clientWidth !== null)
        value = elementRef.current.clientWidth * 1.26;
    }
    setTextWidth(value);
  };

  useEffect(() => {
    handleTextWidth();
    window.addEventListener("resize", handleTextWidth);
    window.addEventListener("DOMContentLoaded", handleTextWidth);

    return () => {
      window.removeEventListener("resize", handleTextWidth);
      window.removeEventListener("DOMContentLoaded", handleTextWidth);
    };
  }, []);

  return (
    <>
      <ContentContainer>
        <ContentWrapper screenWidth={screenWidth} screenHeight={screenHeight}>
          <motion.div
            variants={textFromTopAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: "0.2", delay: "0" }}
          >
            <LogoImgComponent
              textWidth={textWidth}
              draggable="false"
              src="logos/Logo_RedRock_redBlack_transparent.png"
              alt="로고"
            />
          </motion.div>
          {screenWidth > screenHeight ? (
            <motion.div
              variants={textFromBottomAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: "0.34", delay: "0" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div
                  ref={elementRef}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "1rem",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: "500",
                      letterSpacing: "0.06rem",
                      color: "#E2E2E2",
                    }}
                  >
                    SEOUL, SOUTH KOREA
                  </p>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: "500",
                      color: "#E2E2E2",
                    }}
                  >
                    |
                  </p>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: "500",
                      letterSpacing: "0.06rem",
                      color: "#E2E2E2",
                    }}
                  >
                    LAS VEGAS, UNITED STATES
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            <div
              ref={elementRef}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0rem",
              }}
            >
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "400",
                  letterSpacing: "0.06rem",
                  lineHeight: "0rem",
                  color: "#E2E2E2",
                }}
              >
                info@redrockcapital.io
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  fontWeight: "400",
                  letterSpacing: "0.06rem",
                  lineHeight: "0.6rem",
                  color: "#E2E2E2",
                }}
              >
                SEOUL, SOUTH KOREA
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  fontWeight: "400",
                  letterSpacing: "0.06rem",
                  lineHeight: "0rem",
                  color: "#E2E2E2",
                }}
              >
                LAS VEGAS, UNITED STATES
              </p>
            </div>
          )}
        </ContentWrapper>
      </ContentContainer>
    </>
  );
};

const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 10%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & p {
    -webkit-user-select: text;
    -khtml-user-select: text;
    -moz-user-select: text;
    -o-user-select: text;
    user-select: text;
    -webkit-user-drag: text;
  }
`;

const ContentWrapper = styled.div`
  position: relative;

  width: ${(props) =>
    props.screenWidth > props.screenHeight ? "auto" : "90%"};
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 0.2rem;
`;

const LogoImgComponent = styled.img`
  width: ${(props) => `${props.textWidth}px`};
`;

export default ContactComponent;
