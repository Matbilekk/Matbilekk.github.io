import { S } from "./Footer_Styles";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";

const socialItemsData = [
  {
    iconId: "insta",
  },
  {
    iconId: "telegram",
  },
  {
    iconId: "vk",
  },
  {
    iconId: "linked",
  },
];

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <FlexWrapper direction={"column"} align={"center"}>
        <S.Name>Vitaliy</S.Name>
        <S.SocialList>
          {socialItemsData.map((s, index) => {
            return (
              <S.SocialItem key={index}>
                <S.SocialLink>
                  <Icon
                    height={"21px"}
                    width={"21px"}
                    viewBox={"0 0 21px 21px"}
                    iconId={s.iconId}
                  />
                </S.SocialLink>
              </S.SocialItem>
            );
          })}
        </S.SocialList>
        <S.Copiright>
          © 2023 Vitaliy Sobolevskiy, All Rights Reserved.
        </S.Copiright>
      </FlexWrapper>
    </S.Footer>
  );
};
