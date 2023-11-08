import { SectionTitle } from "../../../components/SectionTitile";
import { Button } from "../../../components/Button";
import { Countainer } from "../../../components/Countainer";
import { S } from "./Contacts_STyles";
import emailjs from "@emailjs/browser";
import { ElementRef, useRef } from "react";

export const Contacts: React.FC = () => {
  const form = useRef<ElementRef<"form">>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_4trd1nb",
        "template_mtoado9",
        form.current,
        "AfU9kKjtkR4cq68IU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <S.Contacts id={"contacts"}>
      <Countainer>
        <SectionTitle>Contact</SectionTitle>
        <S.Form ref={form} onSubmit={sendEmail}>
          <S.Field required placeholder={"Name"} name={"user_name"} />
          <S.Field required placeholder={"Email"} name={"email"} />
          <S.Field required placeholder={"Subject"} name={"subject"} />
          <S.Field
            required
            placeholder={"Message"}
            as={"textarea"}
            name={"message"}
          />
          <Button type={"submit"}>Send Message</Button>
        </S.Form>
      </Countainer>
    </S.Contacts>
  );
};
