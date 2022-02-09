import React from "react";

interface MenuButtonProps {
  handleClick: () => void;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ handleClick }) => {
  return (
    <span
      onClick={handleClick}
      className="mobile-nav-bar__toggle material-icons"
    >
      menu
    </span>
  );
};
