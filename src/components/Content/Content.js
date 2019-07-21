import React, { Component } from 'react';
import './style/Content.sass';

import ContentAbout from './ContentAbout';
import ContentExperience from './ContentExperience';
import ContentPortfolio from './ContentPortfolio';
import ContentReferences from './ContentReferences';

class Content extends Component{

  render(){
    return(
      <article id="content">
        <div className="item">
          <ContentAbout title="About me" />
        </div>
        <div className="item">
          <ContentExperience title="Experience" />
        </div>
        <div className="item">
          <ContentPortfolio title="Portfolio" />
        </div>
        <div className="item">
          <ContentReferences title="References" />
        </div>
      </article>
    )
  }

}

export default Content;