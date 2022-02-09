import React from "react";
import { CloseButton } from "./navigation/close-button";
import { MenuButton } from "./navigation/menu-button";
import { MobileNavBarBrand } from "./navigation/mobile-nav-bar-brand";
import { MobileNavBarTab } from "./navigation/mobile-nav-bar-tab";
import { MenuStates, useNavBarMenu } from "./navigation/use-nav-bar-menu";

export const MobileNavBar: React.FC = () => {
  const { openMenu, closeMenu, menuStatus } = useNavBarMenu();

  const NavBarTabs = () => (
    <div className="mobile-nav-bar__tabs">
      <MobileNavBarTab
        path="/profile"
        label="Profile"
        handleClick={closeMenu}
      />
      <MobileNavBarTab path="/public" label="Public" handleClick={closeMenu} />
      <MobileNavBarTab
        path="/protected"
        label="Protected"
        handleClick={closeMenu}
      />
      <MobileNavBarTab path="/admin" label="Admin" handleClick={closeMenu} />
    </div>
  );

  const NavBarButtons = () => <div className="mobile-nav-bar__buttons" />;

  return (
    <div className="mobile-nav-bar__container">
      <nav className="mobile-nav-bar">
        <MobileNavBarBrand />
        {menuStatus === MenuStates.CLOSED && (
          <MenuButton handleClick={openMenu} />
        )}
        {menuStatus === MenuStates.OPEN && (
          <CloseButton handleClick={closeMenu} />
        )}
        {menuStatus === MenuStates.OPEN && (
          <div className="mobile-nav-bar__menu">
            <NavBarTabs />
            <NavBarButtons />
          </div>
        )}
      </nav>
    </div>
  );
};
