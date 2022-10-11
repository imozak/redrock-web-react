import {
  Outlet,
  Link,
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Box, Divider, Typography, IconButton, Modal } from "@mui/material";
import React, { useState, forwardRef, useEffect } from "react";
import styled from "@emotion/styled";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globals/GlobalStyle";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import PortfolioPage from "./components/PortfolioPage";
import TeamPage from "./components/TeamPage";
import Footer from "./components/Footer";
import PartnersPage from "./components/PartnersPage";
import AboutUsPage from "./components/AboutUsPage";

const App = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const location = useLocation();

  const handleClientSize = () => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  };

  useEffect(() => {
    handleClientSize();
    window.addEventListener("resize", handleClientSize);

    return () => {
      window.removeEventListener("resize", handleClientSize);
    };
  }, []);

  return (
    <AppContainer>
      <GlobalStyle />
      <Navigation screenWidth={screenWidth} screenHeight={screenHeight} />
      <ContentContainer>
        <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route
              path="/"
              exact
              element={
                <HomePage
                  screenWidth={screenWidth}
                  screenHeight={screenHeight}
                />
              }
            />
            <Route
              path="/team"
              element={
                <TeamPage
                  screenWidth={screenWidth}
                  screenHeight={screenHeight}
                />
              }
            />
            <Route
              path="/partners"
              element={
                <PartnersPage
                  screenWidth={screenWidth}
                  screenHeight={screenHeight}
                />
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
              path="/aboutus"
              element={
                <AboutUsPage
                  screenWidth={screenWidth}
                  screenHeight={screenHeight}
                />
              }
            />
          </Routes>
        </AnimatePresence>
      </ContentContainer>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  position: relative;
  width: min(100vw, 3680px);
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
