import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitile";
import { Button } from "../../../components/Button";
import { Countainer } from "../../../components/Countainer";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Slogan: React.FC = () => {
  return (
    <StyledSlogan>
      <Countainer>
        <FlexWrapper direction={"column"} align={"center"}>
          <SectionTitle>I Am Available For Freelance</SectionTitle>
          <Button>Hire me</Button>
        </FlexWrapper>
      </Countainer>
    </StyledSlogan>
  );
};
const StyledSlogan = styled.section`
  min-height: 30vh;
`;
