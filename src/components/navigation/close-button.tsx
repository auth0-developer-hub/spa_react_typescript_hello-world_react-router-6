import React from "react";

interface CloseButtonProps {
  handleClick: () => void;
}

export const CloseButton: React.FC<CloseButtonProps> = ({ handleClick }) => {
  return (
    <span
      onClick={handleClick}
      className="mobile-nav-bar__toggle material-icons"
    >
      close
    </span>
  );
};
