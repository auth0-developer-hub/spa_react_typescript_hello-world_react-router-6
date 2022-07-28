import { Auth0Provider } from "@auth0/auth0-react";
import React, { PropsWithChildren } from "react";

interface Auth0ProviderWithConfigProps {
  children: React.ReactNode;
}

export const Auth0ProviderWithConfig = ({
  children,
}: PropsWithChildren<Auth0ProviderWithConfigProps>): JSX.Element | null => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL;

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
    >
      {children}
    </Auth0Provider>
  );
};
