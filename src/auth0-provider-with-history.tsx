import { AppState, Auth0Provider } from "@auth0/auth0-react";
import React, { PropsWithChildren } from "react";
import { createBrowserHistory } from "history";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";

const history = createBrowserHistory();

export const Auth0ProviderWithHistory = ({
  children,
}: PropsWithChildren<any>): JSX.Element | null => {
  const domain: string | undefined = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId: string | undefined = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const audience: string | undefined = process.env.REACT_APP_AUTH0_AUDIENCE;

  const onRedirectCallback = (appState: AppState) => {
    history.replace(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId && audience)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      audience={audience}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <HistoryRouter history={history}>{children}</HistoryRouter>
    </Auth0Provider>
  );
};
