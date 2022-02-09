# React/TypeScript: React Router 6 Code Sample

This TypeScript code sample demonstrates how to build a React Single-Page Application (SPA) using React Router `v6` to manage navigation and page routing.

Visit the ["React/TypeScript Apps: Security and Identity Management"](https://auth0.com/developers/hub/code-samples/spa/react-typescript) section of the ["Auth0 Developer Hub"](https://auth0.com/developers/hub) to explore how you can secure this React application by implementing authentication using Auth0.

[![Security and Identity Management for React and TypeScript](https://cdn.auth0.com/blog/hub/code-samples/spa/react-typescript.png)](https://auth0.com/developers/hub/code-samples/spa/react-typescript)


## Run the Project

Install the project dependencies:

```bash
npm install
```

Create a `.env` file under the root project directory and populate it with the following environment variables:

```bash
REACT_APP_API_SERVER_URL=http://localhost:6060
```

Run the application in development mode:

```bash
npm start
```

Visit [`http://localhost:4040/`](http://localhost:4040/) to access the starter application.

The starter React project offers a functional application that consumes data from an external API to hydrate the user interface. As such, you need to set up and run an API server like the ["Express.js/JavaScript: Basic API Code Sample
"](https://github.com/auth0-developer-hub/api_express_javascript_hello-world/tree/starter).

All the starter React application routes are public. However, you can use Auth0 to get an ID token to hydrate the user profile information present in the `/profile` page. With Auth0, you can also get an access token to make a secure call to an external API to hydrate the messages present in the `/protected` and `/admin` pages.



