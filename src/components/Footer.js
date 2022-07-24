import styled from "@emotion/styled";
import React, { useState, forwardRef } from "react";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = ({ screenWidth, screenHeight }) => {
  const a = 1;
  return (
    <>
      <FooterContainer>
        <ContentContainer>
          <ContentWrapper screenWidth={screenWidth} screenHeight={screenHeight}>
            <p
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                letterSpacing: "0.06rem",
                color: "#E2E2E2",
              }}
            >
              RED ROCK CAPITAL
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <LocationOnIcon
                style={{
                  fontSize: "1rem",
                  color: "#E2E2E2",
                }}
              />
              <div
                style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
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
          </ContentWrapper>
        </ContentContainer>
      </FooterContainer>
    </>
  );
};

const FooterContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30vh;
  background-color: #231f1e;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

const ContentWrapper = styled.div`
  position: relative;

  width: ${(props) => (props.screenWidth > props.screenHeight ? "70%" : "90%")};

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 0.2rem;
`;

export default Footer;
