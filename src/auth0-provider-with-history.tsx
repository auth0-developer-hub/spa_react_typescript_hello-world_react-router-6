import { Auth0Provider } from "@auth0/auth0-react";
import React, { PropsWithChildren } from "react";

export const Auth0ProviderWithHistory = ({
  children,
}: PropsWithChildren<any>): JSX.Element | null => {
  const domain: string | undefined = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId: string | undefined = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const audience: string | undefined = process.env.REACT_APP_AUTH0_AUDIENCE;

  if (!(domain && clientId && audience)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      audience={audience}
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  );
};
