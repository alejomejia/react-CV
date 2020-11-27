import React from "react";

import Emoji from "../../Emoji";

import { Wrapper, Title, Item, Text } from "./styles";

const SidebarContact = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Item>
        <Text>
          <a href="mailto:alejomejiacuartas@outlook.com">
            alejomejiacuartas@outlook.com
          </a>
        </Text>
        <Emoji icon="✉️" />
      </Item>
      <Item>
        <Text>
          <a href="tel:+573192160752">+573192160752</a>
        </Text>
        <Emoji icon="📱" />
      </Item>
      <Item>
        <Text>Medellin, Colombia, South America</Text>
        <Emoji icon="🌎" />
      </Item>
    </Wrapper>
  );
}

export default SidebarContact;
