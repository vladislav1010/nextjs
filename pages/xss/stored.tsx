import { GetServerSideProps } from "next";
import * as React from "react";

interface Props {
  messages: { message: string }[];
}
const Stored = ({ messages }: Props) => {
  return (
    <div>
      <ul>
        {messages.map((m, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: m.message }} />
        ))}
      </ul>
      <form
        onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const data = { message: (e.target as any).elements.message.value };

          await fetch(`/api/xss/stored`, {
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
          });
        }}
      >
        <input name={"message"} type={"text"} />
        <br />
        <button type={"submit"}>Send</button>
      </form>
    </div>
  );
};

const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
  res.setHeader("X-XSS-Protection", "0");
  const db = await require("../../database").db();
  const dbMessages = await db.collection("messages").find().toArray();

  const messages = dbMessages.map((m: any) => ({ message: m.message }));

  return {
    props: {
      messages,
    },
  };
};

export { getServerSideProps };

export default Stored;
