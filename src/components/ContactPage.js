import styled from "@emotion/styled";
import React, { useState, forwardRef } from "react";
import { Link } from "react-router-dom";

const ContactPage = ({ screenWidth, screenHeight }) => {
  const a = 1;
  return (
    <>
      <HomeContainer />
    </>
  );
};

const HomeContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 200vh;
  background-color: #231f1e;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const NavWrapper = styled.div`
  position: relative;
  width: 94%;
  max-width: min(210vh, 3860px); // default ratio is 16:9
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
export default ContactPage;
