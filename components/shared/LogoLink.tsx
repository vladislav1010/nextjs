import * as React from "react";
import { chakra } from "@chakra-ui/react";
import Link from "next/link";
import { HTMLChakraProps } from "@chakra-ui/react";

const ChakraLink = chakra(Link);

const LogoLink = (props: HTMLChakraProps<"a">) => (
  <ChakraLink href={"/"} {...props}>
    <svg
      width="82"
      height="24"
      viewBox="0 0 82 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.596 0H10.8l2.408 7.511h7.797l-6.307 4.473 2.409 7.55c4.058-2.957 5.39-7.438 3.898-12.031L18.596 0zM.593 7.511H8.39L10.799 0H3L.593 7.511C-.9 12.104.433 16.585 4.492 19.543l2.407-7.551L.593 7.511zm3.899 12.024L10.799 24l6.306-4.465L10.8 14.99l-6.307 4.545zM63.343 7.32c-1.842 0-3.022.837-3.572 2.2h-.143V3.34H56.86v16.163h2.83v-7.017c0-1.738 1.077-2.735 2.6-2.735 1.483 0 2.36.95 2.36 2.568v7.184h2.83v-7.655c-.007-2.91-1.65-4.528-4.138-4.528zm11.785-4.011c-3.827 0-6.14 2.998-6.147 8.205 0 5.222 2.296 8.26 6.147 8.26 3.843.008 6.148-3.03 6.148-8.26-.008-5.199-2.32-8.205-6.148-8.205zm-3.221 8.205c.008-3.804 1.244-5.805 3.221-5.805 1.356 0 2.36.925 2.862 2.719l-6.035 4.385a16.46 16.46 0 0 1-.048-1.3zm3.221 5.828c-1.395 0-2.424-.988-2.91-2.902l6.067-4.41c.048.463.072.957.072 1.492 0 3.827-1.236 5.82-3.229 5.82zm-31.009-2.886c0 1.826-1.307 2.735-2.56 2.735-1.362 0-2.264-.965-2.264-2.488V7.495h-2.83v7.647c0 2.886 1.642 4.52 4.003 4.52 1.802 0 3.061-.948 3.611-2.288h.128v2.137h2.743V7.495h-2.83v6.96zM30.062 7.312c-2.527 0-4.465 1.124-5.087 3.317l2.64.374c.279-.82 1.076-1.523 2.463-1.523 1.316 0 2.033.67 2.033 1.85v.048c0 .813-.853.853-2.974 1.076-2.328.248-4.56.95-4.56 3.652 0 2.36 1.73 3.612 4.018 3.612 1.882 0 3.006-.885 3.524-1.89h.096v1.651h2.719v-8.037c.008-3.174-2.575-4.13-4.872-4.13zm2.057 7.853c0 1.34-1.076 2.472-2.782 2.472-1.18 0-2.026-.542-2.026-1.579 0-1.084.95-1.538 2.21-1.722.74-.103 2.224-.287 2.598-.59v1.42zM52.994 4.49h-2.83v3.006h-1.715v2.256h1.714v6.65c-.016 2.257 1.627 3.373 3.756 3.31a5.58 5.58 0 0 0 1.443-.216v-2.24c-.215.031-.718.095-1.077.103-.71.016-1.283-.247-1.283-1.395V9.752h2.36V7.502h-2.368V4.489z"
        fill="#1E212A"
      />
    </svg>
  </ChakraLink>
);

export default LogoLink;