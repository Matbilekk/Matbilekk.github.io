import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from "react";

export const GoTopBtn = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  return (
    <>
      {showBtn && (
        <StyledGoTopBtn>
          <a
            onClick={() => {
              scroll.scrollToTop();
            }}
          >
            <Icon iconId={"top"} />
          </a>
        </StyledGoTopBtn>
      )}
    </>
  );
};

const StyledGoTopBtn = styled.button`
  background-color: rgba (0, 0, 0, 0.3);
  padding: 8px;
  position: fixed;
  right: 30px;
  bottom: 30px;
`;
