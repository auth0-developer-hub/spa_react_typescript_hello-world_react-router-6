import React from "react";
import { NavBarBrand } from "./navigation/nav-bar-brand";
import { NavBarTab } from "./navigation/nav-bar-tab";

export const NavBar: React.FC = () => {
  const NavBarTabs = () => (
    <div className="nav-bar__tabs">
      <NavBarTab path="/profile" label="Profile" />
      <NavBarTab path="/public" label="Public" />
      <NavBarTab path="/protected" label="Protected" />
      <NavBarTab path="/admin" label="Admin" />
    </div>
  );

  const NavBarButtons = () => <div className="nav-bar__buttons" />;

  return (
    <div className="nav-bar__container">
      <nav className="nav-bar">
        <NavBarBrand />
        <NavBarTabs />
        <NavBarButtons />
      </nav>
    </div>
  );
};
