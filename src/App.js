import { Outlet, Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Divider, Typography } from "@mui/material";
import styled from "@emotion/styled";
import scrollbar from "smooth-scrollbar";
import logo from "./logo.svg";
import "./App.css";
import GlobalStyle from "./globals/GlobalStyle";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import ContactPage from "./components/ContactPage";
import PortfolioPage from "./components/PortfolioPage";
import TeamPage from "./components/TeamPage";

const App = () => {
  // smooth scroll 설정
  scrollbar.init(document.querySelector("#smooth-scroll"));

  return (
    <AppContainer id="smooth-scroll">
      <GlobalStyle />
      <Navigation />
      <ContentContainer>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </ContentContainer>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  position: fixed !important;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default App;
