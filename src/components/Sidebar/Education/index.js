import React from "react";

import { Wrapper, Title, Item, Subtitle, Description } from "./styles";

import { PLATZI, SENA, ADOBE, GEEKBOSS } from "../../../config/const";

function SidebarEducation({ title }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Item>
        <Subtitle>Google Analytics & SEO {GEEKBOSS}</Subtitle>
        <Description>
          Certification for take the presential Google Analytics and SEO
          training from Geekboss
        </Description>
      </Item>
      <Item>
        <Subtitle>Git and GitHub Certificate {PLATZI}</Subtitle>
        <Description>
          Certification for take the Git and GitHub professional course from
          Platzi
        </Description>
      </Item>
      <Item>
        <Subtitle>User Experience & User Interface Design {PLATZI}</Subtitle>
        <Description>
          Certification for take User Experience and User Interface Design from
          Platzi
        </Description>
      </Item>
      <Item>
        <Subtitle>Multimedia Production Technology {SENA}</Subtitle>
        <Description>
          A nicely complete technology, I've learned from graphic design and
          illustration to web development using HTML5, CSS3 and JavaScript
        </Description>
      </Item>
      <Item>
        <Subtitle>Photoshop & Flash CS5 Certificate {ADOBE}</Subtitle>
        <Description>
          Certification for take Photoshop and Flash CS5 presencial evaluation
          from Adobe
        </Description>
      </Item>
    </Wrapper>
  );
}

export default SidebarEducation;
