import React from "react";
import { Menu } from "../menu/Menu";
import { S } from "./../HeaderMenuStyles";

export const DesktopMenu: React.FC = () => {
  return (
    <S.StyledDesktopMenu>
      <Menu />
    </S.StyledDesktopMenu>
  );
};
