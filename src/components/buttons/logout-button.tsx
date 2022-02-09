import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LogoutButton: React.FC = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="button__logout"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </button>
  );
};
