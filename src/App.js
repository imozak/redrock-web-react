import { Outlet, Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Divider, Typography } from "@mui/material";
import React, { useState, forwardRef, useEffect } from "react";
import styled from "@emotion/styled";
import GlobalStyle from "./globals/GlobalStyle";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import ContactPage from "./components/ContactPage";
import PortfolioPage from "./components/PortfolioPage";
import TeamPage from "./components/TeamPage";
import Footer from "./components/Footer";

const App = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    const handleClientSize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };
    handleClientSize();
    window.addEventListener("resize", handleClientSize);

    return () => window.removeEventListener("resize", handleClientSize);
  }, []);

  return (
    <AppContainer>
      <GlobalStyle />
      <Navigation screenWidth={screenWidth} screenHeight={screenHeight} />
      <ContentContainer>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <HomePage screenWidth={screenWidth} screenHeight={screenHeight} />
            }
          />
          <Route
            path="/team"
            element={
              <TeamPage screenWidth={screenWidth} screenHeight={screenHeight} />
            }
          />
          <Route
            path="/portfolio"
            element={
              <PortfolioPage
                screenWidth={screenWidth}
                screenHeight={screenHeight}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <ContactPage
                screenWidth={screenWidth}
                screenHeight={screenHeight}
              />
            }
          />
        </Routes>
        <Footer />
      </ContentContainer>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  background-color: #231f1e;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default App;
