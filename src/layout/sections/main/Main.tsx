import myPhoto from "../../../assets/images/foto_new.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Countainer } from "../../../components/Countainer";
import { S } from "./Main_Styles";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";

export const Main: React.FC = () => {
  return (
    <S.Main id={"home"}>
      <Countainer>
        <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
          <div>
            <S.SmallText>Hi There</S.SmallText>
            <S.Name>
              I am <span>Vitaliy Sobolevskiy</span>
            </S.Name>

            <S.MainTitle>
              <p>A Web Developer</p>
              <Typewriter
                options={{
                  strings: ["A Web Developer.", "A Frontend Developer."],
                  autoStart: true,
                  loop: true,
                  delay: 55,
                }}
              />
            </S.MainTitle>
          </div>

          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.8}
            glareColor="#363434"
            glarePosition="bottom"
          >
            <S.PhotoWrapper>
              <S.Photo src={myPhoto} alt="myfoto" />
            </S.PhotoWrapper>
          </Tilt>
        </FlexWrapper>
      </Countainer>
    </S.Main>
  );
};
