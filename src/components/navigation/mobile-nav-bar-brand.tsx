import React from "react";
import { NavLink } from "react-router-dom";

export const MobileNavBarBrand: React.FC = () => {
  return (
    <div className="mobile-nav-bar__brand">
      <NavLink to="/">
        <img
          className="mobile-nav-bar__logo"
          src="https://cdn.auth0.com/blog/hub/code-samples/hello-world/auth0-logo.svg"
          alt="Auth0 logo"
          width="82"
          height="24"
        />
      </NavLink>
    </div>
  );
};
