import React, { useEffect, useState } from "react";
import { CodeSnippet } from "../components/code-snippet";
import { getAdminResource } from "../services/message-service";

export const AdminPage = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const getMessage = async () => {
      const { data, error } = await getAdminResource();

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
      <h1 className="content__title">Admin Page</h1>
      <div className="content__body">
        <p>
          This page retrieves a <strong>admin message</strong> from an external
          API.
          <br />
          <br />
          <strong>
            Only authenticated users with the <code>read:admin-messages</code>{" "}
            permission should access this page.
          </strong>
        </p>
        <CodeSnippet title="Admin Message" code={message} />
      </div>
    </div>
  );
};
