import styled from "@emotion/styled";
import React, { useState, forwardRef } from "react";
import { Link } from "react-router-dom";

const Navigation = ({ screenWidth, screenHeight }) => {
  const a = 1;
  return (
    <>
      <NavContainer screenWidth={screenWidth} screenHeight={screenHeight}>
        <NavWrapper screenWidth={screenWidth} screenHeight={screenHeight}>
          <img
            draggable="false"
            style={{ width: "auto", height: "65%" }}
            src="logos/Logo_RedRock_White.png"
            alt="로고"
          />
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
        </NavWrapper>
      </NavContainer>
    </>
  );
};

const NavContainer = styled.div`
  position: sticky;
  top: 0;
  margin-top: ${(props) =>
    props.screenWidth > props.screenHeight ? "2rem" : "0.2rem"};
  width: 100%;
  height: 6rem;
  background-color: #231f1e;

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
  color: #cdcdcd;
  font-size: 0.9rem;
  letter-spacing: 0.12rem;

  text-align: center;

  transition: color 0.2s ease-in-out;
`;

export default Navigation;
