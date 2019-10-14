import React from "react";

import PortfolioGrid from "../../PortfolioGrid";

import CoverCESUniversity from "../../images/portfolio/ces-university.jpg";
import CoverHolaDr from "../../images/portfolio/hola-dr.jpg";
import CoverInsightCrime from "../../images/portfolio/insight-crime.jpg";
import CoverEficacia from "../../images/portfolio/eficacia.jpg";
import CoverCIPractident from "../../images/portfolio/ci-practident.jpg";
import CoverProlirica from "../../images/portfolio/prolirica-antioquia.jpg";

import { Wrapper, Title, Grid } from "./styles";

function ContentPortfolio({ title }) {
  const PORTFOLIO = {
    item1: {
      title: "CES University",
      work: "Frontend",
      screenshot: CoverCESUniversity
    },
    item2: {
      title: "Hola Dr. Web Redesign",
      work: "UX.UI",
      screenshot: CoverHolaDr
    },
    item3: {
      title: "Insight Crime WebApp",
      work: "UX.UI",
      screenshot: CoverInsightCrime
    },
    item4: {
      title: "Eficacia WebApp",
      work: "UX.UI + Frontend",
      screenshot: CoverEficacia
    },
    item5: {
      title: "CIPractident Website",
      work: "Frontend",
      screenshot: CoverCIPractident
    },
    item6: {
      title: "Prolirica de Antioquia Website",
      work: "Frontend",
      screenshot: CoverProlirica
    }
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      <p>Some latest projects...</p>
      <Grid>
        <PortfolioGrid {...PORTFOLIO.item1} />
        <PortfolioGrid {...PORTFOLIO.item2} />
        <PortfolioGrid {...PORTFOLIO.item3} />
        <PortfolioGrid {...PORTFOLIO.item4} />
        <PortfolioGrid {...PORTFOLIO.item5} />
        <PortfolioGrid {...PORTFOLIO.item6} />
      </Grid>
    </Wrapper>
  );
}

export default ContentPortfolio;
