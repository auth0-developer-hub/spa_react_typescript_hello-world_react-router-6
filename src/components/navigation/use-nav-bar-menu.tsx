import { useState } from "react";

export enum MenuStates {
  OPEN = "open",
  CLOSED = "closed",
}

export const useNavBarMenu = () => {
  const [menuStatus, setMenuStatus] = useState<MenuStates>(MenuStates.CLOSED);

  const openMenu = () => {
    document.body.classList.add("scroll-lock");
    setMenuStatus(MenuStates.OPEN);
  };

  const closeMenu = () => {
    document.body.classList.remove("scroll-lock");
    setMenuStatus(MenuStates.CLOSED);
  };

  return {
    openMenu,
    closeMenu,
    menuStatus,
  };
};
