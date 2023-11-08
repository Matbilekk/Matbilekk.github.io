import { Link } from "../../../../components/Link";
import { S } from "./Works_Styles";
import { Button } from "../../../../components/Button";

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
};

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
  return (
    <S.Work>
      <S.ImageWrapper>
        <S.Image src={props.src} alt="img" />
        <Button>view project</Button>
      </S.ImageWrapper>

      <S.Description>
        <S.Title>{props.title}</S.Title>
        <S.Text>{props.text}</S.Text>
        <Link active href={"#"}>
          Demo
        </Link>
        <Link href={"#"}>Code</Link>
      </S.Description>
    </S.Work>
  );
};
