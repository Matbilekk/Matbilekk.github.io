import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";


export const SectionTitle = styled.h2`


${font({family:"'Josefin Sans',sans-serif", weight:600, Fmax:36, Fmin:30})}

/* font-family: "Josefin Sans", sans-serif;
font-size: 36px;
font-style: normal;
font-weight: 600;
line-height: normal; */
letter-spacing: 5px;
text-align:center;
position: relative;
margin-bottom: 90px;

&::before{
   
    content:"";
    display:inline-block;
    width:55px;
    height: 1px;
    background-color: ${theme.colors.accent};


    position: absolute;
    left:50%;
    transform:translateX(-50%);
    bottom: -30px;

    @media ${theme.media.mobile} {
        bottom: -24px; 
    }
}


`;