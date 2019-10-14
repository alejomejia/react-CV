import React, { Component } from 'react';
import './style/PortfolioGrid.sass';

class PortfolioGrid extends Component{

  render(){
    return(
      <div className="portfolio-grid-item">
        <div className="portfolio-grid-item--heading">
          <h5 className="portfolio-grid-item--heading-work">{this.props.work}</h5>
          <h4 className="portfolio-grid-item--heading-title">{this.props.title}</h4>
        </div>
        <figure className="portfolio-grid-item--screenshot">
          <img src={this.props.screenshot} alt="Portfolio item" />
        </figure>
      </div>
    )
  }

}

export default PortfolioGrid;