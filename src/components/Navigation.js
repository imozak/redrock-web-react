import styled from "@emotion/styled";
import React, { useState, forwardRef } from "react";
import { Link } from "react-router-dom";
import { IconButton, Modal, Fade } from "@mui/material";
import SegmentIcon from "@mui/icons-material/Segment";
import ContactComponent from "./ContactComponent";

const Navigation = ({ screenWidth, screenHeight }) => {
  const [expandableMenuModalFlag, setExpandableMenuModalFlag] = useState(false);

  const openExpandableMenu = () => {
    setExpandableMenuModalFlag(true);
  };
  const closeExpandableMenu = () => {
    setExpandableMenuModalFlag(false);
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

          <MenuContainer>
            <IconButton
              disableRipple
              onClick={openExpandableMenu}
              sx={{
                marginRight: "0.4rem",
              }}
            >
              <SegmentIcon
                fontSize="large"
                sx={{
                  color: "#F0F0F0",
                }}
              />
            </IconButton>
          </MenuContainer>
        </NavWrapper>
      </NavContainer>

      <Modal
        open={expandableMenuModalFlag}
        onClose={closeExpandableMenu}
        sx={{
          backdropFilter: "blur(17px)",
          display: "flex",
          justifyContent: "center",
        }}
        closeAfterTransition
      >
        <Fade in={expandableMenuModalFlag}>
          <ModalMenuContainer
            screenWidth={screenWidth}
            screenHeight={screenHeight}
          >
            <Link
              style={{ width: "100%", height: "7rem" }}
              to="/"
              onClick={closeExpandableMenu}
            >
              <MenuTextContainer>
                <MenuTextItem>HOME</MenuTextItem>
              </MenuTextContainer>
            </Link>

            <Link
              style={{ width: "100%", height: "7rem" }}
              to="/team"
              onClick={closeExpandableMenu}
            >
              <MenuTextContainer>
                <MenuTextItem>TEAM</MenuTextItem>
              </MenuTextContainer>
            </Link>

            <Link
              style={{ width: "100%", height: "7rem" }}
              to="/partners"
              onClick={closeExpandableMenu}
            >
              <MenuTextContainer>
                <MenuTextItem>PARTNERS</MenuTextItem>
              </MenuTextContainer>
            </Link>

            <Link
              style={{ width: "100%", height: "7rem" }}
              to="/portfolio"
              onClick={closeExpandableMenu}
            >
              <MenuTextContainer>
                <MenuTextItem>PORTFOLIO</MenuTextItem>
              </MenuTextContainer>
            </Link>

            <Link
              style={{ width: "100%", height: "7rem" }}
              to="/aboutus"
              onClick={closeExpandableMenu}
            >
              <MenuTextContainer>
                <MenuTextItem>ABOUT US</MenuTextItem>
              </MenuTextContainer>
            </Link>

            <ContactComponent />
          </ModalMenuContainer>
        </Fade>
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
  top: 0;
  width: ${(props) =>
    props.screenWidth > props.screenHeight ? "20rem" : "100%"};
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & * {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
  }

  & p {
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 0.5rem;
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
  font-size: 1rem;
  letter-spacing: 0.12rem;

  text-align: center;

  transition: color 0.2s ease-in-out;
`;

export default Navigation;
