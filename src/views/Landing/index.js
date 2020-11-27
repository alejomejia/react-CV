import React from "react";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Content from "../../components/Content";

import { MainContainer, Container } from "./styles";

const Landing = () => {
  return (
    <MainContainer id="main-container">
      <Header />
      <Container id="container">
        <Sidebar />
        <Content />
      </Container>
    </MainContainer>
  );
}

export default Landing;
