import styled from "@emotion/styled";
import React, { useState, forwardRef } from "react";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactPage = ({ screenWidth, screenHeight }) => {
  const a = 1;
  return (
    <>
      <PageContainer>
        <ContentContainer>
          <ContentWrapper screenWidth={screenWidth} screenHeight={screenHeight}>
            <img
              draggable="false"
              style={{ width: "max(40%, 20rem)" }}
              src="logos/Logo_RedRock_redBlack.png"
              alt="로고"
            />
            {screenWidth > screenHeight ? (
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
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0rem",
                }}
              >
                <LocationOnIcon
                  style={{
                    fontSize: "1.4rem",
                    color: "#E2E2E2",
                  }}
                />
                <p
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: "500",
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
                    fontWeight: "500",
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
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
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

export default ContactPage;
