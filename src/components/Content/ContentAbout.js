import React, { Component } from 'react';

class ContentAbout extends Component{

  render(){
    return(
      <div className="about-me">
        <h3>{this.props.title}</h3>
        <p>I am a passionate web designer and frontend developer with 6 years of experience in different digital agencies from my city. 
          I like to learn all the time about my career and learn new languages.</p>
        <p>In my free time, I like to play videogames, watch TV series and movies, and ride in my bike.</p>
      </div>
    )
  }

}

export default ContentAbout;