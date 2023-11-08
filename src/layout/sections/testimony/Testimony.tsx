import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitile";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Countainer } from "../../../components/Countainer";
import { S } from "../skills/skill/Skills_Styles";

export const Testimony: React.FC = () => {
  return (
    <StyledTestimony id={"testimony"}>
      <Countainer>
        <SectionTitle>Testimony</SectionTitle>
        <FlexWrapper direction={"column"} align={"center"}>
          <S.IconWrapper>
            <Icon iconId={"quote"} />
          </S.IconWrapper>
          <Slider />
        </FlexWrapper>
      </Countainer>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  position: relative;
  min-height: 50vh;

  ${S.IconWrapper} {
    margin: 40px 0 72px;
  }
`;
