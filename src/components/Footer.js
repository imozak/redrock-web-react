import styled from "@emotion/styled";
import React, { useState, forwardRef } from "react";
import { Link } from "react-router-dom";

const Footer = ({ screenWidth, screenHeight }) => {
  const a = 1;
  return (
    <>
      <FooterContainer />
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

export default Footer;
