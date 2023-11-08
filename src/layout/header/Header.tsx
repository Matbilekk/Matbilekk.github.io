import React from "react";
import { Countainer } from "../../components/Countainer";
import { FlexWrapper } from "../../components/FlexWrapper";
import { DesktopMenu } from "./headerMenu/desktopMenu/DeskTopMenu";
import { Logo } from "../../components/logo/Logo";
import { MobileMenu } from "./headerMenu/mobileMenu/MobileMenu";
import { S } from "./Header_Styles";

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <S.Header>
      <Countainer>
        <FlexWrapper justify="space-between" align="center">
          <Logo />

          {width < breakpoint ? <MobileMenu /> : <DesktopMenu />}
        </FlexWrapper>
      </Countainer>
    </S.Header>
  );
};
