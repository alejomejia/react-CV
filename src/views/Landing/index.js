import React, { Component } from "react";

import { Header } from "../components";

import Sidebar from "../components/Sidebar/Sidebar";
import Content from "../../components/Content/Content";

import { MainContainer, Container } from "./styles";

class Landing extends Component {
  render() {
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
}

export default Landing;
