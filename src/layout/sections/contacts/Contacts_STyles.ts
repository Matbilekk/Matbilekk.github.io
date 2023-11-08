import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Contacts = styled.section`
position:relative;`;
const Form = styled.form`
  width: 100%;
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  max-width: 540px;
  margin: 0 auto;

  textarea {
    resize: none;
    height: 155px;
  }
`;
const Field = styled.input`
  width: 100%;
  border: 1px solid #4a4a4a;
  background-color: ${theme.colors.secondaryBg};
  padding: 7px 15px;
  font-family: "Poppins", sans-serif;

  color: ${theme.colors.font};
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.6px;

  &::placeholder {
    color: ${theme.colors.placeholderColor};
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 1px solid #4a4a4a;
  }
`;


export const S = {
    Field,
    Form,
    Contacts

}