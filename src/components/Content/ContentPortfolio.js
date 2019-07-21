import React, { Component } from 'react';

import PortfolioGrid from '../PortfolioGrid';

import CoverCESUniversity from '../../images/portfolio/ces-university.jpg';
import CoverHolaDr from '../../images/portfolio/hola-dr.jpg';
import CoverInsightCrime from '../../images/portfolio/insight-crime.jpg';
import CoverEficacia from '../../images/portfolio/eficacia.jpg';

class ContentPortfolio extends Component{

  render(){

    const PORTFOLIO = {
      item1 : {
        title : "CES University",
        work : "Frontend",
        screenshot : CoverCESUniversity
      },
      item2 : {
        title : "Hola Dr. Web Redesign",
        work : "UX.UI",
        screenshot : CoverHolaDr
      },
      item3 : {
        title : "Insight Crime WebApp",
        work : "UX.UI",
        screenshot : CoverInsightCrime
      },
      item4 : {
        title : "Eficacia WebApp",
        work : "UX.UI + Frontend",
        screenshot : CoverEficacia
      }
    }

    return(
      <div className="portfolio">
        <h3>{this.props.title}</h3>
        <p>Some latest projects...</p>
        <div className="portfolio-grid">
          <PortfolioGrid {...PORTFOLIO.item1} />
          <PortfolioGrid {...PORTFOLIO.item2} />
          <PortfolioGrid {...PORTFOLIO.item3} />
          <PortfolioGrid {...PORTFOLIO.item4} />
        </div>
      </div>
    )
  }

}

export default ContentPortfolio;