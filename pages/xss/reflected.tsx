import { GetServerSideProps } from "next";
import * as React from "react";

interface Props {
  message: string;
}
const Reflected: React.FC<Props> = ({ message }) => {
  return <p dangerouslySetInnerHTML={{ __html: message }} />;
};
// /xss/reflected?message=%3Cscript%3Ealert(1)%3C/script%3E
const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
  res.setHeader("X-XSS-Protection", "0");

  let message = new URL(
    req.url!,
    `http://${req.headers.host}`
  ).searchParams.get("message");
  if (message == null) {
    message = "hello, world";
  }

  return {
    props: {
      message,
    },
  };
};

export { getServerSideProps };

export default Reflected;
