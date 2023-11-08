import React from "react";
import { S } from "../HeaderMenuStyles";

// const items = ["Home", "Skills", "Works", "Testimony", "Contacts"];

const items = [
  {
    title: "Home",
    href: "home",
  },
  {
    title: "Skills",
    href: "skills",
  },
  {
    title: "Works",
    href: "works",
  },
  {
    title: "Testimony",
    href: "testimony",
  },
  {
    title: "Contacts",
    href: "contacts",
  },
];

export const Menu: React.FC = () => {
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <S.MenuItem key={index}>
            <S.NavLink
              to={item.href}
              smooth={true}
              spy={true}
              offset={50}
              duration={500}
            >
              {item.title}
              <S.Mask>
                <span>{item.title}</span>
              </S.Mask>
              <S.Mask>
                <span>{item.title}</span>
              </S.Mask>
            </S.NavLink>
          </S.MenuItem>
        );
      })}
    </ul>
  );
};
