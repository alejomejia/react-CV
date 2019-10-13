import React, { Component } from "react";

import JobExperience from "../JobExperience";

class ContentExperience extends Component {
  render() {
    const EXPERIENCE = {
      freelance: {
        title: "Web Designer and UX.UI Developer",
        link: "http://alejandromejia.co",
        company: "Freelance",
        time: "January 2013 - Today"
      },
      tenpearls: {
        title: "UX.UI Developer Analyst",
        link: "https://10pearls.com/",
        company: "10Pearls",
        time: "September 2019 - Today"
      },
      integro: {
        title: "UX.UI Developer",
        link: "https://www.integ.ro",
        company: "Integ.ro",
        time: "July 2018 - September 2019"
      },
      interficto: {
        title: "Web Leader",
        link: "https://www.interficto.com",
        company: "Interficto",
        time: "September 2015 - June 2018"
      },
      sigital: {
        title: "Production Director",
        link: "https://www.facebook.com/sigitalmarketingventas/",
        company: "Sigital",
        time: "January 2013 - June 2015"
      }
    };

    return (
      <div className="experience">
        <h3>{this.props.title}</h3>
        <JobExperience {...EXPERIENCE.freelance}>
          <p>
            I work as freelance with my personal brand making websites in
            WordPress for pymes. I use my talent as designer and web developer
            to delivery the best product to my clients. My job here start from
            making quotes, search of inspiration and web references, mockup
            elaboration and creative concept. Normally I use Adobe XD for
            prototyping. In develop I work with WordPress templates, making code
            changes to adapt the design and functionality, and I use SASS for
            compile and order CSS.
          </p>
        </JobExperience>
        <JobExperience {...EXPERIENCE.tenpearls}>
          <p>
            My work in this nice global company is to build interfaces inside
            ReactJS. I don't usually work with classes but with hooks. I use
            libraries like{" "}
            <a
              href="https://material-ui.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Material UI
            </a>
            ,{" "}
            <a
              href="https://www.telerik.com/kendo-react-ui/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kendo UI
            </a>{" "}
            and{" "}
            <a
              href="https://www.styled-components.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Styled Components
            </a>
            . I work with scrum methodology and every day I communicate in
            English with the team and the client in the United States. I really
            love how the work in ReactJS can be organized and I always try to
            make all the components reusable and have all the files and code
            organized.
          </p>
        </JobExperience>
        <JobExperience {...EXPERIENCE.integro}>
          <p>
            My work here was to use my knowledge in UI and UX to make webapps
            mockups and turn them to life! In this company I worked in a lot of
            really interesting projects like the new web portal for{" "}
            <a
              href="http://www.ces.edu.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              CES University
            </a>
            , a webapp for big data indexing and searching and a new LMS
            platform for a big client in the country to name a few.
          </p>
        </JobExperience>
        <JobExperience {...EXPERIENCE.interficto}>
          <p>
            My main task in this company was to make cool websites in WordPress
            using templates with code modifications. My job position here was
            about communication with the company clients, cleaning WordPress
            virus from client websites, hosting maintenance, design and web
            development, team and client capacitations, sending mailchimp
            campaigns and many other tasks.
          </p>
        </JobExperience>
        <JobExperience {...EXPERIENCE.sigital}>
          <p>
            In this company I started as a web developer, then I was promoted to
            project manager and finally I worked as a production manager. A lot
            of teamwork here. My job was to watch the design and development
            area of the company. I used WordPress as CMS, documentation and
            process optimization, suppliers management, QA, website optimization
            to achieve goals and generate conversions and research of platforms
            to improve processes. Web design in overtime for projects.
          </p>
        </JobExperience>
      </div>
    );
  }
}

export default ContentExperience;
