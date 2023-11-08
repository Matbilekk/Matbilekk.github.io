import { S } from "./skill/Skills_Styles";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitile";
import { Skill } from "./skill/skill";
import { Countainer } from "../../../components/Countainer";
import { Fade } from "react-awesome-reveal";

const skillData = [
  {
    iconId: "html",
    title: "HTML5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "link",
    title: "CSS3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "icon-2",
    title: "React",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "icon-3",
    title: "Typescript",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "styled",
    title: "Styled Components",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "social",
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
];

export const Skills = () => {
  return (
    <S.Skills id={"skills"}>
      <Countainer>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap={"wrap"} justify={"space-between"}>
          <Fade cascade={true} damping={0.2}>
            {skillData.map((s, index) => {
              return (
                <Skill
                  iconId={s.iconId}
                  key={index}
                  title={s.title}
                  description={s.description}
                />
              );
            })}
          </Fade>
        </FlexWrapper>
      </Countainer>
    </S.Skills>
  );
};
