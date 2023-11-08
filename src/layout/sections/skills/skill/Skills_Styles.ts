import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

const Skill = styled.div`
  width: 330px;
  flex-grow: 1;
  padding: 42px 20px 52px;

  @media ${theme.media.mobile} {
    padding: 62px 0 40px;
  }
`;
const SkillTitle = styled.h3`
  margin: 70px 0 15px;
  text-transform: uppercase;
`;
const SkillText = styled.p`
  text-align: center;
`;
export const IconWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 80px;
    height: 80px;
    transform: rotate(45deg) translate(-50%, -50%);
    flex-shrink: 0;
    background-color: #ffffff18;

    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: top left;
  }
`;

const Skills = styled.section`
position:relative`;

export const S = {
    IconWrapper,
    SkillText,
    SkillTitle,
    Skill,
    Skills

}