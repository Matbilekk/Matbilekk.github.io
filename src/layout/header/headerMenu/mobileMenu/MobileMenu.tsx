import { S } from "./../HeaderMenuStyles";
import { Menu } from "../menu/Menu";
import { useState } from "react";

export const MobileMenu: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const onBurgerBtnClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <S.MobilMenu>
      <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopup
        isOpen={menuIsOpen}
        onClick={() => {
          setMenuIsOpen(false);
        }}
      >
        <Menu />
      </S.MobileMenuPopup>
    </S.MobilMenu>
  );
};
