import React, { useEffect, useState } from "react";
import { CodeSnippet } from "../components/code-snippet";
import { getPublicResource } from "../services/message-service";

export const PublicPage = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const getMessage = async () => {
      const { data, error } = await getPublicResource();

      if (data) {
        setMessage(JSON.stringify(data, null, 2));
      }

      if (error) {
        setMessage(error.message);
      }
    };

    getMessage();
  }, []);

  return (
    <div className="content-layout">
      <h1 className="content__title">Public Page</h1>
      <div className="content__body">
        <p>
          This page retrieves a <strong>public message</strong> from an external
          API.
          <br />
          <br />
          <strong>Any visit can access this page.</strong>
        </p>
        <CodeSnippet title="Public Message" code={message} />
      </div>
    </div>
  );
};
