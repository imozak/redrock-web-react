import styled from "@emotion/styled";
import React, { useState, forwardRef } from "react";
import { Link } from "react-router-dom";
import { IconButton, Modal } from "@mui/material";
import SegmentIcon from "@mui/icons-material/Segment";

const Navigation = ({ screenWidth, screenHeight }) => {
  const [mobileMenuModalFlag, setMobileMenuModalFlag] = useState(false);

  const openMobileMenu = () => {
    setMobileMenuModalFlag(true);
  };
  const closeMobileMenu = () => {
    setMobileMenuModalFlag(false);
  };

  return (
    <>
      <NavContainer screenWidth={screenWidth} screenHeight={screenHeight}>
        <NavWrapper screenWidth={screenWidth} screenHeight={screenHeight}>
          <Link style={{ height: "65%" }} to="/">
            <img
              draggable="false"
              style={{ width: "auto", height: "100%" }}
              src="logos/Logo_RedRock_White.png"
              alt="로고"
            />
          </Link>
          {screenWidth > screenHeight ? (
            <MenuContainer>
              <Link style={{ height: "100%" }} to="/">
                <MenuTextContainer>
                  <MenuTextItem>HOME</MenuTextItem>
                </MenuTextContainer>
              </Link>

              <Link style={{ height: "100%" }} to="/team">
                <MenuTextContainer>
                  <MenuTextItem>TEAM</MenuTextItem>
                </MenuTextContainer>
              </Link>

              <Link style={{ height: "100%" }} to="/portfolio">
                <MenuTextContainer>
                  <MenuTextItem>PORTFOLIO</MenuTextItem>
                </MenuTextContainer>
              </Link>

              <Link style={{ height: "100%" }} to="/contact">
                <MenuTextContainer>
                  <MenuTextItem>CONTACT</MenuTextItem>
                </MenuTextContainer>
              </Link>
            </MenuContainer>
          ) : (
            <MenuContainer>
              <IconButton
                disableRipple
                onClick={openMobileMenu}
                sx={{
                  marginRight: "0.4rem",
                }}
              >
                <SegmentIcon
                  fontSize="large"
                  sx={{
                    color: "#cdcdcd",
                  }}
                />
              </IconButton>
            </MenuContainer>
          )}
        </NavWrapper>
      </NavContainer>

      <Modal
        open={mobileMenuModalFlag}
        onClose={closeMobileMenu}
        sx={{
          backdropFilter: "blur(17px)",
        }}
      >
        <ModalMenuContainer>
          <Link
            style={{ width: "100%", height: "7rem" }}
            to="/"
            onClick={closeMobileMenu}
          >
            <MenuTextContainer>
              <MenuTextItem>HOME</MenuTextItem>
            </MenuTextContainer>
          </Link>

          <Link
            style={{ width: "100%", height: "7rem" }}
            to="/team"
            onClick={closeMobileMenu}
          >
            <MenuTextContainer>
              <MenuTextItem>TEAM</MenuTextItem>
            </MenuTextContainer>
          </Link>

          <Link
            style={{ width: "100%", height: "7rem" }}
            to="/portfolio"
            onClick={closeMobileMenu}
          >
            <MenuTextContainer>
              <MenuTextItem>PORTFOLIO</MenuTextItem>
            </MenuTextContainer>
          </Link>

          <Link
            style={{ width: "100%", height: "7rem" }}
            to="/contact"
            onClick={closeMobileMenu}
          >
            <MenuTextContainer>
              <MenuTextItem>CONTACT</MenuTextItem>
            </MenuTextContainer>
          </Link>
        </ModalMenuContainer>
      </Modal>
    </>
  );
};

const NavContainer = styled.div`
  position: absolute;
  top: 0;
  margin-top: ${(props) =>
    props.screenWidth > props.screenHeight ? "2rem" : "0.2rem"};
  width: 100%;
  height: 6rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  z-index: 100;
`;

const NavWrapper = styled.div`
  position: relative;
  width: ${(props) => (props.screenWidth > props.screenHeight ? "90%" : "96%")};
  //max-width: min(210vh, 3860px); // default ratio is 16:9
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  & * {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
  }
`;

const MenuContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  & * {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
  }
`;

const ModalMenuContainer = styled.div`
  position: absolute;
  top: 7rem;
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  & * {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
  }

  & p {
    font-size: 1.2rem !important;
    font-weight: 600 !important;
  }
`;

const MenuTextContainer = styled.div`
  position: relative;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  box-sizing: border-box;
  padding: 0 3vmin;

  transition: all 0.2s ease-in-out;

  &:hover {
    background: #f5f5f50a;
    & p {
      color: #f5f5f5;
    }
  }
`;

const MenuTextItem = styled.p`
  color: #dedede;
  font-size: 0.9rem;
  letter-spacing: 0.12rem;

  text-align: center;

  transition: color 0.2s ease-in-out;
`;

export default Navigation;
