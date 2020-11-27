import React from "react";

import { Icon } from "./styles";

const Emoji = ({ label, icon }) => {
  return (
    <Icon role="img" aria-label={label}>
      ️{icon}
    </Icon>
  );
}

export default Emoji;
